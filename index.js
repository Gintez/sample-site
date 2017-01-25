require ('./style/main.scss');

document.getElementById("menu-icon").addEventListener("click", toggleMenu);

function toggleMenu() {
  var currentClass = document.getElementById("nav-bar").classList;
  if(currentClass.contains("hidden")){
    currentClass.remove("hidden");
  } else {
    currentClass.add("hidden");
  }
}
