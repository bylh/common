/*
 * Desc: Advanced Encription Standard wrapper
 * Author: guochanghui
 */

const crypto = require('crypto');
const config = require('./config.local');
const SECRET = config.SECRET;
const ALGO = config.ALGO;

function encript(data, secret, algo){
    secret = secret || SECRET;
    algo = algo || ALGO;
    var cipher = crypto.createCipher(algo, secret);
    var encripted = cipher.update(data, 'utf8', 'hex');
    encripted += cipher.final('hex');
    return encripted;
}

function decript(data, secret, algo){
    secret = secret || SECRET;
    algo = algo || ALGO;
    var decipher = crypto.createDecipher(algo, secret);
    var decripted = decipher.update(data, 'hex', 'utf8');
    decripted += decipher.final('utf8');
    return decripted;
}

module.exports = {
    encript: encript,
    decript: decript,
}
