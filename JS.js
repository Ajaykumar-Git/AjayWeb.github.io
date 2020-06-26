


$(document).ready(function () {

    $('#ajaxBtn').click(function () {
        checkUserNameAvail();
    });

    
    function checkUserNameAvail() {
        var userid = "AJay"//$("#reguser").val();  
        $.ajax({
            type: "POST",
            url: "AjaxCall.aspx/checkUserNameAvail", //It calls our web method  
            contentType: "application/json; charset=utf-8",
            data: "{'iuser':'" + userid + "'}",
            dataType: "json",
            success: function (data) {      
                alert(data.d);
            },
            error: function (d) {
                debugger;

                alert("error" + d);

            }
        });
    }
});
