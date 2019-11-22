Vue.component("changing",{
    template:"<p>Hii..This is a re usable component...helo {{name }}. <button v-on:click=changeName>Change Name</button></p>",
    
    data:function(){
        return{
            name:"Gayathri"
        }
    },
    methods:{
        changeName:function(){
            this.name = "Tharushi"
        }
    }
});

Vue.component("greeting",{
    template:"<p>Hii..This is a re usable component...helo {{name }}</p>",
    
    data:function(){
        return{
            name:"Gayathri"
        }
    }
    
});

var one = new Vue ({
    el:"#app-one",
    data:{

    }
});

var two = new Vue ({
    el:"#app-two",
    data:{

    }
});