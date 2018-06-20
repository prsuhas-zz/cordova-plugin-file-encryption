/**
 * FileEncryption.js
 *
 * @overview Easy to use cryptographic operations for Cordova.
 * @author Suhas P R
 * @license MIT
*/
var exec = require('cordova/exec');

var PLUGIN_NAME = 'FileEncryption';

var FileEncryption = {
  encrypt: function (path, password, success, error) {
    if (!path || arguments.length === 0) return;
    
    exec(success, error, PLUGIN_NAME, 'encrypt', [path, password]);
  },
  decrypt: function (path, password, success, error) {
    if (!path || arguments.length === 0) return;

    exec(success, error, PLUGIN_NAME, 'decrypt', [path, password]);
  },
};

module.exports = FileEncryption;
