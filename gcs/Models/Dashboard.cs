using Microsoft.AspNetCore.Mvc;

//namespace gcs.Models
//{
//    public class Dashboard : Controller
//    {
//        public IActionResult Index()
//        {
//            return View();
//        }
//    }
//}

// gcs/Models/Dashboard.cs
namespace gcs.Models
{
    public class Dashboard
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
    }
}