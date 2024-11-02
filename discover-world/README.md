# Angular-18-Discover-World
web application to explore and show angular 18 capabilities

steps involved to create this web site

step 1 : create basic template, optional make scss compatible
ng new discover-world

step 2 : add bootstrap running schematic command to facilitate process
ng add @ng-bootstrap/ng-bootstrap

step 3 : add components to make up and get a first approach 
sign-in, sign-up, slogan, main-title, categories, post

ng g c sign-in
ng g c sign-up
ng g c slogan
ng g c main-title
ng g c categories 
ng g c post

step 4 : work sign-in component with help of json-server package let's consume an api of users

first into app.config.ts add provideHttpClient() to providers :

export const appConfig: ApplicationConfig = {
providers: [provideZoneChangeDetection({ eventCoalescing: true }),
provideRouter(routes), provideClientHydration(), provideHttpClient()]
};

after launch follow command for create a service under service folder 
ng g s sign-in

into folder json_server let's add a file that contain api specification 
user_db.json

and will implement service for consume users.

# DiscoverWorld

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
