var path = require('path');
var loaderUtils = require('loader-utils');

var markdownCompiler = require('./markdown-compiler');

module.exports = function(source) {
    this.cacheable();

    var options = loaderUtils.getOptions(this) || {};
    Object.defineProperty(this._compilation, '__vueMarkdownOptions__', {
        value: options,
        enumerable: false,
        configurable: true
    });
    return markdownCompiler.call(this, source);
};
