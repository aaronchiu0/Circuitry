class Connection {
	position = new Vector(0, 0);
	state = false;
	button = createButton("");
	
	connected = false;
	
	constructor(x, y) {	
		this.position.set(x, y);
	}
	
	setPosition(x, y) {
		this.position.set(x, y);
	}
	
	show() {
		this.button.position(this.position.x - this.button.width/2, this.position.y - this.button.height/2);
		this.button.mousePressed(() => { 
			this.selected();
		});
		this.button.style("background-color", this.changeColour());
	}
	
	over() {
		if (dist(this.position.x, this.position.y, mouseX, mouseY) < 4)
			return true;
		else
			return false;
	}
	
	changeColour() {
		if (this.state)
			return color(11, 102, 35);
		else
			return color(255, 8, 0);
	}
	
	selected() {	
		if (this.state == true && wireSelected == false) {
			//this.state = !this.state;			
		} 
		else if (this.state == false && wireSelected == false) {
			addWire(this);
			this.state = true;
		}
		else if (this.state == true && wireSelected == true) {
			
		}
		else if (this.state == false && wireSelected == true) {
			wires[wires.length-1].end.set(mouseX, mouseY);
			wires[wires.length-1].state = false;
			wireSelected = false;
			this.state = true;
		}
	}
}

function addWire(element) {
	console.log("new wire " + element.position.x + " " + element.position.y);
	wires.push(new Wire(element.position.x, element.position.y, mouseX, mouseY, true));
	wireSelected = true;
}

function removeWire(element) {
	console.log("remove wire " + element.position.x + " " + element.position.y);
	wires.pop();
	wireSelected = false;
}