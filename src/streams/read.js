import {dirname, resolve} from 'path';
import {fileURLToPath} from 'url';
import {createReadStream} from 'fs';

const dir = dirname(fileURLToPath(import.meta.url));
const file = resolve(dir, 'files', 'fileToRead.txt');

const read = async () => {
  const rs = createReadStream(file);
  rs.on('data', (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();
