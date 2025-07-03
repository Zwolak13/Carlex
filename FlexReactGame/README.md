# CHECK HERE -> https://carlex.pages.dev


# 🧩 CSS Flexbox Quest Game

An interactive educational game designed to teach CSS Flexbox through visual challenges and puzzles. Players input CSS rules, which are parsed, validated, and applied to position components on the game board.

---

## 🖼️ Overview

In this game, the player writes CSS properties (e.g., `display: flex`, `justify-content: center`) to solve layout-based puzzles. Each level visually displays a road with cars or other objects that need to be arranged according to the task description. The player's input is dynamically translated into Tailwind CSS utility classes to modify the layout in real-time.

---

## 🚀 Features

- 🔤 **CSS to Tailwind parsing** – Converts user-written CSS like `justify-content: space-between` into Tailwind classes like `justify-between`
- 🧠 **Level-based puzzle system** – Each level presents a new Flexbox challenge
- 🎯 **Bonus value system** – Automatically applies default layout classes when not overridden by the user
- 💾 **Persistent progress** – Saves player answers using `localStorage`
- 📱 **Responsive and mobile-friendly UI**

---

## 🛠️ Technologies Used

- **React** – Functional components and state management
- **TypeScript** – Strict typing for safer code
- **Tailwind CSS** – Utility-first styling and dynamic layout
- **Vite** – Fast development bundler
- **localStorage API** – For answer persistence between sessions



