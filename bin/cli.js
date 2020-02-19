#!/usr/bin/env node
const vueCliBinPath = require.resolve('@vue/cli/bin/vue');
const args = process.argv.slice(2);

if(args[0] === 'create' && !args.includes('--preset') && !args.includes('-p')) {
  args.push('--preset');
  args.push('./preset')

  if(!args.includes('--bare') && !args.includes('-b')) {
    args.push('--bare')
  }
}

require('child_process').fork(
  vueCliBinPath,
  args,
  {
    stdio:'inherit'
  }
);



