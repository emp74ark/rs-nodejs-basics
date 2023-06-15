import {readdir, rename as fileRename} from 'fs/promises';
import {dirname, join, resolve} from 'path';
import {fileURLToPath} from 'url';

const dir = dirname(fileURLToPath(import.meta.url));
const files = join(dir, 'files');
const source = resolve(files, 'wrongFilename.txt');
const target = resolve(files, 'properFilename.md');

const rename = async () => {
  try {
    const filesList = await readdir(files);
    if (filesList.includes('properFilename.md')) {
      throw new Error('EXIST');
    }
    await fileRename(source, target);
  } catch (e) {
    if (e.message === 'EXIST' || e.code === 'ENOENT') {
      console.error('FS operation failed');
    }
  }
};

await rename();
