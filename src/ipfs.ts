import fs from 'fs'
import path from 'path'
import {Buffer} from 'buffer'
const ipfs = require('ipfs');
// import ipfs from 'ipfs'
const execSync = require('child_process');
// import {execSync} from 'child_process'

(function startIpfs(){
    execSync('ipfs daemon')
})();

export async function publish(content: Buffer) : Promise<string> {
    const claimsDirPath = './published-claims';
    fs.mkdir(path);
    const claimFileName = "claim-" + Date.now();
    const claimFilePath = path.join(claimsDirPath, claimFileName);
    await fs.writeFile(claimFilePath, content);
    const claim = {
        path:claimFilePath,
        content: content
    };
    const {hash} = await ipfs.files.add(claim);
    return hash;
}