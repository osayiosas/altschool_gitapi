# ALTSCHOOL EXAMS
## GITHUB API PROFILE BY IDIGAHE OSAIGBOVO ERNEST


## Table of contents (GITHUB API)

- Requirements
- Recommended modules
- Installation
- Configuration
- conclusion

### Requirements 

for this project you need a understanding of javascrip and react.js with understanding of css and any of the css frameworks

written in React (a JavaScript library for building user interfaces). It's primarily responsible for importing necessary modules and components that will be used in the rest of the file.

### Recommended modules 

`import React from "react";` imports the React library, which is the fundamental library for building components in a React application.

`import ReactDOM from "react-dom/client";` imports the ReactDOM library, which provides DOM-specific methods that can be used at the top level of a React application.

`import { QueryClient, QueryClientProvider } from "react-query";` imports `QueryClient` and `QueryClientProvider` from `react-query`. React Query is a library for fetching, caching, synchronizing and updating server state in React applications.

`import { ReactQueryDevtools } from "react-query/devtools";` imports the development tools for React Query. This is useful for debugging your application's queries.

`import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";` imports `createBrowserRouter`, `RouterProvider`, and `Route` from `react-router-dom`. React Router is a library that allows you to handle routing in your React application.

`import { Root, ErrorPage, RepoList, SingleRepo, ErrorBoundary, ErrorBoundaryTest } from "./routes";` imports several components from a local file named `routes`. These components are likely to be used as different pages or parts of pages in your application.

`import { HelmetProvider } from "react-helmet-async";` imports `HelmetProvider` from `react-helmet-async`, a library that manages changes to the document head, allowing you to dynamically set the HTML metadata in a React application.

`import "./index.css";` imports a CSS file, which likely contains global styles for your application.


### Installation

This selection is from a [``package.json``](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fuser%2FDocuments%2Fgithub_repo%2Fpackage.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/user/Documents/github_repo/package.json") file, which is a manifest file in Node.js projects managed by npm (Node Package Manager). It holds various metadata relevant to the project, including its dependencies. The dependencies are libraries or packages that your project needs to run.

`"@tanstack/react-query": "^5.29.2"` and `"@tanstack/react-query-devtools": "^5.29.2"` are dependencies for the [`react-query`](command:_github.copilot.openSymbolInFile?%5B%22package.json%22%2C%22react-query%22%5D "package.json") library and its development tools. React Query is used for fetching, caching, and state management of asynchronous data in React applications.

`"axios": "^1.6.8"` is a promise-based HTTP client for making HTTP requests, it works in both Browser and Node.js environments.

`"framer-motion": "^11.1.3"` is a library that provides animations and transitions for React applications.

`"moment": "^2.30.1"` is a library that allows you to parse, validate, manipulate, and display dates and times in JavaScript.

`"react": "^18.2.0"` and `"react-dom": "^18.2.0"` are the core React libraries. React is a JavaScript library for building user interfaces, and ReactDOM provides methods for interacting with the DOM.

`"react-error-boundary": "^4.0.13"` is a library that provides error boundaries, which are React components that catch JavaScript errors anywhere in their child component tree.

`"react-helmet": "^6.1.0"` and `"react-helmet-async": "^2.0.4"` are libraries that manage changes to the document head, allowing you to dynamically set the HTML metadata in a React application.

`"react-icons": "^5.1.0"` is a library that provides vector icons that can be customized and used in your React applications.

`"react-query": "^3.39.3"` is another instance of the [`react-query`](command:_github.copilot.openSymbolInFile?%5B%22package.json%22%2C%22react-query%22%5D "package.json") library. It's possible that this is a mistake and should be removed if [`@tanstack/react-query`](command:_github.copilot.openSymbolInFile?%5B%22package.json%22%2C%22%40tanstack%2Freact-query%22%5D "package.json") is being used.

`"react-router-dom": "^6.22.3"` is a library that allows you to handle routing in your React application.

`"web-vitals": "^3.5.2"` is a library for measuring the performance of a web page. It provides a number of metrics that can be used to understand the user experience on the page.


### Configuration 

to start this project you do a `npm run dev` 


### conclusion 

this project is hosted in `'vercel.com'` to check the project click [here](https://altschool-gitapi.vercel.app/)



