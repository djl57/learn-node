|       |浏览器中    |node.js环境中|
|-------|:---------:|:-----------:|
|全局对象|window对象 |global对象   |

process对象：表示node.js进程

#### process === global.process;
true
#### process.version;
'v10.15.0'
#### process.platform;
'win32'
#### process.arch;
'x64'
#### process.cwd(); //返回当前工作目录
'E:\\github\\learn-node\\global'
#### process.chdir('/private/tmp'); // 切换当前工作目录
undefined
#### process.cwd();
'/private/tmp'