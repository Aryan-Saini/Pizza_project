// var
var doc = document;
//gets the form
var form = doc.getElementsByTagName('form');
//back button
var back = doc.getElementById('back');
//pickup button
var pickUp = doc.getElementById('pick-up');
//dilevery button
var dilevery = doc.getElementById('delivery');
//finish button
var finish = doc.getElementById('finish');
//address input
var address = doc.getElementById('address');
//number input
var number = doc.getElementById('number');
//all inputs
var inputs = doc.getElementById('inputs');
//drink option select
var drinkOption = doc.getElementById('drinkOption');
//pizza otion select ex with drink or no drink
var pizzaSelector = doc.getElementById('pizzaOption');
//pizza type select ex cheesy delight
var pizzaType = doc.getElementById('pizzaType');
//num of toppings select div
var numTopsDis = doc.getElementById('numToppings');
//div that hold the pizza builder images
var pizzaBuildImg = doc.getElementById('pizzaBuild');
//toppings selctor div
var selecTops = doc.getElementById('selectToppings');
//num of toppings select
var toppingsAmmount = doc.getElementById('ammountOfToppings');
//ammount of topping select thats needed to be displayes
var disTop = 0;
// hold if its pick up of dilever
var dilvOrPick = 0;
//screen width
var screenW;
//postion of the text after pizza creation is done
var pos = doc.getElementById('pizzaBuildPos');
// id names of all the topping picker select
var toppingsDis = [
  'top1',
  'top2',
  'top3',
  'top4',
  'top5',
  'top6',
  'top7',
  'top8'
];
//array of names for png files
var pizzaCre = [
  //0
  'pizza',
  //1
  'bacon',
  //2
  'black-olives',
  //3
  'brooklyn-pepperoni',
  //4
  'chedar',
  //5
  'feta',
  //6
  'green-olives',
  //7
  'green-peper',
  //8
  'ground-beef',
  //9
  'ham',
  //10
  'hot-banana-pepper',
  //11
  'japaleno-peppers',
  //12
  'mushmrom',
  //13
  'onions',
  //14
  'pepperoni',
  //15
  'philly',
  //16
  'pineapple',
  //17
  'salami',
  //18
  'sausage'
];
/**Sets up */
function setUp() {
  //to make sure it runs only once
  var noRun = false;
  if (noRun == false) {
    //repeated 19 times to create image
    //converts names into html image elements
    for (i = 0; i <= 18; i++) {
      //creates tem variable that contains html image
      let x = doc.createElement('img');
      //adds a src to the image by taking the name of the image from array pizzaCre
      x.src = 'images/toppings/' + pizzaCre[i] + '.png';
      //adds alt to tahat image
      x.alt = 'image of pizza thats being designed';
      //adds style
      x.style.width = '75%';
      //stores the x value into the array
      pizzaCre[i] = x;
      //appends the child
      pizzaBuildImg.appendChild(pizzaCre[i]);
      //styles it so it dosent display
      pizzaCre[i].style.display = 'none';
    }
    //repeats 8 times converts id name to store the select value corrsponding with the id name
    for (j = 0; j <= 7; j++) {
      //creates tep varriable that gets element using toppingsDis as the string value
      var y = doc.getElementById(toppingsDis[j]);
      //stores it back in the array
      toppingsDis[j] = y;
      //styles it as none
      toppingsDis[j].style.display = 'none';
    }
    //makes sure setup is not run again
    noRun = true;
  }
}
//call setUp
setUp();
/**
 * checks if pizza is selected or pizza with drink
 */
pizzaSelector.addEventListener('change', function() {
  //Depending on pizzaSelector.value, display what you want
  var pizzaNum = pizzaSelector.value;
  selectorPizza(pizzaNum);
});
/**
 * checks what drink is selected
 */
drinkOption.addEventListener('change', function() {
  //Depending on drinkOption.value, display what you want
  var drink = drinkOption.value;
  selectorDrink(drink);
});
/**
 * checks what pizza type is selected
 */
pizzaType.addEventListener('change', function() {
  //Depending on pizzaType.value, display what you want
  var pizzTy = pizzaType.value;
  quickPick(pizzTy);
});
/**
 * checks what toppingsAmmount is picked
 */
toppingsAmmount.addEventListener('change', function() {
  //Depending on toppingsAmmount.value, display what you want
  var toppingsAm = toppingsAmmount.value;
  ammountOfToppingsDisplay(toppingsAm);
});
/**
 * adds event listner to all toppings select tag
 */
for (c = 0; c <= 7; c++) {
  toppingsDis[c].addEventListener('change', function() {
    //eun updateTop if change detected
    updateTop();
  });
}

/**
 * checks what button has been clicked and display the form related to that button
 * it displays certain items related to the option clicked
 * also adds a back button to the thing
 */
function formDisplay(n) {
  back.style.display = 'block';
  form[0].style.display = 'block';
  //pickUp is selected
  if (n == 1) {
    //we dont need address for pick up
    address.style.display = 'none';
    //we need number for pick up
    number.style.display = 'block';
    //we dont need the dievery button anymore
    dilevery.style.display = 'none';
    //sets this to one (explained in future)
    dilvOrPick = 1;
  }
  //delivery is selected
  else if (n == 2) {
    //we dont need number for dilevery
    number.style.display = 'none';
    //we need address for pick up
    address.style.display = 'block';
    //we dont need the pickup button anymore
    pickUp.style.display = 'none';
    //sets this to two (explained in future)
    dilvOrPick = 2;
  }
  //back is selected
  //rests the page back to normal
  else {
    dilevery.style.display = 'block';
    pickUp.style.display = 'block';
    form[0].style.display = 'none';
    back.style.display = 'none';
    drinkOption.style.display = 'none';
    pizzaType.style.display = 'none';
  }
}
// checks if pizza with drink or just pizza is selected
function selectorPizza(n) {
  var num = n;
  //pizza is selected
  if (num == '1') {
    pizzaType.style.display = 'block';
    drinkOption.style.display = 'none';
    //pizza with drink is selected
  } else if (num == '2') {
    drinkOption.style.display = 'block';
    pizzaType.style.display = 'none';
    //nothing is selected
  } else {
    drinkOption.style.display = 'none';
    pizzaType.style.display = 'none';
  }
}
//cheks if drink has been picked to move on
function selectorDrink(n) {
  if (n != '0') {
    pizzaType.style.display = 'block';
  } else {
    pizzaType.style.display = 'none';
  }
}
//reset function
function reset(n) {
  //resets the image to display none or also resets the toppingsDis(selects for toppings) to display none
  if (n == 1) {
    finish.style.display = 'none';
    for (j = 0; j <= 18; j++) {
      pizzaCre[j].style.display = 'none';
    }
    //always display this image
    pizzaCre[0].style.display = 'block';
  } else if (n == 2) {
    for (j = 0; j <= 7; j++) {
      toppingsDis[j].style.display = 'none';
    }
  }
}
//creates pizza with qucik pick
function quickPick(n) {
  //reset previous images
  reset(1);
  numTopsDis.style.display = 'none';
  //when ham and pineapple is picked
  if (n == '1') {
    //displays the pizza builder
    pizzaBuildImg.style.display = 'block';
    //pizza
    pizzaCre[0].style.display = 'block';
    //ham
    pizzaCre[9].style.display = 'block';
    //pineapple
    pizzaCre[16].style.display = 'block';

    finish.style.display = 'block';
  } //when peporoni is picked
  else if (n == '2') {
    //displays the pizza builder
    pizzaBuildImg.style.display = 'block';
    //pizza
    pizzaCre[0].style.display = 'block';
    //pepperoni
    pizzaCre[14].style.display = 'block';

    finish.style.display = 'block';
  } //when cheesy is picked
  else if (n == '3') {
    //displays the pizza builder
    pizzaBuildImg.style.display = 'block';
    //pizza
    pizzaCre[0].style.display = 'block';

    finish.style.display = 'block';
  } //when create your own is picked
  else if (n == '4') {
    //displays the pizza builder
    pizzaBuildImg.style.display = 'block';
    //pizza
    pizzaCre[0].style.display = 'block';
    numTopsDis.style.display = 'block';
    //when nothing is picked
  } else {
    //displays the pizza builder to none
    pizzaBuildImg.style.display = 'none';
  }
}
//checks how much topping selectors to display

function ammountOfToppingsDisplay(n) {
  selecTops.style.display = 'block';
  //reset the ammount of toppings displayed (if change detected)
  reset(2);
  //then redisplay the ones needed (if change detected)
  //if 2 is picked
  if (n == '2') {
    disTop = 1;
  } //if 3 is picked
  else if (n == '3') {
    disTop = 2;
  } //if 4 is picked
  else if (n == '4') {
    disTop = 3;
  } //if 5 is picked
  else if (n == '5') {
    disTop = 4;
  } //if 6 is picked
  else if (n == '6') {
    disTop = 5;
  } //if 7 is picked
  else if (n == '7') {
    disTop = 6;
  } //if 8 is picked
  else if (n == '8') {
    disTop = 7;
  } //if  nothing is picked
  else {
    disTop = 0;
  }
  // checks if disTop is not equal to zero if true
  if (disTop != 0) {
    //repeat this by the ammount of displayTopping (disTop)needed
    for (l = 0; l <= disTop; l++) {
      toppingsDis[l].style.display = 'block';
    }
    //adds one to disTop for next
    disTop++;
    //change the valuse off all the ones not being used
    for (r = disTop; r <= 7; r++) {
      toppingsDis[r].value = 'reset';
    }
    //run updateTop to update the toppings
    updateTop();
    //disTop back to normal
    disTop--;
    //check if finished
    finishCheck();
  } //reset toppings select value
  else {
    for (r = disTop; r <= 7; r++) {
      toppingsDis[r].value = 'reset';
    }
    updateTop();
    //check if finished
    finishCheck();
  }
}

function updateTop() {
  //creates a array that eventually holds the value of all topping select inputs
  var toppinsPic = [];
  //reset the images
  reset(1);
  //run 8 times to check all 8 topping Selects
  //checks what vlue the topping selects are holding and display acording to that
  for (y = 0; y <= 7; y++) {
    toppinsPic[y] = toppingsDis[y].value;
    if (toppinsPic[y] == '1') {
      pizzaCre[1].style.display = 'block';
    } else if (toppinsPic[y] == '2') {
      pizzaCre[2].style.display = 'block';
    } else if (toppinsPic[y] == '3') {
      pizzaCre[3].style.display = 'block';
    } else if (toppinsPic[y] == '4') {
      pizzaCre[4].style.display = 'block';
    } else if (toppinsPic[y] == '5') {
      pizzaCre[5].style.display = 'block';
    } else if (toppinsPic[y] == '6') {
      pizzaCre[6].style.display = 'block';
    } else if (toppinsPic[y] == '7') {
      pizzaCre[7].style.display = 'block';
    } else if (toppinsPic[y] == '8') {
      pizzaCre[8].style.display = 'block';
    } else if (toppinsPic[y] == '9') {
      pizzaCre[9].style.display = 'block';
    } else if (toppinsPic[y] == '10') {
      pizzaCre[10].style.display = 'block';
    } else if (toppinsPic[y] == '11') {
      pizzaCre[11].style.display = 'block';
    } else if (toppinsPic[y] == '12') {
      pizzaCre[12].style.display = 'block';
    } else if (toppinsPic[y] == '13') {
      pizzaCre[13].style.display = 'block';
    } else if (toppinsPic[y] == '14') {
      pizzaCre[14].style.display = 'block';
    } else if (toppinsPic[y] == '15') {
      pizzaCre[15].style.display = 'block';
    } else if (toppinsPic[y] == '16') {
      pizzaCre[16].style.display = 'block';
    } else if (toppinsPic[y] == '17') {
      pizzaCre[17].style.display = 'block';
    } else if (toppinsPic[y] == '18') {
      pizzaCre[18].style.display = 'block';
    }
  }
  //check if everything is finished
  finishCheck();
}
function finishCheck() {
  //test score = -1 at start
  let test = -1;
  //checks if all the select values have a value other that reset if they do it will
  //add to test
  for (s = 0; s <= disTop; s++) {
    var cek = toppingsDis[s].value;
    if (cek != 'reset') {
      test++;
    }
  }
  //if test == disTop then display the finish button
  if (test == disTop) {
    finish.style.display = 'block';
  }
}
//relocates the text after pizza is created for responsivness
function resizeDet() {
  screenW = window.innerWidth;
  if (screenW <= 768) {
    pos.style.marginLeft = '0%';
  } else {
    pos.style.marginLeft = '-23%';
  }
}
//finishOrdering() runs when button is clicked
function finishOrdering() {
  //checks if verify == true
  if (verify() == true) {
    //creates the final text
    var final = doc.createElement('p');
    final.innerHTML =
      'Thanks for ordering with my website. It is still under construction. This website has not taken any of your information and is safe to use and explore';
    //styles the postion of the div the tag is gonna be in
    pos.style.position = 'relative';
    //respoosivness cheks if screenW is under 768 then makes margin left 0
    if (screenW <= 768) {
      pos.style.marginLeft = '0%';
    } //else makes it -23
    else {
      pos.style.marginLeft = '-23%';
    }
    //gives font size
    pos.style.fontSize = ' 200%';
    //append the child
    pizzaBuild.appendChild(final);
    //hides the whole form
    back.style.display = 'none';
    pickUp.style.display = 'none';
    dilevery.style.display = 'none';
    finish.style.display = 'none';
    drinkOption.style.display = 'none';
    pizzaSelector.style.display = 'none';
    pizzaType.style.display = 'none';
    numTopsDis.style.display = 'none';
    selecTops.style.display = 'none';
    toppingsAmmount.style.display = 'none';
    inputs.style.display = 'none';
    //styles the toppings to have a display of none
    for (o = 0; o <= 18; o++) {
      pizzaCre[o].style.display = 'none';
    }
  }
}
//verify and validate the form
function verify() {
  //let  for input value
  let num = doc.getElementById('inputNumber').value;
  let add = doc.getElementById('inputAddress').value;
  let mail = doc.getElementById('inputEmail').value;
  //patterns for testing
  let emailTest = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;
  let addressTest = /^\d+\s[A-z]+\s[A-z]+/g;
  let phoneTest = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
  //storeing the test values in var's
  let pattMailTest = emailTest.test(mail);
  let pattNumTest = phoneTest.test(num);
  let pattAddTest = addressTest.test(add);
  //dilvOrPick checks what valuse to be tested if dilvOrPick check number and email
  if (dilvOrPick == 1) {
    if (pattMailTest == true) {
      if (pattNumTest == true) {
        return true;
      } else {
        alert('Oops! Check your number');
        return false;
      }
    } else {
      alert('Oops! Check your email');
      return false;
    }
  } //else check address or email
  else if (dilvOrPick == 2) {
    if (pattMailTest == true) {
      if (pattAddTest == true) {
        return true;
      } else {
        alert('Oops! Check your address');
        return false;
      }
    } else {
      alert('Oops! Check your email');
      return false;
    }
  } else {
    return false;
  }
}
