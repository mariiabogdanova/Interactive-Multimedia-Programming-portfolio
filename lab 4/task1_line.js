var cnv = document.getElementById('canvas');
	var ctx = cnv.getContext("2d");
	var x_start;
	var x_end;
	var y_start;
	var y_end;
	var dragging = false;
	var snapshot;
	var x_drag;
	var y_drag;
	
	cnv.addEventListener("mousedown", on_mousedown, false);

	function on_mousedown() {

			snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);

		var x = event.x - cnv.offsetLeft;
    	var y = event.y - cnv.offsetTop;

    	x_start = x;
    	y_start = y;
		dragging = true;

		cnv.addEventListener('mousemove', on_move, false);

		    	function on_move(){

    	if (dragging==true) {

    	var x = event.x - cnv.offsetLeft;
    	var y = event.y - cnv.offsetTop;

    	var x_drag = x;
		var y_drag = y;


    	ctx.putImageData(snapshot, 0, 0);

	    ctx.beginPath();
	    ctx.moveTo(x_start, y_start);
	    ctx.lineTo(x_drag, y_drag);
	    ctx.stroke();
			}
		}



    	cnv.addEventListener("mouseup", on_mouseup, false);

    	function on_mouseup(){
    		dragging = false;
    		ctx.putImageData(snapshot, 0, 0);


    		var x = event.x - cnv.offsetLeft;
    		var y = event.y - cnv.offsetTop;

    		x_end = x;
    		y_end = y;

    		ctx.moveTo(x_start,y_start);
			ctx.lineTo(x_end,y_end);
			ctx.stroke();
    	}

	}
	