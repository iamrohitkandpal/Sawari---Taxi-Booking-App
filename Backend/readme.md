# **Sawaari Backend API Documentation**

## **Endpoints**

### **POST** `/users/register`

#### **Description**
This endpoint allows a new user to register for the Sawaari platform.

---

#### **Request Body**
The request body must be a JSON object containing the following fields:

- **`fullname`** (object, required): Contains the user's full name.
  - **`firstname`** (string, required): The user's first name.  
    _Validation_: Must be at least 3 characters long.
  - **`lastname`** (string, optional): The user's last name.  
    _Validation_: Must be at least 3 characters long.

- **`email`** (string, required): The user's email address.  
  _Validation_: Must be a valid email format.

- **`password`** (string, required): The user's account password.  
  _Validation_: Must be at least 8 characters long.

---

#### **Example Request Body**
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

---

#### **Responses**

##### **Success Response**
- **Status Code**: `201 Created`  
- **Body**:
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

##### **Validation Error Response**
- **Status Code**: `400 Bad Request`  
- **Body**:
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
        "msg": "Password must be at least 8 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

##### **Internal Server Error**
- **Status Code**: `500 Internal Server Error`  
- **Body**:
  ```json
  {
    "message": "Internal Server Error"
  }
  ```

---

#### **Validation Rules**
| Field                  | Type     | Required | Validation                          |
|------------------------|----------|----------|--------------------------------------|
| `fullname.firstname`   | string   | Yes      | At least 3 characters               |
| `fullname.lastname`    | string   | No       | At least 3 characters               |
| `email`                | string   | Yes      | Must be a valid email format        |
| `password`             | string   | Yes      | At least 8 characters               |

---

#### **Notes**
- Ensure the email provided is unique and not already registered.
- Passwords should be hashed before storage for security.
- A JWT token is returned upon successful registration for authentication in subsequent requests.

### **POST** `/users/login`

#### **Description**
This endpoint allows a user to log in to the Sawaari platform.

---

#### **Request Body**
The request body must be a JSON object containing the following fields:

- **`email`** (string, required): The user's email address.  
  _Validation_: Must be a valid email format.

- **`password`** (string, required): The user's account password.  
  _Validation_: Must be at least 6 characters long.

---

#### **Example Request Body**
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

---

#### **Responses**

##### **Success Response**
- **Status Code**: `200 OK`  
- **Body**:
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

##### **Validation Error Response**
- **Status Code**: `400 Bad Request`  
- **Body**:
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

##### **Internal Server Error**
- **Status Code**: `500 Internal Server Error`  
- **Body**:
  ```json
  {
    "message": "Internal Server Error"
  }
  ```

---

#### **Validation Rules**
| Field                  | Type     | Required | Validation                          |
|------------------------|----------|----------|--------------------------------------|
| `email`                | string   | Yes      | Must be a valid email format        |
| `password`             | string   | Yes      | At least 6 characters               |

---

### **GET** `/users/profile`

#### **Description**
This endpoint allows a user to retrieve their profile information.

---

#### **Headers**
The request must include the following headers:

- **`Authorization`** (string, required): The JWT token for authentication.  
  _Format_: `Bearer <token>`

---

#### **Responses**

##### **Success Response**
- **Status Code**: `200 OK`  
- **Body**:
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

##### **Unauthorized Error Response**
- **Status Code**: `401 Unauthorized`  
- **Body**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

##### **Internal Server Error**
- **Status Code**: `500 Internal Server Error`  
- **Body**:
  ```json
  {
    "message": "Internal Server Error"
  }
  ```

---

### **POST** `/users/logout`

#### **Description**
This endpoint allows a user to log out from the Sawaari platform.

---

#### **Headers**
The request must include the following headers:

- **`Authorization`** (string, required): The JWT token for authentication.  
  _Format_: `Bearer <token>`

---

#### **Responses**

##### **Success Response**
- **Status Code**: `200 OK`  
- **Body**:
  ```json
  {
    "message": "Successfully logged out"
  }
  ```

##### **Unauthorized Error Response**
- **Status Code**: `401 Unauthorized`  
- **Body**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

##### **Internal Server Error**
- **Status Code**: `500 Internal Server Error`  
- **Body**:
  ```json
  {
    "message": "Internal Server Error"
  }
  ```

---
