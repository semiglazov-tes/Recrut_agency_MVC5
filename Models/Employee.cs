using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Employee
    {
        //Идентификационный номер организации
        public int EmployeeID { get; set; }

        //Электронная почта
        public string Email { get; set; }

        //Пароль
        public string Password { get; set; }

        //Название организации
        public string OrganisationName { get; set; }

        //Имя сотрудника
        public string FirstName { get; set; }

        //Отчество соискателя
        public string SecondName { get; set; }

        //Дата рождения
        public DateTime Date { get; set; }

        //Пол
        public string JobSeekerSex { get; set; }
    }
}