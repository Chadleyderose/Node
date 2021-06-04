const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");


const API_KEY = "65e4c671865941d6a025ca7140ecf711";


/*get home*/
router.get('/', function(req, res, next ){
    res.render('index', {title:"express"});
});

router.get("/get_stuff",(req, res)=> {
    console.log("/get_stuff end point called");
    res.json({
        "message": "here is the response"
    });
});
router.get("/fetch_everything", async (req,res) => {
    console.log("/fetch_evereything endpoint called");
    const url = `https://newsapi.org/v2/everything?q=sortBy=publishedAt&apiKey=${API_KEY}`;
    const option = {
        "method": "GET"
    };
    
    const response = await fetch(url, options)
         .then(res=> res.json())
         .catch(e => {
             console.error({
                 "message": "oh no ",
                 error:e,
             })
         })
    console.log("RESPONSE:", response);
    res.json(response);
});

module.exports = router;
