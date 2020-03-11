# cURL

A NodeJS wrapper for transferring data with URLs [Read more…](https://curl.haxx.se/)

## Table of Contents

* [`curl.get`](#curlgeturl-string-token-string-params-object)
* [`curl.post`](#curlposturl-string-token-string-payload-json)
* [`curl.patch`](#curlpatchurl-string-token-string-payload-json)
* [`curl.getHTTPStatus`](#curlgethttpstatusurl-string-token-string)
* [`curl.isUp`](#curlisupurl-string-token-string)

## `curl.get(url: String, token: String, params: Object)`

Transfer data from an API. 

```js
curl.get('http://example.com', { token: 'abcd1234' }, { body: 'some data' })
    .then(response => {
        // do something with the data
    });
```

### Return

A Promise.

### `url`

The endpoint to transfer data.

* **Type**: String
* **Required**: Yes
* **Default**: N/A

### `token`

If the API requires a token, this will be placed on the `Authorization: Bearer`.

* **Type**: String
* **Required**: Yes
* **Default**: N/A

### `params`

* **Type**: String
* **Required**: Yes
* **Default**: N/A

## `curl.post(url: String, token: String, payload: JSON)`

Transfer data to an API by overwriting or creating.  This tends to be destructive on most endpoints, so check the documentation or use `curl.patch` to update an endpoint.

```js
curl.post('http://example.com', { token: 'abcd1234' }, { body: 'some data' })
    .then({
        // capture responses, manipulate data, etc.
    });
```

### Return

A Promise.

### `url`

The endpoint to transfer data.

* **Type**: String
* **Required**: Yes
* **Default**: N/A

### `token`

If the API requires a token, this will be placed on the `Authorization: Bearer`.

* **Type**: String
* **Required**: Yes
* **Default**: N/A

### `payload`

A JSON object of data that intended to be created.

* **Type**: Object
* **Required**: Yes
* **Default**: N/A

## `curl.patch(url: String, token: String, payload: JSON)`

Transfer data to an API by updating.

```js
curl.patch('http://example.com', { token: 'abcd1234' }, { body: 'some data' })
    .then({
        // capture responses, manipulate data, etc.
    });
```

### Return

A Promise.

### `url`

The endpoint to transfer data.

* **Type**: String
* **Required**: Yes
* **Default**: N/A

### `token`

If the API requires a token, this will be placed on the `Authorization: Bearer`.

* **Type**: String
* **Required**: Yes
* **Default**: N/A

### `payload`

A JSON object of data that is intended to be updated.

* **Type**: Object
* **Required**: Yes
* **Default**: N/A

## `curl.getHTTPStatus(url: String, token: String)`

Check the [HTTP Status Codes](https://httpstatuses.com/) from a given URL.

```js
curl.getHTTPStatus('http://example.com', { token: 'abcd1234' })
    .then(code => (code >= 400) ? false : true);
// true
```

### Return

A Promise.

### `url`

The endpoint to transfer data.

* **Type**: String
* **Required**: Yes
* **Default**: N/A

### `token`

If the API requires a token, this will be placed on the `Authorization: Bearer`.

* **Type**: String
* **Required**: Yes
* **Default**: N/A


## `curl.isUp(url: String, token: String)`

```js
curl.isUp('http://example.com', { token: 'abcd1234' });
// true
```

### Return

Boolean.

### `url`

The endpoint to transfer data.

* **Type**: String
* **Required**: Yes
* **Default**: N/A

### `token`

If the API requires a token, this will be placed on the `Authorization: Bearer`.

* **Type**: String
* **Required**: Yes
* **Default**: N/A
