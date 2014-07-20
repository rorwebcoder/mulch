$(function() {
		$(".categoryNames").hover(
				function () {
						$("ul.subcategories_list").removeClass("sub-open");
						$("#subCategory_" + this.id).addClass("sub-open");
				}, 
				function () {
						//~ $("#subCategory_" + this.id).removeClass("sub-open");
				}
		);
});