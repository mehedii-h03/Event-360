require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// middlewears
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions))

app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6dgrwby.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        //collections 
        const servicesCollection = client.db("event360").collection("services");
        const eventsCollection = client.db("event360").collection("events");
        const recentEventsCollection = client.db("event360").collection("recentEvents");

        //services
        app.get("/services", async (req, res) => {
            const result = await servicesCollection.find().toArray();
            res.send(result);
        });

        app.get("/service/:id", async (req, res) => {
            const id = req.params.id;
            const result = await servicesCollection.findOne({ _id: new ObjectId(id) });
            res.send(result);
        });

        app.post("/add-service", async (req, res) => {
            const serviceInfo = req.body;
            const result = await servicesCollection.insertOne(serviceInfo);
            res.send(result);
        });

        app.put("/service/edit/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const option = { upsert: true }
            const updateService = req.body;

            const serviceInfo = {
                $set: {
                    title: updateService.title,
                    imageLink: updateService.imageLink,
                    features: updateService.features,
                    description: updateService.description,
                }
            };

            const result = await servicesCollection.updateOne(filter, serviceInfo, option);
            res.send(result);
        });

        app.delete('/service/delete/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id);
            const query = { _id: new ObjectId(id) };
            const result = await servicesCollection.deleteOne(query);
            res.send(result);
        })

        // events
        app.get("/events", async (req, res) => {
            const result = await eventsCollection.find().toArray();
            res.send(result);
        });

        app.get("/events/:id", async (req, res) => {
            const id = req.params.id;
            const result = await eventsCollection.findOne({ _id: new ObjectId(id) });
            res.send(result);
        });

        app.post("/add-event", async (req, res) => {
            const serviceInfo = req.body;
            const result = await eventsCollection.insertOne(serviceInfo);
            res.send(result);
        });

        app.put("/event/edit/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const option = { upsert: true }
            const updateService = req.body;

            const serviceInfo = {
                $set: {
                    title: updateService.title,
                    imageLink: updateService.imageLink,
                }
            };

            const result = await eventsCollection.updateOne(filter, serviceInfo, option);
            res.send(result);
        });

        app.delete('/event/delete/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id);
            const query = { _id: new ObjectId(id) };
            const result = await eventsCollection.deleteOne(query);
            res.send(result);
        })

        // recent-events
        app.get("/recent-events", async (req, res) => {
            const result = await recentEventsCollection.find().toArray();
            res.send(result);
        });
        app.get("/recent-events/:id", async (req, res) => {
            const id = req.params.id;
            console.log(id);
            const result = await recentEventsCollection.findOne({ _id: new ObjectId(id) });
            console.log(result);
            res.send(result);
        });

        app.post("/add-recent-event", async (req, res) => {
            const serviceInfo = req.body;
            const result = await recentEventsCollection.insertOne(serviceInfo);
            res.send(result);
        });

        app.put("/recent-event/edit/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const option = { upsert: true }
            const updateService = req.body;

            const serviceInfo = {
                $set: {
                    imageLink: updateService.imageLink,
                }
            };

            const result = await recentEventsCollection.updateOne(filter, serviceInfo, option);
            res.send(result);
        });

        app.delete('/recent-event/delete/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id);
            const query = { _id: new ObjectId(id) };
            const result = await recentEventsCollection.deleteOne(query);
            res.send(result);
        })

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // await client.close();
    }
}
run().catch(console.dir);


app.get("/", (req, res) => {
    res.send("Event-360 is running");
});

app.listen(port, () => {
    console.log(`Event-360 is running on${port}`);
});
