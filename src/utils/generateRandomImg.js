export const randomAvatar = () => {
    const avatars = [
        "https://www.bigstockphoto.com/images/homepage/module-4.jpg",
        "http://static.diary.ru/userdir/3/2/8/6/3286675/82066545.jpg",
        "http://russian7.ru/wp-content/uploads/2017/06/dva-krolika-celuyutsya1-320x237.jpg",
        "http://inetklub.ru/avatarki/Kot_v_kruglyh_ochkah.jpg",
        "http://oboibox.ru/avatar/Kot-pokazyvaet-yazyk(oboibox.ru).jpg",
        "https://pp.userapi.com/c637319/v637319963/202a8/C5cUlHp057g.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRklmlo21BK5uqvEmrmv0tl7t1zIHumagfok-Ocl8T9xc4BOZznZA",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqi97pKxo0t9bdTI7vwm5AuPbql6FBtY-d7ZFGaaqrXlPFo2uz",
        "https://vk.vkfaces.com/836124/v836124610/4bf78/aR3zfc_PFug.jpg",
        "http://findbetter.ru/tmp/smarty_img/1514754000/c200x200_6441.jpg",
        "http://www.nexplorer.ru/pics_news/12327.jpg",
        "https://avatars.mds.yandex.net/get-yapic/36689/439257091-1544765126/islands-200",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrFVtSCpArDK5mCVko9FhQuOhSUWTFN5uQVOw0ihpQZ5V4_-jK",
        "https://avavatar.ru/images/avatars/21/avatar_aWFNRyUawLBgecDD.jpg",
        "https://avavatar.ru/images/avatars/3/avatar_OsgiPquqCpLnWRUr.jpg",
        "http://inetklub.ru/avatarki/Kot_ded_Moroz.jpg",
        "http://1avatars.ru/_ph/11/2/549133860.jpg",
        "http://inetklub.ru/avatarki/Shotlandskaya_vislouhaya.jpg"
    ]
    let selected = 0 - 0.5 + Math.random() * ((avatars.length - 1) - 0 + 1);
    selected = Math.round(selected);
    return avatars[selected];
}

export const randomBg = () => {
    const bg = [
        "https://www.motherjones.com/wp-content/uploads/2017/08/blog_lunchtime_santa_monica_pier_ferris_wheel_sunset.jpg",
        "http://www.esa.int/images/heic0911c_L.jpg",
        "https://i.pinimg.com/736x/35/e5/87/35e587518f548d467baad3107d9d37da--photo-pic-graphic-art.jpg",
        "https://img.joomcdn.net/33ac7eb5b18e56e8b4c0757faef0a351adc47540_400_400.jpeg",
        "https://ae01.alicdn.com/kf/HTB13vSBQFXXXXcjXpXXq6xXFXXXJ/HUAYI-8x8ft-Art-fabric-Beautiful-Night-font-b-Sky-b-font-Backdrop-font-b-Photography-b.jpg",
        "https://pp.userapi.com/c618722/v618722638/15f05/HJdJ6V1DvYQ.jpg",
        "http://s2.fotokto.ru/topics/announce/1/12579.jpg",
        "https://filed16-17.my.mail.ru/pic?url=https%3A%2F%2Fsites.google.com%2Fsite%2Fgimpomaniya%2F_%2Frsrc%2F1330665685133%2Fgimp-obzor-skriptov%2Fsozdanie-zvezdnogo-neba-pri-pomosi-skripta%2F2.JPG&mw=&mh=&sig=dcc19141942f1eb6d2eb02e9bf558cb2",
        "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/08/17/goods-img/1502943289758669207.jpg",
        "https://redir-img01.allegroimg.com/photos/400x300/68/72/12/84/6872128460",
        "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/12/05/goods-img/1512449825018555200.jpg",
        "https://ae01.alicdn.com/kf/HTB1A6e6OVXXXXcIXFXXq6xXFXXXp/4x6ft-125-200cm-font-b-Christmas-b-font-backdrop-wood-font-b-floor-b-font-background.jpg",
        "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/09/05/goods-img/1504573789354612564.jpg",
        "http://krasulina.ru/wp-content/uploads/2016/02/IMG_2624-e1458152461734-400x400.jpg"            
    ]
    let selected = 0 - 0.5 + Math.random() * ((bg.length - 1) - 0 + 1);
    selected = Math.round(selected);
    return bg[selected];
}