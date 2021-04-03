# Update notifier

![](update-notifier-screenshot.png)

### What it does

Sends update notifications.

### Use case

* Uninstalled gnome-software and does not get them.

Currently working only with dnf package manager (Fedora/RHEL?).

## How to run or schedule using CRON

```
// Clone to your preferred dir
$ cd code
$ git clone https://github.com/shaqash/fedora-update-notifier.git
$ cd fedora-update-notifier

// Check if it works (Try to downgrade python for example)
$ sudo dnf downgrade python2
$ chmod +x ./shell/update-notifier.sh
$ ./shell/update-notifier.sh

// Schedule the program using cron
$ crontab -e
// Insert the following to schedule for 8:26PM every day.
26 20 * * * $HOME/code/fedora-update-notifier/shell/update-notifier.sh
```

## How to configure

**Shell version**

Go to `shell/update-notifier.sh`.
100 is the exit code for updates, 0 for no updates and 1 for error.

```bash
case "$EXITCODE" in
  "100") $NOTIFY "Update!" "$COUNT updates are available"
  ;;
  "0") echo "No updates :("
  ;;
  "1") echo "Error: $OUTPUT"
  ;;
esac
```

