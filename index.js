var execSync = require('child_process').execSync;

module.exports = function(cmd, options){
  options = options || {};
  options.stdio = options.stdio || [0,1,2];
  options.env = options.env || process.env;
  return execSync(cmd, options);
};