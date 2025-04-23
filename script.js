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
// 汇率：1 USD = 7.8 CNY（可按需调整）
const EXCHANGE_RATE = 7.8;

// 渲染价格
function renderPrices(lang) {
  const origEl = document.getElementById('orig-price');
  const discEl = document.getElementById('disc-price');
  const cnyOrig = parseFloat(origEl.dataset.cny);
  const cnyDisc = parseFloat(discEl.dataset.cny);

  if (lang === 'en') {
    // 英文：根据汇率换算美元，两位小数
    const usdOrig = (cnyOrig / EXCHANGE_RATE).toFixed(2);
    const usdDisc = (cnyDisc / EXCHANGE_RATE).toFixed(2);
    origEl.textContent = `Original: $${usdOrig}`;
    discEl.textContent = `Now: $${usdDisc}`;
    document.getElementById('disc-label').textContent = '';
  } else {
    // 中文：直接显示人民币，三位小数
    origEl.textContent = `原价：￥${cnyOrig.toFixed(3)}`;
    discEl.textContent = `优惠价：￥${cnyDisc.toFixed(3)}`;
    document.getElementById('disc-label').textContent = '';
  }
}

// 语言切换
function switchLanguage(lang) {
  // 切换标题和按钮
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
  // 最后更新价格
  renderPrices(lang);
}

// 绑定下拉 & 初始化
const langDropdown = document.getElementById('languageDropdown');
langDropdown.addEventListener('change', () => switchLanguage(langDropdown.value));
switchLanguage(langDropdown.value);

// 使用优惠券时也要重新渲染
function applyCoupon() {
  const discEl = document.getElementById('disc-price');
  // 这里将优惠价直接清零
  discEl.dataset.cny = '0.000';
  alert('✅ 优惠码已使用，价格已减至￥0.000！');
  switchLanguage(langDropdown.value);
}
