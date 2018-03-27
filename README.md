# lutre - This a simple pack of sum of two number made in typescript.

### Install Lutre
```
$ npm i lutre
```

### Usage
```
import { soma } from 'lutre'
```
obs: If not work with `import` and show this error
```
(function (exports, require, module, __filename, __dirname) { import {soma} from 'lutre'
                                                              ^^^^^^
SyntaxError: Unexpected token import
    at Object.exports.runInThisContext (vm.js:76:16)
    at Module._compile (module.js:513:28)
    at Object.Module._extensions..js (module.js:550:10)
    at Module.load (module.js:458:32)
    at tryModuleLoad (module.js:417:12)
    at Function.Module._load (module.js:409:3)
    at Module.runMain (module.js:575:10)
    at run (bootstrap_node.js:352:7)
    at startup (bootstrap_node.js:144:9)
    at bootstrap_node.js:467:3

```
Maybe you should have install some compiler like Babel. It will transform `import` to `require`.
Maybe works for you. Works for me. :)


If you wanna fork me and edit my code, edit file .ts and compile on terminal with:

### Compile .ts to .js
```
$ tsc somatoria.ts
```

