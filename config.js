const path = require('path');
const secret = require('./secret.json');

const config = {
  db: {
    client: 'sqlite3',
    dbFilePath: path.join(__dirname, '../db.sqlite'),
  },
  aws: {
    accessKeyId: secret.aws.accessKeyId,
    secretAccessKey: secret.aws.secretAccessKey,
    region: 'us-east-1',
    bucket: 'wewe-imgs',
    s3RootPath: 'https://wewe-imgs.s3.amazonaws.com',
  },
  pageMsgCount: 50,
  gaTrackingId: 'UA-56506279-9',
};

module.exports = config;
