function changeVocals (str) {
    //code di sini
    
    output = "" 
    for(var i = 0; i <= str.length-1; i++) {
        if(str[i] === "a") {
            output += "b" 
        }
        else if(str[i] === "i") {
            output += "j"
        }
        else if(str[i] === "u") {
            output += "v"
        }
        else if(str[i] === "e") {
            output += "f"
        }
        else if(str[i] === "o") {
            output += "p" 
        }
        else if(str[i] === "A") {
            output += "B" 
        }
        else if(str[i] === "I") {
            output += "J"
        }
        else if(str[i] === "U") {
            output += "V"
        }
        else if(str[i] === "E") {
            output += "F"
        }
        else if(str[i] === "O") {
            output += "P" 
        }
        else{
            output += str[i]
        }
    }
    return output
  }
  
  function reverseWord (str) {
     
     //code di sini

    output = ""
    for(var i = str.length-1; i >= 0; i--) {
        output += str[i]
    }
    
    return output
  }
  
  function setLowerUpperCase (str) {
    //code di sini

    output = ""
    for(var i = 0; i <= str.length-1; i++) {
        if(str.charAt(i) === str.charAt(i).toUpperCase()) {
            output += str.charAt(i).toLowerCase()
        }
        if(str.charAt(i) === str.charAt(i).toLowerCase()) {
            output += str.charAt(i).toUpperCase()
        }
    }

    return output
  }
  
  function removeSpaces (str) {
    //code di sini
    return str.split(" ").join("")
  }
  
  function passwordGenerator (name) {
    //code di sini
    if(name.length < 5) {
        return "Minimal karakter yang diinputkan adalah 5 karakter"
    }
    var vocals = changeVocals(name)
    var reverse = reverseWord(vocals)
    var charCase = setLowerUpperCase(reverse)
    var remove = removeSpaces(charCase)
    return remove
  }
  
//TEST CASE
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

