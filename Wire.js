class Wire {
	start = new Vector(0, 0);
	end = new Vector(0, 0);
	
	state = false;
	
	connections = [];
	
	constructor(sx, sy, ex, ey, state) {	
		this.start.set(sx, sy);
		this.end.set(ex, ey);
		
		this.state = state;
	}
	
	setStart(x, y) {
		this.start.set(x, y);
	}
	
	setEnd(x, y) {
		this.end.set(x, y);
	}
	
	show() {
		line(this.start.x, this.start.y, this.end.x, this.end.y);
	}
	
	getConnections() {
		for (let i = 0; i < devices.length; i++) {
			console.log(i + " " + devices[i].links[0].connected)
			if (!devices[i].links[0].connected && Vector.dist(this.start, devices[i].links[0].position) < 4 || 
				Vector.dist(this.end, devices[i].links[0].position) < 4 ) {
				this.connections.push(devices[i]);
				devices[i].links[0].connected = true; 
			}
		}
		
		return this.connections;
	}
}