$(function(){
    $('input:radio[name="position"]').change(function(){
        var show_position = $('input:radio[name="position"]:checked').val();
        if(show_position == "左寄せ"){
            $("#test-preview-body-sentence").css({'text-align' : 'left'});
            $("#postalcode").css({'justify-content' : 'left'});
            $("#number").css({'justify-content' : 'left'});
            $("#mail-url").css({'justify-content' : 'left'});
        }else if(show_position == "右寄せ"){
            $("#test-preview-body-sentence").css({'text-align' : 'right'});
            $("#postalcode").css({'justify-content' : 'right'});
            $("#number").css({'justify-content' : 'right'});
            $("#mail-url").css({'justify-content' : 'right'});
        }else{
            $("#test-preview-body-sentence").css({'text-align' : 'center'});
            $("#postalcode").css({'justify-content' : 'center'});
            $("#number").css({'justify-content' : 'center'});
            $("#mail-url").css({'justify-content' : 'center'});
        }
    });    
});