# Command Line Jiu Jitsu


-----


## bash

estimate the size of `file_path`

    du -sh file_path


estimate the size of every directory or file in the current directory

    du -sh *

[more info](https://unix.stackexchange.com/questions/185764/how-do-i-get-the-size-of-a-directory-on-the-command-line)


save bash history to a file

    history > foo.txt




## grep

list all lines that contain a string matching `foo` in `file.txt`

    grep foo file.txt

    grep -n foo file.txt

–to see the line number.



list all files in the current directory called or containing `blah`

    ls | grep blah

searches /path/to/greatness/ for a file containing "9xyz" in its name.

    ls /path/to/greatness/ | grep 9xyz





## zip

compress everything in current directory, as "foo.zip"

    zip -r foo.zip .


extract "foo.zip"

    unzip foo.zip



## pip

find out what pip packages are installed

    pip freeze

if you want to save your pip packages in a file, e.g. `requirements.txt`

    pip freeze > requirements.txt

`requirements.txt` will be generated in the current working directory




# vim


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



### colorful vim

    $ cd ~
    $ echo "syntax on" > .vimrc

you can even choose your own [color scheme](http://alvinalexander.com/linux/vi-vim-editor-color-scheme-colorscheme), if the default vim color is not to your liking



## cryptography

generate a password using openSSL

    openssl rand -base64 48 | cut -c1-${1}

–you may specify character length too, here it is 48.

use alias for making a password generator

    $ cd ~
    $ echo "alias pgen='openssl rand -base64 48 | cut -c1-${1}'" > .bash_profile

in a new terminal

    $ pgen
    $ sp8RiuHA+FbTDP/P7YUL7WWEgKTnfT2NjbT2JOf657O94Zvto/q1r7A3ctbPc9qc






#### Questions?

email [me](simon.keng@schrodinger.com)


---------------