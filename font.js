$(function(){
    $('input:radio[name="font-type"]').change(function(){
        var show_font = $('input:radio[name="font-type"]:checked').val();
        if(show_font == "丸字ゴシック"){
            $("#test-preview-body-sentence").css({'font-family' : "'M PLUS Rounded 1c', sans-serif"});
        }else if(show_font == "明朝"){
            $("#test-preview-body-sentence").css({'font-family' : 'serif'});
        }else{
            $("#test-preview-body-sentence").css({'font-family' : 'sans-serif'});
        }
    });    
});