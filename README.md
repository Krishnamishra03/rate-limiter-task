Rate Limiter API

📌 Description

This project implements a simple backend API with rate limiting based on user ID and IP address.

🚀 API Endpoint

GET /data

⚙️ Features

- User-based rate limit: 5 requests per minute
- IP-based rate limit: 20 requests per minute
- Both limits are checked together
- Returns proper error messages when limits are exceeded

🛠️ Tech Stack

- Node.js
- Express.js

▶️ How to Run

1. Install dependencies:
   npm install

2. Start server:
   node src/index.js

3. Test using Postman:
   
   - URL: http://localhost:3000/data
   - Header: userId: 123

📌 Notes

- Uses in-memory storage (can be replaced with Redis in production)
