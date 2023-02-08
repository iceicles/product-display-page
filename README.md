## PDP Redux Demo App
This is a simple application that mirrors a similar setup to ODP, but utilizes RTK and RTK Query instead of Axios to call for Product Data.

RTK and Code Splitting React Apps

RTK(Q) -

comment was made in these files:
file - pokemon.service.ts --> 

with RTKQ we only need to provide one base url for multiple endpoints.
    - this means API endpoint definitions with the same base URL are kept in the same file

file - pokemonDetails.slice.ts -->
Notes -  
Steps (in order of development): 
- setup slice
- defined type selectors
- setup service
- add service to store 
- then provide reduce store to rest of app (<Provider store = {store}>...)
- finally use typed hook (data, isLoading, or error and so on) states to manage UI behavior

Notes: 
- defining PayloadAction<> in the reducers eliminates the need to have a separate folder called actionCreators
    - the generated action creators will be correctly typed to accept a payload with the provided argument <T>



Code splitting react apps with React.lazy and React.Suspense - 

file: - ProductFeatureList.tsx -->
Resource: https://blog.saeloun.com/2022/03/24/code-splitting-in-react.html
Code Splitting - the art of splitting code or components into various bundles and loading them on demand.
This means we load necessary files at the start of the app and can later load other files as well when required.
This keeps our initial bundle size small and our app loads faster


Code splitting with React.lazy and React.suspense
React.lazy 
- this method helps the lazy-loading of a component
- it means that we can define components that can be imported dynamically in the app
- reduces bundle size because we're delaying the loading of the component that might be used later in the app

Note: react.lazy is not available for server side components yet. For SS, use loadable components.

If the import takes time to load (i.e., the application is taking time to render) we use React.Suspense

React.Suspense
- lazy components are always used within teh Suspense component
- it allows us to specify loading indicator(s) until our lazy component is ready to render
    - this is done with the prop fallback which as the name suggests shows a component as a fallback for when the lazy component takes time to render
    - the fallback is shown while the component is loading



-----------------------------------------
Code splitting - RTK  - in progress...

## Available Scripts

First install dependencies: 

### `npm install`

Then, in the project directory, you can run:

### `npm start`
to start the application 

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


