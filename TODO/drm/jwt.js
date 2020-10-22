/*
 * Desc: json web token implementation
 * Author: guochanghui
 */
var crypto = require('crypto');

/* global configuration */
const DEFAULT_ALG = 'HS256';
const DEFAULT_SECRET = '43FJDLAKF79043JLFDJAKLLFJALK4J321431JLJLAFFJLA';
const HMAC_METHOD = {
    'HS256': 'sha256',
    'HS384': 'sha384',
    'HS512': 'sha512',
};

/* main functions */

function base64urlEscape(str){
    return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

function base64urlUnescape(str){
    str += '='.repeat(str.length % 4);
    return str.replace(/-/, '+').replace(/_/, '/');
}

function base64urlEncode(str){
    str = Buffer(str).toString('base64');
    return base64urlEscape(str);
}

function base64urlDecode(str){
    str = base64urlUnescape(str);
    return Buffer(str, 'base64').toString();
}

/* sign:
 * signature message, and return safe base64 string.
 */
function sign(msg, secret, alg){
    if (typeof msg !== 'string' ||
        typeof secret !== 'string' ||
        typeof alg !== 'string'){
        throw new Error('Not a string');
    }
    var _alg = HMAC_METHOD[alg];
    if (_alg === undefined){
        throw new Error('Algorithm not supported');
    }
    var hmac = crypto.createHmac(_alg, secret)
    hmac.update(msg);
    return base64urlEncode(hmac.digest());
}


/*
 * encode a payload to jwt token
 */
function encode(payload, secret, alg){
    var segments = [];
    // generate header
    secret = secret || DEFAULT_SECRET;
    alg = alg || DEFAULT_ALG;
    var header = {'typ': 'JWT', 'alg': alg};
    segments.push(base64urlEncode(JSON.stringify(header)));
    segments.push(base64urlEncode(JSON.stringify(payload)));
    var msg = segments.join('.');
    var signature = sign(msg, secret, alg);
    segments.push(signature);

    return segments.join('.');
}

function check_exp(payload){
    if (payload instanceof Array){
        var payload_ = [];
        for (var i in payload){
            if (payload[i].exp){
                if (new Date() <= new Date(payload[i].exp)){
                    payload_.push(payload[i]);
                }
            }
        }
        return payload_;
    } else {
        if (payload.exp){
            if (new Date() > new Date(payload.exp)){
                throw new Error('token has expired');
            }
        }
        return payload;
    }
}

/*
 * Desc: decode a token to a payload, and check its expires
 */
function decode(token, secret){
    secret = secret || DEFAULT_SECRET;

    var segments = token.split('.');
    if (segments.length !== 3){
        throw new Error('token structure error');
    }
    var header64 = segments[0];
    var payload64 = segments[1];
    var signature = segments[2];

    // extract algrithm
    var header = JSON.parse(base64urlDecode(header64));
    var alg = header['alg'];
    if (alg === undefined){
        throw new Error('header doesnot contain "alg" field');
    }
    var payload = JSON.parse(base64urlDecode(payload64));
    // check the signature whether is legal
    var msg = segments.slice(0, 2).join('.');
    var _signature = sign(msg, secret, alg);
    if (_signature !== signature){
        throw new Error('token signature error');
    }
    // check this token whethor expired
    payload = check_exp(payload);
    return payload;
}

module.exports = {
    base64urlEncode: base64urlEncode,
    base64urlDecode: base64urlDecode,
    sign: sign,
    encode: encode,
    decode: decode,
}
