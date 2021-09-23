import { Tokenizer } from './tokenizer.js'
import { regex } from './testRegex.js'

const TheTokenizer = new Tokenizer(regex, '3.15 5 8 9 10 100 hallå 4 5 6 7 8 9')


try {

TheTokenizer.setTokenizerRules()
TheTokenizer.tokenizeTheString()
TheTokenizer.getActiveToken()
TheTokenizer.getNextToken()
TheTokenizer.getNextToken()
TheTokenizer.getNextToken()
TheTokenizer.getNextToken()
TheTokenizer.getNextToken()

} catch (error) {
  console.log(error)
  
}


