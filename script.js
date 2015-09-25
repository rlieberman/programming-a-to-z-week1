var p1;

function setup() {

	noCanvas();
	
	//step 1: when you hover over the paragraph, highlight the words
	p1 = select('#p1');
	p1.mouseOver(highlightP1);
	
	
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


		
function highlightP1() {
	p1.style("background", "#ff0000");
}

	
function changeTextP1() {
	p1 = select('#p1');
	p1.html('this is the new text');
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
			