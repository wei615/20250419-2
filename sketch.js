function setup() { //設定函數，初始值的地方
  // 建立依照視窗的高與寬當作畫布的寬高
  createCanvas(windowWidth, windowHeight); 
  //畫布背景顏色為ffd670
  background(255, 214, 112);
}

function draw() { //畫圖函數，畫圖的地方
  // 清除畫布
  background(255, 214, 112);

  // 根據滑鼠的X位置計算圖形的大小
  let size = map(mouseX, 0, width, 100, 500);

  // 設定每個圖形之間的間距，確保圖形不重疊
  let spacing = size + 20; // 增加20像素的間距

  // 計算可以放多少個圖形
  let cols = Math.floor(width / spacing) + 1;
  let rows = Math.floor(height / spacing) + 1;

  // 計算圖形的起始位置，確保圖形在畫布中間
  let startX = spacing / 2;
  let startY = spacing / 2;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = startX + spacing * i;
      let y = startY + spacing * j;

      // 畫一個顏色為ff70a6的方框
      rectMode(CENTER);
      fill(199, 125, 255);
      stroke('#4361ee'); // 修改方框的框線顏色
      strokeWeight(10);
      rect(x, y, size, size);

      // 畫一個顏色為c77dff的圓
      fill(255, 112, 166);
      stroke('#48bfe3'); // 修改圓形的框線顏色
      strokeWeight(10);
      ellipse(x, y, size, size);
    }
  }
}

//當視窗的大小改變時，重新設定畫布的寬高
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
