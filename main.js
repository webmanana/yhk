if (Foundation.MediaQuery.atLeast('large')) {

}
$('.product_mob_price').on(function(e) {
    $('[data-loading-start]').click(function() {
      $(this).addClass('hide');
      $(this).parent().find('[data-loading-end]').removeClass('hide');
      setTimeout(function() {
        $('[data-loading-end]').addClass('hide');
        $('[data-success-message]').removeClass('hide')
    }, 800)
    });
});

jQuery(document).ready(function(){
    // This button will increment the value
    $('[data-quantity="plus"]').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('data-field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(1);
        }
        if (currentVal == 1) {
            // Decrement one
			$(".minus").removeClass("disabled");
        }
    });
    // This button will decrement the value till 0
    $('[data-quantity="minus"]').click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('data-field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());


        if (currentVal == 2) {
			$(".minus").addClass("disabled");
        }
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 1) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
			$(".minus").attr("disabled");
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(1);
        }
    });
});
