# Plantsy 🌱

Welcome to Plantsy! This is a dynamic shopping application built with React Hooks. It allows users to browse a catalog of plants, add new plants to the inventory, mark plants as sold out, and search for specific plants by name.

## Features

- **View All Plants**: Fetches and displays all available plants from the backend on page load using `useEffect`.
- **Add New Plant**: A controlled form to submit new plants to the backend via a `POST` request, instantly reflecting the new addition on the page.
- **Stock Management**: Toggle a plant's status between "In Stock" and "Out of Stock" (managed via frontend state).
- **Search Functionality**: Real-time, case-insensitive filtering of the plant list by name using the JavaScript `String.prototype.includes()` method.

## Setup and Installation

1. **Install dependencies**:
   ```bash
   npm install

# Start the backend server:
Open a terminal and run:
   npm run server
(This starts json-server on http://localhost:6001)

# Start the frontend development server:
Open a new terminal window and run:
npm run dev
(This starts the Vite development server, usually at http://localhost:5173)

# Verify the backend:
Open your browser and navigate to http://localhost:6001/plants to ensure the backend is serving data correctly before proceeding.
Running Tests
To run the test suite and verify all deliverables are met, open a terminal and run:
npm run test




# Project Structure
src/components/App.jsx: Main application wrapper.
src/components/PlantPage.jsx: Manages the core state (plants, search query) and side effects (fetching data).
src/components/NewPlantForm.jsx: Handles form state and submission for adding new plants.
src/components/PlantList.jsx & PlantCard.jsx: Render the list of plants and individual plant details.
src/components/Search.jsx: Handles the search input and updates the search query state.









# Phase 2 Code Challenge: Plantsy

## Demo

Use this gif as an example of how the app should work.

![Demo GIF](./demo.gif)

## Instructions

Welcome to Plantsy! You've been tasked with building out some features for the
admin side of a plant store. The designers have put together the components and
CSS. Now it's up to you to bring the features to life by adding stateful logic
as well as persisting data to the backend via our API.

Your job will be to make our app work according to the user stories you will
find the [Deliverables](#Deliverables) section.

## Setup

1. Run `npm install` in your terminal.
2. Run `npm run server`. This will run your backend on port `6001`.
3. In a new terminal, run `npm run dev`.

Make sure to open [http://localhost:6001/plants](http://localhost:6001/plants)
in the browser to verify that your backend is working before you proceed!

## Endpoints

The base URL for your backend is: `http://localhost:6001`

## Deliverables

As a user:

1. When the app starts, I can see all plants.
2. I can add a new plant to the page by submitting the form.
3. I can mark a plant as "sold out".
4. I can search for plants by their name and see a filtered list of plants.

### Endpoints for Core Deliverables

#### GET /plants

Example Response:

```json
[
  {
    "id": 1,
    "name": "Aloe",
    "image": "./images/aloe.jpg",
    "price": 15.99
  },
  {
    "id": 2,
    "name": "ZZ Plant",
    "image": "./images/zz-plant.jpg",
    "price": 25.98
  }
]
```

#### POST `/plants`

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "name": "string",
  "image": "string",
  "price": number
}
```

Example Response:

```json
{
  "id": 1,
  "name": "Aloe",
  "image": "./images/aloe.jpg",
  "price": 15.99
}
```
