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
// 渲染价格的通用函数
function renderPrices(lang) {
  const origEl = document.getElementById('orig-price');
  const discEl = document.getElementById('disc-price');

  if (lang === 'en') {
    // 英文：两位小数美元
    const u1 = parseFloat(origEl.dataset.usd);
    const u2 = parseFloat(discEl.dataset.usd);
    origEl.textContent = `Original: $${u1.toFixed(2)}`;
    discEl.textContent = `Now: $${u2.toFixed(2)}`;
    document.getElementById('disc-label').textContent = '';
  } else {
    // 中文：直接用 data-cny
    origEl.textContent = `原价：￥${origEl.dataset.cny}`;
    discEl.textContent = `优惠价：￥${discEl.dataset.cny}`;
    document.getElementById('disc-label').textContent = '';
  }
}

// 语言切换逻辑
function switchLanguage(lang) {
  // 切换标题和按钮文案
  if (lang === 'en') {
    document.querySelector('h1').textContent = 'Red Hat Hacker DIY Box';
    document.getElementById('coupon').placeholder = 'Enter coupon';
    document.querySelector("button[onclick='applyCoupon()']").textContent = 'Apply';
    document.getElementById('order-button').textContent = 'Order Now';
  } else {
    document.querySelector('h1').textContent = '🔥 红帽黑客自学箱子 🔥';
    document.getElementById('coupon').placeholder = '输入优惠码';
    document.querySelector("button[onclick='applyCoupon()']").textContent = '使用优惠券';
    document.getElementById('order-button').textContent = '立即下单';
  }
  // 最后再更新价格
  renderPrices(lang);
}

// 绑定下拉框事件并首次渲染
const langDropdown = document.getElementById('languageDropdown');
langDropdown.addEventListener('change', () => switchLanguage(langDropdown.value));
switchLanguage(langDropdown.value);
}
