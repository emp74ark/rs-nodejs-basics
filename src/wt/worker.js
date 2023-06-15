import {parentPort, workerData} from 'worker_threads'
// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const data = nthFibonacci(workerData)

const sendResult = () => {
  parentPort.postMessage(data)
};

sendResult();
