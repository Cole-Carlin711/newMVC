using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace VueMVC.Controllers
{
    public class EditPageController : Controller
    {
        // GET: EditPage
        public ActionResult Index()
        {
            ViewBag.Message = "Message from Editor";
            return View();
        }
    }
}