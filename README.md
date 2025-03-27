# aeroblox

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## How to setup theme

You can download Syncfusion material css here [Syncfusion theme material 3](https://ej2.syncfusion.com/themestudio/?theme=material3) page.

You can download color palette for material here [Material 3 Theme Studio](https://material-foundation.github.io/material-theme-builder) page.

Here is angular material theming guide [Angular material theme](https://material.angular.io/guide/theming).

Define material button custom classes for both light/dark mode in common.scss.

This CLI commands generate theme-colors.scss.
```bash
ng generate @angular/material:m3-theme
```

Import both light/dark syncfusion css in angular.json
Add `e-dark-mode` class in <body>, then dark css will be applied, default is light css.

Angular material light/dark theme needs custom class in <HTML>.
html.light-mode {
  color-scheme: light;
}
html.dark-mode {
  color-scheme: dark;
}
# aeroblox-dev
# aeroblox-dev
