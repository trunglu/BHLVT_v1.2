class Datagrid {
    constructor(selectorDg) {
        this.selectorDg = selectorDg;
        this.editIndex = undefined;
    }

    endEditing() {
        if (this.editIndex == undefined) { return true }
        if ($(this.selectorDg).datagrid('validateRow', this.editIndex)) {
            $(this.selectorDg).datagrid('endEdit', this.editIndex);
            this.editIndex = undefined;
            return true;
        } else {
            return false;
        }
    }

    onClickCell(index, field, _clickCell) {
        if (typeof (_clickCell) !== "undefined") {
            _clickCell(index, field, this.selectorDg);
        }
        else {
            if (this.editIndex != index) {
                if (this.endEditing()) {
                    $(this.selectorDg).datagrid('selectRow', index)
                            .datagrid('beginEdit', index);
                    var ed = $(this.selectorDg).datagrid('getEditor', { index: index, field: field });
                    if (ed) {
                        ($(ed.target).data('textbox') ? $(ed.target).textbox('textbox') : $(ed.target)).focus();
                    }
                    this.editIndex = index;
                } else {
                    setTimeout(function () {
                        $(this.selectorDg).datagrid('selectRow', this.editIndex);
                    }, 0);
                }
            }
        }
    }

}