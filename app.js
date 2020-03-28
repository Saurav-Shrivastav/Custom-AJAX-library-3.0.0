const http = new EasyHTTP;

// GET data:
http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Create user data:
data = {
  name: 'Saurav Shrivastav',
  email: 'ss123@gmail.com'
}

// POST data:
http.post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Create the data that needs to be put:
data1 = {
  name: 'Vaibhav Shrivastav',
  email: 'vs123@gmail.com'
}

// PUT data:
http.put('https://jsonplaceholder.typicode.com/users/9', data1)
  .then(data => console.log(data))
  .catch(err => console.log(err)); // The last nukber in the url specifies the id of that needs to be updated

// DELETE data:
http.delete('https://jsonplaceholder.typicode.com/users/5')
  .then(data => console.log(data))
  .catch(err => console.log(err));
