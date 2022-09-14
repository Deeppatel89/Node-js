
const getdata = require('./mongodb');

    // let response = await collection.find({}).toArray();
    // console.log(response)



// getdata().then((res)=>{
//  res.find({name:"iphone 12"}).toArray().then((data)=>{
//     console.warn(data)
//  })

// })

const main = async()=>{
    let data = await getdata();
    data =await data.find().toArray()
    console.log(data)
}
main()