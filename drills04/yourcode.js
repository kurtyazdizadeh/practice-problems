function changeElements(className){
  let elements = document.querySelectorAll(className);

  for (let i = 0; i < elements.length; i++){
    let text = elements[i].textContent;
    switch (text) {
      case 'one':
        elements[i].textContent = 1;
        break;
      case 'two':
        elements[i].textContent = 2;
        break;
      case 'three':
        elements[i].textContent = 3;
        break;
      case 'four':
        elements[i].textContent = 4;
        break;
      case 'five':
        elements[i].textContent = 5;
        break;
      case 'six':
        elements[i].textContent = 6;
        break;
      case 'seven':
        elements[i].textContent = 7;
        break;
      case 'eight':
        elements[i].textContent = 8;
        break;
      case 'nine':
        elements[i].textContent = 9;
        break;
      default:
        break;
    }
  }
}

function appendTextToElement(className, addText){
  let elements = document.querySelectorAll(className);

  for (let i = 0; i < elements.length; i++){
    let text = elements[i].textContent;
    elements[i].textContent = text + addText;
  }

}

function addClass(existingClass, newClass){
  let elements = document.querySelectorAll(existingClass);

  for (let i = 0; i < elements.length; i++){
    elements[i].classList.add(newClass);
  }

  return elements.length;
}

function removeElements(selector){
  let elements = document.querySelectorAll(selector);

  for (let i = 0; i < elements.length; i++){
    elements[i].remove();
  }
}
