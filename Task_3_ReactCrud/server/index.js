const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const bodyparser = require('body-parser')
const cookieparser = require('cookie-parser')
const session = require('express-session')
const bcrypt = require('bcrypt')
const saltrounds = 10;

app.use(express.json())
app.use(cors({
    origin : ['http://localhost:3000'],
    methods : ['GET','POST'],
    credentials : true
}))
app.use(cookieparser())
app.use(bodyparser.urlencoded({extended : true}))

app.use(
    session({
        key : "userid",
        secret : "anythingisimpossible",
        resave : false,
        saveUninitialized : false,
        cookie : {
            expires : 60 * 60 * 24
        }
    })
)

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'login' 
})

app.post('/api/signup', (req,res) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const insertuser = 'INSERT INTO users (username, email, password) VALUES (?,?,?);'

    bcrypt.hash(password, saltrounds, (err, hash) => {
        if(err) {
            res.send({err : err})
        }else{
            db.query(insertuser, [username,email,hash], (error, result) => {
                if(error){
                    res.send({error : error})
                }else{
                    res.send({result})
                }
            })
        }
    })
})

app.post('/api/login', (req,res) => {
    const username = req.body.username
    const password = req.body.password

    const checkuser = 'SELECT * FROM users WHERE username = ?;'


    db.query(checkuser,username,(err, result) => {
        if(err){
            res.send({err: err})
        }else{
            if(result.length > 0){
                // bcrypt.compare(password, result[0].password, (error, response) => {
                //     if(error){
                //         console.log(error);
                //     }else{
                //         res.status(200).send(result)
                //     }
                // })
                let q = "SELECT PASSWORD FROM USERS WHERE USERNAME = ?"
                db.query(q , [username] , (err,data) => {
                    if(err){
                        console.log(err)
                    }else{
                        let pass = data[0].PASSWORD;
                        // console.log(pass)
                        // console.log(data)
                        // console.log(pass[0].PASSWORD)
                        let com = bcrypt.compare(password , pass)
                        .then(passcheck => {
                            if(passcheck == false){
                                // res.status(400).send({message : "Invalid password"});
                                res.send({message : 'Incorrect Password'})
                            }else{
                                res.send(result);
                            }
                        })
                        // console.log(bcrypt.compare(password,pass))
                    }
                })
                // console.log(result)
            }else{
                res.send({message : 'Incorrect Username'})
                // res.status(400).send({message : 'invalid username'})
            }
        }
       
    })
})


app.post('/api/home',(req, res) => {
    // const logUser = req.body.key
    // const id = logUser.user[0].id
    const id = req.body.id
    const title = req.body.title
    const description = req.body.description
    // console.log(id)

    const insertCard = 'insert into cards(title, description, id) values (?,?,?);'

    db.query(insertCard, [title, description, id], (err, result) => {
        if(err){
            res.send({err : err})
        }else{
            res.send({title : title, description : description})
        }
    })
})

app.get('/api/login', (req,res) =>{
    if(req.session.user){
        res.send({loggedin : true, user : req.session.user})
    }else{
        res.send({loggedin : false})
    }
})

app.get('/api/home',(req, res) => {
    if(req.session.user){
       res.send({loggedin : true, user : req.session.user})
       console.log(res)
    }else{
        res.send({loggedin : false})
    }
})


app.post('/api/home/card',(req, res) => {
    const userDetails = req.body.userDetails
    // console.log(userDetails[0].id)
    // const userId = userDetails[0].id
    const userCard = 'select users.username, cards.cardId, cards.title, cards.description from users inner join cards on users.id = cards.id where users.id = ?;'
    
    db.query(userCard,[userDetails],(err, result) => {
        if(err){
            res.send({err : err})
        }
        else{
            res.send({result})
            // console.log(result)
        }
    })

})


app.post('/api/edit', (req,res) => {
    // console.log(req.body.description)
    const cardId = req.body.cardId
    const title = req.body.title
    const description = req.body.description

    const editInfo = 'update cards set title = ?, description = ? where cardId = ?;'

    db.query(editInfo,[title,description,cardId], (err, result) => {
        if(err){
            res.send({err : err})
        }else{
            res.send({result})
        }
    })
})

app.post('/api/delete', (req,res) => {
    const cardId = req.body.cardId

    const delInfo = 'DELETE FROM cards WHERE cardId = ? ;'
    db.query(delInfo, [cardId], (err, result) => {
        if(err){
            res.send({err : err})
        }else{
            res.send({result})
        }
    })
})




app.listen(5000, (req, res)=> { console.log('server is listening on : http://localhost:5000' )})