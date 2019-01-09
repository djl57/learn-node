'use strict'

let fs = require('fs')

// 读文件

// 异步读文件
// Node.js标准的回调函数：第一个参数代表错误信息，第二个参数代表结果。
fs.readFile('fs/test.js', (err, data) => {
  if (err) {
    console.log('err!!', err)
  } else {
    // 返回的data对象是一个buffer对象
    console.log('data==>', data)
    console.log('data.toString()==>', data.toString()) // 打印出了test.js中的内容
  }
})
// 由于应用场景不同，在Node中，应用需要处理网络协议、操作数据库、处理图片、接收上传文件等，
// 在网络流和文件的操作中，还要处理大量二进制数据，JavaScript自有的字符串远远不能满足这些需求，于是Buffer对象应运而生

// 同步读文件
// 不接收回调函数，函数直接返回结果
let syncfile = fs.readFileSync('fs/readme.md')
console.log('syncfile==>', syncfile)
// 如何获得同步读取的文件的错误？
try {
  let syncfile = fs.readFileSync('fs/readme.md')
  console.log('syncfile==>', syncfile)
} catch (error) {
  console.log(error)
}

// 写文件

// 异步写文件
let data = '写入内容'
// writeFile()的参数依次为文件名、数据和回调函数
fs.writeFile('fs/output.text', data, err => {
  if (err) {
    console.log(err)
  } else {
    console.log('ok!')
  }
})

// 同步写文件
let syncData = '写入同步内容'
fs.writeFileSync('fs/output2.text', syncData)

// 获取文件或目录的详细信息
fs.stat('fs/output2.text', function (err, stat) {
  if (err) {
    console.log(err);
  } else {
    // 是否是文件:
    console.log('isFile: ' + stat.isFile());
    // 是否是目录:
    console.log('isDirectory: ' + stat.isDirectory());
    if (stat.isFile()) {
      // 文件大小:
      console.log('size: ' + stat.size);
      // 创建时间, Date对象:
      console.log('birth time: ' + stat.birthtime);
      // 修改时间, Date对象:
      console.log('modified time: ' + stat.mtime);
    }
  }
});

let statoutput = fs.statSync('fs/output.text')
console.log('statoutput', statoutput)

fs = { 
  // appendFile: [Function: appendFile],
  // appendFileSync: [Function: appendFileSync],
  // access: [Function: access],
  // accessSync: [Function: accessSync],
  // chown: [Function: chown],
  // chownSync: [Function: chownSync],
  // chmod: [Function: chmod],
  // chmodSync: [Function: chmodSync],
  // close: [Function: close],
  // closeSync: [Function: closeSync],
  // copyFile: [Function: copyFile],
  // copyFileSync: [Function: copyFileSync],
  // createReadStream: [Function: createReadStream],
  // createWriteStream: [Function: createWriteStream],
  // exists: [Function: exists],
  // existsSync: [Function: existsSync],
  // fchown: [Function: fchown],
  // fchownSync: [Function: fchownSync],
  // fchmod: [Function: fchmod],
  // fchmodSync: [Function: fchmodSync],
  // fdatasync: [Function: fdatasync],
  // fdatasyncSync: [Function: fdatasyncSync],
  // fstat: [Function: fstat],
  // fstatSync: [Function: fstatSync],
  // fsync: [Function: fsync],
  // fsyncSync: [Function: fsyncSync],
  // ftruncate: [Function: ftruncate],
  // ftruncateSync: [Function: ftruncateSync],
  // futimes: [Function: futimes],
  // futimesSync: [Function: futimesSync],
  // lchown: [Function: lchown],
  // lchownSync: [Function: lchownSync],
  lchmod: undefined,
  lchmodSync: undefined,
  // link: [Function: link],
  // linkSync: [Function: linkSync],
  // lstat: [Function: lstat],
  // lstatSync: [Function: lstatSync],
  // mkdir: [Function: mkdir],
  // mkdirSync: [Function: mkdirSync],
  // mkdtemp: [Function: mkdtemp],
  // mkdtempSync: [Function: mkdtempSync],
  // open: [Function: open],
  // openSync: [Function: openSync],
  // readdir: [Function: readdir],
  // readdirSync: [Function: readdirSync],
  // read: [Function: read],
  // readSync: [Function: readSync],
  // readFile: [Function: readFile],
  // readFileSync: [Function: readFileSync],
  // readlink: [Function: readlink],
  // readlinkSync: [Function: readlinkSync],
  // realpath: { [Function: realpath] native: [Function] },
  // realpathSync: { [Function: realpathSync] native: [Function] },
  // rename: [Function: rename],
  // renameSync: [Function: renameSync],
  // rmdir: [Function: rmdir],
  // rmdirSync: [Function: rmdirSync],
  // stat: [Function: stat],
  // statSync: [Function: statSync],
  // symlink: [Function: symlink],
  // symlinkSync: [Function: symlinkSync],
  // truncate: [Function: truncate],
  // truncateSync: [Function: truncateSync],
  // unwatchFile: [Function: unwatchFile],
  // unlink: [Function: unlink],
  // unlinkSync: [Function: unlinkSync],
  // utimes: [Function: utimes],
  // utimesSync: [Function: utimesSync],
  // watch: [Function: watch],
  // watchFile: [Function: watchFile],
  // writeFile: [Function: writeFile],
  // writeFileSync: [Function: writeFileSync],
  // write: [Function: write],
  // writeSync: [Function: writeSync],
  // Dirent: [Function: Dirent],
  // Stats: [Function: Stats],
  // ReadStream:
  //  { [Function: ReadStream]
  //    super_:
  //     { [Function: Readable]
  //       ReadableState: [Function: ReadableState],
  //       super_: [Function],
  //       _fromList: [Function: fromList] } },
  // WriteStream:
  //  { [Function: WriteStream]
  //    super_:
  //     { [Function: Writable] WritableState: [Function: WritableState], super_: [Function] } },
  // FileReadStream:
  //  { [Function: ReadStream]
  //    super_:
  //     { [Function: Readable]
  //       ReadableState: [Function: ReadableState],
  //       super_: [Function],
  //       _fromList: [Function: fromList] } },
  // FileWriteStream:
  //  { [Function: WriteStream]
  //    super_:
  //     { [Function: Writable] WritableState: [Function: WritableState], super_: [Function] } },
  // _toUnixTimestamp: [Function: toUnixTimestamp],
  // F_OK: 0,
  // R_OK: 4,
  // W_OK: 2,
  // X_OK: 1,
  // constants:
  //  [Object: null prototype] {
  //    UV_FS_SYMLINK_DIR: 1,
  //    UV_FS_SYMLINK_JUNCTION: 2,
  //    O_RDONLY: 0,
  //    O_WRONLY: 1,
  //    O_RDWR: 2,
  //    UV_DIRENT_UNKNOWN: 0,
  //    UV_DIRENT_FILE: 1,
  //    UV_DIRENT_DIR: 2,
  //    UV_DIRENT_LINK: 3,
  //    UV_DIRENT_FIFO: 4,
  //    UV_DIRENT_SOCKET: 5,
  //    UV_DIRENT_CHAR: 6,
  //    UV_DIRENT_BLOCK: 7,
  //    S_IFMT: 61440,
  //    S_IFREG: 32768,
  //    S_IFDIR: 16384,
  //    S_IFCHR: 8192,
  //    S_IFLNK: 40960,
  //    O_CREAT: 256,
  //    O_EXCL: 1024,
  //    O_TRUNC: 512,
  //    O_APPEND: 8,
  //    F_OK: 0,
  //    R_OK: 4,
  //    W_OK: 2,
  //    X_OK: 1,
  //    UV_FS_COPYFILE_EXCL: 1,
  //    COPYFILE_EXCL: 1,
  //    UV_FS_COPYFILE_FICLONE: 2,
  //    COPYFILE_FICLONE: 2,
  //    UV_FS_COPYFILE_FICLONE_FORCE: 4,
  //    COPYFILE_FICLONE_FORCE: 4 } 
}

