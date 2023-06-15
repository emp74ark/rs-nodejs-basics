import {dirname, extname, resolve} from 'path';
import {readdir} from 'fs/promises';
import {fileURLToPath} from 'url';

const dir = dirname(fileURLToPath(import.meta.url));
const source = resolve(dir, 'files');

const list = async () => {
  try {
    const filesList = await readdir(source);
    filesList.forEach(file => {
      console.log(file.replace(extname(file), ''));
    })
  } catch (e) {
    if (e.code === 'ENOENT') {
      console.error('FS operation failed');
    }
  }
};

await list();
