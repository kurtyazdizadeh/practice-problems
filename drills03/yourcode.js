

function getPath(str){
  return str.split('/');
}

function getPathParts(str){
  var obj = {
    "protocol": "",
    "host": "",
    "port": 0,
    "path": "",
    "file": ""
  }

  var slashSplit = str.split('/');
  var indexOfColon = slashSplit[2].indexOf(':');

  obj.protocol = slashSplit[0].slice(0, -1);
  obj.host = slashSplit[2].slice(0, indexOfColon);
  obj.port = parseInt(slashSplit[2].slice(indexOfColon+1, slashSplit[2].length));

  var path = [];
  for (var i = 3; i < slashSplit.length-1; i++){
    path.push(slashSplit[i])
  }

  obj.path = path.join('/');
  obj.file = slashSplit[slashSplit.length-1];

  return obj;

}

function getCapitalCount(arr){
  var count = 0;

  for (var i = 0; i < arr.length; i++){
    if (arr[i][0] == arr[i][0].toUpperCase()) {
      count++;
    }
  }
  return count;
}

function correctCalcChecker(arr){
  arr[{},{},{}]
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    var valid = false;
    switch (arr[i].op) {
      case "+":
        if (arr[i].num1 + arr[i].num2 === arr[i].result) {
          valid = true;
        }
        break;
      case "-":
        if (arr[i].num1 - arr[i].num2 === arr[i].result) {
          valid = true;
        }
        break;
      case "*":
        if (arr[i].num1 * arr[i].num2 === arr[i].result) {
          valid = true;
        }
        break;
      case "/":
        if (arr[i].num1 / arr[i].num2 === arr[i].result) {
          valid = true;
        }
      default:
        break;
    }
    if (valid) {
      result.push(arr[i]);
    }
  }
  return result;
}
