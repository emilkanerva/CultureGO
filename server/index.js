const cors = require('cors')
const express = require('express')
const app = express()
const port = 4000


app.use(cors())

app.get('/', (req, res) => {
  res.json('Hello Wrld!')
})

//api routes
/*
    Login -> post/authenticate
    Skapa konto -> post/createacount
    swipe info -> post/swipe
                -> get/getitem?amount=x
    Hämta userinfo -> get/userinfo
    Ändra userinfo -> post/userinfo
    Ta bort användare -> delete/userinfo
    Hämta likes -> get/likes?page=x&filter=visited/unvisited/none&sort=old/new      (HTTP 204 skickas tillbaka om det är slut på kort)
*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})