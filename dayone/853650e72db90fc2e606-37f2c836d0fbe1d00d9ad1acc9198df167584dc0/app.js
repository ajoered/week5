$(document).on('ready', function (){
	console.log("Ready!")
	$('.hello-button').on('click', function () {
		alert('hello world')
	});

	$('#hide').on('click', function () {
		$('.hello-button').fadeToggle(200);
	});
});

$('.hello-button').on('click', function () {
alert('hello world')
})



