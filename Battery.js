class Battery extends Device {
	voltage = 0;
	
	constructor(name, x, y, state) {
		super(name, x, y, state);
	}
	
	set voltage(voltage) {
		if (voltage != undefined)
			this.voltage = voltage;	
	}
	
	get voltage()	{ return this.voltage;	}
	
	
	show() {
		push();
		
		translate(this.position.x, this.position.y);
		
		textSize(15);
		textAlign(LEFT, CENTER);
		text(this.voltage+" V", 15, 0);
		
		textAlign(RIGHT, CENTER);
		text(this.name, -15, 0);
		
		// signs
		line(-12, -12, -6, -12);
		line(-9, -15, -9, -9);
		
		line(-12, 12, -6, 12);
		
		// battery lines
		line(0, -20, 0, -6);
		
		line(-10, -6, 10, -6);
		line(-5, -2, 5, -2);
		line(-10, 2, 10, 2);
		line(-5, 6, 5, 6);
		
		line(0, 6, 0, 20);
		
		pop();
		
		super.updateLinks();
	}
}