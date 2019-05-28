#problems for oath2 service
1. 400 invalid requests
This is because you are using 127.0.0.1:8080 for the test
Google *HATES* numeric ip address, to use the oath2, always use *DOMAIN NAMES*
i.e: for a local testing, use localhost
2. Problems when deploying app to heroku
just follow the instruction on https://devcenter.heroku.com/articles/deploying-nodejs#prerequisites