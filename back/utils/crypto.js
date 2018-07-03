const crypto = require('crypto');

const encrypt = (text) => {
  const hmac = crypto.createHmac('sha256', 'secredo');
  return hmac.update(text).digest('hex');

}

module.exports = encrypt;