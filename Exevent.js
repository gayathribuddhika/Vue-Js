new Vue({
    el: "#event",
    data:{
        age: 25
        
    },
    methods:{
        add: function(inc){
            this.age+=inc;
        },
        sub: function(dec) {
            this.age-=dec;
        }
    
    }
    
    
});

