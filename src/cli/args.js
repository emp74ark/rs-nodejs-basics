const parseArgs = () => {
  const args = process.argv.slice(2);
  const res = [];
  args.forEach((el, index) => {
    if (el.startsWith('--')) {
      res.push(`${el.slice(2)} is ${args[index + 1]}`);
    }
  });
  console.log(res.join(', '));
};

parseArgs();
