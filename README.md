# node-check-update
Disabled gnome-software?  
This program will remind you to update your system when updates are available.  

Currently working only with dnf package manager (Fedora).

### How to use
```
// Clone to your preferred dir
$ cd Documents
$ git clone https://github.com/shaqash/node-check-update.git

// Install Node modules
$ cd node-check-update
$ npm install

// Schedule the program using cron
$ crontab -e
// Insert line to schedule for 8:26PM every day.
26 20 * * * /usr/bin/node $HOME/Documents/node-update-check/index.js
```
