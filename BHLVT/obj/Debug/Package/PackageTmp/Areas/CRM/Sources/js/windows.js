function window_open(url, name, width, height) {
    windowChild = window.open('' + url, name, 'left=20,top=20,width=' + width + ',height=' + height + ',toolbar=0,resizable=0,scrollbars=1');
    return false;
    //alert(name);
    //window.open(''+url,name,'height=255,width=250,toolbar=no,directories=no,status=no,menubar=no,scrollbars=1,resizable=no');

}
function checkvar() {
    if (confirm("Ok ?")) {
        return true;
    }
    return false;
}
function checkdel() {
    if (confirm("Ok ?")) {
        return true;
    }
    return false;
}
$(document).ready(function () {
    
    $('.datepicker').datepicker({
        format: "dd/mm/yyyy",
    });
    
    $('.decimal-mask').inputmask('decimal', {
        rightAlign: true,
        'groupSeparator': ',',
        'autoGroup': true
    });
});