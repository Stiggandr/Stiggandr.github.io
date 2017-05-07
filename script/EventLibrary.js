class EventCardCon{
  constructor(id, name, desc, science, faith, ethics, time){
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.science = science;
    this.faith = faith;
    this.ethics = ethics;
    this.time = time + year;
    //this.time = time + current time;
    this.pass;
    this.fail;
  };
};

function EventCard(id) {
    switch(id){
        case 0:
          var card = new EventCardCon(0, "Signs of the End", "Your Prophets, Scientist, and Philosophers are all in agreement. The end is coming...", 0,0,0,0)
          //card.pass = custom method
          card.pass = function(){return true}
          //card.fail = custom method
          card.fail = function(){return true}
          return card;
        break;
        case 1:
          var card = new EventCardCon(1, "Alien Invasion", "Little Grey men with large soulless eyes are abducting scientists left and right! Fail and loose science and population.", 2, 1, 0, 1);
          //card.pass = custom method
          card.pass = function(){return true}
          //card.fail = custom method
          card.fail = function(){
            population -= 100;
            science -= 1;
            return true}
          return card;
        break;
      case 2:
        var card = new EventCardCon(2, "Mist of Woe...", "Thanks to overeating on 'taco tuesday' the elder gods are spreading their gaseous emmisions throughout earth. Fail and lose ethics and population", 0, 1, 2, 2);
        //card.pass = custom method
        card.pass = function(){return true}
        //card.fail = custom method
        card.fail = function(){
          population -=100;
          ethics -=1;
          return true}
        return card;
      break;
      case 3:
        var card = new EventCardCon(3, "Locusts", "Hordes of locust sweep accross the land consuming the food...Suspiciously they leave McDonalds food alone... Fail and lose population.", 3, 0, 0, 2);
        //card.pass = custom method
        card.pass = function(){return true}
        //card.fail = custom method
        card.fail = function(){
          population -=250;
          return true}
        return card;
      break;
      case 4:
        var card = new EventCardCon(4, "Existential crisis.", "This generous just can't even and needs to take some time off to find themselves. Fail and lose ethics and population", 0, 0, 3, 3);
        //card.pass = custom method
        card.pass = function(){return true}
        //card.fail = custom method
        card.fail = function(){
          population -= 100;
          ethics -= 1;
          return true}
        return card;
      break;
      case 5:
        var card = new EventCardCon(5, "THEM!", "Ants around the world have grown to extraordinary size, creating division within the nations! Fail lose population.", 2, 0, 1, 3);
        //card.pass = custom method
        card.pass = function(){return true}
        //card.fail = custom method
        card.fail = function(){return true}
        return card;
      break;
      case 6:
        var card = new EventCardCon(6, "ackackackack", "ackackackackackackack ackackackackackackack akcakackackackackackackack. Fail Lose lots of population.", 3, 0, 0, 3);
        //card.pass = custom method
        card.pass = function(){return true}
        //card.fail = custom method
        card.fail = function(){
          population -= 200;
          return true}
        return card;
      break;
      case 7:
        var card = new EventCardCon(7, "Famine", "People are wanting to eat each other... eww... Pass and lose population but gain ethics, Fail and gain population but lose ethics...", 0, 0, 3, 3);
        //card.pass = custom method
        card.pass = function(){
          population -= 10;
          ethics +=1;
          return true}
        //card.fail = custom method
        card.fail = function(){
          population += 10;
          ethics -= 2;
          return true}
        return card;
      break;
      case 8:
        var card = new EventCardCon(8, "Peaceful Year", "A peaceful Year where nothing Happens", 0, 0, 0, 1);
        //card.pass = custom method
        card.pass = function(){return true}
        //card.fail = custom method
        card.fail = function(){return true}
        return card;
      break;
      case 9:
        var card = new EventCardCon(9, "Peaceful Year", "A peaceful Year where nothing Happens", 0, 0, 0, 2);
        //card.pass = custom method
        card.pass = function(){return true}
        //card.fail = custom method
        card.fail = function(){return true}
        return card;
      break;
      case 10:
        var card = new EventCardCon(10, "Peaceful Year", "A peaceful Year where nothing Happens", 0, 0, 0, 1);
        //card.pass = custom method
        card.pass = function(){return true}
        //card.fail = custom method
        card.fail = function(){return true}
        return card;
      break;

    }
};
