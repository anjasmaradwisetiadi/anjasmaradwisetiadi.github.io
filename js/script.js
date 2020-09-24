 $(document).ready(function () {
     // Add smooth scrolling on all links inside the navbar
     $('a[href*="#"]')
         .not('[href="#"]')
         .not('[href="#0"]')
         .on('click', function (event) {
             // Make sure this.hash has a value before overriding default behavior
             if (this.hash !== "") {
                 // Prevent default anchor click behavior
                 event.preventDefault();

                 // Store hash
                 var hash = this.hash;

                 // Using jQuery's animate() method to add smooth page scroll
                 // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                 $('html, body').animate({
                     scrollTop: $(hash).offset().top
                 }, 800, function () {
                     // Add hash (#) to URL when done scrolling (default click behavior)
                     window.location.hash = hash;
                 });
             } // End if
         });
     //init sakurafall
     sf.initSakuraFall("sakurafall");
     $('#sakurafall').on('scrollSpy:enter', function () {
         sf.toggleSfPlay(true);
     });
     $('#sakurafall').on('scrollSpy:exit', function () {
         sf.toggleSfPlay(false);
     });
     $('#sakurafall').scrollSpy();
     //back to top
     $('#top').on('scrollSpy:enter', function () {
         $('#backtotop').animate({
             height: '0px'
         });
     });
     $('#top').on('scrollSpy:exit', function () {
         $('#backtotop').animate({
             height: '48px'
         });
     });
     $('#top').scrollSpy();

    //  video 
   var name = storageRef.child('Fix Anjas Portofolio_Video.m4v');
 });