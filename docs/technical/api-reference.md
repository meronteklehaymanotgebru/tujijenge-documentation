 API Reference

## Base URL
- **Production**: `https://tujijenge.herokuapp.com`
- **Development**: `http://localhost:8000`

## Authentication
All endpoints require authentication using token-based access. Include the token in the `Authorization` header as follows:
- **Header**: `Authorization: Token <token>`
- **Example**: `Authorization: Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...`

## Error Codes
| HTTP Status | Error Code | Description |
|-------------|------------|-------------|
| 400 | BAD_REQUEST | Invalid input data |
| 401 | UNAUTHORIZED | Authentication failed |
| 403 | FORBIDDEN | Insufficient permissions |
| 404 | NOT_FOUND | Resource not found |
| 500 | INTERNAL_SERVER_ERROR | Server error |

**Example Error Response**:

```json
{
  "error_code": "BAD_REQUEST",
  "message": "Invalid input data"
}

EndpointsAuthenticationMama Mboga LoginPOST /users/login/
Description: Authenticates a Mama Mboga user using phone number and PIN.


Request Body:
```json

{
  "phone_number": "254712345678",
  "pin": "1234",
  "user_type": "mamamboga"
}

Response (200):
```json

{
  "status": "success",
  "data": {
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
  }
}

Error Response (401):
```json

{
  "error_code": "UNAUTHORIZED",
  "message": "Invalid PIN"
}

Stakeholder LoginPOST /users/login/
Description: Authenticates a stakeholder user using email and password.


Request Body:
```json

{
  "user_type": "stakeholder",
  "stakeholder_email": "gain@example.com",
  "password_hash": "password123"
}

Response (200):
```json

{
  "status": "success",
  "data": {
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
    "role": "trainer",
    "user": {
      "id": 1,
      "first_name": "John",
      "last_name": "Doe",
      "email": "gain@example.com"
    }
  }
}

Error Response (401):
```json

{
  "error_code": "UNAUTHORIZED",
  "message": "Invalid email or password"
}

RegisterPOST /users/register/
Description: Registers a new Mama Mboga or stakeholder user.


Request Body (Mama Mboga):
```json

{
  "user_type": "mamamboga",
  "first_name": "Jane",
  "last_name": "Doe",
  "phone_number": "254712345678",
  "pin": "1234"
}

Request Body (Stakeholder):
```json

{
  "user_type": "stakeholder",
  "first_name": "John",
  "last_name": "Doe",
  "stakeholder_email": "john@example.com",
  "password_hash": "password123",
  "role": "trainer"
}

Response (201):
```json

{
  "status": "success",
  "data": {
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
  }
}

Error Response (400):
```json

{
  "error_code": "BAD_REQUEST",
  "message": "Phone number already exists"
}

LogoutPOST /users/logout/
Description: Logs out the authenticated user, invalidating the token.
Headers:Authorization: Token <token>

Response (200):
```json

{
  "status": "success",
  "message": "Logged out successfully"
}

Error Response (401):
```json

{
  "error_code": "UNAUTHORIZED",
  "message": "Invalid token"
}

UsersList UsersGET /users/
Description: Retrieves a list of users.
Headers:Authorization: Token <token>

Response (200):
```json

{
  "status": "success",
  "data": [
    {
      "id": 1,
      "first_name": "Jane",
      "last_name": "Doe",
      "phone_number": "254712345678",
      "latitude": -1.2921,
      "longitude": 36.8219,
      "address": "Nairobi, Kenya",
      "is_active": true,
      "certified_status": "verified",
      "created_at": "2023-12-01T10:00:00Z",
      "updated_at": "2023-12-01T10:00:00Z"
    }
  ]
}

Error Response (403):
```json

{
  "error_code": "FORBIDDEN",
  "message": "Insufficient permissions"
}

Update LocationPOST /users/update-location/
Description: Updates the location of the authenticated user.
Headers:Authorization: Token <token>
Content-Type: application/
```json

Request Body:
```json

{
  "id": 1,
  "latitude": -1.2921,
  "longitude": 36.8219
}

Response (200):
```json

{
  "status": "success",
  "data": {
    "address": "Nairobi, Kenya"
  }
}

Error Response (400):
```json

{
  "error_code": "BAD_REQUEST",
  "message": "Invalid latitude or longitude"
}

Communities NearbyGET /users/communities-nearby/
Description: Retrieves communities near the specified location.
Headers:Authorization: Token <token>

Query Parameters:latitude: Float (e.g., -1.2921)
longitude: Float (e.g., 36.8219)

Response (200):
```json

{
  "status": "success",
  "data": [
    {
      "community_id": 1,
      "name": "Community A",
      "description": "A community for Mama Mbogas",
      "latitude": -1.2921,
      "longitude": 36.8219
    }
  ]
}

Error Response (400):
```json

{
  "error_code": "BAD_REQUEST",
  "message": "Missing latitude or longitude"
}

Stock ManagementList StockGET /stocks/
Description: Retrieves a list of stock items.
Headers:Authorization: Token <token>

Response (200):
```json

{
  "status": "success",
  "data": [
    {
      "stock_id": 1,
      "mamamboga": 1,
      "price": 50.00,
      "quantity": 10.5,
      "expiration_date": "2023-12-31T23:59:59Z",
      "last_updated": "2023-12-01T10:00:00Z",
      "created_at": "2023-12-01T10:00:00Z"
    }
  ]
}

Error Response (403):
```json

{
  "error_code": "FORBIDDEN",
  "message": "Insufficient permissions"
}

Add StockPOST /stocks/
Description: Adds a new stock item.
Headers:Authorization: Token <token>
Content-Type: application/
```json

Request Body:
```json

{
  "mamamboga": 1,
  "price": 50.00,
  "quantity": 10.5,
  "expiration_date": "2023-12-31T23:59:59Z"
}

Response (201):
```json

{
  "status": "success",
  "data": {
    "stock_id": 1,
    "mamamboga": 1,
    "price": 50.00,
    "quantity": 10.5,
    "expiration_date": "2023-12-31T23:59:59Z",
    "last_updated": "2023-12-01T10:00:00Z",
    "created_at": "2023-12-01T10:00:00Z"
  }
}

Error Response (400):
```json

{
  "error_code": "BAD_REQUEST",
  "message": "Invalid quantity"
}

OrdersList OrdersGET /orders/
Description: Retrieves a list of orders.
Headers:Authorization: Token <token>

Response (200):
```json

{
  "status": "success",
  "data": [
    {
      "order_id": 1,
      "mamamboga": 1,
      "product": 1,
      "community": 1,
      "quantity": 5,
      "total_price": 250.00,
      "deadline_at": "2023-12-31T18:00:00Z",
      "order_date": "2023-12-01T10:00:00Z",
      "created_at": "2023-12-01T10:00:00Z"
    }
  ]
}

Error Response (403):
```json

{
  "error_code": "FORBIDDEN",
  "message": "Insufficient permissions"
}

Create OrderPOST /orders/
Description: Creates a new order.
Headers:Authorization: Token <token>
Content-Type: application/
```json

Request Body:
```json

{
  "mamamboga": 1,
  "product": 1,
  "community": 1,
  "quantity": 5,
  "total_price": 250.00,
  "deadline_at": "2023-12-31T18:00:00Z"
}

Response (201):
```json

{
  "status": "success",
  "data": {
    "order_id": 1,
    "mamamboga": 1,
    "product": 1,
    "community": 1,
    "quantity": 5,
    "total_price": 250.00,
    "deadline_at": "2023-12-31T18:00:00Z",
    "order_date": "2023-12-01T10:00:00Z",
    "created_at": "2023-12-01T10:00:00Z"
  }
}

Error Response (400):
```json

{
  "error_code": "BAD_REQUEST",
  "message": "Invalid product ID"
}

CommunitiesList CommunitiesGET /communities/
Description: Retrieves a list of communities.
Headers:Authorization: Token <token>

Response (200):
```json

{
  "status": "success",
  "data": [
    {
      "community_id": 1,
      "name": "Community A",
      "description": "A community for Mama Mbogas",
      "latitude": -1.2921,
      "longitude": 36.8219,
      "created_by": 1
    }
  ]
}

Error Response (403):
```json

{
  "error_code": "FORBIDDEN",
  "message": "Insufficient permissions"
}

Create CommunityPOST /communities/
Description: Creates a new community.
Headers:Authorization: Token <token>
Content-Type: application/
```json

Request Body:
```json

{
  "name": "Community A",
  "description": "A community for Mama Mbogas",
  "latitude": -1.2921,
  "longitude": 36.8219,
  "created_by": 1
}

Response (201):
```json

{
  "status": "success",
  "data": {
    "community_id": 1,
    "name": "Community A",
    "description": "A community for Mama Mbogas",
    "latitude": -1.2921,
    "longitude": 36.8219,
    "created_by": 1
  }
}

Error Response (400):
```json

{
  "error_code": "BAD_REQUEST",
  "message": "Name is required"
}

Training SessionsList Training SessionsGET /training-sessions/
Description: Retrieves a list of training sessions.
Headers:Authorization: Token <token>

Response (200):
```json

{
  "status": "success",
  "data": [
    {
      "session_id": 1,
      "title": "Hygiene Best Practices",
      "description": "Learn about hygiene best practices",
      "location": "Nairobi",
      "registered": 20,
      "start_date": "2023-12-15T09:00:00Z",
      "end_date": "2023-12-15T12:00:00Z",
      "is_cancelled": false
    }
  ]
}

Error Response (403):
```json

{
  "error_code": "FORBIDDEN",
  "message": "Insufficient permissions"
}

Create Training SessionPOST /training-sessions/
Description: Creates a new training session.
Headers:Authorization: Token <token>
Content-Type: application/
```json

Request Body:
```json

{
  "title": "Hygiene Best Practices",
  "description": "Learn about hygiene best practices",
  "location": "Nairobi",
  "start_date": "2023-12-15T09:00:00Z",
  "end_date": "2023-12-15T12:00:00Z"
}

Response (201):
```json

{
  "status": "success",
  "data": {
    "session_id": 1,
    "title": "Hygiene Best Practices",
    "description": "Learn about hygiene best practices",
    "location": "Nairobi",
    "registered": 0,
    "start_date": "2023-12-15T09:00:00Z",
    "end_date": "2023-12-15T12:00:00Z",
    "is_cancelled": false
  }
}

Error Response (400):
```json

{
  "error_code": "BAD_REQUEST",
  "message": "Invalid date format"
}

Training RegistrationsList Training RegistrationsGET /training-registrations/
Description: Retrieves a list of training registrations.
Headers:Authorization: Token <token>

Response (200):
```json

{
  "status": "success",
  "data": [
    {
      "registration_id": 1,
      "session": 1,
      "community": 1,
      "mamamboga": 1,
      "registration_date": "2023-12-01T10:00:00Z"
    }
  ]
}

Error Response (403):
```json

{
  "error_code": "FORBIDDEN",
  "message": "Insufficient permissions"
}

Register for TrainingPOST /training-registrations/
Description: Registers a user for a training session.
Headers:Authorization: Token <token>
Content-Type: application/
```json

Request Body:
```json

{
  "session": 1,
  "community": 1,
  "mamamboga": 1
}

Response (201):
```json

{
  "status": "success",
  "data": {
    "registration_id": 1,
    "session": 1,
    "community": 1,
    "mamamboga": 1,
    "registration_date": "2023-12-01T10:00:00Z"
  }
}

Error Response (400):
```json

{
  "error_code": "BAD_REQUEST",
  "message": "Session ID is invalid"
}

ProductsList ProductsGET /products/
Description: Retrieves a list of products.
Headers:Authorization: Token <token>

Response (200):
```json

{
  "status": "success",
  "data": [
    {
      "product_id": 1,
      "product_name": "Tomatoes",
      "unit": "kg",
      "category": "VEG",
      "description": "Fresh tomatoes",
      "product_price": 50.00,
      "created_at": "2023-12-01T10:00:00Z"
    }
  ]
}

Error Response (403):
```json

{
  "error_code": "FORBIDDEN",
  "message": "Insufficient permissions"
}

Cart ManagementList CartsGET /carts/
Description: Retrieves a list of carts. Note: session_id is reserved for future use and currently returns null.
Headers:Authorization: Token <token>

Response (200):
```json

{
  "status": "success",
  "data": [
    {
      "id": 1,
      "mamamboga": 1,
      "session_id": null,
      "created_at": "2023-12-01T10:00:00Z",
      "updated_at": "2023-12-01T10:00:00Z"
    }
  ]
}

Error Response (403):
```json

{
  "error_code": "FORBIDDEN",
  "message": "Insufficient permissions"
}

List Cart ItemsGET /cart-items/
Description: Retrieves a list of items in carts.
Headers:Authorization: Token <token>

Response (200):
```json

{
  "status": "success",
  "data": [
    {
      "id": 1,
      "cart": 1,
      "product": 1,
      "quantity": 5
    }
  ]
}

Error Response (403):
```json

{
  "error_code": "FORBIDDEN",
  "message": "Insufficient permissions"
}

Payment ProcessingInitiate M-Pesa PaymentPOST /daraja/stk-push/
Description: Initiates an M-Pesa STK push payment.
Headers:Authorization: Token <token>
Content-Type: application/
```json

Request Body:
```json

{
  "phone_number": "254712345678",
  "amount": 250.00,
  "cart_item": [
    {
      "product_id": 1,
      "quantity": 5
    }
  ],
  "account_reference": "ORDER123",
  "transaction_desc": "Payment for order"
}

Response (200):
```json

{
  "status": "success",
  "data": {
    "MerchantRequestID": "123456",
    "CheckoutRequestID": "ws_CO_123456",
    "ResponseCode": "0",
    "ResponseDescription": "Success. Request accepted for processing",
    "CustomerMessage": "Success. Request accepted for processing"
  }
}

Error Response (400):
```json

{
  "error_code": "BAD_REQUEST",
  "message": "Invalid phone number"
}

WebhooksM-Pesa Payment CallbackPOST /daraja/callback/
Description: Receives payment confirmation from M-Pesa.
Headers:Authorization: Token <token>
Content-Type: application/
```json

Request Body:
```json

{
  "Body": {
    "stkCallback": {
      "MerchantRequestID": "123456",
      "CheckoutRequestID": "ws_CO_123456",
      "ResultCode": 0,
      "ResultDesc": "The service request is processed successfully.",
      "CallbackMetadata": {
        "Item": [
          {
            "Name": "Amount",
            "Value": 250.00
          },
          {
            "Name": "MpesaReceiptNumber",
            "Value": "ABC123456"
          }
        ]
      }
    }
  }
}

Response (200):
```json

{
  "status": "success",
  "data": {
    "ResultCode": 0,
    "ResultDesc": "Accepted"
  }
}

Error Response (400):
```json

{
  "error_code": "BAD_REQUEST",
  "message": "Invalid callback data"
}
```
