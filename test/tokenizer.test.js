import { Tokenizer } from "../src/tokenizer"
import { Grammar } from "../src/grammar"
import { arithmeticRegex } from "./arithmeticTest"
import { exclamationRegex } from "./exclamationTest"
import {wordAndDotGrammar} from "./wordAndDotTest"

describe('Tests for tokenizer', () => {

  it('TC1 WordAndDotGrammar test string: a', () => {
    const string = 'a'
    const tokenizer = new Tokenizer(wordAndDotGrammar, string)
    tokenizer.setTokenizerRules()
    tokenizer.tokenizeTheString()
    expect(tokenizer.getActiveToken().value[0]).toEqual('a')
    expect(tokenizer.getActiveToken().type).toEqual('WORD')
  })

  it('TC2 WordAndDotGrammar test string: a aa, sequence: >', () => {
    const string = 'a aa'
    const tokenizer = new Tokenizer(wordAndDotGrammar, string)
    tokenizer.setTokenizerRules()
    tokenizer.tokenizeTheString()
    tokenizer.getNextToken()
    expect(tokenizer.getActiveToken().value[0]).toEqual('aa')
    expect(tokenizer.getActiveToken().type).toEqual('WORD')
  })

  it('TC3 WordAndDotGrammar test string: a.b, sequence: >', () => {
    const string = 'a.b'
    const tokenizer = new Tokenizer(wordAndDotGrammar, string)
    tokenizer.setTokenizerRules()
    tokenizer.tokenizeTheString()
    tokenizer.getNextToken()
    expect(tokenizer.getActiveToken().value[0]).toEqual('.')
    expect(tokenizer.getActiveToken().type).toEqual('DOT')
  })

  it('TC4 WordAndDotGrammar test string: a.b, sequence: >>', () => {
    const string = 'a.b'
    const tokenizer = new Tokenizer(wordAndDotGrammar, string)
    tokenizer.setTokenizerRules()
    tokenizer.tokenizeTheString()
    tokenizer.getNextToken()
    tokenizer.getNextToken()
    expect(tokenizer.getActiveToken().value[0]).toEqual('b')
    expect(tokenizer.getActiveToken().type).toEqual('WORD')
  })

  it('TC5 WordAndDotGrammar test string: aa.b, sequence: >>', () => {
    const string = 'aa. b'
    const tokenizer = new Tokenizer(wordAndDotGrammar, string)
    tokenizer.setTokenizerRules()
    tokenizer.tokenizeTheString()
    tokenizer.getNextToken()
    tokenizer.getNextToken()
    expect(tokenizer.getActiveToken().value[0]).toEqual('b')
    expect(tokenizer.getActiveToken().type).toEqual('WORD')
  })

  it('TC6 WordAndDotGrammar test string: aa.b, sequence: >><', () => {
    const string = 'a. b'
    const tokenizer = new Tokenizer(wordAndDotGrammar, string)
    tokenizer.setTokenizerRules()
    tokenizer.tokenizeTheString()
    tokenizer.getNextToken()
    tokenizer.getNextToken()
    tokenizer.getPreviousToken()
    expect(tokenizer.getActiveToken().value[0]).toEqual('.')
    expect(tokenizer.getActiveToken().type).toEqual('DOT')
  })

  it('TC7 WordAndDotGrammar test string: empty', () => {
    const string = ''
    const tokenizer = new Tokenizer(wordAndDotGrammar, string)
    tokenizer.setTokenizerRules()
    tokenizer.tokenizeTheString()
    expect(tokenizer.getActiveToken().value).toEqual('END')
    expect(tokenizer.getActiveToken().type).toEqual('END')
  })

  it('TC8 WordAndDotGrammar test string: whitespace', () => {
    const string = ' '
    const tokenizer = new Tokenizer(wordAndDotGrammar, string)
    tokenizer.setTokenizerRules()
    tokenizer.tokenizeTheString()
    expect(tokenizer.getActiveToken().value).toEqual('No lexical element matches:  ')
    expect(tokenizer.getActiveToken().type).toEqual('INVALID')
  })

  it('TC9 WordAndDotGrammar test string: a, sequence: >', () => {
    const string = 'a'
    const tokenizer = new Tokenizer(wordAndDotGrammar, string)
    tokenizer.setTokenizerRules()
    tokenizer.tokenizeTheString()
    tokenizer.getNextToken()
    expect(tokenizer.getActiveToken().value).toEqual('END')
    expect(tokenizer.getActiveToken().type).toEqual('END')
  })

  it('TC10 WordAndDotGrammar test string: a, sequence: <', () => {
    const string = 'a'
    const tokenizer = new Tokenizer(wordAndDotGrammar, string)
    tokenizer.setTokenizerRules()
    tokenizer.tokenizeTheString()
    tokenizer.getPreviousToken()
    expect(tokenizer.getActiveToken().value).toEqual('START')
    expect(tokenizer.getActiveToken().type).toEqual('START')
  })

  it('TC11 WordAndDotGrammar test string: #', () => {
    const string = '#'
    const tokenizer = new Tokenizer(wordAndDotGrammar, string)
    tokenizer.setTokenizerRules()
    tokenizer.tokenizeTheString()
    expect(tokenizer.getActiveToken().value).toEqual('No lexical element matches: #')
    expect(tokenizer.getActiveToken().type).toEqual('INVALID')
  })

  it('TC12 ArithmeticGrammar test string: 3', () => {
    const string = '3'
    const tokenizer = new Tokenizer(arithmeticRegex, string)
    tokenizer.setTokenizerRules()
    tokenizer.tokenizeTheString()
    expect(tokenizer.getActiveToken().value[0]).toEqual('3')
    expect(tokenizer.getActiveToken().type).toEqual('NUMBER')
  })

  it('TC13 ArithmeticGrammar test string: 3.14', () => {
    const string = '3.14'
    const tokenizer = new Tokenizer(arithmeticRegex, string)
    tokenizer.setTokenizerRules()
    tokenizer.tokenizeTheString()
    expect(tokenizer.getActiveToken().value[0]).toEqual('3.14')
    expect(tokenizer.getActiveToken().type).toEqual('NUMBER')
  })

  it('TC14 ArithmeticGrammar test string: 3 + 54 * 4, sequence: >>>', () => {
    const string = '3 + 54 * 4'
    const tokenizer = new Tokenizer(arithmeticRegex, string)
    tokenizer.setTokenizerRules()
    tokenizer.tokenizeTheString()
    tokenizer.getNextToken()
    tokenizer.getNextToken()
    tokenizer.getNextToken()
    expect(tokenizer.getActiveToken().value[0]).toEqual('*')
    expect(tokenizer.getActiveToken().type).toEqual('MULTIPLY')
  })

  it('TC15 ArithmeticGrammar test string: 3 + 54 # 4, sequence: >>>', () => {
    const string = '3 + 54 # 4'
    const tokenizer = new Tokenizer(arithmeticRegex, string)
    tokenizer.setTokenizerRules()
    tokenizer.tokenizeTheString()
    tokenizer.getNextToken()
    tokenizer.getNextToken()
    tokenizer.getNextToken()
    expect(tokenizer.getActiveToken().value).toEqual('No lexical element matches: # 4')
    expect(tokenizer.getActiveToken().type).toEqual('INVALID')
  })

  it('TC16 ArithmeticGrammar test string: 3.0+54.1 +  4.2, sequence: ><>>>', () => {
    const string = '3.0+54.1 +  4.2'
    const tokenizer = new Tokenizer(arithmeticRegex, string)
    tokenizer.setTokenizerRules()
    tokenizer.tokenizeTheString()
    tokenizer.getNextToken()
    tokenizer.getPreviousToken()
    tokenizer.getNextToken()
    tokenizer.getNextToken()
    tokenizer.getNextToken()
    expect(tokenizer.getActiveToken().value[0]).toEqual('+')
    expect(tokenizer.getActiveToken().type).toEqual('ADD')
  }) 
})
