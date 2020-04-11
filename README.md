# Labs - Node.JS

This is an backend application for the game "Pipoco do Trovão".

## Installation

First you need to install [Node.JS](https://nodejs.org/en/download/).

Second, if you want to clone this project using [Git](https://git-scm.com/downloads), you can open you terminal in the folder that you want to create a copy of this project and use this code bellow:

```
git clone https://github.com/Alanbacha/PipocoDoTrovao-Backend.git
```

Else you can just [download](https://github.com/Alanbacha/PipocoDoTrovao/archive/master.zip) it.

## Update your NPM Modules

After you have your project in your computer, using the terminal on the folder that you copied the project, you will need to install the NPM modules. In a terminal inside you project folder, run the code bellow:

```
npm install
```

## Configuration

You will need to create a file called ".env" in the root of your application, and config the variables bellow:

```
PORT_ENV = 3333
NODE_ENV = "dev"
cardsUniques = 14
```

## Test

To test your application, use this code on your terminal:

```
npm test
```

## Run

To run your application, use this code on your terminal:

```
npm start
```

## Debug

You can access your API's openning your WebBrowser or using [Postman](https://www.postman.com/downloads/).

## Routes

You can see the routes of the API's in the file bellow:

```
./src/routes.js
```

## License

[ISC](https://opensource.org/licenses/ISC)
