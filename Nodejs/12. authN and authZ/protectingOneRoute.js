function requreLogin(req, res, next){
    // express session automatically looks at teh incoming cookie and loads the matching data into req.sessions
    if(req.session.userId){
        next(); // let them into the dashboard
    }else{
        res.redirect('/login'); // kick them back to login page
    }
}

// Apply it to the route
app.get('/dashboard', requireLogin, (req, res) => {
    res.send("Welcome to your private dashboard!");
});