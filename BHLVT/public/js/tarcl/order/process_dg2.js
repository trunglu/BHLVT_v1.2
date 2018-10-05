var dg2 = new Datagrid("#donhang_index_dg2");
function onClickCellDg2(index, field) {
    dg2.onClickCell(index, field);
}
function onChangeMaVtDg2(newValue, oldValue) {
    if (newValue !== oldValue) {
        var ed = $(dg2.selectorDg).datagrid('getEditor', { index: dg2.editIndex, field: "IDItem" });
        if (ed != null && typeof (ed.target) !== "undefined") {
            //Xử lý bên client khi nguời dùng thay đổi mã vật tư
            console.log("change giá trị mã vt, giá trị mới: ");
            console.log($(ed.target).val());
        }
    }
}