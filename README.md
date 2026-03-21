# Simple React Native App

A minimal React Native app built with [Expo](https://expo.dev) that runs on **web**, **Android**, and **iOS**.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)

## Getting Started

```sh
cd simple-react-native-app
npm install
```

## Running the App

```sh
npx expo start        # Start dev server (scan QR code with Expo Go)
npx expo start --web  # Open in web browser
```

Platform shortcuts are also available via npm scripts:

```sh
npm run web       # Web
npm run android   # Android (Expo Go or emulator)
npm run ios       # iOS (Expo Go or simulator, macOS only)
```

## Project Structure

```
simple-react-native-app/
  App.js         # Single screen entry point
  app.json       # Expo configuration
  package.json   # Dependencies
```
