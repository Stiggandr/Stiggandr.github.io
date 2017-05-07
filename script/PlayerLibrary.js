class PlayerCardCon{
  constructor(id, name, desc, science, faith, ethics){
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.science = science;
    this.faith = faith;
    this.ethics = ethics;
    //this.time = time + current time;
    this.effect;
  }
};

function PlayerCard(id) {
    switch(id){
        case 1:
        var card = new PlayerCardCon(1, "Scientific Discover!", "The scientists are at it again", 1, 0, 0);
        //card.effect = custom method
        card.effect = function(){}
        return card;
      break;
      case 2:
        var card = new PlayerCardCon(2, "Religious relic found!", "Your humble followers have found a sacred idol of you!", 0, 1, 0);
        //card.effect = custom method
        card.effect = function(){}
        return card;
        break;
      case 3:
        var card = new PlayerCardCon(3, "New law of the land", "The people have made agreements among themselves to uphold a higher standard of living.", 0, 0, 1);
        //card.effect = custom method
        card.effect = function(){}
        return card;
      break;
      case 4:
      var card = new PlayerCardCon(4, "Scientific breakthrough!", "The people have discovered a new technology to ease everyday life, but at the cost of religion!", 2, -1, 0);
        //card.effect = custom method
        card.effect = function(){}
        return card;
      break;
      case 5:
      var card = new PlayerCardCon(5, "Has science gone too far?", "Euginics, cloning, or perhaps behavioral engineering. The march of science goes on, but at the cost of ethics.", 2, 0, -1);
        //card.effect = custom method
        card.effect = function(){}
        return card;
      break;
      case 6:
        var card = new PlayerCardCon(6, "EndTimes Goodwill", "People have given themselves over to goodwill and abandoned dogma, but their faith has suffered as a result", 0, -1, 2);
        //card.effect = custom method
        card.effect = function(){}
        return card;
      break;
      case 7:
        var card = new PlayerCardCon(7, "Contemporary Luddite", "There are those who think that industrialism has destroyed the value of human individuality, and diminished the value of their work. Ethics are at an all time high... but science suffers.", -1, 0, 2);
        //card.effect = custom method
        card.effect = function(){}
        return card;
      break;
      case 8:
        var card = new PlayerCardCon(8, "Holy war", "Your followers have started a crusade against those who would oppose you.", 0, 2, -1);
        //card.effect = custom method
        card.effect = function(){}
        return card;
      break;
      case 9:
        var card = new PlayerCardCon(9, "The God Particle", "Scientists have discovered the 'God' particle... The religious took this as a sign from above and... comandeered the discovery.", -1, 2, 0);
        //card.effect = custom method
        card.effect = function(){}
        return card;
      break;
      case 10:
        var card = new PlayerCardCon(10, "Steady Growth", "You've had a good year all around", 1, 1, 1);
        //card.effect = custom method
        card.effect = function(){}
        return card;
      break;

    }
};
