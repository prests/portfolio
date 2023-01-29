# Contributing

## Setup

This project uses [`pnpm`](https://pnpm.io/) to manage the dependencies, install if you haven't via

```bash
npm i -g pnpm
```

Clone repo to your local machine and install dependencies.

```bash
pnpm install
```

## Project Structure

### Monorepo

We use monorepo to manage multiple packages.

```
packages
  app/                    - main frontend app
  config/
    eslint-config/        - config to extend base eslint settings
    prettier-config/      - config to extend base prettier settings
    tsconfig/             - config to extend base tsconfig settings
```

## Changesets

This project uses [`changesets`](https://www.npmjs.com/package/@changesets/cli) to automate updating changelogs for the packages in [`config`](https://github.com/prests/portfolio/tree/main/packages/config). To create a changeset for your packages you can run the following command in the corresponding package.

```bash
pnpm version-packages
```

## Development

To build all the packages at once, run the following command at the root of the project.

```bash
pnpm build
```

To run a package locally, run the following command at the root of the project.

```bash
pnpm -F <name-of-package> dev
```

## Testing

To test your packages, run the following command at the root of the project.

```bash
pnpm test
```

To test a specific package, run the following command at the root of the project.

```bash
pnpm -F <name-of-package> test
```

## Code Style

You can setup [`prettier`](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to automatically format code, or run the following command at the root of the project.

```bash
pnpm lint
```

The project has githooks via [`husky`](https://www.npmjs.com/package/husky) to ensure standardized code styles are met.
