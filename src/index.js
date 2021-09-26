import { Tokenizer } from './tokenizer.js'
import { regex } from './testRegex.js'
import { Grammar } from './grammar.js'


let NewRegex = new Grammar('WORD', /^[\w|ÅÄÖåäö]+/g )
NewRegex = NewRegex.createNewGrammar()

const TheTokenizer = new Tokenizer(NewRegex, 'a')


try {

TheTokenizer.setTokenizerRules()
TheTokenizer.tokenizeTheString()
TheTokenizer.getPreviousToken()
console.log(TheTokenizer.getActiveToken().value + ' här är value')


} catch (error) {
  console.log(error)
  
}


