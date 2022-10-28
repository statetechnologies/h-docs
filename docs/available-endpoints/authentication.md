---
sidebar_position: 2
title: Authentication
---

## **Supported endpoints**

### `/auth/register/`

Enables a user to be registered in the system

**_Accepted HTTP Methods_**

- POST

**_Body data object_**

```json
{
  "first_name": "Required",
  "last_name": "Required",
  "address": "Optional",
  "email": "Required",
  "phone_no": "Required"
}
```

**_Response -> HTTP 201 CREATED_**

```json
{
  "detail": "User created successfully"
}
```

### `/auth/token/`

Takes user credentials and returns an encrypted JWT Token Pair

**_Accepted HTTP Methods_**

- POST

**_Body data object_**

```json
{
  "email": "Required",
  "phone_number": "Optional",
  "password": "Required"
}
```

**_Response -> HTTP 200 OK_**

```json
{
  "access": "JWT Access token",
  "refresh": "JWT Refresh token"
}
```

### `/auth/token/refresh/`

Takes a refresh token and returns a new JWT Token pair

:::danger
Returns an error if the refresh token is not valid or expired
:::

**_Allowed Methods_**

- POST

**_Body data object_**

```json
{
  "refresh_token": "JWT Refresh Token"
}
```

**_Response -> HTTP 200 OK_**

```json
{
  "access": "JWT Access token",
  "refresh": "JWT Refresh token"
}
```

### `/auth/token/verify/`

Verifies a JWT Access token if its still in use and not expired

**_Allowed Methods_**

- POST

**_Body data object_**

```json
{
  "access_token": "JWT access token"
}
```

**_Response -> HTTP 200 OK_**

```json
{}
```

:::note
It returns an empty object like that if the token is valid, Don't think I forgot to put data 😂
:::

### `/auth/password/reset/`

Takes a user email and sends on OTP (One Time Password) to the user's email

:::info
The user has to have an account in the system otherwise it will return an `HTTP 404 Not Found` error
:::

**_Allowed Methods_**

- POST

**_Body data object_**

```json
{
  "email": "required"
}
```

**_Response HTTP 200 OK_**

```json
{
  "detail": "An OTP email was sent to the user"
}
```

### `/auth/password/reset/confirm/`

### `/auth/password/reset/verify`

### `/auth/social/{backend}`

Allows a user to register with a social account, for now it supports only `Google`

**_Allowed Methods_**

- POST

**_Path parameters_**

- backend = `google-oauth2` (required)

**_Body data object_**

From the frontend after the user clicks on `Sign In With Google` Button, Google will send an `access_code` which you can use to send it to the system

:::tip
For testing purposes you can visit [Google OAuth2 Playground](https://oauth2.google.com/playground) to get the `access_code` and send it to the system
:::

```json
{
  "access_code": "Required"
}
```

**_Response_**

If a user doesn't exist it will create a user and send `HTTP 201 CREATED` and `JWT Pair`

```json
{
  "detail": "User created successfully!",
  "access": "JWT Access",
  "refresh": "JWT refresh"
}
```

otherwise it will return `HTTP 200 OK` and `JWT Pair`

```json
{
  "access": "JWT Access",
  "refresh": "JWT refresh"
}
```
