import {rm} from 'fs/promises';
import {dirname, resolve} from 'path';
import {fileURLToPath} from 'url';

const dir = dirname(fileURLToPath(import.meta.url));
const file = resolve(dir, 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    await rm(file);
  } catch (e) {
    if (e.code === 'ENOENT') {
      console.error('FS operation failed');
    }
  }
};

await remove();
