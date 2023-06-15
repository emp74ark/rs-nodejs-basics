import {cp} from 'fs/promises';
import {dirname, resolve} from 'path';
import {fileURLToPath} from 'url';

const dir = dirname(fileURLToPath(import.meta.url));
const source = resolve(dir, 'files');
const target = resolve(dir, 'files_copy');
const copy = async () => {
  try {
    await cp(source, target, {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
  } catch (e) {
    if (e.code === 'ERR_FS_CP_EEXIST') {
      console.error('FS operation failed');
    }
  }
};

await copy();
