var app = new Vue({
    el: '#myApp',
    data: {
        listAll: [],
        listPage1: [],
        page: '',
        area: [],
        isActived: false
    },
    methods: {
        firstPage: function(page) {
            this.listPage1 = this.listAll.slice(0,10);
            this.page=page;
            console.log(this.page);
            console.log(this.listAll.length);
        },
        secondPage: function(page) {
            this.page = page;
            this.listPage1 = this.listAll.slice(10,20);
            console.log(this.page);
        },
        thirdPage: function(page) {
            if(this.listAll.length < 30){
                this.page = page;
                this.listPage1 = this.listAll.slice(20,this.listAll.length);
                console.log(this.page);
            }else {
                this.page=page;
                this.listPage1=this.listAll.slice(20,30);
            }
        },
        // nextPage: function() {
        //     let page = this.page;
        //     switch(page){
        //         case 1:
        //         this.$options.methods.secondPage(page+1);
        //         case 2:
        //         this.$options.methods.thirdPage(page+1);
        //         case 3:
        //         this.$options.methods.firstPage(1);
        //     }
        // }
    },
    created() {
        axios.get('../data/national-hot.json').then(response=>(
                this.listAll = response.data.hot,
                this.listPage1 = this.listAll.slice(0,10)
        )).catch(errer=>{
            console.log(errer)
        }),
        axios.get('../data/area.json').then(response=>(
                this.area = response.data.areaData
        )).catch(errer=>{
            console.log(errer)
        })
    },
})