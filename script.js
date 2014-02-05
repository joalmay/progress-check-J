$('document').ready(function(){
	
	$("#total-calculate").click( function() {
		var subtotal = parseFloat($("#sub-total").val());
		var total = $("#total-amount");

		console.log("sub:", subtotal*1.2)

		//Clear Span
		total.text(" ");

		//Append
		total.append(subtotal*1.2);

		//Clear Input
		$("#sub-total").val("");

	});



});

var waitlist = [];
var waiting = {};

window.new_party_joined = function(person) {	
	if(person in waiting){
		return;
	} else{
		waiting[person] = person;
		$('.list-group').append("<li class='list-group-item' id ='" + person + "''>" + person + "</li>");
		//console.log("Unshift", person);
		waitlist.unshift(person);
	}
	//Code goes below here
}

window.assign_to_table = function() {
	//Code
	var name = waitlist.pop();
	console.log("assign_to_table", name);
	$("#"+name).remove();
}