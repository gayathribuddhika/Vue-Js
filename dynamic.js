new Vue({
    el:"#dynamicCSS",
    data:{
        available: false,
        nearby : false 
    },
    methds:{
        
    },
    computed:{
        compClass:function(){
            return{
                available:this.available,
                nearby : this.nearby
            }
        }
    }
});