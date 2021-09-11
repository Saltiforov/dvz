const scalesArr = [
	{
		id:1 ,
		name : 'Автомобільні ваги   «Business»',
		weighing: '80 тонн' ,
		length: ' 18 метрів',
		width: '3 метра',
		guarantee: '9 років',
		gauges: 'цифровий',
		price:'299 000 грн',
		img:'3',
	},
	{
		id:2 ,
		name : 'Автомобільні ваги   «Advanсed»',
		weighing: '80 тонн' ,
		length: ' 18 метрів',
		width: '3 метра',
		guarantee: '6 років',
		gauges: 'цифровий',
		price:'279 000 грн',
		img:'2',

	},
	{
		id:3 ,
		name : 'Автомобільні ваги  «Master» ',
		weighing: '80 тонн' ,
		length: ' 18 метрів',
		width: '3 метра',
		guarantee: '5 років',
		gauges: 'цифровий',
		price:'259 000 грн',
		img:'4',

	},
	{
		id:4 ,
		name : 'Автомобільні ваги «Farmer» ',
		weighing: '80 тонн' ,
		length: ' 18 метрів',
		width: '3 метра',
		guarantee: '5 років',
		gauges: 'аналоговый',
		price:'238 000 грн',
		img:'1',

	}

]




function toggle (btn , elClass , active , bntClass) {
	const dataToggle = btn.getAttribute('data-toggle');
	const arr = document.querySelectorAll(elClass);
	arr.forEach(item => {
		if(item.getAttribute('data-toggle') == dataToggle){
			item.classList.toggle(active)
			btn.classList.toggle(bntClass);
			if(item.classList.contains(active)){
				let icon = btn.querySelector('i');
				icon.classList.remove('fa-plus');
				icon.classList.add('fa-minus');
			} else {
				let icon = btn.querySelector('i');
				icon.classList.remove('fa-minus');
				icon.classList.add('fa-plus');
			}
		}
	})

}

document.addEventListener('click' , (e) => {
	if(e.target.classList.contains('about_us__info-title')){
		const btn = e.target;
		toggle (btn , '.about_us__info-content' , 'about_us__info-content-active');
	}
	if(e.target.classList.contains('quetions_block-title')){
		const btn = e.target;
		toggle (btn , '.quetions_block-info' , 'quetions_block-info-active' ,'quetions_block-title-active');
	}
})


$(document).ready(function() {
	$('.header__burger , .header__link').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

const certificatesSlider = new Swiper('.certificates-slider' , {
	slidesPerView : 3,
	loop : true,
	spaceBetween : 50 ,
	navigation: {
		nextEl: '.certificates-next',
		prevEl: '.certificates-prev',
	},
	breakpoints:{
		995:{
			slidesPerView : 3,
			spaceBetween : 50 ,
		},
		320:{
			slidesPerView : 1,
			spaceBetween : 30 ,
		}
	}
})
const cartSlider = new Swiper('.cart-slider', {
	// Navigation arrows
	navigation: {
		nextEl: '.cart-next',
		prevEl: '.cart-prev',
	},
})
const applicationSlider = new Swiper('.application-slider' , {
	slidesPerView : 3,
	loop : true,
	spaceBetween : 50 ,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		260: {
			slidesPerView: 1,
			spaceBetween: 40
		},
		769: {
			slidesPerView: 2,
			spaceBetween: 40
		},
		1025:{
			slidesPerView : 3,
		}
	}

})



document.addEventListener('click' , (e) => {
	if(e.target.classList.contains('footer-block-title')){
		const btnFons = e.target;
		const dataId = btnFons.getAttribute('data-id');
		console.log(dataId);
		document.querySelectorAll('.footer-ul').forEach(bt=>{

			const  ulId = bt.getAttribute('data-id');
			if (dataId == ulId){
				bt.classList.toggle('footer-ul-active')
			}

		})
	}

	if(e.target.classList.contains('scales_block-btn')){
		const dataId = e.target.getAttribute('data-id');

		if(document.querySelector('.popap-content') != undefined){
			document.querySelector('.popap-content').remove();
		}
		const scale = scalesArr.find(el => el.id == dataId);
		const popap = document.createElement('div');
		popap.classList.add('popap-content');
		popap.innerHTML =
			`
      <div class="popap-close-wrapper"><p class="close-btn"><img src="/template/img/scales/close.svg" alt=""></p> </div>
      <p class="popap-title">
        Ваш вибір
      </p>
      <div class="popap-info">
        <div class="popap-info-img">
          <img src="/template/img/scales/scales${scale.img}.png " alt="">
        </div>
        <p class="popap-info-title">
          ${scale.name}
        </p>
        <ul>
          <li>
            <span> Максимальна межа зважування </span> ${scale.weighing}
          </li>
          <li>
            <span> Довжина платформи </span> ${scale.length}
          </li>
          <li>
            <span> Ширина платформи </span> ${scale.width}
          </li>
          <li>
            <span> Гарантія </span>${scale.guarantee}
          </li>
          <li>
            <span> Тип тензометричних датчиків </span> ${scale.gauges}
          </li>
        </ul>
        <p class="popap-price">
          Вартість <span>${scale.price}</span>
        </p>
      </div>
    
    `
		document.querySelector('.popap-wrapper').append(popap);
		document.querySelector('.popap').style.display = 'flex';
	}
	
	if(e.target.classList.contains('popap')){
		document.querySelector('.popap').style.display = 'none';
	}
	if(e.target.classList.contains('popap-mobile')){
		document.querySelector('.popap-mobile').style.display = 'none';
	}

	if(e.target.classList.contains('block-mobile-btn')){
		document.querySelector('.popap-mobile').style.display = 'block';
	}
	if(e.target.classList.contains('close-btn')){
			document.querySelector('.popap-mobile').style.display = 'none';
		document.querySelector('.popap').style.display = 'none';
	}

});

document.querySelectorAll('.close-btn').forEach(el => {
	el.addEventListener('click' , () => {
		document.querySelector('.popap-mobile').style.display = 'none';
		document.querySelector('.popap').style.display = 'none';
	})
})


// Marquiz
const marquizBtn = document.querySelector('.about_us-btn')
document.addEventListener("DOMContentLoaded", function() {
	Marquiz.init({
		host: '//quiz.marquiz.ru',
		id: '5fca343163850c00440a86a0',
		autoOpen: false,
		autoOpenFreq: 'once',
		openOnExit: false
	});
})
marquizBtn.addEventListener('click', () => {
	Marquiz.showModal('5fca343163850c00440a86a0')
})





var swiperCertificates = new Swiper('.certificates_slider-second', {
	loop : true,
	navigation: {
	  nextEl: '.swiper-button-next',
	 
	},
  });


const formMobile = document.querySelector('.popap-form-mobile');

formMobile.addEventListener('submit' , (e) => {
	e.preventDefault();
	let formData = new FormData(formMobile);
	let loading;
	loading = true;
	if(loading == true){
		document.querySelector('.lds-ellipsis').style.opacity = '1';
	}
	fetch('new_application.php', {
		method: 'post' ,
		body: formData
	})
	.then(response => {
		loading = false;
		if(loading == false){
			document.querySelector('.lds-ellipsis').style.opacity = '0';
			document.querySelector('.form-done').style.display = 'block';
			document.querySelector('.form-error').style.display = 'none';
		}
	})
	.catch( () => {
		document.querySelector('.lds-ellipsis').style.display = 'none !important';
		document.querySelector('.form-done').style.display = 'none';
		document.querySelector('.form-error').style.display = 'block';
	})
	.finally( () => {
		setTimeout(() => {
			formMobile.reset();
			document.querySelector('.form-done').style.display = 'none';
		} , 10000)
	} )
})

const applicationForm = document.querySelector('.application-form');

applicationForm.addEventListener('submit' , (e) => {
	e.preventDefault();
	const formData = new FormData(applicationForm);
	let loading;
	loading = true;
	fetch('new_application.php' , {
		method: 'post',
		body: formData
	}) 
	.then(response => {
		loading = false;
		if(loading == false) {
			document.querySelector('.application-done').style.display = 'block'
			document.querySelector('.application-error').style.display = 'none'
		}
	})
	.catch(() => {
		document.querySelector('.application-done').style.display = 'none'
		document.querySelector('.application-error').style.display = 'block'
	})
	.finally(() => {
		setTimeout(() => {
			applicationForm.reset();
			document.querySelector('.application-done').style.display = 'none';
		} , 10000)
	})
	
})
