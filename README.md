# TestHTML

A html testing playground organized by topic in the html tutorial here: https://developer.mozilla.org/en-US/docs/Learn/HTML

Workable code is written on each topic to demonstrate use of html in the topic area.

The website folder structure follows express.js for easy conversion.

## Installation

A html file can be opened on any modern browser. However, certain features require the file to be uploaded to a server. For this purpose,  the atom package atom-live-server was used to simulate a local server. Atom was used as text editor.

* [atom 1.43.0](https://atom.io/)

To practice hosting the html file on an actual server, server stacks such as WinNMP can be used. The advantage of this is experience in configuring the webserver. To use WinNMP, download and install it from the following site:

* [WinNMP 20.11](https://winnmp.wtriple.com/)

Once installed, the project files have to be put into the WinNMP directory's `WWW` folder and the server started from the windows start menu. Once the local server is running, access the desired file by opening the browser and typing:

```
http://127.0.0.1/project_name/file_name
```

### Atom packages used:

* atom-live-server

### General packages:

* atom-beautify
* busy-signal
* file-icons
* intentions
* minimap
* open_in_cmd
* project-manager
* script

## Usage

### using fontawesome icons

fontawesome is a popular library for creating icons in html using fonts. To use it, first download the free package from:

* [fontawesome-free-5.15.1-web](https://fontawesome.com/how-to-use/on-the-web/setup/hosting-font-awesome-yourself)

Usage of the files in the package require the webpage folders to be of a certain structure. The folder name where the stylesheets are put in is not important. What is important is that the fonts are put in a different folder on the same level called `webfonts`.

```
|-stylesheets
|-webfonts
```

Copy the `all.css` file from the `css` folder in the package into the website stylesheet folder, and all the fonts in the `webfonts` folder in the package into a folder with the same name in the website. After which, include the following line in the webpage html file:

```
<link rel="stylesheet" href="./stylesheets/all.css">g
```

The alternative to downloading and installing the fontawesome kit is to use a online script as follows:

```
<script src="https://kit.fontawesome.com/6ab3db8113.js"></script>
```

You can get your own link via registration on the fontawesome website.

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
