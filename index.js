const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors())
app.use(express.json());
const port=5000;

app.get('/',(req,res)=>{
    res.send('hello Omar faruk from my second node server');
});

const users=[
    {id:0,name:"Shabana", email:"shabana@gmail.com"},
    {id:1,name:"shepali", email:"shepali@gmail.com"},
    {id:2,name:"sonia", email:"sonia@gmail.com"},
    {id:3,name:"suchorita", email:"suchorita@gmail.com"},
    {id:4,name:"sumi", email:"sumi@gmail.com"}
]

 

app.get('/users',(req,res)=>{
    const search=req.query.search;
    if(search){
        const searchResult=users.filter(user=>user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);

    }
    else{
        res.send(users)

    }
   
});

// app Method 

app.post('/users',(req,res)=>{
    const newUser=req.body;
    newUser.id= users.length;
    users.push(newUser);
    console.log('hitting the post',req.body);
    res.json(newUser)
})

app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    const user=users[id]
    res.send(user);
})

app.get('/fruits',(req,res)=>{
    res.send(['mango','oranges','banana','apple'])
})
app.get('/fruits/mango/fazli',(req,res)=>{
    res.send('Yummy is a mango iof fazli')
})

app.listen(port,()=>{
    console.log('Listening to port ',port);
})