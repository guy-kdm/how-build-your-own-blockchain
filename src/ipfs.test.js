// const {publish} = require('./ipfs.js');
const publish = require('./ipfs.js');

async function check() {
  var claimBuffer = new Buffer('');
  console.log('before publish');
  var hash = await publish(claimBuffer);
  console.log('after publish');
  console.log('hash', hash);
}
check();
