$(document).ready(function () {
    $(".item").hide();
});

$(".toggle-item").mousedown(function(event) {
    $(".item").toggle('slide', {direction: 'left'}, 400);
    if($(".span_toggle-item").text() == "»"){
        $(".span_toggle-item").text("«");
    }else{
        $(".span_toggle-item").text("»")
    }
    });
