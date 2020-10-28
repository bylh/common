// 将css属性变成对象
function _getCssList(css) {
    // 将转义的引号换成非转义的引号
    css = css.replace(/&quot;/g, '"');

    var list = {},
        // 匹配css属性（例如： color: white; text-align: center ）[]中的-是特殊字符，需要转义
        reg = /\s*([\w\\-]+)\s*:([^;]*)(;|$)/g,
        match;
    while ((match = reg.exec(css))) {
        var key = match[1].toLowerCase().trim(),
            val = match[2].trim();
        list[key] = val.replace('"', '');
    }
    return list;
}
// 过滤Style属性
function _getCanCssStr(str, isPaste = false) {
    // 提取style字符串
    return str.replace(/style\s*=\s*('[^']*'|"[^"]*")/igm, function ($0, $1, $2) {
        let cssJson = _getCssList($1);
        let styleStr = '';

        const map = new Map([
            ['text-indent', '0px'],
            ['text-decoration', ''],
            ['text-decoration-line', ''],
            ['font-style', 'normal'],
            ['text-align', 'left']
        ]);

        if (!isPaste) {
            map.set('float', '');
        }

        for (const key in cssJson) {
            if (map.has(key)) {
                let value = cssJson[key];
                if (value === '' || value === map.get(key)) {
                    continue;
                }

                styleStr += key + ':' + value + ';';
            }
        }

        return styleStr !== '' ? `style="${styleStr}"` : '';
    });
}

// 将Style属性转换成u、s、b、i标签
function _styleToTag(style) {
    let styleJson = _getCssList(style);
    const tagList = {
        'text-decoration-line': {
            'underline': 'u',
            'line-through': 's'
        },
        'text-decoration': {
            'underline': 'u',
            'line-through': 's'
        },
        'font-weight': {
            'bold': 'b'
        },
        'font-style': {
            'italic': 'i'
        }
    };

    let callStr = '';
    let tagArray = [];

    for (let key in styleJson) {
        let value = styleJson[key];
        if (tagList[key] && tagList[key][value]) {
            tagArray.push(tagList[key][value]);
        } else {
            callStr += `${key}: ${value};`;
        }
    }
    return {
        tagArray,
        callStr
    };
}

// 过滤
function _htmlParser(html) {
    let tagList = [];
    // 优先处理span标签中的特定样式转特定标签
    html = html.replace(/<\/?span[^>]*>/gi, function (str, $1) {
        if (str === '</span>') {
            tagList.forEach(tag => {
                str = `${str}</${tag}>`;
            });
            tagList = [];
        } else {
            str = str.replace(/style\s*=\s*('[^']*'|"[^"]*")/ig, function (current, style) {
                if (style) {
                    let { tagArray, callStr } = _styleToTag(style);
                    tagList = [...tagArray];
                    if (callStr) {
                        return `style="${callStr}"`;
                    }
                }
                return '';
            });
            tagList.forEach(tag => {
                str = `<${tag}>${str}`;
            });

        }
        return str;
    });
    // 去除所有span标签
    html = html.replace(/<\/?span.*?>/gi, '');
    // 处理所有标签的style样式
    html = _getCanCssStr(html);
    // 删除所有class/id
    // html = html.replace(/\s?(class|id)=('|").*?('|")/igm, '');
    return html;
}
module.exports = {
    _htmlParser,
};