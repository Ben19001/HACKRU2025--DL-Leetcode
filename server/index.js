const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const app = express();
const loginRouter = require("./routes/login");



app.use(cors({
    origin: ["http://localhost:5173", "https://localhost:5173"],
    methods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type"],
}));
app.options("*", cors());
app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true, //change to false maybe
      // store: MongoStore.create({
      //   mongoUrl: `${mainUri}${uriOne}`,
      //   collectionName: 'sessions',
      //   ttl: 60 * 60,
      //   autoRemove: 'native',
      // }),
      cookie: {
        maxAge: 1000 * 60 * 60,
        httpOnly: true,
        sameSite: "Strict",
        // path: '/',
        // sameSite: 'lax',
        // secure: true
      },
    })
  );


  mongoose.connect("mongodb://localhost:27017/leetcode", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then( async() => {
    console.log("Connected to MongoDB");
    // try {
    //     const result = await Business.findOne(); // Query the collection
    //     console.log("Query result:", result || "No documents found");
    // } catch (err) {
    //     console.error("Query error:", err);
    // } 
  }).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
  


app.get("/login", (req, res) => {
    
})

app.use("/login", loginRouter);


app.listen(3000, () => {
    console.log("Server started on port 3000");
});

