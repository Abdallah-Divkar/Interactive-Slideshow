window.addEventListener("load", createLightbox);

            function createLightbox() {
               let lightBox = document.getElementById("lightbox");

               let lbTitle = document.createElement("h1");
               lightBox.appendChild(lbTitle);
               lbTitle.id = "lbTitle";
               lbTitle.textContent = lightboxTitle;
               
               let lbCounter = document.createElement("div");
               lightBox.appendChild(lbCounter);
               lbCounter.id = "lbCounter";
               let currentImg = 1;
               lbCounter.textContent = currentImg + " / " + imgCount;


               let lbPrev = document.createElement("div");
               lightBox.appendChild(lbPrev);
               lbPrev.id = "lbPrev";
               lbPrev.innerHTML = "&#9664;"
               lbPrev.onclick = showPrev;

               let lbNext = document.createElement("div");
               lightBox.appendChild(lbNext);
               lbNext.id = "lbNext";
               lbNext.innerHTML = "&#9654;"
               lbNext.onclick = showNext;

               let lbPlay = document.createElement("div");
               lightBox.appendChild(lbPlay);
               lbPlay.id = "lbPlay";
               lbPlay.innerHTML = "&#9199;"
               let timeID;
               lbPlay.onclick = function() {
                if (timeID) {
                    //Stope Slideshow
                    window.clearInterval(timeID);
                    timeID = undefined;
                } else {
                showNext();
                timeID = window.setInterval(showNext(), 1500);
                }

               }

               let lbImages = document.createElement("div");
               lightBox.appendChild(lbImages);
               lbImages.id = "lbImages";
               //Adding images from aaray
               for(let i = 0; i < imgCount; i++) {
                  let image = document.createElement("img");
                  image.src= imgFiles[i];
                  image.alt = imgCaptions[i];
                  image.onclick = createOverlay;
                  lbImages.appendChild(image);
               }
            
               //Function to move forwarsd
               function showNext() {
                  lbImages.appendChild(lbImages.firstElementChild);
                  (currentImg < imgCount) ? currentImg++ : currentImg = 1;
                  lbCounter.textContent = currentImg + " / " + imgCount;
               }

               function showPrev() {
                lbImages . insertBefore(lbImages.lastElementChild, lbImages.firstElementChild);
                (currentImg > 1) ? currentImg-- : currentImg = imgCount;
                lbCounter.textContent = currentImg + " / " + imgCount;
               }

               function createOverlay() {
                let overlay = document.createElement("div");
                overlay.id = "lbOverlay";

                let figureBox = document.createElement("figure");
                overlay.appendChild(figureBox);

                let overlayImage = this.cloneNode("true");
                figureBox.appendChild(overlayImage);

                let overlayCaption = document.createElement("figcaption");
                overlayCaption.textContent = this.alt;
                figureBox.appendChild(overlayCaption);

               //Favorites button
               let favoritesButton = document.createElement('button');
               favoritesButton.textContent = "Add to Favorites";
               favoritesButton.onclick = function() {
                  addImg(overlayImage.src);
               };
               overlay.appendChild(favoritesButton);

               //Array to check images in favorites
               let favorites = [];

               function addImg(imgSrc) {
                  if (favorites.indexOf(imgSrc) == -1 && favorites.length < 5) {
                     let favImg = document.createElement("img");
                     favImg.src = imgSrc;
                     favImg.alt = "Favorite image";
                     let removeButton = document.createElement('button');
                     removeButton.textContent = "Remove Image"
                     removeButton.onclick = function() {
                        removeImg(imgSrc);
                     };
                     let favDiv = document.createElement("div");
                     favDiv.appendChild(favImg);
                     favDiv.appendChild(removeButton);
                     document.getElementById("list").appendChild(favDiv);
                     favorites.push(imgSrc);
                  } 
                  else {
                    window.alert("You can not add more than 5 images and you can add an image only once.");
                  }
               }

               function removeImg(imgSrc) {
                  let index = favorites.indexOf(imgSrc);
                  if (index > -1) {
                    favorites.splice(index, 1);
                    let favoriteDiv = document.getElementById("list").childNodes;
                    for (let i = 0; i < favoriteDiv.length; i++) {
                      if (favoriteDiv[i].firstChild.src == imgSrc) {
                        document.getElementById("list").removeChild(favoriteDiv[i]);
                        break;
                      }
                    }
                  }
               }
                let closeBox = document.createElement("div");
                closeBox.id = "lbOverlayClose";
                closeBox.innerHTML = "&times;";
                closeBox.onclick = function() {
                    document.body.removeChild(overlay);
                }
                overlay.appendChild(closeBox);
                
                document.body.appendChild(overlay);
            }

               //Array to check images in favorites
}
            
          