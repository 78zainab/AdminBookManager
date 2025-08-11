const express = require('express');
require('dotenv').config(); 
const cors = require('cors');
const path = require('path');

const connectDB = require('./config/db');

const bookRoutes = require('./routes/bookRoutes');

// Connect to MongoDB
connectDB();

const app = express();
// it's a middleware to parse incoming json request...
// allows us to accept JSON data in the request body.
app.use(express.json()); 
app.use(cors());
app.use("/api/books", bookRoutes);
if (process.env.NODE_ENV === "production"){
    // build is going to be folder for static assets
    app.use(express.static(path.join(__dirname, "../frontend/build")));
    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"))
    );
}

// Test route, with the first one get ...
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

