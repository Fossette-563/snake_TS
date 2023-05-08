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
    // console.log(this.X, value - 20);
    // 至于为什么减20……也许是因为这个蛇头宽高为20导致输出value总比this.X多20，永远都不想等，无法执行下面的逻辑
    this.head.style.left = value + 'px';
    if (this.X === value - 20) return;
    if (value < 0 || value > 750) {
      throw new Error('蛇撞墙啦！')
    }
  }
  set Y(value: number) {
    this.head.style.top = value + 'px';
    if (this.Y === value - 20) return;
    if (value < 0 || value > 360) {
      throw new Error('蛇撞墙啦！')
    }
  }
  // 蛇增加身体的方法
  addBody() {
    this.snakeEl.insertAdjacentHTML('beforeend', '<div></div>')
  }
}

export default Snake