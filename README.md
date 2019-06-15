# node-check-update
Use to get notifications for updates in Fedora.  
This program runs dnf check-update and sends a notification if updates are available.  

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
