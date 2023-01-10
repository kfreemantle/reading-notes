# Revision and the Cloud notes

## Class notes and reading assignment: Read 03

How much capacity does your cloud have?  Over one thousand.

![HP cloud](https://venturebeat.com/wp-content/uploads/2012/07/onion-cloud.jpg?resize=655%2C402&strip=all)

### Revisions, version control, Git

- Trying to manually control each version of a document or piece of code for an ongoing project can be daunting.  Tools like **Git** are intended to systemically address version control, making it easier to track changes to a project both before and after you've committed to them.
- Each **commit** or *snapshot* has a label pointing to it in Git.  Depending on where you are in the branches of your commit path you will see a **HEAD** indicator, to let you know that's where you're working from.  When you make a commit, you **can and should take notes on the commit for future reference.**

### Git vs GitHub

- **GitHub is not Git.**  
- **Git** is a version control system developed by Linus Torvalds in the early 2000s, partially out of ***spite.***
- **Github** is a way to share code with other individuals and teammates.  It's an online repository. 
- Github uses **Git** to help you manage team work, including timestamps, notes, multiple user editing, etc.
- **Git** is *version control,* and **GitHub** is *online code storage.*  
- It is *crucial* to keep version control and access as transparent as possible.  
- ***Take your bloody notes before you commit!***

#### Git notes
- **git config --list** command shows current git configuration settings, including your **working repository and remote origin.**
- There are three ways to get more information on a particular command, by accessing the manual:
1. git help command
2. git command --help
3. man git-command

[A very good guide on Git and the A-C-P process.](https://blog.udemy.com/git-tutorial-a-comprehensive-guide/)

### What's a repository?

- Usually one project = one repository.  A **repo** is a collection of files you've told Git to pay attention to.  
- Really big projects may have multiple repos for **front end work** and **back end work**
- Repositories can live on GitHub or locally on your PC.
- Repos can be created easily on GitHub.  Make sure it's marked **public** and that a **readme** is created with it.  The README is where you put a longer form project description.  
- Use a short and memorable name that's not profane for your repo.  It'll be part of the URL.

## Cloning a repo, git terminal commands
- **Cloning** allows you to create a local copy to work on your code
- In Github, select the green **code** button, then select the **HTTPS** tab.  
- Copy the link, and in the terminal run the **git clone (address)** command after navigating to your code projects folder.
- The command **git commit** will commit any changes you've modified in the branch.  Using the **git commit -m "comments"** command will allow you to add commit comments automatically to the changes you've pushed.
- You have to make changes manually when working through the terminal, or Git won't keep your changes.
- When committing changes, remember **ACP.  git add, git commit, git push.**
- **git add** is used to make changes to your **local** build.  *Picture adding toys into a box.
- **git commit** is used to commit your local changes to your build.  *Think of it like packaging that box of toys for shipping.
- **git push** is used to publish the commits to the Github page.  *This is actually shipping the box of toys.

If you've made changes in the browser in GitHub, the command **git pull** can be used to pull any different changes into your local environment from Github origin/main.


### Things I want to know more about

- I want to get a better sense of what is and is not a 'meaningful' change.
- How do people pull reports on version change history?  I bet it could be useful data for a BA.'
- Git stores a **reference** for each committed change.  How is that reference generated and later accessed?



