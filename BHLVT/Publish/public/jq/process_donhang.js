/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



// hide or show btnUpdate
$(document).ready(function () {
    $("#btnUpdate").hide();
    setwidthcccus();
    loadBackgroud();

    $('[name=khuyenmai]').on('change', function () {
        khuyenmai();
    });
    try {
        initCombo('ccnhomhang0');
    } catch (e) {
        console.log("Lỗi khởi tạo combo danh sách nhóm hàng..");
    }
    try {
        onInitCus();
    } catch (e) {
        console.log("Lỗi khởi tạo danh sách khách hàng..");
    }

    try {
        onInitSup('ccsup0', 0);
    } catch (e) {
        console.log("Lỗi khởi tạo danh sách nhà cung cấp..");
    }
    try {
        onInitDkLoc();
    } catch (e) {
        console.log("Lỗi khởi tạo danh sách điều kiện lọc..");
    }
    try {
        initComboTenHang('cctenhang0');
    } catch (e) {
        console.log("Lỗi khởi tạo danh sách tên hàng hóa..");
    }
    try {
        initComboDVT('ccdvt0');
    } catch (e) {
        console.log("Lỗi khởi tạo danh sách đơn vị tính ..");
    }
    try {
        initNumberCK('chietkhau0', 0);
    } catch (e) {
        console.log("Lỗi khởi tạo input chiết khấu ..");
    }
    $('#sodonhang').blur();

    disableEnterPress();
    try {
        getsoDH();
    } catch (e) {
        console.log("Lỗi không thể lấy số đơn hàng ..");
    }

    init_checkbox_km();








});
var setwidthcccus = function () {
    var wid = $(window).width();
    if (wid < 764) {

        var d1 = $('#cccus').width();
        $('#cccus').width(d1 - 5);
        var d2 = $('#loaidonhang').width();
        $('#loaidonhang').width(d2 - 5);
        var d3 = $('#trangthaidonhang').width();
        $('#trangthaidonhang').width(d3 - 5);


    } else {
        var d = $('#cccus').width();
        $('#cccus').width(d + 40);
        /*  var d2 = $('#loaidonhang').width();
         $('#loaidonhang').width(d2 - 5);
         var d3 = $('#trangthaidonhang').width();
         $('#trangthaidonhang').width(d3 - 5);*/
    }
};
var loadBackgroud = function () {
    console.log("Thiết đặt background cho page...");
    // $(document).css("background","abc.png");
    $(document.body).css("background-image", "url('images/bg-body.png')");
};
var setwidthEleComUiBoot = function (id) {

    var wid = $(window).width();
    //alert(wid);
    if (wid < 764) {
        var d = $('#' + id).width();
        $('#' + id).width(d - 5);
        console.log("kích thước của ele " + id + " là :" + $('#' + id).width());
    } else {
        var d = $('#' + id).width();
        $('#' + id).width(d + 40);
        console.log("kích thước của ele " + id + " là :" + $('#' + id).width());
    }
};
var thoatTrang = function () {
    //window.onunload
    window.addEventListener("beforeunload", function (e) {
        //var confirmationMessage = "Bạn muốn thoát...";
        //( e || window.event).returnValue = false;
        // return abc();
        var stt_rec = $('#stt_rec').val();
        console.log(stt_rec);
        //var confirmationMessage = "Bạn muốn thoát...";
        //( e || window.event).returnValue = confirmationMessage;
        if (stt_rec != '') {
            congso(stt_rec);
        }

    });
};
var abc = function () {
    if (1 == 2)
        return true;
    return false;
};
var congso = function (stt_rec) {
    $.ajax({
        url: 'loadSLDu.php',
        type: 'POST',
        data: {stt: stt_rec},
        success: function (data) {
            console.log(data);
        },
        error: function (error) {
            console.log(error);
        }
    });
};
jQuery(document).ready(function () {
    jQuery("#khachhang").change(function () {
        jQuery.ajax({
            type: "POST",
            url: "getkhachhang.php", //goi toi file ajax.php
            data: "khachhang=" + jQuery("#khachhang").val(), //du lieu gui di
            success: function (response) {
                //	 alert("data['dia_chi']");
                console.log(response);
                var data = JSON.parse(response);
                jQuery("#diachi").val(data['dia_chi']);
                jQuery("#dienthoai").val(data['tel']);
                jQuery("#nguoigiaodich").val(data['nguoi_gd']);
            }
        });
    });

    $("#songaytt").blur(function () {
        var value = $("#songaytt").val();
        var data = {songay: value};
        var url = 'Lib/songaythanhtoan.php';
        $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            data: data,
            success: function (data) {
                if (data.status == "SUCCESS") {
                    $('#ngaytt').val(data.data);
                }
            }

        });
    });
});



function getsoDH() {
    $.ajax({
        type: "POST",
        url: "getso_dh.php", //goi toi file ajax.php
        //data:"khachhang="+jQuery("#khachhang").val(),//du lieu gui di
        success: function (response) {
            //	 alert("data['dia_chi']");

            // console.log(response);
            var data = JSON.parse(response);
            // var x = data['so_max'];
            // alert('thuc hien xong1 gia tri: ' + x);
            if (data != null) {
                $("#sodonhang").val(data['so_max']);
                // alert('Thành công khác NULL');
            } else {
                alert('giá trị của Số Đơn Hàng bị NULL');
            }



        }
    });
}
//
////////////////////////////xu ly them dong moi 
function addRow(tableID) {

    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;
    // alert(rowCount);
    //return;
    //console.log(rowCount);
    var row = table.insertRow(rowCount);
    // number of columns in table 
    var colCount = table.rows[0].cells.length;
    // chay tinh theo tung column
    // alert(rowCount);
    // return ;
    for (var i = 0; i < colCount; i++) {
        // moi bien la mot cel // column
        var newcell = row.insertCell(i);
        //newcell.innerHTML = 'abcde';
        // lenhj insert 1 cell // column 
        // var rowold = table.rows[1];
        if (i != 1) {

            newcell.innerHTML = table.rows[1].cells[i].innerHTML;
        }

        if (i == 1) {

            newcell.innerHTML = '<input id="ccsup' + (rowCount - 1) + '" name="ccsup[]" value="Tên NCC" style="height:30px;width: 80px;" >' + '<input id="ccheso' + (rowCount - 1) + '" type="hidden" value=""/>';
            onInitSup('ccsup' + (rowCount - 1), (rowCount - 1));
        } else if (i == 2)
        {
            newcell.innerHTML = '<input id="ccnhomhang' + (rowCount - 1) + '" name="ccnhomhang[]" value="Nhóm Hàng"  style="height:30px;width: 100px;">';
            initCombo('ccnhomhang' + (rowCount - 1));
        } else if (i == 3) {
            newcell.innerHTML = '<input id="cctenhang' + (rowCount - 1) + '" name="cctenhang[]" value="Tên Hàng" style="height:30px;">';
            initComboTenHang('cctenhang' + (rowCount - 1));
        } else if (i == 4) {
            newcell.innerHTML = '<input id="ccdvt' + (rowCount - 1) + '" name="ccdvt[]" value="Đơn VT" style="width: 80px;height: 30px;">';
            initComboDVT('ccdvt' + (rowCount - 1));
        } else if (i == 5) {
            newcell.innerHTML = ' <input type="text" maxlength="3" size="3" class="form-control" onblur="onChangeSoLuong(soluong' + (rowCount - 1) + ',' + (rowCount - 1) + ')" onkeyup="onChangeSoLuong(soluong' + (rowCount - 1) + ',' + (rowCount - 1) + ')" name="soluong[]" id="soluong' + (rowCount - 1) + '" style="text-align:center; width:50px;"/>';
        } else if (i == 6) {
            newcell.innerHTML = ' <input type="checkbox" class="check-box-km" name="check_km'+(rowCount - 1)+'" value="'+(rowCount - 1)+'" style="width: 50px;" id="check_km'+(rowCount - 1)+'"/>';
            init_checkbox_km();
        } else if (i == 7) {
            newcell.innerHTML = ' <input type="text" class="form-control" onkeyup="onChangeGia(dongia' + (rowCount - 1) + ',' + (rowCount - 1) + ')" name="dongia[]" id="dongia' + (rowCount - 1) + '" style="text-align:right; width:100px;"/>';
        } else if (i == 8) {
            newcell.innerHTML = ' <input onblur="changeCK(chietkhau' + (rowCount - 1) + ',' + (rowCount - 1) + ')" onclick="changeCK(chietkhau' + (rowCount - 1) + ',' + (rowCount - 1) + ')" onkeyup="changeCK(chietkhau' + (rowCount - 1) + ',' + (rowCount - 1) + ')" name="chietkhau[]" id="chietkhau' + (rowCount - 1) + '" value="0" style="text-align:right;width:60px;height: 34px"/>';
            initNumberCK('chietkhau' + (rowCount - 1), (rowCount - 1));
        } else if (i == 9) {
            newcell.innerHTML = ' <input type="text" readonly class="form-control" onblur="" onclick="" onkeyup="" name="tienck[]" id="tienck' + (rowCount - 1) + '" value="0" style="text-align:right; width:100px;"/>';
        } else if (i == 10) {
            newcell.innerHTML = '<input type="text" class="form-control" readonly name="thanhtoan[]" id="thanhtoan' + (rowCount - 1) + '" value="0" style="text-align:right; width:130px;"/>';
        }
        console.log("Bảng table" + newcell.innerHTML);

    }
}
/////////////////xu ly xoa dong moi
function deleteRow(tableID) {
    try {
        var table = document.getElementById(tableID);
        var rowCount = table.rows.length;
        for (var i = 0; i < rowCount; i++) {

            var row = table.rows[i];
            var chkbox = row.cells[0].childNodes[1];
            if (null != chkbox && true == chkbox.checked)
            {
                alert("Ban da xoa mot dong du lieu?");
                if (rowCount <= 2) {
//alert("Cannot delete all the rows.");
                    break;
                }
                table.deleteRow(i);
                rowCount--;
                i--;
            }
        }
    } catch (e) {
        alert(e);
    }
}
// lay gia tri trong cac combobox duoc chon 

function getvalues() {
    console.log('loadfunction');
    var inps = document.getElementsByName('cboNCC[]');
    for (var i = 0; i < inps.length; i++) {
        var inp = inps[i];
        alert("cboNCC[" + i + "].value=" + inp.value);
    }
}
function TotalTongong() {
// Tinh dog tong cong phia duoi dc cap nhat lai lun 
    var totalTc = 0;
    //var tg=$('#tigia').val();

   // console.log("Giá trị hs: " + get_heso_khuyenmai());
    var texts = document.getElementsByName("thanhtoan[]");
    //var sum = 0;
    for (var i = 0; i < texts.length; i++) {
        var n = texts[i].value || 0;
        console.log("Giá trị test: "+n);
        // alert(n);
        totalTc = totalTc + parseInt(n.replace(/,/g, ''));
    }
    var totalTien = new NumberFormat(totalTc);
    totalTien.setPlaces(0);
    $('#tongcong').val(totalTien.toFormatted());
}
function check_ele_checkboxchecked(index) {
    return check_box_checked_km(index);
}
function get_heso_khuyenmai(index) {
    if (check_box_checked_km(index)) {
        return 0;
    }
    return 1;
}
function onChangeSoLuong(id, index) {
//alert('Dong so: '+index);
//alert('onchangesoluong');
    var sl = $('#soluong' + index).val().replace(/,/g, '');
    var soluong = parseInt(sl);
    var dg = $('#dongia' + index).val().replace(/,/g, '');
    var dongia = parseInt(dg);
    var tl_ck = $('#chietkhau' + index).val().replace(/,/g, '');
    var chietkhau = parseFloat(tl_ck);
    onChangeSL(index, soluong);
    var thanhtien = new NumberFormat(soluong * (dongia - (dongia * chietkhau / 100)));
    thanhtien.setPlaces(0);
    var tienck = new NumberFormat(soluong * (dongia * chietkhau / 100));
    tienck.setPlaces(0);
    $('#tienck' + index).val(tienck.toFormatted());
    $('#thanhtoan' + index).val(thanhtien.toFormatted());
    // phuc hoi lai dinh dang cua so cua cac o text      
    var soluong = new NumberFormat(soluong);
    soluong.setPlaces(0);
    $('#soluong' + index).val(soluong.toFormatted());
    var dongia = new NumberFormat(dongia);
    dongia.setPlaces(0);
    $('#dongia' + index).val(dongia.toFormatted());
    TotalTongong();
}
// tih lai khi thay doi gia
function onChangeGia(id, index) {
//alert('Dong so: '+index);
    var sl = $('#soluong' + index).val().replace(/,/g, '');
    var soluong = parseInt(sl);
    var dg = $('#dongia' + index).val().replace(/,/g, '');
    var dongia = parseInt(dg);
    var thanhtien = new NumberFormat(soluong * dongia);
    thanhtien.setPlaces(0);
    $('#thanhtoan' + index).val(thanhtien.toFormatted());
    // phuc hoi lai dinh dang cua so cua cac o text      
    var soluong = new NumberFormat(soluong);
    soluong.setPlaces(0);
    $('#soluong' + index).val(soluong.toFormatted());
    var dongia = new NumberFormat(dongia);
    dongia.setPlaces(0);
    $('#dongia' + index).val(dongia.toFormatted());
    //  tinh lai tong cong 
    TotalTongong();
}
function onChangeNocu() {
    var nc = $('#nocu').val().replace(/,/g, '');
    var nocu1 = parseInt(nc);
    var nocu = new NumberFormat(nocu1);
    nocu.setPlaces(0);
    $('#nocu').val(nocu.toFormatted());
}
var locdh = function () {
    //alert(frm_search.tt.value);
//alert('abc');
//return;
    var dkloc = $('#dkloc').combobox('getValue');
    var fromdate = frm_search.fromdate.value;
    var todate = frm_search.todate.value;
    var txt_loc = frm_search.txt_val_loc.value;
    if (dkloc == 'nga') {
        if (todate < fromdate) {
            alert('Chọn ngày không hợp lệ...');
            return;
        }

    } else if (dkloc != 'trang_thai') {
        if (frm_search.txt_val_loc.value == '') {
            alert('Vui lòng nhập dữ liệu cần lọc..');
            return;
        }

    }
    $.ajax({
        url: '_partial_show_list_soph1.php',
        type: 'GET',
        data: {
            dkloc: dkloc,
            fromdate: frm_search.fromdate.value,
            todate: frm_search.todate.value,
            txt_val_loc: txt_loc,
            ck_tt: frm_search.tt.value
        },
        success: function (data) {
            //alert(data);
            $('#show_list_soph1').html(data);
        },
        error: function (response) {
            alert('Lỗi ' + response);
        }
    });
};
var onChangeNhomHang = function (index, data) {
    var ma_nhvt = $('#ccnhomhang' + index).combobox('getValue');
    //alert("data: "+ma_nhvt);
    console.log(ma_nhvt);
    jQuery.ajax({
        type: "POST",
        url: "get_tenvt.php", //goi toi file ajax.php
        data: "Ma_nhvt=" + ma_nhvt, //du lieu gui di
        success: function (response) {
            console.log(JSON.parse(response));
            //alert(data);
            //jQuery("select[name='cboNhVT[]']").html(response);
            $('#cctenhang' + index).combobox({
                panelHeight: 'auto',
                selectOnNavigation: false,
                valueField: 'id',
                textField: 'text',
                editable: true,
                required: true,
                validType: 'exists["#cctenhang' + index + '"]',
                onSelect: function () {
                    if (data != null) {
                        onChangeHangHoa(index, data);
                    } else {
                        onChangeHangHoa(index);
                    }
                },
                filter: function (q, row) {
                    return row.text.toLowerCase().indexOf(q.toLowerCase()) == 0;
                },
                data: JSON.parse(response)
            });
            if (data != null) {
                $('#cctenhang' + index).combobox('select', data.ten);
                //$('#cctenhang' + index).combobox('setValue', data.ten);
            } else {
                $('#cctenhang' + index).combobox('setValue', '*');
            }
        },
        error: function (reponse) {
            alert("error: " + response);
        }
    });
};
////////////////////////////
//doan nay thay doi ma vat tu lay don vi tinh
var onChangeHangHoa = function (index, data) {
    var ma_vt = $('#cctenhang' + index).combobox('getValue');
    console.log(ma_vt);
    jQuery.ajax({
        type: "POST",
        url: "get_dvt.php", //goi toi file ajax.php
        data: "ma_vt=" + ma_vt, //du lieu gui di
        success: function (response) {
            console.log(JSON.parse(response));
            //jQuery("select[name='cboNhVT[]']").html(response);
            $('#ccdvt' + index).combobox({
                panelHeight: 'auto',
                selectOnNavigation: false,
                valueField: 'id',
                textField: 'text',
                editable: true,
                required: true,
                validType: 'exists["#ccdvt' + index + '"]',
                onSelect: function () {
                    // alert('abc');
                    if (data != null) {
                        onChangeDVT(index, data);
                    } else {
                        onChangeDVT(index);
                    }
                    //TotalTongong();
                    // alert('abc');
                },
                filter: function (q, row) {
                    return row.text.toLowerCase().indexOf(q.toLowerCase()) == 0;
                },
                data: JSON.parse(response)
            });
            if (data != null) {
                $('#ccdvt' + index).combobox('select', data.donvi);
            } else {
                $('#ccdvt' + index).combobox('setValue', '*');
            }

        },
    });
};
var onChangedkloc = function () {
    //var dkloc= $('#dkloc').val();
    // alert('abc');
    var dkloc = $('#dkloc').combobox('getValue');
    // alert(dkloc);
    if (dkloc == 'nga') {
        $('#ele_txt_loc_ngay').show();
        $('#ele_txt_loc').hide();
        $('#ele_chk_tt').hide();
    } else if (dkloc == 'trang_thai') {
        $('#ele_txt_loc_ngay').hide();
        $('#ele_txt_loc').hide();
        $('#ele_chk_tt').show();
    } else {
        $('#ele_txt_loc_ngay').hide();
        $('#ele_txt_loc').show();
        $('#ele_chk_tt').hide();
    }
};
var onChangeSL = function (index, soluongvao) {

    var dvt = $('#ccdvt' + index).combobox('getValue');
    var ma_vt = $('#cctenhang' + index).combobox('getValue');
    if ($.trim(dvt) == '' && $.trim(ma_vt) == '') {
        alert('Vui lòng chọn tên hàng và Đơn VT...');
        return;
    }

    console.log(dvt + ' ' + ma_vt);
    $.ajax({
        type: 'POST',
        url: 'get_gia.php',
        data: 'ma_vt=' + ma_vt + '&dvt=' + dvt,
        success: function (response) {
            try {

                // console.log(response);
                var data = JSON.parse(response);
                var slmax = data[0].so_luong;
                var slton = data[0].soluong_3;
                //alert(sldadat);
                console.log(data[0].soluong_3);
                // var slcon = slmax - sldadat;
                if (soluongvao > slton) {
                    var soluong = new NumberFormat(slton);
                    soluong.setPlaces(0);
                    $('#soluong' + index).val(soluong.toFormatted());
                    TotalTongong();
                    // alert('Số lượng nhập vào lớn hơn quy định( MAX là: ' + slton + ')');
                }
                //Chuyển đổi về cùng một dv tính để dễ so sánh
                var so_dule = 0;
                if (dvt == 'DVT2') {
                    slmax = slmax * data[0].he_so;
                    so_dule = data[0].soluong_3_thua;
                    slton = slton * data[0].he_so + so_dule;
                }
                console.log('SL ton test truoc' + so_dule);
                // alert(slmax);
                //Kiểm tra nếu vượt quá số lượng cho phép thì xuất thông báo..

                var sl_vuot = 0;

                if (dvt == 'DVT2') {
                    sl_vuot = checkSoluongThem(ma_vt, slmax, index, slton) / data[0].he_so;
                } else {
                    sl_vuot = checkSoluongThem(ma_vt, slmax, index, slton);
                }

                if (sl_vuot > 0) {
                    alert('Giá trị nhập vượt quá mức số lượng cho phép là ' + Math.ceil(sl_vuot) + '\n\n\
                    ');
                }
                TotalTongong();
            } catch (e) {

                console.log('Xem lại thông báo : ' + e.toString());
            }

            // checkSoluongThem();
        }

    });
};
var changeCK = function (id, index) {
    var n = $('#chietkhau' + index).val();
    var a = '';
    a = n;
    if (a != '') {
        if (a.indexOf('-') >= 0) {
            $('#chietkhau' + index).val(n.replace(/-/g, ''));
        }
        //TotalTongong();
        onChangeSoLuong(id, index);
    }

};
var changeTG = function () {
    var n = frm_main.tigia.value;
    var a = '';
    a = n;
    if (a != '') {
        if (a.indexOf('-') >= 0) {
            $('#tigia').val(n.replace(/-/g, ''));
            // alert('abc');
        }
        if (a <= 0)
            $('#tigia').val(1);
        // var texts = document.getElementsByName("thanhtoan[]");
    }
};
var loadTG = function (tigia) {
    var text = document.getElementsByName('');
};
//Hàm kiểm tra số lượng nhập so với số lượng tồn
var checkSoluongThem = function (ma_vt, slmax, index, slton) {
    var slvuot = 0;
    var table = document.getElementById('dataTable');
    var rowCount = table.rows.length;
    var tong_sl = 0;
    //Thực hiện việc chạy vòng lặp để lấy tổng giá trị số lượng của các sản phẩm giống nhau để so
    //sánh với số lượng tồn.
    for (i = 0; i < rowCount - 1; i++) {
        var ma = $('#cctenhang' + i).combobox('getValue');
        if (ma_vt == ma) {
            var sl = document.getElementById('soluong' + i).value;
            //Loại bỏ các dấu phẩy để parse về kiểu Int
            sl = parseInt(sl.replace(/,/g, ''));
            var dvt = $('#ccdvt' + i).combobox('getValue');
            var hs = $('#ccheso' + i).val();
            console.log('có hệ số: ' + hs);
            tong_sl = tong_sl + tinhtongslsp(hs, sl, dvt);
            console.log('Giá trị slthem: ' + sl + ' ' + tong_sl + ' ' + slmax + 'sl ton:' + slton);
        }

    }
    /*var dvt_ = $('#ccdvt' + index).combobox('getValue');
     var hs_ = $('#ccheso' + index).val();*/
    /*if (dvt_ == 'DVT2') {
     slton = slton * hs_;
     }*/
    console.log('So luong tồn ' + slton);
    if (tong_sl > slton) {
        slvuot = tong_sl - slton;
        $('#soluong' + index).val(0);
        //return slvuot;
    }
    return slvuot;
};
var checkKhoaSo = function () {
    var rs = $('.khoa').data('khoa');
    if (rs == 1)
        return true;
    return false;
};
//đưa về cùng loại đơn vị tính
var tinhtongslsp = function (hs, slthem, dvt) {
    if (dvt != 'DVT1') {
        //alert(slthem);
        console.log('Khi dvt2: ' + slthem);
        return slthem * hs;
    } else {
        // alert(slthem * hs);
        console.log('Khi dvt1: ' + (slthem));
        return slthem;
    }

};
///////////////////////////
var checkSlTon = function () {

    var sodh = $('#sodonhang').val().toString();
    var ten_kh = $('#cccus').combobox('getValue');
    if (sodh == '') {
        alert('Chua nhập thong tin số DH..');
        return;
    }
    if ($.trim(ten_kh) == '*' || $.trim(ten_kh) == '') {
        alert('Chưa nhập thông tin ten KH..');
        return;
    }

    var table = document.getElementById('dataTable');
    var rowCount = table.rows.length;
    for (i = 0; i < rowCount - 1; i++) {
        var slvao = $('#soluong' + i).val().replace(/,/g, '');
        var soluong = parseInt(slvao);
        console.log('CheckSLTon :' + soluong);
        onChangeSoLuong('', i);
    }


};
///////////////////////////
var onChangeDVT = function (index, data_) {
    //alert('abc');
    var dvt = $('#ccdvt' + index).combobox('getValue');
    var ma_vt = $('#cctenhang' + index).combobox('getValue');
    console.log(dvt + ' ' + ma_vt + ' ' + data_);
    jQuery.ajax({
        type: "POST",
        url: "get_gia.php", //goi toi file ajax.php
        data: "ma_vt=" + ma_vt + "&dvt=" + dvt, //du lieu gui di
        success: function (response) {
            console.log(response);
            // $('#debug_').html(response);
            var data = JSON.parse(response);
            var soluong = new NumberFormat(data[0].so_luong);
            soluong.setPlaces(0);
            if (typeof data_ == 'undefined') {
                //Set gia trị cho textbox..
                $('#soluong' + index).val(data[0].so_luong);
                onChangeSL(index, data[0].so_luong);
                $('#ccheso' + index).val(data[0].he_so);
                var dongia = new NumberFormat(data[0].gia * get_heso_khuyenmai(index));
                dongia.setPlaces(0);
                // console.log('Test số lượng: ' + data[0].so_luong);
                //  console.log('Test don gia: ' + data[0].gia);

                $('#dongia' + index).val(dongia.toFormatted());
                var tl_ck = $('#chietkhau' + index).val().replace(/,/g, '');
                var chietkhau = parseFloat(tl_ck);
                var thanhtien = new NumberFormat(data[0].so_luong * (data[0].gia - (data[0].gia * chietkhau / 100)) * get_heso_khuyenmai(index));
                thanhtien.setPlaces(0);
                var tienck = new NumberFormat(data[0].so_luong * (data[0].gia * chietkhau / 100) * get_heso_khuyenmai(index));
                tienck.setPlaces(0);
                $('#tienck' + index).val(tienck.toFormatted());
                $('#thanhtoan' + index).val(thanhtien.toFormatted());
                console.log("giá trị so_luong: " + data[0].so_luong + "giá tiền tổng là :" + data[0].so_luong * (data[0].gia - (data[0].gia * chietkhau / 100)) * get_heso_khuyenmai(index));
                /*
                 var sl = $('#soluong' + index).val().replace(/,/g, '');
                 var soluong_ = parseInt(sl);
                 var dg = $('#dongia' + index).val().replace(/,/g, '');
                 var dongia = parseInt(dg);
                 var tl_ck = $('#chietkhau' + index).val().replace(/,/g, '');
                 var chietkhau = parseFloat(tl_ck);
                 var thanhtien = new NumberFormat(soluong * (dongia - (dongia * chietkhau / 100)));
                 thanhtien.setPlaces(0);
                 var tienck = new NumberFormat(soluong * (dongia * chietkhau / 100));
                 tienck.setPlaces(0);
                 $('#tienck' + index).val(tienck.toFormatted());
                 $('#thanhtoan' + index).val(thanhtien.toFormatted());
                 // phuc hoi lai dinh dang cua so cua cac o text      
                 var soluong = new NumberFormat(soluong);
                 soluong.setPlaces(0);
                 $('#soluong' + index).val(soluong.toFormatted());
                 var dongia = new NumberFormat(dongia);
                 dongia.setPlaces(0);
                 $('#dongia' + index).val(dongia.toFormatted());
                 TotalTongong();
                 
                 */
/////
                /*   var thanhtien = new NumberFormat(0);
                 thanhtien.setPlaces(0);
                 $('#thanhtoan' + index).val(thanhtien.toFormatted());
                 //TotalTongong();*/

            } else {
                //alert('undefined');
                // $('#soluong' + index).val(data[0].so_luong);
                $('#ccheso' + index).val(data[0].he_so);
                var dongia = new NumberFormat(data[0].gia * get_heso_khuyenmai(index));
                dongia.setPlaces(0);
                var sl = $('#soluong' + index).val();
                var chietkhau = $('#chietkhau' + index).val();
                $('#dongia' + index).val(dongia.toFormatted());
                console.log('Chiet khau : ' + chietkhau);
                var thanhtien = new NumberFormat(sl * (data[0].gia - (data[0].gia * chietkhau / 100)) * get_heso_khuyenmai(index));
                thanhtien.setPlaces(0);
                var tck = $('#tienck' + index).val();
                var tienck = new NumberFormat(tck);
                tienck.setPlaces(0);
                $('#tienck' + index).val(tienck.toFormatted());
                $('#thanhtoan' + index).val(thanhtien.toFormatted());
            }
            //TotalTongong();
            // console.log();
        },
        error: function (error) {
            // $('#debug').html(error);
        }
    });
    //alert('abc');
    //  tinh lai tong cong 

};
var onChangeKhachHang = function (index) {
    //alert(index);
    console.log("ma_kh=" + $('#cccus' + index).val());
    jQuery.ajax({
        type: "POST",
        url: "get_nhomvt.php", //goi toi file ajax.php
        data: "ma_kh=" + $('#cccus' + index).val(), //du lieu gui di
        success: function (response) {
            console.log(JSON.parse(response));
            //jQuery("select[name='cboNhVT[]']").html(response);
            $('#ccnhomhang' + index).combobox({
                panelHeight: 'auto',
                selectOnNavigation: false,
                valueField: 'id',
                textField: 'text',
                editable: true,
                required: true,
                onSelect: function () {
                    onChangeNhomHang(index);
                },
                validType: 'exists["#ccnhomhang' + index + '"]',
                onLoadSuccess: function () { },
                filter: function (q, row) {
                    return row.text.toLowerCase().indexOf(q.toLowerCase()) == 0;
                },
                data: JSON.parse(response)
            });
        },
    });
};
// khoi tao danh sach khach hang    
var onInitDkLoc = function () {
    // $('#ele_txt_loc_ngay').hide();
    $('#dkloc').combobox({
        url: 'json/dataloc.json',
        valueField: 'id',
        textField: 'text',
        onSelect: function () {
            onChangedkloc();
        },
        onLoadSuccess: function () {
            // alert("Thành công dkloc");
            var dkloc = $('#dkloc').combobox('getValue');
            if (dkloc == 'nga') {
                // alert('loc theo ngày');
                $('#ele_txt_loc_ngay').show();
                $('#ele_txt_loc').hide();
                $('#ele_chk_tt').hide();
            } else if (dkloc == 'trang_thai') {
                $('#ele_chk_tt').show();
                $('#ele_txt_loc_ngay').hide();
                $('#ele_txt_loc').hide();
            } else {
                $('#ele_chk_tt').hide();
                $('#ele_txt_loc_ngay').hide();
                $('#ele_txt_loc').show();
            }
        }
    });
};
var onInitCus = function () {
    console.log();
    // alert('abcas');
    jQuery.ajax({
        type: "POST",
        url: "get_cusa.php",
        success: function (response) {
            console.log(JSON.parse(response));
            $('#cccus').combobox({
                panelHeight: 'auto',
                selectOnNavigation: true,
                valueField: 'id',
                textField: 'text',
                editable: true,
                required: true,
                events: {
                    blur: function () {
                        var val = $('#cccus').combobox('getValue');
                        //alert(val);
                        if (val == '')
                            $('#cccus').combobox('setValue', '*');
                    },
                    focus: function () {
                        var val = $('#cccus').combobox('getValue');
                        // alert(val);
                        if (val == '*') {
                            $('#cccus').combobox('setValue', '');
                        }
                    }
                },
                onSelect: function () {
                    // alert('abc');
                    onChangeCus();
                },
                labelPosition: 'top',
                validType: 'exists["#cccus"]',
                filter: function (q, row) {
                    var opts = $(this).combobox('options');
                    console.log(opts);
                    //alert('abc');
                    return row.text.toLowerCase().indexOf(q.toLowerCase()) == 0;
                },
                data: JSON.parse(response)
            });
            $('#cccus').combobox('setValue', '*');
        },
        error: function (response) {
            alert("error: " + response);
        }
    });
};
// cap nhat thong tin khach hang     
var sosanhngay = function (ngaycanss, ngayss) {
    var date1 = new Date(ngaycanss);
    var date2 = new Date(ngayss);
    if (date1.getYear() > date2.getYear()) {
        return 1;
    } else if (date1.getYear() < date2.getYear()) {
        return -1;
    } else {
        if (date1.getMonth() > date2.getMonth()) {
            return 1;
        } else if (date1.getMonth() < date2.getMonth()) {
            return -1;
        } else {
            if (date1.getDate() > date2.getDate()) {
                return 1;
            } else if (date1.getDate() < date2.getDate()) {
                return -1;
            } else {
                return 0;
            }
        }
    }

};
var onUpdateCus = function (stt_rec, ngaynhap) {
    console.log(ngaynhap);
    //if(){}
    if (confirm('Bạn có chắc là sửa ? Hành động này có thể gây sai lệch số liệu tồn kho...')) {



        jQuery.ajax({
            type: "POST",
            data: "stt_rec=" + stt_rec,
            url: "update_soph1.php",
            success: function (response) {
                //console.log(JSON.parse(response));
                try {
                    var data = JSON.parse(response);
                    console.log(data);
                    var date_cur = new Date(ngaynhap);
                    var dt_ = new Date(data['ngay_ct']);
                    var makh = data['ma_kh'];
                    //var dt_=new Date('2016-08-11');
                    console.log('Ngày nhập dh' + date_cur.toLocaleDateString() + "<br/>");
                    console.log('Ngày đã xuất ra: ' + dt_.toLocaleDateString());
                    console.log("test Ngày :" + data['ngay_ct']);
                    if (data['stt_xuat'] == 0) {
                        if (sosanhngay(data['ngay_ct'], ngaynhap) >= 0) {
                            // alert(checkKhoaSo());
                            console.log('Kiem tra ben checkUpdate: ' + checkKhoaSo());
                            if (!checkKhoaSo()) {
                                $("#btnUpdate").show();
                                $("#btnSubmit").hide();
                                //quay về đầu trang 
                                $('body,html').animate({
                                    scrollTop: 0
                                });
                                console.log('bang nhau....');
                                $("#ngaylap").datepicker().datepicker("setDate", dt_);
                                $("#diachi").val(data['dia_chi']);
                                $("#dienthoai").val(data['dien_thoai']);
                                $("#diengiai").val(data['dien_giai']);
                                $("#sodonhang").val(data['so_ct']);
                                var dt = new Date(data['ngay_ct']);
                                // alert(data['no_cu']);
                                if (data['no_cu'] == 'nul') {
                                    $("#nocu").val('0');
                                } else
                                    $("#nocu").val(data['no_cu']);
                                $("#songaytt").val(parseInt(data['han_tt']));
                                $("#nhanvien").val(data['ma_nvkd']);
                                $('#loaidonhang').combobox('setValues', data["loai_dh"]);
                                $('#trangthaidonhang').combobox('setValues', data["trang_thai"]);
                                var dt = new Date(data['ngay_hh']);
                                $("#ngaytt").datepicker().datepicker("setDate", dt);
                                $('#stt_rec').val(data['stt_rec']);
                                //  alert('thuc hiện xong việc đầu tiên');
                                insertSoct2(stt_rec);
                                
                                onUpdateCusName(makh);
                                onUpdateSup(stt_rec);

                                var totalTien = new NumberFormat(data['t_tt']);
                                totalTien.setPlaces(0);
                                $('#tongcong').val(totalTien.toFormatted());
                            } else {
                                alert('Không thể sửa .Admin đã khoá chức năng này...');
                            }

                        } else {
                            alert('Đơn hàng này không thể sửa vì không phải của ngày hôm nay...');
                        }
                    } else {
                        alert('Đơn hàng này đã xuất .Không thể sửa...');
                    }


                } catch (e) {
                    alert('Lỗi ở :' + e.toString());
                }

            },
            error: function (response) {
                alert("error" + response);
            }
        });
    } else {
        window.location = "donhang.php";
    }
};
var insertSoct2 = function (stt_rec) {
    console.log("insertSoct2.....................");
    $.ajax({
        url: 'insertSoct2.php',
        type: 'POST',
        data: {stt_rec: stt_rec},
        success: function (response) {
            console.log("Thực hiện thành công insert Soct2" + response);

        },
        error: function (error) {
            console.log("Lỗi insert Soct2..");
        }


    });
};
// cap nhat thong tin ten khach hang       
var onUpdateCusName = function (ma_kh) {
    console.log();
    jQuery.ajax({
        type: "POST",
        data: "ma_kh=" + ma_kh,
        url: "update_tenkh.php",
        success: function (response) {
            var data = JSON.parse(response);
            $('#cccus').combobox('setValue', data["ma_kh"]);
            console.log("Thành công update thong tin kh.....");
        },
        error: function (response) {
            alert(response);
        }
    });
};
// khoi tao danh sach nha cung cap   
var onInitSup = function (idCC, index, data) {
    console.log();
    //console.log("ma_kh="+ $('#cccus').val());

    jQuery.ajax({
        type: "POST",
        url: "get_sup.php", //goi toi file ajax.php
        success: function (response) {
            console.log(JSON.parse(response));
            $('#' + idCC).combobox({
                panelHeight: 'auto',
                selectOnNavigation: false,
                valueField: 'id',
                textField: 'text',
                editable: true,
                required: true,
                onSelect: function () {
                    //  alert('abc');
                    if (data != null) {// có chọn NCC
                        //alert(data);
                        onChangeSup(index, data);
                    } else {
                        onChangeSup(index);
                    }
                },
                validType: 'exists["#' + idCC + '"]',
                onLoadSuccess: function () { },
                events: {
                    blur: function () {
                        var val = $('#' + idCC).combobox('getValue');
                        //alert(val);
                        if (val.indexOf('Tên NCC') < 0)
                            $('#' + idCC).combobox('setValue', val);
                    },
                    focus: function () {
                        ///  console.log('abc');
                        //alert('abc');
                        var val = $('#' + idCC).combobox('getValue');
                        // alert(val);
                        if (val.indexOf('Tên NCC') >= 0) {
                            $('#' + idCC).combobox('setValue', '');
                            // alert('abc');
                        }
                    }
                },
                filter: function (q, row) {
                    return row.text.toLowerCase().indexOf(q.toLowerCase()) == 0;
                },
                data: JSON.parse(response)

            });
            // $('#'+idCC).combobox('setValue', '*abcabs');
            if (data != null) {
                $('#' + idCC).combobox('select', data.sup);
            } else {
                $('#' + idCC).combobox('setValue', '*');
            }
        }
    });
};
var checkconfig = function () {

    $.ajax({
        url: 'checkconfig.php',
        type: 'GET',
        success: function (data) {
            //if(data){}
            alert(data);
            window.location = "donhang.php";
            // $('.khoa').text('Mo');
        },
        error: function () {
            alert(error);
        }


    });
};
// xóa dòng 
function deleteRow_update(tableID, rowCount) {
    try {
        var table = document.getElementById(tableID);
        if (rowCount <= 1)
            return;
        while (rowCount > 1) {
            table.deleteRow(rowCount);
            rowCount--;
        }
    } catch (e) {
    }
}
// cập nhật danh sách soct1
var onUpdateSup = function (stt_rec) {
    console.log();
    jQuery.ajax({
        type: "POST",
        data: "stt_rec=" + stt_rec,
        url: "update_soct1.php",
        success: function (response) {
            //alert(response);
            $('#tbody_soct1').html(response);
        },
        error: function (response) {
            alert(response);
        }
    });
};
// khi chon Ma Nhom NCC
var onChangeSup = function (index, data) {
    var ma_kh = $('#ccsup' + index).combobox('getValue');
    //alert("ma_KH="+ ma_kh);
    jQuery.ajax({
        type: "POST",
        url: "get_nhomvt.php",
        data: "ma_KH=" + ma_kh,
        success: function (response) {
            console.log(JSON.parse(response));
            $('#ccnhomhang' + index).combobox({
                panelHeight: 'auto',
                selectOnNavigation: false,
                valueField: 'id',
                textField: 'text',
                editable: true,
                required: true,
                onSelect: function () {
                    if (data != null) {
                        onChangeNhomHang(index, data);
                    } else {
                        onChangeNhomHang(index);
                    }
                },
                validType: 'exists["#ccnhomhang' + index + '"]',
                filter: function (q, row) {
                    return row.text.toLowerCase().indexOf(q.toLowerCase()) == 0;
                },
                data: JSON.parse(response)
            });
            if (data != null) {
                //alert(data.nhom);
                $('#ccnhomhang' + index).combobox('select', data.nhom);
            } else {
                $('#ccnhomhang' + index).combobox('setValue', '*');
            }
        },
    });
};
// khi thay doi ma khach hang 
var onChangeCus = function () {
    // alert('abc');
    //console.log();
    //console.log("ma_kh="+ $('#cccus').val());
    // response="";
    var ma_kh = $('#cccus').combobox('getValue');
    var ten_kh = $('#cccus').combobox('getText');
    //alert(ten_kh);
    $('#cccus_tenkh').val(ten_kh);
    jQuery.ajax({
        type: "POST",
        data: "ma_kh=" + ma_kh, //du lieu gui di   
        url: "get_cus.php", //goi toi file ajax.php  
        success: function (response) {
            //alert("data: "+response);
            var data = JSON.parse(response);
            //alert(data['tel']);
            $("#diachi").val(data['dia_chi']);
            $("#dienthoai").val(data['tel']);
            $("#nguoigiaodich").val(data['nguoi_gd']);
        }
    });
};
var hienthi = function () {
    alert('abc');
};
//Init nhom khach hang
var initCombo = function (idCC) {
    $('#' + idCC).combobox({
        panelHeight: 'auto',
        selectOnNavigation: false,
        valueField: 'id',
        textField: 'text',
        editable: true,
        required: true,
        validType: 'exists["#' + idCC + '"]',
        onLoadSuccess: function () { },
        events: {
            blur: function () {
                var val = $('#' + idCC).combobox('getValue');
                //alert(val);
                if (val == '')
                    $('#' + idCC).combobox('setValue', '*');
            },
            focus: function () {
                //  alert('abc');
                ///  console.log('abc');
                //alert('abc');
                var val = $('#' + idCC).combobox('getValue');
                // alert(val);
                if (val == '*') {
                    $('#' + idCC).combobox('setValue', '');
                }
            }
        },
        filter: function (q, row) {
            return row.text.toLowerCase().indexOf(q.toLowerCase()) == 0;
        },
        data: [{"id": "*", "text": "Nhóm Hàng"}]
    });
    $('#' + idCC).combobox('setValue', '*');
};
//Init nhom khach hang
var initComboDVT = function (idCC) {
    $('#' + idCC).combobox({
        panelHeight: 'auto',
        selectOnNavigation: false,
        valueField: 'id',
        textField: 'text',
        editable: true,
        required: true,
        validType: 'exists["#' + idCC + '"]',
        events: {
            blur: function () {
                var val = $('#' + idCC).combobox('getValue');
                //alert(val);
                if (val == '')
                    $('#' + idCC).combobox('setValue', '*');
            },
            focus: function () {
                //  alert('abc');
                ///  console.log('abc');
                //alert('abc');
                var val = $('#' + idCC).combobox('getValue');
                // alert(val);
                if (val == '*') {
                    $('#' + idCC).combobox('setValue', '');
                }
            }
        },
        onLoadSuccess: function () { },
        filter: function (q, row) {
            return row.text.toLowerCase().indexOf(q.toLowerCase()) == 0;
        },
        data: [{"id": "*", "text": "Đơn VT"}]
    });
    $('#' + idCC).combobox('setValue', '*');
};
var initComboTenHang = function (idCC) {
    $('#' + idCC).combobox({
        panelHeight: 'auto',
        selectOnNavigation: false,
        valueField: 'id',
        textField: 'text',
        editable: true,
        required: true,
        validType: 'exists["#' + idCC + '"]',
        onLoadSuccess: function () { },
        events: {
            blur: function () {
                var val = $('#' + idCC).combobox('getValue');
                //alert(val);
                if (val == '')
                    $('#' + idCC).combobox('setValue', '*');
            },
            focus: function () {
                //  alert('abc');
                ///  console.log('abc');
                //alert('abc');
                var val = $('#' + idCC).combobox('getValue');
                // alert(val);
                if (val == '*') {
                    $('#' + idCC).combobox('setValue', '');
                }
            }
        },
        filter: function (q, row) {
            return row.text.toLowerCase().indexOf(q.toLowerCase()) == 0;
        },
        data: [{"id": "*", "text": "Tên Hàng"}]
    });
    $('#' + idCC).combobox('setValue', '*');
};
var huydh = function () {
    window.location = "donhang.php";
    // alert('abc');
    // var stt = $('#stt_rec').val();
    /*if (stt != '') {
     if (confirm('Bạn có muốn huỷ đơn hàng khi sửa \n\n\
     Hành động có thể gây sai lệch số liệu. Lưu ý....')) {
     $.ajax({
     url: 'loadSLDu.php',
     type: 'POST',
     data: {
     stt: stt
     },
     success: function (response) {
     // alert(response);
     var text = '';
     text = response.toString();
     // alert(text.indexOf('1'));
     if (text.indexOf('1') > 0) {
     
     window.location = "donhang.php";
     }
     
     },
     error: function () {
     window.location = "donhang.php";
     }
     
     
     });
     }
     // alert(stt);
     
     } else {
     // alert('Trống..');
     window.location = "donhang.php";
     }*/

};
function  SaveDH() {


    if (confirm('Bạn có muốn lưu đơn hàng ?')) {
        var table = document.getElementById('dataTable');
        var rowCount = table.rows.length;

        for (i = 0; i < rowCount - 1; i++) {
            try {
                var sl = $('#soluong' + i).val();
                var mh = $('#cctenhang' + i).combobox('getValue');
                var ten_sp = $('#cctenhang' + i).combobox('getText');
                if (mh == '' || mh == '*') {
                    alert('Chưa chọn sản phẩm...');
                    return;
                }
                //Loại bỏ các dấu phẩy để parse về kiểu Int
                // alert(document.getElementById('soluong' + i).value);
                if (sl == '') {
                    alert('Chưa nhập số lượng sản phẩm...');
                    return;
                }
                sl = parseInt(sl.replace(/,/g, ''));
                console.log('Số lượng nhập: ' + sl);
                if (sl == 0) {
                    alert('Xem lại sản phẩm: ' + ten_sp + ',\nCó thể số lượng nhập vượt quá số lượng tồn (nên đưa về 0)');
                    return;
                }
            } catch (e) {

                console.log(e.toString());
                return;
            }
        }
        $('#form_donhang').submit();
    }

}

var initNumberCK = function (id, index) {
    $('#chietkhau' + index).numberspinner({
        min: 0,
        max: 100,
        precision: 4,
        increment: 0.1,
        onChange: function () {

            onChangeSoLuong(id, index);
        },
    });
    //var s=$('#'+id).numberbox('options');
    // console.log(s);

};
var disableEnterPress = function () {
    $('#form_donhang').bind('keypress keydown keyup', function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
        }
    });
};
var khuyenmai = function () {

    var texts = document.getElementsByName("cctenhang[]");
    //var sum = 0;
    for (var i = 0; i < texts.length; i++) {
        get_gia(i);
    }
    /* var totalTien = new NumberFormat(totalTc);
     totalTien.setPlaces(0);
     $('#tongcong').val(totalTien.toFormatted());*/
};
var get_gia = function (index, data_) {
    var dvt = $('#ccdvt' + index).combobox('getValue');
    var ma_vt = $('#cctenhang' + index).combobox('getValue');
    console.log(dvt + ' ' + ma_vt + ' data đầu vào: ' + data_);
    jQuery.ajax({
        type: "POST",
        url: "get_gia.php", //goi toi file ajax.php
        data: "ma_vt=" + ma_vt + "&dvt=" + dvt, //du lieu gui di
        success: function (response) {
            console.log(response);
            // $('#debug_').html(response);
            var data = JSON.parse(response);
            var soluong = new NumberFormat(data[0].so_luong);
            soluong.setPlaces(0);
            if (typeof data_ == 'undefined') {
                //Set gia trị cho textbox..
                //$('#soluong' + index).val(data[0].so_luong);
                //onChangeSL(index, data[0].so_luong);
                $('#ccheso' + index).val(data[0].he_so);
                var dongia = new NumberFormat(data[0].gia * get_heso_khuyenmai(index));
                dongia.setPlaces(0);
                $('#dongia' + index).val(dongia.toFormatted());
                var tl_ck = $('#chietkhau' + index).val().replace(/,/g, '');
                var chietkhau = parseFloat(tl_ck);
                var thanhtien = new NumberFormat(data[0].so_luong * (data[0].gia - (data[0].gia * chietkhau / 100)) * get_heso_khuyenmai(index));
                thanhtien.setPlaces(0);
                var tienck = new NumberFormat(data[0].so_luong * (data[0].gia * chietkhau / 100) * get_heso_khuyenmai(index));
                tienck.setPlaces(0);
                $('#tienck' + index).val(tienck.toFormatted());
                $('#thanhtoan' + index).val(thanhtien.toFormatted());
                console.log("giá tiền tổng là :" + data[0].so_luong * (data[0].gia - (data[0].gia * chietkhau / 100)) * get_heso_khuyenmai(index));
                TotalTongong();

            } else {
                var dongia = new NumberFormat(data[0].gia * get_heso_khuyenmai(index));
                dongia.setPlaces(0);
                var sl = $('#soluong' + index).val();
                var chietkhau = $('#chietkhau' + index).val();
                $('#dongia' + index).val(dongia.toFormatted());
                console.log('Chiet khau : ' + chietkhau);
                var thanhtien = new NumberFormat(sl * (data[0].gia - (data[0].gia * chietkhau / 100)) * get_heso_khuyenmai(index));
                thanhtien.setPlaces(0);
                var tck = $('#tienck' + index).val();
                var tienck = new NumberFormat(tck);
                tienck.setPlaces(0);
                $('#tienck' + index).val(tienck.toFormatted());
                $('#thanhtoan' + index).val(thanhtien.toFormatted());
            }

        },
        error: function (error) {
            // $('#debug').html(error);
        }
    });



};
//khởi động các trạng thái ban đầu của đơn hàng
function init_checkbox_km() {
    /*$('.check-box-km').on('change',function(){
     alert('abc');  
     });*/
    $.each($('.check-box-km'), function (i, item) {
        $(this).on('change', function () {
            check_km(i, this);
            //init_checkbox_km();
        });
    });
}
function check_km(index, _this) {
    //if($(this)){}
    var checked_flag = $(_this).prop('checked');
    if (checked_flag == true) {
        $('#dongia' + index).val(0);
        $('#thanhtoan'+index).val(0);
        $(_this).val(1);
        TotalTongong();
    } else {
        $(_this).val(0);
        get_giavt(index);
        
    }
}
function get_giavt(index) {
    var dvt = $('#ccdvt' + index).combobox('getValue');
    var ma_vt = $('#cctenhang' + index).combobox('getValue');
    if (ma_vt == "*") {

        console.log("gia tri *");
    } else {
        $.ajax({
            type: "POST",
            url: "get_gia.php", //goi toi file ajax.php
            data: "ma_vt=" + ma_vt + "&dvt=" + dvt, //du lieu gui di
            success: function (response) {
                console.log(response);
                try {
                    var data = JSON.parse(response);
                    var gia_=new NumberFormat(data[0].gia);
                    gia_.setPlaces(0);
                    $('#dongia'+index).val(gia_.toFormatted());
                    
                    onChangeSoLuong('',index);
                } catch (e) {
                    console.log("Lỗi parse data trong hàm get_giavt ");
                }
                

            },
            error: function (e) {
                console.log(e);
            }
        });
    }
}
function check_box_checked_km(index){
    var checked_flag = $('#check_km'+index).prop('checked');
    if(checked_flag==true){return true;}
    return false;
}

