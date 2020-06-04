# How to push as a given user on the same accout

All this without using https.

## Create new ssh key

Create a key called `id_rsa_oceane`:

```bash
ssh-keygen -t rsa -C "oceane@patiny.com"
```

Add identity:

```bash
ssh-add id_rsa_oceane
```

Create a `~/.ssh/config` file.

```bash
# opatiny account
Host github.com-opatiny
	HostName github.com
	User git
	IdentityFile ~/.ssh/id_rsa_oceane

# lpatiny account
Host github.com-lpatiny
	HostName github.com
	User git
	IdentityFile ~/.ssh/id_rsa
```
