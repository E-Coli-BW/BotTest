#problems for oath2 service
1. 400 invalid requests
This is because you are using 127.0.0.1:8080 for the test
Google *HATES* numeric ip address, to use the oath2, always use *DOMAIN NAMES*
i.e: for a local testing, use localhost
2. Problems when deploying app to heroku
just follow the instruction on https://devcenter.heroku.com/articles/deploying-nodejs#prerequisites
# To host an app on heroku and still wish to host it on your localhost
use "const PORT=process.env.PORT || 8080;" to let heroku handle ip for you
# deployment procedure:
1.1: First time deploy
-Create a new repo on github, make initial commit, get all your app code to the git repo you just created
-declare app dependency using npm init, follow the npm instructions
-build and run locally first: 
  npm install
  heroku local web
- after local testing is done, deploy to Heroku by first commiting your code to heroku's git
  git add .
  git commit -m "xxxx"
  heroku login
  heroku create
  git push heroku master


3. Problems after deployment to heroku
Authorization works fine, but auto comment button is not functioning
gives no error msg but does nothing, whereas, if running the same scripts on localhost
the auto-comment button works fine.

4. Some Nodejs problems:
require not defined when running a script in browser
Reason: NodeJS is a server-side language, browser is meant to be for the client, so many features that NodeJS have is not supported(and not supposed) to be running in browser(the client side) 