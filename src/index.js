import { Tokenizer } from './tokenizer.js'
import { regex } from './testRegex.js'
import { Grammar } from './grammar.js'

export default { Tokenizer, Grammar }

// EXAMPLE ON HOW TO USE THE TOKENIZER

// let NewRegex = new Grammar('WORD', /^[\w|ÅÄÖåäö]+/g )
// NewRegex = NewRegex.createNewGrammar()

// const TheTokenizer = new Tokenizer(NewRegex, 'a string to tokenize')

// TheTokenizer.setTokenizerRules()
// TheTokenizer.tokenizeTheString()
// TheTokenizer.getPreviousToken()
