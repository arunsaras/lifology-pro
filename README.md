# Introduction

This documentation covers the setup and usage of the Ignite boilerplate with Expo for developing React Native applications. This boilerplate provides a solid foundation for building scalable mobile applications with a clean architecture and best practices.

# Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (version 14 or higher)
- Yarn
- Expo CLI
- MobX
- ignite boilerplate
- React Navigation
- Git
- Getting Started

# Installation
## Clone the Repository:
```
https://github.com/<your-username>/lifology-pro.git
```
## Navigate to Project Directory:
```
cd lifology-pro
```
## Install Dependencies: Use Yarn to install the required packages:
```
yarn install
```
## prebuild
```
npx expo prebuild
```
## Project Structure
Here’s an overview of the key directories and files in the project:

    ignite-boilerplate-expo/
    │
    ├── src/                    # Application source code
    │   ├── app/                # Application screens
    │   ├── components/         # Reusable components
    │   ├── config/        
    │   ├── devtools/            
    │   ├── i18n/             
    │   ├── models/          
    │   └── services/           # API services             
    │   └── theme/
    |   └── utils/              # Utility functions
    |
    ├── package.json            # Project metadata and dependencies
    └── app.json                # Expo configuration
Running the App

## Start the Development Server:
```
expo start or npx expo start
```
## Open the App:
Scan the QR code using the `Expo Go` app on your mobile device.
Alternatively, you can run the app in an Android or iOS emulator.

# User stories
* User can see the splash screen for few seconds with the image of Lifology
* Then User can see the list of users with profile picture, full name, email address & Company Name
* User can scroll to see 'n' number of users
* User can click any of the listed users to see the post of that particular user
* User can see the list of post with views, likes & dislikes


