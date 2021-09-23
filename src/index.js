import { Tokenizer } from './tokenizer.js'
import { regex } from './testRegex.js'
import { Grammar } from './grammar.js'


let NewRegex = new Grammar('WORD', /^[\w|ÅÄÖåäö]+/g )
NewRegex = NewRegex.createNewGrammar()

const TheTokenizer = new Tokenizer(NewRegex, 'hej här är lite ord som kanske kan fungera')


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


