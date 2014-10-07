$(function(){

	// Load images into an array
	var teams = [
	"http://content.sportslogos.net/logos/7/164/thumbs/8e1jhgblydtow4m3okwzxh67k.gif",
	"http://content.sportslogos.net/logos/7/161/thumbs/9ebzja2zfeigaziee8y605aqp.gif",
	"http://content.sportslogos.net/logos/7/162/thumbs/857.gif",
	"http://content.sportslogos.net/logos/7/163/thumbs/g9mgk6x3ge26t44cccm9oq1vl.gif",
	"http://content.sportslogos.net/logos/7/153/thumbs/318.gif",
	"http://content.sportslogos.net/logos/7/155/thumbs/2ioheczrkmc2ibc42c9r.gif",
	"http://content.sportslogos.net/logos/7/154/thumbs/403.gif",
	"http://content.sportslogos.net/logos/7/156/thumbs/970.gif",
	"http://content.sportslogos.net/logos/7/149/thumbs/n0fd1z6xmhigb0eej3323ebwq.gif",
	"http://content.sportslogos.net/logos/7/150/thumbs/15041052013.gif",
	"http://content.sportslogos.net/logos/7/151/thumbs/y71myf8mlwlk8lbgagh3fd5e0.gif",
	"http://content.sportslogos.net/logos/7/152/thumbs/v7tehkwthrwefgounvi7znf5k.gif",
	"http://content.sportslogos.net/logos/7/157/thumbs/570.gif",
	"http://content.sportslogos.net/logos/7/158/thumbs/593.gif",
	"http://content.sportslogos.net/logos/7/159/thumbs/15988562013.gif",
	"http://content.sportslogos.net/logos/7/160/thumbs/1053.gif"
	]

	// Create empty slots for images to go in
	for(var i=0; i<teams.length; i++){
		$('<img class="team" draggable="true" src="">').appendTo("#helmet_container");
	}

	// Put images in emtpy slots
	$('.team').each(function(i){
		$(this).attr("src", teams[i]);
	})
	


	// Make the display div droppable
	$('#display').droppable({
		accept: '.team',
		drop: handleDrop
	});

	// Make the imgs draggable, with its clone being dragged, and snap back to position if not dropped on target
	$('.team').draggable({
		helper: 'clone',
		revert: true
	});

	// Change the display image src to the dropped image src
	function handleDrop(e, ui){
		var selected_src = ui.draggable.attr('src');
		$('#display').attr("src", selected_src);
		ui.helper.hide()

		// ui.draggable.draggable('revert', false);
		// console.log(selected_src);
		
	}

});
	


