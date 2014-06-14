// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function() {
		initializeChangeEvent();
});

function initializeChangeEvent() {
		$("#step1_form #category, #step1_form #sub_category").on('change', function() {
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
}

function selectTab(tabPosition) {
		// Reset currently selected tab.
		$(".action-steps .ca-orange")[0].className = "step ca-grey";
		// Apply selected class to newly position
		$(".action-steps .step")[tabPosition - 1].className = "step ca-orange current-step";
}

// To hide all forms in CreateService page
function hideAllForm() {
		$(".partial_form").each(function(index, formDiv) {
				$(formDiv).hide();
		});
}

function hideForm(form_number) {
		var formId = '#step' + form_number + '_form';
		$(formId).hide();
}

function showForm(form_number) {
		var formId = '#step' + form_number + '_form';
		$(formId).show();
}

function initializeClickEvents() {
		$("#goBackStep2").click(function() {
				backToStep(1);
		});
		$("#skipStep2").click(function() {
				skipStep(2);
		});
		
		$("#goBackStep3").click(function() {
				backToStep(2);
		});
		$("#skipStep3").click(function() {
				skipStep(3);
		});
		
		$("#goBackStep4").click(function() {
				backToStep(3);
		});
}

function backToStep(stepNumber) {
		// Hide current step form
		hideForm(stepNumber + 1);
		// Ex: Back to step-1 means, current step is 2 and vice versa
		selectTab(stepNumber);
		// Show previous step form
		showForm(stepNumber);
}

function skipStep(stepNumber) {
		// Skipping current step. Same as moving to next step.
		hideForm(stepNumber);
		// Select next step title
		selectTab(stepNumber + 1);
		// Show next form
		showForm(stepNumber + 1);
}
