# **E-commerce App 🛒💻**

---

## **📂 Dataset**
🔹 This project does not use a predefined dataset, but relies on a database to store product and user data.

---

## **🛠 Tech Stack**
- **Frontend:**
  - **React** – JavaScript library for building the user interface
  - **Axios** – For HTTP requests to the backend

- **Backend:**
  - **Node.js with Express** – Web server and API
  - **MongoDB** – NoSQL database to store product and user information
  - **jsonwebtoken** – For authentication via tokens
  - **bcrypt** – For secure password hashing
  - **cors** – For handling cross-origin requests
  - **body-parser** – Middleware to parse incoming request bodies

---

## **📦 Installation & Setup**

### **🔹 Prerequisites**
Ensure you have **Node.js** and **Docker** installed. Then, install the dependencies:

1. Initialize the Node.js project:
    ```bash
    npm init -y
    ```

2. Install required packages:
    ```bash
    npm install express mongoose jsonwebtoken bcrypt body-parser cors
    ```

### **🔹 Running the App**
1. **Backend:**
    - In the `server.js` file, ensure your MongoDB is running (locally or via Docker).
    - Start the backend server:
      ```bash
      node server.js
      ```
    - The server will be running on `http://localhost:3001`.

2. **Frontend:**
    - In the `src` folder, run the React app:
      ```bash
      npm start
      ```
    - The React app will be running on `http://localhost:3000`.

---

## **💻 Dockerize the App**

To run both the frontend and backend with Docker, follow the steps below:

1. **Create a `Dockerfile` for the backend**:
    ```dockerfile
    # Backend Dockerfile
    FROM node:14

    WORKDIR /usr/src/app
    COPY package*.json ./
    RUN npm install
    COPY . .

    EXPOSE 3001
    CMD ["node", "server.js"]
    ```

2. **Create a `Dockerfile` for the frontend**:
    ```dockerfile
    # Frontend Dockerfile
    FROM node:14

    WORKDIR /usr/src/app
    COPY package*.json ./
    RUN npm install
    COPY . .

    EXPOSE 3000
    CMD ["npm", "start"]
    ```

3. **Build and run the Docker containers**:
    - For backend:
      ```bash
      docker build -t ecommerce-backend .
      docker run -p 3001:3001 ecommerce-backend
      ```

    - For frontend:
      ```bash
      docker build -t ecommerce-frontend .
      docker run -p 3000:3000 ecommerce-frontend
      ```

---

## **🎯 Features**
- **User Registration**: Users can register by providing a username and password. The password is securely hashed using `bcrypt`.
- **User Login**: Users can log in to the system and receive a **JWT token** for authentication.
- **Product Listing**: Users can view products, which are fetched from the backend.
- **Add Product**: Authenticated users can add products to the database.

---
