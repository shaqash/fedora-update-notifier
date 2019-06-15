const exec = require('child_process').exec;
const notifier = require('node-notifier');

const cmd = 'dnf check-update'  // Shell command - Check for updates
const title = 'Update Info';    // Title of notification

/*
Setting exit codes according to dnf manual,
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

  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }

  console.log('-------- Debug ----------')
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);


}).on('exit', (code) => {
  console.log(`exit code: ${code}`);

  switch(code) {
    case ExitCode.AVAILABLE:
      notifier.notify({
        title: title,
        message: 'Updates are available'
      });
      break;
    case ExitCode.ERROR:
      notifier.notify({
        title: title,
        message: 'An error occurred while checking for updates'
      });
      break;
  }
});
