import {pipeline, Transform} from 'stream';

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, encoding = 'utf-8', callback) {
      const data = chunk.toString().split('').reverse().join('') + '\n';
      callback(null, data);
    },
  });
  pipeline(process.stdin, reverse, process.stdout, (e) => {
    if (e) console.log(e);
  });
};

await transform();
