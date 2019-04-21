function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var arrAngka = String(angka).split("")

    var output = 1
    for(var i = 0; i <= arrAngka.length -1 ; i++) {
        output *= Number(arrAngka[i])
    }

    
    if(String(output).length === 1) {
        return output
    }
    else{
    return kaliTerusRekursif(output)
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6