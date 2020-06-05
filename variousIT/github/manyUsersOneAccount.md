# Many GitHub users, one session: how to push

**Goal:** We are many users on the same account on MacOS and want to push to as different GiHub users.

Link: [https://gist.github.com/jexchan/2351996](https://gist.github.com/jexchan/2351996)

All this without using https.

## Create new ssh key

Create an ssh key called `id_rsa_opatiny` (`opatiny` is the username, you should call it whatever you want):

```bash
ssh-keygen -t rsa -C "oceane@patiny.com"
```

Add identity (?):

```bash
ssh-add id_rsa_opatiny
```

List identities:

```bash
ssh-add -l
```

## Add ssh public key to Github account

Go to `~/.ssh/` and copy `id_rsa_opatiny` to your clipboard. Go to your github account -> "Settings" -> "SSH and GPG keys" and create a new SSH key.

## Create / modify ssh config

Create a `~/.ssh/config` file and adapt the code underneath to your needs:

```bash
# opatiny account
Host github.com-opatiny
	HostName github.com
	User git
	IdentityFile ~/.ssh/id_rsa_opatiny

# <user2> account
Host github.com-<user2>
	HostName github.com
	User git
	IdentityFile ~/.ssh/id_rsa_<user2>
```

## Clone repo using custom Host variable

```bash
git clone git@github.com-opatiny:opatiny/<repoName>.git
```

## Modify git config

These commands have to be run inside of the cloned repo. They only change name and email locally. Use `--global` option for global changes.

```bash
git config user.name "Océane Patiny"
git config user.email "oceane@patiny.com"
```

## Add / commit / push

You can now work normally inside of the repository.
