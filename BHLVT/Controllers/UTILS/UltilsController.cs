using BHLVT.Models;
using System; using System.Collections.Generic; using System.Web.Script.Serialization; namespace BHLVT.Controllers {     public class UltilsController : CommonController     {         BHLVTBLL.Services.Utils.UltilsController uc;         public UltilsController() {
            uc = new BHLVTBLL.Services.Utils.UltilsController();         }                  public String CalDate()         {             try {
                return uc.CalDate(Request);             }             catch {                 return new JavaScriptSerializer().Serialize(new { data = DateTime.Now.ToString("dd/MM/yyyy") });             }         }

        /// <summary>         /// This Format ("{UserName}{yyMMdd}{number_increase}")         /// </summary>         /// <returns></returns>         public String GetSoDH() {
            return uc.GetSoDH();         }       //                  public String Format1() {             return "";         }          public String GetTenVT() {             try {                 return uc.GetTenVT();             } catch {                 var l = new List<Object>();                 return new JavaScriptSerializer().Serialize(new List<Object> { new { id = "*", text = "Error get items" } });             }                     }         public String SearchVT() {             return uc.SearchVT(Request);         }         public String GetDVT() {
            return uc.GetDVT(Request);         }          /// <summary>         /// Function exec Get Price Item          /// Note:Param so_luong,so_luong3 can modify ....         /// </summary>         /// <returns></returns>         public String GetGia() {
            return uc.GetGia(Request);         }         public String GetInfo() {
            return uc.GetInfo(Request);         }         public String GetCus() {
            return uc.GetCus(Request);         }                  public String GetDKLoc()         {             return uc.GetDKLoc();         }         public String DelDH() {             return uc.DelDH(Request);         }         public String GetValueCombo() {             return "";         }         public String GenerateConstructorDBClassHtml() {
            return uc.GenerateConstructorDBClassHtml();
        }
        /*public String Getdatagrid_data1() {

  return ;
}*/
        public String GetDatePicker() {
            return uc.GetDatePicker(Request);
        }         public String GetListMaGD() {
            return uc.GetListMaGD();
        }          public String GetListInputData() {
            var _arr = new List<InputData>();
            for (var i = 0; i < 3; i++) {
                _arr.Add(new InputData() { name = "name" + i, birthday = "birthday" + i });
            }
            return new JavaScriptSerializer().Serialize(_arr);
        } 

    } }