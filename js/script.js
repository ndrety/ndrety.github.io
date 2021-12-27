$(window).scroll (function(){
		
	var wScroll = $(this).scrollTop();
	

	
	if ( wScroll > $('.contact').offset().top -10){
		$('.contact .contact-text').each(function(i){
			setTimeout(function(){
				$('.contact .contact-text').eq(i).addClass('muncul');
			}, 200 * (i+1));
		});
	};
	
    
	if ( wScroll > $('.panel').offset().top -10){
		$('.panel .panel-item').each(function(i){
			setTimeout(function(){
				$('.panel .panel-item').eq(i).addClass('muncul');
			}, 200 * (i+1));
		});
	};
});

// const checkbox = document.getElementById('checkbox');

// checkbox.addEventListener('change', ()=>{
// 	document.body.classList.toggle('dark');
// });

function setDarkMode(isDark){
	if(isDark){
		document.body.setAttribute('id','darkmode')
	}else{
		document.body.setAttribute('id','')
	}
}

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('header nav .left .menu');

menuToggle.addEventListener('click', function(){
	nav.classList.toggle('slide');
});
