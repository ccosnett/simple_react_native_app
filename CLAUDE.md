# Simple React Native App

## Project Goal

Create an extremely minimal React Native app that runs on **web**, **Android**, and **iOS** with the least amount of code possible.

## Approach

Use **Expo** (the officially recommended React Native framework) to scaffold and run the app. Expo provides built-in support for all three platforms without needing to manage native project files directly.

### Why Expo

- Recommended by the official React Native docs as the default way to start new projects
- Supports web, Android, and iOS out of the box
- Minimal configuration required
- No need to install Android Studio or Xcode for initial development (Expo Go app)
- File-based routing and standard library of universal modules included

### Project Setup

Initialize with:

```sh
npx create-expo-app@latest simple-react-native-app --template blank
```

The `blank` template provides the most minimal starting point: a single `App.js` with a welcome screen.

### Key Files (Expected)

- `app.json` — Expo configuration (app name, platforms, icons)
- `App.js` — Single entry point with minimal UI
- `package.json` — Dependencies (expo, react, react-native)
- `babel.config.js` — Babel preset for Expo

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

### Build Commands

```sh
npx expo export --platform web   # Production web build
npx eas build --platform android # Android build (requires EAS)
npx eas build --platform ios     # iOS build (requires EAS)
```

## Guiding Principles

- **Minimal code**: Only include what is strictly necessary to render the app on all three platforms
- **No unnecessary dependencies**: Stick to what Expo provides by default
- **No premature abstractions**: A single screen with simple content is the goal
- **Keep it simple**: This is a starting point, not a production app

## Code Style

- Use functional components
- Use TypeScript if the template supports it, otherwise plain JavaScript is fine
- 2-space indentation
- No additional linting or formatting tools unless explicitly added later
