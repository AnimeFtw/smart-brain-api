import express, { response } from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import  knex  from 'knex';
import handleRegister from './controllers/register.js';
import handleSignin from './controllers/signin.js';
import handleProfileGet from './controllers/profile.js';
import handleImage from './controllers/image.js';

const postgres =knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port : 5432,
    user : 'postgres',
    password : 'Test',
    database : 'smart-brain'
  }
});
console.log(postgres.select('*').from('users'));
;const app = express();


app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());




app.get('/', (req, res) => {res.send(database.users)})
app.post('/signin', handleSignin( postgres, bcrypt)) 
app.post('/register', (req, res) => {handleRegister(req, res, postgres, bcrypt)})
app.get('/profile/:id',(req, res) => {handleProfileGet(req, res, postgres)})
app.put('/image', (req, res) => {handleImage(req, res, postgres)})

app.listen(3000, () =>{

})



