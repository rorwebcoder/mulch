// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function() {
  $(".panel_contents #category, .panel_contents #sub_category").on('change', function() {
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
