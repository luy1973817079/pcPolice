$(function(){

    var arr=['安徽','安徽','安徽','安徽','安徽','安徽','安徽','安徽','安徽','安徽','安徽','安徽','安徽','安徽','安徽',
        '安徽','安徽','安徽'];
    var city = document.getElementsByClassName('city')[0];
    for(var i=0;i<arr.length;i++){
        city.innerHTML += "<a>"+arr[i]+"</a>";
    }
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
    $tr = $("<tr></tr>");
    $('table').append($tr).html('<td>成警实战冲刺班</td>'+'<td> 系统精讲<br>专项提升<br>讲练结合<br>封闭预测<br>网校+面试</td>'
    +'<td><p>笔试：39天21晚（19天+11天11晚<br>+9天10晚）</p><p>面试：一般为7天7晚或6天6晚</p></td>'
    +'<td><p>1、战线较长，适合备考时间比较<br>充裕的学员；</p><p>2、对理论知识熟练运用程度比较弱,<br>想要通过大量的题目训练来进行复习；</p><p>3、重视题海训练，善于总结。</p></td>'
    +'<td><img src="images/zfgj___18.png" alt=""><img src="images/zfgj___21.png" alt=""></td>');
    $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $('.code').css('display','block');
        }else{
            $('.code').css('display','none');
        }
    })
    $('.top').click(function(){
        $('html,body').animate({'scrollTop':0},1000);
        return false;
    })

})

