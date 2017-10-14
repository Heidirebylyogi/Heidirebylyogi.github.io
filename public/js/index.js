
var enterText = $('#enterText');
var site = $('#site');
var navbar = $('#navbar');

function enterListener() {
    enterText.click(function() {
        site.fadeOut(1000, function() {
            $(this).empty().show();
            navbar.fadeIn(750);

        });
    });

};

$(document).ready(function(){
	var getCookieValue = $.cookie("visit");

	if  (getCookieValue == "true"){
            navbar.fadeIn(750);
	}
	else{
		site.show().fadeIn(750);
		 $.cookie("visit", "true", {expires: 7});

	}
})
enterListener();