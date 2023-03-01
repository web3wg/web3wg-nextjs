## Description
This project is a clone of the site that is currently online, migrated for the NextJS environment. This new environment brings:
- Allow communication between CMS (Dynamic content)
- Increase site performance and more fluidity.
- Huge increase in development time for new features
- Reutilization of components between the pages


## System Requirements
Node.js 14.6.0 or newer (recommended version 18.0.0+)
Download it [here](https://nodejs.org/en/download/)

MacOS, Windows (including WSL), and Linux are supported

## Getting Started

First include the .env file on project's root

Next, install the dependencies:

```bash
npm install
# or
yarn
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**During the development environment, the performance will decrease as the NextJS will request all data once every page refreshes. However, after the project completion, the npm run build command will be used, then all the pages and requests will be handled during build time, boosting the performance a lot when going live.**