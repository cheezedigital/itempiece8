$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		alert('mouse entered .ryu-div');
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	});

	$('.ryu').mouseleave(function() {
		alert('mouse left');
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	});

	$('.ryu').mousedown(function() {
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();
	});

	$('.ryu').mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
});
