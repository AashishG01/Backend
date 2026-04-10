// find user in database
const user = Database.findUser("alice")
const isMatch = await bcrypt.compare(req.body.password, user.password);

if(isMatch){
    // create a session by adding data to req.session, express-session automatically creates a session id and sets teh cookie in teh background 
    req.sessio.userId = user.id;
    res.send("successfully logged in!");
}