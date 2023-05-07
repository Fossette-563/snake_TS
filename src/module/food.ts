// 食物类
class Food {
  // 食物所对应的元素
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById('food')!;
  }
  // 获取食物X轴坐标
  get X() {
    return this.element.offsetLeft
  }

  // 获取食物Y轴坐标
  get Y() {
    return this.element.offsetTop
  }

  // 随机修改食物位置
  change() {
    let random = Math.floor(Math.random() * 29) * 10//随机数
    this.element.style.left = random + 'px' //x轴距离
    this.element.style.top = random + 'px' //y轴距离
    this.element.style.zIndex = random + 10000 + ''//z轴距离
    this.element.style.transition = 'all 0.3s ease-in-out' //修动画
  }
}
export default Food