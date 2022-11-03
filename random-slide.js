

   //$('NextButton').hide();
   //$('PreviousButton').hide(); //hide next/prev button Qualtrics command


   var indexValue = 0;
   const img = document.querySelectorAll("img");
   var imgArr = Array.from(img);


      function slideShow(){
        setTimeout(slideShow, 2000);
        var x;
        
         for(x = 0; x < imgArr.length; x++){
            imgArr[x].style.display = "none";
         }
         indexValue++;
         if(indexValue >  imgArr.length){indexValue = 1}
         imgArr[indexValue -1].style.display = "block";
      }

      function shuffleArray(array) {
         for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
         }
      }

      shuffleArray(imgArr);
      slideShow(); 
