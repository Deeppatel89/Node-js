const getdata = require('./mongodb')


const insert = async () => {

    const db = await getdata();
    const result = await db.insert(
        [
            {
                name: 's22 ultra',
                brand: 'samsung',
                price: 5000,
                cetagroy: 'mobile'
            },
            {
                name: 'z fold3',
                brand: 'samsung',
                price: 250000,
                cetagroy: 'mobile'
            },
            {
                name: 'z fold4',
                brand: 'samsung',
                price: 300000,
                cetagroy: 'mobile'
            }

        ]
    )

    if (result.acknowledged) {
        console.log("data inserted");
    }
}

insert()