$(document).ready(()=>{
    $('#icon').click(()=>{
        $("#iframeWrapper").toggleClass('iframeWrapper')
        $("#iframeWrapper").toggleClass('iframeWrapperActive')
        if($(window).height() < 460){
            $(".iframeWrapperActive iframe").animate({
                height: "350px"
            },500)
        }
       else if($(window).height() < 550){
            $(".iframeWrapperActive iframe").animate({
                height: "400px"
            },500)
        }
        else{
            $(".iframeWrapperActive iframe").animate({
                height: "500px"
            },500)
        }
        
        
    })
    $(".closeWrapper span").click(()=>{
        $(".iframeWrapperActive iframe").animate({
            height: "0px"
        },500)
        $("#iframeWrapper").toggleClass('iframeWrapper')
        $("#iframeWrapper").toggleClass('iframeWrapperActive')
    })
})