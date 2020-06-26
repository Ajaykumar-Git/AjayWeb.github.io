


$(document).ready(function () {

    $('#ajaxBtn').click(function ()
    {
        //checkUserNameAvail();
        readXml("Data.xml");
    });

    function readXml(xmlFile)
    {
       // alert("XML Reading");
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
                    //$(xml).find('Book').each(function ()
                    //{
                    //    var sTitle = $(this).find('Title').text();
                    //    var sPublisher = $(this).find('Publisher').text();
                    //    alert(sTitle);
                    //});
                    debugger;
                    AutonticateUser(xml);
                },
                error: function () {
                    alert("An error occurred while processing request.");
                }
            });
        });
    }

    function AutonticateUser(xml)
    {
        var Username = $("#txtUsername").val();
        var Password = $("#txtPassword").val();
        var isLogin = false;

        $(xml).find('Users').each(function ()
        {
            var _UserName = $(this).find('UserName').text();
            var _Password = $(this).find('Password').text();
            if (Username == _UserName && Password == _Password)
            {
                isLogin = true;
            }
        });

        if(isLogin)
        {
            alert("Login success !");
            window.location.replace("Home.html");
        }
        else
        {
            alert("Username and password is incorrect !");
        }
    }

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
