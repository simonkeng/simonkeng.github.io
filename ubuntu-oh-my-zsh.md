# Zsh with `oh my zsh` on Ubuntu

These instructions were made using a docker container running ubuntu 

- `apt-get update`
- `apt-get upgrade`
- `apt-get install zsh`
- `apt-get install wget`
- `apt-get install git-core`
- `sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"`
- activate ZShell: `zsh`
- `apt-get install vim`
- `cd` into `~/.oh-my-zsh/plugins` and run this command:

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git`
```
- open `.zshrc` with `vim` and add this package to your plugins list:

```zsh
plugins=([
  git,
  zsh-syntax-highlighting
])
```
- source the rc file:
```bash
source ~/.zshrc
```


