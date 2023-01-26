# SenecaProMed - Wiki

## Git and GitHub

### Git: The Basics

Git is like a camera, you take a snapshot of the files that you have placed on the stage, and then name and date that shot.

The basic commands are:

```sh
git init    # Create an empty Git repository or reinitialize an existing one
            # ----------------------------
            # SIMPLY PUT: You prepare the stage if you don't have one

git status  # Show the working tree status
            # ----------------------------
            # SIMPLY PUT: you check and compare the current items
            # on your stage now, with the ones in the previous shot

git add item1 item2 # Add file contents to the index
                    # ----------------------------
                    # SIMPLY PUT: you add item(s) to your
                    # stage - this is also called Staging

git commit -m "message" # Record changes to the repository
                        # ----------------------------
                        # SIMPLY PUT: you take snap shot of your 
                        # stage and write something on it

git push origin main    # Update remote refs along with associated objects
                        # ----------------------------
                        # SIMPLY PUT: you replace the previous snapshot 
                        # in 'main' with the one you just took

git pull    # Fetch from and integrate with another repository or a local branch
            # ----------------------------
            # SIMPLY PUT: if someone has taken a snapshot, and 
            # pushed it. you can issue this command to sync 
            # changes he/she has made with yours. 
```

For more info just issue this line `git help` or want the whole list then issue `git help -a`.

### GitHub

This is meant to be a hub where you place your Git repos and then share them with others.
Similar services that might have different concepts:

- [Azure Repos in Azure DevOps](https://azure.microsoft.com/en-us/products/devops/repos/)
- [BitBucket](https://bitbucket.org/product/)

### Branching

It is preferred to keep the branch 'main' untouched when working with something. The way to do this is by creating another branch specific to the task at hand. When done you can issue a pull request to resolve conflicts before merging into main.

Now If you need to work on another task you can create another branch and do the same stuff.

This will be useful during collaboration with other team members. Because you don't want to be working on a piece of code, while you're teammate is also tinkering with the same file or structure.

Imagine building your PC on a table while your teammate is setting up its height.

- To create a branch from main you have to be in 'main' and issue the command:

```sh
git branch your-new-branch-name
```

- To check on which branch you are sitting you can use `git status`

```sh
$ git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

- To switch to a different branch use `git checkout`:

```sh
$ git checkout test
Switched to branch 'test'

$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
```

## Conventions and Standards

### Naming

### Variables

### Files

### On GitHub

#### Branch Naming

#### Commit Messages
