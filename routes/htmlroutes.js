var path = require("path");

module.exports = app => {

    app.get("/index", (req, res) => {  
        res.sendFile(path.join(__dirname,'../views', "index.html"));
    })

    app.get("/portfolio", (req, res) => {  
        res.sendFile(path.join(__dirname,'../views', "portfolio.html"));
    })

    app.get("/contact", (req, res) => {  
        res.sendFile(path.join(__dirname,'../views', "contact.html"));
    })

    app.get("*", (req, res) => {
        // res.sendFile("index.html")
        res.sendFile(path.join(__dirname,'../views', 'index.html'));
    })

   

}


