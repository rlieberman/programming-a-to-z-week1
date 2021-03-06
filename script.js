var paragraphs;

function setup() {

	noCanvas();
	
	//step 1: when you hover over a paragraph, highlight the words in that paragraph
	//do this by selecting all paragraph elements, putting them into an array
	paragraphs = selectAll('p'); 
	
	for (var i=0; i<paragraphs.length; i++) {	//when you hover over each paragraph, call highlightP
		paragraphs[i].mouseOver(highlightP);
		paragraphs[i].mouseOut(removeHighlight);
	}
	
	
	//step 2: when you click the button, change the text -- do this for all paragraphs
	var bttn1 = select('#bttn1');		//grab button 1, assign it to a variable
	bttn1.mousePressed(changeTextP1);	//when you click button 1, change the text for paragraph 1
	
	var bttn2 = select('#bttn2');
	bttn2.mousePressed(changeTextP2);
	
	var bttn3 = select('#bttn3');
	bttn3.mousePressed(changeTextP3);
	
	var bttn4 = select('#bttn4');
	bttn4.mousePressed(changeTextP4);
	
	var bttn5 = select('#bttn5');
	bttn5.mousePressed(changeTextP5);

}


		
function highlightP() {
	// Get all the elements inside *this* paragraph with className highlight (outputs an array)
	var highlights = this.elt.getElementsByClassName('highlight');
	for (var i=0; i<highlights.length; i++) { //for all the highlights in that paragraph
		//Make a new p5 element to use the p5 syntax
		var p5elt = new p5.Element(highlights[i]); //make a new p5 element
		console.log(p5elt);
		p5elt.style("background","#d9d9d9"); //change the background using .style() method
	}
}

function removeHighlight() {
	// Get all the elements inside *this* paragraph with className highlight (outputs an array)
	var highlights = this.elt.getElementsByClassName('highlight');
	for (var i=0; i<highlights.length; i++) {
		//Make a new p5 element to use the p5 syntax
		var p5elt = new p5.Element(highlights[i]);
		p5elt.style("background","none");
	}
}

	
function changeTextP1() {
	p1 = select('#p1');
	p1.html('The green piece of paper, the call box, one corner of the paper, the heat. Someone on the ground floor was playing music very loudly.');

}			

function changeTextP2() {
	p2 = select('#p2');
	p2.html("Bed, her robe, first time, her husband. She could remember so much about that evening, but not what the problem with the younger boy had been.");
}

function changeTextP3() {
	p3 = select('#p3');
	p3.html("Something to eat, second bottle of wine, the news, dusk. Outside the apartment, she could smell her own inside life sharply on the blanket.");
}

function changeTextP4() {
	p4 = select('#p4');
	p4.html("The heavy front door, the building, the light in the hall, the courtyard. Her wineglass was empty and she got up to fill it.");
}

function changeTextP5() {
	p5 = select('#p5');
	p5.html("Fate, every morning, the thought, that day. Lately she'd been imagining horrific things.");
}
			