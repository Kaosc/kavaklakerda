function openMenu(evt, menuName) {
    var i, x, tablinks;
    
    // first page load set all menu items display to none
    x = document.getElementsByClassName("p-items");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

    // Replace link button style (background or someting)
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" text-b-dark", " ");
    }

    // Displays the clicked menu items
    document.getElementById(menuName).style.display = "block";

    // Add the styles the clicked link button class (background or someting)
    evt.currentTarget.firstElementChild.className += " text-b-dark";
}

// click the spesificed menu button to display for the first time
document.getElementById("Current").click();


// SLIDER
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) 
{
  showDivs(slideIndex += n);
}

function showDivs(n) 
{
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}