# Eventopia

Welcome to the Events CMS, a web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This application allows users to register for events, register through teams, mark attendance, and sign in/signup.

[](https://raw.githubusercontent.com/klientship/events_cms_frontend/main/work.png)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and authentication (signup/signin)
- Event registration
- Team registration
- Attendance marking for registered events
- Dashboard to view registered events and attendance status

## Installation

To get started with the Events CMS, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/events-cms.git`
2. Navigate to the project directory: `cd events-cms`
3. Install the dependencies:
     - Run `npm install`
     - backend code `https://github.com/klientship/events_cms_backend`
4. Configure the environment variables:
   - Create a `.env` file in the `backend` directory and define the following variables:
     ```
     PORT=<port_number>
     MONGODB_URI=<mongodb_connection_string>
     JWT_SECRET=<your_jwt_secret_key>
     ```
5. Start the application:
   - Backend:
     - From the `backend` directory, run `npm start` to start the backend server
   - Frontend:
     - From the `frontend` directory, run `npm start` to start the frontend development server
6. Open your browser and navigate to `http://localhost:3000` to access the Events CMS.

## Usage

1. Sign up or sign in using your credentials.
2. Once logged in, you will be redirected to the dashboard.
3. From the dashboard, you can:
   - View and register for available events.
   - Create a team or join an existing team.
   - Mark attendance for registered events.
   - View your registered events and attendance status.
4. Explore the various features and functionalities of the application.

## Technologies

The Events CMS is built using the following technologies:

- Backend:
  - Node.js: A JavaScript runtime for server-side development
  - Express.js: A web application framework for Node.js
  - MongoDB: A NoSQL database for storing application data
  - JWT: JSON Web Tokens for user authentication and authorization
- Frontend:
  - React.js: A JavaScript library for building user interfaces
  - Redux: A predictable state container for managing application state
  - React Router: A routing library for handling client-side navigation
  - Axios: A library for making HTTP requests from the browser
  - Bootstrap: A popular CSS framework for responsive web design

## Contributing

Contributions are welcome! If you'd like to contribute to the Events CMS, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name` or `git checkout -b bugfix/your-bug-fix`.
3. Commit your changes: `git commit -m "Add your commit message"`.
4. Push to the branch: `git push origin feature/your-feature-name` or `git push origin bugfix/your-bug-fix`.
5. Submit a pull request explaining your changes.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as per the terms of the license.
