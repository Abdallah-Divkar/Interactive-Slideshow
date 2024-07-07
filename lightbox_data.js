"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Chapter Case

      Image List

      Filename:lightbox_data.js
*/

// Title of the slideshow
let lightboxTitle = "My Travel Journal";

// Names of the image files shown in the slideshow
let imgFiles = ["photo01.jpg", "photo02.jpg", "photo03.jpg", "photo04.jpg",
                "photo05.jpg", "photo06.jpg", "photo07.jpg", "photo08.jpg",
                "photo09.jpg", "photo10.jpg", "photo11.jpg", "photo12.jpg"]

// Captions associated with each image
let imgCaptions = new Array(12);
imgCaptions[0]="At the peak of Mt.Titlis, Interlaken (Switzerland)";
imgCaptions[1]="Jeddah Waterfront, Jeddah (Saudi Arabia)";
imgCaptions[2]="CN Tower, Toronto (Canada)"; 
imgCaptions[3]="Mt.Titlis, Interlaken (Switzerland)"; 
imgCaptions[4]="My Family Home, Mumbai (India)";
imgCaptions[5]="Gooderham Building, Toronto (Ontario)";
imgCaptions[6]="St.Lawrence Market, Toronto (Ontario)";
imgCaptions[7]="Grindelwald, Bern (Switzerland)";
imgCaptions[8]="Grand Canal, Venice (Italy)";
imgCaptions[9]="Dirt bike, Riyadh (Saudi Arabia)";
imgCaptions[10]="Nathan Phillips Square, Toronto (Ontario)";;
imgCaptions[11]="Yonge-Dundas Square, Toronto (Ontario)";

// Count of images in the slideshow
let imgCount = imgFiles.length;
