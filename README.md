# Avayler-Launches-Pairing-Tech-Test

## Overview

This is a tech test for Avayler. It is a simple web app that calls the spacex api and displays the results in cards.

[Live Demo](https://avayler.jp.coffee)

[Task](./Task.md)

## Installation

1. Clone the repo
2. Run `npm install`
3. Run `npm dev`
4. Open `localhost:3000` in your browser

## Testing

1. Run `npm test` / `npm run test-jest`

> Both Vitest and Jest are configured to run tests under different scripts. The tests being handle by both are the same, it is just to show an example of using both, but with Vitest being the preferred choice.

> Note: The are not many tests on this project, this is because there isn't a lot of functionality being used (for example if there was a load more button, I would have wrote a test to handle a check for that, contact form, etc...). As well as the components used are setup to handle any issues that may arise from the api call, so there is no need to test that (without it being a test that I feel is unneeded and unnecessary for a component as simple as the card).

## Linting

1. Run `npm run lint`

## Tech Stack

- React
- Next.js
- Typescript
- Vite
- Vitest
- TailwindCSS
- Eslint
- Prettier
