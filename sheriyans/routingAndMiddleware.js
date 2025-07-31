import express from 'express'

const app = express()

app.use((req, res, next) => {
  console.log("this is home page")
  next();
})

app.use((req, res, next) => {
  console.log("now we are going to profile page")
  next();
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/profile', (req, res) => {
  // res.send('My Profile')
  return next(new Error("Something went wrong!"))
})

// error handling
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})


app.listen(3000)