require("dotenv").config();
const crypto = require("crypto");

module.exports = {
  decrypt: decrypt,
  encrypt: encrypt,
};

function decrypt(input) {
  var mykey = crypto.Decipher(process.env.ALGORYTHM, process.env.CRYPTO_PW);
  var mystr = mykey.update(input, "hex", "utf8");
  mystr += mykey.final("utf8");
  return mystr;
}

function encrypt(input) {
  var mykey = crypto.Cipher(process.env.ALGORYTHM, process.env.CRYPTO_PW);
  var mystr = mykey.update(input, "utf8", "hex");
  mystr += mykey.final("hex");
  return mystr;
}
