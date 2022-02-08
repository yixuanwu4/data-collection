# data-collection

## Getting started

1. Install `node.js` with version 17.3.1
1. Install postgresql
1. Set up a postgresql user
1. Run `yarn install`
1. Run `yarn add --dev nodemon`
1. Run `yarn dev`
1. Go to `http://localhost:3000`
1. Data can be exported to csv by visiting `http://localhost:3000/export`

## Creation process
1. Set up a free ARM server on Oracle Cloud
   1. Open ingress port `80`
1. Connected to the subdomain homework.yxwu.me to the server by adding DNS A and AAAA records
1. Open ingress port `80` on the server with `iptables -I INPUT 6 -m state --state NEW -p tcp --dport 80 -j ACCEPT`
1. Set up nodejs on the server with `apt install node`
1. Initialized a new JavaScript project with `yarn init .` inside my project folder
1. Created a git repository on Github
1. Associated my local project with the git repository
   1. `git init`
   1. `git add .`
   1. `git config --global user.email "56627720+yixuanwu4@users.noreply.github.com"`
   1. `git config --global user.name "Yixuan"`
   1. `git commit -m "first commit"`
   1. `git branch -M main`
   1. `git remote add origin https://github.com/yixuanwu4/data-collection.git`
   1. `git push -u origin main`
1. Added `express` to the project with `yarn add express`
1. Added a `.gitignore` file generated by gitignore.io
1. Implemented `index.html`, `style.css`, and `form.html`, and updated to the git repository. 
1. Setup postgresql database
   1. Install postgresql database on the server with `sudo apt install postgresql`
   1. Log into database with `sudo -u postgres psql`
   1. Create new database for this project `CREATE DATABASE datacollection;`
   1. Create a new user `CREATE USER yixuan WITH ENCRYPTED PASSWORD 'kittysMakeMeHappy';`
   1. Grant permissions to user for new database `GRANT ALL PRIVILEGES ON DATABASE datacollection TO yixuan;`
   1. Create a new table with the header names (see the command in file tables.sql)
   1. Insert a row into the created table (see the command in file tables.sql) 
1. Start server in production mode `yarn prod &` (prod is defined in package.json)
1. From pg-copy-streams import copyTo to copy the data out of PostgreSQL and save it into export.csv. 

## Resources
 - https://docs.oracle.com/en-us/iaas/developer-tutorials/tutorials/apache-on-ubuntu/01oci-ubuntu-apache-summary.htm