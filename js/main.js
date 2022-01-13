let elMinusBtn = document.querySelector('.mac__count-minus');
let elMacImgs = document.querySelector('.mac__imgs');
let elNumberBtn = document.querySelector('.mac__count-number');
let elPlusBtn = document.querySelector('.mac__count-plus');
let elRamBtnOne = document.querySelector('.mac__ram-btn-one');
let elRamBtnTwo = document.querySelector('.mac__ram-btn-two');
let elHardBtnOne = document.querySelector('.mac__hard-btn-one');
let elHardBtnTwo = document.querySelector('.mac__hard-btn-two');
let elBtnTb = document.querySelector('.tb1');
let elSpanRam = document.querySelector('.ram-span');
let elHardSpan = document.querySelector('.hard-span');
let elCompColor = document.querySelector('.comp-color');
let elBtnColorOne = document.querySelector('.mac__color-btn-one');
let elBtnColorTwo = document.querySelector('.mac__color-btn-two');
let elMacPrice = document.querySelector('.mac__price-text');
let count = 1;
// console.log(elMacPrice.textContent * 3);
elRamBtnOne.addEventListener("click", (e) => {
  elRamBtnOne.classList.add("active-border");
  elRamBtnTwo.classList.remove("active-border");
  elBtnTb.classList.remove('block');
  elSpanRam.innerHTML = "8";
});

elRamBtnTwo.addEventListener("click", (e) => {
  elRamBtnTwo.classList.add("active-border");
  elRamBtnOne.classList.remove("active-border");
  elBtnTb.classList.add('block');
  elBtnTb.classList.remove('active-border');
  elSpanRam.textContent = "16";
});

elHardBtnOne.addEventListener("click", (e) => {
  elHardBtnOne.classList.add('active-border');
  elHardBtnTwo.classList.remove('active-border');
  elHardSpan.innerHTML = "256";
});

elHardBtnTwo.addEventListener("click", (e) => {
  elHardBtnTwo.classList.add('active-border');
  elHardBtnOne.classList.remove('active-border');
  elBtnTb.classList.add('block');
  elBtnTb.classList.remove('active-border');
  elHardSpan.innerHTML = "512";
});

elBtnTb.addEventListener("click", (e) => {
  elBtnTb.classList.add('active-border');
  elHardBtnOne.classList.remove('active-border');
  elHardBtnTwo.classList.remove('active-border');
  elHardSpan.innerHTML = "1tb";
});

elBtnColorOne.addEventListener("click", (e) => {
  elBtnColorOne.classList.add('active-border');
  elBtnColorTwo.classList.remove('active-border');
  elCompColor.innerHTML = "Gold";
  document.querySelector('.mac-gold').src = "img/mac-gold.webp";
  document.querySelector('.mac-top').src = "img/mac-gold-top.webp";
  document.querySelector('.mac-key').src = "img/mac-gold-key.webp";
  document.querySelector('.mac-right').src = "img/mac-gold-right.webp";
  document.querySelector('.mac-gold-left').src = "img/mac-gold-left.webp";
  // img mini
  document.querySelector('.mac-gold-mini').src = "img/mac-gold.webp";
  document.querySelector('.mac-top-mini').src = "img/mac-gold-top.webp";
  document.querySelector('.mac-key-mini').src = "img/mac-gold-key.webp";
  document.querySelector('.mac-right-mini').src = "img/mac-gold-right.webp";
  document.querySelector('.mac-gold-left-mini').src = "img/mac-gold-left.webp";
})

elBtnColorTwo.addEventListener("click", (e) => {
  elBtnColorTwo.classList.add('active-border');
  elBtnColorOne.classList.remove('active-border');
  elCompColor.innerHTML = "Silver";
  document.querySelector('.mac-gold').src = "img/mac-gray.webp";
  document.querySelector('.mac-top').src = "img/mac-gray-top.webp";
  document.querySelector('.mac-key').src = "img/mac-gray-key.webp";
  document.querySelector('.mac-right').src = "img/mac-gray-right.webp";
  document.querySelector('.mac-gold-left').src = "img/mac-gray-left.webp";
  // img mini
  document.querySelector('.mac-gold-mini').src = "img/mac-gray.webp";
  document.querySelector('.mac-top-mini').src = "img/mac-gray-top.webp";
  document.querySelector('.mac-key-mini').src = "img/mac-gray-key.webp";
  document.querySelector('.mac-right-mini').src = "img/mac-gray-right.webp";
  document.querySelector('.mac-gold-left-mini').src = "img/mac-gray-left.webp";
})

elPlusBtn.addEventListener("click", (e) => {
  count++;
  let price =  11550000
  let res =  price *= count;
  let n =  String(res);
  let arr = [...n];
  console.log(arr);
  let ikk = arr.slice(0,2);
  let uchbir = arr.slice(2,5);
  let uchikki = arr.slice(5,8);
  document.querySelector('.ikki').innerHTML = ikk.join("");
  document.querySelector('.uchbir').innerHTML = uchbir.join("");
  document.querySelector('.uchikki').innerHTML = uchikki.join("");
  elNumberBtn.innerHTML = count;
});

elMinusBtn.addEventListener("click", (e) => {
  count--;
  let num = 11550000;
  let res = num *= count
  let n =  String(res);
  let arr = [...n];
  console.log(arr);
  let ikki = arr.slice(0,2);
  let uchbiri = arr.slice(2,5);
  let uchikkii = arr.slice(5,8);
  document.querySelector('.ikki').innerHTML = ikki.join("");
  document.querySelector('.uchbir').innerHTML = uchbiri.join("");
  document.querySelector('.uchikki').innerHTML = uchikkii.join("");
  elNumberBtn.innerHTML = count;
  if(count <= 1) {
    count = 1;
    elNumberBtn.innerHTML = count;
    document.querySelector('.ikki').innerHTML = "11";
  document.querySelector('.uchbir').innerHTML = "550";
  document.querySelector('.uchikki').innerHTML = "000";
  }
});
document.querySelector('.mac-gold-mini').addEventListener("click", (e) => {
  document.querySelector('.mac-gold-mini').classList.add('active-border2');
  document.querySelector('.mac-top-mini').classList.remove('active-border2')
  document.querySelector('.mac-key-mini').classList.remove('active-border2')
  document.querySelector('.mac-right-mini').classList.remove('active-border2')
  document.querySelector('.mac-gold-left-mini').classList.remove('active-border2')
})
  document.querySelector('.mac-top-mini').addEventListener("click", (e) => {
    document.querySelector('.mac-top-mini').classList.add('active-border2')
    document.querySelector('.mac-gold-mini').classList.remove('active-border2')
    document.querySelector('.mac-key-mini').classList.remove('active-border2')
    document.querySelector('.mac-right-mini').classList.remove('active-border2')
    document.querySelector('.mac-gold-left-mini').classList.remove('active-border2')
  })
  document.querySelector('.mac-key-mini').addEventListener("click", (e) => {
    document.querySelector('.mac-top-mini').classList.remove('active-border2')
    document.querySelector('.mac-gold-mini').classList.remove('active-border2')
    document.querySelector('.mac-key-mini').classList.add('active-border2')
    document.querySelector('.mac-right-mini').classList.remove('active-border2')
    document.querySelector('.mac-gold-left-mini').classList.remove('active-border2')
  })
  document.querySelector('.mac-right-mini').addEventListener("click", (e) => {
    document.querySelector('.mac-top-mini').classList.remove('active-border2')
    document.querySelector('.mac-gold-mini').classList.remove('active-border2')
    document.querySelector('.mac-key-mini').classList.remove('active-border2')
    document.querySelector('.mac-right-mini').classList.add('active-border2')
    document.querySelector('.mac-gold-left-mini').classList.remove('active-border2')
  })
  document.querySelector('.mac-gold-left-mini').addEventListener("click", (e) => {
    document.querySelector('.mac-top-mini').classList.remove('active-border2')
    document.querySelector('.mac-gold-mini').classList.remove('active-border2')
    document.querySelector('.mac-key-mini').classList.remove('active-border2')
    document.querySelector('.mac-right-mini').classList.remove('active-border2')
    document.querySelector('.mac-gold-left-mini').classList.add('active-border2')
  })
