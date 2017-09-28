function limitDrag(id) {
	Drag.call(this, id);
}

for (var i in Drag.prototype) {
	limitDrag.prototype[i] = Drag.prototype[i];
};

limitDrag.prototype.ll = function(e) {
	var e = ev || event;

			this.oDiv.style.left = e.clientX - this.disX + 'px';
			this.oDiv.style.top = e.clientY - this.disY + 'px';


};

limitDrag.prototype.mmove = function(ev) {
	var e = ev || event;
	var l = e.clientX - this.disX;
	var t = e.clientY - this.disY;
	if (l < 0) {
		l = 0;
	} else if (l > document.documentElement.clientWidth - this.oDiv.offsetWidth) {
		l = document.documentElement.clientWidth - this.oDiv.offsetWidth;
	}
	if (t < 0) {
		t = 0;
	} else if (t > document.documentElement.clientHeight - this.oDiv.offsetHeight) {
		t = document.documentElement.clientHeight - this.oDiv.offsetHeight;
	}
	this.oDiv.style.left = l + 'px';
	this.oDiv.style.top = t + 'px';

};