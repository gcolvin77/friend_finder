var friendsData = require("../app/data/friends.js");

module.exports = function(app){

app.get("/api/friends", function(req, res) {
    res.json(friendsData);
});

app.post("/api/friends", function(req,res){
    friendsData.push(req.body);

    console.log(friendsData);

    for(var i=0; i<friendsData.length-1; i++){
        




    }


    res.json(newFriend);

});


};