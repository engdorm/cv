var initDot = document.getElementById("loading");
   var loading = setInterval(function() {
       if(initDot.innerHTML.length == 5) {
           initDot.innerHTML = "";
       } else {
           initDot.innerHTML += ".";
       }
   }, 350); // Dot Speed

   var $loadingMessage = $('#loadingH1');
    
   setTimeout(function() {
         clearInterval(loading);
         $loadingMessage.hide();
      }, 1500);
   
   var initProgram = setTimeout(function(){
       var greeting = "UNIDENTIFIED ORGANIC LIFEFORM DETECTED";
       var message = "RUNNING  GEEK RESUME PROTOCAL (GRP) FOR Dor";
       var $identityDiv = $("#identity-results");
       var $name = "NAME: Dor Marcus";
       var $alias = "KNOWN ALIAS: PETRUSR3X"
       var $occupation  = "OCCUPATION: Devehoper, Engineer, Code artist";
       var $frontEnd  = "Main tech:";
         var $JSFrameworks = "Languages: C, C++, Python, C#, Java";
         var $JSLibs = "Infrastructure: Linux,  Android, webserverse";
         var $CSSFrameworks = "Tools: Redis, Docker, SQL, InfulxDB, Ros";
         var $CSSPre = "Specific experiance: Networking, Compiler, simulation, drivers, FW";
         var $frontEndAnimation = "General experiance: Optimization, memory management, architecture design, security";
       var $cmsDevelopment = "Algorithms:";
         var $wordpress = "Vision, Robot navigations, Artificial intelligence, quantum computing";
       var $design = "Personal skills:";
         var $webDesign = "Tech leader, team player, communication, multitasking";
         var $branding = "Team leader, project managment, planning, good vibes generator :)";
         var $designAnimation = "Tech enthusist, terminal lover, vim wizard, keyboard groopy";
         
      function initIdentityResults(i){
          $("#message").addClass("sign cursor").text(message.substring(0, i));
            if(i < message.length){
                setTimeout(function(){
                    initIdentityResults(i + 1);
                }, 35);   
            }else{
               $('#message').removeClass("cursor");
               var loadingResume = function(){
                     $("#loadingMessage2").show()
                     var dotAlpha = document.getElementById("alpha-loading");
                     var loadingAlpha = setInterval(function() {
                      if(dotAlpha.innerHTML.length == 6) {
                          dotAlpha.innerHTML = "";
                      } else {
                          dotAlpha.innerHTML += ".";
                          setTimeout(function() {
                              clearInterval(loadingAlpha);
                              $("#loadingMessage2").hide();
                           }, 2000);
                      }
                  }, 350);  // Dot Speed
               }
               loadingResume();
               function initName(i){
                  $("#name").addClass("sign cursor").text($name.substring(0, i));
                     if(i < $name.length){
                        setTimeout(function(){
                           initName(i + 1);   
                        }, 35);
                     }else{
                        $("#name").removeClass("cursor");
                        setTimeout(function() {
                           initOccupation(0);
                        }, 1500);      
                     }
               }
               setTimeout(function() {
                  initName(0);
               }, 2500);
            }
            function initOccupation(i){
               $("#occupation").addClass("sign cursor").text($occupation.substring(0, i));
                     if(i < $occupation.length){
                        setTimeout(function(){
                           initOccupation(i + 1);   
                        }, 35);
                     }else{
                        $("#occupation").removeClass("cursor");
                        setTimeout(function() {
                           initFrontEnd(0);
                        }, 1500);
                     }
            }
            function initFrontEnd(i){
               $('#front-end-span').addClass('fa fa-wrench');
               $('#front-end').addClass("cursor").text($frontEnd.substring(0, i));
                  if(i < $frontEnd.length){
                     setTimeout(function(){
                        initFrontEnd(i + 1);  
                     }, 35);
                  }else{
                     $('#front-end').removeClass("cursor");
                        setTimeout(function() {
                           initJSFrameworks(0);
                        }, 1500);
                  }
            }
            function initJSFrameworks(i){
               $('#js-frameworks').addClass("sign cursor").text($JSFrameworks.substring(0, i));
                  if(i < $JSFrameworks.length){
                     setTimeout(function(){
                         initJSFrameworks(i + 1);  
                     }, 35);
                  }else{
                     $('#js-frameworks').removeClass("cursor");
                        setTimeout(function() {
                           initJSLibs(0);
                        }, 1500);
                  }
            }
            function initJSLibs(i){
               $('#js-libs').addClass("sign cursor").text($JSLibs.substring(0, i));
                  if(i < $JSLibs.length){
                     setTimeout(function(){
                         initJSLibs(i + 1);  
                     }, 35);
                  }else{
                     $('#js-libs').removeClass("cursor");
                        setTimeout(function() {
                           initCSSFrameworks(0);
                        }, 1500);
                  }
            }
            function initCSSFrameworks(i){
               $('#css-frameworks').addClass("sign cursor").text($CSSFrameworks.substring(0, i));
                  if(i < $CSSFrameworks.length){
                     setTimeout(function(){
                         initCSSFrameworks(i + 1);  
                     }, 35);
                  }else{
                     $('#css-frameworks').removeClass("cursor");
                     setTimeout(function() {
                           initCSSPre(0);
                        }, 1500);
                  }
            }
             function initCSSPre(i){
               $('#css-pre').addClass("sign cursor").text($CSSPre.substring(0, i));
                  if(i < $CSSPre.length){
                     setTimeout(function(){
                         initCSSPre(i + 1);  
                     }, 35);
                  }else{
                     $('#css-pre').removeClass("cursor");
                     setTimeout(function() {
                           initFrontEndAnimation(0);
                        }, 1500);
                  }
            }
            function initFrontEndAnimation(i){
               $('#front-end-animation').addClass("sign cursor").text($frontEndAnimation.substring(0, i));
                  if(i < $frontEndAnimation.length){
                     setTimeout(function(){
                         initFrontEndAnimation(i + 1);  
                     }, 35);
                  }else{
                     $('#front-end-animation').removeClass("cursor");
                     setTimeout(function() {
                           initCMSDevelopment(0);
                        }, 1500);
                  }
            }
            function initCMSDevelopment(i){
               $('#cms-span').addClass("fa fa-laptop")
               $('#CMS-development').addClass("cursor").text($cmsDevelopment.substring(0, i));
                  if(i < $cmsDevelopment.length){
                     setTimeout(function(){
                         initCMSDevelopment(i + 1);  
                     }, 35);
                  }else{
                     $('#CMS-development').removeClass("cursor");
                     setTimeout(function() {
                           initWordpress(0);
                        }, 1500);
                  }
            }
            function initWordpress(i){
               $('#wordpress').addClass("sign cursor").text($wordpress.substring(0, i));
                  if(i < $wordpress.length){
                     setTimeout(function(){
                         initWordpress(i + 1);  
                     }, 35);
                  }else{
                     $('#wordpress').removeClass("cursor");
                     setTimeout(function() {
                           initDesign(0);
                        }, 1500);
                  }
            }
             function initDesign(i){
               $('#design-span').addClass('fa fa-paint-brush');
               $('#design').addClass("cursor").text($design.substring(0, i));
                  if(i < $design.length){
                     setTimeout(function(){
                         initDesign(i + 1);  
                     }, 35);
                  }else{
                     $('#design').removeClass("cursor");
                     setTimeout(function() {
                           initWebDesign(0);
                        }, 1500);
                  }
            }
            function initWebDesign(i){
               $('#web-design').addClass("sign cursor").text($webDesign.substring(0, i));
                  if(i < $webDesign.length){
                     setTimeout(function(){
                         initWebDesign(i + 1);  
                     }, 35);
                  }else{
                     $('#web-design').removeClass("cursor");
                     setTimeout(function() {
                           initBranding(0);
                        }, 1500);
                  }
            }
            function initBranding(i){
               $('#branding').addClass("sign cursor").text($branding.substring(0, i));
                  if(i < $branding.length){
                     setTimeout(function(){
                         initBranding(i + 1);  
                     }, 35);
                  }else{
                     $('#branding').removeClass("cursor");
                     setTimeout(function() {
                           initDesignAnimation(0);
                        }, 1500);
                  }
            }
            function initDesignAnimation(i){
               $('#design-animation').addClass("sign cursor").text($designAnimation.substring(0, i));
                  if(i < $designAnimation.length){
                     setTimeout(function(){
                         initDesignAnimation(i + 1);  
                     }, 35);
                  }else{
                     //$('#design-animation').removeClass("cursor");
                  }
            }
         }
         
      function initProgramAlpha(i){
          $("#greeting").addClass("cursor").text(greeting.substring(0, i));
            if(i < greeting.length){
                setTimeout(function(){
                    initProgramAlpha(i + 1);
                }, 35);   
            }else{
               $("#greeting").removeClass("cursor");
               initIdentityResults(0);
            }
         }
         initProgramAlpha(0)
   
   }, 1500);

initProgram()
