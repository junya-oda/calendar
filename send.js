const button2 = () => {
    var conform_00 = document.getElementById("confirm-0");
    conform_01 = conform_00.textContent
    conform_02 = "社名：" + conform_01
    var conform_10 = document.getElementById("confirm-1");
    conform_11 = conform_10.textContent
    conform_12 = "郵便番号：" + conform_11
    var conform_20 = document.getElementById("confirm-2");
    conform_21 = conform_20.textContent
    conform_22 = conform_21
    var conform_30 = document.getElementById("confirm-3");
    conform_31 = conform_30.textContent
    conform_32 = "住所：" + conform_31
    var conform_40 = document.getElementById("confirm-4");
    conform_41 = conform_40.textContent
    conform_42 = "電話番号：" + conform_41
    var conform_50 = document.getElementById("confirm-5");
    conform_51 = conform_50.textContent
    conform_52 = "FAX番号：" + conform_51
    var conform_60 = document.getElementById("confirm-6");
    conform_61 = conform_60.textContent
    conform_62 = "メールアドレス：" + conform_61
    var conform_70 = document.getElementById("confirm-7");
    conform_71 = conform_70.textContent
    conform_72 = "URL：" + conform_71
    var conform_80 = document.getElementById("confirm-8");
    conform_81 = conform_80.textContent
    conform_82 = "キャッチコピー：" + conform_81
    var conform_90 = document.getElementById("confirm-9");
    conform_91 = conform_90.textContent
    conform_92 = "その他：" + conform_91
    var conform_100 = document.getElementById("confirm-10");
    conform_101 = conform_100.textContent
    conform_102 = "位置：" + conform_101
    var conform_110 = document.getElementById("confirm-11");
    conform_111 = conform_110.textContent
    conform_112 = "書体：" + conform_111

    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "bc55e62fca6feb",
        Password: "39ef2ff45c0e1c",
        To: "d3a2a0e7cd-bcde94@inbox.mailtrap.io",
        From: "ojoa.0405@gmail.com",
        Subject: "Test5",
        Body: conform_02 + " , " 
            + conform_12 + " - " 
            + conform_22 + " , " 
            + conform_32 + " , " 
            + conform_42 + " , " 
            + conform_52 + " , " 
            + conform_62 + " , " 
            + conform_72 + " , " 
            + conform_82 + " , " 
            + conform_92 + " , " 
            + conform_102 + " , " 
            + conform_112 + " , " 
            ,
    }).then((message) => alert(message));
};