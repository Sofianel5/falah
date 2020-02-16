function removeChildren(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}
document.getElementById("primary-option").onchange = function() {
  option = document.getElementById("primary-option").options[document.getElementById("primary-option").selectedIndex].value
  switch (option) {
    case "math":
      removeChildren(document.getElementById("secondary-option"));
      secondaryOption = document.createElement("option");
      secondaryOption.selected = true;
      secondaryOption.value = "any"
      secondaryOption.innerHTML = "Any sub-subject";
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
      secondaryOption.selected = true;
      secondaryOption.value = "any"
      secondaryOption.innerHTML = "Any sub-subject";
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
      secondaryOption.selected = true;
      secondaryOption.value = "any"
      secondaryOption.innerHTML = "Any sub-subject";
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
      secondaryOption.selected = true;
      secondaryOption.value = "any"
      secondaryOption.innerHTML = "Any sub-subject";
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
      secondaryOption.selected = true;
      secondaryOption.value = "any"
      secondaryOption.innerHTML = "Any sub-subject";
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
      secondaryOption.selected = true;
      secondaryOption.value = "any"
      secondaryOption.innerHTML = "Any sub-subject";
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
      secondaryOption.selected = true;
      secondaryOption.value = "any"
      secondaryOption.innerHTML = "Any sub-subject";
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
      secondaryOption.selected = true;
      secondaryOption.value = "any"
      secondaryOption.innerHTML = "Any sub-subject";
      document.getElementById("secondary-option").appendChild(secondaryOption);
      other = document.createElement("option");
      other.value = "other";
      other.innerHTML = "Other";
      document.getElementById("secondary-option").appendChild(other);
      break;
  }
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
appliedFilters = {}
function addTag(tag) {
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
    removeFilter(appliedFilters[e.currentTarget.id])
  })
  x = document.createTextNode("✖")
  closebtn.appendChild(x)
  tagdiv.appendChild(closebtn)
  holder.appendChild(tagdiv)
  document.getElementById('tags-grid').appendChild(holder)
}
function removeFilter(object) {
  for (i = 0; i < document.getElementsByClassName("program_holder").length; i++) {
    id = document.getElementsByClassName("program_holder")[i].id
    var program = programs[0]["fields"]
      for (n = 0; n < programs.length; n++) {
        console.log(programs[n]["pk"] + ", " + id)
        if (programs[n]["pk"] == id) {
          console.log("you have selected program " + id)
          program = programs[n]["fields"]
        }
      }
    if (object["type"] != "any") {
      if (program["type"] !== object["type"]) {
        document.getElementsByClassName("program_holder")[i].style.display = "flex"
      }
    }
    if (object["primary"] != "any") {
      if (program["primary"] !== object["primary"]) {
        document.getElementsByClassName("program_holder")[i].style.display = "flex"
      }
    }
    if (object["secondary"] != "any") {
      if (program["secondary"] !== object["secondary"]) {
        document.getElementsByClassName("program_holder")[i].style.display = "flex"
      }
    }
  }
}
function applyFilter(object) {
  for (i = 0; i < document.getElementsByClassName("program_holder").length; i++) {
    id = document.getElementsByClassName("program_holder")[i].id
    var program = programs[0]
      for (n = 0; n < programs.length; n++) {
        console.log(programs[n]["pk"] + ", " + id)
        if (programs[n]["pk"] == id) {
          console.log("you have selected program " + id)
          program = programs[n]["fields"]
        }
      }
    if (object["type"] != "any") {
      if (program["type"] !== object["type"]) {
        document.getElementsByClassName("program_holder")[i].style.display = "none"
      } else {
        document.getElementsByClassName("program_holder")[i].style.display = "flex"
      }
    }
    if (object["primary"] != "any") {
      if (program["primary"] !== object["primary"]) {
        document.getElementsByClassName("program_holder")[i].style.display = "none"
      } else {
        document.getElementsByClassName("program_holder")[i].style.display = "flex"
      }
    }
    if (object["secondary"] != "any") {
      if (program["secondary"] !== object["secondary"]) {
        document.getElementsByClassName("program_holder")[i].style.display = "none"
      } else {
        document.getElementsByClassName("program_holder")[i].style.display = "flex"
      }
    }
  }
}
document.getElementById("addFilter").onclick = function() {
  type = document.getElementById("type").options[document.getElementById("type").selectedIndex].value
  primarySubject = document.getElementById("primary-option").options[document.getElementById("primary-option").selectedIndex].value
  secondarySubject = document.getElementById("secondary-option").options[document.getElementById("secondary-option").selectedIndex].value
  filter = {"type": type, "primary": primarySubject, "secondary": secondarySubject}
  var filterText = ""
  if (filter["type"] != "any" || filter["primary"] != "any" || filter["secondary"] != "any") {
    var counter = 0
    if (filter["type"] != "any") {
      counter += 1
      filterText = document.getElementById("type").options[document.getElementById("type").selectedIndex].innerHTML
    }
    if (filter["primary"] != "any") {
      if (counter == 1) {
      filterText += ", " + document.getElementById("primary-option").options[document.getElementById("primary-option").selectedIndex].innerHTML
      } else {
        filterText += document.getElementById("primary-option").options[document.getElementById("primary-option").selectedIndex].innerHTML
      }
    }
    if (filter["secondary"] != "any") {
      if (counter > 0) {
        filterText += ", " + document.getElementById("secondary-option").options[document.getElementById("secondary-option").selectedIndex].innerHTML
      } else {
        filterText +=document.getElementById("secondary-option").options[document.getElementById("secondary-option").selectedIndex].innerHTML
      }
    }
    appliedFilters[filterText.hashCode()] = filter
    applyFilter(filter)
    addTag(filterText)
  }
}
var map;
var regIcon;
var largeIcon;
function initMap() {
  regIcon = {
    url: "https://maps.google.com/mapfiles/ms/micons/blue.png",
    scaledSize: new google.maps.Size(32, 32)
  };
  largeIcon = {
    url: "https://maps.google.com/mapfiles/ms/micons/blue.png",
    scaledSize: new google.maps.Size(48, 48)
  };
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: cityCoordinates
  });
  for (id in centers) {
    var marker = new google.maps.Marker({
      position: centers[id]["coordinates"],
      map: map,
      title: centers[id]["title"],
      icon: regIcon
    });
    centers[id]["marker"] = marker
    bindInfoWindow(marker, map, new google.maps.InfoWindow(), centers[id]["title"])
  }
}
function bindInfoWindow(marker, map, infowindow, html) {
    marker.addListener('click', function() {
        infowindow.setContent(html);
        infowindow.open(map, this);
    });
}
function highlightMarker(id) {
  marker = centers[id]["marker"]
  marker.setIcon(largeIcon)
}
function unhighlightMarker(id) {
  marker = centers[id]["marker"]
  marker.setIcon(regIcon)
}
if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function()
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}
if (!('contains' in String.prototype)) String.prototype.contains = function (str, startIndex) {
    return -1 !== String.prototype.indexOf.call(this, str, startIndex);
};
document.getElementById("search").addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    document.getElementById('searchButton').click()
  }
})
document.getElementById("searchButton").onclick = function search() {
  query = document.getElementById("search").value.trim().toLowerCase()
  if (query == "") {
    for (i = 0; i < documentq.getElementsByClassName("program_holder").length; i++) {
      document.getElementsByClassName("program_holder")[i].style.display = "flex"
    }
    return
  }
  matches = []
  loop1:
  for (program in programs) {
    program = programs[program]
    if (program["fields"].name.toLowerCase().includes(query)) {
      matches.push(program["pk"])
      break;
    }
    if (program["fields"].description.toLowerCase().includes(query)) {
      matches.push(program["pk"])
      break;
    }
    loop2:
    for (tag in program["fields"]["tags"].split(" ")) {
      if (tag.toLowerCase().contains(query)) {
        matches.push(program["pk"])
        break loop1
      }
    }
  }
  console.log(matches);
  for (i = 0; i < document.getElementsByClassName("program_holder").length; i++) {
    if (!matches.includes(parseInt(document.getElementsByClassName("program_holder")[i].id))) {
      document.getElementsByClassName("program_holder")[i].style.display = "none"
    } else {
      document.getElementsByClassName("program_holder")[i].style.display = "flex"
    }
  }
}
document.getElementById("city").onchange = function() {
  document.location.href = document.getElementById("city").options[document.getElementById("city").selectedIndex].value;
}
