$(function(){
    $('input:radio[name="position"]').change(function(){
        var show_position = $('input:radio[name="position"]:checked').val();
        if(show_position == "左寄せ"){
            $("#test-preview-body-sentence").css({'text-align' : 'left'});
        }else if(show_position == "右寄せ"){
            $("#test-preview-body-sentence").css({'text-align' : 'right'});
        }else{
            $("#test-preview-body-sentence").css({'text-align' : 'center'});
        }
    });    
});