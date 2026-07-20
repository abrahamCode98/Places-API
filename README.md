
# 📍 Places API

<p align="center">
  <strong>A RESTful API for managing places and locations, built with Node.js, Express.js, MongoDB, and Mongoose.</strong>
</p>

---

## 📖 Overview

Places API is a backend application that allows users to create, retrieve, update, and delete information about different places and locations.

The API follows RESTful principles and provides a structured way to manage place-related data such as names, descriptions, addresses, cities, states, countries, categories, and images (if supported).

This project demonstrates backend development concepts including API design, database integration, request validation, CRUD operations, middleware, and error handling.

---

## ✨ Features

- ➕ Create a new place
- 📍 Retrieve all places
- 🔍 Retrieve a place by ID
- ✏️ Update place information
- ❌ Delete a place
- 🔎 Search places
- 🛡️ Input validation
- ⚠️ Centralized error handling
- 📦 RESTful API architecture
- 🗄️ MongoDB database integration

---

## 🛠 Tech Stack

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Development Tools

- Postman
- Git
- GitHub
- npm

---

## 📂 Project Structure

```
places-api/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── util/
├── .env
├── app.js
├── server.js
├── package.json
└── README.md
```

---

## 🚀 Installation

### Clone the repository

```bash
git clone https://github.com/abrahamCode98/places-api.git
```

Navigate into the project

```bash
cd places-api
```

Install dependencies

```bash
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string
```

---

## ▶️ Running the Application

Development mode

```bash
npm run dev
```

Production mode

```bash
npm start
```

---

## 📌 API Endpoints

### Places

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/places | Get all places |
| GET | /api/places/:pid | Get place by ID |
| POST | /api/places | Create a new place |
| PUT | /api/places/:pid | Update a place |
| DELETE | /api/places/:pid | Delete a place |

---

## 📥 Example Request

```http
POST /api/places
```

```json
{
  "name": "Lekki Conservation Centre",
  "description": "Nature reserve and tourist attraction",
  "address": "Lekki Peninsula",
  "city": "Lagos",
  "state": "Lagos",
  "country": "Nigeria",
  "category": "Tourist Attraction"
}
```

---

## 📤 Example Response

```json
{
  "_id": "665c4b1e2d89c2",
  "name": "Lekki Conservation Centre",
  "city": "Lagos",
  "country": "Nigeria",
  "category": "Tourist Attraction"
}
```

---

## 🧪 Testing

The API was tested using:

- Postman

Test cases include:

- Create Place
- Retrieve All Places
- Retrieve Place by ID
- Update Place
- Delete Place
- Invalid Requests
- Error Responses

---

## 📚 Concepts Demonstrated

- RESTful API Development
- CRUD Operations
- Express.js Routing
- MongoDB Integration
- Mongoose ODM
- Request Validation
- Middleware
- Error Handling
- Environment Variables
- MVC Architecture

---

## 🔮 Future Improvements

- 🔐 JWT Authentication
- 👥 User Accounts
- 🖼️ Image Upload with Cloudinary
- 📍 Google Maps Integration
- 🌐 Geolocation Support
- ⭐ Ratings & Reviews
- 📄 Pagination
- 🔍 Advanced Search & Filtering
- 📚 Swagger API Documentation
- 🐳 Docker Support
- ✅ Unit & Integration Testing
- 🚀 CI/CD Pipeline

---

## 🤝 Contributing

Contributions are welcome!

To contribute:

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push your branch.

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Abraham Nkonduok**

Backend Developer | MERN Stack Developer

GitHub: https://github.com/abrahamCode98

---

## ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.

Your support is greatly appreciated.
