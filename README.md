# FSI_TEST

# my_bookstore
A book review web API

# Table of Contents

- [Installation](#installation)
- [Endpoints](#endpoints)
	- [Register](#register)



## Installation

```
clone the repository

create .env and paste the content of .env sample into it

run npm install
```

## Endpoints

### Register: Register a user

#### Request
`Post api/v1/auth/signup`

#### Body
{
	"firstname": "letty",
	"lastname": "letty",
	"address": "lagos",
	"phone_number": "08090890989",
	"password": "12345678"
}

####  Response
```
{
    "status": 201,
    "data": {
        "firstname": "letty",
        "lastname": "letty",
        "phone_number": "08090890989",
        "address": "lagos",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzUzOTc1NTIsImV4cCI6MTU3NTQwMTE1Mn0.gwIES_5pLDywrbZbD1Uv-tdfJvyqYUPl_ASgS5HEN9w"
    }
}

```

