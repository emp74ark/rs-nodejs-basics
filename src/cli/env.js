const parseEnv = () => {
    const {env} = process;
    for (let i in env) {
      if (i.startsWith('RSS')) {
        console.log(`${i}=${env[i]}`)
      }
    }
};

parseEnv();
