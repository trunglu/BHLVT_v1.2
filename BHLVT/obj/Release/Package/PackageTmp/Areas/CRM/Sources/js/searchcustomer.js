function searchcustomer() {
    if (frm.searchname.value == "") {
        alert("Vui lòng kiểm tra tên cần tìm");
        frm.searchname.focus();
        return false;
    }
    window.open("/crm/schs/SearchCus?searchname=" + frm.searchname.value, "skh", "toolbar=1,resizable=1,scrollbars=1");
}