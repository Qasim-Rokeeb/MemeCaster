
# MemeCaster😄🎨

A fun web app that lets users browse meme templates and generate their own memes using the Imgflip API. Built with **React**, **Tailwind CSS**, and supports **infinite scrolling** and **admin credential configuration**.

---

## 🌟 Features

- 🔍 Browse a large list of meme templates (with infinite scroll).
- ✍️ Add custom text to top and bottom of memes.
- 🖼️ Generate and preview memes using the Imgflip API.
- 💾 Download generated memes instantly.
- 🔐 Admin panel to update API credentials securely.

---

## 🛠 Tech Stack

- **React** – Frontend framework
- **Tailwind CSS** – UI styling
- **Imgflip API** – Meme image generation
- **LocalStorage** – Save API credentials locally

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/meme-creator.git
cd meme-creator
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

App will be live at `http://localhost:5173` (or another port).

---

## 🧪 Usage

### 🏠 Homepage

* Scroll to explore meme templates.
* Click on any meme to customize it.

### 🎨 Meme GeneratorS

* Enter top and bottom text.
* Click **Generate Meme**.
* Click **Download Meme** to save the result.

### ⚙️ Admin Panel

* Click the ⚙️ **Admin** button in the navbar.
* Enter the admin password: `************`
* Input Imgflip credentials (username + password).
* Credentials are saved in your browser's localStorage.

---

## 📦 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── AdminModal.jsx
│   ├── MemeCard.jsx
├── pages/
│   ├── Home.jsx
│   ├── Customize.jsx
├── data/
│   └── templates.js
├── App.jsx
├── main.jsx
```

---

## 📄 License

MIT License. Feel free to use and modify this project.

---

## 🙌 Credits

* [Imgflip API](https://api.imgflip.com/) – for meme generation
* [Tailwind CSS](https://tailwindcss.com/) – for utility-first styling

```


