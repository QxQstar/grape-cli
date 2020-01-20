#!/usr/bin/env node
const vueCliBinPath = require.resolve('@vue/cli/bin/vue');
const args = process.argv.slice(2);

if(args[0] === 'create' && !args.includes('--preset')) {
  args.push('--preset');
  args.push('QxQstar/dmallmax-vue-preset')
}

require('child_process').fork(
  vueCliBinPath,
  args,
  {
    stdio:'inherit'
  }
);



