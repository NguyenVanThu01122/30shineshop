# 30shine Shop

### **1. Introduce**
This project is a web application built using ReactJS in front-end.

##### Key features
- ***Homepage***: This is the first page that appears when users access the website. Here information is displayed such as header, banner, product list, footer,...
- ***Register***: Register an account to become a member of the system. See details at [`src/pages/register`](src/pages/register).
- ***Login***: Supports login through various platforms. See details at [`src/pages/SignIn`](src/pages/SignIn).
- ***ListProduct***: This page displays a list of all products. See details at [`src/pages/listProduct`](src/pages/listProduct).
- ***DetailProduct***: This page provides detailed information about a specific product. See details at [`src/pages/DetailProduct`](src/pages/DetailProduct).
- ***Cart***: This page allows users to view and manage their shopping cart. See details at [`src/pages/Cart`](src/pages/Cart).
- ***DetailOrder***: This page provides detailed information about a specific order. See details at [`src/pages/DetailOrder`](src/pages/DetailOrder).
- ***DetailPayment***: This page provides detailed information about a specific payment. See details at [`src/pages/DetailPayment`](src/pages/DetailPayment).
- ***ListOrder***: This page displays a list of all orders made by a user. See details at [`src/pages/ListOrder`](src/pages/ListOrder).
- ***ListAddress***: This page shows a list of all addresses saved by a user. See details at [`src/pages/ListAddress`](src/pages/ListAddress).
- ***OrderSuccess***: This page is displayed when an order is successfully placed. See details at [`src/pages/OrderSuccess`](src/pages/OrderSuccess).
- ***Account***: This page allows users to manage their account details. See details at [`src/pages/Account`](src/pages/Account).
- ***Multilingual Support***: Supports many languages, including Vietnamese, English. See details at [`src/i18n`](src/i18n).



### **2. Main Technology Used**
+ **ReactJS**: ReactJS is a JavaScript library for building user interfaces, known for its component-based structure, reusability, and efficient rendering, simplifying the development of interactive web applications. 
+ **TypeScript**: TypeScript is a statically typed superset of JavaScript that offers enhanced code quality, better tooling, and improved maintainability.
+ **React Router Dom**: React Router Dom is a library that helps manage routing in React applications, providing flexible navigation between components and pages, enhancing the user experience.
+ **Redux Toolkit**: Redux Toolkit is a toolset that efficiently manages state and performs Redux operations in React applications, providing flexibility and reducing complexity in state management. 
+ **Axios**: Axios is a JavaScript HTTP client library that facilitates easy and flexible handling of HTTP requests in applications, enhancing communication with APIs.
+ **Styled Component**: Styled Components is a CSS-in-JS library that enables component-based styling in React applications, enhancing code maintainability and allowing dynamic styling based on props.
+ **i18next**: i18next is an internationalization-framework written in and for JavaScript. It provides you with a complete solution to localize your product from web to mobile and desktop.
+ **Ant Design**: A UI design system for React applications.
+ **lodash**:A JavaScript utility library for common programming tasks.
+ **React Toastify**:A library for adding notifications to React apps.

### **3. Instructions For Installing And Running The Project Locally**
> **Prerequisites**: Before you begin, make sure you have the following technologies installed on your personal computer: git, node.js. npm
-  Download the project to your personal computer:
```bash
git clone https://github.com/NguyenVanThu01122/30shineshop.git
```
- Open the downloaded project using ide software, type the following command to install the necessary packages:
```bash
npm install
```
- Run the project locally using the command below. After, you can access http://localhost:3000 to view the system.
```bash
npm start
```
### **4. Online Link To Use**
In addition to using the system locally as in part 3, you can access the following link to use the system: 
https://30shineshop.vercel.app/

### **5. Troubleshooting**
- If you are having trouble loading the page, please make sure you have the best network connection.
- If you run local the project with problems, please make sure your computer has the latest node.js installed. You also need to make sure you have the .env file set up with the correct values.