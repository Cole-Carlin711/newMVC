using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace VueMVC.Controllers
{
    public class ViewPageController : Controller
    {
        // GET: ViewPage
        public ActionResult Index()
        {
            return View();
        }
    }
}