/* 모달 팝업창 만들기 */
        $(()=>{
            // 요소 찾기
            const firstList = $("#notice a").eq(0);
            const modal = $("#modal");
            const closeBtn = $("button");
            console.log(firstList);
    
            // 이벤트 처리
            //공지사항의 첫번째 li를 클릭하면
            $(".notice a").eq(0).click(()=>{
                event.preventDefault();
                $("#modal").css({display: "block"});
            });

            $("button").click(()=>{
                $("#modal").css({display: "none"});
            });
        });