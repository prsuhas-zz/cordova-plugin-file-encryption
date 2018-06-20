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
    var encryptSuccess, encryptError;

    if (!path || arguments.length === 0) return;

    encryptSuccess = onSuccess.bind(null, success);
    encryptError = onError.bind(null, error);

    exec(success, error, PLUGIN_NAME, 'encrypt', [path, password]);
  },
  decrypt: function (path, password, success, error) {
    var decryptSuccess, decryptError;

    if (!path || arguments.length === 0) return;

    decryptSuccess = onSuccess.bind(null, success);
    decryptError = onError.bind(null, error);

    exec(success, error, PLUGIN_NAME, 'decrypt', [path, password]);
  },
};

module.exports = FileEncryption;
