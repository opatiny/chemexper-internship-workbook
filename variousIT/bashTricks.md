# Various bash tricks / fun things

## `ascii`

The `ascii`command returns a table with ASCII characters in decimal and in hexadecimal.

Install: `dnf install ascii`

## `gnome-terminal`

This command opens a new terminal window in the current working directory.

## Alias: Custom bash command

You can easily make an alias, which basically consists in giving a new name to a bash command. You do that in the `~/.bashrc` file as follows:

```bash
# User specific aliases and functions
alias t='gnome-terminal' 
alias jx='npx jest --watch'
```

Open a new bash for the changes to take effect.

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