import Snake from "./snake";
import Food from "./food";
import Score from "./score";

// 游戏控制器，控制其他的所以类
class GameControl {
  // 蛇
  snake: Snake;
  // 食物
  food: Food;
  // 记分牌
  scorePanel: Score;
  // 案件按下存储值
  direction: string;
  // 判断蛇是否over
  isLive: boolean = true
  constructor(direction: string = 'ArrowRight') {
    this.snake = new Snake();
    this.food = new Food();
    this.food.change()
    this.scorePanel = new Score();
    this.direction = direction
  }
  // 游戏初始化，调用即游戏开始
  init() {
    // 键盘按下事件
    document.addEventListener('keydown', this.keydownHandler.bind(this))
    this.run();
  }
  // 键盘按下的响应函数
  keydownHandler(event: KeyboardEvent) {
    // console.log(event, 'event');
    //按键按下存储值
    this.direction = event.key
  }
  // 蛇移动的方法
  run() {
    let X = this.snake.X
    let Y = this.snake.Y
    // console.log(X, 'x');
    // console.log(this.direction, 'this.direction');
    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        Y -= 20
        break;
      case "ArrowDown":
      case "Down":
        Y += 20
        break;
      case "ArrowLeft":
      case "Left":
        X -= 20
        break;
      case "ArrowRight":
      case "Right":
        X += 20
        break;
      default:
        break;
    }
    try {
      // console.log(this.snake.X);
      this.snake.X = X
      this.snake.Y = Y
    } catch (e: any) {
      console.log(1);
      alert(e.message)
      this.isLive = false
    }
    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
  }
}
export default GameControl