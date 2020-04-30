## GitHub cheatsheet

## Actions / Workflows

### Environment variables

See [https://help.github.com/en/actions/configuring-and-managing-workflows/using-environment-variables](https://help.github.com/en/actions/configuring-and-managing-workflows/using-environment-variables)

### Publishing an app to GitHub pages

Imagine that you are in the following case: you just finished developing a front-end application that works in the browser, and you want to have a server that will serve it to you. In GitHub, it is possible to have an app served on the GitHub pages by using workflows (aka Actions).

How to do that?

- verify that your app builds (with relative paths!) and that you can run it from Live Server
- create a `.github/workflows` folder in your project and copy [deploy.yml](./layouts/deploy.yml) to it
    - this is a template that you should modify with your own data
    - add the file, commit and push
- create a new access token (if not done yet)
    - go to your profile Settings -> Developer settings -> Personal access tokens -> Generate new token
    - name it and give it access to `public_repo`
    - don't forget to copy the hash!!! It will be lost otherwise
- create a new Secret
    - got to the repository Settings -> Secrets
    - "Add a new secret" and call it `ACCESS_TOKEN`
    - save the secret
- locally, make some minor changes and push them
- the github pages should be automatically set to the `gh-pages` branch
    - the app will be built and published to gh pages after every push

## Branches

### Create a new branch

This command creates a branch called `newBranch` and switches to it:

```bash
git checkout -b newBranch
```

### Switch to another branch

```bash
git checkout master # switch to master
git checkout anotherBranch # switch to anotherBranch
```

### Sync two branches

Imagine that you are in a branch `anotherBranch` and that you have commit on `master` which you would like to to "pull" on `anotherBranch`.

```bash
git checkout anotherBranch # go on the branch
git rebase master # sync anotherBranch with master
```

### Merge two branches

When you merge branches, you want to apply all the changes you have made in one branch to another one. This can often generate conflicts, especially is you have worked on the other branch in the meantime. TO verify that you do not have too many conflicts when merging, you can first sync the two branches using `rebase`.

Imagine you want to merge `aBranch` with `master`. Firstly:
```bash
git checkout aBranch # go on the branch
git rebase master # sync aBranch with master
```

Only if this works, you can safely merge `aBranch` with `master`:
```bash
git checkout master
git merge aBranch # apply all changes of aBranch to master
```

## js-docs: Where to put the JS-docs in GitHub

Use the [cheminfo-tools](../js/npmDevPackages) package to generate the docs.

In GitHub, go to the project Settings -> Options -> GitHub Pages and set the "Source" to "master branch /docs folder".

Copy the GitHub Pages link, go back to the project main page and paste it next to the project description.

## Tests failing

You see that tests fail in GitHub when there is a little cross next to the last commit message (see image). By clicking on the cross, you can have all the details of the tests failing.

<img src="./images/github-commit-test-fail.png" alt="./images/github-commit-test-fail.png" width="70%" class="center">

## Unstage last commit

```bash
git reset HEAD~1 # ~1 means you want to unstage only the last commit
```

## URL to specific lines in a commit

It is possible to get a unique URL that links to some lines of a commit by installing the **GitHub Linker** plugin.
Once installed, highlight some lines, R+Click -> *Github Linker: Copy link to selection*.
Then, you can for example open an issue and paste the link in it. Once you commit your local change, the link will show you the exact highlighted lines.

## URL to a file at a certain commit

When browsing in files in GitHub, you can press **y** and the url of the page will change into a unique URL that will always lead to that exact version of the file.


