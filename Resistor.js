class Resistor extends Device {	
	resistance = 0;
	
	constructor(name, x, y, state) {
		super(name, x, y, state);
	}
	
	set resistance(resistance) {
		if (resistance != undefined)
			this.resistance = resistance;	
	}
	
	get resistance()	{ return this.resistance;	}
	
	
	show() {
		push();
		
		translate(this.position.x, this.position.y);
		
		textSize(15);
		textAlign(LEFT, CENTER);
		text(this.resistance+" \u03A9", 20, 0);
		
		textAlign(RIGHT, CENTER);
		text(this.name, -20, 0);

		// signs
		line(-12, -12, -6, -12);
		line(-9, -15, -9, -9);
		
		line(-12, 12, -6, 12);
		
		// resistor lines
		line(0, -20, 0, -5);
		
		line(0, -5, 6, -4);
		line(6, -4, -6, -2);
		line(-6, -2, 6, 2);
		line(-6, 4, 6, 2);
		line(0, 5, -6, 4);
		
		line(0, 5, 0, 20);
		
		pop();	
				
		super.updateLinks();
	}
}