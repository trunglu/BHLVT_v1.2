function addinputfile(name,id,eappend) {
    var finput = "<input type=\"file\" name=\"" + name + "\" id=\"" + id + "\" class='form-control input-sm'/>";
    $(eappend).append(finput);
}
function removefinput(id) {
    $(id).remove();
}
function addRowfinputmis1(tableID,name) {

    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;
    // alert(rowCount);
    //return;
    //console.log(rowCount);
    var row = table.insertRow(rowCount);
    // number of columns in table 
    var colCount = table.rows[0].cells.length;
    //console.log(rowCount);
    rowCount = parseInt($('#' + tableID).data('row'));
    
    for (var i = 0; i < colCount; i++) {
        // moi bien la mot cel // column
        var newcell = row.insertCell(i);
        if (i == 0) {
            newcell.innerHTML = "<input type=\"file\" name=\"" + name + "\" id=\"" + name + rowCount + "\" class='form-control input-sm'/>";
        }
        if (i == 1) {
            newcell.innerHTML = "";
        }
        if (i == 2) {
            newcell.innerHTML = "<a class=\"btn btn-danger btn-flat btn-xs\" onclick=\"return deleteRow(this);\"><i class=\"fa fa-trash\"></i></a>";
        }
    }
    $('#' + tableID).data('row', rowCount + 1);
    $('#' + tableID).attr('data-row', rowCount + 1);
   
}
function deleteRow(_this) {
    $(_this).parent('td').parent('tr').remove();
}
function onchangeFileImgUp(selector) {
    
    console.log($(selector).html());
    $(selector).change(function () {
        var _this = this;
        if (checkValidImg($(this).val().toLowerCase())) {
            if (typeof (FileReader) != "undefined") {
                var reader = new FileReader();
                reader.onload = function (e) {
                    onloadFile(_this);
                };
                reader.readAsDataURL($(this)[0].files[0]);
            }
            else {
                alert("Trình duyệt không hỗ trợ FileReader");
            }
        } else {
            alert("Chọn đúng định dạng :(.jpg|.jpeg|.gif|.png|.bmp)");
            $(this).val(null);
        }
    });
}
function onchangeFileMediaUp(selector) {
    
    $(selector).change(function () {
        var _this = this;
        if (checkValidMedia($(this).val().toLowerCase())) {
            if (typeof (FileReader) != "undefined") {
                var reader = new FileReader();
                reader.onload = function (e) {
                    //console.log(e);
                    onloadFile(_this);
                };
                reader.readAsDataURL($(this)[0].files[0]);
            }
            else {
                alert("Trình duyệt không hỗ trợ FileReader");
            }
        } else {
            alert("Chọn đúng định dạng: (.mp4|.flv|.3gp|.mvw|.aac)");
            $(this).val(null);
        }
    });
}
function checkValidImg(nameFile) {
    var regex=/^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png|.bmp)$/;
    if (regex.test(nameFile)) {
        return true;
    }
    return false;
}
function checkValidMedia(nameFile) {
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.mp4|.flv|.3gp|.mvw|.aac)$/;
    if (regex.test(nameFile)) {
        return true;
    }
    return false;
}
function onloadFile(_this) {
    var img = $(_this).parent('td').parent('tr').children('td').children('img');
    var inputimg = $(_this).parent('td').parent('tr').children('td').children('[name="image"]');
    //
    //removeImg(img);
    if (typeof (img) != "undefined") {
        $(img).remove();
        $(inputimg).remove();
    }
}
function removeImg(selector) {
    $(selector).remove();
}