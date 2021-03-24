
$$('#map').on('tab:show', function() {
    /**
* Created by ryanb on 3/28/2017.
*/

var navigation = {
"startRoom":null,
"endRoom":null,
"clicks":0
};
var floorContainer;
var areas;
// var search;
var qrPoints;
var qrPoint;

var router;

var drawRoute = function(directions) {
var floorPlan = document.getElementById("svg-tiger");
var previousRoute = floorPlan.getElementById('route');

//checks for previous route, deletes it if there
console.log(previousRoute);
if(previousRoute){
    previousRoute.parentNode.removeChild(previousRoute);
}

var floorContainer = floorPlan.getElementById('floor-plan');
//Creates group to hold all of the route lines
var routeGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
routeGroup.setAttribute('id', 'route');
floorContainer.appendChild(routeGroup);

// создаю дополнительный контейнер для точек маршрута и вкладываю его в основной контейнер для пути
var newGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
newGroup.setAttribute('class', 'circleGroup');

var newGroup2 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
newGroup2.setAttribute('class', 'circleGroup2');

var letterGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
letterGroup.setAttribute('class', 'letterGroup');

var areas = floorPlan.getElementById('svg-tiger-container');
// var search = document.getElementById('search-list');
var qrPoints = document.getElementById('qr-points');
// var qrPoint = document.getElementById("qrAddress").value;
document.getElementById("qrAddress").onchange = function() {
  qrPoint = document.getElementById("qrAddress").value;
};

//Draws route, from point to point
// последним пунктом добавил контейнер для кругов сочлинений
for(var i = 1; i < directions.length; i++) {
    if(floorPlan.getElementById(directions[i-1]) == null)
        continue;
    if(floorPlan.getElementById(directions[i]) == null)
        continue;
    drawLine(parseFloat(floorPlan.getElementById(directions[i - 1]).getAttribute('cx')), parseFloat(floorPlan.getElementById(directions[i - 1]).getAttribute('cy')), parseFloat(floorPlan.getElementById(directions[i]).getAttribute('cx')), parseFloat(floorPlan.getElementById(directions[i]).getAttribute('cy')),routeGroup,newGroup,newGroup2,letterGroup);
}

//Draws route group on SVG
// floorPlan.documentElement.appendChild(routeGroup);
//clear out DOM references
routeGroup = null;
floorPlan = null;
previousRoute = null;
};




var autocompleteDropdownExpand = app.autocomplete.create({
  inputEl: '#autocomplete-dropdown-expand-1',
  openIn: 'dropdown',
  source: function (query, render) {
    var results = [];
    if (query.length === 0) {
      render(results);
      return;
    }
    for (var i = 0; i < cornerName.length; i++) {
      if (cornerName[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(cornerName[i]);
    }
    // console.log('cornerName[i]-1 ' + results);
    render(results);
  },
  on: {
    open: clearQrPoint,
  }
});

var autocompleteDropdownExpand2 = app.autocomplete.create({
  inputEl: '#autocomplete-dropdown-expand-2',
  openIn: 'dropdown',
  source: function (query, render) {
    var results = [];
    if (query.length === 0) {
      render(results);
      return;
    }
    // Find matched items
    for (var i = 0; i < cornerName.length; i++) {
      if (cornerName[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(cornerName[i]);
    }
    // Render items by passing array with result items
    // console.log('cornerName[i]-2 ' + results);
    render(results);
  },
  on: {
    close: function() {
      $$('.route-show-map').addClass('active');
    }
  }
});

function clearQrPoint() {
  qrPoint = "";
  $$('#qrAddress').val('');
  $$('#qr-points g').css('opacity', 0);
}

var drawLine = function(x1,y1,x2,y2,routeGroup,newGroup,newGroup2,letterGroup) {
var newElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
newElement.setAttribute('d', 'M' + x1 + ',' + y1 + 'L' + x2 + ',' + y2);
newElement.style.stroke = '#fff';
// newElement.style.strokeWidth = '6%';
newElement.style.strokeWidth = '36';
newElement.style.strokeLinecap = 'round';
newElement.style.strokeLinejoin = 'round';
newElement.style.fill = 'transparent';


var newCircleRed = document.createElementNS('http://www.w3.org/2000/svg', 'line');
newCircleRed.setAttribute('x1', x1);
newCircleRed.setAttribute('y1', y1);
newCircleRed.setAttribute('x2', x1);
newCircleRed.setAttribute('y2', y1);
newCircleRed.setAttribute('stroke-linecap', 'round');
// newCircleRed.setAttribute('r', '12');
var newCircleRed2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
newCircleRed2.setAttribute('x1', x1);
newCircleRed2.setAttribute('y1', y1);
newCircleRed2.setAttribute('x2', x1);
newCircleRed2.setAttribute('y2', y1);
newCircleRed2.setAttribute('stroke-linecap', 'round');


var textRedA = document.createElementNS('http://www.w3.org/2000/svg', 'text');
textRedA.setAttribute('x', x1 - 25);
textRedA.setAttribute('y', y1 + 30);
textRedA.setAttribute('fill', '#ffffff');
textRedA.innerHTML = "A";


var textRedB = document.createElementNS('http://www.w3.org/2000/svg', 'text');
textRedB.setAttribute('x', x2 - 25);
textRedB.setAttribute('y', y2 + 30);
textRedB.setAttribute('fill', '#ffffff');
textRedB.innerHTML = "B";


var newCircleBlue = document.createElementNS('http://www.w3.org/2000/svg', 'line');
// newCircleBlue.setAttribute('cx', x2);
// newCircleBlue.setAttribute('cy', y2);
// newCircleBlue.setAttribute('r', '12');
  newCircleBlue.setAttribute('x1', x2);
  newCircleBlue.setAttribute('y1', y2);
  newCircleBlue.setAttribute('x2', x2);
  newCircleBlue.setAttribute('y2', y2);
  newCircleBlue.setAttribute('stroke-linecap', 'round');

var newCircleBlue2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
// newCircleBlue.setAttribute('cx', x2);
// newCircleBlue.setAttribute('cy', y2);
// newCircleBlue.setAttribute('r', '12');
  newCircleBlue2.setAttribute('x1', x2);
  newCircleBlue2.setAttribute('y1', y2);
  newCircleBlue2.setAttribute('x2', x2);
  newCircleBlue2.setAttribute('y2', y2);
  newCircleBlue2.setAttribute('stroke-linecap', 'round');


var copyElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
copyElement.setAttribute('d', 'M' + x1 + ',' + y1 + 'L' + x2 + ',' + y2);
copyElement.style.stroke = '#ec32f8';
// copyElement.style.strokeWidth = '4%';
copyElement.style.strokeWidth = '26';
copyElement.style.strokeLinecap = 'round';
copyElement.style.strokeLinejoin = 'round';
copyElement.style.fill = 'transparent';

routeGroup.appendChild(newElement);
routeGroup.appendChild(copyElement);
newGroup.appendChild(newCircleRed);
newGroup.appendChild(newCircleBlue);
newGroup2.appendChild(newCircleRed2);
newGroup2.appendChild(newCircleBlue2);
letterGroup.appendChild(textRedA);
letterGroup.appendChild(textRedB);

routeGroup.appendChild(newGroup);
routeGroup.appendChild(newGroup2);
routeGroup.appendChild(letterGroup);
//clear out DOM references
newElement = null;
// document.getElementById("route").setAttribute('filter', 'url(#dropshadow)');
};



// var areaOnClick =
areas = document.getElementById("svg-tiger-container").children;
// search = document.getElementById('search-list').children;
qrPoints = document.getElementById('qr-points').children;
document.getElementById("qrAddress").onchange = function() {
  qrPoint = document.getElementById("qrAddress").value;
  console.log("qrPoint 1 " + qrPoint);
};
document.querySelector("#searchCorner").addEventListener("touchend", function() {
  if (document.getElementById("qrAddress").value != null) {
    qrPoint = document.getElementById("qrAddress").value;
    // console.log("qrPoint 3 working - " + qrPoint);
  } else {
    qrPoint = document.getElementById("qrAddress").value;
    // console.log("qrPoint 3 error" + qrPoint);
  }
});

//проложить маршрут из  таба
document.querySelector("#get-directions").addEventListener("touchend", function() {
  qrPoint = document.getElementById("qrAddress").value;
  $$('.food-corner').removeClass('active-corner');
  clickHandler3();
  app.popup.close('.popup-search', true);
});

//если был вызван qr-код то он подставляется в певую ячейку
$$('.popup-search').on('popup:open', function (e, popup) {
  console.log('About popup open' + qrPoint);
  if (qrPoint != null && qrPoint != '') {
    $$('#autocomplete-dropdown-expand-1').val('Ваше положение ' + qrPoint);
  }
});

function clickHandler(){
    if(navigation.clicks % 2 == 0){
        if(navigation.startRoom != null){
            var room = document.getElementById(navigation.startRoom);
            // console.log(navigation);
            // room.style.fill = "none";
            room = null;
        }

        navigation.startRoom = this.id;
        // this.style.fill = "blue";
    }else{

        if(navigation.endRoom != null){
            var room = document.getElementById(navigation.endRoom);
            // console.log('endroom ' + room);
            // room.style.fill = "none";
            room = null;
        }

        navigation.endRoom = this.id;
        // this.style.fill="red";
    }
    navigation.clicks++;

    if(navigation.startRoom != null && navigation.endRoom != null){
        router = new Router();
        drawRoute(router.getRoute(navigation.startRoom, navigation.endRoom));
    }
}

// function clickHandler2(){
//     if(qrPoint != null && qrPoint != ''){
//
//         console.log("qrPoint 2 " + qrPoint);
//         navigation.startRoom = qrPoint;
//
//         navigation.endRoom = this.id;
//         // this.style.fill = "blue";
//     }else{
//         var routeSearchFrom = autocompleteDropdownExpand.value;
//         var routeFrom = $('li:contains(' + routeSearchFrom + ')').data('name');
//
//         navigation.startRoom = routeFrom;
//         // navigation.startRoom = autocompleteDropdownExpand.value;
//         // navigation.endRoom = autocompleteDropdownExpand2.value;
//         navigation.endRoom = this.id;
//
//     }
//     navigation.clicks++;
//
//     if(navigation.startRoom != null && navigation.endRoom != null){
//         router = new Router();
//         drawRoute(router.getRoute(navigation.startRoom, navigation.endRoom));
//     }
// }

function clickHandler3(){
    if(qrPoint != null && qrPoint != ''){

        // console.log("qrPoint 2 " + qrPoint);
        navigation.startRoom = qrPoint;
        var routeSearchTo = autocompleteDropdownExpand2.value;
        var routeTo = $('#search-list li:contains(' + routeSearchTo + ')').attr('data-name');


        navigation.endRoom = routeTo;
        console.log("navigation.startRoom QR " + navigation.startRoom);
        console.log("navigation.endRoom QR " + navigation.endRoom);
        // this.style.fill = "blue";
    }else{
        var routeSearchFrom = autocompleteDropdownExpand.value;
        var routeSearchTo = autocompleteDropdownExpand2.value;
        var routeFrom = $('#search-list li:contains(' + routeSearchFrom + ')').attr('data-name');
        var routeTo = $('#search-list li:contains(' + routeSearchTo + ')').attr('data-name');

        navigation.startRoom = routeFrom;
        // navigation.startRoom = autocompleteDropdownExpand.value;
        // navigation.endRoom = autocompleteDropdownExpand2.value;
        navigation.endRoom = routeTo;

        console.log("navigation.endRoom " + navigation.endRoom);
        console.log("navigation.startRoom " + navigation.startRoom);
        if (navigation.startRoom > 30) {
            zoomSvg.pan({x: -2500, y: 0});
            zoomSvg.zoom(1);
        } else if (navigation.startRoom < 30 || 500 < navigation.startRoom < 514 ) {
            zoomSvg.pan({x: 2500, y: 0});
            zoomSvg.zoom(1);
        }
    }
    navigation.clicks++;

    if(navigation.startRoom != null && navigation.endRoom != null){
        router = new Router();
        drawRoute(router.getRoute(navigation.startRoom, navigation.endRoom));
    }
}

for(var i = 0; i < areas.length; i++){
    areas[i].onclick  = clickHandler;
}
// for(var i = 0; i < search.length; i++){
//     search[i].onclick  = clickHandler2;
// }
for(var i = 0; i < qrPoints.length; i++){
    qrPoints[i].onclick  = clickHandler;
}
});
