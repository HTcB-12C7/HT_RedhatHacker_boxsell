// script.js: 前端交互逻辑
function applyCoupon() {
  document.getElementById('final-price').textContent = '￥78.978';
  alert('优惠码已使用，价格已减至￥0.000！');
}

function placeOrder() {
  window.location.href = 'success.html';
}
