# AJAX - Asynchronous JavaScript

## What is AJAX?

- Asynchronous JavaScript and XML
- Allows communication with servers from front-end code
- Originally designed to fetch XML
- Supports many data formats: JSON, HTML, TEXT etc.
- Makes single page app (SPA) development possible.
  - Instagram, Slack, Facebook, Github...

## Why do we like it?

- Make non-blocking HTTP requests to a server.
- Request data from a server after a page has laoded.
- Receive data from a server after the page has loaded.
- Send data to the server in the background.
- Don't have to refresh the page to send data.
- Don't have to tie POSTing data to a <form> tag.

## POSTing data in a <form> without AJAX

HTML form
```html
<form action="https...." method="POST">
  <input name='say' id='say' value='hi'>
  <button>Send form<button>
</form>
```

HTTP request
```
POST / HTTP/2.0
Host: foo.com
Content-type
Content-length: 13
...
```

## Definitions

**Synchronous code** is completed before the next line of code is executed. Synchronous code is **blocking**.

**Asynchronous code** schedules work to be done later, once some work is complete elsewhere. Async code is **non-blocking**.

JavaScript is single-threaded - how can it manage asynchronous behaviour? (The event loop - more on this tomorrow).

## The Problem with HTTP

Standard HTTP requests are blocking (**synchronous**).

That means that a HTTP request forces the browser to wait until the server returns a response.

This scenario causes a perceived "slowness" to the load time of web pages (which is particularly noticeable on mobile devices.)

## An example

Suppose I'm building a facebook clone with a newsfeed. I'm going to need to make HTTP requests to grab content to populate a user's feed.

Blocking would delay the effects of button clicking, scrolling, typing, window resizing, and more during a HTTP request.
All of these would en up happening after the HTTP response.

## A solution with AJAX

- AJAX uses JavaScript to make HTTP requests to the server.
- JavaScript schedules code to execute once the request has been completed, allowing downstream code to execute.
- Provides the basis for creating Single Page Apps.

- Solutions include using: Callbacks, promises, async await.

## Example

```JavaScript
// use jQuery's GET request for JSON data
$.getJSON('http://myserver.com/friends?u=2681', function(data) {
  console.log('here is my data:' data);
});

// do other stuff while waiting for the response
```

## Considerations with SPAs

Start to think about how the normal user experience changes when working in single page apps.

Can you name a few things that have to be addressed?
- History
- Client State
- Visual feedback during loading

## XMLHttpRequest

At the core of an AJAX request, is the XMLHttpRequest object. This object enables 
you to make an HTTP request, and then respond to it at a later time using a callback function.

### XMLHttpRequest GET (Send)
You can use the request header to set teh content-type.
```JavaScript
const xhttp = new XMLHttpRequest();
xhttp.open("POST", "ajax_test.asp", true);
xhttp.setRequestHeader("Content-type", "urlencoded");
xhttp.send("fname=Hentry&lname=Ford");
```

### Handle the response with a callback

To complete the call to the server, you'll assign a callback function to the onreadystatechange event. The onreadystatechange event is called five times, as the state changes from:

0 = uninitialized - xhr created
1 = loading - .open() has been called
2 = loaded - .send() has been called
3 = interactive data received but not finished
4 = complete request finished

```JavaScript
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = () => {
  if (xhttp.readyState === 4 && xhttp.status === 200) {
    document.getElementById('demo').innerHTML = xhttp.responseText;
  }
};
xhttp.open('GET', 'https://example.com/?sortBy=name', true);
xhttp.send();
```

The onreadystatechange event handler should do the following:

1. Check the readyState for the value 4 (complete).
2. Check the response status for value 200
3. ...

## HTTP Basics: GET vs Post

GET requests are for retrieving data.
Post are to send.

User POST when:
- You need to update a database.
- You need to send a large amount of data (no input).
- You need to send user input.

### XMLHttpRequest POST

```JavaScript
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = () => {
  if (xhttp.readyState === 4 && xhttp.status === 200) {
    console.log(JSON.parse(xhttp.responseText));
  }
};
xhttp.open('POST', 'https...', true);
xhttp.setRequestHeader('Content-type', 'application/json');
xhttp.send(JSON.stringify({ fname: "Samantha", lname: "Salley" }));
```
## JQuery

```JavaScript
// Syntax
// $.get(URL, data, function(data,status,xhr), dataType)
$.get(
  // url
  'https://example.com/',
  // data -> careful - in jQuery if you try to include data in the request it will append it to the URL
  {},
  // response
  function (data, status, xhr) => {
    if (status = "success") {
      $('#demo').innerHTML = data;
    }
  },
  // response data type
  "text"
);

$.post(
  // url
  'https://...',
  // data to send
  { fname: 'shane', lname: 'taylor', pw: 'passw0rd' },
  // response
  function (data, status, xhr) {
    if (status === 'success') {
      console.log(JSON.parse(data));
    }
  },
  // response data type
  "json"
);

// Or, we can use the generic $.ajax method
$.ajax({
  method: "POST",
  url: 'https://example.com/',
  data: { fname: 'shane', lname: 'taylor', pw: 'passw0rd' },
})
  .done((data) => {
    console.log(JSON.parse(data));
  });
```

## Fetch

```JavaScript
// GET request using fetch
fetch('https://example.com')
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
  });

// POST request using fetch
fetch('https://example.com', {
  method: 'POST',
  body: JSON.stringify({ fname: "shane", lname: "taylor" })
})
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
  })
```

## Summary

- Use AJAX to create non-blocking HTTP calls to the server.
- User AJAX to create efficient SPAs.
- User the XMLHttpRequest object, jQuery's ajax method, or fetch, to perform AJAX calls to the server.

### Questions

What is XML? Is it still in common usage?

Why is slowness particularly noticeable devices?

Why do the slides say 'an HTTP' request.

Is XMLHttpRequest being used under the hood in AJAX?

What is fetch using under the hood?