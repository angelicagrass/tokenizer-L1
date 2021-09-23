export class Grammar {
  constructor(type, regex) {
    this.type = type
    this.regex = regex
  }

  createNewGrammar() {
    let regex = [
      {
        TYPE: this.type,
        REGEX: this.regex
      }
    ]
    return regex
  }
}