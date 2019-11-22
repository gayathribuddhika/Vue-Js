new Vue({
    el: '#vue-app',
    data: { 
        name: 'Gayathri',
        job: "Student",
        
    },
    methods:{
    	uni: function(country){
    		return this.job + " of Sabaragamuwa University "+ country;
    	}
    },
    
    
});
new Vue({
    el: "#event",
    data:{
        age: 25
    }

    
});