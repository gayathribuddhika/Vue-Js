var one = new Vue({
    el:"#instance-one",
    data:{
        title:"Instance one"
    },
    computed:{
        greet:function(){
            return "Hello Instance one";
        }
    }
});

var two = new Vue({
    el:"#instance-two",
    data:{
        title:"Instance two"
    },
    methods:{
        ChangeTitle:function(){
            one.title = "Title changed";
        }
    },
    computed:{
        greet:function(){
            return "Hello Instance two";
        }
    }
});