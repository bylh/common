const cheerio = require('cheerio');

function _htmlFilter(html) {
    // 不是字符串或者为空，或者不含有标签直接返回
    if (!html || (typeof html) !== 'string' || !html.match(/<\/?.+?\/?>/g)) {
        return html;
    }
    // if (!html.match(/style="[^=>]*"([(\s+\w+=)|>])/g)) {

    // }
    // 需要保留的css属性
    const keepCss = ['text-indent', 'text-decoration', 'text-decoration-line', 'float', 'font-style', 'text-align', 'vertical-align'];
    // 需要转换为标签的css属性
    const tagCss = {
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
    const $ = cheerio.load(html, {
        decodeEntities: false,
        _useHtmlParser2: true,
        // xmlMode: true
    });
    // 将span中部分css转为标签，并去除span标签
    while ($('span').length > 0) {
        $('span').each((index, span) => {
            let spanDom = $(span);
            let sTag = '';
            let eTag = ''
            Object.keys(tagCss).forEach(attr => {
                const attrValue = spanDom.css(attr);
                Object.keys(tagCss[attr]).forEach(key => {
                    if (key === attrValue) {
                        sTag += `<${tagCss[attr][key]}>`;
                        eTag = `</${tagCss[attr][key]}>` + eTag;
                    }
                });
            })
            spanDom.replaceWith(sTag + spanDom.html() + eTag)
        })
    }
    $('*').each((index, e) => {
        node = $(e);
        // 转换img和td style中的width和height
        if (e.name === 'img' || e.name === 'td') {
            let width = node.css('width');
            let height = node.css('height');
            if (width) {
                node.attr('width', width)
            }
            if (height) {
                node.attr('height', height)
            }
        }
        let style = node.css();
        if (style) {
            node.removeAttr('style');
            Object.keys(style).forEach(key => {
                if (keepCss.indexOf(key) !== -1) {
                    node.css(key, style[key])
                }
            })
        }
        node.removeAttr('id')
        node.removeAttr('class')

    })

    html = $.html();
    return html;
}
module.exports = {
    _htmlFilter,
};