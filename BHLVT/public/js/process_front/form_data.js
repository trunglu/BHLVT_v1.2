// This class use Jquery mainly
class FormData {
    constructor(selector) {
        this.selector = selector;
        this.arrayNameField = [];
    }

    addNameField(name, value) {
        this.arrayNameField.push(name);
        this[name] = value;
        return this;
    }

    setValue(name, value) {
        this[name] = value;
        this.setValueToShowFront(name, value);
        return this;
    }

    //render to front (JQuery)
    setValueToShowFront(nameField, value) {
        var ed = $(this.selector).find("[textboxname='" + nameField + "']");
        if (typeof (ed) !== "undefined") {
            // textbox function as base function EasyUI
            ed.textbox('setValue', value);
        }
    }

    // handle through Jquery
    prepareLoadField() {
        $.each($(this.selector + ' .form-control'), (function (index, item) {
            this.addNameField($(item).attr("name"), $(item).val());
        }).bind(this));
    }



}
