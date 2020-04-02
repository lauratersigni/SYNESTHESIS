$(".hoverPic").hover(function(){ //function (creating an event)
	onPic = $(this).attr("data-src"); //on pic means pre exisiting pic 
	offPic = $(this).attr("src") 

	$(this).attr("src",onPic); //when hover image will appear 
	$(this).attr("data-src",offPic); //when hover pre exisiting image will turn off 
	
})

   // create

//$(".shape").click(function(){
//	shape = $(this).attr("id");
 

//$("<div class='elem'></div>")
//		.addClass(shape)
//		.appendTo("body")
//		.draggable()
//		.resizable();
//})



   // taste

var $grid= $('.grid').isotope({
   // options
   itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});


$('.filter button') .on("click", function(){
 	var value = $(this) .attr ('data-name');

	$grid.isotope ({
 		filter: value
});

	})

