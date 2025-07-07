# 🍽️ ReactJS Food Ordering Web App

## 📝 Abstract

This ReactJS web app streamlines food ordering for restaurants and canteens, allowing users to browse menus, build carts, and confirm orders. An admin panel manages submissions, with data persisted locally via `localStorage`. This solution offers a lightweight, user-friendly platform for small businesses.

**Keywords:** component, formatting, style, styling, insert

---

## 📌 Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Working Procedure](#working-procedure)
  - [User Workflow](#user-workflow)
  - [Admin Workflow](#admin-workflow)
- [Result & Discussion](#result--discussion)
- [Conclusion](#conclusion)

---

## 🧾 Introduction

Manual food ordering in many small restaurants and cafeterias leads to inefficiencies such as errors and delays. This application provides a web-based solution for improving accuracy, speed, and order management. It offers a user-friendly customer interface and an admin panel to manage and review submitted orders.

---

## 🗂️ Project Structure

### 📁 File Structure

```
src/
├── App.jsx              # Main app file (routing, state)
├── main.jsx             # React root rendering
├── components/
│   ├── AdminPage.jsx    # Admin panel with password access
│   ├── Footer.jsx       # App footer
│   ├── FoodItem.jsx     # Food card component
│   ├── FoodList.jsx     # Menu display with filtering
│   ├── Header.jsx       # App header with QR code
│   ├── MenuFilter.jsx   # Filter by meal type
│   └── OrderPage.jsx    # Order form and submission
├── data/
│   └── foodData.js      # Static food item data
├── index.css
├── index.jsx
└── assets/
    └── react.svg
public/
└── images/
    ├── burger.jpg, etc.
    └── frame.png        # QR code image
```

---

## 💻 Technology Stack

- **ReactJS**: Component-based UI framework
- **JavaScript (ES6+)**: Application logic and interactivity
- **HTML5 & CSS3**: Markup and styling
- **LocalStorage API**: Client-side data persistence

---

## ⚙️ Working Procedure

### 👤 User Workflow

1. **Menu Browsing and Filtering**  
   Users see food items categorized (Breakfast, Lunch, Dinner). Filter buttons are available for easy navigation.

2. **Item Selection and Cart Management**  
   Users select food items (via `FoodItem.jsx`). Items are added to the cart, and quantities are adjustable.

3. **Order Placement**  
   On the `OrderPage`, users input their name and submit their order. The order is saved to `localStorage`.

---

### 🔐 Admin Workflow

1. **Admin Access**  
   Admin panel (`AdminPage.jsx`) is protected by a password prompt.

2. **Order Viewing**  
   On successful login, all orders stored in `localStorage` are displayed for review.

---

## 📊 Result & Discussion

- **UI & Navigation**: Clean and intuitive with meal category filters.
- **Cart Management**: Users can edit quantities or remove items before finalizing.
- **Order Submission**: No backend needed—everything is stored in browser.
- **Admin Oversight**: Admins can securely view all customer orders.
- **QR Code Integration**: Users can scan a QR code (header image) for quick access.

---

## ✅ Conclusion

This lightweight ReactJS application efficiently digitizes the food ordering process for small businesses. It improves speed, order accuracy, and ease of management through a clean interface and localStorage-based persistence—without requiring a backend server.

---
