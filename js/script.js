$(window).scroll (function(){
		
	var wScroll = $(this).scrollTop();
	

	
	if ( wScroll > $('.contact').offset().top - 250){
		$('.contact .contact-text').each(function(i){
			setTimeout(function(){
				$('.contact .contact-text').eq(i).addClass('muncul');
			}, 200 * (i+1));
		});
	};
	
    
	if ( wScroll > $('.panel').offset().top -350){
		$('.panel .panel-item').each(function(i){
			setTimeout(function(){
				$('.panel .panel-item').eq(i).addClass('muncul');
			}, 200 * (i+1));
		});
	};
	

	
});



function setDarkMode(isDark){
	if(isDark){
		document.body.setAttribute('id','darkmode')
	}else{
		document.body.setAttribute('id','')
	}
}
