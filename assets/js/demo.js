//do not include in your production env
//for demo purpose Only

setTimeout(function () {
    $(".modal:not(.auto-off)").modal("show");
},5000);

(function($) {
    //For demo purpose adding positions to modal for preview

    $(document).on("click","[data-modal-position]",function (e) {
        e.preventDefault();
        //removing previously added classes
        $("#positionModal").removeAttr("class");
        // adding back modal class and the selected position
        $("#positionModal").addClass( "modal fade " + $(this).attr('data-modal-position'));
        //making the modal visible
        $("#positionModal").modal("show");

    })
})(window.jQuery);


$(document).on("click",".open-frame",function (e) {
    if(window.innerWidth > 780){
        e.preventDefault();
        $("#frame").attr("src",$(this).attr("href"));
    }
});
$('a[href^="#license"]').on('click',function (e) {
    e.preventDefault();
    var target = this.hash;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop':  $target.offset().top //no need of parseInt here
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
});

