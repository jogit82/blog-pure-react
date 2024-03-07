# Pure React Blog (Modern React)

### Data source

- npx json-server --watch data/db.json --port 8000
- to imitate getting data from API, I created a local JSON Server. Look up JSON Server on how to set one up
- eventually I will create an actual API and it should be an easy transition.
- /blogs | GET | Fetch all blogs
- /blogs/{id} | GET | Fetch a single blog
- /blogs | POST | Add a new blog
- /blogs/{id} | DELETE | Delete a blog

### fetch

- With proper error handling

### custom hooks

- created a reusable custom useFetch hook to fetch different endpoint
