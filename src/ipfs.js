var ipfs = require('ipfs');
// import ipfs from 'ipfs'
var {exec} = require('child_process');
// import {execSync} from 'child_process'
(function startIpfs() {
    console.log('starting daemon');
    exec('ipfs daemon');
    console.log('started daemon');
})();
module.exports = async function publish(content) {
    // const claimsDirPath = './published-claims';
    // fs.mkdir(path);
    // const claimFileName = "claim-" + Date.now();
    // const claimFilePath = path.join(claimsDirPath, claimFileName);
    // await fs.writeFile(claimFilePath, content);
    console.log('ipfs', Object.keys(ipfs));
    var hash = await ipfs.files.add(content);
    return hash;
}
