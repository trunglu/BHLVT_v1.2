let menu1 = new MenuButton('#menu1');
menu1.addFunc = function() {
	console.log("Đã customize function add...");
	//this context menu1 object
	console.log("Selector " + this.selector);
};
menu1.editFunc = function() {
	console.log("Đã customize function edit...");
};