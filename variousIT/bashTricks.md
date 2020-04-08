# Various bash tricks / fun things

## `ascii`

The `ascii`command returns a table with ASCII characters in decimal and in hexadecimal.

Install: `dnf install ascii`

## `gnome-terminal`

This command opens a new terminal window in the current working directory.

## Custom bash command (alias)

You can easily make an alias, which basically consists in giving a new name to a bash command. You do that in the `~/.bashrc` file as follows:

```bash
# User specific aliases and functions
alias t='gnome-terminal' 
alias jx='npx jest --watch'
```

Open a new bash for the changes to take effect.
