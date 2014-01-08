// Toggle Nav JS

var navBottom = document.querySelector('.nav-top');

document.querySelector('.nav-btn').addEventListener('click', function(e) {
	
	e.preventDefault();
	
	if (navBottom.getAttribute('data-state') == 'expanded'){
		
		navBottom.setAttribute('data-state', 'collapsed');
		overlay.setAttribute('class', 'overlay-off');

			
	}else{
		
		navBottom.setAttribute('data-state', 'expanded');
	    overlay.setAttribute('class', 'overlay-on');
		
	}

});
