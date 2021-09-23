export const arithmeticRegex = [
  {
    TYPE: 'NUMBER',
    REGEX: /^[0-9]+(\.([0-9])+)?/g
  },
  {
    TYPE: 'ADD',
    REGEX: /^[\+]/g
  },
  {
    TYPE: 'MULTIPLY',
    REGEX: /^[\*]/g
  },
  {
    TYPE: 'SUBTRACT',
    REGEX: /^[\-]/g
  },
  {
    TYPE: 'DIVIDE',
    REGEX: /^[\/]/g
  },
  {
    TYPE: 'LEFT PARENTHESES',
    REGEX: /^[\(]/g
  },
  {
    TYPE: 'RIGHT PARENTHESES',
    REGEX: /^[\)]/g
  },
  {
    TYPE: 'EQUALS',
    REGEX: /^[\=]/g
  }
]