"use strict";

var {fetch} = require('undici');
module.exports = function(url, options) {
  if (/^\/\//.test(url)) {
    url = 'https:' + url;
  }
  return fetch.call(this, url, options);
};

if (!global.fetch) {
  global.fetch = module.exports;
  global.Response = fetch.Response;
  global.Headers = fetch.Headers;
  global.Request = fetch.Request;
}