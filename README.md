# Assignment 09: Update and Delete Users

A simple REST API built using Node.js, Express.js, MongoDB, and Mongoose. This project demonstrates how to retrieve, create, update, and delete user records using API endpoints.

##  Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

##  Project Structure

```text
Project/
├── server.js
├── schema/
│   └── userSchema.js
├── model/
│   └── userModel.js
├── router/
│   └── userRouter.js
├── .env
├── .gitignore
└── package.json
```

##  Installation & Setup

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   ```

2. Navigate to the project folder:

   ```bash
   cd Project
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory:

   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```

5. Start the server:

   ```bash
   node server.js
   ```

##  API Endpoints

Base URL: `http://localhost:5000/api/users`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/users` | Create a user |
| GET | `/api/users` | Retrieve all users |
| PATCH | `/api/users/:id` | Update a user |
| DELETE | `/api/users/:id` | Delete a user |

##  Testing

The APIs were tested using Thunder Client in Visual Studio Code.

- Create a user using POST.
- Retrieve users using GET.
- Update user details using PATCH.
- Delete a user using DELETE.
- Verify the changes using GET.

##  Error Handling

- Invalid user ID
- User not found
- Invalid or empty request data
- Database or server errors

##  Learning Outcomes

- Understanding REST API methods
- Using Express.js routers
- Connecting MongoDB with Mongoose
- Performing update and delete operations
- Testing APIs using Thunder Client

##  Author

**Pawan Mishra**

B.Tech CSE Student

---

⭐ Built as part of a Node.js and Backend Development assignment.
