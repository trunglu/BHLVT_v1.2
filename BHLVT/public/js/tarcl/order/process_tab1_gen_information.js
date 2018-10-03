var base_url = $('.main-header .logo').attr('href');
var form_gen_tab1 = new FormData('#form-tab1-gen');
//Khai báo tạm biến mã cty để truy vấn dữ liệu
// Trên thực tế sẽ sử dụng cookies để truy vấn giá trị của biến này
var ma_ct = 'SO1';
form_gen_tab1.prepareLoadField();
function unitRateTab1Change(newValue, oldValue) {
    if (newValue !== oldValue) {
        $.ajax({
            url: base_url + 'api/LstExchangeRate/GetExChangeRatePOST',
            type: 'POST',
            data: {
                ma_nt: newValue,
                ma_cty: ma_ct
            },
            success: function (data) {
                if (data !== null && typeof (data.ty_gia) !== "undefined") {
                    form_gen_tab1.setValue("rate_tab1", data.ty_gia);
                }
                else {
                    form_gen_tab1.setValue("rate_tab1", 0);
                }
            },
            error: function (response) {
                console.log(response);
            }
        });
    }
}
