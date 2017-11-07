// 1. click on ".button"
// 3. randomly select an oject
// 3. place oject inside of ".content"

$('.button').click(function() {
	var objects = ['assets/img/bunny.jpg', 
					'assets/img/cat.jpg',
					'assets/img/dog.jpg',
					'assets/img/sloth.jpg',
					'assets/img/circle.png',
					'assets/img/triangle.png',
					'assets/img/square.jpg',
					'Meow',
					'Woof',
					'Meep',
					'...'
				  ];

	var colors = ['red', 
				  'green', 
				  'blue'
				];

	var random_object_number = Math.floor (Math.random() * objects.length);
	var random_colors_number = Math.floor(Math.random() * colors.length);
	var object_to_use = objects[random_object_number];
	var colors_to_use = colors[random_colors_number];
	
	var result = '';

	if (random_object_number < 7) {
		result = '<div class="object"><img src="' + object_to_use + '"/>';
	} else {
		result = '<div class= "object ' + colors_to_use + '">' + object_to_use + '</div>';
	}	

$('.content').prepend(result);

});