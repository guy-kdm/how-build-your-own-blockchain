/**
 * Created by neta on 1/15/18.
 */
import {publish} from './ipfs'
// const {publish} = require('./ipfs');

async function check() : Promise<void>{
    const claimBuffer: Buffer = new Buffer('test claim');
    const hash: string = await publish(claimBuffer);
    console.log('hash', hash);
}