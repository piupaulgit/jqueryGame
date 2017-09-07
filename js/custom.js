$(document).ready(function(){

	// looping each div
	$('.each_box').each(function(index){

		// generating random colors
		var color = '#' ;
		var colorCodes = '0123456789ABCDEF'.split('');

		 for (var i = 0; i < 6; i++ ) {
	        color += colorCodes[Math.round(Math.random() * 15 )];
		    }


		 values = '0123456789'.split('');
		 randNumber = '';
		 for (var i = 0; i < values.length; i++) {
		 	randNumber = values[Math.round(Math.random() * 9 )];
		 }

		 $(this).attr('point',randNumber);

		// assinging random color to the divs background
		$(this).css('background-color', color);


		// each Div click
		$(this).click(function(){

			// storing its inline style(background-color) into a variable
		     var backgroundColor = $(this).css('background-color');
		     var gotPoint = parseInt($(this).attr('point'));
		     // alert(backgroundColor);


		     // activating the second screen with the same background color
		     $('.second_screen').css({'margin-top': '-100vh', 'background-color': backgroundColor});
			 $('.first_screen .container').css('display', 'none');

			 $('#first_got').text(gotPoint);

			  
			$('.second_screen_each_box').each(function(){

			 	values2 = ['10', '50', '20', '24', '25', '54'];
				 randNumber2 = '';
				 for (var i = 0; i < values2.length; i++) {
				 	randNumber2 = values2[Math.round(Math.random() * 5 )];
				 }

				  $(this).attr('point',randNumber2);

				  $(this).click(function(){
				  	var gotPoint2 = parseInt($(this).attr('point'));

				  	var totalPoints = gotPoint + gotPoint2;
				  	var result = '';
				  	if ( totalPoints > 30){
				  		result = 'Winner';
				  	}
				  	else{
				  		result = 'Loser';
				  	}

				  	$('.third_screen').css({'margin-top': '-100vh', 'background-color': backgroundColor});
				  	$('.second_screen .container').css('display', 'none');
				  	$('#point2').text(gotPoint2);
				  	$('#totalScore').text(totalPoints);
				  	$('#finalResult').text(result);
				  });

			 });


			 
		});
	});
});