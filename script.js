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
// 语言切换
function switchLanguage(lang) {
  const zhTexts = {
    title: "红帽黑客自学箱子",
    original: "原价：¥78.978",
    discount: "优惠价：¥78.978",
    couponPlaceholder: "输入优惠码",
    apply: "使用优惠券",
    order: "立即下单"
  };

  const enTexts = {
    title: "Red Hat Hacker DIY Box",
    original: "Original: $78.97",
    discount: "Now: $78.97",
    couponPlaceholder: "Enter coupon",
    apply: "Apply",
    order: "Order Now"
  };

  const t = lang === "en" ? enTexts : zhTexts;

  document.querySelector("h1").textContent = t.title;
  document.querySelector(".price").innerHTML = t.original;
  document.querySelector(".discounted-price span").textContent = t.discount;
  document.getElementById("coupon").placeholder = t.couponPlaceholder;
  document.querySelector("button[onclick='applyCoupon()']").textContent = t.apply;
  document.getElementById("order-button").textContent = t.order;
}
