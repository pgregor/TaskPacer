module.exports = {
  tokenizer: (buffer) => {
    () => { next(buffer, [], [], true) }
    function next(buffer, xVal, yVal, isXVal) {
      if (buffer.length == 0)
        return {
          xVal: xVal,
          yVal: yVal
        }
      let char = buffer.subString(0, 1)
      if (
        char === "," ||
        char === " "
      ) {
        let subBuffer = buffer.subString(1)
        return next(subBuffer, xVal, yVal, !isXVal)
      }
      let valLen = 0
      while (
        char === "0" ||
        char === "1" ||
        char === "2" ||
        char === "3" ||
        char === "4" ||
        char === "5" ||
        char === "6" ||
        char === "7" ||
        char === "8" ||
        char === "9") {
        if (
          buffer.length == 1 
          ){
            let value = buffer.subString(0,valLen)
            if (isXVal) xVal.push(value)
            else yVal.push(value)
            subBuffer = buffer.subString(valLen)
          return next(subBuffer, xVal, yVal, !isXVal)
          }
        }
        if (char === ".") {
          while (
            char === "0" ||
            char === "1" ||
            char === "2" ||
            char === "3" ||
            char === "4" ||
            char === "5" ||
            char === "6" ||
            char === "7" ||
            char === "8" ||
            char === "9") {

          }
        }
      }
    }
  }