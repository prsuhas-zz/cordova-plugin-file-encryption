cordova-plugin-file-encryption
====

> Cordova File Encryption Plugin for Android and iOS.

## Install

```bash
$ cordova plugin add cordova-plugin-file-encryption
```

## Usage

```javascript
var encryptor = cordova.plugins.fileEncryption,
    key = 'someKey';


function success(encryptedFile) {
  console.log('Encrypted file: ' + encryptedFile);

  safe.decrypt(encryptedFile, key, function(decryptedFile) {
    console.log('Decrypted file: ' + decryptedFile);
  }, error);
}

function error() {
  console.log('Error with cryptographic operation');
}

encryptor.encrypt('file:/storage/sdcard/DCIM/Camera/1404177327783.jpg', key, success, error);
```

## API

The plugin exposes the following methods:

```javascript
cordova.plugins.fileEncryption.encrypt(file, key, success, error);
cordova.plugins.fileEncryption.decrypt(file, key, success, error);
```

#### Parameters:
* __file:__ A string representing a local URI
* __key:__ A key for the crypto operations
* __success:__ Optional success callback
* __error:__ Optional error callback
