# ReBazaar – Resell, Reuse, Rejoice! 🛍️✨  
<img src="./frontend/public/rebuy.gif" width="400px" alt="ReBazaar">


## 🌟 Description

Welcome to **ReBazaar** – a web application for buying and selling secondhand items! 🔄🏷️💰 This platform allows users to:

✅ Register & Log in 🔐  
✅ Create & Manage Product Listings 📦  
✅ Browse Available Products 🛒

🌱 **Resell, Reuse, Rejoice!** 🌎

---

## 📁 Folder Structure 📂

```
backend/
backend/  
├── config/               # ⚙️ Configuration files 🛠️  
│   ├── db.js             # 🛢️ Database connection (MongoDB setup)  
├── middleware/           # 🔒 Middleware for authentication & security  
│   ├── auth.js           # 🛡️ Middleware for protecting routes  
├── models/               # 🗂️ Mongoose models  
│   ├── User.js           # 👤 User model schema (Stores user details)  
│   ├── Product.js        # 📦 Product model schema (Stores product details)  
├── routes/               # 🛣️ API routes  
│   ├── authRoutes.js     # 🔐 Routes for user authentication (Login/Register)  
│   ├── productRoutes.js  # 🏷️ Routes for managing product listings  
├── .env                  # 🌍 Environment variables (Secrets & Configurations)  
├── package.json          # 📦 Backend dependencies & scripts  
├── server.js             # 🚀 Main server file (Express app entry point) 


frontend/  
├── src/                  # 🎨 Source files for Angular application  
│   ├── app/              # 🏗️ Main application components  
│   │   ├── guards/       # 🛡️ Route guards for authentication & authorization  
│   │   ├── models/       # 📌 TypeScript interfaces & models  
│   │   ├── services/     # 🔄 Core services used across the app  
│   ├── components/       # 🧩 Reusable components  
│   │   ├── login/        # 🔑 Login component  
│   │   ├── register/     # 📝 Registration component  
│   │   ├── product-create/  # ➕ Create product listing component  
│   │   ├── product-list/    # 📜 Display product listings component  
│   │   ├── profile/         # 👤 User profile component  
│   ├── styles.css        # 🎨 Global styles  
│   └── index.html        # 📜 Main HTML file  
├── package.json          # 📦 Frontend dependencies  
└── angular.json          # ⚙️ Angular configuration  

README.md # Documentation file that provides an overview of a project.
```

---

## 🚀 Installation Instructions

### ✅ Prerequisites
- 🟢 **Node.js** (version 14 or higher)
- 🍃 **MongoDB** (installed and running)

### 📥 Clone the repository
```bash
git clone https://github.com/Satyaamp/ReBazaar.git
cd rebazaar
```

### 📌 Backend Setup
1️⃣ Navigate to the backend directory and install dependencies:
```bash
cd backend
npm install
```

2️⃣ Create a `.env` file in the backend directory with the following content:
```ini
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=3000
```

### 🎨 Frontend Setup
1️⃣ Navigate to the frontend directory and install dependencies:
```bash
cd ../frontend
npm install
```

---

## 🎯 Usage

### Start the backend server

You can start the backend server using one of the following commands:

For production:
```bash
cd backend
node server.js
```

For development (auto-restart on changes):
```bash
cd backend
nodemon server.js
```

### 🚀 Start the frontend application
```bash
cd frontend
ng serve
```

### 🌐 Open your browser and navigate to:
`http://localhost:4200`

---

## 🔍 API Endpoints

### 🔑 Authentication
- `POST /api/auth/login` ➡️ Log in a user 🔐
- `POST /api/auth/register` ➡️ Register a new user 📝

### 📦 Products API Endpoints
- `GET /api/products` ➡️ Retrieve a list of all products 📜
- `POST /api/products/create` ➡️ Add a new product ➕

### 👤 Profile API Endpoints
- `GET /api/profile` ➡️ Retrieve user profile details 👤
---

## 🧪 Testing Instructions

📌 To run tests, navigate to the backend or frontend directory and use the following commands:

- **Backend Tests**
```bash
cd backend
npm test
```

- **Frontend Tests**
```bash
cd frontend
ng test
```

---

## 📸 Screenshots

Here are some screenshots of **ReBazaar**:

### 🏠 Homepage
![Homepage Screenshot](./frontend/public/screenshots/homepage.png)

### 🔐 Login Page
![Login Screenshot](./frontend/public/screenshots/login.png)

### 📝 Register Page
![Register Screenshot](./frontend/public/screenshots/signup.png)

### Profile
![Profile](./frontend/public/screenshots/profile.png)

### 🛒 Product Listings
![Product Listings Screenshot](./frontend/public/screenshots/product-listings.png)

### ➕ Create Listing
![Create Listing Screenshot](./frontend/public/screenshots/create-listing.png)

---

## ⚠️ Known Issues

❌ Currently, the application **does not support image uploads** for product listings.  
❌ Some API endpoints **may require additional validation and error handling**.

---

## 🤝 Contributing

💡 Contributions are **welcome**! Feel free to submit a pull request or open an issue for suggestions and improvements. 🚀

---

## 📜 License

📄 This project is licensed under the **MIT License**. Feel free to use and modify it! 🎉

---

🚀 **ReSell, ReUse, ReJoice!** ♻️🛒