class Task {
  constructor(subject, body, date) {
    this.id = `${subject[0].toUpperCase()}-${this._getRandNum(1, 10000)}`
    this.subject = subject
    this.body = body
    this.deadline = date
    this.timestamp = new Date()
    console.log(this)
  }
  // setting ID with random
  _getRandNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  // setting ID with new Date
  _setID() {
    ;(Number(new Date()) + '').slice(-10)
  }
}
