import {dirname, resolve} from 'path';
import {fileURLToPath} from 'url';
import {readFile} from 'fs/promises';

const dir = dirname(fileURLToPath(import.meta.url));
const file = resolve(dir, 'files', 'fileToRead.txt');
const read = async () => {
  try {
    const data = await readFile(file, {
      encoding: 'utf-8',
    });
    console.log(data);
  } catch (e) {
    if (e.code === 'ENOENT') {
      console.error('FS operation failed');
    }
  }
};

await read();
