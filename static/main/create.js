$(document).ready(function() {
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});
var map;
function initMap() {
  var center = {lat: 52.519325, lng: 13.392709};

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 1,
    center: center
  });
}
function bindInfoWindow(marker, map, infowindow, html) {
    marker.addListener('click', function() {
        infowindow.setContent(html);
        infowindow.open(map, this);
    });
}

function zoomToQuery(query) {
  map.setCenter(locs[query]["coordinates"])
  map.setZoom(locs[query]["zoom"])
  //disgusting code please abstract out
  if (children["ciana"] != undefined) {
    for (var i = 0; i < children[query].length; i++) {
      child = children[query][i]
      var marker = new google.maps.Marker({
        position: locs[child]["coordinates"],
        map: map,
        title: child,
      });
      bindInfoWindow(marker, map, new google.maps.InfoWindow(), locs[child]["title"])
    }
  }
}
function removeChildren(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}
// TODO: get rid of this
const children = {
  "usa": ["nyc", "dc"],
  "nyc": ["astoria_mosque", "ciana"]
}
const locs = {
  "usa": {"coordinates": {lat: 41.850033, lng: -87.6500523}, "zoom": 4, "title": "USA"},
  "nyc": {"coordinates": {lat: 40.7413203, lng: -73.9922277}, "zoom": 10, "title": "New York City"},
  "dc": {"coordinates": {lat: 38.8953399, lng: -77.0517666}, "zoom": 12, "title:": "Washington D.C."},
  "ciana": {"id": "ChIJn_7PE0dfwokR0wO5b0fYMrk", "coordinates": {lat: 40.7674376, lng: -73.9204642}, "zoom": 15,"title": "CIANA"},
  "astoria_mosque": {"id":"ChIJVQc7Lk9fwokR5a7DIe8cunE","coordinates": {lat: 40.7721221, lng: -73.9265175}, "zoom": 15, "title": "Astoria Islamic Center"},
}
// GET FROM API!!
const apiKey = "AIzaSyCRredUc1zqTYJAGpWwNF0nBiqBI7Hus70"
document.getElementById("country").onchange = function() {
  option = document.getElementById("country").options[document.getElementById("country").selectedIndex].value
  zoomToQuery(option);
  switch (option) {
    case "usa":
      removeChildren(document.getElementById("city"));
      city = document.createElement("option");
      city.disabled = true;
      city.selected = true;
      city.innerHTML = "City";
      document.getElementById("city").appendChild(city);
      nyc = document.createElement("option");
      nyc.value = "nyc";
      nyc.innerHTML = "NYC";
      document.getElementById("city").appendChild(nyc);
      dc = document.createElement("option");
      dc.value = "dc";
      dc.innerHTML = "Washington DC";
      document.getElementById("city").appendChild(dc);
      break;
  }
}
document.getElementById("city").onchange = function() {
  option = document.getElementById("city").options[document.getElementById("city").selectedIndex].value
  zoomToQuery(option)
  switch (option) {
    case "nyc":
      removeChildren(document.getElementById("venue"));
      venue = document.createElement("option");
      venue.disabled = true;
      venue.selected = true;
      venue.innerHTML = "Venue";
      document.getElementById("venue").appendChild(venue);
      ciana = document.createElement("option");
      ciana.value = "1";
      ciana.innerHTML = "CIANA";
      document.getElementById("venue").appendChild(ciana);
      astoria_mosque = document.createElement("option");
      astoria_mosque.value = "2";
      astoria_mosque.innerHTML = "Astoria Islamic Center";
      document.getElementById("venue").appendChild(astoria_mosque);
      break;
    case "dc":
      removeChildren(document.getElementById("venue"));
      venue = document.createElement("option");
      venue.disabled = true;
      venue.selected = true;
      venue.innerHTML = "Venue";
      document.getElementById("venue").appendChild(venue);
      break;
  }
}
document.getElementById("venue").onchange = function() {
  option = document.getElementById("venue").options[document.getElementById("venue").selectedIndex].value
  zoomToQuery(option)
}
document.getElementById("id_primary_subject").onchange = function() {
  option = document.getElementById("id_primary_subject").options[document.getElementById("id_primary_subject").selectedIndex].value
  switch (option) {
    case "math":
      removeChildren(document.getElementById("secondary-option"));
      secondaryOption = document.createElement("option");
      secondaryOption.disabled = true;
      secondaryOption.selected = true;
      secondaryOption.innerHTML = "Secondary category";
      document.getElementById("secondary-option").appendChild(secondaryOption);
      elementrySchool = document.createElement("option");
      elementrySchool.value = "elementry";
      elementrySchool.innerHTML = "Elementry School";
      document.getElementById("secondary-option").appendChild(elementrySchool);
      preAlgebra = document.createElement("option");
      preAlgebra.value = "preAlgebra";
      preAlgebra.innerHTML = "Pre Algebra";
      document.getElementById("secondary-option").appendChild(preAlgebra);
      algebra = document.createElement("option");
      algebra.value = "algebra";
      algebra.innerHTML = "Algebra";
      document.getElementById("secondary-option").appendChild(algebra);
      geometry = document.createElement("option");
      geometry.value = "geometry";
      geometry.innerHTML = "Geometry";
      document.getElementById("secondary-option").appendChild(geometry);
      basicApp = document.createElement("option");
      basicApp.value = "basicApp";
      basicApp.innerHTML = "Basic applications";
      document.getElementById("secondary-option").appendChild(basicApp);
      preCalculus = document.createElement("option");
      preCalculus.value = "preCalculus";
      preCalculus.innerHTML = "Pre Calculus";
      document.getElementById("secondary-option").appendChild(preCalculus);
      calculus = document.createElement("option");
      calculus.value = "calculus";
      calculus.innerHTML = "Calculus";
      document.getElementById("secondary-option").appendChild(calculus);
      mcalc = document.createElement("option");
      mcalc.value = "mcalc";
      mcalc.innerHTML = "Multivariable Calculus";
      document.getElementById("secondary-option").appendChild(mcalc);
      lalgebra = document.createElement("option");
      lalgebra.value = "lalgebra";
      lalgebra.innerHTML = "Linear Algebra";
      document.getElementById("secondary-option").appendChild(lalgebra);
      advancedApp = document.createElement("option");
      advancedApp.value = "advancedApp";
      advancedApp.innerHTML = "Advanced applications";
      document.getElementById("secondary-option").appendChild(advancedApp);
      break;
    case "science":
      removeChildren(document.getElementById("secondary-option"));
      secondaryOption = document.createElement("option");
      secondaryOption.disabled = true;
      secondaryOption.selected = true;
      secondaryOption.innerHTML = "Secondary category";
      document.getElementById("secondary-option").appendChild(secondaryOption);
      astro = document.createElement("option");
      astro.value = "astro";
      astro.innerHTML = "Astrophysics";
      document.getElementById("secondary-option").appendChild(astro);
      bio = document.createElement("option");
      bio.value = "bio";
      bio.innerHTML = "Biology";
      document.getElementById("secondary-option").appendChild(bio);
      chem = document.createElement("option");
      chem.value = "chem";
      chem.innerHTML = "Chemistry";
      document.getElementById("secondary-option").appendChild(chem);
      cs = document.createElement("option");
      cs.value = "cs";
      cs.innerHTML = "Computer Science";
      document.getElementById("secondary-option").appendChild(cs);
      orgo = document.createElement("option");
      orgo.value = "orgo";
      orgo.innerHTML = "Organic Chemistry";
      document.getElementById("secondary-option").appendChild(orgo);
      physics = document.createElement("option");
      physics.value = "physics";
      physics.innerHTML = "Physics";
      document.getElementById("secondary-option").appendChild(physics);
      medicine = document.createElement("option");
      medicine.value = "medicine";
      medicine.innerHTML = "Medicine";
      document.getElementById("secondary-option").appendChild(medicine);
      zoology = document.createElement("option");
      zoology.value = "zoology";
      zoology.innerHTML = "Zoology";
      document.getElementById("secondary-option").appendChild(zoology);
      break;
    case "english":
      removeChildren(document.getElementById("secondary-option"));
      secondaryOption = document.createElement("option");
      secondaryOption.disabled = true;
      secondaryOption.selected = true;
      secondaryOption.innerHTML = "Secondary category";
      document.getElementById("secondary-option").appendChild(secondaryOption);
      fiction = document.createElement("option");
      fiction.value = "fiction";
      fiction.innerHTML = "Fiction";
      document.getElementById("secondary-option").appendChild(fiction);
      nonfiction = document.createElement("option");
      nonfiction.value = "nonfiction";
      nonfiction.innerHTML = "Non-fiction";
      document.getElementById("secondary-option").appendChild(nonfiction);
      poetry = document.createElement("option");
      poetry.value = "poetry";
      poetry.innerHTML = "Poetry";
      document.getElementById("secondary-option").appendChild(poetry);
      break;
    case "foreign_language":
      removeChildren(document.getElementById("secondary-option"));
      secondaryOption = document.createElement("option");
      secondaryOption.disabled = true;
      secondaryOption.selected = true;
      secondaryOption.innerHTML = "Secondary category";
      document.getElementById("secondary-option").appendChild(secondaryOption);
      spanish = document.createElement("option");
      spanish.value = "spanish";
      spanish.innerHTML = "Spanish";
      document.getElementById("secondary-option").appendChild(spanish);
      german = document.createElement("option");
      german.value = "german";
      german.innerHTML = "German";
      document.getElementById("secondary-option").appendChild(german);
      french = document.createElement("option");
      french.value = "french";
      french.innerHTML = "French";
      document.getElementById("secondary-option").appendChild(french);
      russian = document.createElement("option");
      russian.value = "russian";
      russian.innerHTML = "Russian";
      document.getElementById("secondary-option").appendChild(russian);
      arabic = document.createElement("option");
      arabic.value = "arabic";
      arabic.innerHTML = "Arabic";
      document.getElementById("secondary-option").appendChild(arabic);
      chinese = document.createElement("option");
      chinese.value = "chinese";
      chinese.innerHTML = "Chinese";
      document.getElementById("secondary-option").appendChild(chinese);
      break;
    case "social_science":
      removeChildren(document.getElementById("secondary-option"));
      secondaryOption = document.createElement("option");
      secondaryOption.disabled = true;
      secondaryOption.selected = true;
      secondaryOption.innerHTML = "Secondary category";
      document.getElementById("secondary-option").appendChild(secondaryOption);
      econ = document.createElement("option");
      econ.value = "econ";
      econ.innerHTML = "Economics";
      document.getElementById("secondary-option").appendChild(econ);
      history = document.createElement("option");
      history.value = "history";
      history.innerHTML = "History";
      document.getElementById("secondary-option").appendChild(history);
      polsci = document.createElement("option");
      polsci.value = "polsci";
      polsci.innerHTML = "Political science";
      document.getElementById("secondary-option").appendChild(polsci);
      sociology = document.createElement("option");
      sociology.value = "sociology";
      sociology.innerHTML = "Sociology";
      document.getElementById("secondary-option").appendChild(sociology);
      psych = document.createElement("option");
      psych.value = "psych";
      psych.innerHTML = "Psychology";
      document.getElementById("secondary-option").appendChild(psych);
      break;
    case "political":
      removeChildren(document.getElementById("secondary-option"));
      secondaryOption = document.createElement("option");
      secondaryOption.disabled = true;
      secondaryOption.selected = true;
      secondaryOption.innerHTML = "Secondary category";
      document.getElementById("secondary-option").appendChild(secondaryOption);
      voting = document.createElement("option");
      voting.value = "voting";
      voting.innerHTML = "Voting";
      document.getElementById("secondary-option").appendChild(voting);
      immigration = document.createElement("option");
      immigration.value = "immigration";
      immigration.innerHTML = "Immigration law";
      document.getElementById("secondary-option").appendChild(immigration);
      taxes = document.createElement("option");
      taxes.value = "taxes";
      taxes.innerHTML = "Taxes";
      document.getElementById("secondary-option").appendChild(taxes);
      break;
    case "skills":
      removeChildren(document.getElementById("secondary-option"));
      secondaryOption = document.createElement("option");
      secondaryOption.disabled = true;
      secondaryOption.selected = true;
      secondaryOption.innerHTML = "Secondary category";
      document.getElementById("secondary-option").appendChild(secondaryOption);
      sports = document.createElement("option");
      sports.value = "sports";
      sports.innerHTML = "Sports";
      document.getElementById("secondary-option").appendChild(sports);
      woodworking = document.createElement("option");
      woodworking.value = "woodworking";
      woodworking.innerHTML = "Woodworking";
      document.getElementById("secondary-option").appendChild(woodworking);
      fishing = document.createElement("option");
      fishing.value = "fishing";
      fishing.innerHTML = "Fishing";
      document.getElementById("secondary-option").appendChild(fishing);
      break;
    case "other":
      removeChildren(document.getElementById("secondary-option"));
      secondaryOption = document.createElement("option");
      secondaryOption.disabled = true;
      secondaryOption.selected = true;
      secondaryOption.innerHTML = "Secondary category";
      document.getElementById("secondary-option").appendChild(secondaryOption);
      other = document.createElement("option");
      other.value = "other";
      other.innerHTML = "Other";
      document.getElementById("secondary-option").appendChild(other);
      break;
  }
}
function addTag(tag) {
  document.getElementById("tagshiddeninput").value += " " + tag
  holder = document.createElement("div")
  holder.classList.add("tag-holder", "justify", "start-row-flex")
  holder.id = tag.hashCode() + "_holder"
  tagdiv = document.createElement("div")
  tagdiv.classList.add("tag")
  txt = document.createTextNode(tag)
  tagdiv.appendChild(txt)
  closebtn = document.createElement("span")
  closebtn.classList.add("deletebtn")
  closebtn.id = tag.hashCode()
  closebtn.addEventListener("click", function(e) {
    tag = e.currentTarget.id
    document.getElementById(tag+"_holder").remove()
    document.getElementById("tagshiddeninput").value.replace(e.currentTarget.innerHTML, "")
  })
  x = document.createTextNode("✖")
  closebtn.appendChild(x)
  tagdiv.appendChild(closebtn)
  holder.appendChild(tagdiv)
  document.getElementById('tags-grid').appendChild(holder)
}
document.getElementById("taginput").addEventListener("keyup", function(event) {
  if (event.keyCode == 13) {
    event.preventDefault()
    console.log("entered")
    document.getElementById('addbtn').click()
  }
  return false
})
document.getElementById("addbtn").onclick = function() {
  input = document.getElementById("taginput")
  if (input.value == "") {
    return
  }
  addTag(input.value)
  input.value = ""
}

String.prototype.hashCode = function() {
  var hash = 0, i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};
$(function () {
  $('#datetimepicker0').datetimepicker();
  $('#datetimepicker1').datetimepicker();
});
//var datetimePickerCounter = 1
document.getElementById('adddatebtn').onclick = function() {
  console.log("called to add row")
  datetimePickerCounter += 1
  console.log("adding index " + datetimePickerCounter)
  newRow = document.getElementById("date-row").cloneNode(true)
  document.getElementById("schedules_holder").insertBefore(newRow,document.getElementById('adddatebtn'))
  document.getElementsByClassName("input-group")[datetimePickerCounter].id = "datetimepicker" + datetimePickerCounter
  $(function () {
      $('#datetimepicker' + datetimePickerCounter).datetimepicker();
  });
  document.getElementsByClassName("form-control")[datetimePickerCounter].id = "datetimepicker" + datetimePickerCounter + "-input"
  document.getElementById("datetimepicker" + datetimePickerCounter + "-input").name = "date"+ datetimePickerCounter
  datetimePickerCounter += 1
  console.log("adding index " + datetimePickerCounter)
  document.getElementsByClassName("input-group")[datetimePickerCounter].id = "datetimepicker" + datetimePickerCounter
  $(function () {
      $('#datetimepicker' + datetimePickerCounter).datetimepicker();
  });
  document.getElementsByClassName("form-control")[datetimePickerCounter].id = "datetimepicker" + datetimePickerCounter + "-input"
  document.getElementById("datetimepicker" + datetimePickerCounter + "-input").name = "date"+ datetimePickerCounter
}
function validate(element) {
  if (element.value == "") {
    element.style.borderColor = "#c5162e"
    return false
  } else {
    element.style.borderColor = "lightGrey"
    return true
  }
}
function validateForm() {
  valid = true
  // TODO: Validate dates in chronological order
  if (!validate(document.getElementById("textarea"))) {
    valid = false
    console.log("textarea is invalid")
  }
  for (var i = 0; i < document.getElementsByTagName("select").length; i++) {
    if (document.getElementsByTagName("select")[i].selectedIndex == 0) {
      document.getElementsByTagName("select")[i].style.borderColor = "#c5162e"
      valid = false
      console.log("select is invalid")
    }
  }
  for (var i = 0; i < document.getElementsByTagName("input").length; i++) {
    element = document.getElementsByTagName("input")[i]
    if (element.name == "tag" || element.name == "hiddenFile" || element.name == "filepond" || element.name == "mainFile" || element.name == "") {
      continue
    } else {
      if (!validate(element)) {
        valid = false
        console.log("input is invalid")
        console.log(element.name)
        console.log(element.classList)
      }
    }
  }
  return valid
}
