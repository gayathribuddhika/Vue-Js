new Vue({
 el:"#keyboard",
 data : {
     name : "",
     age : ""
    
 },
 methods:{
    logName:function(){
        console.log("You entered the name");
    },
    logAge:function(){
        console.log("you entered the age");
    }
}
});