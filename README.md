
# Secure User Authentication




## Overview

This project implements a secure authentication system using react.js,autho0 for authentication strategies. It allows users to register, log in securely, and log out. This README provides an overview of the project, dependencies, and steps to recreate it.


## Features

- Universal Login: Centralized login experience across applications
- Multi-Factor Authentication (MFA): Adds an extra layer of security by requiring additional verification (e.g., SMS, email, authentication apps). 
- Single Sign-On (SSO): Supports logins through social media (e.g., Facebook, Google) and enterprise providers (e.g., Active Directory, LDAP).
- Passwordless Authentication:Users can log in using email or SMS without needing a password.
- Customizable Authentication Flows: Use Auth0 Rules and Hooks for custom logic. 
- API Security: Protects APIs with OAuth 2.0 and OpenID Connect protocols.


## Result

![Screenshot of the project](authentication-app/img/FS-screen-1%50.png)
![Screenshot of the project](authentication-app/img/FS-screen-2%50.png)
![Screenshot of the project](authentication-app/img/FS-screen-3%50.png)



## Dependencies

- React.js
- auth0


## Deployment

To run this project locally, follow these steps:

  1. Clone the repository:
  ```bash
    git clone https://github.com/Pranav-401/PRODIGY-FS-01.git
  ```
  2. Install dependencies:
  ```bash
    cd PRODIGY_FS_01
    npm install
  ```
  ```bash
    npm install @auth0/auth0-react
  ```
  3. Run the application:
  ```bash
    npm start
  ```
  5. View the application:

  Open your web browser and navigate to http://localhost:3000      to view the application.
