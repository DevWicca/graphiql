const express =require('express')
const graphqlHTTP =require('express-graphql')
const schema =require('./schema/schema')
const mongoose =require('mongoose')
const cors =require('cors')

const app = express()

app.use(cors())
mongoose.connect("mongodb://wicca1:wicca123456@ds123372.mlab.com:23372/wicca",{ useNewUrlParser: true })
mongoose.connection.once('open',()=>{
    console.log("Lets Go Baby The Database Is Open For You -_^ ")
})




app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))

app.listen(3000,()=>{
    console.log(`Server Online We Are In Lets Go *_* `)
})