# TestHTML

A html testing playground organized by topic in the html tutorial here: https://developer.mozilla.org/en-US/docs/Learn/HTML

Workable code is written on each topic to demonstrate use of html in the topic area.

The website folder structure follows express.js for easy conversion.

## Installation

A html file can be opened on any modern browser. However, certain features require the file to be uploaded to a server, and for that purpose, WinNMP was used to create a local virtual server. Atom was used as text editor.

* [WinNMP 20.01](https://winnmp.wtriple.com/)
* [atom 1.43.0](https://atom.io/)

Once the local server is running, access the file by opening the browser and typing:

```
http://127.0.0.1/project_name/file_name
```

## Optimization

Many professional websites leave out the .html extensions on links. To do this, you need to modify the .htaccess on the webserver by adding the following code:

```
RewriteEngine on
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ $1.html [L,QSA]
```

nginx servers have no .htaccess files, so the servers' .conf file have to be modified instead:

```
location / {
  if (!-e $request_filename){
    rewrite ^(.*)$ /$1.html break;
  }
}
```

### General packages:

* atom-beautify
* busy-signal
* file-icons
* intentions
* minimap
* open_in_cmd
* project-manager
* script
