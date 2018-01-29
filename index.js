function isValidCard() {
  var numbercard = document.getElementById('cn').value;
  if (numbercard.length === 0) {
    console.log('error');
  } else {
    var arr = [];
    for (var i = 0; i < numbercard.length; i++) {
      arr.push(numbercard[i]);
    } for (var elem = 0; elem < arr.length; elem++) {
      var item = arr.pop();
      arr.splice(elem, 0, item);
      var num = [];
    } for (var x = 0; x < arr.length; x++) {
      num.push(parseInt(arr[x]));
      var pairPosition = [];
      var impairPosition = 0;
      var result;
      // Separar los números en posiciones pares
    } for (var pe = 0; pe < num.length; pe ++) {
      if ([ pe + 1] % 2 === 0) {
        pairPosition.push((num[pe]) * 2);
      } else if ([pe + 1] % 2 !== 0)
        impairPosition += (num[pe]);
      var pairPositionLess = 0;
      var pairPositionHigth = [];
    } for (var se = 0; se < pairPosition.length; se++) {
      if (pairPosition[se] < 10) {
        pairPositionLess += (pairPosition[se]);
      } else {
        pairPositionHigth.push(pairPosition[se]);
        var pairString = pairPositionHigth.join('');
        var sum = 0;
        for (var ye = 0; ye < pairString.length; ye++) {
          sum += parseInt(pairString[ye]);
        }
      }
    }
  }result = sum + impairPosition + pairPositionLess;
  if (result % 10 === 0) {
    alert('Tarjeta Válida');
  } else {
    alert('Tarjeta Inválida');
  }
}