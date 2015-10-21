var test = require('tape');
var exe  = require('./index');

test('should output to the console', function(t){

  var result = exe('echo "hello world"');
  t.equal(result, null);

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