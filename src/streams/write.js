import {dirname, resolve} from 'path';
import {fileURLToPath} from 'url';
import {createWriteStream} from 'fs';
import {pipeline} from 'stream/promises';

const dir = dirname(fileURLToPath(import.meta.url));
const file = resolve(dir, 'files', 'fileToWrite.txt');
const write = async () => {
  try {
    const ws = createWriteStream(file);
    await pipeline(process.stdin, ws)
  } catch (e) {
    if (e) console.log(e);
  }
};

await write();
