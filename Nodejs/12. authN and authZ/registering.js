// user submits the form 
const plaintextpassword = req.body.password; 

// hash it with bcrypt 
const hashedpassword = await bcrypt.hash(plaintextpassword, 10); 
 // the 10 is the salt rounds - make it slower/harder to crack 

// result hashed password will look like "$2b$10$Wb3rM.Hh5y1T..."

// save to the database
Database.saveuser({
    username: "alice",
    password: hashedpassword
});