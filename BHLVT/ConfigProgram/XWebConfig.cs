using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace BHLVT.ConfigProgram
{
    public class XWebConfig
    {
        public const string ConnectStringName = "WSCHUAN_161812Entities1";
        public static String GetP(String _p) {
            var c = new ConnectionStringSettings();
            //c.Name
            ConfigurationElement[] arr;
            arr = new ConfigurationElement[10];
            ConfigurationManager.ConnectionStrings.CopyTo(arr,0);
            
            return "";
        }
        
    }
}