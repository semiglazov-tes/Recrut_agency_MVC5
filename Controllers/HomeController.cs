using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        //создаём контекст данных
        ResumeContext db = new ResumeContext();
       
        public ActionResult Index()
        {
            //получаем из БД все резюме
            var resumes= db.Resumes;

            //передаем перечень всех резюме в динамичкое свойстов ViewBag
            ViewBag.Resumes = resumes;

            //возвращаем представление
            return View();
        }

    }
}