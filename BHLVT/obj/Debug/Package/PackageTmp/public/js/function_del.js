var baseurl = $('.main-header a').attr('href');
function function_del() {
    //xoa 1 don hang
    this.del = function (index, stt_rec, ngayht, ngayct) {
        if (confirm("Bạn chắc chắn muốn xóa dòng đang chọn hay không")) {

            if (/*sosanhngay(ngayct, ngayht) >= 0*/true) {
                if (!checkKhoaSo()) {
                    $.ajax({
                        url: baseurl+"Ultils/DelDH",
                        type: 'post',
                        data: "stt_rec=" + stt_rec,
                        success: function (result) {
                            if (result == "") {
                                console.log(result);
                                //console.log("Thành công 1");
                                window.location = baseurl + "DonHang";
                            } else {
                                $.notify(result);
                            }
                        },
                        error: function (result_) {
                            console.log('Lỗi khi xoá: ' + result_.toString());
                        }
                    });
                 
                } else {
                    alert('Không thể xoá.Chức năng này đã bị Admin khoá..');
                }
            } else {
                alert('Đơn hàng này không thể xoá vì không phải của ngày hôm nay...');
            }
        }
        // window.location="donhang.php";
    };
}
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
var checkKhoaSo = function () {
    
    var khoa = $('.khoa').data('khoa');
    if (khoa == 1)
        return true;
    return false;

};
var checkDel = function (stt_rec) {
    //var data_;
    /*$.ajax({
     url: 'update_soph1.php?stt_rec=' + stt_rec,
     type: 'GET',
     success: function (data) {
     
     var data_ = JSON.parse(data);
     console.log(data_);
     if (data_['stt_xuat'] == 0)
     return true;
     return false;
     
     },
     error: function () {
     
     }
     
     });*/
    // 



};
call_function = "";
$(window).ready(function () {
    call_function = new function_del();
});