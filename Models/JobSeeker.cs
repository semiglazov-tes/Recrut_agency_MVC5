using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class JobSeeker
    {
        //Идентификационный номер соискателя
        public int JobSeekerID { get; set; }

        //Фамилия соискателя
        public string LastName { get; set; }

        //Имя соискателя
        public string FirstName { get; set; }

        //Электронная почта
        public string Email { get; set; }

        //Пароль
        public string Password { get; set; }
    }
}