# OAuth - Unit 11 Authentication

## Objectives

How to delegate authentication through third parties via OAuth.

## OAuth

- OAuth 2.0 is an authentication standard for using 3rd parties.
- The 1st party doesn't ever get the user's username and password. (possibly your username).
- Rather the user gets from e.g. Google an authorization code and that gets sent to the first-party. The 1st party will check with Google the legitimacy of the auth code.

## Authentication vs Authorization

- Authentication is the process of checking if you who you say you are.
  - log + password
- Authorization is the process of granting permission to a protected resource.
  - permission

- In OAuth, users are authenticated with Google/Facebook/Github,  while apps are authorized to access e.g. profile info.

## What is OAuth?

- A communication protocol for third-party access to other servers.
- You can use the third party api on behalf of your clients
- The scope indicates what the application is authorized to access.

## How does it work?

Your server has:
  - Client ID
  - Client Secret
  - Scope

1. Client requests access from Server.
2. They are redirected to a third party with `clientID` and `callbackURL` and `scope`.
3. 3rd party checks user credentials.
4. Client is redirected to callbackURL w/ `Authorization code`.
5. Server checks with the 3rd party that the `Authorization code` is legit, sending the `ClientID` and `Client Secret` to prove server legitimacy.
6. Code checks outs, 3rd party sends `Access token`.
7. Server sends API request w/`Access token` on behalf of the user.
8. The 3rd party sends all the resources that the server has requested (based on the permissions the user originally gave).

## Code

```JavaScript
const express = require('express');
const app = express();
const qs = require('querystring'); // assumed this is correct require statment, not totally sure.
const path = require('path');
const cookieParse = require('cookie-parser');

const PORT = 3000
const CLIENT_ID = 'asdfasdf'
const CLIENT_SECRET = 'asdfas'

app.use(cookieParser());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/github/auth', (req, res) => {
  const url = 'https://github.com/login/oauth/authorize?' +
              'scope=user&' +
              'redirect_uri=http://localhost:3000/github/callback&' +
              'clinet_id=' + CLIENT_ID;

  // built-in querystring library can be used
  // const redirectQuery = {
  //   scope: 'user',
  //   redirect_ur: 'http://localhost:3000/github/callback',
  //   client_id:  CLIENT_ID
  // }
  // const url = 'https://github.com/login/oauth/authorize?' + qs.stringify(redirectQuery)

  res.redirect(url);
});

app.get('/github/callback', (req, res) => {
  axios.post('https://github.com/login/oauth/access_token', {
    client_id: CLINET_ID,
    client_secret: CLIENT_SECRET,
    code: req.query.code,
    accept: 'application/json'
  }, {
    headers: {
      accept: 'application/json'
    }
  })
  .then((resp) => {
    const token = resp.data.access_token;

    res.cookie('token', token);

    axios.get('https://api.github.com/user', {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: 'token' + token
      },
    })
    .then((resp) => {
      res.send(resp.data);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
  })
});

app.get('/user', (req, res) => {
  const token = req,cookies.token;

  if (!token) res.redirect('/');

  console.log('making request to github');

  axios.get('https://api.github.user', {
    // assuming this part:
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: 'token' + token
    },
  })
  .then(resp => {
    res.send(resp.data);
  })
  .catch(err => {
    console.log(err);
    res.sendStatus(500);
  })
})
```

## OAuth Pros & Cons

- Nice feature for UX - minimizes bounce rate.
- Utilize other websites features (validation already fully handled).
- Rely on someone else's security and validation.
- More setup involved.
- Some users might not have/want to use other account. Users might be weary of your application using FB on their behalf.

## Summary

- OAuth is a standard for third-party API access.
- Use OAuth to log in and share services with 3rd parties.
- Uses a 2 step auth process.
- The access token grants you further access to the API.
