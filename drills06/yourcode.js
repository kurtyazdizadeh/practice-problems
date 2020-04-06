

function removeClassFromElement(element, className){
  $(element).removeClass(className);
}

function toggleClassOnElement(element, className){
  $(element).toggleClass(className);
}

function hideElements(element, type){
  switch(type){
    case 'hide':
      $(element).hide();
      break;
    case 'removeChildren':
      $(element).empty();
      break;
    case 'removeSelf':
      $(element).remove();
      break;
    default:
      break;
    }
}

function addAttributeToElement(element, attribute, value){
  $(element).attr(attribute, value);
}

function putPosInElement(element){
 let position = $(element).position();
 let result = {
   "x": position.left,
   "y": position.top
 }
 $(element).html(`x: ${result.x}px<br>y: ${result.y}px`)
 return result;
}
