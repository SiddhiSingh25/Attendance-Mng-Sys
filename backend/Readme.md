# User Registration Endpoint

## Endpoint
`POST /users/register`

## Description
This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns an authentication token along with the user details.

## Request Body
The request body should be a JSON object with the following properties:

- `fullName`: An object containing:
  - `firstName` (string, required, minimum length: 3)
  - `lastName` (string, optional, minimum length: 3)
- `email` (string, required, must be a valid email, minimum length: 5)
- `password` (string, required, minimum length: 4)

Example:
```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Responses

### Success
- **Status Code**: `201 Created`
- **Response Body**:
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullName": {
        "firstName": "John",
        "lastName": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

### Validation Errors
- **Status Code**: `400 Bad Request`
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First name must be at least 3 character long",
        "param": "fullName.firstName",
        "location": "body"
      },
      {
        "msg": "Password must be at least 4 character long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

### Server Errors
- **Status Code**: `500 Internal Server Error`
- **Response Body**:
  ```json
  {
    "message": "Internal Server Error"
  }
  ```