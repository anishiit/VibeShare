# VibeShare

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://vibeshare-ce0v.onrender.com/)
[![GitHub issues](https://img.shields.io/github/issues/anishiit/VibeShare)](https://github.com/anishiit/VibeShare/issues)
[![License](https://img.shields.io/github/license/anishiit/VibeShare)](https://github.com/anishiit/VibeShare/blob/main/LICENSE)

**VibeShare** is a dynamic and intuitive social media platform that allows users to share their vibes through posts, engage with others through likes, and manage their profiles efficiently. Built with modern technologies, it ensures secure and seamless interaction, aiming to provide users with a real-time social experience.

## ✨ Key Features
- **User Authentication**: Secure sign-up and login with hashed passwords using `bcrypt.js` and token-based authentication with `JWT`.
- **Post Creation**: Users can create, share, and delete posts, with a visually appealing UI for interaction.
- **Like System**: Users can like posts, engaging with content that resonates with them.
- **Profile Management**: Each user has a personalized profile page where they can update their details.
- **Security First**: The platform integrates robust security features to protect user data and ensure safe transactions.
- **Real-Time Chat & Notifications** (In Progress 🚧): Using Socket.io for instant messaging and notification features to boost user engagement by 30%.

## 🌐 Live Demo
You can explore the **VibeShare** platform in action by visiting the [Live Demo](https://vibeshare-ce0v.onrender.com/).

![VibeShare](https://via.placeholder.com/1024x400?text=VibeShare+Interface)

## 🚀 Tech Stack
VibeShare utilizes a modern web development stack to ensure performance, scalability, and maintainability:

### Frontend:
- **HTML5**, **CSS3**, **Tailwind CSS**: For a responsive, sleek, and consistent user interface.
- **JavaScript**: Handling dynamic interactions on the frontend.
- **EJS**:

### Backend:
- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for API creation and server-side logic.
- **MongoDB**: NoSQL database for managing user profiles, posts, and interactions.
- **Mongoose**: Object Data Modeling (ODM) for MongoDB to interact with the database seamlessly.
- **JWT (JSON Web Tokens)**: Authentication and authorization mechanism.
- **bcrypt.js**: Password hashing for secure user data management.

### Real-Time:
- **Socket.io** (Coming Soon): For enabling real-time messaging and notifications.

## 🛠️ Installation & Setup

Follow these instructions to set up and run **VibeShare** locally.

### Prerequisites:
- **Node.js**: Ensure Node.js is installed. You can download it [here](https://nodejs.org/).
- **MongoDB**: You can install MongoDB locally or use MongoDB Atlas.

### Steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/anishiit/VibeShare.git
   cd VibeShare
