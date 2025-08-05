     function backToTop() {
       window.scrollTo({
         top: 0,
         behavior: 'smooth'
       });
     }

     window.onscroll = function() {
       const backToTopButton = document.getElementById("voltar_ao_topo");
       if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         backToTopButton.classList.add("show");
       } else {
         backToTopButton.classList.remove("show");
       }
     };
