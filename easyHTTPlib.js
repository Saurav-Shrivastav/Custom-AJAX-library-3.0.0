/**
 * EasyHTTP Library.
 * Library for making HTTP requests.
 *
 * @version 3.0.0
 * @author Saurav Shrivastav
 * @license MIT
 *
 **/

class EasyHTTP {

  // Make a HTTP GET request:
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  // Make a HTTP POST request:
  async post(url, data) {

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const resData = await response.json();
    return resData;

  }

};
