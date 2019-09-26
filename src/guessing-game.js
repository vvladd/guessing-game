class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
    this.answer = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    return (this.answer = Math.ceil(this.min + (this.max - this.min) / 2));
  }

  lower() {
    this.max = this.answer;
  }

  greater() {
    this.min = this.answer;
  }
}

module.exports = GuessingGame;
