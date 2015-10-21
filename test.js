var test = require('tape');
var exe  = require('./index');

test('should output `hello world` to the console', function(t){

  var result = exe('echo "hello world"');
  t.equal(result, null);
  // check the output in the console

  t.end();
});

test('should output the `$PATH` environment variable to the console', function(t){

  var result = exe('echo "$PATH"');
  t.equal(result, null);
  // check the output in the console

  t.end();
});

test('should output the current working directory', function(t){

  var result = exe('pwd');
  t.equal(result, null);
  // check the output in the console

  t.end();
});

test('should throw on wrong input', function(t){

  var throwed = false;
  try {
    t.throws(exe('echo "hello world'));
  } catch (e) {
    throwed = true;
  } finally {
    t.true(throwed);
  }

  t.end();
});