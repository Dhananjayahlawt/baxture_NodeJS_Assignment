# Node Js Worker Thread

Setup the project

Download this template from github and open it in your favourite text editor.
Go inside the folder path and execute the following command:
npm install
In the root directory create a .env file and add the following env variables

    PORT=<port number of your choice>
ex:

    PORT=3000
go inside the src folder and execute the following command:
To run the server execute with one instance on one port

npm run start:dev

To run the server execute with worker listening on diffrent port(3001,3002) 

npm run start:multi

#Nginx Setup


use NGINX as a reverse proxy to distribute requests to different Node.js applications running on different ports, you can follow these steps:

Install NGINX:
Install NGINX on your server. The installation steps may vary depending on your operating system.

1.For Ubuntu/Debian:
sudo apt-get update
sudo apt-get install nginx

2.Configure NGINX:
Edit the NGINX configuration file, typically located at /etc/nginx/nginx.conf or in a separate configuration file in the /etc/nginx/conf.d/ directory.
http {
    upstream nodejs_servers {
        server 127.0.0.1:4001;
        server 127.0.0.1:4002;
    }

    server {
        listen 80;
        server_name 127.0.01; 

        location / {
            proxy_pass http://nodejs_servers;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
}

3.Restart NGINX:
Restart NGINX to apply the changes:
sudo systemctl restart nginx


Now, NGINX is set up to listen on port 4000 and forward requests to the Node.js applications running on ports 4001, 4002 by using round robin algorithm






