
export class Tokenizer {
  constructor(tokenizeType, tokenizeString) {
    this.regex = tokenizeType
    this.tokenizeString = tokenizeString
    this.errorMessage = 'No lexical element matches: ' + this.tokenizeString
    this.tempArray = []
    this.matchRules = []
    this.tokenResult = []
    this.indexOfActiveToken = 0
  }

  setTokenizerRules() {
    this.regex.map(reg => {
      this.matchRules.push(reg)
    })
  }

  tokenizeTheString() {
    
    while (this.tokenizeString.length > 0) {
      this.tempArray = []

      this.matchRules.forEach(reg => {    
        if (this.tokenizeString.match(reg.REGEX)) {
          let match = this.tokenizeString.match(reg.REGEX)
          this.tempArray.push({
            type: reg.TYPE,
            regex: reg.REGEX,
            value: this.tokenizeString.match(reg.REGEX)
          })
        }
      })
      this.findBestMatchOfTokenValue()
    }
    console.log(this.tokenResult)
    return this.tokenResult
  }

  
}