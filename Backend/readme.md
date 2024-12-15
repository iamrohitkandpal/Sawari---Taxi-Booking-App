# Sawaari API Documentation

This documentation provides detailed information about the endpoints for the Sawaari platform, including routes for users and captains.

---

## User Endpoints

### **POST /users/register**
**Description:**
Allows a new user to register on the Sawaari platform.

#### **Request Body**
The request body must be a JSON object containing the following fields:

| Field               | Type   | Required | Validation                       |
|---------------------|--------|----------|-----------------------------------|
| fullname.firstname  | string | Yes      | At least 3 characters long       |
| fullname.lastname   | string | No       | At least 3 characters long       |
| email               | string | Yes      | Must be a valid email format     |
| password            | string | Yes      | At least 6 characters long       |

**Example Request Body:**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### **Responses**

- **Success Response**
  - **Status Code:** `201 Created`
  - **Body:**
    ```json
    {
      "token": "jwt_token_here",
      "user": {
        "_id": "user_id_here",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
      }
    }
    ```

- **Validation Error Response**
  - **Status Code:** `400 Bad Request`
  - **Body:**
    ```json
    {
      "errors": [
        {
          "msg": "Invalid Email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "First Name must be at least 3 characters long",
          "param": "fullname.firstname",
          "location": "body"
        },
        {
          "msg": "Password must be at least 6 characters long",
          "param": "password",
          "location": "body"
        }
      ]
    }
    ```

- **Internal Server Error**
  - **Status Code:** `500 Internal Server Error`
  - **Body:**
    ```json
    {
      "message": "Internal Server Error"
    }
    ```

#### **Notes**
- Ensure the email provided is unique and not already registered.
- Passwords should be hashed before storage for security.
- A JWT token is returned upon successful registration for authentication in subsequent requests.

---

### **POST /users/login**
**Description:**
Allows a user to log in to the Sawaari platform.

#### **Request Body**
The request body must be a JSON object containing the following fields:

| Field   | Type   | Required | Validation                       |
|---------|--------|----------|-----------------------------------|
| email   | string | Yes      | Must be a valid email format     |
| password| string | Yes      | At least 6 characters long       |

**Example Request Body:**
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### **Responses**

- **Success Response**
  - **Status Code:** `200 OK`
  - **Body:**
    ```json
    {
      "token": "jwt_token_here",
      "user": {
        "_id": "user_id_here",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
      }
    }
    ```

- **Validation Error Response**
  - **Status Code:** `400 Bad Request`
  - **Body:**
    ```json
    {
      "errors": [
        {
          "msg": "Invalid Email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "Password must be at least 6 characters long",
          "param": "password",
          "location": "body"
        }
      ]
    }
    ```

- **Internal Server Error**
  - **Status Code:** `500 Internal Server Error`
  - **Body:**
    ```json
    {
      "message": "Internal Server Error"
    }
    ```

#### **Notes**
- A JWT token is returned upon successful login for authentication in subsequent requests.

---

### **GET /users/profile**
**Description:**
Allows a user to get their profile information.

#### **Responses**

- **Success Response**
  - **Status Code:** `200 OK`
  - **Body:**
    ```json
    {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
    ```

- **Authentication Error Response**
  - **Status Code:** `401 Unauthorized`
  - **Body:**
    ```json
    {
      "message": "Unauthorized"
    }
    ```

---

### **GET /users/logout**
**Description:**
Allows a user to log out of the Sawaari platform.

#### **Responses**

- **Success Response**
  - **Status Code:** `200 OK`
  - **Body:**
    ```json
    {
      "message": "Logout Successful"
    }
    ```

---

## Captain Endpoints

### **POST /captains/register**
**Description:**
Allows a new captain to register on the Sawaari platform.

#### **Request Body**
The request body must be a JSON object containing the following fields:

| Field                   | Type   | Required | Validation                                      |
|-------------------------|--------|----------|------------------------------------------------|
| fullname.firstname      | string | Yes      | At least 3 characters long                    |
| fullname.lastname       | string | No       | At least 3 characters long                    |
| email                   | string | Yes      | Must be a valid email format                  |
| password                | string | Yes      | At least 6 characters long                    |
| vehicle.color           | string | Yes      | At least 3 characters long                    |
| vehicle.plate           | string | Yes      | At least 3 characters long                    |
| vehicle.capacity        | integer| Yes      | At least 1                                     |
| vehicle.vehicleType     | string | Yes      | Must be one of "car", "motorcycle", or "auto" |

**Example Request Body:**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### **Responses**

- **Success Response**
  - **Status Code:** `201 Created`
  - **Body:**
    ```json
    {
      "token": "jwt_token_here",
      "captain": {
        "_id": "captain_id_here",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "vehicle": {
          "color": "red",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "car"
        }
      }
    }
    ```

- **Validation Error Response**
  - **Status Code:** `400 Bad Request`
  - **Body:**
    ```json
    {
      "errors": [
        {
          "msg": "Invalid Email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "Color must be at least 3 characters long",
          "param": "vehicle.color",
          "location": "body"
        },
        {
          "msg": "Invalid Vehicle Type",
          "param": "vehicle.vehicleType",
          "location": "body"
        }
      ]
    }
    ```

- **Internal Server Error**
  - **Status Code:** `500 Internal Server Error`
  - **Body:**
    ```json
    {
      "message": "Internal Server Error"
    }
    ```

#### **Notes**
- Ensure the email provided is unique and not already registered.
- Passwords should be hashed before storage for security.
- A JWT token is returned upon successful registration for authentication in subsequent requests.

---

### **POST /captains/login**
**Description:**
Allows a captain to log in to the Sawaari platform.

#### **Request Body**
The request body must be a JSON object containing the following fields:

| Field   | Type   | Required | Validation                       |
|---------|--------|----------|-----------------------------------|
| email   | string | Yes      | Must be a valid email format     |
| password| string | Yes      | At least 6 characters long       |

**Example Request Body:**
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### **Responses**

- **Success Response**
  - **Status Code:** `200 OK`
  - **Body:**
    ```json
    {
      "token": "jwt_token_here",
      "captain": {
        "_id": "captain_id_here",
        "fullname": {
          "firstname": "John",
         
