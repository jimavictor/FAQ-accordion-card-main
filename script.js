var accordion = document.getElementsByClassName("accordion");
var arrayOfAccordions = Array.from(accordion);
var arrow = document.getElementsByClassName("icon-arrow-down");
var arrayOfArrows = Array.from(arrow);
var panel = document.getElementsByClassName("panel");
var arrayOfPanels = Array.from(panel);


arrayOfAccordions.forEach(function(btn, index){
  btn.addEventListener("click", function(){
      if(arrayOfPanels[index].style.maxHeight){
          arrayOfPanels[index].style.maxHeight = null;
      }else{
        arrayOfPanels[index].style.maxHeight = arrayOfPanels[index].scrollHeight + "px";
      }
      arrayOfArrows[index].classList.toggle("icon-arrow-rotate")
  })  
})