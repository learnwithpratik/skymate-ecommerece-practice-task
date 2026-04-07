# 🛒 Skymate E-commerce Practice Task

A modern **frontend-only e-commerce application** built using **React.js** and **Tailwind CSS**, focused on mastering **dynamic routing, UI composition, and state management without a backend**.

---

## 🚀 Live Demo

🔗 https://fs-34-challenge-1.vercel.app/

---

## 📌 Overview

This project is a practice implementation of an e-commerce platform UI.
It demonstrates how to build a scalable frontend architecture using:

* Dynamic routing
* Component-based design
* Local state management
* Clean and responsive UI

> ⚠️ Note: This project does not include a backend. All data handling is done on the client side.

---

## ✨ Features

### 🧭 Routing & Navigation

* Dynamic routing using `react-router`
* Nested routes for structured navigation
* Sidebar navigation with dropdown menus

### 🛍️ Product System

* Product listing page
* Product detail view (dynamic via route params)
* Image rendering with fallback handling

### 🛒 Cart Functionality

* Add to cart
* Remove from cart
* Increase / decrease quantity
* Cart drawer UI (responsive)
* Cart total calculation
* Local state-based persistence

### 🎨 UI/UX

* Fully responsive design
* Tailwind CSS styling
* Sidebar + drawer layout
* Smooth transitions & animations

---

## 🧱 Tech Stack

* ⚛️ React.js
* 🎨 Tailwind CSS
* 🌐 React Router DOM
* 📦 Axios (for API fetching if used)

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   ├── CartDrawer.jsx
│   └── ProductCard.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   └── Login.jsx
│
├── context/
│   └── CartContext.jsx
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/learnwithpratik/skymate-ecommerece-practice-task.git

# Navigate into the project
cd skymate-ecommerece-practice-task

# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 🧠 Key Learnings

* Handling **dynamic routing without backend**
* Managing UI state efficiently
* Building reusable components
* Creating responsive layouts with Tailwind
* Implementing cart logic using local state

---

## 🔮 Future Improvements

* 🔐 Authentication system
* 🗄️ Backend integration (Node.js / Firebase)
* 💾 LocalStorage cart persistence
* 💳 Payment gateway integration
* 🔍 Search & filtering system

---

## 🤝 Contributing

This is a practice project, but contributions and suggestions are welcome!

---


## 👨‍💻 Author

Developed as part of a frontend practice challenge.

---

⭐ If you found this helpful, consider giving the repo a star!
