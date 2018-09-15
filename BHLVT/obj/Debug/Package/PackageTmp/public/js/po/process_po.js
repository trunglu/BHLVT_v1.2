var baseurl = $('.main-header a').attr('href');

$(document).ready(function () {
   
    process_scroll_table();
});
function process_scroll_table() {
    // Change the selector if needed
    var $table = $('table.scroll'),
        $bodyCells = $table.find('tbody tr:first').children(), colWidth;

    // Adjust the width of thead cells when window resizes
    $(window).resize(function () {
        //$table.
        //$table.fadeOut();
        setTimeout(function () {
            // Get the tbody columns width array
            colWidth = $bodyCells.map(function () {
                return $(this).width();
            }).get();

            // Set the width of thead columns
            $table.find('thead tr').children().each(function (i, v) {
                console.log("Dài cột " + i + ":" + colWidth[i]);
                // $(v).width(colWidth[i]);
                $(v).css('width', colWidth[i] + 1);
            });
            $table.fadeIn();
        }, 200);
    }).resize(); // Trigger resize handler
}

var search_itemvt = function (index, id) {
    var options = {
        url: function (phrase) {
            return baseurl + "Ultils/SearchVT";
        },
        getValue: function (element) {
            return element.text;
        },
        ajaxSettings: {
            dataType: "json",
            method: "GET",
            data: {
                dataType: "json"
            }
        },
        preparePostData: function (data) {
            data.phrase = $("#" + id).val();
            return data;
        },
        requestDelay: 00,
        list: {
            /* match: {
                 enabled: true
             },*/
            showAnimation: {
                type: "normal", //normal|slide|fade
                //time: 400,
                callback: function () {

                }
            },
            maxNumberOfElements: 5,
            hideAnimation: {
                type: "slide", //normal|slide|fade
                time: 400,
                callback: function () { }
            },
            onLoadEvent: function () {
                /* var num = check_ele_autocombobox();
                 $('#num_address').data('numaddress', num);
                 if (num > 0) {
                 num = '<b style="color:yellow">' + num + '</b>';
                 }
                 $('#num_address').html(num);*/
                $('.item-vt').click(function () {
                    var id_vt = $(this).data('id');
                    console.log(id_vt);
                    $('#l_poct2_' + index + '__ma_vt').combobox('select', id_vt);
                    //$('#cccus').combobox('select', cus_id);
                });


            },
            onMouseOverEvent: function () {
                //alert('abc');
                //val = $('#dienthoai').val();
                // $('#num_address').data('numaddress',123);
                // console.log($('#num_address').data('numaddress')) ;

            },
            onChooseEvent: function (item) {
                //console.log(item);
                //  $('#dienthoai').val($(this).val());
            },
            onHideListEvent: function () {
                /* var val = $('#address_').val();
                 if (val == '') {
                 $('#eac-container-address_ ul').html('');
                 }
                 var num = check_ele_autocombobox();
                 $('#num_address').data('numaddress', num);
                 if (num > 0) {
                 num = '<b style="color:yellow">' + num + '</b>';
                 }
                 $('#num_address').html(num);*/


            }
        },
        /*template: {
         type: "description",
         fields: {
         description: "name"
         }
         },*/
        template: {
            type: "custom",
            method: function (value, item) {

                return '<div class="item-vt" style="font-size:smaller;text-align:left" data-id="' + item.id + '" data-address="" data-text="' + item.text + '"> ' + value + '</div>';
            }
        }
    };

    $("#" + id).easyAutocomplete(options);

};


var oninitHangHoa = function (index,id, data) {
    search_itemvt(index,id);

    jQuery.ajax({
        type: "GET",
        url: baseurl + "Ultils/GetTenVT", //goi toi file ajax.php
        //data: "Ma_nhvt=" + ma_nhvt, //du lieu gui di
        success: function (response) {
            console.log(JSON.parse(response));
            //alert(data);
            //jQuery("select[name='cboNhVT[]']").html(response);
            $('#l_poct2_'+index+'__ma_vt' ).combobox({
                panelHeight: 'auto',
                selectOnNavigation: false,
                valueField: 'id',
                textField: 'text',
                editable: true,
                required: true,
                validType: 'exists["' + '#l_poct2_' + index + '__ma_vt' + '"]',
                onSelect: function () {
                    console.log("abc");
                    if (data != null) {
                        console.log("chọn vt:" + data);
                        //onChangeHangHoa(index);
                    } else {
                        console.log("chọn vt ko data:" + data);
                        //onChangeHangHoa(index);
                    }
                },
                /*onChange: function () {
                    /*alert("abc");
                    console.log("abc");
                    if (data != null) {
                        console.log("chọn vt:" + data);
                        onChangeHangHoa(index);
                    } else {
                        console.log("chọn vt ko data:" + data);
                        onChangeHangHoa(index);
                    }
                },*/
                filter: function (q, row) {
                    console.log(row);
                    return row.text.toLowerCase().indexOf(q.toLowerCase()) >= 0;
                },
                data: JSON.parse(response),
                onLoadSuccess: function () {
                    console.log("Load thành công vt");
                    if (data != null) {
                        console.log("select data....");
                        $('#l_poct2_' + index + '__ma_vt').combobox('select', data.ten);

                        //$('#cctenhang' + index).combobox('setValue', data.ten);
                    } else {
                        $('#l_poct2_' + index + '__ma_vt').combobox('setValue', '*');
                    }
                }
            });
            //$('#cctenhang' + index).hide();
            // $('#cctenhang' + index + ' .textbox').hide();

        },
        error: function (reponse) {
            alert("error: " + response);
        }
    });


};

function addRow(tableID) {

    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;
    // alert(rowCount);
    //return;
    //console.log(rowCount);
    var row = table.insertRow(rowCount);
    // number of columns in table 
    var colCount = table.rows[0].cells.length;
    //rowCount = parseInt($('#' + tableID).data('row'));
    console.log(rowCount);
    for (var i = 0; i < colCount; i++) {
        // moi bien la mot cel // column
        var newcell = row.insertCell(i);
        
       // console.log("cell " + i + " :" + table.rows[1].cells[i].offsetWidth);
        newcell.style.width = table.rows[1].cells[i].offsetWidth+"px";
        if (i != 1) {
            if (i == 0) {
                newcell.innerHTML = table.rows[1].cells[i].innerHTML;
            }
        }

        if (i == 1) {
            //newcell.className = "hidden";
            newcell.innerHTML = '<div style="width:200px"><div class="hidden">'+
                '<input name="l_poct2[' + (rowCount - 1) + '].ma_vt" id="l_poct2_' + (rowCount - 1) + '__ma_vt" class="easyui-combobox" data-options="valueField:\'id\',textField:\'text\'" value="" />' +
                                                                        '</div>'+
                                                                        '<input type="text" name="l_poct2[' + (rowCount - 1) + '].ten_vt" class="form-control input-sm" id="l_poct2_' + (rowCount - 1) + '__ten_vt" value=""  placeholder="Tên hàng"/>' +
                                                                    '</div>';
            var data = {};
            oninitHangHoa((rowCount - 1), 'l_poct2_' + (rowCount - 1) + '__ten_vt', data);
            //onInitSup('ccsup' + (rowCount - 1), (rowCount - 1));
        } else if (i == 2) {
            //newcell.className = "hidden";
            newcell.innerHTML = '<div style="width:50px">' + '<input type="text" name="l_poct2[' + (rowCount - 1) + '].dvt" class="form-control input-sm" id="l_poct2_' + (rowCount - 1) + '__dvt" value=""  placeholder=""/>' + '</div>'
                ;
            //initCombo('ccnhomhang' + (rowCount - 1));
        } else if (i == 3) {
            newcell.innerHTML = '<div style="width:70px">' + '<input type="text" name="l_poct2[' + (rowCount - 1) + '].ma_kho" class="form-control input-sm" id="l_poct2_' + (rowCount - 1) + '__ma_kho" value=""  placeholder=""/>' + '</div>'

            //initComboTenHang('cctenhang' + (rowCount - 1));
            //oninitHangHoa((rowCount - 1));

        } else if (i == 4) {
            //newcell.innerHTML = '<input type="hidden" id="namedvt' + (rowCount - 1) + '" name="namedvt[' + (rowCount - 1) + ']" value=""/><input id="ccdvt' + (rowCount - 1) + '" name="ccdvt[' + (rowCount - 1) + ']" value="Đơn VT" style="width: 80px;height: 34px;">';
            //initComboDVT('ccdvt' + (rowCount - 1));
            newcell.innerHTML = '<div style="width:70px">' + '<input type="text" name="l_poct2[' + (rowCount - 1) + '].so_luong" class="form-control input-sm" id="l_poct2_' + (rowCount - 1) + '__so_luong" value=""  placeholder=""/>' + '</div>'

        } else if (i == 5) {
            //newcell.innerHTML = ' <input type="text" class="form-control" maxlength="6" size="6" value="0" onblur="onChangeSoLuong(soluong' + (rowCount - 1) + ',' + (rowCount - 1) + ')" onkeyup="onChangeSoLuong(soluong' + (rowCount - 1) + ',' + (rowCount - 1) + ')" name="soluong[' + (rowCount - 1) + ']" id="soluong' + (rowCount - 1) + '" onfocus="select_value(' + (rowCount - 1) + ')" style="text-align:center; width:100px;height: 34px"/>';
            //initNumberSoluong('soluong' + (rowCount - 1), (rowCount - 1));
            newcell.innerHTML = '<div style="width:70px">' + '<input type="text" name="l_poct2[' + (rowCount - 1) + '].gia" class="form-control input-sm" id="l_poct2_' + (rowCount - 1) + '__gia" value=""  placeholder=""/>' + '</div>'

        } else if (i == 6) {
            //newcell.innerHTML = ' <input type="checkbox" class="check-box-km" name="check_km' + (rowCount - 1) + '" value="' + (rowCount - 1) + '" style="width: 50px;" id="check_km' + (rowCount - 1) + '"/>';
            //init_checkbox_km();
            newcell.innerHTML = '<div style="width:70px">' + '<input type="text" name="l_poct2[' + (rowCount - 1) + '].tien" class="form-control input-sm" id="l_poct2_' + (rowCount - 1) + '__tien" value=""  placeholder=""/>' + '</div>'

        } else if (i == 7) {
           // newcell.innerHTML = ' <input type="text" class="form-control" onkeyup="onChangeGia(dongia' + (rowCount - 1) + ',' + (rowCount - 1) + ')" value="0" name="dongia[' + (rowCount - 1) + ']" id="dongia' + (rowCount - 1) + '" style="text-align:right; width:100px;"/>';
            newcell.innerHTML = '<div style="width:100px">' + '<input type="text" name="l_poct2[' + (rowCount - 1) + '].tien" class="form-control input-sm" id="l_poct2_' + (rowCount - 1) + '__tien" value=""  placeholder=""/>' + '</div>'

        } else if (i == 8) {
            //newcell.innerHTML = ' <input type="hidden" value="1" id="flagdiscount' + (rowCount - 1) + '"/> <input onblur="changeCK(chietkhau' + (rowCount - 1) + ',' + (rowCount - 1) + ')" onclick="changeCK(chietkhau' + (rowCount - 1) + ',' + (rowCount - 1) + ')" onkeyup="changeCK(chietkhau' + (rowCount - 1) + ',' + (rowCount - 1) + ')" name="chietkhau[' + (rowCount - 1) + ']" id="chietkhau' + (rowCount - 1) + '" value="0" style="text-align:right; width:60px;height: 34px"/>';
            //initNumberCK('chietkhau' + (rowCount - 1), (rowCount - 1));
            newcell.innerHTML = '<div style="width:70px">' + '<input type="text" name="l_poct2[' + (rowCount - 1) + '].ts_nk" class="form-control input-sm" id="l_poct2_' + (rowCount - 1) + '__ts_nk" value=""  placeholder=""/>' + '</div>'


        } else if (i == 9) {
            //newcell.innerHTML = ' <input readonly type="text" class="form-control"   name="tienck[' + (rowCount - 1) + ']" id="tienck' + (rowCount - 1) + '" value="0" onkeyup="onChangeFixedDiscount(tienck' + (rowCount - 1) + ',' + (rowCount - 1) + ')" style="text-align:right; width:100px;"/>';
            //initTienCK('tienck' + (rowCount - 1), (rowCount - 1));
            newcell.innerHTML = '<div style="width:70px">' + '<input type="text" name="l_poct2[' + (rowCount - 1) + '].thue_nk" class="form-control input-sm" id="l_poct2_' + (rowCount - 1) + '__thue_nk" value=""  placeholder=""/>' + '</div>'


        } else if (i == 10) {
            //newcell.innerHTML = '<input type="text" class="form-control thanhtoan" readonly name="thanhtoan[' + (rowCount - 1) + ']" id="thanhtoan' + (rowCount - 1) + '" value="0" style="text-align:right; width:130px;"/>';
            newcell.innerHTML = '<div style="width:100px">' + '<input type="text" name="l_poct2[' + (rowCount - 1) + '].thue_nk" class="form-control input-sm" id="l_poct2_' + (rowCount - 1) + '__thue_nk" value=""  placeholder=""/>' + '</div>'

        }
        else if (i == 11) {
            //newcell.innerHTML = '<input type="text" class="form-control thanhtoan" readonly name="thanhtoan[' + (rowCount - 1) + ']" id="thanhtoan' + (rowCount - 1) + '" value="0" style="text-align:right; width:130px;"/>';
            newcell.innerHTML = '<div style="width:70px">' + '<input type="text" name="l_poct2[' + (rowCount - 1) + '].ts_gtgt" class="form-control input-sm" id="l_poct2_' + (rowCount - 1) + '__ts_gtgt" value=""  placeholder=""/>' + '</div>'

        }
        //console.log("Bảng table" + newcell.innerHTML);
        $('#' + tableID).data('row', rowCount + 1);
    }
}
function deleteRow(tableID) {
    try {
        if (confirm("Bạn muốn xóa những mục đã chọn ?")) {
            var table = document.getElementById(tableID);
            var rowCount = table.rows.length;
            for (var i = 0; i < rowCount; i++) {
                var row = table.rows[i];
                var chkbox = row.cells[0].childNodes[1];
                if (null != chkbox && true == chkbox.checked) {
                    // alert("Ban da xoa mot dong du lieu?");
                    if (rowCount <= 2) {
                        //alert("Cannot delete all the rows.");
                        break;
                    }
                    table.deleteRow(i);
                    changeIDRow(tableID, i);
                    rowCount--;
                    i--;
                }
            }
        }

    } catch (e) {
        alert(e);
    }
}
function changeIDRow(tableID,i_start) {
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;
    console.log(rowCount+' ' +i_start);
    for (var i = i_start; i < rowCount ; i++) {
        if (typeof $('#l_poct2_' + (i + 1) + '__ten_vt') != 'undefined') {
            $('#l_poct2_' + (i) + '__ten_vt').attr('id', 'l_poct2_' + (i-1) + '__ten_vt');
            $('#l_poct2_' + (i - 1) + '__ten_vt').attr('name', 'l_poct2[' + (i - 1) + '].ten_vt');
            var data = {};
            oninitHangHoa((i - 1), 'l_poct2_' + (i - 1) + '__ten_vt', data);
        }
    }
}

