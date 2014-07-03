// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function() {		
  $("#innerCategoryForm #category").on('change', function() {
				if (this.value == "") {
						// No action.
				}
				else {
						// Trigger ajax to update sub category
						$.ajax({
								type: "POST",
								url: populateInnerCategoryUrl,
								data: { category_id: this.value }
						}).done(function( msg ) {
								// Success
						});
				}
		});
});
