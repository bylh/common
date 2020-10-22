function setCookie(name = 'drm-test-session-id', value, domain = 'yunxiao.com') {
    const cookie = `${name}=${value}; domain=${domain}`
    // document.cookie = cookie;
    return 'document.cookie=' +  '"' + cookie + '"';
}

// const name = 'drm-test-session-id';
// const value = '';
// const domain = 'yunxiao.com'

// const cookieOpt = setCookie(name, value, domain)
// console.log(cookieOpt);

module.exports = {
    setCookie
}