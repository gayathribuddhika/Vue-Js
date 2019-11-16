new Vue({
    el: '#vue-app',
    data: { 
        name: 'Gayathri',
        job: "Student",
        greeting = "Good Morning"
    },
    methods:{
    	uni: function(country){
    		return this.job + " of Sabaragamuwa University "+ country;
    	}
    },
    
    
})

