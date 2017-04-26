# bash


-----


get file_path size

    du -sh file_path

[more info](https://unix.stackexchange.com/questions/185764/how-do-i-get-the-size-of-a-directory-on-the-command-line)

save bash history to a file

    history > foo.txt

## grep

list all lines that contain a string matching "foo" in "file.txt"

`grep foo file.txt`

`grep -n foo file.txt` to see the line number



list all files in a directory called "blah"

`ls | grep blah` searches for a file name containing "blah", in the current directory.

`ls /path/to/greatness/ | grep 9xyz` searches /path/to/greatness/ for a file containing "9xyz" in its name.




## zip

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







#### Questions?

email [me](simonkeng@me.com)

    [~] cd P
    Pictures/ Projects/ Public/
    [~] cd Projects/
    [~/Projects] cd simonkeng.github.io/
    [~/Projects/simonkeng.github.io] ls
    README.md   _config.yml
    [~/Projects/simonkeng.github.io] du -sh .
    224K    .
    [~/Projects/simonkeng.github.io] githubpages
    (githubpages) [~/Projects/simonkeng.github.io] pip freeze
    appdirs==1.4.3
    packaging==16.8
    pyparsing==2.2.0
    six==1.10.0
    (githubpages) [~/Projects/simonkeng.github.io] git status
    On branch master
    Your branch is up-to-date with 'origin/master'.
    nothing to commit, working directory clean
    (githubpages) [~/Projects/simonkeng.github.io] echo "# new feature" > foo.txt
    (githubpages) [~/Projects/simonkeng.github.io] ls
    README.md   _config.yml foo.txt
    (githubpages) [~/Projects/simonkeng.github.io] git status
    On branch master
    Your branch is up-to-date with 'origin/master'.
    Untracked files:
      (use "git add <file>..." to include in what will be committed)

        foo.txt

    nothing added to commit but untracked files present (use "git add" to track)
    (githubpages) [~/Projects/simonkeng.github.io] rm foo.txt
    (githubpages) [~/Projects/simonkeng.github.io] ls
    README.md   _config.yml
    (githubpages) [~/Projects/simonkeng.github.io] ls | grep m
    README.md
    _config.yml
    (githubpages) [~/Projects/simonkeng.github.io] ls | grep .
    README.md
    _config.yml
    (githubpages) [~/Projects/simonkeng.github.io] ls | grep a
    (githubpages) [~/Projects/simonkeng.github.io] ls | grep A
    README.md
    (githubpages) [~/Projects/simonkeng.github.io] git status
    On branch master
    Your branch is up-to-date with 'origin/master'.
    Changes not staged for commit:
      (use "git add <file>..." to update what will be committed)
      (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   README.md

    no changes added to commit (use "git add" and/or "git commit -a")
    (githubpages) [~/Projects/simonkeng.github.io] git add --all
    (githubpages) [~/Projects/simonkeng.github.io] git commit -m "more to readme"
    [master 09bebef] more to readme
     1 file changed, 74 insertions(+), 2 deletions(-)
    (githubpages) [~/Projects/simonkeng.github.io] git push -u origin master
    Counting objects: 3, done.
    Delta compression using up to 4 threads.
    Compressing objects: 100% (3/3), done.
    Writing objects: 100% (3/3), 1.35 KiB | 0 bytes/s, done.
    Total 3 (delta 0), reused 0 (delta 0)
    To https://github.com/simonkeng/simonkeng.github.io.git
       2055b1d..09bebef  master -> master
    Branch master set up to track remote branch master from origin.
    (githubpages) [~/Projects/simonkeng.github.io]






















