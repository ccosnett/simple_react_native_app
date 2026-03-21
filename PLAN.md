# Implementation Plan: Minimal Expo App

## Goal

Scaffold the bare-bones boilerplate code for a minimal React Native app using Expo that runs on **web**, **Android**, and **iOS**.

## Official Documentation References

- [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) — Official getting started guide, recommends Expo as the default framework
- [React Native - Core Components and APIs](https://reactnative.dev/docs/components-and-apis) — Reference for `View`, `Text`, `StyleSheet`, and other core components
- [React Native - Core Components Introduction](https://reactnative.dev/docs/intro-react-native-components) — How React Native components map to native Android/iOS views
- [Expo - Create a Project](https://docs.expo.dev/get-started/create-a-project/) — Official guide for creating a new Expo project
- [Expo - Set Up Your Environment](https://docs.expo.dev/get-started/set-up-your-environment/) — Environment setup for Expo development

## Steps

### Step 1: Initialize the Expo project

Run the following command (per [React Native docs](https://reactnative.dev/docs/environment-setup)):

```sh
npx create-expo-app@latest simple-react-native-app --template blank
```

The `blank` template gives a single `App.js` with minimal boilerplate — no navigation, no tabs, no extra screens.

### Step 2: Verify key files exist

After initialization, confirm these files are present:

- `App.js` — Single entry point with a functional component
- `app.json` — Expo configuration (app name, platforms, icons)
- `package.json` — Dependencies (`expo`, `react`, `react-native`)
- `babel.config.js` — Babel preset for Expo

### Step 3: Keep App.js minimal

`App.js` should contain only the essential core components (per [React Native Core Components docs](https://reactnative.dev/docs/components-and-apis)):

- **`View`** — The fundamental container component (maps to `ViewGroup` on Android, `UIView` on iOS, `<div>` on web)
- **`Text`** — For displaying text (maps to `TextView` on Android, `UITextView` on iOS, `<p>` on web)
- **`StyleSheet`** — Abstraction layer for styling, similar to CSS stylesheets

Example minimal `App.js`:

```jsx
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Simple React Native App!</Text>
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

### Step 4: Install dependencies

```sh
npm install
```

### Step 5: Validate the app starts

```sh
npx expo start --web
```

Confirm the app renders a centered welcome message in the browser.

## Constraints — Do NOT Add

- No navigation or routing
- No additional screens or components
- No third-party dependencies beyond what Expo provides
- No TypeScript conversion (unless the template includes it)
- No custom fonts, icons, or assets
- No testing framework setup
- No linting or formatting configuration

## Done Criteria

- [ ] `App.js` contains a single functional component with `View`, `Text`, and `StyleSheet`
- [ ] `app.json` is configured with the app name
- [ ] `package.json` lists only `expo`, `react`, and `react-native` as dependencies
- [ ] App renders on web via `npx expo start --web`
- [ ] No unnecessary files or dependencies exist
