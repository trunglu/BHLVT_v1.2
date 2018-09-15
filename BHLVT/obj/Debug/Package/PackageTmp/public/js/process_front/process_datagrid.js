class Datagrid {
    constructor(selectorDg) {
        this.selectorDg = selectorDg;
        this.editIndex = undefined;
        this.dataDefaultRow = {};
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

     append() {
           if (this.endEditing()) {
               $(this.selectorDg).datagrid('appendRow',this.dataDefaultRow);
               this.editIndex = $(this.selectorDg).datagrid('getRows').length - 1;
               $(this.selectorDg).datagrid('selectRow', this.editIndex)
                        .datagrid('beginEdit', this.editIndex);
           }
     }

     accept(_accept) {
         if (this.endEditing()) {
             $(this.selectorDg).datagrid('acceptChanges');
             if (typeof (_accept) !== "undefined") {
                 _accept();
             }
         }
     }
     removeit() {
         if (this.editIndex == undefined) { return; }
         $(this.selectorDg).datagrid('cancelEdit', this.editIndex)
                 .datagrid('deleteRow', this.editIndex);
         this.editIndex = undefined;
     }

     setDefaultDataRow(data) {
         this.dataDefaultRow = data;
         return this;
     }

}