# exe

> **execute shell commands from node.js**
>
> . synchronous
>
> .. with stdin, stdout and stderr
>
> ... as you would expect when executing commands in the shell itself


# install

```sh
npm i -S exe
```

# use

```js
var exeCute = require('exe');

exeCute('echo "hello world"');
//> hello world

exeCute('echo "$PATH"');
// prints PATH environment variable

```

# test
```sh
npm test
```


# note
> requires node version >= 0.12.x since it uses `child_process.execSync(command[, options])` introduced in 0.12.

# license
MIT

# author
Andi Neck [@andineck](https://twitter.com/andineck)