using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class JobSeekerRegistration
    {
        
        //фамилия соискателя
        [Required(ErrorMessage ="Поле должно быть установлено")]
        public string LastName { get; set; }

        //Имя соискателя
        [Required(ErrorMessage = "Поле должно быть установлено")]
        public string FirstName{ get; set; }

        //Почта
        [Required(ErrorMessage = "Поле должно быть установлено")]
        public string Email { get; set; }

        //Пароль
        [Required(ErrorMessage = "Поле должно быть установлено")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

    }
}
