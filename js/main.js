$(document).ready(function () {
    $("body").mouseleave(function () {
        $("#myPopup").show();
        $(".container").css("background-color", "rgba(204, 204, 204, 0.5)");
    });
    $(".close").click(function () {
        $("#myPopup").hide();
        $("body").css("background-color","transparent");
    });
});