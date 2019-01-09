## 什么是http协议

在web应用中，服务器把网页传给浏览器，实际上就是把网页的html代码发送给浏览器，让浏览器显示出来。

而浏览器和服务器之间的传输协议是http

html是一种用来定义网页的文本，会html，就可以编写网页

http是在网络上传输html的协议，用于浏览器和服务器的通信

### elements显示网页的结构

### network显示浏览器和服务器的通信

## http请求


|步骤 |流程|
|:--:|:--:|
| 1  |  浏览器向服务器发送http请求  |
| 2  |  服务器向浏览器返回http响应  |
| 3  |  如果服浏览器还需要继续向服务器请求其他资源，比如图片，就再次发出http请求，重复1、2  |


|    | 方法 | 路径 | 域名 | 其他 | body |
|:--:|:---:|:----:|:---:|:----:|:-----:|
|http请求| get（仅请求资源） 或者 post（附带用户信息） |  | 由host头指定 | 相关header | 如果是post请求，包含body（用户数据） |


|    | 响应代码 | 响应代码表示 | 响应类型（由Content-Type指定） | 其他 | body |
|:--:|:---:|:----:|:---:|:----:|:-----:|
|http响应| 200  | 成功  | | 相关header | 响应内容（网页的http源码） |
|       | 3xx  | 重定向 |
|       | 4xx  | 客户端发送的请求有错误   |
|       | 5xx  | 服务器端处理时发生了错误 |

## http格式

每个http请求和响应都遵循相同的格式，一个http包含header和body两部分，其中body是可选的

|HTTP GET请求的格式|
|--|
|Get /path HTTP/1.1|
|Header1: Value1|
|Header2: Value2|
|Header3: Value3|

每个header一行一个，换行符是\r\n

|HTTP POST请求的格式|
|--|
|POST /path HTTP/1.1|
|Header1: Value1|
|Header2: Value2|
|Header3: Value3|
|body data gose here ...|

当遇到连续两个\r\n时，Header部分结束，后面的数据全部都是body

|HTTP 响应的格式|
|--|
|200 OK|
|Header1: Value1|
|Header2: Value2|
|Header3: Value3|
|body data gose here ...|

HTTP响应如果包含body，也是通过\r\n\r\n来分隔的。
Body的数据类型由Content-type头来确定
|    |body|
|:--:|:--:|
|网页| 文本 |
|图片| 图片的二进制数据 |
当存在Content-Encoding时，body数据是被压缩的，最常见的压缩方式是gzip
所以，看到Content-Encoding：gzip时，需要将Body数据先解压缩，才能得到真正的数据
压缩的目的在于减少Body的大小，加快网络传输
