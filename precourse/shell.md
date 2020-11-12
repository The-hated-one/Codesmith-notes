# Shell - ZSH - Bash

Here lies some reference notes on how to use the shell.
Cheat sheet: http://cheatsheetworld.com/programming/unix-linux-cheat-sheet/

## ls commands

- `ls -l` detailed
- `ls -t` time sorted
- `ls -S` file size sorted
- `ls -r` reverse sorted
- `ls -a` hidden files

## Exploring files

- `cat filename.ext` display file contents
- `more <filename>` display file contents + scroll
- `less <filename>` display file contents + scroll
- `mdls filename` discover far more about a particuar file

## Command redirction

- `|` `>` redirect output from one command into another.
  - E.g. `ls -l | more` scroll through detailed files
  - `ls -l > filename.list` save file list in new file
  - `cat filename.list | grep keyword > filefound.list` display the contents of a file, pipe that into grep and redirect the output into a new file.

## History

- `Ctrl+r` starts a search mode, type the first few characters, and see old similar commands.

## Loops

- `for f in *.txt;do echo $f;done` echo out all .txt files.

## Find files

- `find .` find all files in this directory
- `find . -name "*.txt"` find all .txt files in this dir
- `find . -name "*.txt" -mtime 0` find all .txt files in this dir modified today
- `find . -name "*.txt" -mtime 5` find all .txt files in this dir modified in the last 5 days
- `find /path -name '*.mpg' -o -name '*.avi'` find both .mpg and .avi files.
- `find . -iname "*.txt"` -iname is case insensitive file search
- `find . -name "*.txt" -a -size + 700M` files bigger than 700M.
- `find /home/ -name '*.avi' -a -size +700M -mtime -15 -exec mv '{}' /my/new/movies/ \;`
  - Find .avi files greater than 700M, that are newer than 15 days and move them to a new location (that already exists on your system).

## Grep

- `grep -ir "text string" *` find all text/files in this dir with "text string" in them.
- `grep --context=10 -ir "text string" *` find all text in this dir with "text string" and show ten lines above and below each occurance.

## SED

- `sed -n '20,40p;41q' file_name` look at lines 20-40 in a certain file.

## Bash shortcuts

- `Ctrl + U` Clear the line.
- `Ctrl + A` Cursor to beggining of line.
- `Ctrl + E` Cursor to end of the line
- `Ctrl + R` Search through previous commands.

# Aliases

- `alias boom='ls -la'` now boom will run ls -la.
- Set them permanently in `~/.zshrc`.

## System Control

- `ps` not sure?
- `ps aux` see a list of system processes.
- `kill <pid>` kill a process.
- `kill -9 <pid>` force kill a process.
- `top` see all processes.
  - Can then use `k` to kill a process. Not sure how.
- `sudo` execture command with superuser privileges.
- `sudo !!` to repeat the last command with superuser privilidges.
- `shutdown` shutdown machine.
- `reboot` restart machine.
- `df` show disk usage
- `du` show directory space usages

## Other useful commands

- `date` show date
- `whoami` show who you are logged in as.
- `pwd` show path
- `man command` show mannual for command
- `cp file.ext filecopy.ext` copy a file
- `mv ./file.txt ./dir/file.txt` move a file.
- `rm -r` delet a directory.

## Bonus

- `history | awk '{print $2}' | awk 'BEGIN {FS="|"}{print $1}' | sort | uniq -c | sort -n | tail | sort -nr`
  - Find your most popular commands.