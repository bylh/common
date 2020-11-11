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

function _htmlParser(html) {
    // 匹配所有span标签 注意：match与replace方法的正则匹配需要保持一致，因为是以index匹配替换的,必须对应
    let spans = html.match(/<\/?span[^>]*>/gi) || [];

    if (Array.isArray(spans) && spans.length > 0) {
        spans = spans.map((tag, index) => ({
            content: tag,
            type: tag === '</span>' ? 'eTag' : 'sTag',
            matched: false,
            index
        }));
        spans.forEach((item, index) => {
            if (item.type === 'eTag' && !item.matched) { // 是结束标签并且没有配对过，找最近的开始标签
                for (let i = index - 1; i >= 0; i--) {
                    if (spans[i].type === 'sTag' && !spans[i].matched) {
                        let result = {};
                        // 可转换为标签形式的style属性转换为标签形式
                        spans[i].content = spans[i].content.replace(/style\s*=\s*('[^']*'|"[^"]*")/ig, (current, style) => {
                            result = _styleToTag(style);
                            if (result.callStr) {
                                return `style="${result.callStr}"`;
                            }
                            return style;
                        });
                        if (result.tagArray && result.tagArray.length > 0) {
                            // 将u标签等追加到开始标签的前面（比如<span><u>）
                            spans[i].content += result.tagArray.map(tag => `<${tag}>`).join('');
                            // 将u标签等追加到结束标签的后面（比如</u></span>）
                            item.content = result.tagArray.map(tag => `</${tag}>`).reverse().join('') + item.content;
                        }
                        spans[i].matched = true;
                        break; // 匹配到到最近的一个开始标签就终止
                    }
                }
                item.matched = true;
            }
        });

        // 处理span标签中的特定样式转特定标签
        let i = 0;
        html = html.replace(/<\/?span[^>]*>/gi, function (str, $1) {
            let span = spans[i];
            if (!span) {
                return str;
            }
            i++;
            return span.content;
        });
    }
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