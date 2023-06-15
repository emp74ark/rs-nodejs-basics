import {fork} from 'child_process';
import {dirname, resolve} from 'path';
import {fileURLToPath} from 'url';

const dir = dirname(fileURLToPath(import.meta.url));
const file = resolve(dir, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  fork(file, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['test1', 'test2']);
