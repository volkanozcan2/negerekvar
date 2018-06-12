$(document).ready(function() {
    $("#button").on("click", () => {
        let t = $("textarea").val();
        $.ajax({
            type: "POST",
            url: "https://negerekvar.tk",
            data: { num: t },
            success: (dat) => { console.log("success " + dat) }
        });
    })
});