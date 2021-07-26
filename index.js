const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({message: 'Server is runnig'})
})

app.get('/atualizou', (req, res) => {
  return res.json({message: 'atualizou'})
})

app.listen(3000, () => {
  console.log('listening on port 3000')
});