const axios = require('axios');

exports.postToSlack = async (message) => {
  try {
    await axios.post(process.env.SLACK_WEBHOOK_URL, { text: message });
    return true;
  } catch (err) {
    return false;
  }
};
