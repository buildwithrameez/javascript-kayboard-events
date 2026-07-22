# 🎹 Keyboard Event Inspector

A simple and interactive web application that detects and displays real-time details of any key pressed on the keyboard. It helps developers easily identify keyboard event properties.

## 🚀 Features

- **Key Detected**: Shows the exact key pressed (e.g., `Enter`, `a`, `ArrowUp`).
- **Key Code (`event.code`)**: Displays the physical key code on the keyboard.
- **Char Code / Key Code (`event.keyCode`)**: Shows the numeric JavaScript key code.
- **Event Type**: Identifies the specific event triggered (`keydown`, `keyup`, or `keypress`).

## 🛠️ Tech Stack

- **HTML5**: For the structural layout.
- **CSS3**: For a clean, modern, and responsive user interface.
- **JavaScript (ES6)**: For capturing and handling the keyboard event listeners.

## 📦 How to Run the Project Locally

1. **Clone or Download the Project**:
   ```bash
   git clone <your-repository-url>
   ```
2. **Navigate to the Project Folder**:
   ```bash
   cd <project-folder-name>
   ```
3. **Open the Project**:
   - Simply double-click the `index.html` file to run it in your browser.
   - *Alternatively*, if you are using VS Code, right-click `index.html` and select **"Open with Live Server"**.

## 💻 Code Overview (How it works)

The application listens to the global keyboard events using JavaScript:

```javascript
window.addEventListener('keydown', (event) => {
    console.log("Key:", event.key);
    console.log("Code:", event.code);
    console.log("KeyCode:", event.keyCode);
    console.log("Event Type:", event.type);
});
```

