const exec = require('child_process').exec;
const notifier = require('node-notifier');
const config = require('./config/config');

const cmd = 'dnf check-update'       // Shell command - Check for updates
const title = config.notifTitle;     // Title of notification

/*
DNF exit codes for check-update.
" DNF exit code will be 100
 when there are updates available and a list of the updates will be printed,
 0 if not and 1 if an error occurs."

source:
 https://dnf.readthedocs.io/en/latest/command_ref.html#check-update-command
*/
const ExitCode = {
  AVAILABLE: 100,
  NONE: 0,
  ERROR: 1
}


exec(cmd, (err, stdout, stderr) => {
  console.log("Checking for updates..");

  /* Catching error.
      Not breaking because it might be a false-positive in case of ExitCode.
      AVAILABLE.
  */
  if (err) {
    console.error(`exec error: ${err}`);
  }

  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);


}).on('exit', (code) => {
  // Using exit codes to determine whether updates are available or not.
  console.log(`exit code: ${code}`);

  switch(code) {
    case ExitCode.AVAILABLE:
      notifier.notify({
        title: title,
        message: config.updateMessage
      });
      break;
    case ExitCode.ERROR:
      notifier.notify({
        title: title,
        message: config.errorMessage
      });
      break;
  }
});
