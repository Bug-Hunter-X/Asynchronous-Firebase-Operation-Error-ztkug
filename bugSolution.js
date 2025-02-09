The corrected code uses `.then()` to ensure that `doSomethingWithUserData` is only executed *after* the data is successfully fetched:

```javascript
// Correct handling of asynchronous Firebase operations
db.ref('users').once('value').then(snapshot => {
  const userData = snapshot.val();
  console.log('User data:', userData);
  doSomethingWithUserData(userData); 
}).catch(error => {
  console.error('Error fetching data:', error);
});

function doSomethingWithUserData(data) {
  // ... further operations using data ...
}
```

This approach ensures that the asynchronous operation completes before any subsequent actions that depend on its result are taken.  The `.catch()` block handles potential errors during the data retrieval process.