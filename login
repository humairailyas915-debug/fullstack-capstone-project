curl -X POST http://localhost:3060/api/auth/login -H "Content-Type: application/json" -d "{\"email\":\"test@example.com\",\"password\":\"password123\"}"

{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...","email":"test@example.com"}
