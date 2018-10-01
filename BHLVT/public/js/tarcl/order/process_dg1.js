// This main file process handle datagrid1 (dg1)
var dg1 = new Datagrid("#donhang_index_dg1");
function onClickCellDg1(index, field) {
    dg1.onClickCell(index, field);
}
function onChangeMaVtDg1(newValue, oldValue) {
    if (newValue !== oldValue) {
        var ed = $(dg1.selectorDg).datagrid('getEditor', { index: dg1.editIndex, field: "IDItem" });
        if (ed != null && typeof (ed.target) !== "undefined") {
            //Xử lý bên client khi nguời dùng thay đổi mã vật tư
            console.log("change giá trị mã vt, giá trị mới: ");
            console.log($(ed.target).val());
        }
    }
}