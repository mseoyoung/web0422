// 준비 이벤트
$(()=>{

    // 모달 팝업
    
    function(){
        let idx = 0;
       
        function autoSlide(){
            console.log("idx",idx);
      
            (idx === 2) ? idx = 0 : idx++;
         
           $(#slide li){
                if (idx === 0) idx = 3;
                $("#slide li").eq(idx-1).fadeOut(1000);
                if (idx === 3) idx = 0;
            });
        }
    
    
    
    
    
    
    //모달 팝업 끝

});