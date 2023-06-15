import {cpus} from 'os';
import {dirname, resolve} from 'path';
import {fileURLToPath} from 'url';
import {Worker} from 'worker_threads';

const threads = cpus().length;
const fibonacci = resolve(dirname(fileURLToPath(import.meta.url)), 'worker.js');

function resultDecorator(result) {
  const arr = []
  for (const r of result) {
    const status = r.status === 'fulfilled' ? 'resolved' : 'error';
    const value = r.status === 'fulfilled' ? r.value : null;
    arr.push(`status: ${status}, data: ${value}`)
  }
  console.log(arr);
}

const performCalculations = async () => {
  const promises = [];
  for (let i = 0; i < threads; i++) {
    const promise = new Promise((resolve, reject) => {
      const worker = new Worker(fibonacci, {workerData: i + 10});
      worker.on('message', resolve);
      worker.on('error', reject);
    });
    promises.push(promise);
  }
  Promise.allSettled(promises).then(result => {
    resultDecorator(result)
  });
};

await performCalculations();
