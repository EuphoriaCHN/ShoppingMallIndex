((window, undefined) => {
    $(function () {
        $('#fullpage').fullpage({
            navigation: true,
            loopBottom: true,
            scrollingSpeed: 1200,

            // 回调函数
            afterLoad: function (anchorLink, index) {
                switch (index) {
                    case 2:
                        new Promise(resolve => {
                            // 将搜索框展示出来
                            $('.search').fadeIn(700, function () {
                                resolve($(this));
                            })
                        }).then(value => {
                            // 将展示出来的搜索框移动到 right = 370 的位置
                            return new Promise(resolve => {
                                value.animate({
                                    'right': 370
                                }, 1200, () => resolve());
                            });
                        }).then(() => {
                            // 然后让“沙发”显示出来
                            return new Promise(resolve => {
                                $('.search-words').fadeIn(500, () => resolve());
                            });
                        }).then(() => {
                            // 等“沙发”显示出来后，替换图片
                            $('.search').hide();
                            return $('.search-02-1').show();
                        }).then(value => {
                            // 同时再将替换过的图片移动到右上角
                            value.animate({
                                'height': 30,
                                'right': 250,
                                'bottom': 449
                            }, 1000);
                        }).then(() => {
                            // 同时利用 400ms 淡入“沙发”的搜索结果
                            return new Promise(resolve => {
                                $('.goods-02').fadeIn(400);
                                setTimeout(() => {
                                    // 在 200ms 时，让“沙发”的搜索结果变大
                                    resolve($('.goods-02'));
                                }, 200);
                            });
                        }).then(value => {
                            // 然后再让“沙发”的搜索结果变大
                            value.animate({
                                'height': 218
                            }, 600);
                        }).then(() => {
                            // 让“沙发”变大的同时，替换掉 words-01 的 description
                            $('.words-01').slideUp(500);
                            // 同时让 words-02 出现
                            $('.words-02').slideDown(500);
                        });
                        break;
                }
            },
        });
    });
})(window, undefined);
