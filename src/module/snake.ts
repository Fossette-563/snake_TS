class Snake {
  snakeEl: HTMLElement
  head: HTMLElement
  body: HTMLCollection
  constructor() {
    this.snakeEl = document.getElementById("snake")!;
    this.head = document.querySelector('#snake>div')!;
    this.body = this.snakeEl.getElementsByTagName('div')!;
  }
  // 获取蛇头的位置
  get X() {
    return this.head.offsetLeft
  }
  get Y() {
    return this.head.offsetTop
  }
  // 设置蛇头的位置
  set X(value: number) {
    this.head.style.left = value + 'px';
    if (this.X === value) return
    if (value < 0 || value > 900) {
      throw new Error('蛇over啦！')
    }
  }
  set Y(value: number) {
    this.head.style.top = value + 'px';
    if (this.Y === value) return
    if (value < 0 || value > 900) {
      throw new Error('蛇over啦！')
    }
  }
  // 蛇增加身体的方法
  addBody() {
    this.snakeEl.insertAdjacentHTML('beforeend', '<div></div>')
  }
}

export default Snake