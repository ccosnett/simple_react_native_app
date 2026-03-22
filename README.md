# Simple React Native App

A minimal React Native app that runs on **web**, **Android**, and **iOS** using [Expo](https://expo.dev).

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)

## Quick Start

```sh
cd simple-react-native-app
npm install
npx expo start
```

## Run on a Specific Platform

```sh
npx expo start --web       # Web browser
npx expo start --android   # Android (Expo Go or emulator)
npx expo start --ios       # iOS (Expo Go or simulator, macOS only)
```

## Production Builds

```sh
npx expo export --platform web   # Web
npx eas build --platform android # Android (requires EAS)
npx eas build --platform ios     # iOS (requires EAS)
```

## Project Structure

```
simple-react-native-app/
├── App.js       — Single-screen app component
├── index.js     — Entry point
├── app.json     — Expo config
├── package.json — Dependencies (expo ~55, react 19, react-native 0.83)
└── assets/      — Icons, splash image, favicon
```
