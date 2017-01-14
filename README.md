# Auto study roombooker #
This is an auto room booker for Mid Sweden university so you don't need book study room manually.

## Use ##
Before use go to nightmare/index.js and change:
```
.type("input[id='username']", 'xxx') -> .type("input[id='usrname']", 'toYourUserName')
.type("input[id='password']", 'xxx') -> .type("input[id='password']", 'toYourPassword').
```
Then run the application with nightmare.

A way to use it could be with an crontab script that does it every 24 hours to ensure you'll always have a study rootab. Example of crontab script (crontab -e):
```
1 0 * * * /usr/bin/node /path/to/folder/nighthmare/index.js
```
The example above will execute the auto booker each day at 00:01.

## Requirements ##
nodejs (tested on version 5.1.0)<br />
python (tesed on version 2.7.12)<br />
nightmare (only tested for nightmare 2.6.1)<br />

log in credentials for portal.miun.se


## Programming language ##
JavaScript

## Disclaimer ##
You are free to do as you want with this script, we won't take any responsebility for what users with this script will do, or what might happen for your computer/user when you use this script.

## Backstory ##
After several years without being in time for the booking of study rooms at the university we felt we had to automate the booking process so the computer did it for us. And also to be able to show that the (then) current booking system could be abused

## Install Guide ##
You need to have installed nvm for your OS.
```
nvm install -g <version> #version of nodejs = <version> (example: v5.1.0)
nvm use <version>
npm install #In the nightmare directory.
```
change directory to the nightmare:
```
npm install
```
### Installation options ###
For installing certain version of the files use:<br\>
```
npm install <package>@<version>
#or with -g
npm install -g <package>@<version>
#For nodejs:
nvm installl -g <version> #version of nodejs = <version> (example: v5.1.0)
nvm use <version>
```
More exploritary nodejs install guide with nvm can be found at:
https://www.digitalocean.com/community/tutorials/how-to-install-node-js-with-nvm-node-version-manager-on-a-vps

## Existing problems ##
1. Their is a problem that is pushing the last confirm button if that is solved this will work to book a room - said (2017-01-09)
2. It only books the room 13 days in the future.
3. The room the script will book is hardcoded in the script.

## Updated ##
See latest commit date.
