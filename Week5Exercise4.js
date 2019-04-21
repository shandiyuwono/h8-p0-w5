function totalDigitRekursif(angka) {
  // you can only write your code here!
  
  var strAngka = String(angka)

  if(strAngka.length === 1) {
    return angka
  }
  var sliceDepan = strAngka.slice(0,1)
  var sliceSisa = Number(strAngka.slice(1, strAngka.length))

  return Number(sliceDepan) + totalDigitRekursif(sliceSisa)
}



// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5