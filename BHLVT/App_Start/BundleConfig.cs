using System.Web;
using System.Web.Optimization;

namespace BHLVT
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Themes/AdminLTE/jquery").Include(
                        "~/Themes/AdminLTE/bower_components/jquery/dist/jquery.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));
            
            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(

                      "~/public/js/bootstrap.min.js",
                      "~/Scripts/respond.js"));
            bundles.Add(new ScriptBundle("~/bundles/modules").Include(
                "~/public/jq/jquery.easyui.min.js",
                "~/public/js/NumberFormat154.js",
                "~/public/js/jquery.inputmask.bundle.js"));
            //"~/public/js/bootstrap-datepicker.js",
            // "~/public/js/notify.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/public/css/jquery-ui.min.css",
                      "~/public/css/bootstrap.css",
                      "~/public/font/font-awesome/css/font-awesome.css"
                      ));
            bundles.Add(new StyleBundle("~/Content/modules").Include(
                "~/public/jq/themes/default/easyui.css"
                ));
            bundles.Add(new StyleBundle("~/Themes/AdminLTE/css").Include(
               "~/Themes/AdminLTE/bower_components/bootstrap/dist/css/bootstrap.min.css",
               "~/Themes/AdminLTE/bower_components/font-awesome/css/font-awesome.min.css",
               "~/Themes/AdminLTE/bower_components/Ionicons/css/ionicons.min.css",
               "~/Themes/AdminLTE/dist/css/AdminLTE.min.css",
               "~/Themes/AdminLTE/plugins/iCheck/square/blue.css",
               "~/Themes/AdminLTE/dist/css/skins/_all-skins.min.css"
               ));
            bundles.Add(new ScriptBundle("~/Themes/AdminLTE/js").Include(
               // "",
                "~/Themes/AdminLTE/bower_components/jquery-ui/jquery-ui.min.js",
                "~/Themes/AdminLTE/bower_components/bootstrap/dist/js/bootstrap.min.js",
                "~/Themes/AdminLTE/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js",
                "~/Themes/AdminLTE/bower_components/jquery-slimscroll/jquery.slimscroll.min.js",
                "~/Themes/AdminLTE/bower_components/fastclick/lib/fastclick.js",
                "~/Themes/AdminLTE/dist/js/adminlte.min.js"
                ));
             bundles.Add(new ScriptBundle("~/Themes/AdminLTE/js/datepicker").Include(
                 //"",
                "~/Themes/AdminLTE/bower_components/jquery-sparkline/dist/jquery.sparkline.min.js",
                 "~/Themes/AdminLTE/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js",
                 "~/Themes/AdminLTE/plugins/jvectormap/jquery-jvectormap-world-mill-en.js",
                 "~/Themes/AdminLTE/bower_components/jquery-knob/dist/jquery.knob.min.js",
                 "~/Themes/AdminLTE/bower_components/moment/min/moment.min.js",
                 "~/Themes/AdminLTE/bower_components/bootstrap-daterangepicker/daterangepicker.js",
                 "~/Themes/AdminLTE/bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"
                 ));
            //bundles.Add(new ScriptBundle("~/Themes/AdminLTE/js/"));

             bundles.Add(new ScriptBundle("~/Themes/AdminLTE/icheck").Include(
                 "~/Themes/AdminLTE/plugins/iCheck/icheck.min.js"
                 ));
            bundles.Add(new StyleBundle("~/Themes/customizeui/css").Include(
                "~/Themes/easyui/themes/default/easyui.css",
                "~/Themes/easyui/themes/icon.css"
                ));
            bundles.Add(new ScriptBundle("~/Themes/customizeui/js").Include(
                "~/Themes/easyui/jquery.easyui.min.js"));
        }
    }
}
