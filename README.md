# VittaManthan Frontend

VittaManthan is an intelligent **Finance Copilot** designed to transform how you understand and manage your money. By leveraging the **Account Aggregator (AA)** framework and advanced AI, it turns raw financial data into clear, actionable insights through a secure, natural language interface.

![VittaManthan Hero](docs/screenshots/hero-dashboard.png)

## 🚀 Overview

VittaManthan bridges the gap between complex financial statements and personal financial clarity. Instead of digging through spreadsheets or bank apps, users can simply ask questions like *"Can I afford a vacation in December?"* or *"Analyze my spending trends for October"* and get instant, data-driven answers.

## ✨ Key Features

### 1. 🤖 Natural Language Q&A
Your Financial Command Center. Experience the power of natural language processing to ask complex financial questions and receive instant, visualized answers.
*   **Ask anything:** "How much am I spending on subscriptions?"
*   **Get insights:** "Show me my top spending categories."

![Chat Interface](docs/screenshots/chat-interface.png)

### 2. 📊 Visualization-Ready Analytics
Turn numbers into narratives. The dashboard provides a real-time view of your financial health.
*   **Total Spend & Income Tracking**
*   **Category-wise Breakdown** (Food, Transport, Entertainment, etc.)
*   **Budget Status Monitoring**

### 3. 🛡️ Bank-Grade Security
Built on the **RBI-approved Account Aggregator framework**, ensuring your data remains yours.
*   **Consent-Based Access:** You control exactly what data is shared and for how long.
*   **End-to-End Encryption:** Data is encrypted at rest and in transit.
*   **No Data Storage:** We never store your raw financial data; we only analyze it in real-time.

![Security Features](docs/screenshots/security-features.png)

### 4. 🔍 Comprehensive Features
Everything you need for financial clarity in one platform.
*   **Spot Anomalies:** Detect unusual transactions automatically.
*   **Visualization-Ready:** Transactions are automatically categorized and graphed.

![Features Overview](docs/screenshots/features-overview.png)

## 🛠️ Tech Stack

*   **Frontend Framework**: [React](https://react.dev/) (v19)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
*   **Linting**: [ESLint](https://eslint.org/)

## 📂 Project Structure

```
src/
├── assets/          # Static assets (images, icons)
├── components/      # Reusable UI components
│   ├── ChatDemo.jsx       # AI Chat interface component
│   ├── CTA.jsx            # Call to Action sections
│   ├── Features.jsx       # Feature grid display
│   ├── Hero.jsx           # Main landing area with dashboard preview
│   ├── Security.jsx       # Security features showcase
│   └── ...
├── App.jsx          # Main application layout
└── index.css        # Global styles & Tailwind setup
```

## ⚡ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

*   Node.js (v18 or higher)
*   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Prabal864/LiveReconAI-Frontend.git
    cd LiveReconAI-Frontend
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```
    The app will run at `http://localhost:5173`.

## 📜 Scripts

*   `npm run dev`: Starts the development server.
*   `npm run build`: Builds the application for production.
*   `npm run preview`: Previews the production build locally.
*   `npm run lint`: Runs ESLint to check for code quality.

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
