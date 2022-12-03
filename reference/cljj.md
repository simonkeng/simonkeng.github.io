# Command Line Jiu Jitsu

Inspired by [Command Line Kung Fu](https://books.google.com/books/about/Command_Line_Kung_Fu.html?id=HwOjoAEACAAJ).

All examples assume `darwin` system using `bash`. I also use `fish` and `zsh`, so most examples should work across  shells.

-----

# Ag

[The silver searcher](https://github.com/ggreer/the_silver_searcher).

```bash
ag <pattern> <path>
```

----------

# Disks

_How big is this?_

```bash
du -sh <path or file>
```


Estimate the size of every directory or file in the current directory

    du -sh *


----------

# Finding X

```bash
grep <term> <file>
```

File/dir search: `ls` piped to `grep`

```bash
ls | grep <file/dir name>
```

Recursive (and better) file/dir search: `find`

```bash
find . -name "<term>"
```



# touch

Create file(s), or update the date that a file was modified.
```bash
touch README.md index.html index.css app.js Dockerfile
```


# tmux

Terminal multiplexer. Useful for disconnecting from `ssh` sessions without terminating a process or script. Can also be used as a window manager, e.g. creating panes, tabs, etc. and moving between them. 

### Create session:
```bash
tmux new -s <name>
```
### Attach: 
```bash
tmux a -t <name>
```
### Detach: 

Hotkeys: `ctrl + b` then ` d`

### List sessions:
```bash
tmux ls
``` 
### Kill session:
```bash
tmux kill-session -t <name>
```


# ping


```bash
ping www.google.com -c 3
```




# cat

Concatenate (smash) files together:

```bash
$ ls
# one.csv
# two.csv
# three.csv

$ cat *.csv >> all.csv
```

Sort by unique (`-u`) lines:
```bash
$ sort -u all.csv > sorted_all.csv
```





# history

```bash
history > weird_hotfix_that_I_will_never_remember.txt
```




# tesseract

[Tesseract](https://github.com/tesseract-ocr/tesseract) is an open source optical character recognition (OCR) command line tool that uses the `libtesseract` OCR engine.


### Convert image to searchable PDF

Take your image and convert it to a TIFF or JPG.

	tesseract document_image.tif output pdf


### OCR in other languages

Run tesseract with the `-l` to specify a language other than english. List of languages with their 3-character ISO 639-2 [language codes.](https://github.com/tesseract-ocr/tesseract/blob/master/doc/tesseract.1.asc)

- `deu` German
- `fra` French
- `jpn` Japanese
- `kor` Korean
- `chi_sim` Chinese simplified
- `chi_tra` Chinese traditional



----------


# openSSL

Generate a password with openSSL

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

# Networking





----------

### Contact

<simondkeng@gmail.com>

- [LinkedIn](https://www.linkedin.com/in/simonkeng/)
- [GitHub](https://github.com/simonkeng)

----------

- [Home](/)
