# Changing commits author name and email

This is a weird and not very common scenario, but solving the problem introduces many git commands that can be used more often.

## Scenario

Imagine the following situation.

You commit and push from a computer that is not yours or where the username and email are not configure properly.

Your goal is to modify all the wrong commits.

## Make a copy

First of all, you should be sure to be in sync with the cloud. Additionally, you should make a copy of the repo in a folder, just in case you make a big mistake.

## Change username and email locally

[based on this link](https://stackoverflow.com/questions/4981126/how-to-amend-several-commits-in-git-to-change-author)

Use the following command to modify all the commit messages that are wrong without changing the timestamps.

```bash
git rebase -i YOUR_SHA -x "git commit --amend --author 'New Name <new_address@example.com>' -CHEAD"
```

Here, `YOUR_SHA` is the hash of the last correct commit in the history.

The command will open up a text editor explaining all the changes that will be made. Check that it is correct, save and close the file. The changes will be applied.

## Push the changes to the cloud

To push the changes, you will have to use the `--force-with-lease` option:

```bash
git push --force-with-lease
```

`--force-with-lease` will only push if there have been no new commits on the remote in the meantime (unlike `--force`).

You are now done.

## Having the wrong commits pulled on another machine

This is really an edge case and you should not modify the commits history if you are not the only person working on the repository. Imagine that the commits that had the name and author wrong were pulled on another machine. Here is what you should do.

### If you have uncommitted changes

Start by stashing your changes using `git stash`. This command saves the current state of the repository so that you can re-apply your changes later.

### Fetch the differences between local and remote

You have to sync the remote with the local version of the project, so that you know what the differences between them are. To do that use:

```bash
git fetch origin
```

### Force remote state to be applied locally

```bash
git reset --hard origin/master
```

### If applicable, apply the stash

If you had local uncommitted changes:

```bash
git stash pop
```

This will apply the changes you had saved in the stash and delete it. Using `git stash apply` would only apply the changes, still keeping the stash. Usually, you do not want to keep the stash, in which case you should use `pop`.

You are done, you can now continue working normally.
