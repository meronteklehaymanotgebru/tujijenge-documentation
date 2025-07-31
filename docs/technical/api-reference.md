# API Reference

## Base URL
- Production: `https://tujijenge.herokuapp.com`
- Development: `http://localhost:8000`

## Authentication
All endpoints require authentication using access based tokens, Include the token in the authentication header.



## Error Codes
| HTTP Status | Error Code | Description |
|------------|------------|-------------|
| 400 | BAD_REQUEST | Invalid input data |
| 401 | UNAUTHORIZED | Authentication failed |
| 403 | FORBIDDEN | Insufficient permissions |
| 404 | NOT_FOUND | Resource not found |
| 500 | INTERNAL_SERVER_ERROR | Server error |

## Endpoints

### Authentication
#### Mama Mboga Login
- **POST** `/users/login/`
- **Request Body**:
  ```json
  {
    "phone_number": "254712345678",
    "pin": "1234"
  }