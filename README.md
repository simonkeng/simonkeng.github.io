# bash
-----------

estimate size of file_path

`du -sh file_path`

[more info](https://unix.stackexchange.com/questions/185764/how-do-i-get-the-size-of-a-directory-on-the-command-line)


### grep

Gotta love grep. Here's a trivial grep:

`grep banana bread.txt`

–looks for all the locations of the string "banana" (if any) in the file bread.txt

We can add the `-n` flag to return string locations with line numbers.

`grep -n banana bread.txt`

Less trivial grep use:

`ls | grep bread`

–looks for all files in the current directory named or containing the string "bread".

...and in a specific directory, looking for only Python files.

`ls /Users/garrygergrich | grep *.py`

You can invoke a redirect here to take the grep output and store it in a file, pythonexec.txt

`ls /Users/garrygergrich | grep *.py > pythonexec.txt`







# vim

----------

    $ echo "# new python file" > snake.py
    $ vim snake.py


Press arrows to move, press `i` to enable insertion, to edit the file. Once you have made changes, press `esc` followed by `:` with `wq` then enter.

This will write (save) with `:w` and quit with `:q`



























