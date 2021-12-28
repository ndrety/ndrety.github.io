$(window).scroll (function(){
		
	var wScroll = $(this).scrollTop();
	

	
	if ( wScroll > $('.contact').offset().top - 950){
		$('.contact .contact-text').each(function(i){
			setTimeout(function(){
				$('.contact .contact-text').eq(i).addClass('muncul');
			}, 200 * (i+1));
		});
	};
	
    
	if ( wScroll > $('.panel').offset().top -850){
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


// Form sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbxhxRUYCuLxBgpntgsb70-CbbQj1bFqcx0We504jUVAdXCuiaE7pFKFbv_Dwpeq9UJL_g/exec'
const form = document.forms['ndrety-contact-form']
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', e => {
  e.preventDefault()
 
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
	.then(response => {

	  btnLoading.classList.toggle('d-none');
	  btnKirim.classList.toggle('d-none');
	  
	  //Tampilkan Alert
	  myAlert.classList.toggle('d-none');
	  form.reset();
	  console.log('Success!', response)
	  
	})
	.catch(error => console.error('Error!', error.message))
})

