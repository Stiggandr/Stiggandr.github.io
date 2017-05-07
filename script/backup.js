function main() {
	//don’t currently have menu, game starts right away (currently not with canvas)
	//initialize global variables
	//NOTE Variables declared outside of a function, OR variables given a value before declared with var, are automatically global
	population = 1000;
	faith = 0;
	science = 0;
	ethics = 0; //population = health. All else are stats.
	month = 0;//index for timeline.
	timeline = [];
	eventDeck = [];//javascript doesn’t have stacks, they only have arrays. But we’ll use it like a stack.
	playerDeck = [];
	end = false//if zero continue turn loop. If any other number, call that ending and terminate turn loop
	hand = []; //Array of objects / structs of players cards cards.

	document.addEventListener('touchstart', function(e) {e.preventDefault()}, false);
	document.addEventListener('touchmove', function(e) {e.preventDefault()}, false);

	StartGame();
};


function StartGame(){

	//add gamefield to body.
	var gamefield = document.createElement("div");
	gamefield.id = "gamefield";
	var ratio = window.devicePixelRatio || 1;
	gamefield.style.height = "100%";
	gamefield.style.width =  "100%";//window.screen.height
	document.body.appendChild(gamefield);
	//create the element to hold all date events
	createElement("timeline","","gamefield");

	//shuffle player cards
	//populate all card indexes in array
	var cardId = [];
	for(var i = 0; i<= 10; i++) {
		cardId.push(i);
	}
	//check my work
	console.log(cardId);
	//randomly draw from cardId until it's empty (shuffle)
	while (cardId.length > 0) {
		var index = Math.floor(Math.random() * cardId.length -1);
		var card = cardId[index];
		if (index > -1) { cardId.splice(index, 1) }
		playerDeck.push(index);
	};

	console.log("cardId: "cardId);
	console.log("playerDeck: "playerDeck);
	//draw all of the cards.

	//draw elements given element id, style, parent
	//createElement("timeline", "timeline class" /*or empty string*/, "body");

	//progress time
	date += 1;
	//move the timeline to display future dates
	//display cards
	//pause to accept user card inputs

	callCards(); //call the turn loop.
};

function callCards(){
	//generates cards that show users hand.
	createElement("PCHolder","","gamefield");

	var card1 = createElement("pc1","playerCard","PCHolder");
	//format visual card based on player card objects in player hand array
	card1.onclick = function(){clickCard(1)};

	var card2 = createElement("pc2","playerCard","PCHolder");
	//format visual card based on player card objects in player hand array
	card2.onclick = function(){clickCard(2)};

	var card3 = createElement("pc3","playerCard","PCHolder");
	//format visual card based on player card objects in player hand array
	card3.onclick = function(){clickCard(3)};

	var card4 = createElement("pc4","playerCard","PCHolder");
	//format visual card based on player card objects in player hand array
	card4.onclick = function(){clickCard(4)};

	var card5 = createElement("pc5","playerCard","PCHolder");
	//format visual card based on player card objects in player hand array
	card5.onclick = function(){clickCard(5)};
}
function clickCard(){
	//set selected index.
	//offer confirm selection.
	//confirm calls ConfirmCard
	ConfirmCard();
};
function ConfirmCard(){
	//when user clicks on card, and confirms.
	//cards onclick passes
	//calls Turn
	document.getElementById("PCHolder").remove();
	Turn();
};


function Turn() {
	//check for current date events
	//round up stats (if game lose, break loop)
	//deal cards to full hand
	//If no fail condition.
	//progress time
	date += 1;
	console.log("Date" + date);
	//move the timeline to display future dates
	//display cards
	//pause to accept user card inputs
	callCards(); //call the turn loop.
};

function createElement(ElementId, ElementClass, parent){
	var element = document.createElement("div");
	element.id = ElementId;
	element.className = ElementClass;
	console.log("Element " + ElementId + "created");
	document.getElementById(parent).appendChild(element);
	return element;
};

//My old function
//function killElement(parent, child){
//	var element = document.getElementById(parent);
//	element.parentNode.removeChild(child);
//};

//document.getElementById("PCHolder").remove();
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}


//window.screen.availHeight
//window.screen.availWidth
//else
//var width = screen.width;
//var height = screen.height;
