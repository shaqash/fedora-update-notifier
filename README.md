# Update notifier
### What it does
Send update notifications.  
There are two version: Node and Shell.  
I suggest you use the shell one, it's way lighter.  
### Use case
* Uninstalled gnome-software and does not get them.
* Can customize the notification.

Currently working only with dnf package manager (Fedora/RHEL?).

## How to run & schedule
```
// Clone to your preferred dir
$ cd Documents
$ git clone https://github.com/shaqash/fedora-update-notifier.git

// Install Node modules (For the Nodejs version)
$ cd fedora-update-notifier
$ cd nodejs
$ npm install

// Check if it works (Try to downgrade python for example)
$ sudo dnf downgrade python3
// For the node version
$ node index.js
// For the shell version
$ ./update-notifier.sh

// Schedule the program using cron
$ crontab -e
// Insert the following to schedule for 8:26PM every day.
26 20 * * * $HOME/Documents/fedora-update-notifier/shell/update-notifier.sh
```
## How to configure
Available for the Nodejs version  
Inside config/ folder, you can find a json file called config.json.  
You can change this file to customize your notification.  
For example,  
Change the notification title to "System Updates":  
```
{
  "notifTitle": "System Updates"
```
