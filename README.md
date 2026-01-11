# Nextjs starter template

[![CI](https://github.com/ablil/nextjs-starter-template/actions/workflows/ci.yaml/badge.svg)](https://github.com/ablil/nextjs-starter-template/actions/workflows/ci.yaml)

This is a [Next.js](https://nextjs.org) project **template** bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

To use this project as a template for a new project, run the following:
```bash
npx create-next-app --example https://github.com/ablil/nextjs-starter-template <Your application name>
```
Besides the default dependencies from Nextjs, this template have some extra dependencies, please check [package.json](package.json).

## Configuration

This template is configured with some default values, please make sure to updated what's necessary on [config.ts](lib/config.ts).


This templates also includes the following:
* state management with [Redux](https://redux.js.org/) and [Redux-saga](https://redux-saga.js.org/).
* Authentication with [NextAuth](https://next-auth.js.org/) 
* Maintenance mode with feature flag
* some re-usable components (check [here](components/common/))
* re-usable css styles/utilties
* husky and lint-staged to formater code before each commit

## Maintenance Mode

This template includes a maintenance mode feature that can be controlled via an environment variable. When enabled, all pages will redirect to a maintenance page.

To enable maintenance mode, set the `MAINTENANCE_MODE` environment variable to `true` in your `.env` file:

```bash
MAINTENANCE_MODE=true
```

To disable maintenance mode, set it to `false` or remove the variable:

```bash
MAINTENANCE_MODE=false
```

The maintenance page is located at `/maintenance` and will be displayed to all users when maintenance mode is active.

## Authentication

This template uses [NextAuth](https://next-auth.js.org/) for authentication, it has [Credentials]( https://next-auth.js.org/providers/credentials ) authentication already configured with dummy credentials, make sure to update the file [route.ts](app/api/auth/[...nextauth]/route.ts) with your logic to verify user credentials.

You can configure all **private routes** on [middleware.ts](middleware.ts).

The following two routes have a dummy form that needs your adjustments:
* /auth/login
* /auth/register
