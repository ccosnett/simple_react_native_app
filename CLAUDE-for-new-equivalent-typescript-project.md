# Minimal React Native TypeScript App

## Project Goal

Create an extremely minimal React Native app **in TypeScript** that runs on **web**, **Android**, and **iOS** with the least amount of code possible. This is a learning project for a beginner developer.

## Background

This project is a TypeScript rewrite of [simple_react_native_app](https://github.com/ccosnett/simple_react_native_app). The original was scaffolded with the `blank` (JavaScript) Expo template. This version uses the `blank-typescript` template for type safety while keeping the same minimal philosophy.

### What the original app does

- Displays a title ("Simple React Native App") and a tappable link to github.com/ccosnett
- Light green background (`#d4f1c4`)
- Runs on web, Android, and iOS via Expo
- Single screen, no navigation, no extra dependencies

## Approach

Use **Expo** (the officially recommended React Native framework) to scaffold and run the app. Expo provides built-in support for all three platforms without needing to manage native project files directly.

### Why Expo

- Recommended by the official React Native docs as the default way to start new projects
- Supports web, Android, and iOS out of the box
- Minimal configuration required
- No need to install Android Studio or Xcode for initial development (Expo Go app)

### Project Setup

Initialized with:

```sh
npx create-expo-app@latest minimal-react-native-ts-app --template blank-typescript
```

The `blank-typescript` template provides the most minimal TypeScript starting point: a single `App.tsx` with a welcome screen.

### Expected Project Structure

```
minimal-react-native-ts-app/
├── App.tsx         — Root component with minimal UI (TypeScript)
├── index.ts        — Entry point (registers App via registerRootComponent)
├── app.json        — Expo configuration (app name, platforms, icons, splash)
├── tsconfig.json   — TypeScript configuration (provided by Expo)
├── package.json    — Dependencies (expo, react, react-native, typescript)
├── assets/         — App icons, splash image, and favicon
└── .gitignore      — Ignores node_modules, .expo, dist, native folders
```

### Running the App

```sh
# Install dependencies
npm install

# Start development server
npx expo start

# Platform-specific
npx expo start --web       # Web browser
npx expo start --android   # Android (via Expo Go or emulator)
npx expo start --ios       # iOS (via Expo Go or simulator, macOS only)
```

### Testing on a physical iPhone

- The App Store version of Expo Go may lag behind the latest SDK. If you see "Project is incompatible with this version of Expo Go", join the TestFlight beta to get the latest version.
- Scan the QR code from the terminal using your iPhone's built-in Camera app (not a QR scanner app). The Camera app will offer to open it in Expo Go.
- Your phone and Mac must be on the same Wi-Fi network.

### Build Commands

```sh
npx expo export --platform web   # Production web build
npx eas build --platform android # Android build (requires EAS)
npx eas build --platform ios     # iOS build (requires EAS)
```

### Clearing the cache

If styles or code changes don't appear on mobile, restart the dev server with a cache clear:

```sh
npx expo start --clear
```

## Guiding Principles

- **Minimal code**: Only include what is strictly necessary to render the app on all three platforms
- **No unnecessary dependencies**: Stick to what Expo provides by default
- **No premature abstractions**: A single screen with simple content is the goal
- **Keep it simple**: This is a starting point, not a production app
- **Beginner-friendly**: Code should be easy to read and understand for someone new to React Native

## Code Style

- Use functional components
- Use TypeScript (`.tsx` for components, `.ts` for plain modules)
- 2-space indentation
- No additional linting or formatting tools unless explicitly added later
- Keep type annotations simple and minimal — avoid over-typing

## GitHub

- Owner: [ccosnett](https://github.com/ccosnett)
- Branch workflow: create feature branches off `main`, open PRs, merge via GitHub
