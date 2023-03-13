Shoe Shop Web App - React & Redux Project
This is a web application for an online shoe shop that allows users to browse and filter through a list of products and add them to a shopping cart. The app is built using React, Redux, TypeScript, and other third-party libraries.

Installation
To install this project, follow the steps below:

Clone the repository to your local machine using the following command:
bash
Copy code
git clone https://github.com/sorousch9/products-list.git
Navigate to the project directory using the following command:
bash
Copy code
cd products-list
Install the project dependencies by running the following command:
Copy code
npm install
Install json-server globally by running the following command:
Copy code
npm install -g json-server
Open a new terminal window and start the json-server by running the following command:
css
Copy code
json-server --watch db.json --port 3004
If you encounter the error "json-server cannot be loaded because running scripts is disabled on this system", open your PowerShell as an administrator or normal and set its execution policy with the following command:

sql
Copy code
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Package.json
The project's package.json file includes the necessary dependencies for this project, including:

@reduxjs/toolkit for Redux store management
@testing-library/react for testing
axios for fetching data from API
bootstrap for styling
react-bootstrap for Bootstrap components
react-icons for icons
react-redux for React-Redux binding
react-router-dom for routing
redux for state management
redux-persist for persisting Redux store data
sass for styling
swiper for carousel
web-vitals for measuring web performance
In addition, the scripts section includes the following commands:

start for starting the development server
build for building the production-ready app
test for running tests
eject for ejecting from Create React App configuration
The eslintConfig section extends the react-app and react-app/jest configurations, while the browserslist section defines the supported browsers for production and development environments.

Running the App
To start the development server, run the following command:

sql
Copy code
npm start
This will start the app on http://localhost:3000/.

To build the production-ready app, run the following command:

Copy code
npm run build
This will create an optimized production build in the build directory.

Conclusion
Thank you for checking out this project. If you have any questions or feedback, feel free to contact me at soroush.safarkhah@gmail.com.