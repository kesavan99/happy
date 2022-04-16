function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  
$("#slideshow > div:gt(0)").hide();
setInterval(function() { $('#slideshow > div:first') .fadeOut(10) .next() .fadeIn(1000) .end() .appendTo('#slideshow'); }, 3000);
$("#lideshow > div:gt(0)").hide();
setInterval(function() { $('#lideshow > div:first') .fadeOut(10) .next() .fadeIn(100) .end() .appendTo('#lideshow'); }, 4000);
