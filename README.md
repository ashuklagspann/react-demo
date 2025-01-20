# Full-Stack Interview: Product

You are tasked with building a React App that displays Product  for a logged-in (User)Tom. Both a backend and frontend are already running. One React component / template with static content has been provided.

# Terminology

_Candidate_

- You -- the person performing this coding challenge

_User_

- The fictional "end user" for whom this feature is built

_Products_

- The frontend list of Products you are building for this challenge

# Acceptance Criteria

## Frontend Tasks

Call Product API to fetch Product datta

| Field       | Source                                                   |
| ----------- | -------------------------------------------------------- |
| Title       | http://localhost:3000/api/products/<product_id>         |
| Price       | http://localhost:3000/api/products/<product_id>         |
| Discount    | http://localhost:3000/api/products/<product_id>         |
| ID          | http://localhost:3000/api/products-ids         |
| Category    | http://localhost:3000/api/products/<product_id>         |
| Description | http://localhost:3000/api/products-description/<product_id> |

Note: See `src/productApi.ts`


Enable JWT Login flow

- Send Username and Password to Backend
- Backend should respond with JWT Token with `first_name` and `email` (at minimum)
- Display `first_name` and `email` in welcome header
- Dynamically Show / Hide contend depending on User state:

| Component      | Visible Condition |
| -------------- | ----------------- |
| Welcome Header | Logged In         |
| Login Form     | Not Logged In     |
| Product        | Logged In         |


## Backend Tasks

Implement `/login` route


## Extras

1. Implement client-side pagination and only show five Product per page
2. Add backend logic to protect all future routes with the same auth strategy as the /product route
3. Implement logout functionality



# Notes

- All necessary backend + frontend libraries have been provided
- Hot-reloading has been configured for both the frontend and the backend, but dev servers may need to be restarted manually:
  - The frontend can be (re)started with `npm run dev`
  - The backend can be restarted with `npm run dev` from the `/backend` directory
- See `backend/src/data/users` for "in-memory database" of valid users and passwords
- The backend express app has already been configured with necessary middleware / CORS logic
- Remember to mark this repo as "Unlisted" in Codesandbox to avoid CORS issues
