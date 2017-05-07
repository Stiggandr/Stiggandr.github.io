function main() {
	//don’t currently have menu, game starts right away (currently not with canvas)
	//initialize global variables
	//NOTE Variables declared outside of a function, OR variables given a value before declared with var, are automatically global
	population = 1000;
	faith = 0;
	science = 0;
	ethics = 0; // = health. All else are stats.
	year = 0;//index for timeline.
	//populate timeline
	timeline = [];
	for (var i = 0; i <= 99; i ++) {
		var yearInt;
		if (i <10) {yearInt = "210"+i} else {yearInt = "21"+i};
		timeline[i] = new yearObj(yearInt, i);/*get random event name*/;
	}
	eventDeck = [];//javascript doesn’t have stacks, they only have arrays. But we’ll use it like a stack.
	playerDeck = [];
	end = false//if zero continue turn loop. If any other number, call that ending and terminate turn loop
	hand = []; //Array of objects / structs of players cards cards.
	selectedCard = 4;//Which card is on top. Index of hand Arra;
	cardAnimationActive = false //animation validator to prevent clumping up.
	//turn of scroll for mobile
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
	//create all calendar elements lazy mode.
	for (var i = 0; i <=99; i++){
		createYearElement(i);
	}
	//add intro event to year 1
	timeline[0].events.push(EventCard(0));
	//display intro event
	document.getElementById("2100eventMark").innerHTML += "Events: X";

	var objDiv = document.getElementById("timeline");
	objDiv.scrollTop = objDiv.scrollHeight;
	//create PC card Container
	createElement("PCHolder","","gamefield");

	var left = createElement("leftArrowBox","","gamefield");
	left.onclick = function(){
		if(!cardAnimationActive) {
			ClickLeft();
		}
	};
	var right = createElement("rightArrowBox","","gamefield");
	right.onclick = function(){
		if(!cardAnimationActive) {
			ClickRight();
		} };

	//create stat images
	createElement("stats","","gamefield");

	popImage = createElement("populationImage","","stats");
	popImage.innerHTML = '<img src="assets/population.png">'
	popCount = createElement("populationCount","","stats");
	popCount.innerHTML = population + "mil"

	var sciImage = createElement("ScienceImage","","stats");
	sciImage.innerHTML = '<img src="assets/science.png">'
	var sciCount = createElement("ScienceCount","","stats");
	sciCount.innerHTML = science;

	var faithImage = createElement("FaithImage","","stats");
	faithImage.innerHTML = '<img src="assets/faith.png">'
	faithCount = createElement("FaithCount","","stats");
	faithCount.innerHTML = faith;

	var ethicsImage = createElement("EthicsImage","","stats");
	ethicsImage.innerHTML = '<img src="assets/ethics.png">'
	ethicsCount = createElement("EthicsCount","","stats");
	ethicsCount.innerHTML = ethics

	//populate and shuffle player cards
	shufflePlayerDeck();

	//populate and shuffle event Deck
	shuffleEventDeck();

	drawEventCard(); //call the turn loop.
	};

function drawEventCard(){
	console.log("drawEventCard called")
	//Draw First Event Card (always card 0)
	//create element to cover page and require click to continue.
	//pop top event from deck and apply to that element and to event of timeline[year+eventCard.time]
	var card = eventDeck.pop();
	card = EventCard(card);
	var cardtime = card.time;

	timeline[cardtime].events.push(card);

	//update timeline
	var eventTime;
	if (cardtime < 10) {
		eventTime = "210"+cardtime;
	} else {
		eventTime = "21"+cardtime;
	}
	console.log(eventTime);
	document.getElementById(eventTime+"eventMark").innerHTML = "Events: ";
	for(var i = 0; i<timeline[cardtime].events.length; i++)
	{
		document.getElementById(eventTime+ "eventMark").innerHTML += "X"
	};
	//later set onclick to display events in detail.
	displayYearEvents(cardtime, (timeline[cardtime].events.length - 1));

	if (card.time.length =1) {
		document.getElementById("EventName").innerHTML = "New Event for 210"+card.time+"! : \xa0\xa0\xa0\xa0" + timeline[card.time].events[(timeline[card.time].events.length-1)].name;
	} else {
		document.getElementById("EventName").innerHTML = "New Event for 21"+card.time+"! : \xa0\xa0\xa0\xa0" + timeline[card.time].events[(timeline[card.time].events.length-1)].name;
	}

	document.getElementById("EventCont").addEventListener("click", function(){drawPlayerCards();});
};

function drawPlayerCards(){
	console.log("drawPlayerCards called");
	var dealCards = setInterval(function(){
		if (hand.length < 5) {
			createCardElement()
		} else {
			clearInterval(dealCards);
			cardAnimationActive = false;
			updateStats();
		}
	}, 300);

	// while (hand.length < 5)
	// {
	// 	createCardElement()
	// }
	//
	// updateStats();
	//
	// //reenable sort through cards.
  // cardAnimationActive = false;
}

//play card and round up
function ApplyCard(cardCalled) {
	var card = cardCalled;

	faith += card.faith;
	ethics += card.ethics;
	science += card.science;
	updateStats();

	//check for current date events by calling date events one at a time and checking stats.

	resolveEvent();
	//move the timeline to display future dates

	//on confirm drawEventCard(); :) Done!
};

function resolveEvent(){
	console.log("resolveEventCalled");

	if (end == true) {
		var ender = document.getElementById("gamefield");
		ender.innerHTML = "You lose";
		ender.style.fontSize = "50vw";
		ender.style.textAlign = "center";
	} else {
		if (timeline[year].events.length < 1){
		//remove old year from timeline;
			killElement("year "+timeline[year].year);
			//update time
			year += 1;
			drawEventCard();
		} else {
			checkEvent();
		}
	}
}

function checkEvent(){
	//pop event from timeline
	console.log("checkEvent Called");
	var tempEvent = timeline[year].events.pop();
	//Pause for user input on each. recursive funcion through if statement
	//draw full screen event thing.
	var view = createElement("EventScreen", "", "gamefield");

	var eventName = createElement("EventName", "", "EventScreen");
	if(year.length = 1) {
		eventName.innerHTML = "210"+year + " : " + tempEvent.name;
	} else {
		eventName.innerHTML = "21"+year + " : " + tempEvent.name;
	}

	var eventPic = createElement("EventPic", "", "EventScreen");

	var eventDesc = createElement("EventDesc", "", "EventScreen");
	eventDesc.innerHTML = tempEvent.desc;


	var eventScience = createElement("EventScience", "", "EventDesc");
	eventScience.innerHTML = '<img src="assets/science.png">' + tempEvent.science + " / " + science;
	if (science >= tempEvent.science || tempEvent.science == 0 ) {
		eventScience.innerHTML += "\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Pass"
		tempEvent.pass();
	} else {
		eventScience.innerHTML += "\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Fail";
		tempEvent.fail();
	}

	var eventFaith = createElement("EventFaith", "", "EventDesc");
	eventFaith.innerHTML = '<img src="assets/faith.png">' + tempEvent.faith + " / " + faith;
	if (faith >= tempEvent.faith || tempEvent.faith == 0 ) {
		eventFaith.innerHTML += "\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Pass"
		tempEvent.pass();
	} else {
		eventFaith.innerHTML += "\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Fail";
		tempEvent.fail();
	}

	var eventEthics = createElement("EventEthics", "", "EventDesc");
	eventEthics.innerHTML = '<img src="assets/ethics.png">' + tempEvent.ethics + " / " + ethics;
	if (ethics >= tempEvent.ethics || tempEvent.ethics == 0 ) {
		eventEthics.innerHTML += "\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Pass"
		tempEvent.pass();
	} else {
		eventEthics.innerHTML += "\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Fail";
		tempEvent.fail();
	}
	//If no fail condition.
	var Continue = createElement("EventCont", "", "EventScreen");
	Continue.addEventListener("click", function(){killElement("EventScreen");resolveEvent();});
	Continue.innerHTML = "Continue..."
	updateStats();

	if(population <= 0) {
		end = true;
	}
}

//My old function
//function killElement(parent, child){
//	var element = document.getElementById(parent);
//	element.parentNode.removeChild(child);
//};

//document.getElementById("PCHolder").remove();

//window.screen.availHeight
//window.screen.availWidth
//else
//var width = screen.width;
//var height = screen.height;
