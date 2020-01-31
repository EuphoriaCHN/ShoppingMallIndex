((window, undefined) => {
    $(function () {
        let windowHeight = $(window).height();

        $('#fullpage').fullpage({
            navigation: true,
            loopBottom: true,
            scrollingSpeed: 1200,

            // 回调函数

            // 在滚动到第 index 个页面时调用
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
                                }, 1200, 'easeOutBack', () => resolve());
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
                            return new Promise(resolve => {
                                // 然后再让“沙发”的搜索结果变大
                                value.animate({
                                    'height': 218
                                }, 600, () => resolve());

                                // 让“沙发”变大的同时，替换掉 words-01 的 description
                                $('.words-01').slideUp(500);
                                // 同时让 words-02 出现
                                $('.words-02').slideDown(500);
                            });
                        }).then(() => {
                            // 当“沙发”的搜索结果变大后，用单独的“沙发”图片和 cover 覆盖掉那个会掉下去的特殊的沙发
                            $('.shirt-cover').show();
                            $('.shirt-02').show();
                        });
                        break;
                    case 7:
                        new Promise(resolve => {
                            $('.star').animate({
                                'width': 120
                            }, 1500, () => resolve());
                        }).then(() => {
                            $('.good-07').fadeIn(700);
                        });
                        break;
                    case 8:
                        let hand08 = $('.hand-08');
                        $('.begin-shopping').hover(function () {
                            $('.btn-08-a').toggle();
                        });
                        $(document).on('mousemove', function (e) {
                            let x = e.pageX - hand08.width() / 2;
                            let y = e.pageY + 10;
                            y = Math.max(windowHeight - 449, y);
                            hand08.css({
                                'left': x,
                                'top': y
                            });
                        });
                        $('.again').on('click', function () {
                            $.fn.fullpage.moveTo(1);
                            $('img, .move').attr('style', '');
                        });
                }
            },

            // 在刚刚滚动出去某个页面时触发
            onLeave: function (index, nextIndex, direction) {
                if (index === 2 && nextIndex === 3) {
                    new Promise(resolve => {
                        // 从第二个聘屏幕滑动到第三个屏幕时
                        // 位于第二个屏幕的沙发会掉下去
                        $('.shirt-02').animate({
                            'bottom': -(windowHeight - 280),
                            'width': 207,
                            'left': 260
                        }, 2000, () => resolve());
                    }).then(() => {
                        // 沙发落下来后，改变第三屏购物车和颜色选择框的背景
                        $('.img-01-a').fadeIn(500);
                        $('.btn-01-a').fadeIn(1000);
                    });
                } else if (index === 3 && nextIndex === 4) {
                    // 从第三个屏幕到第四个屏幕时
                    new Promise(resolve => {
                        $('.shirt-02').hide();
                        // 第三个屏幕到第四个屏幕，需要将倾斜的 t1f 沙发落下
                        $('.t1f').show().animate({
                            'bottom': -(windowHeight - 220 + 50),
                            'left': 250
                        }, 2000, function () {
                            resolve($(this));
                        });
                    }).then(value => {
                        // 然后将从第三层落下的沙发隐藏掉
                        value.hide();
                        // 随后将一开始存在于第四屏购物车中的沙发显示
                        $('.shopping-car-shirt').show();
                    }).then(() => {
                        return new Promise(resolve => {
                            // 然后购物车就开始向右侧走
                            $('.shopping-car').animate({
                                'left': 2000
                            }, 4000, 'easeInElastic', function () {
                                resolve();
                            }); // jQuery easing.js 插件
                        });
                    }).then(() => {
                        // 当购物车移动出屏幕时，需要将 note 显示出来
                        $('.note').fadeIn(500);
                        $('.note-info').fadeIn(1000);
                        // 同时也让标题 word-04-a 显示出来
                        $('.words-04-a').fadeIn(800);
                    });
                } else if (index === 4 && nextIndex === 5) {
                    // 第四屏到第五屏的过渡
                    new Promise(resolve => {
                        // 首先让小手从下往上上升
                        $('.hand-05').animate({
                            'bottom': -15
                        }, 2000, () => resolve());
                    }).then(() => {
                        return new Promise(resolve => {
                            $('.mouse-05-a').fadeIn();
                            // 然后把上面的沙发掉下来
                            $('.section-5-t1f').show().animate({
                                'bottom': 70
                            }, 1000, () => resolve());
                        });
                    }).then(() => {
                        return new Promise(resolve => {
                            // 当沙发落下来后，将 order 收款单上移
                            $('.order-05').animate({
                                'bottom': 390
                            }, 1000, () => resolve());
                        });
                    }).then(() => {
                        // 最后让标题进行 3D 变换
                        $('.words-05').addClass('words-05-a');
                    });
                } else if (index === 5 && nextIndex === 6) {
                    // 从第五个屏幕过渡到第六个屏幕
                    new Promise(resolve => {
                        // 第五个屏幕的沙发需要掉下来
                        $('.section-5-t1f').animate({
                            'bottom': -(windowHeight - 500),
                            'left': '40%',
                            'width': 65
                        }, 1500, () => resolve());
                        // 同时让盒子想右移动，去接沙发
                        $('.box-06').animate({
                            'left': '38%',
                        }, 1500);
                    }).then(() => {
                        return new Promise(resolve => {
                            // 然后让缩小的沙发隐藏就好
                            $('.section-5-t1f').hide();

                            // 在让盒子向下移动
                            $('.box-06').animate({
                                'bottom': 40
                            }, 500, () => resolve());
                        });
                    }).then(() => {
                        return new Promise(resolve => {
                            // 再让盒子消失就好
                            $('.box-06').hide();

                            // 同时移动这个背景，造成小车在移动的效果
                            $('.section-6').animate({
                                'backgroundPositionX': '100%'
                            }, 4000, () => resolve());

                            // 显示遵义市 88 号
                            $('.pop-06').fadeIn(800);

                            // 同时显示 tips “光的节奏...”
                            $('.words-06-a').fadeIn(800).animate({
                                'left': '30%'
                            }, 4000, 'easeOutElastic');
                        });
                    }).then(() => {
                        return new Promise(resolve => {
                            $('.pop-06').fadeOut(800);
                            // 让男人的高度恢复
                            $('.man-06').animate({
                                'height': 305,
                                'bottom': 116,
                            }, 1000, () => resolve());
                        });
                    }).then(() => {
                        return new Promise(resolve => {
                            // 再让男人移动
                            $('.man-06').animate({
                                'right': 500
                            }, 500, () => resolve());
                        });
                    }).then(() => {
                        return new Promise(resolve => {
                            // 将门打开
                            $('.door').fadeIn(200, () => resolve());
                        });
                    }).then(() => {
                        return new Promise(resolve => {
                            // 门打开后，将女人显示出来
                            $('.women-06')
                                .show()
                                .animate({
                                    'right': 350,
                                    'height': 305
                                }, 700);
                            // 同时展示“请收货”
                            $('.pop-07').slideDown(400);
                        });
                    });
                }
            },
        });
    });
})(window, undefined);
