# Update notifier
This program will remind you to update your system when updates are available.  

Currently working only with dnf package manager (Fedora).

## How to run & schedule
```
// Clone to your preferred dir
$ cd Documents
$ git clone https://github.com/shaqash/fedora-update-notifier.git

// Install Node modules
$ cd node-check-update
$ npm install

// Check if it works (Try to downgrade python for example)
$ sudo dnf downgrade python3
$ node index.js

// Schedule the program using cron
$ crontab -e
// Insert the following to schedule for 8:26PM every day.
26 20 * * * /usr/bin/node $HOME/Documents/node-update-check/index.js
```
## How to configure
Inside config/ folder, you can find a json file called config.json.  
You can change this file to customize your notification.  
For example,  
Change the notification title to "System Updates":  
```
{
  "notifTitle": "System Updates"
```
