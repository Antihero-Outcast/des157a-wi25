(function()
{
   const openPod1Btn = document.querySelector("#op1");
   const openPod2Btn = document.querySelector("#op2");
   const openPod3Btn = document.querySelector("#op3");
   const openPod4Btn = document.querySelector("#op4");   
   const openPod5Btn = document.querySelector("#op5");
   const closeBtn = document.querySelector(".close");
   const pod1 = document.querySelector(".pod1");
   const pod2 = document.querySelector(".pod2");
   const pod3 = document.querySelector(".pod3");
   const pod4 = document.querySelector(".pod4");
   const pod5 = document.querySelector(".pod5");
   
   pod1.addEventListener('click', function()
   {
      openPod1Btn.style.display = 'block'
      openPod2Btn.style.display = 'none'
      openPod3Btn.style.display = 'none'
      openPod4Btn.style.display = 'none'
      openPod5Btn.style.display = 'none'
   });
   
   pod2.addEventListener('click', function()
   {
      openPod1Btn.style.display = 'none'
      openPod2Btn.style.display = 'block'
      openPod3Btn.style.display = 'none'
      openPod4Btn.style.display = 'none'
      openPod5Btn.style.display = 'none'
   });

   pod3.addEventListener('click', function()
   {
      openPod1Btn.style.display = 'none'
      openPod2Btn.style.display = 'none'
      openPod3Btn.style.display = 'block'
      openPod4Btn.style.display = 'none'
      openPod5Btn.style.display = 'none'
   });

   pod4.addEventListener('click', function()
   {
      openPod1Btn.style.display = 'none'
      openPod2Btn.style.display = 'none'
      openPod3Btn.style.display = 'none'
      openPod4Btn.style.display = 'block'
      openPod5Btn.style.display = 'none'
   });

   pod5.addEventListener('click', function()
   {
      openPod1Btn.style.display = 'none'
      openPod2Btn.style.display = 'none'
      openPod3Btn.style.display = 'none'
      openPod4Btn.style.display = 'none'
      openPod5Btn.style.display = 'block'
   });

})();