# React Tutorial Project

## Requirements

### `Install nodejs and npm`
This can be downloaded here: https://nodejs.org/en/

### `Install gulp`
Ensure that you have installed npm.  
You can verify this by using the command:
```shell
npm -v
```

To install gulp, use the command terminal to navigate to your project folder, then run the following:
```shell
npm install -g gulp@3.9.1
npm install --save-dev gulp@3.9.1
```

### `Install gulp requirements`
The gulpfile we will use will require that you install the following: gulp-sass, gulp-clean-css, gulp-uglify, gulp-rename, and gulp-changed.<br/>
Yse the command terminal to navigate to your project folder, then run the following:
```shell
npm install gulp-sass
npm install gulp-clean-css
npm install gulp-uglify
npm install gulp-rename
npm install gulp-changed
```

### `Install react-router-dom`
Use the command terminal to navigate to your project folder, then run the following:
```shell
npm install react-router-dom
```

## Gulp commands:
### `gulp`
Runs the commands in the gulpfile. The gulpfile has been made in a way to grab all the SASS files and convert each to a minified CSS file. 

## NPM Commands:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
