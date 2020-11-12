# Git notes

## Undo a commit

- `git reset --soft HEAD~1` soft reset, changes in undone revisions are preserved.
- `git reset --hard HEAD~1` hard reset, only when you don't need the changes anymore.

## Undoing multiple commits

- `git reset --hard 0ad5a7a6` return to any previous revision. This undoes all commits after the one you returned to.

## View commit history

- `git log`

## Ignore files

- `echo 'ignoredfile.txt' > .gitignore` ignore a certain file.

## Branching

- `git branch branchname` create a branch without switching to it.
- `git checkout branchname` change to branchname
- `git merge branchname` merge branchname

### How to replace one branch with another

```
git checkout hotfixes
git reset --hard master
git push --force origin hotfixes
```