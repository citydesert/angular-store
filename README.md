## Store
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.4.
enjoy the benifits of using this project by installing it to your local PC or compile it for puplic usage.
* read requirements and installing instructions.

## Requirements

Install the following items if you do not have them installed on your machine:

 - 1)Node.js from official node.js website.
 - 2)Angular/cli by running `npm  install @angular/cli --location=global` form you node.js command prompt or cmd.exe.

## Installing Project

 - 1) Download All files To one folder and name it for exmple "store".
 - 2) point your node.js command prompt to new the created folder for example d:\store in which located "src" folder and "package.json"
 - 3) run `npm install` to download required packages for project 
 ![alt screenshoot_npm_install](https://i.ibb.co/Ht1Smpp/npm-install.png)
 
 
*this command will create filder named "node_modules" ITS REQUIRED TO RUN PROJECT ON LOCAL MACHINE
 - 4) Now serve your app by running `ng serve --port 3000` then open your browser and point it to http://localhost:3000
 - 
 ![alt screenshoot_ng_serve](https://i.ibb.co/4mm7M56/ng-serve-port.png)
 
 
![alt screenshoot_index](https://i.ibb.co/WFWKdBd/ng-store-proj-products.png)
 
## Project Description

This Store Project created by angular/cli and includes:-
 - Main page "Items list" from whith user can choose whitch item to add to cart , user can add amount of each item from main page "products list"
 - "Details page" whitch contains title and description of item , user although can add item to cart from this page "component"
 - "Cart view items" this page contains details about choosen items and payent method ,so user can order is items and modify his order.
 - "confirmation" confirmation page includes confirmation message.
![alt demo](https://i.ibb.co/4Ss7Z2t/ng-store-proj-cart.png)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Developer
Mahmoud Hassan , Egyptian junior full stack developer , Developed this project as graduation project.

## Services and dependiancies
*In this project i created two services manually: 
 - CartService : includes add items and retrive items from cart. and addedd observable and subject from rxjs to subscribe to items length in cart.
 - HttpService: includes connect to data.json and sending https POST request to confirm order.
 *In this project i used BrowserModule, AppRoutingModule, HttpClientModule, FormsModule
 and injected all services and dependiances in project
 ## Components
 Commponents and relationship between compomnents using @Input() and @Output().
 - product-list parents for product-item
 - product-item @Input() from its parent product-list.
 - product-item-details fetching json using HttpService.
 - cart is parent for cart-item
 - cart-item @Input() from cart and @Output to cart to send qty change signal to retrive Total price.
 - nav-bar suscribes to observable to return items in cart.
 - footer includes developer information.

## Routing
 using router link created four paths "/","/product/:id","/cart","/confirmation"

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help
To get more help on the Project contact developer at [Taswerat](https://taswerat.com) contact us page.
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
