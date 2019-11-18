new Vue({
    el: "#property",
    data:{
        age: 20,
        a: 0,
        b: 0
    },
    methods:{
        addToA:function(){
            return this.a + this.age;
        },
        addToB:function(){
            return this.b + this.age;
        }
    }
});