# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React Native application named "matzip" built with React Native 0.79.4 and React 19.0.0. The project uses TypeScript and supports both iOS and Android platforms.

## Development Commands

### Setup
```bash
# Install dependencies
npm install

# iOS only: Install CocoaPods dependencies (first time or after native dependency updates)
bundle install
bundle exec pod install
```

### Running the App
```bash
# Start Metro bundler
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios
```

### Development Tools
```bash
# Run tests
npm test

# Run linter
npm run lint
```

## Project Structure

- `App.tsx` - Main application entry component
- `index.js` - React Native app registration
- `__tests__/` - Test files
- `android/` - Android native code and configuration
- `ios/` - iOS native code and configuration
  - Uses Swift (AppDelegate.swift)
  - Includes LaunchScreen.storyboard and Info.plist
- Native package identifiers in both platforms under `com` namespace

## Configuration Files

- `tsconfig.json` - Extends `@react-native/typescript-config`
- `babel.config.js` - Babel configuration
- `metro.config.js` - Metro bundler configuration
- `jest.config.js` - Jest testing configuration
- `.eslintrc.js` - ESLint configuration
- `.prettierrc.js` - Prettier formatting configuration
- `app.json` - React Native app configuration

## Key Dependencies

- React 19.0.0
- React Native 0.79.4
- TypeScript 5.0.4
- Jest for testing
- ESLint for linting
- Prettier for code formatting

## Development Notes

- Node.js version requirement: >=18
- The project uses npm for package management
- Fast Refresh is enabled for rapid development feedback
- Android: Press R twice or Ctrl+M (Cmd+M on macOS) for dev menu
- iOS: Press R in simulator to reload
