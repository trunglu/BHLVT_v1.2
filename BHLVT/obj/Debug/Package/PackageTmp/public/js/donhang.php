<?php
//session_start ();
//$url = 'http://' . $_SERVER ['SERVER_NAME'];
session_start();
error_reporting(E_ALL & ~E_WARNING & ~E_NOTICE); // hien thi tat ca loi
$url = 'http://' . $_SERVER ['SERVER_NAME'];

include('includes/functions.php');
checkadmin('', '');
//Thiết lập thời gian cho ứng dụng.
//khoaUngDung();
checkUserUpdate($_SESSION['sa_username']);
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <LINK href="includes/main.css" type=text/css rel=stylesheet>
            <link rel="stylesheet" type="text/css" href="jq/themes/default/easyui.css"/>
            <link rel="stylesheet" type="text/css" href="css/jquery-ui.min.css"/>
            <!--link  rel="stylesheet" href="css/bootstrap.min.css"/-->
            <link rel="stylesheet" href="css/datepicker.css">
                <link rel="stylesheet" href="css/bootstrap.css">
                    <link rel="stylesheet" href="css/style.css"/>
                    <script src="js/jquery-1.9.1.min.js"></script>
                    <script src="js/function_del.js"></script>

                    <script type="text/javascript" src="jq/jquery.min.js"></script>
                    <script src="js/bootstrap.min.js" type="text/javascript"></script>
                    <script type="text/javascript" src="jq/jquery.easyui.min.js"></script>
                    <script type="text/javascript" src="includes/NumberFormat154.js"></script>
                    <script src="js/bootstrap-datepicker.js"></script>
                    <!--day la chon Ngay date-->
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
                    <title>Sales Online Wavesoft</title>
                    <style>
                        body{
                           /* padding: 70px 0px;*/
                        }
                        .table > thead > tr > th{
                        padding: 3px 5px;
                        }
                         .table > tbody > tr > td{
                        padding: 1px 0px;
                        }
                    </style>
                    <script type="text/javascript">
                        $(".active").hover(function () {
                            $(".sub-menu").show(5000);
                        });
                    </script>
                    </head>
                    <body>
                        <?php include 'menubar.php'; ?>
                        <div class="container">
                            <div class="row">
                                <form action="xulydonhang.php" method="post" class="form-horizontal" id="form_donhang"  name="frm_main">
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <input type="hidden" class="form-control" name="stt_rec" id="stt_rec" value=""/>
                                        <div class="col-sm-12 col-md-6 col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <label for="khachhang" class="col-sm-4 control-label">Khách Hàng</label>
                                                <div class="col-md-6 col-sm-6" id="cus_change">
                                                    <input id="cccus" name="cccus" onblur="onChangeCus()" class="easyui-combobox form-control" data-options="valueField:'id',textField:'text'" onclick="hienthi();" style="height:30px;" >	
                                                        <input type="hidden" id="cccus_tenkh" name="cccus_tenkh" value=""/>
                                                </div>
                                            </div>
                                            <!-- onblur="onChangeCus" -->
                                            <div class="form-group">
                                                <label for="diachi" class="col-sm-4 control-label">Địa Chỉ</label>
                                                <div class="col-sm-7">
                                                    <input type="text" class="form-control" name="diachi" id="diachi" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="dienthoai" class="col-sm-4 control-label">Điện Thoại</label>
                                                <div class="col-sm-7">
                                                    <input type="text" class="form-control" name="dienthoai" id="dienthoai" />
                                                </div>        
                                            </div>
                                            <div class="form-group">
                                                <label for="nguoigiaodich" class="col-sm-4 control-label">Người Giao Dịch</label>
                                                <div class="col-sm-7">
                                                    <input type="text" class="form-control" id="nguoigiaodich" name="nguoigiaodich" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="diengiai" class="col-sm-4 control-label">Diễn Giải</label>
                                                <div class="col-sm-7">
                                                    <input type="text" class="form-control" id="diengiai" name="diengiai"/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label id="nhanvien" for="nhanvien" class="col-sm-4 control-label">Nhân Viên</label>
                                                <div class="col-sm-7">
                                                    <input disabled type="text" value='<?php echo $_SESSION['sa_username'] ? $_SESSION['sa_username'] : 'nhan vien' ?>' class="form-control" id="nhanvien" name="nhanvien" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-sm-6 col-md-6 col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <label for="sodonhang" class="col-sm-4 control-label">Số Đơn Hàng</label>
                                                <div class="col-sm-8">
                                                    <input type="text" readonly
                                                           class="form-control" name="sodonhang" id="sodonhang" />
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label for="ngaylap" class="col-sm-4 control-label">Ngày Lập</label>
                                                <div class="col-sm-8">

                                                    <input class="form-control" name="ngaylap"
                                                           id="ngaylap"/>

                                                </div>

                                            </div>

                                            <div class="form-group">
                                                <label for="hantt" class="col-sm-4 control-label">Hạn TT</label>
                                                <div class="col-sm-4">
                                                    <input type="text" class="form-control" id="songaytt" style="" value='0'
                                                           name="songaytt" />

                                                </div>
                                                <div class="col-sm-4">
                                                    <input type="text" class="form-control" id="ngaytt"
                                                           name="ngaytt" placeholder="Ngày Hạn Thanh Toán" style="" >

                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label for="loaidonhang" class="col-sm-4 control-label">Loại Đơn Hàng</label>
                                                <div class="col-sm-4">
                                                    <select id="loaidonhang" name="loaidonhang" class="easyui-combobox form-control" style="height:30px;">
                                                        <option value="0">Giao Ngay</option>
                                                        <option value="1">Giao 24h</option>
                                                        <!--<option value="2">Giao Hẹn</option>-->
                                                    </select>
                                                </div>
                                              <!--  <label for="khuyenmai" class="col-sm-3 control-label">Khuyến Mãi</label>
                                                <div class="col-sm-1">
                                                    <input type="checkbox" name="khuyenmai" class="form-control" value="khuyenmai" />
                                                </div>-->

                                            </div>
                                            <div class="form-group">    
                                                <label for="trangthaidonhang" class="col-sm-4 control-label">Trạng Thái</label>
                                                <div class="col-sm-4">
                                                    <select id="trangthaidonhang" name="trangthaidonhang" class="easyui-combobox form-control" style="height:30px; ">
                                                        <option name="trangthaidonhang" value="1">Thực hiện</option>
                                                        <option name="trangthaidonhang" value="2">Hoàn Thành</option>
                                                    </select>
                                                </div>
                                            </div>


                                            <div class="form-group">
                                                <label for="nocu" class="col-sm-4 control-label">Nợ Cũ</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="nocu" name="nocu"  onkeyup="onChangeNocu();" style="text-align:right;" value="0"/>

                                                </div>
                                            </div>
                                            <div class="form-group">

                                                <!-- <label for="tlchietkhau" class="col-sm-4 control-label">Tỉ Giá: </label>-->
                                                <div class="col-sm-4">

                                                    <input type="hidden" class="form-control" name="tigia" onkeyup="changeTG()" onblur="changeTG()" onclick="changeTG()" value="1" id="tigia" />
                                                </div>


                                            </div>

                                        </div>

                                    </div>
                                    <div class="col-sm-12 col-xs-12 col-lg-12 col-md-12">

                                        <div class="table-responsive">
                                        <input type="hidden" id="flag_check" value="1" />
                                            <table class="tablesorter table" id="dataTable" style="text-align: center;">
                                                <thead>
                                                    <tr > 
                                                        <th></th>
                                                        <th>NCC </th>
                                                        <th>Nhóm Hàng </th>
                                                        <th>Tên Hàng </th>
                                                        <th>ĐVT </th>
                                                        <th>S.L </th>
                                                        <th>K.M </th>
                                                        <th>Đơn Giá </th>
                                                        <th>% CK </th>
                                                        <th>Tiền CK </th>
                                                        <th>Thành Tiền </th>

                                                    </tr>
                                                </thead>
                                                <tbody id="tbody_soct1">
                                                    <tr>

                                                        <td>
                                                            <input type="checkbox" name="chk" style="/*width: 80px;*/"/>
                                                        </td>
                                                        <td>
                                                            <input type="hidden" value="" id="ccheso0" />
                                                            <input id="ccsup0" onblur="onChangeSup(0)" name="ccsup[]"  class="easyui-combobox" data-options="valueField:'id',textField:'text'" value="Tên NCC" style="height:30px;width: 80px;" />
                                                        </td>

                                                        <td >
                                                            <input id="ccnhomhang0" name="ccnhomhang[]" class="easyui-combobox" data-options="valueField:'id',textField:'text'" value="Nhóm Hàng" style="height:30px;width: 100px;" />
                                                        </td>
                                                        <td>
                                                            <input id="cctenhang0" name="cctenhang[]" class="easyui-combobox" data-options="valueField:'id',textField:'text'" value="Tên Hàng" style="height:30px;" />
                                                        </td>
                                                        <td>
                                                            <input id="ccdvt0" name="ccdvt[]" class="easyui-combobox" data-options="valueField:'id',textField:'text'" value="Đơn VT" style="width: 80px;height: 30px;" />
                                                        </td>
                                                        <td> 
                                                            <input type="text" maxlength="3" size="3"  class="form-control"  onblur="onChangeSoLuong(soluong0, 0)" onkeyup="onChangeSoLuong(soluong0, 0)" name="soluong[]" id="soluong0" style="text-align:center; width: 50px"/>
                                                        </td>
                                                        <td>
                                                            <input type="checkbox" class="check-box-km" name="check_km0" value="0" style="width: 50px;" id="check_km0"/>
                                                        </td>
                                                        <td> 
                                                            <input type="text"  class="form-control" onkeyup="onChangeGia(dongia0, 0)" name="dongia[]" id="dongia0"  style="text-align:right;width:100px;"/>
                                                        </td>
                                                        <td> 
                                                            <input  required onclick="changeCK(chietkhau0, 0)" onblur="changeCK(chietkhau0, 0)" onkeyup="changeCK(chietkhau0, 0)" name="chietkhau[]" id="chietkhau0" value="0"  style="text-align:right;width:60px;height: 34px"/>
                                                        </td>
                                                        <td> 
                                                            <input type="text"  class="form-control"  readonly onclick="" onblur="" onkeyup="" name="tienck[]" id="tienck0" value="0"  style="text-align:right;width:100px;"/>
                                                        </td>
                                                        <td>
                                                            <input type="text" class="form-control" readonly name="thanhtoan[]" id="thanhtoan0" value="0" style="text-align:right;width:130px;"/>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                        <INPUT class="btn btn-default" type="button" value="Thêm Dòng" onclick="addRow('dataTable')" />
                                        <INPUT class="btn btn-default" type="button" value="Xóa Dòng" onclick="deleteRow('dataTable')" />

                                    </div>
                                    <div class="form-group">
                                        <div style="float:right;" class="col-sm-offset-2 col-sm-4">
                                            <div class="form-group">
                                                <label for="tongcong" class="col-sm-5 control-label">Tổng Cộng:</label>
                                                <div class="col-sm-7">
                                                    <input type="text" class="form-control" readonly required name="tongcong" style="text-align:right;font-weight: bold;"
                                                           id="tongcong" />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div style="float:right;" class="col-sm-offset-2 col-sm-4">
                                            <div class="form-group">
                                                <div class="col-sm-8">
                                                    <input name="btnUpdate" id="btnUpdate"  onclick="checkSlTon()"   value="Cập Nhật" type="button" class="btn btn-default" hidden="hidden" />
                                                    <!-- <button id="btnSubmit" name="btnSubmit" type="button" class="btn btn-default" onclick="SaveDH();">Lưu DH</button>-->
                                                    <input id="btnSubmit" name="btnSubmit" type="button" onclick="checkSlTon()"    class="btn btn-success" value="Lưu ĐH" <?php echo checkKhoaDH() ? 'disabled="disabled"' : ''; ?> />
                                                    <!--<button name="btnHuy" type="button" class="btn btn-default" onclick="HuyDH();">Huy </button>-->
                                                    <input name="btnHuy" type="button" onclick="huydh()" class="btn btn-danger" value="Hủy" <?php echo checkKhoaDH() ? 'disabled="disabled"' : ''; ?>/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </form>

                            </div>
                            <hr/>
                            <h3 style="text-align: center;">Danh sách các đơn hàng</h3>
                            <!--Hiển thị danh sách Khách Hàng-->
                            <div class="row">
                                <form name="frm_search">
                                    <div class="" style="float: right;">
                                        <input type="button" value="Lọc" id="btn_loc" class="btn btn-default" onclick="locdh()"/>
                                    </div>
                                    <div class="col-md-2" style="float: right;display: none;" id="ele_txt_loc">
                                        <input type="text" id="txt_val_loc" name="txt_val_loc" placeholder="Nhập thông tin cần lọc" style="height: 32px" class="form-control" />
                                    </div>
                                    <div class="col-md-3" style="float: right;display: none;" id="ele_chk_tt">
                                        <label class="radio-inline"><input type="radio" name="tt" value="1" checked>Thực hiện</label>
                                        <label class="radio-inline"><input type="radio" name="tt" value="2">Hoàn Thành</label>
                                    </div>
                                    <div class="col-md-4 form-inline" style="float: right;" id="ele_txt_loc_ngay">
                                        <div class="form-group" style="float: right;">
                                            <label for="todate"> Đến </label> 
                                            <input name="todate"
                                                   id="todate" style="width: 100px;height: 32px;" class="form-control"/>

                                        </div>
                                        <div class="form-group" style="float: right;">
                                            <label for="fromdate">Từ: </label>  <input  name="fromdate"
                                                                                        id="fromdate" style="width: 100px;height: 32px;" class="form-control"/>

                                        </div>



                                    </div>

                                    <div class="col-md-2 " style="float: right;">
                                        <div>
                                            <input id="dkloc" name="dkloc" value="Lọc" onblur="onChangedkloc()" style="height: 32px;">
                                        </div>
                                </form>

                            </div>


                        </div>
                        <br/>
                        <div id="show_list_soph1">
                            <?php include('show_list_soph1.php') ?>
                        </div>

                        </div>
                        <script src="js/process_donhang.js" type="text/javascript"></script>
                        <!-- Load jQuery and bootstrap datepicker scripts -->
                        <script type="text/javascript">
                                                // When the document is ready
                                                $(document).ready(function () {

                                               /*      $('#btnSubmit').on('click',function(){
                                                        //alert("123456");
                                                        checkSlTon();
                                                       // SaveDH();

                                                        }); */
                                                   /*  $('#btnSubmit').off().on('mouseup',function(){
                                                        //alert("123456");
                                                       // checkSlTon();
                                                        SaveDH();

                                                        });  */
                                                    $('#ngaylap').datepicker({
                                                        format: "dd/mm/yyyy"
                                                    });

                                                    $("#ngaylap").datepicker().datepicker("setDate", new Date());
                                                    $('#ngaytt').datepicker({
                                                        format: "dd/mm/yyyy"
                                                    });

                                                    $("#ngaytt").datepicker().datepicker("setDate", new Date());
                                                    $('#fromdate').datepicker({
                                                        format: "yyyy/mm/dd"
                                                    });

                                                    $("#fromdate").datepicker().datepicker("setDate", new Date());
                                                    $('#todate').datepicker({
                                                        format: "yyyy/mm/dd"
                                                    });

                                                    $("#todate").datepicker().datepicker("setDate", new Date());

                                                });
                        </script>

                        <div id="debug_">

                        </div>


                    </body>
                    </html>

