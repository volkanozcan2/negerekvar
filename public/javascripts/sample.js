$(document).ready(function() {
    $("#button").on("click", () => {
        let t = $("textarea").val();
        $.ajax({
            type: "POST",
            url: "http://localhost:8080",
            data: { num: t },
            success: (dat) => { console.log("success " + dat) }
        });
    })
});