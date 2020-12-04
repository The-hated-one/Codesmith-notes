# Git and GitHub

Take the time to practice these technologies now.

Try out the more advanced git technology.

Never feel afraid to mess around with git and github.

## Version Control

On Github it is called a central repository.

On your machine it is a called a local repository.

It allows you to take *snapshots* of your project, and to *revert working code*.

## Types of Version Contorl

- Git
- SVN
- Mercurial
- And so on...

Git is by far the most popular.

## Git Terminology

- Repository/repo -> folder with the source files.
- .git folder
  - The head references denote changes and are stored in an invisible folder with name .git
- Snapshots saved as commits
  - Commites are saved as a *linked list*, where each commit is a node with a reference back to the previous commit.
- .gitignore
  - Used to exclude certain files from git tracking
  - Which kind of files:
    - node_moduels -> as we have `package.json` which says which dependencies we need for this.
    - If you have API keys or passwords.
    - Any files that are specific to your machine.
    - DS_STORE files -> deal with icons and stuff on your machine.

## Git Commands

```
git init -> initializes a folder as a Git repository
git status -> prints status files in repository
git add -> adds a file to version control
git commit -> commits a change
git log -> logs recent operations
git checkout -> creates or switches to a branch
git merge -> merges one branch with another
```

## To learn

- How to use `git commit -a`

- Commit:
  - Abort rebase
  - Commit staged (Amend)
  - Commit all (Amend)
  - Undo last commit -> command
  - Commit staged (Signed Off)
  - Commit all (Signed Off)

- Changes
  - Stage all changes
  - Unstage all changes
  - Discard all changes

- Pull, Push
  - Sync
  - Pull (rebase)
  - Pull from...
  - Push to...
  - Fetch
  - Fetch (Prune)
  - Fetch from all remotes

- Branch
  - Merge Branch
  - Rebase Branch
  - Create Branch From
  - Rename Branch
  - Publish Branch

- Remote
  - Add Remote
  - Remove Remote

- Stash
  - Stash (Include Untracked)
  - Apply Latest Stash
  - Apply Stash...
  - Pop Latest Stash
  - Pop Stash...
  - Drop Stash...

- Tags
  - Create Tag
  - Delete Tag

