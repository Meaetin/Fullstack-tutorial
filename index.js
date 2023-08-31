import express from "express";
import "./models/user.js"
import  "./services/passport.js"
import authRoutes from "./routes/authRoutes.js"
import keys from "./config/keys.js";
import mongoose from "mongoose";
import cookieSession from "cookie-session";
import passport from "passport";

mongoose.connect(keys.mongoURI);

const app = express();

// Tells app to use cookie 
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // Cookie to last for 30 days
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);