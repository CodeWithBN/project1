function toggleDarkMode() 
{
    var body = document.body;
    var bookCarousel = document.getElementById("bookCarousel");
    var cards = document.getElementsByClassName("card");
    var challengeCards = document.getElementsByClassName("challenge-card");
    var founderCards = document.getElementsByClassName("founder-card");
    var updateElements = document.getElementsByClassName("update");
  
    if (body.getAttribute("style") === "background-color: #333; color: #fff;") 
        {
      // Switch to default theme
      body.removeAttribute("style");
      bookCarousel.removeAttribute("style");
      for (var i = 0; i < cards.length; i++) {
        cards[i].removeAttribute("style");
      }
      for (var i = 0; i < challengeCards.length; i++) {
        challengeCards[i].removeAttribute("style");
      }
      for (var i = 0; i < founderCards.length; i++) {
        founderCards[i].removeAttribute("style");
      }
      for (var i = 0; i < updateElements.length; i++) {
        if (updateElements[i].tagName == "H2") {
          updateElements[i].removeAttribute("style");
        }
      }
    } else {
      // Switch to dark mode
      body.setAttribute("style", "background-color: #333; color: #fff;");
    //   bookCarousel.setAttribute("style", "background-color: black;");
      for (var i = 0; i < cards.length; i++) {
        cards[i].setAttribute("style", "background-color: black; color: #fff; border-color: black;");
      }
      for (var i = 0; i < challengeCards.length; i++) {
        challengeCards[i].setAttribute("style", "background-color: #000; color: #fff; border-color: #333;");
      }
      for (var i = 0; i < founderCards.length; i++) {
        founderCards[i].setAttribute("style", "background-color: #000 ; color: black;");
      }
      for (var i = 0; i < updateElements.length; i++) {
        if (updateElements[i].tagName == "H2") {
          updateElements[i].setAttribute("style", "color: #fff;");
        }
      }
    }
  }