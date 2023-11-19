let main_manu = document.querySelector('.main_manu');

window.addEventListener('scroll', ()=>{
       let scrolling = this.scrollY
       if( scrolling > 100 ){
          main_manu.classList.add('stiky_class');
       }
       else{
          main_manu.classList.remove('stiky_class');
       }



})