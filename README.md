# TOKENIZER

A tokenizer written in javascript. The Tokenizer is published on npm so you can install it with `npm install angelicagrass-tokenizer`. The tokenizer takes two parameters, first one is a grammar object that you create with the class grammar that is also provided in this tokeniser package. 

The grammar-object looks like this:
````
{
    TYPE: 'type' // the type of the token
    REGEX: /whatever/ // the regex that matched the token
}  
````
The second parameter is the string that you want to tokenize.

  
## HOW TO USE

* Import tokenizer  
```import { Tokenizer, Grammar } from 'angelicagrass-tokenizer/src/index.js'```   


* Create a grammar and tokenizer with regex  
```
const yourGrammar = new Grammar('YourGrammarName', '\w|ÅÄÖåäö]+/g)
``` 
```
yourGrammar = yourGrammar.createNewGrammar()
``` 
  
```
const yourTokenizer = new Tokenizer(yourGrammar,'Here is the string that we want to tokenize')
```

```
yourTokenizer.setTokenizerRules()  
yourTokenizer.tokenizeTheString() 
```   

* Get active token in the string
```
yourTokenizer.getActiveToken
```
  
* Navigate in the string  
```
yourTokenizer.getNextToken()  
yourTokenizer.getPreviousToken()
````







