## GitHub cheatsheet

## Unstage last commit

```bash
git reset HEAD~1 # ~1 means you want to unstage only the last commit
```
## Where to put the JS-docs in GitHub

Use the [cheminfo-tools](../js/npmDevPackages) package to generate the docs.

In GitHub, go to the project Settings -> Options -> GitHub Pages and set the "Source" to "master branch /docs folder".

Copy the GitHub Pages link, go back to the project main page and paste it next to the project description.
