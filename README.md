# 🏏 React BPL Dream11

An interactive BPL Dream11-style web app inspired by the Bangladesh Premier League (BPL), where users can create their own fantasy cricket team by selecting players from different countries. Built entirely with React, the app is a great showcase of state management, conditional rendering, and component-based architecture.

🔗 **Live Demo:** [Visit the Site](https://your-netlify-link.netlify.app)

---

## 🚀 Technologies Used

- ⚛️ **React JS** – Functional components & state management
- 🎨 **Tailwind CSS** – Utility-first CSS framework for fast styling
- 🧵 **Custom CSS** – For additional tweaks and styles
- 🔔 **React Toastify** – For real-time alerts and notifications
- 🧠 **Fake Data** – 15 player profiles generated using ChatGPT, featuring players from various countries

---

## ✨ Key Features

1. **Player View Toggle**  
   Easily switch between **Available Players** and **Selected Players** using toggle buttons in the main section.

2. **Smart Player Selection System**  
   - Choose players from the available list.
   - Selection is **limited to 6 players**.
   - **Duplicate selection is prevented**—a player already selected can’t be added again.
   - Each player has a **bidding price**, and you must have enough **credit coins** to select them.

3. **Free Credit Earning System**  
   From the banner section, click the **"Claim Free Credit"** button to earn more coins—**as many times as you like**!

4. **Team Management**  
   Remove selected players from your team at any time using the **Remove** button.

5. **Instant Feedback with React Toastify**  
   Interactive notifications for all key actions:
   - Successful credit claims
   - Insufficient coins warning
   - Player added or removed confirmations
   - Duplicate selection alerts

6. **Modular Component Structure**  
   - Main Components in `App.jsx`:  
     `Navbar`, `Banner`, `AvailablePlayers`, `Newsletter`, `Footer`
   - Nested Components inside `AvailablePlayers`:  
     `Player`, `SelectedPlayers`

---

## 📌 A Note from the Developer

 This project is created to practice and functional demonstration of React fundamentals like state lifting, props usage, dynamic rendering, and responsive design using Tailwind. It's lightweight, interactive, responsive, and perfect for learning or showcasing basic React app development.

---

