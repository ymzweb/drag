function Drag(id){
	var _this = this;
	this.oDiv = document.getElementById(id);

	this.oDiv.onmousedown = function(ev) {
		_this.mdown(ev);
		return false;//阻止默认事件
	};
	this.disX = 0;
	this.disY = 0;
}

Drag.prototype.mdown = function(ev) {
	var e = ev || event;
	var _this = this;
	this.disX = e.clientX - this.oDiv.offsetLeft;
	this.disY = e.clientY - this.oDiv.offsetTop;

	document.onmousemove = function(ev) {
		_this.mmove(ev);
	};
	document.onmouseup = function() {
		_this.mup();
	};

};

Drag.prototype.mmove = function(ev) {
	var e = ev || event;

	this.oDiv.style.left = e.clientX - this.disX + 'px';
	this.oDiv.style.top = e.clientY - this.disY + 'px';

};

Drag.prototype.mup = function() {
	document.onmousemove = null;
	document.onmouseup = null;
};