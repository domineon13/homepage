$(".dark-btn").click(
    function(){
        $(".container").toggleClass("dark");
        $(".box").toggleClass("dark");
    }
);

$(".spin-btn").click(
    function() {
        $(".box").toggleClass("spin");
        $(".reveal-btn").show();
    }
)

$(".reveal-btn").click(
    function() {
        //$(".clippy").toggleClass("reveal");
        $(".clippy").css("opacity", "1");
        //$(".reveal-btn").css("display", "none");
        $(".reveal-btn").hide();
    }
);

    $(".clippy").draggable();
