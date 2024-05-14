# DiveSphere

DiveSphere is a web application that combines dive log features with social media and mapping functionalities for dive sites worldwide. Users can book services with providers for dive charters, courses, and more.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: Pug, TailwindCSS
- **Database**: MongoDB

## Project Structure

### Backend

The backend code is located in the `backend` directory and is structured as follows:

- **config/**: Configuration files (e.g., database connection).
- **controllers/**: Functions to handle requests and responses.
- **models/**: Database schemas and models.
- **routes/**: API routes.
- **middlewares/**: Middleware functions.
- **utils/**: Utility functions and helpers.
- **app.js**: Main application setup.
- **server.js**: Server configuration and startup.

### Frontend

The frontend code is located in the `frontend` directory and is structured as follows:

- **public/**: Static files, including the main HTML file.
- **views/**: Pug templates for server-side rendering.
- **src/**: Source files for the application.
  - **assets/**: Images, icons, and other static assets.
  - **components/**: Reusable components.
  - **pages/**: Page-level components.
  - **styles/**: CSS and styling files.
  - **scripts/**: JavaScript files.
  - **App.js**: Root application component.
  - **index.js**: Main entry point for the application.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vancityactivist/DiveSphere.git
   ```

2. Navigate to the backend directory and install dependencies:
   ```bash
   cd DiveSphere/backend
   npm install
   ```

3. Navigate to the frontend directory and install dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

2. Start the frontend development server:
   ```bash
   cd ../frontend
   npm start
   ```

### Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```plaintext
MONGODB_URI=<your-mongodb-uri>
PORT=<your-port-number>
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
