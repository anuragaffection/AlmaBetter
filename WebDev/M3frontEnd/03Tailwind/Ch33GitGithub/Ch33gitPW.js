/**
 * 
 * 
 *   01. What is Git & Github ?
 *   --- Git is a distributed version control system that tracks changes in files.
 *   --- GitHub is a web-based platform that hosts Git repositories, 
 *       enabling collaboration, code sharing, and version control management.
 * 
 * 
 * 
 * 
 * 
 *   02. What is version control ?
 *   --- ways to maintain & control the different or multiple version of application.
 *   --- makes easy to collaborate
 *   --- it maintain the previous version of application
 *   --- keeps the track of changes in application
 * 
 * 
 * 
 * 
 * 
 *   03. Different types of Version Control System
 *   --- Localized vc
 *   --- Centralized vc 
 *   --- Distributed vc 
 * 
 * 
 * 
 * 
 * 
 *   04. Localized version control 
 *   --- everything is happening on local or my computers
 *   --- changes of data loss is high, hardware crash, power failure
 * 
 * 
 * 
 * 
 * 
 * 
 *   05. Centralized version control 
 *   --- here we have centralized server, or server to store version 
 *   --- Data loss chance, is less compared to localized vc 
 *   --- here, single failure, will affect many system 
 * 
 * 
 * 
 * 
 * 
 *   06. Distributed Version Control
 *   --- No single point of failure of version
 *   --- here, we have centralized server + each individual have copy of version
 * 
 * 
 * 
 * 
 * 
 *   07. Version control tool 
 *   --- tool to manage version of applicaation
 *   --- eg. git
 * 
 * 
 * 
 * 
 * 
 *   08. Git 
 *   --- It is a distributed version control system tool.
 * 
 * 
 * 
 * 
 * 
 *   09. Git Snapshot
 *   --- State of the project or code at a specific moment or time
 *   --- Every commit have new snapshot 
 * 
 * 
 * 
 * 
 * 
 *   10. Git states 
 *   --- Modified - state when me make change to file 
 *   --- Staged - state when git started to track the code 
 *   --- Commited - file call to commit the changes
 * 
 * 
 * 
 * 
 * 
 * 
 *   11. Git Local 
 *   --- Installing git 
 *   --- Configuring git 
 *   --- Create git project 
 *   --- Git Operations 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *   12. Installing git 
 * 
 *   --- https://git-scm.com/downloads === git download link 
 * 
 *   --- git --version                 === to check whether git is installed or not 
 *   --- git version                   === to check whether git is installed or not 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *   13. Configuring git - to login or signup, who is the users 
 * 
 *   --- git config --global user.email " your email " === to assign email
 *   --- git config --global user.name  " Your Name "  === to assign name
 *   --- git config user.email                         === to check email
 *   --- git config user.name                          === to check name 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *   14. Some basic windows command 
 *  
 *   --- cd <folderName>      === to move to next folder  
 *   --- cd ..                === to go back to previous folder 
 *   --- q                    === to quit from the command line or terminal
 *   --- dir                  === to display all directories or folder
 *   --- mkdir <folderName >  === to create a folder
 *   --- pwd                  === present working directory 
 *   --- touch <fileName>     === to create a file (in mac only - check)
 *   --- ls -a                === how many file in folder  (in mack only - check)
 *   --- Notepad <fileName >  === to create a text file
 *   --- Notepad <fileName >  === to display what is written insid file
 *   --- cat <fileName>       === to display what is written within the file
 *   --- clear                === will clear all in terminal
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *   15. git operations
 * 
 *   --- git init                   === to initialize git in folder
 *   --- git status                 === to show the status of file
 *   --- git add .                  === will add all files in git
 *   --- git add <fileName>         === will add only one with fileName 
 *   --- git commit -m "message"    === to commit the code 
 *   --- git log                    === to see all the commit + head or recent commit
 * 
 *   --- git branch                    === to check on which branch, we are working
 *   --- git branch <branchName>       === to create new branch
 *   --- git checkout <branchName>     === to switch new branch
 *   --- git checkout -b <branchName>  === to switch & create new branch
 *   --- git branch -m <ReBranchName>  === to rename the current branch
 *   --- git branch -d <branchName>    === to delete the branch 
 *   --- git branch -a                 === display all branches 
 *   --- git switch <branchName>       === to switch branches 
 *   
 *   
 *   --- git restore <fileName>          === to restore prvious changes in file 
 *   --- git restore --staged <fileName> === to restore from add file in git 
 *   --- git reset --soft HEAD~1         === to restore form commited file in git
 *   --- git reset --hard HEAD~1         === to restore from commited file + it will change head
 *   --- git stash apply                 === to resore from commited file
 * 
 * 
 * 
 * 
 * 
 *   16. Merging Branches
 *   --- git merge < new branch name > === will merge new branch to main or current branch
 *   --- 
 * 
 * 
 *   17. Merge conflict 
 *   --- 
 * 
 * 
 *   
 * 
 * 
 * 
*/