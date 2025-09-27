 
     
    document.addEventListener("DOMContentLoaded", function () {
      const target = document.getElementById("targetBox");
      let hasShown = false;

      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasShown) {
            hasShown = true;
            setTimeout(() => {
              target.classList.add("visible");
            }, 500); 
          }
        });
      });

      observer.observe(target);
    });
  




     document.addEventListener("DOMContentLoaded", function () {
      const target = document.getElementById("targethome");
      let hasShown = false;

       
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasShown) {
            hasShown = true;
            setTimeout(() => {
              target.classList.add("visible");
            }, 500);  
          }
        });
      });

      observer.observe(target);
    });