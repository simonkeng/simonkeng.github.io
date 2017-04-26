# bash


-----


get file_path size

`du -sh file_path`
[more info](https://unix.stackexchange.com/questions/185764/how-do-i-get-the-size-of-a-directory-on-the-command-line)

save bash history to a file

`history > foo.txt`

### grep

list all lines that contain a string matching "foo" in "file.txt"

`grep foo file.txt`
`grep -n foo file.txt` to see the line number



list all files in a directory called "blah"

`ls | grep blah` searches for a file name containing "blah", in the current directory.
`ls /path/to/greatness/ | grep 9xyz` searches /path/to/greatness/ for a file containing "9xyz" in its name.




### zip

compress everything in current directory, as "foo.zip"

`zip -r foo.zip .`

extract "foo.zip"

`unzip foo.zip`








# vim (vi)


-----

### nav

`h` move cursor left
`l` move cursor right
`k` up
`j` down

`H` move to top of screen
`M` move to middle
`L` bottom

`$` jump to the end of a line
`O` jump to the start of a line

`G` jump to the last line of the document
`gg` jump to the first line of the document

### copy & paste

`yy` copy (yank) a line
`p` paste (put) from clipboard at position after cursor
`dd` cut (delete) a line
`x` cut a character

### saving

`:w` save (write) the file
`:wq` save and quit
`:q` quit
`:q!` quit and toss away unsaved changes
`:saveas file` save as file
`:help keyboard` open help























