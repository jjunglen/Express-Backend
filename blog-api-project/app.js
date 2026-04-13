const express = require("express");
const app = express();
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");

const PORT = 3000;

console.log(`Server starting... ${PORT} PORT`)

app.use(express.json());         

app.use((req, res, next) => {
    console.log(`${req.method}: ${req.url}`);
    next();
});

// // Mounts
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

// // add rootroute (/) with API documentation
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Blog Post API",
        documentation: "Visit /api/users or /api/posts to see data." 
    })
})

// Health
app.get("/health", (req, res) => {
    res.status(200).json({
        success: "Server is healthy",
    })
});

// Client side error
app.use((req, res) => {
    res.status(404).json({
        error: "404: Oops, this route is not found."
    });
});

// Server side error
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        error: "Server side error on our end!"
    })
})


app.listen(3000, () => {
    console.log("Servers running on port 3000");
});

