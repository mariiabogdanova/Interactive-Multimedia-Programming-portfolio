var cnv = document.getElementById('canvas');
	var ctx = cnv.getContext("2d");
	var x_start;
	var x_end;
	var y_start;
	var y_end;
	
	cnv.addEventListener("mousedown", on_mousedown, false);

	function on_mousedown() {
		var x = event.x - cnv.offsetLeft;
    	var y = event.y - cnv.offsetTop;

    	x_start = x;
    	y_start = y;

    	cnv.addEventListener("mouseup", on_mouseup, false);

    	function on_mouseup(){
    		var x = event.x - cnv.offsetLeft;
    		var y = event.y - cnv.offsetTop;

    		x_end = x;
    		y_end = y;

    		ctx.moveTo(x_start,y_start);
			ctx.lineTo(x_end,y_end);
			ctx.stroke();
    	}
	}
	