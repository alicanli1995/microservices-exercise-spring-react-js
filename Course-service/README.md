# POST COURSES

POST /courses HTTP/1.1
Host: localhost:3333
Authorization: Basic cmFuZG9tU2VjdXJlS2V5VXNlcm5hbWUhOnJhbmRvbVNlY3VyZUtleVBhc3N3b3JkIQ==
Content-Type: application/json
Cookie: JSESSIONID=61D5923D708C7C78ED6E764C249CBB01
Content-Length: 85

{
"title":"test - title",
"subtitle": "test-subtitle",
"price": 999
}

# GET ALL COURSES

GET /courses HTTP/1.1
Host: localhost:3333
Authorization: Basic cmFuZG9tU2VjdXJlS2V5VXNlcm5hbWUhOnJhbmRvbVNlY3VyZUtleVBhc3N3b3JkIQ==
Cookie: JSESSIONID=61D5923D708C7C78ED6E764C249CBB01

