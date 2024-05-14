# DiveSphere

DiveSphere is a web application that combines dive log features with social media and mapping functionalities for dive sites worldwide. Users can book services with providers for dive charters, courses, and more. System will allow for import of dive logs, video, text.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: Pug, TailwindCSS, DaisyUI
- **Database**: MongoDB

## Project Structure

  - **App.js**: Root application component.
  - **index.js**: Main entry point for the application.

### Backend

The backend code is structured as follows:

- **config/**: Configuration files (e.g., database connection).
- **controllers/**: Functions to handle requests and responses.
- **models/**: Database schemas and models.
- **routes/**: API routes.
- **middlewares/**: Middleware functions.
- **utils/**: Utility functions and helpers.

### Frontend

The frontend code is structured as follows:

- **views/**: Pug templates for server-side rendering.
- **public/**: Source files for the application.
  - **images/**: Images, icons, and other static assets.
  - **components/**: Reusable components.
  - **styles/**: CSS and styling files.
  - **javascripts/**: JavaScript files.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vancityactivist/DiveSphere.git
   ```

2. Iinstall dependencies:
   ```bash
   cd DiveSphere
   npm install
   ```

### Running the Application

1. Start the server:
   ```bash
   npm start
   ```

### Environment Variables (Upcoming)

Create a `.env` file in the `backend` directory with the following variables:

```plaintext
MONGODB_URI=<your-mongodb-uri>
PORT=<your-port-number>
```

## Contributing

This app is in the initial stages. Nothing to contribute.... yet.

## License

[MIT](https://choosealicense.com/licenses/mit/)
