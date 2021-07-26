const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({message: 'Server is runnig'})
})

app.listen(3000, () => {
  console.log('listening on port 3000')
});