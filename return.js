// return: makes date checked out and customerID null
// Take in: Bike_ID, Customer_ID
// Return: Success or fail

// bike : {
// 	id : string
// 	serialNumber : string
// 	model : string
// 	dateRented : string
// 	notes : string (100 char limit)
// 	customerID : (account id)
// }

app.post('/api/return', async (req, res, next) => 
{	
	const {customer_ID, bike_ID} = req.body;
	const db = client.db();

    const result = awaitdb.collection('Bikes').find({id:bike_ID});
    if (result.dateRented != null)
    {
        db.Bikes.updateOne({id: bike_ID}, {$set:{dateRented:null, customerID:null}});
        var ret = result.dateRented;
        res.status(200).json(ret);
    } else {
        var ret = {Error: "bike already returned"}
        res.status(409).json(ret);  //409 conflict with current state of server?? maybe change status code
    }
});