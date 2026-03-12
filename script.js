$(document).ready(function () {
    $(".gallery-img").click(function () {
        var imgSrc = $(this).attr("src");
        var $modalImg = $("#modalImage");
        $modalImg.attr("src", imgSrc);
        $modalImg.css({
            "width": "70%",
            "height": "50%",
            "object-fit": "cover" 
        });

        var modalElement = document.getElementById('imageModal');
        var myModal = bootstrap.Modal.getOrCreateInstance(modalElement); 
        myModal.show();
    });
});