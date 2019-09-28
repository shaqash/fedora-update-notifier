#!/bin/sh
: '
Written by Shaked Ashkenazi
'

: 'DNF exit codes for check-update.
#" DNF exit code will be 100
# when there are updates available and a list of the updates will be printed,
# 0 if not and 1 if an error occurs."
#source:
# https://dnf.readthedocs.io/en/latest/command_ref.html#check-update-command
'
DNF=/usr/bin/dnf
NOTIFY=/usr/bin/notify-send
WC=/usr/bin/wc
OUTPUT=$($DNF check-update -q)
EXITCODE=$?
COUNT=$(($($WC -l <<<$OUTPUT)-1)) #Word count considering one empty line
case "$EXITCODE" in
  "100") $NOTIFY "Update!" "$(($COUNT)) updates are available"
  ;;
  "0") echo "No updates :("
  ;;
  "1") echo "Error: $OUTPUT"
  ;;
esac
