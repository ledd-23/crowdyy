## Getting started
1. Download Node.js at [https://nodejs.org/en/](https://nodejs.org/en/). We're currently using Node version 18.13.0 and NPM version 8.19.3.

2. Install NPM packages
```sh
npm install
```
3. Install Expo CLI
```sh
npm install -g expo-cli
```
4. Run the client
```sh
expo start
```
5. Download Expo Go on your phone, scan the QR code, and open Expo Go.

## Connecting to server
1. Create a .env file in your directory

2. Add the line API_HOST=http://{your machine's ip address}:8080 to your .env file if you're running the client on your phone, else replace it with localhost.

3. Be sure to start the Spring server and React client in your local network if you want to test the services.

Use an IDE of your choice to develop. VSCode is an excellent choice.
