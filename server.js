const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Час плинний, могилянка вічна.');
});

app.listen(80, () => {
  console.log('Server is listening on port 80');
});
