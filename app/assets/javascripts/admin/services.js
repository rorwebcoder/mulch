// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function() {
  // Published dropdown event
		initiateSelectEvent();
		
  $("#new_service #category, #new_service #sub_category, #serviceForm #category, #serviceForm #sub_category").on('change', function() {
				if (this.value == "") {
						// No action.
				}
				else {
						// Trigger ajax to update sub category
						$.ajax({
								type: "POST",
								url: populateCategoryUrl,
								data: { category_id: this.value, purpose: this.id }
						}).done(function( msg ) {
								// Success
						});
				}
		});
});


function initiateSelectEvent() {
		$("#published_value").on('change', function() {
				// Trigger ajax to update published status
				$.ajax({
						type: "POST",
						url: publishedStatusUpdUrl,
						data: { service_id: this.value, purpose: $("#published_value :selected").text() }
				}).done(function( msg ) {
						// Success
				});
		});
}

