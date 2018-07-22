var friendsData = require("../app/data/friends.js");

module.exports = function(app){

app.get("/api/friends", function(req, res) {
    res.json(friendsData);
});

app.post("/api/friends", function(req,res){
    friendsData.push(req.body);

    var userScores = req.body.scores;
    var differentScores = [];
    
    for(var i = 0; i<friendsData.length-1; i++){           
        var friendScores = friendsData[i].scores;
        var totalDifference = 0;
         
            for(var j = 0; j<friendScores.length; j++ ){
                var difference = Math.abs(parseInt(friendScores[j]) - parseInt(userScores[j]));
                totalDifference += difference;                

            }
            
          differentScores.push(totalDifference); 
    }
    
    var min = Math.min.apply(null, differentScores);  //finds lowest value in the array 
    var index = differentScores.indexOf(min);
    var newFriend = friendsData[index];  

    res.json(newFriend); 

});


};