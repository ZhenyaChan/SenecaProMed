# SenecaProMed - Wiki

## Table of contents

- [Git and GitHub](#git-and-github)
  - [[Git: The Basics](https://git-scm.com/book/en/v2/Getting-Started-Getting-Help)](#git-the-basicshttpsgit-scmcombookenv2getting-started-getting-help)
  - [GitHub](#github)
  - [[Branching](https://www.atlassian.com/git/tutorials/using-branches#:~:text=In%20Git%2C%20branches%20are%20a,branch%20to%20encapsulate%20your%20changes.)](#branchinghttpswwwatlassiancomgittutorialsusing-branchestextin20git2c20branches20are20abranch20to20encapsulate20your20changes)
- [Conventions and Standards](#conventions-and-standards)
  - [Naming](#naming)
  - [On GitHub](#on-github)

## Git and GitHub

### [Git: The Basics](https://git-scm.com/book/en/v2/Getting-Started-Getting-Help)

Git is like a camera, you take a snapshot of the files that you have placed on the stage, and then name and date that shot. Here are some of the most useful commands:

- You prepare the stage if you don't have one.

    ```sh
    git init # Create an empty Git repository or reinitialize an existing one
    ```

- You check the status of your items on your stage and also compare them with ones from the previous snapshot.

    ```sh
    git status  # Show the working tree status
    ```

- You add item(s) to your stage - this is also called Staging.

    ```sh
    git add item1 item2 # Add file contents to the index
    ```

- You take the snapshot of your stage and label it.

    ```sh
    git commit -m "message" # Record changes to the repository
    ```

- You replace the previous snapshot in 'main' with the one you just took

    ```sh
    git push origin main # Update remote refs along with associated objects
    ```

- If someone took a snapshot, and pushed it to the repo. You can issue this command to sync the changes he/she made with yours.

    ```sh
    git pull # Fetch from and integrate with another repository or a local branch
    ```

### GitHub

This is meant to be a hub for Git repos, which we can share and collaborate on working with them.

Similar services that might have different concepts:

- [Azure Repos in Azure DevOps](https://azure.microsoft.com/en-us/products/devops/repos/)
- [BitBucket](https://bitbucket.org/product/)

### [Branching](https://www.atlassian.com/git/tutorials/using-branches#:~:text=In%20Git%2C%20branches%20are%20a,branch%20to%20encapsulate%20your%20changes.)

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

#### Standards

- Use upper camel case for classes: `class StudentWriter`
- Use lower camel case for variables: `const studentData`
- Use `_` and upper case for environment variables: `USER_SECRET`

#### Avoid

- Avoid abbreviations.
  - example: use `message` instead of `msg`
- Avoid numerals
  - example: `message1`, `message2`.

### On GitHub

#### Branch Naming

For branch names, use your initials at least for others to know who is the owner of the branch. For more details, when it's available, try to include task name, examples:

- hb
- hb-task_at_hand

#### Commit Messages

Begin the commit message with the type of the commit followed by a : and brief description.

- `docs: update User API endpoints`

Types of commits include:

- `fix` - use if committed code is fixing a bug(broken code).
- `feat` - stands for feature. This will likely be your most common type that you use. It should be used for any new functionality that is committed.
- `test` - use if committed code is adding test functionality.
- `refactor` - use if updating and/or removing existing code.
- `docs` - use if updating your readme.
Examples of good commit messages:
- `fix`: broken calculation for percent high ranking cards
- `feat`: add shuffle to deck
- `test`: add test for shuffle
