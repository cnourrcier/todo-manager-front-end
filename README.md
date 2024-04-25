# Todo Manager Front End

This repository contains the front end code for the todo-manager application. This app allows users to sign up, log in, and manage their todos through a user-friendly interface.

## Features

- User authentication: Users can sign up for a new account or log in to an existing account.
- Dashboard: Once logged in, users can access their dashboard to view and manage their todos.
- Responsive Design: The application is designed to work seamlessly on various devices and screen sizes.

## Tech Stack

- React: Front end framework for building user interfaces.
- React Router: Library for routing in React applications.
- Ant Design: UI library for React components.
- Axios: Promise-based HTTP client for making requests to the backend API.

## Getting Started

To get started with the Todo Manager front end, follow these steps:

1. Clone this repository to your local machine:
```
git clone https://github.com/cnourrcier/todo-manager-front-end.git
```

2. Clone the backend repository to your local machine:
```
git clone https://github.com/cnourrcier/todo-manager-back-end.git
```

3. Install dependencies for both front end and back end:

### Front end
```
cd todo-manager-front-end
npm install
```

### Back End
```
cd todo-manager-back-end
npm install
```

4. Start the development servers:

### For back end (ensure back end server is running before attempting to sign up or log in)
```
cd todo-manager-back-end
npm run dev
```

### For front end
```
cd todo-manager-front-end
npm run dev
```

5. Open <URL_provided_by_Vite_in_terminal>/api/users/dashboard

6. You can now sign up for a new account or log in to an existing account to use the Todo Manager application.

## Folder Structure

todo-manager-front-end/
├── public/
├── src/
│ ├── Auth/
│ │ ├── Signup.jsx
│ │ └── Login.jsx
│ ├── contexts/
│ │ └── AuthContext.jsx
│ ├── hooks/
│ │ ├── useSignup.jsx
│ │ └── useLogin.jsx
│ ├── pages/
│ │ └── Dashboard.jsx
│ ├── assets/ # (This folder contains images used in the application)
│ ├── App.css
│ ├── App.jsx
│ └── index.js
├── .gitignore
├── package.json
└── README.md

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
