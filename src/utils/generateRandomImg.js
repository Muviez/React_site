export const randomAvatar = () => {
    const avatars = [
        "https://cdn.pixabay.com/photo/2018/04/13/06/53/cat-3315710_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/04/09/08/37/cat-3303455_960_720.jpg",
        "https://cdn.pixabay.com/photo/2017/07/08/08/59/cat-2483826_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/04/19/20/45/cute-3334265_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/03/18/18/06/miniature-3237735_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/04/15/11/44/dog-3321456_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/04/15/07/25/animal-3321002_960_720.jpg",
        "https://cdn.pixabay.com/photo/2016/02/19/15/46/dog-1210559_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/02/15/16/51/cat-3155754_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/04/07/18/12/cat-3299150_960_720.jpg",
        "https://cdn.pixabay.com/photo/2014/05/23/12/06/cat-351926_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/04/09/08/36/cat-3303454_960_720.jpg",
        "https://cdn.pixabay.com/photo/2017/10/01/21/01/cat-2807043_960_720.jpg",
        "https://cdn.pixabay.com/photo/2017/10/01/17/27/cat-2806304_960_720.jpg" 
    ]
    let selected = 0 - 0.5 + Math.random() * ((avatars.length - 1) - 0 + 1);
    selected = Math.round(selected);
    return avatars[selected];
}

export const randomBg = () => {
    const bg = [
        "https://cdn.pixabay.com/photo/2018/02/02/22/28/nature-3126513_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/01/31/07/36/sunset-3120484_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/02/15/21/55/sunset-3156440_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/02/13/23/41/nature-3151869_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/01/21/19/57/tree-3097419_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/02/08/22/27/flower-3140492_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/04/10/11/24/waters-3307099_960_720.jpg",
        "https://cdn.pixabay.com/photo/2017/12/17/19/08/away-3024773_960_720.jpg",
        "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_960_720.jpg",
        "https://cdn.pixabay.com/photo/2017/12/22/11/09/schilthorn-3033448_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/02/26/21/01/cyprus-3184019_960_720.jpg",
        "https://cdn.pixabay.com/photo/2017/11/05/12/35/trees-2920264_960_720.jpg",
        "https://cdn.pixabay.com/photo/2017/01/18/21/34/cyprus-1990939_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/04/01/10/10/door-3280451_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/03/31/23/10/window-3279569_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/04/06/22/07/stones-3297163_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/03/31/22/53/nature-3279532_960_720.jpg"
    ]
    let selected = 0 - 0.5 + Math.random() * ((bg.length - 1) - 0 + 1);
    selected = Math.round(selected);
    return bg[selected];
}