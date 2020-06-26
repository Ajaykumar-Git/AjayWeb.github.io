


$(document).ready(function () {

    $('#ajaxBtn').click(function () {
        //checkUserNameAvail();
        readXml("http://localhost:13911/Data.xml")
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

    function readXml(xmlFile)
    {
        alert("XML Reading");
        debugger;
        $(document).ready(function ()
        {
            $("#dvContent").append("<ul></ul>");
            $.ajax({
                type: "GET",
                url: "Data.xml",
                dataType: "xml",
                success: function (xml)
                {
                    $(xml).find('Book').each(function ()
                    {
                        var sTitle = $(this).find('Title').text();
                        var sPublisher = $(this).find('Publisher').text();
                        alert(sTitle);
                    });
                },
                error: function () {
                    alert("An error occurred while processing XML file.");
                }
            });
        });
    }


});
