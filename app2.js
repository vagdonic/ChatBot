const { MongoClient } = require('mongodb');

async function main() {
    
    const uri = 'mongodb+srv://vagdonic:vagdonic123@cluster0.7hivh.mongodb.net/studentdb?retryWrites=true&w=majority'

    const client = new MongoClient(uri);

    try {
        await client.connect();
       //await listDatabases(client);
       await profAndDegrees(client);
       await profAndTheory(client);
    } catch(e) {
        console.error(e);
    } finally {
        await client.close();
    }
}



main().catch(console.error);
async function profAndDegrees(client) {
    const pipeline = [
            {
                $lookup:{
                from:"degrees",
                localField:"degree_id",
                foreignField:"iD",
                as:"degree_data"
            }
        }
    ];
    const aggCursor = client.db("studentdb").collection("academic").aggregate(pipeline);

    aggCursor.forEach(profAndDegreeList => {
        console.log("Subject: " + `${profAndDegreeList.subject}`)
        console.log("Taught by: " + `${profAndDegreeList.faculty}`)
        console.log();
    });
}

async function profAndTheory(client) {
    const pipeline = [
            {
                $lookup:{
                from:"degrees",
                localField:"degree_id",
                foreignField:"iD",
                as:"degree_data"
            }
        }
    ];
    const aggCursor = await client.db("studentdb").collection("academic").aggregate(pipeline);

    await aggCursor.forEach(profAndDegreeList => {
        console.log("Subject: " + `${profAndDegreeList.subject}`)
        console.log("Theory provided: " + `${profAndDegreeList.theory}`)
        console.log("Lab provided: " + `${profAndDegreeList.lab}`)

        console.log();
    });
}