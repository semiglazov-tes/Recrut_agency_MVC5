using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class JobSeekerAccountController : Controller
    {
        //РЕГИСТРАЦИЯ СОИСКАТЕЛЯ
        // Метод возращает представление, в качестве которого выступает форма регистрации Соискателя 
        [HttpGet]
        public ActionResult Register()
        {
            return View();
        }

        // Метод получает на вход данные заполненные в форме регистрации Соискателя
        //Если данные валидны в базу данных добавляется новый пользователь и происходит переадресация на стартовую страницу
        //Если данные не валидны то происходит переадесация на отдельное представление регистрация Соискателя
        [HttpPost]
        public ActionResult Register(JobSeekerRegistration model)
        {   
            if (ModelState.IsValid)
            {
                JobSeeker jobSeeker = null;
                using (JobSeekerContext db = new JobSeekerContext())
                {
                    jobSeeker = db.JobSeekers.FirstOrDefault(JobSeeker => JobSeeker.LastName == model.LastName);
                }
                if (jobSeeker == null)
                {
                    using (JobSeekerContext db = new JobSeekerContext())
                    {
                        db.JobSeekers.Add(new JobSeeker { LastName = model.LastName, FirstName = model.FirstName, Email = model.Email, Password = model.Password });
                        db.SaveChanges();
                        jobSeeker = db.JobSeekers.Where(JobSeeker => JobSeeker.Email == model.Email && JobSeeker.Password == model.Password).FirstOrDefault();
                    }
                    if (jobSeeker != null)
                    {
                        FormsAuthentication.SetAuthCookie(model.Email, true);
                        return RedirectToAction("Index", "Home");
                    }
                }
                else
                {
                    ModelState.AddModelError("", "Пользователь с таким логином уже существует");
                }
             }
             return View("Register");                         
        }
        //АУТЕНФИКАЦИЯ СОИСКАТЕЛЯ
        // Метод возращает представление, в качестве которого выступает форма регистрации Соискателя
        [HttpGet]
        public ActionResult Login()
        {
            return View();
        }
        // Метод получает на вход данные заполненные в форме логина Соискателя
        //Если пользователь с введеным логином есть в базе данных происходит присвоение куки и переадресация на стартовую страницу, где будет отображаться логин Соискателя
        //Если пользователь с введеным логином отсутствует в базе данных переадесация на отдельное представление логин Соискателя
        [HttpPost]
        public ActionResult Login(JobSeekerAuthentication model)
        {
            if (ModelState.IsValid)
            {
                JobSeeker jobSeeker = null;
                using (JobSeekerContext db = new JobSeekerContext())
                {
                    jobSeeker = db.JobSeekers.FirstOrDefault(JobSeeker => JobSeeker.Email == model.Login && JobSeeker.Password == model.Password);
                }
                if (jobSeeker != null)
                {
                    FormsAuthentication.SetAuthCookie(model.Login, true);
                    return RedirectToAction("Index","Home");
                }

            }
            return View("Login");
        }
        public ActionResult Logoff()
        {
            FormsAuthentication.SignOut();
            return RedirectToAction("Index", "Home");
        }
    }
}