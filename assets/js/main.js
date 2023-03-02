// $(function() {
// 	// Reference the tab links.
// 	const vertical = $('#card-end');
	
// 	// Handle link clicks.
// 	vertical.click(function(event) {
// 		var $this = $(this);
		
// 		// Prevent default click behaviour.
// 		event.preventDefault();
		
// 		// Remove the active class from the active link and section.
// 		$('#carded active, section.column-section').removeClass('active');
		
// 		// Add the active class to the current link and corresponding section.
// 		$this.addClass('active');
// 		$($this.attr('href')).addClass('active');
// 	});
// });

// $(document).ready(function() {
//     if($("#card-end").is(":checked")){
//         $("#vertical").addClass("checked");
//     }
//     });

$("input[type=radio]").change(function () {
    if ($(this).val() == "company") {
        $(".column-section").addClass("vertical")

    } else if ($(this).val() == "member") {
        $(".column-section").removeClass("vertical")
    }
});

