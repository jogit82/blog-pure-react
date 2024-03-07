# Pure React Blog (Modern React)

##### Huge thank you to Github Copilot, it is magical!

### Data source

- For development: npx json-server --watch data/db.json --port 8000
- to imitate getting data from API, I created a local JSON Server. Look up JSON Server on how to set one up
- For production: eventually I will create an actual API and it should be an easy transition.
- /blogs | GET | Fetch all blogs
- /blogs/{id} | GET | Fetch a single blog
- /blogs | POST | Add a new blog
- /blogs/{id} | DELETE | Delete a blog

### Fetch & error handling

- With proper error handling for whether the resource is available or API server is running.

### React Custom hooks

- created a reusable custom useFetch hook to fetch different endpoint

### React Router

- react-router-dom@5 uses Switch
- Uses { BrowserRouter, Route, Switch, Link } from react-router-dom

\*\*\* Memory leak: navigate to another route using Router while external data is still being fetched in useEffect, will end with a browser warning. When a user navigate to another 'page' while the previous page is still doing its thing asynchronously, once it was done doing it, it tries to update the component, which is no longer there, since we navigated to another route. The exact error:

Error: Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscription and asynchronous tasks in a useEffect cleanup function.

- That is what we did exactly with our custom useFetch hook, using a cleanup function. AbortController will stop the fetch. And throw an AbortError.
