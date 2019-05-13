class Device {
	position = new Vector(0, 0);
	movable = false;
	
	name;
	
	links = [ new Connection(this.position.x, this.position.y-20), new Connection(this.position.x, this.position.y+20) ]
	
	constructor(name, x, y, state) {
		this.name = name;		
		this.position.set(x, y);		
		this.movable = state;		
	}
	
	setPosition(x, y) {
		this.position.set(x, y);
	}
	
	set movable(state)	{ this.movable = state;	}
	get movable()		{ return this.movable;	}
	
	
	updateLinks() {	
		this.links[0].setPosition(this.position.x, this.position.y-20);
		this.links[1].setPosition(this.position.x, this.position.y+20);
	
		this.links[0].show();
		this.links[1].show();
	}
	
	selected() {
		if (dist(this.position.x, this.position.y, mouseX, mouseY) < 10 && mouseIsPressed)
			return true;
		else
			return false;
	}
}