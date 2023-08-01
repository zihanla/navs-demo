// 创建名为vm的Vue实例
var vm = new Vue({
    el: '#app',
    data: {
        films: [
            {
                title: '泥视频',
                url: 'https://www.nivod4.tv/',
                mark: '需要梯子，播放快，资源多，无广告'
            },
            {
                title: '胖虎影视',
                url: 'https://www.panghuys.com/',
                mark: '播放快，国内资源多，更新快，主要线路无广告'
            },
            {
                title: '低端影视',
                url: 'https://ddys.site/',
                mark: '国外资源多，无广告'
            }

        ],
        fontEnd: [
            {
                title: '千古前端',
                url: 'https://web.qianguyihao.com/',
                mark: '通俗易懂的前端知识总结',
            },
            {
                title: 'tailwindcss',
                url: 'https://tailwindcss.cn/',
                mark: '最火的css工具集'
            },
            {
                title: 'daisyUi',
                url: 'https://daisyui.com',
                mark: '基于tailwindcss的UI框架',
            },
            {
                title: 'css灵感集',
                url: 'https://github.com/chokcoco/CSS-Inspiration',
                mark: '在这里找到写 CSS 的灵感',
            },
            {
                title: '美叶灵感集',
                url: 'https://www.meiye.art/inspiration',
                mark: '页面设计灵感',
            },
            {
                title: 'flexboxfroggy',
                url: 'https://flexboxfroggy.com/#zh-cn',
                mark: '学习flex布局的小游戏',
            },
            {
                title: 'NotionNext',
                url: 'https://docs.tangly1024.com/article/how-to-develop-with-notion-next',
                mark: 'NotionNext开发文档'
            },
        ],
        backEnd: [{
            title: '小林coding',
            url: 'https://xiaolincoding.com/',
            mark: '图解计算机基础，让天下没有难懂的八股文',
        },
        {
            title: 'IEDA指南',
            url: 'https://www.quanxiaoha.com/idea/idea-tutorial.html',
            mark: '如题IDEA指南',
        },
        {
            title: '枫枫知道',
            url: 'https://docs.fengfengzhidao.com/',
            mark: '包含go、py、前端的知识文档',
        },
        {
            title: '崔庆才',
            url: 'https://cuiqingcai.com/',
            mark: 'py爬虫相关的教程',
        }
        ],
        finding: [{
            title: 'v2ex',
            url: 'https://v2ex.com/',
            mark: '程序员摸鱼圣地',
        },
        {
            title: 'nodeseek',
            url: 'https://www.nodeseek.com/',
            mark: 'vps、域名、web等',
        },
        {
            title: '全球主机论坛',
            url: 'https://hostloc.com/',
            mark: 'loc啥都聊一点',
        },
        {
            title: '猴油中文网',
            url: 'https://bbs.tampermonkey.net.cn/',
            mark: '浏览器脚本，需求发现地',
        },
        {
            title: 'bt开心论坛',
            url: 'https://bt.sy/',
            mark: '宝塔管理面板开心版',
        },
        {
            title: '大佬论坛',
            url: 'https://dalao.net/',
            mark: '除了域名啥都聊',
        },
        {
            title: '博族',
            url: 'https://bozu.net/',
            mark: '博客爱好者的聚集地',
        },],
        tools: [
            {
                title: 'tinypng',
                url: 'https://tinypng.com/',
                mark: '高质量图片压缩',
            },
            {
                title: '极速免费图床',
                url: 'https://tucdn.wpon.cn/',
                mark: '单张上传限制100MB，速度快',
            },
            {
                title: '免费api',
                url: 'https://api.aa1.cn/',
                mark: '很多有意思的创意',
            },
            {
                title: 'jb全家桶激活',
                url: 'https://vrg123.com/',
                mark: 'Jetbrains全家桶在线激活',
            },
            {
                title: 'pdf处理',
                url: 'https://www.ilovepdf.com/zh-cn',
                mark: '合并、拆分、压缩、转换、旋转和解锁等',
            },
            {
                title: 'wmsxwd机场',
                url: 'https://wmsxwd-2.men/#/register?code=tBuMa9nd',
                mark: '全中转线路，质量不错',
            },
            {
                title: '魔戒机场',
                url: 'https://mojie.buzz/#/register?code=seHqA9mm',
                mark: '按量付费，十块用半年，日常够用',
            },
            {
                title: '美国地址生成器',
                url: 'https://www.meiguodizhi.com/',
                mark: '虚拟地址生成',
            },
            {
                title: '临时邮箱',
                url: 'https://temp-mail.org/zh',
                mark: '大量邮箱后缀可选',
            },
            {
                title: 'free-gpt3.5-16k',
                url: 'https://www.6ai.me/',
                mark: '公益gpt3.5-16k速度极快',
            },
            {
                title: '配色1',
                url: 'https://flatuicolors.com/',
                mark: '主题很多的配色',
            },
            {
                title: '配色2',
                url: 'https://colors.eva.design/',
                mark: '有层次的配色表',
            },
            {
                title: '中国色',
                url: 'http://zhongguose.com/',
                mark: '优雅的配色',
            }
        ],
    }
})

// 百度统计
var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?e83bd7a879d53a3e0ada1f83f4db4a0e";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();