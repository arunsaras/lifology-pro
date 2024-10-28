#Introduction

This documentation covers the setup and usage of the Ignite boilerplate with Expo for developing React Native applications. This boilerplate provides a solid foundation for building scalable mobile applications with a clean architecture and best practices.

#Prerequisites

Before you begin, ensure you have the following installed on your system:

Node.js (version 14 or higher)
Yarn
Expo CLI
Git
Getting Started

#Installation
##Clone the Repository:
```
https://github.com/arunsaras/lifology-pro.git
```
##Navigate to Project Directory:
```
cd lifology-pro
```
##Install Dependencies: Use Yarn or npm to install the required packages:
```
yarn install
```
##Project Structure
Here’s an overview of the key directories and files in the project:

    ignite-boilerplate-expo/
    │
    ├── app/                   # Application source code
    │   ├── components/        # Reusable components
    │   ├── screens/           # Application screens
    │   ├── navigation/        # Navigation setup
    │   ├── assets/            # Static assets (images, fonts)
    │   ├── hooks/             # Custom hooks
    │   ├── services/          # API services
    │   └── utils/             # Utility functions
    │
    ├── package.json           # Project metadata and dependencies
    └── app.json               # Expo configuration
Running the App

##Start the Development Server:
```
expo start or npx expo start
```
##Open the App:
Scan the QR code using the `Expo Go` app on your mobile device.
Alternatively, you can run the app in an Android or iOS emulator.


