<p align="center">
   <br/>
   <a href="https://next-auth.js.org" target="_blank"><img width="150px" src="https://next-auth.js.org/img/logo/logo-sm.png" /></a>
   <h3 align="center">NextAuth.js + Firebase Authentication Example App</h3>
   
</p>

## Overview

This is an example of how to use the [NextAuth.js](https://next-auth.js.org) library to integrate with [Firebase Authentication](https://firebase.google.com/docs/auth).

## Getting Started

### 1. Clone the repository and install dependancies

```
git clone https://github.com/elpnt/nextauth-firebase-auth-example
cd nextauth-firebase-auth-example
npm install
```

### 2. Configure your local environment

Copy the .env.local.example file in this directory to .env.local (which will be ignored by Git):

```
cp .env.local.example .env.local
```

Add details for your Firebase configurations.

#### Firebase

Create a new project in the Firebase console and

- enable the web app (for Firebase JS SDK)
- generate private key (for Firebase JS Admin SDK)

### 3. Configure Authentication Providers

Activate three sign-in providers in the console

- Anonymous
- Github
- Google

When you setup Github client ID and secret, the callback URL must be `https://nextauth-tutorial.firebaseapp.com/__/auth/handler`, not `http://localhost:3000/api/auth/callback/github`

### 4. Start the application

To run your site locally, use:

```
npm run dev
```

To run it it production mode, use:

```
npm build
npm start
```

### 5. Preparing for Production

You must set the `NEXTAUTH_URL` environment variable with the URL of your site, before deploying to production.

e.g. in your `.env.local` file - `NEXTAUTH_URL=https://example.com`

To do this with Vercel, you can use the [Vercel project dashboard](https://vercel.com/dashboard) or their cli with the `vc env` command:

```
vc env add NEXTAUTH_URL production
```

Do not forget to set the environment variables for the Firebase configuration values.

## License

ISC
