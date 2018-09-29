function process_check_all_row(id) {
    var _rows = $(id).find('tbody tr');
    var checked = $(id + ' #check-all').prop('checked');
    if (checked) {
        $.each(_rows, function () {
            //$(this).find('.check-row').prop('checked', !$(this).find('.check-row').prop('checked'));
            //$(this).toggleClass('row-hover');
            $(this).find('.check-row').prop('checked', true);
            $(this).addClass('row-hover');
        });
    } else {
        $.each(_rows, function () {
            $(this).find('.check-row').prop('checked', false);
            $(this).removeClass('row-hover');
        });
    }
    
}
function process_delete_all_items(id, urlprocess,urlreturn) {
    if (confirm("Xóa những dòng đã chọn... !")) {
        var _rows = $(id).find('.check-row:checked');
        var ids = [];
        $.each(_rows, function () {
            
            var id = $(this).data('id');
            ids.push(id);
        });
        console.log(ids);
        //return;
        $.ajax({
            url: urlprocess,
            type:"POST",
            data: $('#form-order').serialize(),
            success: function (response) {
                console.log(response);
                //response=JSON
                if (response != null) {
                    response = JSON.parse(response);
                    if (response.Success) {
                        location.reload();
                    }
                    else {
                        alert(response.Message);
                    }
                }
                //window.location = urlreturn;
            },
            error: function () { }
        });

    }

}

function initDatatable(id) {
    $(id+' .row').off().on('click', function (event) {
        
        console.log(event);
        process_click_row(this, event);
        hide_show_btn_delete(id);
        hide_show_btn_edit(id);
        hide_show_btn_preview(id);
        if ($(id).find('.check-row:checked').length != $(id).find('.check-row').length) {
            $('#check-all').prop('checked', false);
        } else {
            $('#check-all').prop('checked', true);
        }
    });
    $(id + ' #check-all').on('change', function () {
        process_check_all_row(id);
        hide_show_btn_delete(id);
        hide_show_btn_edit(id);
        hide_show_btn_preview(id);
    });
    //$()
    //process_delete_all_items();

    $('#delete-all').off().on('click', function () {
        var url = $(this).data('url');
        process_delete_all_items('#datatableOrder', url, null);
    });

    

}
function hide_show_btn_delete(id) {
    var _rows = $(id).find('.check-row:checked').length;
    if (_rows > 0) {
        $('#delete-all').removeClass('hidden');
    }
    else {
        $('#delete-all').addClass('hidden');
    }
}
function hide_show_btn_edit(id) {
    var _rows = $(id).find('.check-row:checked');
    var url = $('#edit').data('url');
    
    idsval = _rows.map(function () {
        return $(this).val();
    }).get().toString();

    //console.log(idsvalid);
    $('#edit').attr('href', url+idsval);

    if (_rows.length > 0) {
        $('#edit').removeClass('hidden');
    }
    else {
        $('#edit').addClass('hidden');
    }
}


function process_click_row(_this, event) {
    var _echecked = $(_this).find('.check-row');
    console.log($(event.target).hasClass('check-row'));
    if (!$(event.target).hasClass('check-row')) {
        _echecked.prop('checked', !_echecked.prop('checked'));
    }
    $(_this).toggleClass('row-hover');

}
function hide_show_btn_preview(id) {
    var _rows = $(id).find('.check-row:checked');
    var url = $('#preview').data('url');

    idsval = _rows.map(function () {
        return $(this).val();
    }).get().toString();

    //console.log(idsvalid);
    $('#preview').attr('href', url + idsval);

    if (_rows.length > 0) {
        $('#preview').removeClass('hidden');
    }
    else {
        $('#preview').addClass('hidden');
    }

}
function process_scroll_table(dimension) {
    // Change the selector if needed
    var $table = $('table.scroll'),
        $bodyCells = $table.find('tbody tr:first').children('td'), colWidth;

    // Adjust the width of thead cells when window resizes
    $(window).resize(function () {
        //$table.fadeOut();
        // Get the tbody columns width array
        colWidth = $bodyCells.map(function () {
            return $(this).outerWidth();
        }).get();

        // Set the width of thead columns
        $table.find('thead tr').children().each(function (i, v) {
            //$bodyCells.get(i).css();
            console.log("Dài cột " + i + ":" + (colWidth[i] + dimension));
            if (colWidth[i] > 16) {
                $(v).css('width', colWidth[i] + dimension);
            } else {
                $(v).css('width', colWidth[i]);
            }

        });
        $table.fadeIn();
    }).resize(); // Trigger resize handler
}