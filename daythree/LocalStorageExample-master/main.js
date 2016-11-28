var $color_button = $('.color-changer');

function changeColor(event){
  var color = $(event.target).data('color');
  $("body").css("background-color", color);
  window.localStorage.setItem("bg-color", color);
}


function loadColor() {
	if (window.localStorage.getItem("bg-color")){
		var color = window.localStorage.getItem("bg-color");
		$("body").css("background-color", color);
	}
}

loadColor();
$color_button.on("click", changeColor);

// save colors into local localStorage
// retreive colors from local storage using get Itme (array)

// for (var i = 0;i<colors.length; i++) {
// 	setTimeout(
// 		setColor.bind({color: colors[i]})
// 		,1000*i)
// }

// function setcolor() {
// 	document.background.style(this.color)
}