// 下单跳转
function placeOrder() {
  window.location.href = 'success.html';
}

// 头像弹窗
function toggleAccountInfo() {
  const popup = document.getElementById("accountPopup");
  popup.style.display = (popup.style.display === "block") ? "none" : "block";
}

// 汇率
const EXCHANGE_RATE = 7.8;

// 渲染价格
function renderPrices(lang) {
  const origEl = document.getElementById('orig-price');
  const discEl = document.getElementById('disc-price');
  const cnyOrig = parseFloat(origEl.dataset.cny);
  const cnyDisc = parseFloat(discEl.dataset.cny);

  if (lang === 'en') {
    const usdOrig = (cnyOrig / EXCHANGE_RATE).toFixed(2);
    const usdDisc = (cnyDisc / EXCHANGE_RATE).toFixed(2);
    origEl.textContent = `Original: $${usdOrig}`;
    discEl.textContent = `Now: $${usdDisc}`;
    document.getElementById('disc-label').textContent = '';
  } else {
    origEl.textContent = `原价：￥${cnyOrig.toFixed(3)}`;
    discEl.textContent = `优惠价：￥${cnyDisc.toFixed(3)}`;
    document.getElementById('disc-label').textContent = '';
  }
}

// 语言切换
function switchLanguage(lang) {
  // 保存到 localStorage 以便 success.html 读取
  localStorage.setItem('lang', lang);

  // 主标题 & 按钮文案
  if (lang === 'en') {
    document.getElementById('main-title').textContent = 'Red Hat Hacker DIY Box';
    document.getElementById('coupon').placeholder = 'Enter coupon';
    document.querySelector("button[onclick='applyCoupon()']").textContent = 'Apply';
    document.getElementById('order-button').textContent = 'Order Now';

    // 账户信息翻译
    document.getElementById('account-name').innerHTML = '<strong>Name:</strong> HTc';
    document.getElementById('account-id').innerHTML   = '<strong>ID Card:</strong> HT10001';
    document.getElementById('account-bank').innerHTML = '<strong>Bank Card:</strong> 1530 0089 8607 2871';
    document.getElementById('account-addr').innerHTML = '<strong>Address:</strong> No.728, Chuan Dong Rd, Xuhui District, Shanghai';
  } else {
    document.getElementById('main-title').textContent = '🔥 红帽黑客自学箱子 🔥';
    document.getElementById('coupon').placeholder = '输入优惠码';
    document.querySelector("button[onclick='applyCoupon()']").textContent = '使用优惠券';
    document.getElementById('order-button').textContent = '立即下单';

    document.getElementById('account-name').innerHTML = '<strong>姓名：</strong>HTc';
    document.getElementById('account-id').innerHTML   = '<strong>身份证：</strong>HT10001';
    document.getElementById('account-bank').innerHTML = '<strong>银行卡号：</strong>1530 0089 8607 2871';
    document.getElementById('account-addr').innerHTML = '<strong>地址：</strong>上海市 徐汇县 川东新区 728弄 黑铁快递柜';
  }

  renderPrices(lang);
}

// 使用优惠券
function applyCoupon() {
  const lang = localStorage.getItem('lang') || 'zh';
  const discEl = document.getElementById('disc-price');
  discEl.dataset.cny = '0.000';

  if (lang === 'en') {
    alert('✅ Coupon applied, price reduced to $0.00!');
  } else {
    alert('✅ 优惠码已使用，价格已减至￥0.000！');
  }

  switchLanguage(lang);
}

// 绑定 & 初始化
document.addEventListener('DOMContentLoaded', () => {
  const langDropdown = document.getElementById('languageDropdown');
  langDropdown.addEventListener('change', () => switchLanguage(langDropdown.value));
  switchLanguage(langDropdown.value);
});
