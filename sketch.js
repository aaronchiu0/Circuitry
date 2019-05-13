var deviceInfo = [];
var devices = [];

var wires = [];

var newBattery;
var newResistor;

var wireSelected = false;

function setup() {
	// create canvas
	let myCanvas = createCanvas(400, 400);
	myCanvas.parent('myContainer');
	
	inputPanel();
}

function draw() {
	background(255, 255, 255);
	inputPanel();
	
	if(mouseIsPressed && devices.length > 0 && devices[devices.length - 1].movable) {
		devices[devices.length - 1].setPosition(mouseX, mouseY);
		devices[devices.length - 1].show();
	}
	
	if(wires.length > 0) {
		if (wireSelected == true)
			wires[wires.length - 1].setEnd(mouseX, mouseY);
		wires[wires.length - 1].show();
	}
	
	for(let i = 0; i < deviceInfo.length; i++) {
		if (!isNaN(deviceInfo[i][0].value())) {
			if (devices[i].constructor.name == "Battery")
				devices[i].voltage = deviceInfo[i][0].value();
			else if (devices[i].constructor.name == "Resistor")
				devices[i].resistance = deviceInfo[i][0].value();
		}
	}
	
	devices.forEach(function(element) { element.show(); });
	wires.forEach(function(element) { element.show(); });
	
	
	if (frameCount % 30 == 0) {
		/* console.log(wires.length);
		
		wires.forEach(function(element) { 
			console.log(element.getConnections());
		}); */
		
		console.log("Wire State " + wireSelected);
		devices.forEach(function(device) { 
			let s = "";
			device.links.forEach(function(link) {
				s += link.state + " ";
			});
			console.log(device.name + " " + s);
		});
	}
}


function inputPanel() {
	newBattery = createButton("New Battery");
	newBattery.position(width/3, height - 20);
	newBattery.mousePressed(addBattery);
	
	newResistor = createButton("New Resistor");
	newResistor.position(2*width/3, height - 20);
	newResistor.mousePressed(addResistor);
}

function addBattery() {
	console.log("clicked battery");
	devices.push(new Battery(devices.length+1, mouseX, mouseY, true));
	createDiv("Source "+devices[devices.length-1].name),
	deviceInfo.push( [ createInput("Enter Voltage"), createButton("Delete"), createSpan("Current")] );
	createP('');
}

function addResistor() {	
	console.log("clicked resistor");
	devices.push(new Resistor(devices.length+1, mouseX, mouseY, true));
	createDiv("Resistor "+devices[devices.length-1].name),
	deviceInfo.push( [ createInput("Enter Resistance"), createButton("Delete"), createSpan("Current "), createSpan("Voltage ")] );
	createP('');
}

/* function mousePressed() {	
	return false;	// prevent default
} */

function mouseReleased() {
	devices.forEach(function(element) {
		element.movable = false;
	});
	
	/* wires.forEach(function(wire) {	
		devices.forEach(function(device) {
			device.links.forEach(function(link) {
				if (link.over())
					wire.state = false;
			});
		});
	}); */
	
	return false;	// prevent default
}

/* function doubleClicked() {
	return false;	// prevent default
} */