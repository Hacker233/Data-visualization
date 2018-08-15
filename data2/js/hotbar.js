var myChart = document.getElementById("container");
var myChart = echarts.init(myChart);

option = null;
option = {
    title: {
         text: '全国热点近一周TOP3趋势图',
         textStyle: {    
             color: '#82e2ff',
             fontWeight: 'bold',
             fontFamily: '微软雅黑',
             fontSize: 12
         },
         top: 10,
         left: 'center'
     },
     tooltip: {
         show: true
     },
     grid: {
         left: 6,
         top: 20,
         right: 10,
         bottom: 25
     },
    dataset: {
        source: [
             ["05.10","05.11","05.12","05.13","05.14","05.15","05.16"],
             [ 16, 6, 15, 14, 13, 4, 15],
             [17, 9, 10, 10, 10, 8, 15],
             [4, 20, 16, 8, 8, 6, 18]
        ]
    },
    xAxis: {
        boundaryGap: true,
        type: 'category',
        axisLine: {
            lineStyle: {
                color: '#4AA1EB'
            }
        },
        axisLable: {
            textStyle: {
                fontSize: '5',
            }
        }
    },
    yAxis: {
        show: false,
    },
    series: [
        {
            type: 'bar',
            seriesLayoutBy: 'row',
            color: '#72D8FF'
        },{
            type: 'bar',
            seriesLayoutBy: 'row',
            color: '#fdce00'
        },{type: 'bar',
            seriesLayoutBy: 'row',
            color: '#1693ff',
            barCategoryGap: 25
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
    window.onresize = function(){
        myChart.resize();
    }
}
