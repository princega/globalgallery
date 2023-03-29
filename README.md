# Global Gallery
A webpage which fetches random images from the internet based upon random number algorithm.
It fetches the images from the pexels's database.

## Requirements
1. Deno must be installed in your computer or the machine in which the user wants to see
the website.

Installation on Windows using Powershell
```bash
irm https://deno.land/install.ps1 | iex
```

Installation on MacOS/Linux using shell
```bash
curl -fsSL https://deno.land/x/install/install.sh | sh
```

2. Once you have deno installed, you need to have a local web server inorder to send asynchronous HTTP
requests. otherwise, requests will be blocked due to CORS Policy. 

Creating a local webserver
```bash
cd directory_name
deno run https://deno.land/std@0.181.0/http/file_server.ts
```
Warning - Don't kill the terminal/shell's window, otherwise the server will stop serving the webpage.

The local web server is running on the Port 4507 (the default port for deno).

## Usage
The HTML file and the JavaScript file must be on the same directory, and deno's server must be 
serving that directory.

Inorder to have a look at the webpage I created, open the browser of your choice and go to this URL.
<span style="color:blue; font-weight:bold;">http://localhost:4507</span>

