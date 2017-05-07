class yearObj{
  constructor(a, b){
    var Zodiacs = ["Rat", "Ox","Tiger","Hare", "Dragon", "Snake", "Horse", "Sheep", "Monkey", "Rooster", "Dog", "Pig"];
    this.year = a;
    this.type = "Year of the "+ Zodiacs[(b%12)];
    this.events = [];
  };
};

function createYearElement(index){
	//select next position in timeline array. This is new year info.
	var element = document.createElement("div");
  var number = "<div class='yearMark'>Year "+timeline[index].year+"</div>";
  var zodiac = "<div yearType'class='yearType'>"+timeline[index].type+"</div>";
  var events = "<div id='"+timeline[index].year+"eventMark'class='eventMark'></div>";
	element.id = "year "+timeline[index].year;
	element.className = "yearTile";
	element.innerHTML = number + zodiac + events;
	document.getElementById("timeline").insertBefore(element, document.getElementById("timeline").firstChild);
  element.addEventListener("click", function(){if(cardAnimationActive == false){displayYearEvents(index, 0)}});
	//stuff here.
};

function displayYearEvents(timelineIndex, eventIndex){
  console.log("displayYearEvents called");
  //turn off clicky clicky
  cardAnimationActive = true;
  //don't want to wrestle with argument
  //create the event holder
  var tempEvent = timeline[timelineIndex].events[eventIndex];
  var view = createElement("EventScreen", "", "gamefield");

  var eventName = createElement("EventName", "", "EventScreen");

  if(year.length = 1) {
  	eventName.innerHTML = "210"+tempEvent.time + " : " + tempEvent.name;
  } else {
  	eventName.innerHTML = "21"+tempEvent.time + " : " + tempEvent.name;
  };

  var eventPic = createElement("EventPic", "", "EventScreen");

	var eventDesc = createElement("EventDesc", "", "EventScreen");
	eventDesc.innerHTML = tempEvent.desc;


	var eventScience = createElement("EventScience", "", "EventDesc");
	eventScience.innerHTML = '<img src="assets/science.png">' + tempEvent.science + " / " + science;
	if (science >= tempEvent.science) {
		eventScience.innerHTML += "\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Projected to Pass"
		tempEvent.pass();
	} else {
		eventScience.innerHTML += "\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Projected to Fail";
		tempEvent.fail();
	}

	var eventFaith = createElement("EventFaith", "", "EventDesc");
	eventFaith.innerHTML = '<img src="assets/faith.png">' + tempEvent.faith + " / " + faith;
	if (faith >= tempEvent.faith) {
		eventFaith.innerHTML += "\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Projected to Pass"
		tempEvent.pass();
	} else {
		eventFaith.innerHTML += "\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Projected to Fail";
		tempEvent.fail();
	}

	var eventEthics = createElement("EventEthics", "", "EventDesc");
	eventEthics.innerHTML = '<img src="assets/ethics.png">' + tempEvent.ethics + " / " + ethics;
	if (ethics >= tempEvent.ethics) {
		eventEthics.innerHTML += "\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Projected to Pass"
		tempEvent.pass();
	} else {
		eventEthics.innerHTML += "\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Projected to Fail";
		tempEvent.fail();
	}
	var Continue = createElement("EventCont", "", "EventScreen");

  if (eventIndex < (timeline[timelineIndex].events.length-1) ) {
     Continue.addEventListener("click", function(){killElement("EventScreen"); cardAnimationActive = false; displayYearEvents(timelineIndex, eventIndex+1)});
     Continue.innerHTML = "See Next Event"
  } else {
     Continue.addEventListener("click", function(){killElement("EventScreen"); cardAnimationActive = false;});
     Continue.innerHTML = "Close"
  }

};

function createElement(ElementId, ElementClass, parent){
	var element = document.createElement("div");
	element.id = ElementId;
	element.className = ElementClass;
	document.getElementById(parent).appendChild(element);
	return element;
};

function killElement(ElementId){
  var element = document.getElementById(ElementId);
  element.parentNode.removeChild(element);
  console.log("ElementKilled "+ElementId);
}

function shufflePlayerDeck() {
  var cardId = [0];
  for(var i = 1; i<= 10; i++) {
    cardId.push(i);
  }
  //randomly draw from cardId until it's empty (shuffle)
  while (cardId.length > 1) {
    var index = Math.floor(Math.random() * (cardId.length -1)) + 1;
    var card = cardId[index];
    playerDeck.push(cardId[index]);
    cardId.splice(index, 1);
  };
};

function shuffleEventDeck(){
  var cardId = [0];
  for(var i = 1; i<= 10; i++) {
    cardId.push(i);
  }
  //randomly draw from cardId until it's empty (shuffle)
  while (cardId.length > 1) {
    var index = Math.floor(Math.random() * (cardId.length -1)) + 1;
    var card = cardId[index];
    eventDeck.push(cardId[index]);
    cardId.splice(index, 1);
  };
};

function createCardElement(){
		var card = playerDeck.pop();
		card = PlayerCard(card);
		hand.push(card);

    var cardId = "playerCard"+(hand.length);
		var cardDiv = createElement(cardId,"playerCard","gamefield");

    cardDiv.classList.add('cardDeal');
    setTimeout(function(){cardDiv.classList.remove('cardDeal');}, 300)

		cardDiv.style.zIndex = "" + hand.length;

    var cardData = hand[(hand.length-1)];

    var cardName = createElement("", "cardName", cardDiv.id);
    cardName.innerHTML = cardData.name;

    var cardPicture = createElement("", "cardPicture", cardDiv.id);
    cardPicture.innerHTML = "Add a picture in more complete version";

    var cardStats = createElement(cardId+"stats", "cardStats", cardDiv.id);

    // Card stats images and stuff.
    var sciImage = createElement("","CardScienceImage",cardId+"stats");
    sciImage.innerHTML = '<img src="assets/science.png">'
    var sciCount = createElement("","CardScienceCount",cardId+"stats");
    sciCount.innerHTML = cardData.science;

    var faithImage = createElement("","CardFaithImage",cardId+"stats");
    faithImage.innerHTML = '<img src="assets/faith.png">'
    faithCount = createElement("","CardFaithCount",cardId+"stats");
    faithCount.innerHTML = cardData.faith;

    var ethicsImage = createElement("","CardEthicsImage",cardId+"stats");
    ethicsImage.innerHTML = '<img src="assets/ethics.png">'
    ethicsCount = createElement("","CardEthicsCount",cardId+"stats");
    ethicsCount.innerHTML = cardData.ethics;
    //
    //clear card stats id to prevent future overwrite.
    document.getElementById(cardId+"stats").id = "";

    var cardDescription = createElement("", "cardDescription", cardDiv.id);
    cardDescription.innerHTML = cardData.desc;

    var cardSelect = createElement("", "cardSelect", cardDiv.id);
    cardSelect.innerHTML = "SELECT CARD";
    cardSelect.addEventListener("click", function(){clickCard()});


    cardDiv.onClick = function() {
      if (!cardAnimationActive){
        clickCard();
      }
    }


		if (playerDeck.length == 0)
		{
			shufflePlayerDeck();
		}
}

function ClickRight(){
  cardAnimationActive = true;
  setTimeout(function(){cardAnimationActive = false}, 600);

  document.getElementById("playerCard5").classList.add('cardToBack');

  //Because I'm too lazy to handle this dynamically with JS.
  document.getElementById("playerCard5").id = "playerCard0";
  document.getElementById("playerCard4").id = "playerCard5";
  document.getElementById("playerCard3").id = "playerCard4";
  document.getElementById("playerCard2").id = "playerCard3";
  document.getElementById("playerCard1").id = "playerCard2";
  document.getElementById("playerCard0").id = "playerCard1";

  if (selectedCard >0) {
    selectedCard -= 1;
  } else {
    selectedCard = 4;
  };

  setTimeout(function(){
    //update zIndex.
    document.getElementById("playerCard5").style.zIndex = "5";
    document.getElementById("playerCard4").style.zIndex = "4";
    document.getElementById("playerCard3").style.zIndex = "3";
    document.getElementById("playerCard2").style.zIndex = "2";
    document.getElementById("playerCard1").style.zIndex = "1";
  }, 300);

  setTimeout(function(){
    document.getElementById("playerCard1").classList.remove('cardToBack');
  }, 600);
}
function ClickLeft(){
  cardAnimationActive = true;
  setTimeout(function(){cardAnimationActive = false}, 600);

  document.getElementById("playerCard1").classList.add('cardToFront');

  //Because I'm too lazy to handle this dynamically with JS.
  document.getElementById("playerCard1").id = "playerCard6";
  document.getElementById("playerCard2").id = "playerCard1";
  document.getElementById("playerCard3").id = "playerCard2";
  document.getElementById("playerCard4").id = "playerCard3";
  document.getElementById("playerCard5").id = "playerCard4";
  document.getElementById("playerCard6").id = "playerCard5";

  if (selectedCard <4) {
    selectedCard += 1;
  } else {
    selectedCard = 0;
  };

  setTimeout(function(){
    //update zIndex.
    document.getElementById("playerCard5").style.zIndex = "5";
    document.getElementById("playerCard4").style.zIndex = "4";
    document.getElementById("playerCard3").style.zIndex = "3";
    document.getElementById("playerCard2").style.zIndex = "2";
    document.getElementById("playerCard1").style.zIndex = "1";
  }, 300);

  setTimeout(function(){
    document.getElementById("playerCard5").classList.remove('cardToFront');
  }, 600);

}

function clickCard(){
  //disable animation stuffs
  cardAnimationActive = true;
	//verification box
  var Vbox = createElement("verificationBox","","gamefield");
  Vbox.innerHTML = "Are you Sure";
  Vbox.style.zIndex = 20;

  var Hbox = createElement("verificationHead","","verificationBox");
  Hbox.innerHTML = "Are you Sure?";

  var Ybox = createElement("verificationYes","","verificationBox");
  Ybox.innerHTML = "YES";
  Ybox.addEventListener("click", function(){confirmClick()});

  var Nbox = createElement("verificationNo","","verificationBox");
  Nbox.innerHTML = "No";
  Nbox.addEventListener("click", function(){cancelClick()});
};

function cancelClick(){
  //remove child verificationBox from gamefield
  killElement("verificationBox");
  cardAnimationActive = false;
  //reenable clickies
};

function confirmClick(){
  //splice card from array
  var card = hand.splice(selectedCard, 1);
  killElement("verificationBox");
  killElement("playerCard5");
  //reorganize divs
  //might not have to if I disable clicks
  cardAnimationActive = true;

  ApplyCard(card[0]);
};

function updateStats(){
  //in future have fancy pants animations
	popCount = document.getElementById("populationCount");
	popCount.innerHTML = population + "mil"

	var sciCount = document.getElementById("ScienceCount");
	sciCount.innerHTML = science;

	faithCount = document.getElementById("FaithCount");
	faithCount.innerHTML = faith;

	ethicsCount = document.getElementById("EthicsCount");
	ethicsCount.innerHTML = ethics
}
