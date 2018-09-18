/*(function ($) {
    function getParentMenu(rootMenu, menu) {
        return findParent(rootMenu);

        function findParent(pmenu) {
            var p = undefined;
            $(pmenu).find('.menu-item').each(function () {
                if (!p && this.submenu) {
                    if ($(this.submenu)[0] == $(menu)[0]) {
                        p = pmenu;
                    } else {
                        p = findParent(this.submenu);
                    }
                }
            });
            return p;
        }
    }

    function getParentItem(pmenu, menu) {
        var item = undefined;
        $(pmenu).find('.menu-item').each(function () {
            if ($(this.submenu)[0] == $(menu)[0]) {
                item = $(this);
                return false;
            }
        });
        return item;
    }


    $.extend($.fn.menubutton.methods, {
        enableNav: function (enabled) {
            var curr;
            $(document).unbind('.menubutton');
            if (enabled == undefined) { enabled = true; }
            if (enabled) {
                $(document).bind('keydown.menubutton', function (e) {
                    var currButton = $(this).find('.m-btn-active,.m-btn-plain-active,.l-btn:focus');
                    if (!currButton.length) {
                        return;
                    }

                    if (!curr || curr.button != currButton[0]) {
                        curr = {
                            menu: currButton.data('menubutton') ? $(currButton.menubutton('options').menu) : $(),
                            button: currButton[0]
                        };
                    }
                    var item = curr.menu.find('.menu-active');

                    switch (e.keyCode) {
                        case 13:  // enter
                            item.trigger('click');
                            break;
                        case 27:  // esc
                            currButton.trigger('mouseleave');
                            break;
                        case 38:  // up
                            var prev = !item.length ? curr.menu.find('.menu-item:last') : item.prevAll('.menu-item:first');
                            prev.trigger('mouseenter');
                            return false;
                        case 40:  // down
                            var next = !item.length ? curr.menu.find('.menu-item:first') : item.nextAll('.menu-item:first');
                            next.trigger('mouseenter');
                            return false;
                        case 37:  // left
                            var pmenu = getParentMenu(currButton.data('menubutton') ? $(currButton.menubutton('options').menu) : $(), curr.menu);
                            if (pmenu) {
                                item.trigger('mouseleave');
                                var pitem = getParentItem(pmenu, curr.menu);
                                if (pitem) {
                                    pitem.trigger('mouseenter');
                                }
                                curr.menu = pmenu;
                            } else {
                                var prev = currButton.prevAll('.l-btn:first');
                                if (prev.length) {
                                    currButton.trigger('mouseleave');
                                    prev.focus();
                                }
                            }
                            return false;
                        case 39:  // right
                            if (item.length && item[0].submenu) {
                                curr.menu = $(item[0].submenu);
                                curr.button = currButton[0];
                                curr.menu.find('.menu-item:first').trigger('mouseenter');
                            } else {
                                var next = currButton.nextAll('.l-btn:first');
                                if (next.length) {
                                    currButton.trigger('mouseleave');
                                    next.focus();
                                }
                            }
                            return false;
                    }
                });
            }
        }
    });
})(jQuery);*/
var setHeightItemMenu = function (selector) {
    if (typeof ($(selector)) !== "undefined") {
        if (typeof ($(selector).data("options")) !== "undefined") {
            console.log($(selector).data("options"));
            const options = JSON.parse($.trim($(selector).data("options")));
            
            /*if (typeof (options.itemHeight !== "undefined")) {
                $(selector).menu({ itemHeight: options.itemHeight });
            }*/
        }
    }
};
    /*$(function () {
        $.fn.menubutton.methods.enableNav();
        $(document).keydown(function (e) {
            if (e.altKey && e.keyCode == 87) {
                $('#btn-home').focus();
            }
        });
    });*/
	
class MenuButton {
	constructor(selector) {
		this.selector = selector;
		this.InitializeSave();
		this.InitializeAdd();
		this.InitializeEdit();
		this.InitializeRemove();
		this.InitializePrint();
		this.InitializeNext();
		this.InitializePrevious();
		this.InitializeReset();
		this.InitializeCopy();
		this.saveFunc = undefined;
		this.addFunc = undefined;
		//this
	}
	
	InitializeSave() {
		$(this.selector).find(".btn-save").off().on('click',this.save.bind(this));
	}
	
	InitializeAdd() {
		$(this.selector).find(".btn-add").off().on('click',this.add.bind(this));
	}
	
	InitializeEdit() {
		$(this.selector).find(".btn-edit").off().on('click',this.edit.bind(this));
	}
	
	InitializeRemove() {
		$(this.selector).find(".btn-remove").off().on('click',this.remove.bind(this));
	}
	
	InitializePrint() {
		$(this.selector).find(".btn-print").off().on('click',this.print.bind(this));
	}
	
	InitializeNext() {
		$(this.selector).find(".btn-next").off().on('click',this.next.bind(this));
	}
	
	InitializePrevious() {
		$(this.selector).find(".btn-previous").off().on('click',this.previous.bind(this));
	}
	
	InitializeReset() {
		$(this.selector).find(".btn-reset").off().on('click',this.reset.bind(this));
	}
	
	InitializeCopy() {
		$(this.selector).find(".btn-copy").off().on('click',this.copy.bind(this));
	}
	
	save() {
		if(typeof(this.saveFunc) === "function") {
			this.saveFunc();
			return this;
		}
		console.log(this.selector + " click save.");
		return this;
	}
	
	add() {
		if(typeof(this.addFunc) === "function") {
			this.addFunc();
			return this;
		}
		console.log(this.selector + " click add.");
		return this;
	}
	
	edit() {
		if(typeof(this.editFunc) === "function") {
			this.editFunc();
			return this;
		}
		console.log(this.selector + " click edit");
		return this;
	}
	
	print() {
		if(typeof(this.printFunc) === "function") {
			this.printFunc();
			return this;
		}
		console.log(this.selector + " click print.");
		return this;
	}
	
	remove() {
		if(typeof(this.removeFunc) === "function") {
			this.removeFunc();
			return this;
		}
		console.log(this.selector + " click remove.");
		return this;
	}
	
	next() {
		if(typeof(this.nextFunc) === "function") {
			this.nextFunc();
			return this;
		}
		console.log(this.selector + " click next.");
		return this;
	}
	
	previous() {
		if(typeof(this.previousFunc) === "function") {
			this.previousFunc();
			return this;
		}
		console.log(this.selector + " click previous.");
		return this;
	}
	
	reset() {
		if(typeof(this.resetFunc) === "function") {
			this.resetFunc();
			return this;
		}
		console.log(this.selector + " click reset.");
		return this;
	}
	
	copy() {
		if(typeof(this.copyFunc) === "function") {
			this.copyFunc();
			return this;
		}
		console.log(this.selector + " click copy.");
		return this;
	}
}