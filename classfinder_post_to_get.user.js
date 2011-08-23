// ==UserScript==
// @name           classfinder post to get
// @namespace      https://wadmin.wwu.edu/pls/wwis/wwsktime.SelClass
// @description    convert post to get
// @include        https://admin.wwu.edu/pls/wwis/wwsktime.SelClass
// ==/UserScript==
document.forms[0].method = 'GET';
