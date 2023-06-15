import {dirname, resolve} from 'path';
import {fileURLToPath} from 'url';
import {createGzip} from 'zlib';
import {createReadStream, createWriteStream} from 'fs';
import {pipeline} from 'stream/promises';

const dir = dirname(fileURLToPath(import.meta.url));
const source = resolve(dir, 'files', 'fileToCompress.txt');
const target = resolve(dir, 'files', 'archive.gz');

const compress = async () => {
  const gzip = createGzip();
  const rs = createReadStream(source);
  const ws = createWriteStream(target);
  try {
    await pipeline(rs, gzip, ws);
  } catch (e) {
    console.log(e);
  }
};

await compress();
