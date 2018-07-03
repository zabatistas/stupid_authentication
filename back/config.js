
require('dotenv').config();

module.exports = {
  mongodb: {
    url: process.env.MONGO_URL
  },
  mlabdb: {
    url: process.env.MLAB_URL
  },
  secret: process.env.SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  sessionDuration: Number(process.env.SESSION_DURATION)
};
