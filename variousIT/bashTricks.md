# Various bash tricks / fun things

[Home](../README.md)

## `alias`: Custom bash command

You can easily make an alias, which basically consists in giving a new name to a bash command. You do that in the `~/.bashrc` file as follows:

```bash
# User specific aliases and functions
alias t='gnome-terminal'
alias jx='npx jest --watch'
```

Open a new bash for the changes to take effect.

## `ascii`

The `ascii`command returns a table with ASCII characters in decimal and in hexadecimal.

Install: `dnf install ascii`

## `bat`

Displays text files with syntax highlighting. You can make an alias cat = bat.

Install: `dnf install bat`

## `brew`

## Cellar

The Cellar is the folder in which brew installs all the packages. It is in `/usr/local/`.

### Install

Refer to [https://brew.sh/](https://brew.sh/).

### `brew list`

List all packages installed with brew.

### `brew info <package>`

Get information about a specific package.

### `brew doctor`

See all warnings related to brew.

## `dnf`

This command basically allows you to install and manage packages on your os.

### See repository package version

Use the following command to see what version of a package will be installed if you use `dnf install` to install it.

```bash
dnf provides <packageName>
```

### Remove package

You must be root to run this.

```bash
dnf remove <packageName>
```

## DNS configuration (`/etc/hosts`)

There is a file that you can modify in order to indicate to your computer where to look for domain name/ip address information in priority. This means that the computer will checkout this file before it asks the DNS to convert domain name to ip address.

The file can be found in `/etc/hosts`.

An example of a line you would find in the file is localhost:

```
127.0.0.1       localhost
```

## `gnome-terminal`

This command opens a new terminal window in the current working directory.

## `netstat`

This command gives you loads of information about the status of your computer ports.

### Verify if a specific port is listening

```bash
sudo netstat -plnt | grep 1880
```

## `ps aux`

See all running processes. Combine with grep wo look for a specific command:

```bash
pas aux | grep node-red
```

## `screen`

The screen command allows you to interact with devices in serial. To get a list of all your serial devices, got to `/dev`. Generally, external devices names are similar to `ttyACM0`

### Exit screen

The way to exit screen is not very intuitive: you have to type `Ctrl+a` followed with `q`. You will then be asked to confirm that you want to quit the screen.

## `sha`: Verifying if file is corrupted

**SHA**: Secure Hash Algorithms

Install the `sha` command:

```bash
dnf install sha
```

Often, when you have to download some software, the provider gives you an SHA256 key, which is a hash of the files. This allows you to check wether the your download is corrupted or not.

Example og a SHA256 key: `SHA256: fbe7eff6b5a6786c9affd5917fce53e24f16c395178352768b96935a62499211`

To verify a downloaded file:

```bash
sha -2 downloadFile
```

This returns the sha256 of your download, compare it with the one given to you by the provider.

## `systemctl`: manage services
