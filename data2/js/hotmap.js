
var wrap= document.getElementById('left-contant-map'),
    wrapW=wrap.getBoundingClientRect().width,
    chart = echarts.init(wrap);

var option = {
    tooltip: {
        trigger: 'item'
    },
    geo: { //绘制基本的地图
        map: 'china',
        roam: false, //是否可手势或者鼠标滚轮放大缩小
        left: 120, //如果为0可最大化的在画布上显示地图，但也可能边缘处有的被隐藏，所以留一定的距离
        right: 120,
        label: {
            normal: {
                show: true,
                formatter: '{b}',
                textStyle: {
                    color: '#fff',
                    fontSize: '9'
                }
            }
        },
        itemStyle: {
            normal: {
                borderColor: 'rgba(0, 0, 0, 0.2)'
            }
        },
        emphasis: {
            itemStyle: {
                areaColor: '#ffe600' //鼠标移动到省份上或手指点击到省份上之后高亮的颜色
            }
        },
        regions: [ //这里可自定义每一个省的颜色
            {
                name:"南海诸岛",value:0,
                itemStyle:{
                    normal:{opacity:0,label:{show:false}}
                }
            },
            {name: '北京',itemStyle:{ areaColor: '#114A89' }},
            {name: '天津',itemStyle:{ areaColor: '#114A89' }},
            {name: '上海',itemStyle:{ areaColor: '#114A89' }},
            {name: '重庆',itemStyle:{ areaColor: '#1062AF' }},
            {name: '河北',itemStyle:{ areaColor: '#114A89' }},
            {name: '河南',itemStyle:{ areaColor: '#114A89' }},
            {name: '云南',itemStyle:{ areaColor: '#65ACDF' }},
            {name: '辽宁',itemStyle:{ areaColor: '#418CCB' }},
            {name: '黑龙江',itemStyle:{ areaColor: '#7DCEF3' }},
            {name: '湖南',itemStyle:{ areaColor: '#114A89' }},
            {name: '安徽',itemStyle:{ areaColor: '#65ACDF' }},
            {name: '山东',itemStyle:{ areaColor: '#114A89' }},
            {name: '新疆',itemStyle:{ areaColor: '#F8B63E' }},
            {name: '江苏',itemStyle:{ areaColor: '#114A89' }},
            {name: '浙江',itemStyle:{ areaColor: '#114A89' }},
            {name: '江西',itemStyle:{ areaColor: '#65ACDF' }},
            {name: '湖北',itemStyle:{ areaColor: '#428CCB' }},
            {name: '广西',itemStyle:{ areaColor: '#65ACDF' }},
            {name: '甘肃',itemStyle:{ areaColor: '#65ACDF' }},
            {name: '山西',itemStyle:{ areaColor: '#418CCB' }},
            {name: '内蒙古',itemStyle:{ areaColor: '#7DCEF3' }},
            {name: '陕西',itemStyle:{ areaColor: '#418CF3' }},
            {name: '吉林',itemStyle:{ areaColor: '#65ACDF' }},
            {name: '福建',itemStyle:{ areaColor: '#114A89' }},
            {name: '贵州',itemStyle:{ areaColor: '#418CCB' }},
            {name: '广东',itemStyle:{ areaColor: '#114A89' }},
            {name: '青海',itemStyle:{ areaColor: '#7DCEF3' }},
            {name: '西藏',itemStyle:{ areaColor: '#7DCEF3' }},
            {name: '四川',itemStyle:{ areaColor: '#114A89' }},
            {name: '宁夏',itemStyle:{ areaColor: '#65ACDF' }},
            {name: '海南',itemStyle:{ areaColor: '#7DCEF3' }},
            {name: '台湾',itemStyle:{ areaColor: '#114A89' }},
            {name: '香港',itemStyle:{ areaColor: '#114A89' }},
            {name: '澳门',itemStyle:{ areaColor: '#114A89' }}
        ],
    },
    series: [{ //如果要在中国地图这一坐标里的特定位置做标记，就需要这些配置
        name: '我想标出的点',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        symbol: 'circle',
        symbolSize: 15, //这里也是可以用一个函数的，根据数据来决定标记的大小
        label: {
            show: true,
            position: 'bottom',
            formatter: function(params) {
                console.log(params)
                let data=params.data;
                return params.name + '-' + data.capital+'：'+data.man;
            },
            fontSize: 11,
            color: 'white',
            backgroundColor: 'rgba(242,50,18,1)',
            borderRadius: 4,
            padding: [1, 2, 1, 2]
        },
        tooltip: {
            show: false,
        },
        itemStyle: {
            normal: {
                color: '#f4e925',
                shadowBlur: 25,
            }
        },
        data: [ //在地图按照坐标找出点

            // {name: '新疆', capital: '库尔勒', value: [86.06,41.68], man: '帆帆挖金' },
            // {name: '甘肃', capital: '兰州', value: [103.73,36.03,9], man: '未来建筑师' }
        ],
        zlevel: 3
    }]
};

chart.setOption(option);
window.onresize = function(){
    chart.resize();
}
chart.on('click', function(params) {
    //这里可以根据参数的不同确定点击的区域，作出不同反应
});