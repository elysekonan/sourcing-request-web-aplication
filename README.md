# sourcing-request-web-application
Web Application Project:

We will create a simple login page where user input their username and password, 
if the user is authenticated successfully they will be redirected to a user home page. 
If authentication fails, the user is notified with an error message.

index.html: all our application views will be loaded

app.js: In this step we will create a main javascript file app.js that will hold all the required configuration to run an angularjs application. We will also configure application routes in this file using AngularJS UI Router module.

login.html and home.html: Now, in this step we will create login and home page template files for our angularjs simple login application.
in login page we put two input fields (UserName and Password) with a login button. Once a user is succesfully logged in, the home page will be loaded. Here, we have a welcome message along with a Create button, a Search button, an Edit button, and a Logout button.

loginController.js and homeController.js: In this step we will create separate controller files for login page and home page.

loginService.js: Here, we will create a simple authentication service that authenticate user with default login credentials. As the user enters login credentials and clicks on the login button we authenticate the user and redirect them to user home page. We store the user data in angularjs scope object and binding it to the variable. It can also authenticate user with their registered credentials in database using a webservice or API that talks to database server. For now we will be creating a simple authentication service that authenticate user with default login credentials.