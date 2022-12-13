# Week-3-Code-Challenge
## Description
-in this project we will  implement a miniweb application using javascript
# Getting Started

In order for you to use the content on this repo ensure you have the following: -- A computer that runs on either of the following; (Windows 7+, Linux, Mac OS)

nodejs 9.0+

## Installation

To use this repo on your machine requires some simple steps

  ### Alternative One

Open a terminal / command line interface on your computer

Clone the repo by using the following:

  git clone https://github.com/susanirago22/Week-3-Code-Challenge
Be patient as it creates a copy on your local machine for you.

Change directory to the repo folder:

  cd week-3-code-challenge
(Optional) Open it in Visual Studio Code code .

(Alternate Option) Open it in any editor of your choice.

  ### Alternative Two

On the top right corner of this page there is a button labelled Fork.

Click on that button to fork the repo to your own account.

Take on the process in Alternative One above.

Remember to replace your username when cloning.

  git clone https://github.com/your-username-here/week-3code-challenge.git

## Running the application 

Running the application is very straight forward. You can use the following steps to run the app.

Install required dependencies from npm

   ### Step 1:
     -Create a db.json file.

   ### Step 2:
     -Run npm init -y to get package.json file.

   ### Step 3:
      -Run npm install json-server and it will be listed as a dependency in the package-lock.json file.

   ### Step 4:
      -In your package.json file in the "scripts" items  list add "serve-json":"json-server--watch db.json" to assist when you want to sart the server.
      -It will always update you on the latest data from the db.json file.
   
   ### Step 5:
      -Run npm run serve-json.
      -Click on the link (http://localhost:3000/film) to navigate to the json server.

## To make  a GET request

-On your terminal run npm run serve-json and use the second link  http://localhost:3000 to go  to the  local server.
-Use the backslash (/) on the search tab that  if you want to view the list,e.g /.
-If it is one item at a time you will enter /character/id number of the film
.  

## Authors

This project was contributed to by:

Susan Irago


## License

The project is licensed under Apache 2.0 License

