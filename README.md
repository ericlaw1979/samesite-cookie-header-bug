### SameSite header test

### Issue

`SameSite=strict` cookie is incorrectly sent on cross-origin request on Chrome

### Test

Run ngrok to the two different ports (used 4000 and 4001 in this example) and run two servers using the code in this folder:

```
ngrok http 4000
```

```
ngrok http 4001
```

```
node index.js 4000 https://4001-given-url.ngrok.io
```

```
node index.js 4001 https://4000-given-url.ngrok.io
```

Three cookies are being set on index page request: one using `SameSite=strict`, other using `SameSite=lax` and the last one does not set `SameSite` cookie header option.

![image](https://user-images.githubusercontent.com/1150553/51743798-b6c39e00-2095-11e9-9d4b-db3604371136.png)

Notes: In order to test this I decided to append the port to the cookie key, so we can check quickly from which url/port the cookie cames from.

### Results

#### Google Chrome (version 71.0.3578.98)

#### FF (version 64.0.2)

#### Safari (version 12.0.2)


### Chromium issue URL
