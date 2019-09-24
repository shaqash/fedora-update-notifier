#!/bin/sh


: 'DNF exit codes for check-update.
#" DNF exit code will be 100
# when there are updates available and a list of the updates will be printed,
# 0 if not and 1 if an error occurs."
#source:
# https://dnf.readthedocs.io/en/latest/command_ref.html#check-update-command
'
OUTPUT=$(/usr/bin/dnf check-update)
EXITCODE=$?

case "$EXITCODE" in
  "100") /usr/bin/notify-send "Update!" "$OUTPUT"
  ;;
  "0") echo "No updates :("
  ;;
  "1") echo "Error: $OUTPUT"
  ;;
esac
