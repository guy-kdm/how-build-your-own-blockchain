var ipfs = require('ipfs');
// import ipfs from 'ipfs'
var { exec } = require('child_process');
// import {execSync} from 'child_process'
(function startIpfs() {
  console.log('starting daemon');
  exec('ipfs daemon');
  console.log('started daemon');
})();
module.exports = async function publish(content) {
  // const claimsDirPath = './published-claims';
  // fs.mkdir(path);
  // const claimFileName = "claim-" + Date.now
  // const claimFilePath = path.join(claimsDirPath, claimFileName);
  // await fs.writeFile(claimFilePath, content);
  // const node = new ipfs({
  //   repo: '/Users/guykedem/.ipfs',
  //   config: {
  //     // overload the default IPFS node config, find defaults at https://github.com/ipfs/js-ipfs/tree/master/src/core/runtime
  //     Addresses: {
  //       Swarm: ['/ip4/127.0.0.1/tcp/1337'],
  //     },
  //   },
  //   libp2p: {
  //     // add custom modules to the libp2p stack of your node
  //     modules: {},
  //   },
  // });
  const node = new ipfs();
  node.on('ready', async () => {
    const res = await node.files.add({
      path: 'hello.txt',
      content: Buffer.from('Hello World'),
    });
    console.log('!@#', res, '__expr__: res');
  });
  // console.log('ipfs', Object.keys(ipfs));
  // console.log('node', node);
  // console.log(content);

  // var hash = await node.files.add(content);
  // return hash;
};
