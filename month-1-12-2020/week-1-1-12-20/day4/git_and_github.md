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

## Nodes on the Master Branch

Master commit 1 -> commit 2 -> commit 3 -> commit 4

## Creating Feature Branches

Master commit 1 -> commit 2 -> commit 3 -> commit 4
                -> commit 1 -> commit 2 -> commit 3

## Multiple Remotes

git remote add upstream <url>
git pull upstream master -> pull changes from the repository you forked from.

## Push to origin

git push origin master

- Origin is where you originally cloned the code from.

## To learn

- How to use `git commit -a`
  - Answer: 
- How to `git commit` with `-m`, and user the terminal to write the commit message.
- How to view the git diff for a file.

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

## Others

- Cherry pick, rebase, revert, stash, clean.
- https://www.udemy.com/course/git-advanced-commands/#instructor-1
  - Was on offer 83% when I saw it £9.99
  - There are free youtube resources - https://www.youtube.com/watch?v=0SJCYPsef54

### Advanced

Use: https://levelup.gitconnected.com/automate-repetitive-tasks-with-custom-git-commands-76a4b71d262f