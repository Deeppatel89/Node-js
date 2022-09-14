const getdata = require('./mongodb')

const update = async () => {
    let db = await getdata();
    let result = await db.updateOne(
        { name: "iphone 12" }, { $set: { name: "iphone x" } }
    )
    console.log(result)
}

update()