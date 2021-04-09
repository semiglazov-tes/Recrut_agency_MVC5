using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class JobSeekerAuthentication
    {   //Логин Соискателя
        [Required]
        public string Login { get; set; }

        //Пароль Соискателя
        [Required]
        public string Password { get; set; }

    }
}