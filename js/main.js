var starContainer = document.querySelector('#star-container');
var starsCount = 100;
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var starEls = [];
starContainer.style.height = windowHeight + "px";


function createStars(){
    for(var star = 0; star < starsCount; star++){
        var randomNo = Math.round(Math.random()*14) + 1;
        var starEl = document.createElement('div');
            starEl.className = "star-container"
            starEl.style.backgroundImage = "url(imgs/stars/" + randomNo + ".png)";
            starEl.style.top = Math.random() * (windowHeight * 0.4) + "px";
            starEl.style.left = Math.random() * windowWidth + "px";

        starEls.push(starEl);
     }
     addStarsToPage();
}

function addStarsToPage(){
     starEls.forEach(function(s){
         starContainer.appendChild(s);
     })
     updateStars();
     createMoon();
}

function updateStars(){
     var fadedStars = [];
     var fadedStarsCount = 20;

     setInterval(function(){
         if(fadedStars.length > fadedStarsCount){
             var starToFadeIn = Math.round(Math.random()*fadedStarsCount);
             fadedStars[starToFadeIn].style.opacity = 1;
             fadedStars.splice(starToFadeIn,1)
         }
         var starToFadeOut = Math.round(Math.random() * (starsCount - 1));
         fadedStars.push(starEls[starToFadeOut])

         starEls[starToFadeOut].style.opacity = 0;
     },200)

}

function createMoon(){
    var moonEl = document.createElement('div');
        moonEl.className = "moon-container";
        moonEl.style.top = (windowHeight*0.25*0.5) + Math.random() * (windowHeight*0.25+0.6) + "px";
        moonEl.style.left = Math.random() * windowWidth + "px";

    starContainer.appendChild(moonEl);
}

function animateText(){
    var titleEl = document.querySelector('#title-background');

    setTimeout(function(){
        // titleEl.style.left = "-4000px";
    },200)

    // setInterval(function(){
    //     // titleEl.style.opacity = 0.6 + (Math.random() * 0.4);
    // },100)
}

function createPenguins(){
    var penguinContainerEl = document.querySelector('#penguin-container');
    var penguinWidth = 50;
    var penguinHeight = penguinWidth * 2;
    var penguinCountX = Math.floor(windowWidth/penguinWidth);
    var penguinCountY = Math.floor((windowHeight)/penguinHeight);
    var marginHorizontal = (windowWidth - (penguinCountX * penguinWidth))/2;
    var previousPenguin = false;

    for (var x = 0; x< penguinCountX; x++){
        for(var y = 0; y<penguinCountY; y++){
            var penguinEl = document.createElement('div')
                penguinEl.className = "penguin-container"
                penguinEl.style.height = penguinHeight + "px"
                penguinEl.style.width = penguinWidth + "px"
                penguinEl.style.top = penguinHeight * y + "px"
                penguinEl.style.left = marginHorizontal + (penguinWidth * x) + "px"

            penguinContainerEl.appendChild(penguinEl);

            if(Math.random()<0.1 && !previousPenguin){
                previousPenguin = true;
                var randomPenguin = Math.round(Math.random()*2) + 1;
                var penguinImg = document.createElement('img');
                    penguinImg.src = "imgs/penguins/" + randomPenguin + ".png"

                if(Math.random()<0.3){
                    penguinImg.style.transform = "scale(-1, 1)";
                }

                penguinEl.appendChild(penguinImg);
            }else{
                previousPenguin = false;
            }
        }
    }
}

function Penguin(){
    this.penguinId = "01";

    this.penguinEl = document.createElement('div')
    this.penguinEl.className = "penguin-container";

    this.penguinImg = document.createElement('img');
    this.penguinImg.src = "imgs/penguins/" + this.penguinId + ".png";

    this.penguinEl.appendChild(this.penguinImg);

    return this.penguinEl
}

 createStars();
 animateText();
 createPenguins();
