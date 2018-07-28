# Command Line Jiu Jitsu

Influenced and inspired by [Command Line Kung Fu](https://books.google.com/books/about/Command_Line_Kung_Fu.html?id=HwOjoAEACAAJ), tailored to *data scientists* needs and anyone new to [bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)), [git](https://en.wikipedia.org/wiki/Git), or [vim](http://www.vim.org/).

-----

# Ag

Use `ag` to recursively search for `pattern` in `path`, similiar to grep or awk, but much faster. Read about it [here](https://github.com/ggreer/the_silver_searcher).

```bash
ag <pattern> <path>
```
### install

	brew install the_silver_searcher

Once downloaded, `man ag` will provide all the information you need about using this tool, like applying regex, counts, columns, or showing only file names.

### how to use it

	ag ABC1 ~/Users/keng/Projects/

–where `ag` will search for the string `ABC1` in all the files and file names, recursively, down from `Projects/` to the very bottom of the directory tree.


----------


# disk usage

Estimate the size of `file_path`

    du -sh file_path


Estimate the size of every directory or file in the current directory

    du -sh *

For more information visit this [stack exchange post](https://unix.stackexchange.com/questions/185764/how-do-i-get-the-size-of-a-directory-on-the-command-line).


----------

# grep, ls, find

List all lines that contain a string matching `foo` in `file.txt`

    grep foo file.txt

    grep -n foo file.txt

–to see the line number.



List all files in the current directory named (or containing) the string `blah`

    ls | grep blah

Search /path/to/something/ for a file containing `9xyz` in its name.

    ls /path/to/something/ | grep 9xyz


Same as example above except recursive search, and return paths if file name exists.

    find . -name "*9xyz*"

..will return the path(s) to any files containing `9xyz` in the file name.

----------

# touch

Create files. Also update the date that a file was edited.

	$ touch file.txt

You can make multiple at once.

	$ touch code1.py code2.py

----------

# ping

Check if your internet is working. Check if a website is running and the URL is live, or if anything is listening on a machine/server.

	$ ping www.google.com -c 3

The `-c` flag tells it to only ping three times. You can run `ping` without the flag, and watch the pinging happen. To stop it, press ctrl + c.


----------

# cat

If you want to smash several files together, try using `cat`. Here we have three CSVs in our working directory.

	$ ls
    one.csv
    two.csv
    three.csv
    $ cat *.csv >> all.csv

then to sort the output by unique lines with `sort -u`

	$ sort -u all.csv > sorted_all.csv

Note: `>` will overwrite, `>>` will append.



----------


# history

Save your bash history to a file

    history > foo.txt

Find out which commands you use most often

	history | awk '{print $2}' | sort | uniq -c | sort -rn | head

----------


# pip

Find out what pip packages are installed

    pip freeze

If you want to save your pip packages in a file, e.g. `requirements.txt`

    pip freeze > requirements.txt

`requirements.txt` will be generated in the current working directory


----------



# tesseract OCR

[Tesseract](https://github.com/tesseract-ocr/tesseract) is an open source optical character recognition (OCR) command line tool that uses the `libtesseract` OCR engine.

### install

	brew install tesseract


### convert image to searchable PDF

First take your patent or article image, and convert it to a TIFF. On macOS, within the Preview application, go to File > Export, in the pop up window choose:

1. Format: TIFF

2. Compression: None or JPEG

3. Resolution: 300 pixels/inch

Then from the command line

	tesseract patent123.tif output123 pdf

tesseract will provide a readout to STDOUT while the OCR is running.

Note: If Preview fails to export your image as a TIFF, then compression might be the solution. Choose compression: JPEG – and from the command line

    tesseract patent123.jpg output123 pdf

Another example is to go from `.png`, `.jpg`, `.tiff` ---> `.txt`.  With tesseract this task is trivial.

	tesseract patent123.tif output123

–the default output for tesseract is `.txt` format.

### OCR in other languages

Default `lang` is english, but you can run tesseract with the `-l` flag and specify another language. Here is a list of common languages you might come accross, with their 3-charater ISO 639-2 language codes. For a full list of language codes, visit the [man page here.](https://github.com/tesseract-ocr/tesseract/blob/master/doc/tesseract.1.asc)

`deu` German

`fra` French

`jpn` Japanese

`kor` Korean

`chi_sim` Chinese simplified

`chi_tra` Chinese traditional

Example:

	tesseract imagename outputfile -l jpn


For more information see the [documentation](https://github.com/tesseract-ocr/tesseract/wiki/Documentation), [FAQ page](https://github.com/tesseract-ocr/tesseract/wiki/FAQ), and the [Wiki page](https://github.com/tesseract-ocr/tesseract/wiki). If you are having issues installing tesseract via homebrew, try running `brew doctor` and check [Stack Overflow](https://stackoverflow.com/) for assistance interpreting the output.


----------


# openSSL

Generate a password using openSSL

    openssl rand -base64 48 | cut -c1-${1}

–you may specify character length too, here it is 48.

Use alias for making a password generator

    $ cd ~
    $ echo "alias pgen='openssl rand -base64 48 | cut -c1-${1}'" >> .bash_profile

in a new terminal

    $ pgen
    sp8RiuHA+FbTDP/P7YUL7WWEgKTnfT2NjbT2JOf657O94Zvto/q1r7A3ctbPc9qc


----------

# vi & vim

The following simplified list of commands are for getting up and running fast, for more thorough vi cheat sheets see the links [here](http://www.viemu.com/vi-vim-cheat-sheet.gif) and [here](http://www.fprintf.net/vimCheatSheet.html).

### running vim or vi
	$ vim

	$ vi

–the editor will open in normal mode, to enter 'insert' mode type `i` and enter in some text. To save and quit, press `ESC` followed by `:` then enter the letters `w` (save) and `q` (quit) then press enter.

Note: [difference between vim and vi?](https://askubuntu.com/questions/418396/what-is-the-difference-between-vi-and-vim)

## navigation

### char nav

`h` move cursor left

`l` move cursor right

`k` move up

`j` move down

### word nav

`w` moves to the start of next word

`e` moves to the end of the word

`b` moves to beginning of the word

### document nav

`H` move to top of screen

`L` move to bottom of screen

`gg` jump to the first line of the document

`G` jump to the last line of the document

`<number>G` will jump directly to that line number, so `12G` will jump to line 12 in your code.

### line nav

`0` jump to the start of the current line

`A` append to the end of current line

`$` jump to the end of a line

### searching

`/` to search and `n` to go to the next occurance of the search, `N` to go in reverse. Regex can be used in searching. 

`%` will jump to the first occurance of parentheses or brackets. 

With `*` you can jump to the next occurance of the word your cursor is over, and `#` for the previous occurance. As an example, if you want to find the word "for" you can type `/for` to jump to the first occurance of "for", then use `*` to cycle through the next occurance and `#` to the previous. For searching with `/` you can use `n` and `N` to cycle through the next and previous occurance, respectively. 

### miscellaneous

`o` to insert a new line below the current line your on, and enter insert mode. 

`O` to insert a new line above the current line your on, and enter insert mode. 

### saving

`:w` save (write) the file

`:wq` save and quit

`:q` quit

`:q!` quit and toss away unsaved changes

`:saveas file` save as file

`:help keyboard` open help

For more information on vim and vi commands, usage, and to understand the vi language, visit this **very very** helpful [stack overflow post](https://stackoverflow.com/questions/1218390/what-is-your-most-productive-shortcut-with-vim?page=1&tab=votes#tab-top).

## vim enhancements

### color

    $ cd ~
    $ echo "syntax on" >> .vimrc

You can even choose your own [color scheme](http://alvinalexander.com/linux/vi-vim-editor-color-scheme-colorscheme).

### line numbers and tabs

Here are some other vim settings to enrich the experience:

    $ cd ~
    $ vim .vimrc

and add the following lines

    set number
    set expandtab
    set tabstop=4
    set softtabstop=4
    set shiftwidth=4
    set autoindent
    set showmatch

Find more information [here](http://www.makeuseof.com/tag/5-things-need-put-vim-config-file/).

**Note** If you are looking for a feature-packed, colorful, modern, and professional vim experience, check out my current [oh my vim configuration](https://github.com/simonkeng/dotfiles#vim).


----------

# zip

Compress everything in current directory, as "foo.zip"

    zip -r foo.zip .


extract "foo.zip"

    unzip foo.zip


----------

# git

This is a breif outline of the basic git commands used in a trivial case.

### clone a remote repo

    git clone https://github.com/something.git

Makes a local copy of the remote repo _somehting_.

### make your own branch

    git checkout -b my_branch

Makes a new branch in your local cloned repo, and swiches from master branch to your newly created branch.

### list branches

    git branch

List the local branches, and notes the current branch you are in. To list local and remote branches, use `git branch -a`.

### pushing to remote repo

    git push origin my_branch

Pushes the new branch to the remote repo, other users can now access your branch, but only if your report repo is accessible to them.

### switch to another branch

    git checkout branch_name

Switch to branch_name.

### merging branches

If you want to merge changes from master with your local changes in your branch, then do:

    git checkout my_branch

..navegate to my_branch

    git merge master

..and merge with master, which pulls commits from master into the active local branch, my_branch.

### view git logs

    git log

Will display the record of commits.

### undo local changes

    git checkout -- {filename}

Overwrite uncommited, unstaged changes for a single file. Pulls from the most recent local commit (HEAD). Reverts a single file to the last commited state, **working directory is changed!**

### undo add

    git reset HEAD

Clears the index, i.e. undo 'git add' for all staged changes. Working directory is not changed.

### undo commit

    git reset --soft HEAD^

Working directory is not changed, this points HEAD to the previous commit. Index is NOT reset, staged changes are still in index.

### completely start over

    git reset --hard HEAD

Clear all changes since the last commit, reset index, **reset the working directory**, throw out all changes and work, start over from the last commit.


Note: if you would like to show the current git repo status in your bash prompt, visit [this page](bash_rc_for_git_func.html)

----------

### Contact

<simondkeng@gmail.com>

- [LinkedIn](https://www.linkedin.com/in/simonkeng/)
- [GitHub](https://github.com/simonkeng)

----------

- [Home](/)
