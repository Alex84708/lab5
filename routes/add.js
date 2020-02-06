var data = require("../data.json");

exports.addFriend = function(request, response) {
	var first = request.query.name;
	var second = request.query.description;

	var newFriend = {
		"name:" 
	}
	data.friends.push(newFriend);
}