// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function() {
		if (typeof(serviceShowPage) != "undefined") {
				serviceShowJs();
				orderButtonClick();
		}
		initializeChangeEvent();
		if (typeof(displayStepNumber) != "undefined" && (displayStepNumber > 0)) {
				loadStep(displayStepNumber);
		}
});

function loadStep(stepNumber) {
		selectTab(stepNumber);
		hideAllForm();
		showForm(stepNumber);
		
		// Activate click events
		initializeClickEvents();
}

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


// Javascript for service show page
function serviceShowJs() {
		$( ".additional_services,.extras_dropdown,.extras_checkbox" ).change(function() {
				var additional_service = $(".additional_services").val()
				extra_v = []
				$.each($(".extras_checkbox:checked"), function( index, value ) {
						cid =  $(value).attr("id") .split("_")[1]
						extra_v.push($("#cost_"+cid).val())
				});

				var total = 0;
				for (var i = 0; i < extra_v.length; i++) {
						total += extra_v[i] << 0;
				}
				total += parseInt(additional_service)
				$(".order_extra_button").val("Order Now (INR "+total+")")
				$(".order_extra_anchor").text("Order Now (INR "+total+")")
		});
}

// Add click event to order button
function orderButtonClick() {
		$("#orderButtonTop").click(function() {
				$("#chartsForm").submit();
		});
}