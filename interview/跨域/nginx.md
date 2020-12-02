# nginx反向代理也可用作跨域

+ ```server {
  
  listen      80;
  server_name     www.myhost.com;
  location ^~ /api   {
      proxy_pass  http://127.0.0.1:3001;
  }

}```
