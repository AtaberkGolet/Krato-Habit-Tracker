# ⚡ Krato Habit Tracker

**Krato** is a lightweight, zero-dependency, client-side habit tracking web application built entirely with **Vanilla JavaScript (ES6+), HTML5, and CSS3**. 

Designed with a focus on core software engineering fundamentals, DOM manipulation mechanics, and optimal data structures rather than relying on heavy frontend frameworks.

---

## 🎯 Engineering Highlights & Architecture

Instead of treating this as a simple CRUD exercise, Krato is architected to solve common frontend engineering challenges from scratch:

* **$O(1)$ Data Access Architecture (Hash Map / Object):** Habits and their completion histories are structured using key-value hash maps rather than flat arrays, enabling constant-time $O(1)$ lookups and state mutations when toggling dates or querying specific habits.
* **URL-Driven State & Routing (`URLSearchParams`):** Multi-page navigation between the dashboard (`main.html`) and the habit inspection view (`details.html`) is handled dynamically via query parameters (`?id=...`), mimicking real-world stateless routing.
* **DOM Event Delegation & Propagation Control:** Interactive nested elements (clickable habit cards containing independent completion toggle buttons) are managed by explicitly handling **Event Bubbling** (`stopPropagation` / target matching) to prevent routing conflicts.
* **ISO 8601 Date Standardization:** Completion logs and dynamic calendar rendering rely on standardized date strings (`YYYY-MM-DD`) to avoid timezone drift and ensure deterministic streak calculations.
* **Persistent Local Storage:** Full state persistence across browser sessions using the Web Storage API (`localStorage`) with centralized serialization/deserialization logic.

---

## 📂 Project Structure

```text
├── main.html       # Main dashboard view displaying active habits and daily status
├── main.js         # Dashboard rendering, event delegation, and quick-toggle logic
├── add.html        # View for creating and configuring new habits
├── add.js          # Form validation, unique ID generation, and storage insertion
├── details.html    # Deep-dive view for a specific habit (streaks & interactive calendar)
├── details.js      # URL parameter parsing, dynamic calendar rendering, and history mutation
├── habit.js        # Core data model / shared habit state utilities
└── style.css       # Custom responsive styling and UI layout
```

---

## 🚀 Getting Started

Since Krato is built with pure web standards and zero external dependencies, no build tools (`npm`, `webpack`, etc.) are required.

### 1. Clone the repository
```bash
git clone https://github.com/ataberkgolet/krato-habit-tracker.git
cd krato-habit-tracker
```

### 2. Run locally
You can open `main.html` directly in your browser, or serve it via a local development server (e.g., VS Code **Live Server** or Python's built-in HTTP server) for clean URL routing:

```bash
# Using Python 3
python3 -m http.server 8000
```
Then navigate to `http://localhost:8000/main.html` in your browser.

---

## 🛠️ Roadmap & Future Enhancements

- [x] Dynamic ID-based routing between main dashboard and details view
- [x] Event bubbling isolation for nested interactive card controls
- [x] Interactive monthly calendar grid in `details.html`
- [ ] **Security Hardening (AppSec):** Sanitizing DOM insertions (`textContent` / escaping) to prevent DOM-based XSS vectors
- [ ] **Migration to React + Vite:** Re-implementing the architecture using a component-based state model for comparison

---

## 👤 Author

**Ataberk Gölet**  
*Computer Engineering Student @ Hacettepe University*  
GitHub: [@ataberkgolet](https://github.com/ataberkgolet)