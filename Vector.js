class Vector {
	x = 0;
	y = 0;
	
	constructor(x, y) {	
		this.x = x;
		this.y = y;
	}
	
	set(x, y) {
		this.x = x;
		this.y = y;
	}
	
	static dist(v1, v2) {
		let dx = v1.x - v2.x;
		let dy = v1.y - v2.y;
		
		return sqrt(sq(dx) + sq(dy));
	}
}