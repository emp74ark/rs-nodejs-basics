import {writeFile} from 'fs/promises';
import {dirname, resolve} from 'path';
import {fileURLToPath} from 'url';

const dir = dirname(fileURLToPath(import.meta.url));
const file = resolve(dir, 'files', 'fresh.txt');
const data = 'I am fresh and young';

const create = async () => {
  try {
    await writeFile(file, data, {flag: 'wx'});
  } catch (e) {
    if (e.code === 'EEXIST') {
      console.error('FS operation failed');
    }
  }
};

await create();
