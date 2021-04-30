new Vue({
    el: '#vue-app',
    data: {
        name: 'Grace',
        job: 'Profesora',
        website: 'https://www.grace.com/',
        websiteTag: '<a href="https://www.grace.com/">Visit Grace.com</a>'
    },
    methods: {
        greet: function(time){
            if (time == 'morning') {
                return 'Buenos días, ' + this.name;
            }
            else if (time == 'afternoon') {
                return 'Buenas tardes, ' + this.name;
            }
            else {
                return 'Hola, ' + this.name;
            }
        }
    }
}); 

new Vue({
    el: '#vue-app-two',
    data: {
        age: 26,
        x: 0,
        y: 0
    },
    methods: {
        add: function(inc){
            this.age += inc;
        },
        subtract: function(dec){
            this.age -= dec;
        },
        updateXY: function(event){
            // check out in dev tools, look at mouse inspect:
            // console.log(event);
            
            this.x = event.offsetX;
            this.y = event.offsetY;        
        }
    }
})