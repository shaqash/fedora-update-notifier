# Update notifier
![](update-notifier-screenshot.png)
### What it does
Send update notifications.  
There are two version: Node and Shell.  
I suggest you use the shell one, it's way lighter.  
### Use case
* Uninstalled gnome-software and does not get them.
* Can customize the outputs.

Currently working only with dnf package manager (Fedora/RHEL?).

## How to run or schedule
```
// Clone to your preferred dir
$ cd Documents
$ git clone https://github.com/shaqash/fedora-update-notifier.git
$ cd fedora-update-notifier

// Install Node modules (Skip if you're using the shell version)
$ cd nodejs
$ npm install

// Check if it works (Try to downgrade python for example)
$ sudo dnf downgrade python2
// For the node version
$ node index.js
// For the shell version
$ ./shell/update-notifier.sh

// Schedule the program using cron
$ crontab -e
// Insert the following to schedule for 8:26PM every day.
26 20 * * * $HOME/Documents/fedora-update-notifier/shell/update-notifier.sh
```
## How to configure
Config file available for the **Nodejs version**  
Inside config/ folder, you can find a json file called config.json.  
You can change this file to customize your notification.  
For example,  
Change the notification title to "System Updates":  
```
{
  "notifTitle": "System Updates"
```
**Shell version**  
Currently no config file.  
Go to `shell/update-notifier.sh`
```bash
case "$EXITCODE" in
  "100") $NOTIFY "Update!" "$COUNT updates are available"  // first arg is title, second arg is description
  ;;
  "0") echo "No updates :("
  ;;
  "1") echo "Error: $OUTPUT"
  ;;
esac
```

