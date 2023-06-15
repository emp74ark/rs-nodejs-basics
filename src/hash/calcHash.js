import {dirname, resolve} from 'path';
import {readFile} from 'fs/promises';
import {createHash} from 'crypto';
import {fileURLToPath} from 'url';

const dir = dirname(fileURLToPath(import.meta.url));
const file = resolve(dir, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  try {
    const data = await readFile(file);
    const hash = createHash('sha256').update(data).digest('hex');
    console.log(hash);
  } catch (e) {
    console.log(e);
  }
};

await calculateHash();
