// script.js: 前端交互逻辑
function applyCoupon() {
  document.getElementById('final-price').textContent = '￥0.000';
  alert('优惠码已使用，价格已减至￥0.000！');
}

function placeOrder() {
  window.location.href = 'success.html';
}
// 点击头像展开详细信息
function toggleAccountInfo() {
  const popup = document.getElementById("accountPopup");
  popup.style.display = popup.style.display === "block" ? "none" : "block";
}
