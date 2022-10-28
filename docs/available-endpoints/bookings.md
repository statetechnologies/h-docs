---
sidebar_position: 3
title: Bookings & Hotels
description: Available Hotel and Booking endpoints
---

### `/bookings/`

`Requires auth`

Get details of bookings for a specific user

**_Allowed Methods_**

- GET

**_Response -> HTTP 200 OK_**

```json
[
  {
    "id": 1,
    "hotel": {
      "name": "",
      "ratings": "",
      "location": ""
    },
    "booked_date": "",
    "no_of_guests": 1
  }
]
```

### `/bookings/{id}/`

`Requires auth`

Get or Updates details of a specific booking for a specific user

**_Allowed Methods_**

- GET
- PUT
- PATCH

**_Response -> HTTP 200 OK_**

```json
{
  "id": 1,
  "hotel": {
    "name": "",
    "ratings": "",
    "location": ""
  },
  "booked_date": "",
  "no_of_guests": 1
}
```

### `/hotels/`

Get details of the available hotels

**_Allowed Methods_**

- GET

**_Query Params (Optional)_**

`search` -> it searches on the name of the hotel, returns an empty array if not hotel found

`location` -> filters hotels according to the specified location

`ratings` -> filters hotels according to their ratings

:::tip
To use `query params` you can append one or more than one queries you want for example `?location=Dodoma` or `?search=Serena&location=Tanga` respectively at the end of the endpoint so the final endpoint would look like `https://bookings.mrshanas.com/api/hotels/?search=Blue+Pearl&ratings=4.2`
:::

**_Response -> HTTP 200 OK_**

```json
[
  {
    "id": 1,
    "name": "",
    "location": "",
    "ratings": 4.5,
    "feedback": [
      {
        "comment": "",
        "user": 1
      }
    ]
  }
]
```

### `/hotels/{id}/`

Get details or updates a specific hotel

**_Allowed Methods_**

- GET
- PATCH
- PUT

**_Response -> HTTP 200 OK_**

```json
{
  "id": 1,
  "name": "",
  "location": "",
  "ratings": 4.5,
  "feedback": [
    {
      "comment": "",
      "user": 1
    }
  ]
}
```

### `/hotels/{id}/book/`

`Requires auth`

Allows a user to book a hotel

**_Allowed Methods_**

- POST

**_Body data object_**

```json
    {
        "no_of_guest":number,
        "start_date":"date in ISO string",
        "end_date":"date in ISO string"
    }
```

**_Response -> HTTP 201 CREATED_**

```json
{
  "detail": "Hotel booked successfully"
}
```

### `/hotels/{id}/rate/`

`Requires auth`

Allows a user to rate an hotel

**_Allowed methods_**

- POST

**_Body data object_**

```json
    {
        "ratings":number
    }
```

**_Response HTTP 200 OK_**

```json
{
  "detail": "Thanks for your ratings"
}
```

### `/hotels/{id}/feedback/`

`Requires auth`

Allows an user to give feedback to the hotel

**_Allowed methods_**

- POST

**_Body data object_**

```json
{
  "comment": "Your hotel sucks"
}
```

**_Response -> HTTP 201 CREATED_**

```json
{
  "detail": "Thanks for the feedback"
}
```
