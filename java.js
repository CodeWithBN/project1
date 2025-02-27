function toggleDarkMode() 
{
    document.body.setAttribute("style","background-color: #333; color: #fff;");

    document.getElementById("bookCarousel").setAttribute("style","background-color: black;");


    var cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) 
    {
      cards[i].setAttribute("style","background-color: black; color: #fff; border-color: black;");
    }

    var challengeCards = document.getElementsByClassName("challenge-card");
    for (var i = 0; i < challengeCards.length; i++) 
        {
            challengeCards[i].setAttribute("style","background-color: #000; color: #fff; border-color: #333;");
        }

    var founderCards = document.getElementsByClassName("founder-card");
    for (var i = 0; i < founderCards.length; i++) 
        {
            founderCards[i].setAttribute("style", "background-color: #000 ; color: #fff;");
        } 

    var updateElements = document.getElementsByClassName("update");
    for (var i = 0; i < updateElements.length; i++) 
        {

            if (updateElements[i].tagName == "H2") 
                {
                    updateElements[i].setAttribute("style", "color: #fff;");
                }
        }
}
  
