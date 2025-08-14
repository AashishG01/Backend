# API Basics

## 1.1 What is an API?
An **Application Programming Interface (API)** is like a **waiter in a restaurant** — it takes your request (order) from the client (you), tells the kitchen (server) what to prepare, and then delivers the food (response) back to you.

### Diagram:
![API Diagram](What-is-an-API.png)

---

### Real-world Examples:
- Weather app fetching data from **OpenWeather API**
- Instagram mobile app calling Instagram’s backend API to load posts
- Payment gateways (Razorpay, Stripe)

---

## 1.2 Types of APIs
- **Public APIs** – Anyone can use them (e.g., OpenWeatherMap, GitHub API)
- **Private APIs** – Internal to a company
- **Partner APIs** – Shared between business partners

---

## 1.3 Communication Styles

| Type       | Use Case                  | Example                  |
|------------|---------------------------|--------------------------|
| REST       | Most common web APIs      | Twitter REST API         |
| GraphQL    | Client chooses data shape | GitHub GraphQL API       |
| WebSockets | Real-time updates         | WhatsApp Web             |
| gRPC       | High-performance microservices | Google Cloud APIs |

---

## 1.4 HTTP Basics

**Common Methods:**
- **GET** → Read data
- **POST** → Create data
- **PUT** → Update/replace data
- **PATCH** → Update part of data
- **DELETE** → Remove data

**Common Status Codes:**
- **200 OK** → Request successful
- **201 Created** → New resource created
- **400 Bad Request** → Client error
- **401 Unauthorized** → Authentication needed
- **404 Not Found** → Resource doesn’t exist
- **500 Internal Server Error** → Server crashed

---

## 1.5 JSON & XML
Most modern APIs use **JSON (JavaScript Object Notation)** because it’s lightweight and easy to parse.

**Example JSON:**
```json
{
  "name": "Aashish",
  "role": "Student",
  "skills": ["JavaScript", "Python", "React"]
}
