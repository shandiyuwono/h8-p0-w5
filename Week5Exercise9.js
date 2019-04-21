function cariPelaku(str) {
    // you can only write your code here!
    // output = 0
    // for(var i = 0; i <= str.length-1; i++) {
    //     if(str.slice(i, i+3) === "abc") {
    //         output ++
    //     }
        
    // }
    // return output
    return str.match(/abc/g).length

  }
  
  // TEST CASES
  console.log(cariPelaku('mabcvabc')); // 2
  console.log(cariPelaku('abcdabdc')); // 1
  console.log(cariPelaku('bcabcac')); // 1
  console.log(cariPelaku('abcabcabc')); // 3
  console.log(cariPelaku('babcbacabc')); // 2