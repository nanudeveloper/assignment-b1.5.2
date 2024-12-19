const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.send('welcome to stock portfolio analysis API!');
});

//solution 1

function returnValue(boughtAt,marketPrice,quantity)
{
  let totalSum ;
  totalSum = (marketPrice - boughtAt) * quantity;
  return totalSum
}
app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt)
  let marketPrice = parseFloat(req.query.marketPrice)
  let quantity  = parseFloat(req.query.quantity )
  res.send(returnValue(boughtAt,marketPrice,quantity).toString());
});


//solution 2


function totalReturnValue(stock1,stock2,stock3,stock4)
{
  let totalSum ;
  totalSum = stock1 + stock2 + stock3 + stock4
  return " total sum will be " + totalSum
}
app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1)
  let stock2 = parseFloat(req.query.stock2)
  let stock3  = parseFloat(req.query.stock3)
  let stock4  = parseFloat(req.query.stock4)
  res.send(totalReturnValue(stock1,stock2,stock3,stock4).toString());
});

//solution 3


function percentageReturnValue(boughtAt,returns)
{
  let percentageValue ;
  percentageValue = (returns/boughtAt)  * 100
  return percentageValue;
}
app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt)
  let returns  = parseFloat(req.query.returns )
 
  res.send(percentageReturnValue(boughtAt,returns).toString());
});

// solution 4 percentage return value

function totalPercentageValue(stock1,stock2,stock3,stock4)
{
  let totalReturnPercentage ;
  totalReturnPercentage = (stock1 + stock2 + stock3 + stock4) 
  return  totalReturnPercentage
}
app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1)
  let stock2 = parseFloat(req.query.stock2)
  let stock3  = parseFloat(req.query.stock3)
  let stock4  = parseFloat(req.query.stock4)
  res.send(totalPercentageValue(stock1,stock2,stock3,stock4).toString());
});

//soluiton 5

function status(returnPercentage)
{
 
 if( returnPercentage > 0){
   return " profit"
 }else{return "negative"}
}
app.get('/status', (req, res) => {
  let returnPercentage  = parseFloat(req.query.returnPercentage)

 
  res.send(status(returnPercentage));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

