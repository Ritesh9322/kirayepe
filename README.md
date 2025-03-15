# Secondhand Marketplace

## Description

This project is a web application for buying and selling secondhand items. It features user authentication, product listings, and management. Users can register, log in, create product listings, and browse available products.

A web application for buying and selling secondhand items, featuring user authentication, product listings, and management.

## Folder Structure

```
backend/
├── config/               # Configuration files
├── middleware/           # Middleware for authentication
├── models/               # Mongoose models
├── routes/               # API routes
├── .env                  # Environment variables
├── package.json          # Backend dependencies
└── server.js             # Main server file


frontend/
├── src/                  # Source files for the Angular application
│   ├── app/              # Main application components
│   ├── components/       # Reusable components
│   ├── services/         # Services for API calls
│   ├── styles.css        # Global styles
│   └── index.html        # Main HTML file
├── package.json          # Frontend dependencies
└── angular.json          # Angular configuration
```

## Installation Instructions

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (installed and running)

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd secondhand-market
   ```




1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd secondhand-market
   ```



2. Navigate to the backend directory and install dependencies:

   ```bash
   cd backend
   npm install
   ```



3. Create a `.env` file in the backend directory with the following content:

   ```
   JWT_SECRET=your_jwt_secret
   ```



4. Navigate to the frontend directory and install dependencies:

   ```bash
   cd ../frontend
   npm install
   ```



## Usage

1. Start the backend server:
   ```bash
   cd backend
   node server.js
   ```

2. Start the frontend application:
   ```bash
   cd frontend
   ng serve
   ```

3. Open your browser and navigate to `http://localhost:4200`.

### Testing Instructions
To run tests, navigate to the backend or frontend directory and use the following commands:
- For backend tests:
   ```bash
   cd backend
   npm test
   ```
- For frontend tests:
   ```bash
   cd frontend
   ng test
   ```

### Known Issues
- Currently, the application does not support image uploads for product listings.
- Some API endpoints may require further validation and error handling.




1. Start the backend server:

   ```bash
   cd backend
   node server.js
   ```



2. Start the frontend application:

   ```bash
   cd frontend
   ng serve
   ```



3. Open your browser and navigate to `http://localhost:4200`.



## API Endpoints


- **Authentication**  
  - `POST /api/auth/login`: Log in a user.  
  - `POST /api/auth/register`: Register a new user.  

- **Products**  
  - `GET /api/products`: Get a list of products.  
  - `GET /api/products/:id`: Get details of a specific product.  
  - `POST /api/products`: Create a new product.  



## Contributing


Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.



## License


This project is licensed under the MIT License.
