# Implementation Plan: Scaffold Minimal Expo App

## Goal

Generate the bare-bones boilerplate for a minimal React Native app using Expo's `blank` template. The result should run on **web**, **Android**, and **iOS** with the least code possible.

## Prerequisites

- Node.js installed
- npm available

## Steps

### 1. Initialize the Expo project

Run the following command from the repo root:

```sh
npx create-expo-app@latest . --template blank
```

> Use `.` to scaffold into the current directory. The `blank` template gives us a single `App.js` with a welcome screen and nothing else.

### 2. Verify key files exist

After scaffolding, confirm these files are present:

- `app.json` — Expo configuration (app name, platforms, icons)
- `App.js` — Single entry point with minimal UI
- `package.json` — Dependencies (expo, react, react-native)
- `babel.config.js` — Babel preset for Expo

If any are missing, the scaffold command failed — re-run it.

### 3. Install dependencies

```sh
npm install
```

### 4. Validate the app starts

```sh
npx expo start --web
```

The app should open in a browser showing the default Expo welcome screen.

### 5. Keep App.js minimal

`App.js` should contain only:

- A single functional component
- A `<View>` with centered layout
- A `<Text>` element with a simple message
- A `StyleSheet` with minimal styles
- No navigation, no extra screens, no additional dependencies

Example structure:

```js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

### 6. Do NOT add

- Extra screens or navigation
- Additional npm packages
- TypeScript configuration (unless the template includes it)
- Linting or formatting tools
- Tests or test frameworks
- CI/CD configuration
- Environment variables or `.env` files

## Done Criteria

- `npx expo start --web` renders the app in a browser
- `App.js` is a single functional component with minimal UI
- No files beyond what the `blank` template generates
- No dependencies beyond what Expo provides by default
