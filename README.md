# AGE_CALCULATOR (Web App)

A simple **web-based Age Calculator** built using **HTML, CSS, and JavaScript**.
It allows users to input their **Date of Birth (DOB)** and calculates their **exact age** in **years, months, and days**.
Includes additional features like **auto display of current date** and a **Dark/Light mode toggle**.

## 🚀 Features

✅ **Calculate Age Accurately**

* User enters Date of Birth (day, month, year).
* Output shows age in **years, months, and days**.

✅ **Auto Display Current Date**

* Automatically shows today’s date on page load.

✅ **Dark / Light Mode Toggle**

* Switch between light and dark themes dynamically.

✅ **Input Validation**

* Ensures the user selects a valid date (no future dates).

✅ **Responsive and Simple UI**

* Clean design using modern CSS and an easy-to-understand layout.


## 🛠️ Tech Stack

| Technology           | Purpose                                                      |
| -------------------- | ------------------------------------------------------------ |
| **HTML5**            | Structure and form elements                                  |
| **CSS3**             | Styling, layout, and dark/light mode design                  |
| **JavaScript (ES6)** | Logic for age calculation, DOM manipulation, theme switching |


## 📁 Project Structure

```
age-calculator/
│
├── index.html      # Main HTML structure
├── style.css       # Styles (light/dark mode + layout)
└── script.js       # JavaScript logic (age calculation + toggle + date)
```


## 💡 How It Works

1. The user selects their **Date of Birth** using an HTML `<input type="date">`.
2. When the user clicks **“Calculate Age”**, the JavaScript function:

   * Fetches the current date using `new Date()`.
   * Subtracts the DOB from today’s date.
   * Adjusts for negative days and months to get a precise result.
3. Displays the result dynamically in the browser.
4. The **current date** appears automatically when the page loads.
5. The **Dark/Light Mode** can be toggled with a single click.


## 🧠 Key JavaScript Concepts Used

* **DOM Manipulation:**
  Accessed and modified HTML elements using `document.getElementById()` and `.innerHTML`.

* **JavaScript Date Object:**
  Used `new Date()` to get today’s date and DOB for calculations.

* **Conditional Logic & Validation:**
  Checked if input was empty or a future date before calculating.

* **Dynamic Class Toggle:**
  Added or removed the `"dark"` class from the `<body>` for theme switching.


## ⚙️ Setup & Usage

### Option 1: Open Locally

1. **Download** or **clone** this repository:

   ```bash
   git clone https://github.com/your-username/age-calculator.git
   ```
2. Open the project folder.
3. Double-click on **index.html** to open it in your browser.

### Option 2: Run in VS Code (with Live Server)

1. Install the **Live Server** extension in VS Code.
2. Open the project folder.
3. Right-click on **index.html** → “Open with Live Server”.
4. The app will launch in your browser automatically.


## 📚 Learning Concepts Covered

* Building web pages using **HTML, CSS, and JS**.
* Handling **user input** and **validations**.
* Using **Date and Time operations** in JavaScript.
* Implementing **DOM Manipulation** to update results.
* Adding **Theme Toggle Functionality** with CSS & JS.


## 🙌 Author

**👨‍💻 Muhammad Zohaib Tariq**
* 🎓 Computer Science Graduate 
* 📧 Email: *zohaibtariq566@gmail.com*
* 🌐 GitHub: [github.com/zabi2223](https://github.com/zabi2223)
* 💼 LinkedIn: [linkedin.com/in/zohaib-tariq-meo](https://linkedin.com/in/zohaib-tariq-meo)


## 📜 License

This project is **open-source**.
