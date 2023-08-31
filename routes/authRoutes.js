import passport from "passport";
import keys from '../config/keys.js';

export default function authRoutes(app) {
    app.get("/auth/google", passport.authenticate("google", {
        scope: ["profile", "email"]
    })) ;
    
    app.get("/auth/google/callback", passport.authenticate("google"));

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    app.get("/api/logout", (req, res) => {
        req.logout();
        res.send(req.user);
    });

    app.get("/", (req, res) => {
       res.send(keys.cookieKey);
    })
}
