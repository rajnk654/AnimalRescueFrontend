# 🐾 Animal Rescue and Adoption – Frontend

> **Note:**  
> This project’s source code resides in the `master` branch. Switch to `master` to access the latest frontend code.

This is the frontend of the **Animal Rescue and Adoption Web Application**, built with **ReactJS** for a responsive, user-friendly interface. The platform allows adopters, rescuers, and administrators to interact seamlessly, supports Google Authentication for secure login, Google reCAPTCHA for bot protection, and integrates payment gateways for adoption fees and donations.

---

## 🚀 Features

- **Google Authentication (OAuth 2.0):** Quick and secure login.
- **Google reCAPTCHA v2/v3:** Bot prevention.
- **Role-Based Access UI:** Adopters, rescuers, admins.
- **Advanced Pet Search & Filters.**
- **Real-Time Adoption Application Tracking.**
- **Foster Care Management Interface.**
- **Secure Payment Gateway:** For adoption fees & donations.
- **Mobile-Responsive Design.**

---

## 🛠 Tech Stack

- **Frontend:** ReactJS (Hooks & Context API)
- **Routing:** React Router DOM
- **State Management:** Context API / Redux (if used)
- **Authentication:** Google OAuth 2.0
- **Bot Protection:** Google reCAPTCHA v2/v3
- **Payment Gateway:** Stripe / Razorpay
- **Styling:** CSS / Bootstrap / Tailwind CSS
- **HTTP Requests:** Axios / Fetch API

---

## 📂 Project Structure

```
frontend/
 ├── public/                # Static assets
 ├── src/
 │    ├── components/       # Reusable UI components
 │    ├── pages/            # Pages (routes)
 │    ├── services/         # API calls, utilities
 │    ├── context/          # Context API providers
 │    ├── App.js            # Root app component
 │    └── index.js          # Entry point
 ├── package.json
 └── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Prerequisites

- Node.js v16+
- [Yarn](https://classic.yarnpkg.com/en/docs/install) package manager
- Git

### 2️⃣ Clone the Repository

```bash
git clone <your-repository-url>
cd frontend
git checkout master
```

### 3️⃣ Install Dependencies

```bash
yarn install
```

### 4️⃣ Configure Environment Variables

Create a `.env` file in the `frontend` root:

```env
REACT_APP_API_BASE_URL=http://localhost:8080
REACT_APP_PAYMENT_KEY=your_payment_gateway_public_key
REACT_APP_GOOGLE_CLIENT_ID=your_google_oauth_client_id
REACT_APP_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

### 5️⃣ Run the Application

```bash
yarn start
```

The app will run at:  
[http://localhost:3000](http://localhost:3000)

---

## 🔑 Google Authentication Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Create/select a project.
3. Enable the **OAuth consent screen** and configure:
   - App Name
   - Support Email
   - Authorized domains (e.g., `localhost`, your deployed domain)
4. Create **OAuth 2.0 Client ID** (Application type: Web application).
5. Add the Authorized JavaScript Origins:
    - `http://localhost:3000` (for local)
    - Your production domain (when deployed)
6. Add the Authorized Redirect URIs:
    - `http://localhost:3000` (or your production redirect endpoint)
7. Copy the generated Client ID and add it to `.env` as:
    ```env
    REACT_APP_GOOGLE_CLIENT_ID=your_google_oauth_client_id
    ```
8. Install the Google API client library:
    ```bash
    yarn add react-google-login
    ```
9. Implement the Google login button in your app using the client ID.

---

## 🛡 Google reCAPTCHA Setup

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin).
2. Select reCAPTCHA v2 (I'm not a robot) or v3 (invisible).
3. Add allowed domains (`localhost`, your production domain).
4. Register and obtain:
    - **Site Key** → add to `.env` as:
      ```env
      REACT_APP_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
      ```
    - **Secret Key** → use for backend verification.
5. Install reCAPTCHA library:
    ```bash
    yarn add react-google-recaptcha
    ```
6. Add reCAPTCHA widget to forms where user verification is required.

---

## 💳 Payment Integration Setup

1. Configure **Stripe** or **Razorpay** public key in `.env` as `REACT_APP_PAYMENT_KEY`.
2. Install the required library:
    - For **Stripe**:
      ```bash
      yarn add @stripe/stripe-js react-stripe-checkout
      ```
    - Or for **Razorpay**:
      ```bash
      yarn add razorpay
      ```
3. Implement payment initiation from frontend → send payment request to backend → backend processes securely.

---

## 🤝 Contributing

Feel free to fork the repo, make your changes, and submit pull requests! Please open issues for suggestions or bugs.

---

## 📄 License

[MIT](./LICENSE)  
This project is for educational and social good purposes.

---

## 🙋 FAQ

**Q: Backend available?**  
A: This is just the frontend. You’ll need to connect to the corresponding backend API.

**Q: How do I deploy?**  
A: Build with `yarn build` and deploy the output in the `build` folder to your preferred static hosting (Vercel, Netlify, etc).

---

**Happy Rescuing & Adopting! 🐶🐱**
