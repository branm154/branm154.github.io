// 1. click on ".button"
// 3. randomly select an oject
// 3. place oject inside of ".content"


$('.button').click(function() {
	var objects = ['assets/img/tarot1.jpg', 
					'assets/img/tarot3.jpg',
					'assets/img/tarot4.jpg',
					'assets/img/tarot5.jpg',
					'assets/img/tarot8.jpg',
					'assets/img/tarot9.jpg',
					'assets/img/tarot10.jpg',
					'assets/img/tarot11.jpg',
					'assets/img/tarot12.jpg',
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

	if (random_object_number < 10) {
		result = '<div class="object"><img src="' + object_to_use + '"/>';
	} else {
		result = '<div class= "object ' + colors_to_use + '">' + object_to_use + '</div>';
	}	

$('.content').prepend(result);

});