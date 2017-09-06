$(document).ready(function(){
	$('.each_box').click(function(){
		$(this).css({'position': 'absolute',
					'height': '100%',
					'width': '100%'}
			);
		$('body').css('position', 'relative');
	});
});