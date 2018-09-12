
using BHLVTDAL.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BHLVT.Models
{
    public class BillViewModel
    {
        public BillViewModel() {
            this.lsoct1 = new List<soct1>() {new soct1() };
            this.soph1 = new soph1();
        }
        public BillViewModel(String stt_rec) {
            var db = new LVTDBContext();
            this.soph1 = db.soph1.Where(x => x.stt_rec == stt_rec).SingleOrDefault();
            this.lsoct1 = this.soph1 != null ? db.soct1.Where(x => x.stt_rec == this.soph1.stt_rec).ToList() : new List<soct1>() { new soct1() };
        }
        public String insertcus { get; set; }
        public String custype { get; set; }
        public soph1 soph1 { get; set; } 
        public List<soct1> lsoct1 { get; set; } 
    }
}