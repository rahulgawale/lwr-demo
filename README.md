# LWC Boilerplate Example With LWC Base components and SLDS

The **LWC Boilerplate** example contains the minimum code needed to get a simple Single Page Application (SPA) on LWR running.


## System and Software requirements for Development

### Linux Based Systems
1. Node.js
1. VS Code
1. Yarn

### Windows
Please follow below steps for Windows
1. Install Windows Subsystem For Linux (WSL) using the command `wsl --install`.
1. [Install nvm, node.js, and npm in WSL](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl#install-nvm-nodejs-and-npm)
1. Restart windows.
1. Go to start menu and search for `Ubuntu On Windows` and open it. Please note that default distribution for WSL is Ubuntu, if you have a different one then open that.
1. Now run Git clone command `git clone https://github.com/rahulgawale/lwr-demo.git`.
1. Run command `cd lwr-demo`
1. Run command `Code .` and it will open VS code with the project.
1. Now you can run `yarn start`.

### VS Code Exentions
  1. Prettier
  1. ESLint
  1. GitHub Pull Requests and Issues
  1. LWR Create For LWC Open Source (pre release) 

## Project Setup

The directory structure looks like this:

```
src/server  // Server scripts
src/modules // Modules
src/assets  // Static Assets
src/layouts // HTML Layout
```

## Configuration

The LWR server is configured in `lwr.config.json`, at the root of the project. This demo is setup with two routes (about and home "/") in a client-side routing configuration. The client routes are configured in src/modules/app/routes. The module ``app/routerLink`` is used in place of anchor tags for SPA navigating. For nested routes, point the module in app/routes to a secondary router (to create items such as about/history, about/staff, and so on). Nested route parents need "exact" set to false.

## Running the Project

```bash
yarn install
yarn start # development mode and ESM format
```

Open the site at [http://localhost:3000](http://localhost:3000)
