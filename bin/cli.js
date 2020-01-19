#!/usr/bin/env node
const vueCliBinPath = require.resolve('@vue/cli/bin/vue');
let args = process.argv.slice(2);

if(args[0] === 'create' && !args.includes('--preset')) {
  args.push('--preset');
  args.push('yuezhilunhui2009/vue-cli3-preset-seed')
}

require('child_process').fork(
  vueCliBinPath,
  args,
  {
    stdio:'inherit'
  }
);



