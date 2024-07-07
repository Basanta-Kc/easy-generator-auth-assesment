Here’s an updated `README.md` file based on your project requirements and package.json files:

---

# EasyGenerator Auth App

This project is a full-stack application implementing user authentication. It includes a front-end developed with Next.js and a back-end built with NestJS, integrated with MongoDB.

## Project Structure

```
.
├── apps
│   ├── server
│   └── client
├── package.json
└── README.md
```

## Prerequisites

- Node.js (>=14.x)
- npm (>=6.x) or pnpm (>=6.x)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <repository-directory>
```

2. Install dependencies using pnpm:

```bash
pnpm install
```

3. Navigate to the server and client directories and install dependencies:

```bash
cd apps/server
pnpm install

cd ../client
pnpm install
```

## Running the Applications

### Server (NestJS)

1. Navigate to the server directory:

```bash
cd apps/server
```

2. Start the server in development mode:

```bash
pnpm run dev
```

The server should now be running at `http://localhost:3000`.

### Client (Next.js)

1. Navigate to the client directory:

```bash
cd apps/client
```

2. Start the client application:

```bash
pnpm run dev
```

The client application should now be running at `http://localhost:3000`.

## Scripts

### Root

- `pnpm install`: Install all dependencies.
- `pnpm run dev`: Start both the server and client applications concurrently.

### Server

- `pnpm run dev`: Start the server in development mode.
- `pnpm run build`: Build the server for production.
- `pnpm run format`: Format the code using Prettier.
- `pnpm run start:prod`: Start the server in production mode.
- `pnpm run lint`: Lint the server code.
- `pnpm run test`: Run tests.
- `pnpm run test:watch`: Run tests in watch mode.
- `pnpm run test:cov`: Run tests with coverage.
- `pnpm run test:debug`: Debug tests.
- `pnpm run test:e2e`: Run end-to-end tests.

### Client

- `pnpm run dev`: Start the client application in development mode.
- `pnpm run build`: Build the client application for production.
- `pnpm run start`: Start the client application in production mode.
- `pnpm run lint`: Lint the client code.

## User Authentication Module

### Front-End

**Requirements:**

- **Sign Up Page**: 
  - Fields: email, name, password
  - Redirect to application page upon successful signup.
  - Password requirements:
    - Minimum length of 8 characters
    - Contains at least 1 letter
    - Contains at least 1 number
    - Contains at least 1 special character

- **Sign In Page**: 
  - Fields: email, password

- **Application Page**: 
  - Displays a welcome message: "Welcome to the application."

### Back-End

**Technical Stack:**

- **Framework**: NestJS
- **Database**: MongoDB
- **ORM**: Mongoose (or any other appropriate ORM)
- **Security**: Follow best practices
- **Logging**: Optional, but recommended

**API Endpoints:**

- **Sign Up**: Endpoint to create a new user.
- **Sign In**: Endpoint to authenticate a user.


## Contact

For questions or issues, please contact [Basanta Kc](mailto:devbasanta@gmail.com).

---

This `README.md` file provides a comprehensive overview of your project, including installation instructions, running the applications, and details about the user authentication module. Let me know if you need any further adjustments!