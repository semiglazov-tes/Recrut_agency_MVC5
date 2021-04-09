using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace WebApplication1.Models
{
    public class ResumeContext : DbContext
    {
        public DbSet<Resume> Resumes { get; set; }
    }

    public class ResumeDBInitializer : DropCreateDatabaseAlways<ResumeContext>
    {
        protected override void Seed(ResumeContext db)
        {
            db.Resumes.Add(new Resume { Position = "тестировщик",  FIO = "Шишкина", Age = 30 , City= "Киров",Education="высшее", Sex="женский", Expirience="10",Salary="100"});
            db.Resumes.Add(new Resume { Position = "аналитик данных", FIO = "Лимонов", Age = 30, City = "Киров", Education = "высшее", Sex = "мужской",
                Expirience = "8",Salary="80" });
            db.Resumes.Add(new Resume { Position = "python разработчик", FIO = "Семиглазов", Age = 30, City = "Киров", Education = "высшее", Sex = "мужской",
                Expirience = "7",Salary="70" });
            base.Seed(db);
        }
    }

}