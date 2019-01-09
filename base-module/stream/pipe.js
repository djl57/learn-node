// 一个Readable流和一个Writable流串起来后，所有的数据自动从Readable流进入Writable流，这种操作叫pipe。

// 在Node.js中，Readable流有一个pipe()方法，就是用来干这件事的

// 这实际上是一个复制文件的程序

'use strict';

var fs = require('fs');

var rs = fs.createReadStream('fs/output.text');
var ws = fs.createWriteStream('fs/output2.text');

rs.pipe(ws);