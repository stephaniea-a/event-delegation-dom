$(function () {

	//jQuery Event Delegation

	var $addButton = $('#add-button');
	var $squareContainer = $('.red-square');
	var $littleSquare = $('.little-square');

	function addSquare (event) {
		$squareContainer.append('<div class ="little-square"></div>');
	}

	setInterval(addSquare, 200000);

	$addButton.click(addSquare);


	$squareContainer.on('click', '.little-square', function () {
		//$(this).css('background-color', 'black');
		var $this = $(this);
		$(this).addClass('black');

		setTimeout( function () {
			$this.removeClass('black');
		}, 1000)

	

	});

	//changing little squares when clicked on to blue
	// 	$littleSquare.click(function (event) {
	// 		$(this).css('background-color', 'blue');
	// })


	//jQuery Effects
	// .hide()
	// .show()
	// .fadeIn()
	// .fadeOut()
	// .slideIn()
	// .slideOut()

	// var $orangeBox = $('#big-square');

	// $orangeBox
	//     .animate({
	//         height: '100px',
	//         width: '1000px'
	//      },2000)
	//      .animate({
	//          height: '300px',
	//          width: '300px'
	//      },1000)

	// setTimeout(function () {
	// 	alert('HELLO NIALL');
	// }, 3000) 
		

});