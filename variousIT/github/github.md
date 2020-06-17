## GitHub cheatsheet

[Home](../../README.md)

## Actions / Workflows

### Environment variables

See [https://help.github.com/en/actions/configuring-and-managing-workflows/using-environment-variables](https://help.github.com/en/actions/configuring-and-managing-workflows/using-environment-variables)

### Publishing an app to GitHub pages

Imagine that you are in the following case: you just finished developing a front-end application that works in the browser, and you want to have a server that will serve it to you. In GitHub, it is possible to have an app served on the GitHub pages by using workflows (aka Actions).

How to do that?

- verify that your app builds (with relative paths!) and that you can run it from Live Server
- create a `.github/workflows` folder in your project and copy [deploy.yml](./deploy.yml) to it
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

When you merge branches, you want to apply all the changes you have made in one branch to another one. This can often generate conflicts, especially is you have worked on the other branch in the meantime. To verify that you do not have too many conflicts when merging, you can first sync the two branches using `rebase`.

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

## Contribute to a project that is not yours

### Step 1: fork

Go on the repository's page and click on "fork" (top right). The project will be copied to your organization.

### Step 2: clone

Clone the project you forked. 

### Step 3: create a new branch

Create a new branch in the cloned project and switch to it.

### Step 4: add your changes

Work on your new branch until you are happy and everything works. Push to your fork.

### Step 5: pull request

On the GitHub page of the forked project, click on the "Compare and pull request" button.

## `hub`

Install the `hub`command and create an alias `git=hub` in .bashrc to be able to clone projects like this:
```bash
hub clone <organization>/<repository>
```

Default `hub protocol is https, you can change this to ssh with:
```bash
git config --global hub.protocol ssh
```

**Note:** You will still be prompted for your credentials the first time you use this.

## Conventional commits

"Conventional commits" is basically a standard syntax for commit messages. You basically add a prefix to your message. These are the one we use:
- `BREAKING CHANGE:` when you add a breaking change to the API
- `feat:` when you add a new feature
- `fix:` when you fix a bug
- `chore:` when you update stuff, like package.json, or fix syntax
- `docs:` when adding some documentation
- `test:` when writing a new test case
- `refactor:` when you move things around

## js-docs: Where to put the JS-docs in GitHub

Use the [cheminfo-tools](../../js/npmDevPackages) package to generate the docs.

In GitHub, go to the project Settings -> Options -> GitHub Pages and set the "Source" to "master branch /docs folder".

Copy the GitHub Pages link, go back to the project main page and paste it next to the project description.

## Markdown

### [Resize image in issue](https://gist.github.com/uupaa/f77d2bcf4dc7a294d109)

You should use the html-like format and use height and width options like so:
```
<img src="https://your-image-url.type" width="100" height="100">
```

### [Images side by side in MD](https://stackoverflow.com/questions/24319505/how-can-one-display-images-side-by-side-in-a-github-readme-md)

You should create a table and have the images in different rows:
```
Solarized dark             |  Solarized Ocean
:-------------------------:|:-------------------------:
![](https://...Dark.png)  |  ![](https://...Ocean.png)
```

## Merge conflicts

If you have troubles with merging a local git project with the cloud:

- `add` and `commit` your local changes
- run the command `git rebase`
- if it tells you that you have conflicts, open the repo in vsCode and check the files with a little blue "c"
- open each of the files and accept the current or incoming change every time there is a conflict
- add, commit and push
- the conflicts are now solved

## Submodules

### Add a submodule

Run this command inside of the folder where you want the submodule to be:
```bash
git submodule add https://github.com/<gitOrganisation>/<repoName>
```

### Clone project with submodules

```bash
git clone --recurse-submodules https://github.com/<gitOrganisation>/<repoName>
```

### Update submodules

```bash
git submodule update --recursive --remote
```

### Remove a submodule

Submodules are mentionnend in many places in the `.git` folder of a project, so it is dangerous to go modify the files to delete them if you are unsure of what you are doing.

Procedure:
```bash
git submodule deinit <path_to_submodule>
git rm <path_to_submodule>
git commit-m "Removed submodule ..."
rm -rf .git/modules/<path_to_submodule>
```

## Tests failing

You see that tests fail in GitHub when there is a little cross next to the last commit message (see image). By clicking on the cross, you can have all the details of the tests failing.

<img src="./github-commit-test-fail.png" alt="./github-commit-test-fail.png" width="70%" class="center">

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
