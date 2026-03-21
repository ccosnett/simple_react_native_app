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
npx create-expo-app@latest simple-react-native-app
```

The default template provides a minimal starting point. If the generated project includes file-based routing or extra screens, simplify it down to a single screen with a welcome message.

### Step 2: Verify key files exist

After initialization, confirm these files are present:

- `app.json` or `app.config.js` — Expo configuration (app name, platforms, icons)
- `package.json` — Dependencies (`expo`, `react`, `react-native`)

> **Note:** The default template may use file-based routing with an `app/` directory instead of a single `App.js`. Either structure works — the goal is to end up with a single minimal screen.

### Step 3: Keep App.js minimal

The main screen component should contain only the essential core components (per [React Native Core Components docs](https://reactnative.dev/docs/components-and-apis)):

- **`View`** — The fundamental container component (maps to `ViewGroup` on Android, `UIView` on iOS, `<div>` on web)
- **`Text`** — For displaying text (maps to `TextView` on Android, `UITextView` on iOS, `<p>` on web)
- **`StyleSheet`** — Abstraction layer for styling, similar to CSS stylesheets

Example minimal screen component:

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
- No TypeScript conversion required (the default template may already use TypeScript, which is fine)
- No custom fonts, icons, or assets
- No testing framework setup
- No linting or formatting configuration

## Done Criteria

- [ ] Main screen contains a single functional component with `View`, `Text`, and `StyleSheet`
- [ ] `app.json` (or `app.config.js`) is configured with the app name
- [ ] `package.json` lists only `expo`, `react`, and `react-native` as core dependencies
- [ ] App renders on web via `npx expo start --web`
- [ ] No unnecessary files or dependencies exist
