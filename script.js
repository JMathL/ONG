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

    
    const botaoOn = document.getElementById("botao_enviar")
    
     botaoOn.addEventListener("click",  function() {
      alert("Botão clicado!")
    })
     
    document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq_pergunta');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            
            answer.classList.toggle('show');

            faqQuestions.forEach(q => {
                if (q !== this) {
                    q.nextElementSibling.classList.remove('show');
                }
            });
        });
    });
});