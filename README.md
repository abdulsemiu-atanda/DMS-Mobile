# DMS-Mobile
Document Management Application built with React-Native

# Getting Started
## Prequisites
- Mac OS X
  - Homebrew
  - NodeJS
  - Yarn (optional)
- Windows
  - NodeJS
  - Yarn (optional)

## Requirements
- Mac OS X
  - Download Xcode from `App Store`.
  - Download `Android Studio` (optional).
  - Install `watchman` with `$ brew install watchman`.
  - Install `react-native-cli` with `npm i -g react-native-cli`.
- Windows
  - Download `Android Studio` (optional).
  - Install `watchman` by following instructions [here](https://facebook.github.io/watchman/docs/install.html).
  - Install `react-native-cli` with `$ npm i -g react-native-cli`.

## Installation
- Ensure you have completed the steps above.
- Clone this repository.
- Change your directory with `$ cd DMS-Mobile/`.
- Install dependencies with `$ npm i` or `yarn`.
- Ask a contributor for `settings.json`

## Usage
- iOS
  ### React-Native-CLI
  - Start application with `$ react-native run-ios`.
  ### Xcode
  - Open `ios/`
  - Find and open `dms.xcodproj`.
  - Click `play` icon in Xcode.
- Android
  ### React-Native-CLI
  - Start application with `$ react-native run-android`.
  ### Android Studio
  - Open `android/` in Android Studio.
  - Allow `gradle` to finish building.
  - Click `Run` and select `Run app` from dropdown.

# Learn
- `ReactJS` documentation [here](https://reactjs.org/docs/hello-world.html)
- `React-Native` documentation [here](https://facebook.github.io/react-native/docs/getting-started.html)

# Contributing
## Project Structure
```
├── _tests_
├── actionTypes
│   ├── newConatants.js
├── android
├── assets
│   ├── styles
│       ├── styles.js
├── components
│   ├── shared
│       ├── SomeSharedComponent.react.js
│   ├── NewComponent.react.js
├── config
│   ├── routes
│       ├── routes.js
├── ios
├── private
│   ├── data
│       ├── settings.json.example
├── reducers
│   ├── newReducer.js
├── requests
└── util
```

## Adding a Feature
- Create your branch off master as follows `YOUR_NAME/TYPE/FEATURE-DETAIL`.
- Commit your changes and make a Pull request to master.

# Reporting Issue
Found something out of place or a feature request please create an issue [here](https://github.com/abdulsemiu-atanda/DMS-Mobile/issues)
