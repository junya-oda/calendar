const button2 = () => {
    var confirm_00 = document.getElementById("confirm-0");
    confirm_01 = confirm_00.textContent
    confirm_02 = "社名：" + confirm_01
    var confirm_10 = document.getElementById("confirm-1");
    confirm_11 = confirm_10.textContent
    confirm_12 = "郵便番号：" + confirm_11
    var confirm_20 = document.getElementById("confirm-2");
    confirm_21 = confirm_20.textContent
    confirm_22 = confirm_21
    var confirm_30 = document.getElementById("confirm-3");
    confirm_31 = confirm_30.textContent
    confirm_32 = "住所：" + confirm_31
    var confirm_40 = document.getElementById("confirm-4");
    confirm_41 = confirm_40.textContent
    confirm_42 = "電話番号：" + confirm_41
    var confirm_50 = document.getElementById("confirm-5");
    confirm_51 = confirm_50.textContent
    confirm_52 = "FAX番号：" + confirm_51
    var confirm_60 = document.getElementById("confirm-6");
    confirm_61 = confirm_60.textContent
    confirm_62 = "メールアドレス：" + confirm_61
    var confirm_70 = document.getElementById("confirm-7");
    confirm_71 = confirm_70.textContent
    confirm_72 = "URL：" + confirm_71
    var confirm_80 = document.getElementById("confirm-8");
    confirm_81 = confirm_80.textContent
    confirm_82 = "キャッチコピー：" + confirm_81
    var confirm_90 = document.getElementById("confirm-9");
    confirm_91 = confirm_90.textContent
    confirm_92 = "その他：" + confirm_91
    var confirm_100 = document.getElementById("confirm-10");
    confirm_101 = confirm_100.textContent
    confirm_102 = "位置：" + confirm_101
    var confirm_110 = document.getElementById("confirm-11");
    confirm_111 = confirm_110.textContent
    confirm_112 = "書体：" + confirm_111

    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "bc55e62fca6feb",
        Password: "39ef2ff45c0e1c",
        To: "d3a2a0e7cd-bcde94@inbox.mailtrap.io",
        From: "calender@info.jp",
        Subject: "名入れカレンダー注文",
        Body: confirm_02 + " , " 
            + confirm_12 + " - " 
            + confirm_22 + " , " 
            + confirm_32 + " , " 
            + confirm_42 + " , " 
            + confirm_52 + " , " 
            + confirm_62 + " , " 
            + confirm_72 + " , " 
            + confirm_82 + " , " 
            + confirm_92 + " , " 
            + confirm_102 + " , " 
            + confirm_112 + " , " 
            ,
    }).then((message) => alert(message));
};