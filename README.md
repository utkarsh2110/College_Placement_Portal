
# College Placement Portal with Chatbot

This project is developed for the students of NMIMS University. The students were facing a lot of issues, while going through the placement process.

Some of which inlcudes: CV formatting, long wait hours as placement committee was understaffed. So, here comes the solution where a student can upload their documents online and the admin can verify it.

Students won't have to wait for long in queue. There is a feature to build CV by just filling a form without any hassle. They can ask any doubt directly to admin or an query the chatbot.

This project also aims to decrease the load on the placement committee as admin will able to manage the documents of the students, verify tham and resolve student's query throught the web app itself.

Admins can also add training details, preparation material and student can access the same through the website itself.

## Installation

Install my-project with npm

i. To run the backend

```bash
  cd collge_placement_portal 
  cd backend 
  npm i
  node app.js 
```
ii. To run the frontend

```bash
  cd frontend 
  npm i
  npm run dev
```

Now you can use this project. 
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file


`API_KEY` : api key of gemini pro

`SECRET_KEY`:  key used to encrypt user passwords

`EMAIL` : the email through which emails are sent

`EMAIL_PASS` : the app pass for nodemailer

`MONGO_PASS` :  password for mongoDB


i.  You  can get the gemini pro api-key through google ai studio\
ii. Don't use your gmail pass as it will not work.\
iii. Get the app password for nodemailer by turning on 2FA in email settings.
 
