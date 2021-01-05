# Client Sever

Client (FE) <-> Server (BE) <-> Database (BE)
            ^
            |
             -> APIs (BE) (&& possibly also FE in terms of you interact with it on the FE)

## Stack Overlap

- Client
  - HTML5
  - CSS3
  - JavaScript
- Servers
  - NodeJS
  - PHP
  - Python
  - Ruby
- Databases
  - MongoDB
  - MySQL
  - SQL
- APIs
  - Facebook
  - Spotify
  - Amazon

## What is Full Stack Development

A full stack web developer is responsible for both client-side and server-side tasks, delivering end-to-end solutions.

Full stack developers work with frontend UX design, backend server logic, databases and web services.

Should mobile apps be included? Usually not for a full-stack developer. But it can be a cherry on top.

## What is a Client?

A client is any computer that can send a HTTP request.

Usually a web browser, however it could be the command line, or any desktop or mobile app that connects to the network.

## Frontend Content & Layout

Web applications are structured using HTML and CSS.

- HTML
  - A markup code that defines the structure of a web page.
- CSS
  - Defines how the webpage looks.

## Frontend Logic

Web applications are controlled using JavaScript. JavaScript is a runtime language used to add interactivity and application control to your app.

For example, if you click on a button, you can respond to it using JavaScript, and perform an action in that timing.

## Backend

Anything that happens remotely on your services, or elsewhere on the cloud, is considered to be backend development.

### What is a server?

A server is any computer that can accept and respond to an HTTP request.

- What do servers do?
  - Servers deliver content.
  - Servers connect to databases.
  - Servers connect to web APIs.
  - Servers provide central business logic.

### Databases

Commonly the database is located on another remote computer.

- What does a database do?
  - The database stores data and the state of the app. (Usually, the server handles business logic, while state and any other data is stored in the database.)

## Network Services

Your application can connect to other applications on the web using web APIs (Application Programming Interface).

Web APIs also exist on external servers.
- Facebook
- Twitter
- Amazon
- So on...

## HTTP 

Hypertext Transfer Protocol.

- Hypertext is structured text that uses logical links (hyperlinks) between other nodes containing text.
- Client initiates the conversation (request) and the server replies (response).

Web Client - POST /login?u=foo&p=bar -> Web Server
Web Client

### Request & Response

Method
- GET
- POST
- PUT
- DELETE

URI
- http://www.ebay.com

Headers
- CORS
- User-Agent
- Cookies
- etc.. (meta data about the data)
```
Accept:           text/html,
Accept-Language:  en-US,
User-Agent:       Chrome 46.0.2,
Cookie:           8tD%D77&TOf...
```

### POST Request

METHOD:
- POST
URI
- http://www.ebay.com
HEADERS
- Accept:           text/html,
- Accept-Language:  en-US
BODY
- id: 001, quantity: 2, etc.

### Request Method / verb

The HTTP request method is used to choose how to route the request.
- GET
- POST
- PUT
- DELETE

### Parts of a HTTP Response

STATUS -> see [http cats](https://http.cat/)
- 200 OK
  - 200-299 OK
  - 300-399 additional action
  - 400-499 client error
  - 500-599 server error

HEADERS
```
Content-Type:       text/html
Content-Language:   en-US,
Date:               Thu, 10 Dec 2015 22:48:29 GMT,
Set-Cookie          8tD%d77&TOf...
```

BODY
```html
<html>
  <head></head>
  <body>
    <h1></h1>
  </body>
</html>
```

## Keep Requests to a Minimum

Loading Resources.
1. The requested URL loads.
2. Then linked resources load.
  a. CSS, HTML, JavaScript.

## The problem

Organization.

1. It should be semantic and intuitive.
2. It should be amendable to optimization.
3. It should be scalable.

### The solution

It's a way to structure and visualize you application:

1. REST interacts with data as URLs and HTTP verbs.
2. REST is stateless - client state is not stored on the server.
3. REST is cacheable - responses can be reused.

REST has been the dominant pattern for over a decade.

## Client Handles Application State

Visibility: Every request contains all context necessary to understand it. therefor, looking at a single request is sufficient to visualize the interaction.

Reliability: Since a request stands on its own, failure of one r

Scalable:

....

## RESTful Routes

RESTful routes are designed to be intuitive. Consider the following:

GET /dogs         get a list of dogs
POST /dogs        create a new dog
GET /dogs/17      get dog with id 17
GET /dogs/fido    get dog with username fido
PUT /dogs/17      edit info on dog 17
DELETE /dogs/17   delete dog 17

## What is the Internet?

The internet is a network of computers.

### Routers

The path that HTTP requests take is often not linear. It's routed through many directions.

### IP Addresses

All clients and servers have an Internet Protocol (IP) address.
- IP addresses are composed of 4 or 6 period separated numbers ranging from 0 to 255.
- IP addresses are required for routers and internet servecies to work.

Demo: Browse to an IP Address

[google via ip:](http://172.217.4.132) -> http://172.217.4.132

### DNS

In order to convert IP addresses into humanly readable domain names, we need something called the Domain Name System (DNS).

## What happens when you type a URL in the browser and press enter?

1. The browser checks the cache for a DNS record to find the corresponding IP address of the URL.
2. If the request URL is not in the cache, ISP'S DNS server initiates a DNS query to find the IP address of the server of that URL.
3. The browser initiates the connection to the server.
4. Client/Browser sends an HTTP request.

## Summary

- HTTP facilitates communication on the internet.
- The internet uses routers, IP addresses and DNS servers to communicate from computer to computer.
- Requests and responses:
  - Clients makes requests.
  - Servers reply with responses.

### Questions

Are all servers APIs?

The things that power an API is a server. However all servers don't run APIs.