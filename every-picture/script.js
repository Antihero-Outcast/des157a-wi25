(function()
{
   const openPod1Btn = document.querySelector("#op-one");
   const openPod2Btn = document.querySelector("#op-two");
   const openPod3Btn = document.querySelector("#op-three");
   const openPod4Btn = document.querySelector("#op-four");   
   const openPod5Btn = document.querySelector("#op-five");
   const closeBtn1 = document.querySelector("#close-one");
   const closeBtn2 = document.querySelector("#close-two");
   const closeBtn3 = document.querySelector("#close-three");
   const closeBtn4 = document.querySelector("#close-four");
   const closeBtn5 = document.querySelector("#close-five");
   
   const ldrOverlay = document.querySelector("#ldr-overlay");
   const ucOverlay = document.querySelector("#uc-overlay");
   const dwOverlay = document.querySelector("#dw-overlay");
   const tOverlay = document.querySelector("#t-overlay");
   const tImg = document.querySelector("#t-overlay img")
   const lOverlay = document.querySelector("#l-overlay");
   const lImg = document.querySelector("#l-overlay img");

   openPod1Btn.addEventListener('click', function()
   {
      ucOverlay.className = 'visible';
   });

   openPod2Btn.addEventListener('click', function()
   {
      dwOverlay.className = 'visible';
   });

   openPod3Btn.addEventListener('click', function()
   {
      lOverlay.className = 'visible';
   });

   openPod4Btn.addEventListener('click', function()
   {
      tOverlay.className = 'visible';
   });

   openPod5Btn.addEventListener('click', function()
   {
      ldrOverlay.className = 'visible';
   });

   closeBtn1.addEventListener('click', function()
   {
      ucOverlay.className = 'hidden';
   });

   closeBtn2.addEventListener('click', function()
   {
      dwOverlay.className = 'hidden';
   });

   closeBtn3.addEventListener('click', function()
   {
      lOverlay.className = 'hidden';
   });

   closeBtn4.addEventListener('click', function()
   {
      tOverlay.className = 'hidden';
   });

   closeBtn5.addEventListener('click', function()
   {
      ldrOverlay.className = 'hidden';
   });

   tImg.addEventListener('click', function()
   {
      tImg.setAttribute('src','images/taco-click.jpg');
   });

   lImg.addEventListener('mouseover', function()
   {
      lImg.style.opacity = '1';
   });
})();