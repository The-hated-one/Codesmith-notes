# Git notes

## View current branch

- `git branch --show-current` - returns current branch

## Add and commit in one

- `git commit -a "messages"` - this only works for tracked files.

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
git checkout branch-to-be-replaced
git reset --hard branch-to-copy
git push --force origin branch-to-be-replaced
```