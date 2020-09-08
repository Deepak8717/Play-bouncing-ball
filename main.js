let play = document.querySelector('#play');
let stop = document.querySelector('#stop');
let change = document.querySelector('#change');
let coconut = document.querySelector('.coconut');


play.addEventListener('click',function(){
	coconut.classList.remove('colorJump');
	coconut.classList.add('active');
});

stop.addEventListener('click', function(){
	coconut.classList.remove('active');
	coconut.classList.remove('colorJump');
});

change.addEventListener('click', function(){
	coconut.classList.remove('active');
	coconut.classList.add('colorJump');
});

