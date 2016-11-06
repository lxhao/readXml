$(document).ready(function () {
    //隐藏所有元素
    $("#hideAll").click(function () {
        $("*").hide();
    });

    //点击隐藏该段落
    $("p").click(function () {
        $(this).hide();
    });

    $("#hideFir").click(function () {
        $("ul li:first").hide();
    });

    $("#hideColor").click(function () {
        $("[color]").hide();
    });

    // $("#mouseMoved").mouseenter(function () {
    //     alert("鼠标来了");
    // });
    //
    // $("#mouseMoved").mouseleave(function () {
    //     alert("鼠标走了");
    // });

    $("#clickToggle").click(function () {
        $("p").toggle();
    });

    $("#flip").mouseenter(function () {
        $("#panel").slideDown();
    });

    $("#flip").mouseleave(function (event) {
            var div = document.getElementById("panel");
            var x = event.clientX;
            var y = event.clientY;
            var divx1 = div.offsetLeft;
            var divy1 = div.offsetTop;
            var divx2 = div.offsetLeft + div.offsetWidth;
            var divy2 = div.offsetTop + div.offsetHeight;
            if (x < divx1 || x > divx2 || y < divy1 || y > divy2) {
                $("#panel").slideUp();
            }
        }
    );
    $("#panel").mouseleave(function (event) {
            var div = document.getElementById("flip");
            var x = event.clientX;
            var y = event.clientY;
            var divx1 = div.offsetLeft;
            var divy1 = div.offsetTop;
            var divx2 = div.offsetLeft + div.offsetWidth;
            var divy2 = div.offsetTop + div.offsetHeight;
            if (x < divx1 || x > divx2 || y < divy1 || y > divy2) {
                $(this).slideUp();
            }
        }
    );
});