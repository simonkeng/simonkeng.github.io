

# Command Line Jiu Jitsu



-----


# disk usage

Estimate the size of `file_path`

    du -sh file_path


Estimate the size of every directory or file in the current directory

    du -sh *

For more information visit this [stack exchange post](https://unix.stackexchange.com/questions/185764/how-do-i-get-the-size-of-a-directory-on-the-command-line).


Save your bash history to a file

    history > foo.txt


----------


# grep

List all lines that contain a string matching `foo` in `file.txt`

    grep foo file.txt

    grep -n foo file.txt

–to see the line number.



List all files in the current directory named (or containing) the string `blah`

    ls | grep blah

Search /path/to/something/ for a file containing "9xyz" in its name.

    ls /path/to/something/ | grep 9xyz


----------


# the silver searcher

Use `ag` to recursively search for `pattern` in `path`, similiar to grep or ack, but much faster. Read about it [here](https://github.com/ggreer/the_silver_searcher).

### install

	brew install the_silver_searcher

Once downloaded, `man ag` will provide all the information you need about using this tool, like applying regex, counts, columns, or showing only file names.

### how to use it

	ag ABC1 ~/Users/keng/Projects/

–where `ag` will search for the string `ABC1` in all the files and file names, recursively, down from `Projects/` to the very bottom of the directory tree.


----------


# zip

Compress everything in current directory, as "foo.zip"

    zip -r foo.zip .


extract "foo.zip"

    unzip foo.zip


----------


# pip

Find out what pip packages are installed

    pip freeze

If you want to save your pip packages in a file, e.g. `requirements.txt`

    pip freeze > requirements.txt

`requirements.txt` will be generated in the current working directory


----------


# vim / vi


### navigation

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

For more information on vim and vi commands, usage, and to understand the vi language, visit this helpful [stack overflow post](https://stackoverflow.com/questions/1218390/what-is-your-most-productive-shortcut-with-vim?page=1&tab=votes#tab-top).

## vim enhancements

### color

    $ cd ~
    $ echo "syntax on" > .vimrc

You can even choose your own [color scheme](http://alvinalexander.com/linux/vi-vim-editor-color-scheme-colorscheme), if the default vim color is not to your liking.

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


----------


# tesseract OCR

[Tesseract](https://github.com/tesseract-ocr/tesseract) is an open source optical character recognition (OCR) command line tool that uses the `libtesseract` OCR engine.

### install

	brew install tesseract


### convert image to searchable PDF

First take your patent or article image, and convert it to a TIFF. On macOS, within the Preview application, go to File > Export, in the pop up window choose:

Format: TIFF

Compression: None

Resolution: 300 pixels/inch

Then from the command line

	tesseract patent123.tif output123 pdf

–tesseract will provide a readout to STDOUT while the OCR is running. If Preview fails to export your image as a TIFF, then compression might be the solution. Choose compression: JPEG – and the command would become

  tesseract patent123.jpg output123 pdf

The simplest example is to OCR an image and output a text file

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
    $ echo "alias pgen='openssl rand -base64 48 | cut -c1-${1}'" > .bash_profile

in a new terminal

    $ pgen
    sp8RiuHA+FbTDP/P7YUL7WWEgKTnfT2NjbT2JOf657O94Zvto/q1r7A3ctbPc9qc


----------


#### Questions?

[Email me](simon.keng@schrodinger.com)
