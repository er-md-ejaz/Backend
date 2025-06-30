// const express = require('express')
import express from 'express'
const app = express()

app.get('/', (res, req) => {
    req.send('Frontend and Backend')
})

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`)
})


const jokes = [
    {
        id: 1,
        setup: "Why did the scarecrow win an award?",
        punchline: "Because he was outstanding in his field!"
    },
    {
        id: 2,
        setup: "I told my wife she was drawing her eyebrows too high.",
        punchline: "She looked surprised."
    },
    {
        id: 3,
        setup: "Why don't skeletons fight each other?",
        punchline: "They don't have the guts."
    }
]

app.get('/jokes', (req, res) => {
    res.json(jokes)
})
// app.get('/jokes/:id', (req, res) => {
//     const jokeId = parseInt(req.params.id, 10)
//     const joke = jokes.find(j => j.id === jokeId)
//     if (joke) {
//         res.json(joke)
//     } else {
//         res.status(404).json({ message: 'Joke not found' })
//     }
// })