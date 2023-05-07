class Score {
  scoreElement: HTMLElement;
  levelElement: HTMLElement;
  score = 0;
  level = 0;
  maxlevel: number;
  upScore: number;
  constructor(maxlevel: number = 10, upScore: number = 10) {
    this.scoreElement = document.getElementById('score')!;
    this.levelElement = document.getElementById('level')!;
    this.maxlevel = maxlevel
    this.upScore = upScore
  }
  // 加分方法
  addScore() {
    this.scoreElement.innerHTML = ++this.score + ''
    // 等级提升
    if (this.score % this.upScore === 0) {
      this.levelUp()
    }
  }
  // 提升等级限制
  levelUp() {
    if (this.level < this.maxlevel) {
      this.levelElement.innerHTML = ++this.level + ''
    }
  }
}
export default Score
