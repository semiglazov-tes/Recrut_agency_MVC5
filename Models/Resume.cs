using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Resume
    {
        //Идентификационный номер резюме
        public int ResumeID { get; set; }

        //Предполагаемая дожность
        public string Position { get; set; }

        //ФИО соискателя
        public string FIO { get; set; }

        //Возраст
        public int Age { get; set; }

        //Пол
        public string Sex { get; set; }

        // Город проживания
        public string City { get; set; }

        // Образование
        public string Education { get; set; }

        // Желаемая зарплата
        public string Salary { get; set; }

        //  Опыт работы
        public string Expirience { get; set; }


    }
}