# URL Shortener API

A simple RESTful URL Shortener API built using **Node.js**, **Express.js**, and **MongoDB**. It generates short URLs from long URLs and redirects users while tracking click counts.

## Features

- Shorten long URLs
- Redirect using short URLs
- URL validation
- Duplicate URL detection
- Click tracking
- RESTful API design
- MVC architecture

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Validator
- Shortid

## API Endpoints

### Create Short URL

```http
POST /shorten
```

**Request**

```json
{
  "url": "https://example.com"
}
```

**Response**

```json
{
  "shortUrl": "http://localhost:3000/abc123"
}
```

### Redirect URL

```http
GET /:shortCode
```

Redirects the user to the original URL and increments the click count.

## Project Structure

```
config/
controllers/
models/
routes/
app.js
```

## Installation

```bash
git clone <repository-url>
cd url-shortener
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:3000
PORT=3000
```

Run the server:

```bash
npm start
```

## Author

**Sonakshi Sutradhar**
