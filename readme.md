# Average REST API

A simple REST API built with Node.js and Express.js that calculates the average of all numbers received so far.

## Prerequisites

* Node.js
* npm

## Installation

```bash

git clone https://github.com/SrujalYandagoudar/Average-Calculater.git
cd <PROJECT_DIRECTORY>
npm install

```

## Run the Server

```bash

nodemon server.js

```

The server runs at:

http://localhost:5000


## API Usage

### POST `/average`

Endpoint:


http://localhost:5000/average


Request body:

```json
{
  "reqNum": 10
}
```

Example response:

```json
{
  "message": {
    "Avrage": 10,
    "Array": [10],
    "Count": 1
  }
}
```

The API calculates the average of all numbers submitted so far.

## Using cURL

Copy and paste the following cURL command into Postman's Import → Raw text option:

```bash
curl -X POST http://localhost:5000/average -H "Content-Type: application/json" -d "{\"reqNum\":10}"
```
Postman will automatically create the request with the correct method, URL, headers, and request body.

## Using Postman

* Method: `POST`
* URL: `http://localhost:5000/average`
* Body → `raw` → `JSON`

```json
{
  "reqNum": 10
}
```


