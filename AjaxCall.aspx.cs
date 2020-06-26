using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Script.Serialization;
using System.Web.Script.Services;
using System.Web.Services;

public partial class AjaxCall : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    /*[WebMethod(enableSession: true)]
    [ScriptMethod(ResponseFormat = ResponseFormat.Xml)]*/
    [WebMethod]
    public static string checkUserNameAvail(string iuser)
    {
        string is_unique = "false"; 
        try
        {
            return is_unique;
        }
        catch
        {
            return is_unique;
        }
    } 

}