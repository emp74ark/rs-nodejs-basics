import {dirname, resolve} from 'path';
import {fileURLToPath} from 'url';
import {createGunzip} from 'zlib';
import {createReadStream, createWriteStream} from 'fs';
import {pipeline} from 'stream/promises';

const dir = dirname(fileURLToPath(import.meta.url));
const source = resolve(dir, 'files', 'archive.gz');
const target = resolve(dir, 'files', 'uncompressed_fileToCompress.txt');
const decompress = async () => {
  const gunzip = createGunzip();
  const rs = createReadStream(source);
  const ws = createWriteStream(target);
  try {
    await pipeline(rs, gunzip, ws);
  } catch (e) {
    console.log(e);
  }
};

await decompress();
