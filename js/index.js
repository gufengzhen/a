var one=new Vue({
	el:"#order",
	data:{
		
		
	},methods:{
		change:function(){
			two.ok=true
		}
	}
	
	
});
var two=new Vue({
	el:"#app",
	data:{
		
		 ok:false,
		 message:"新建笔记",
		 sdfg:"请输入你要写的内容",
		 b:"",
		 c:"",
		 g:""
		 
	},methods:{
		dc:function(){
			if(this.message===""){
				
				alert("请添加笔记标题")
			}else{
			
			this.b = this.message.length;
			var date = new Date();
			var strings =  date .toLocaleString( );
			this.g = strings;
			
			if(this.b>10){
			this.c=this.message.substring(0,10) + "...";
			  
			 return three.ses.unshift({messages:this.c,sdfgs:this.sdfg,cvb:this.g});
			 document.querySelector("ld").focus();	
			}
			three.ses.unshift({messages:this.message,sdfgs:this.sdfg,cvb:this.g});
			document.querySelector("#ser").focus();	
		}
			
		
		},
		chang:function(){
			two.ok=false
		}
		
	},mounted:function(){
		autosize(document.querySelectorAll('textarea'));
	}
	
	
});
var three=new Vue({
	el:"#zui",
	data:{
	   current:0,
		messages:"",
		sdfgs:"",
		ses:[{messages:"新建笔记",sdfgs:"hhh",cvb:"2018-9-11  12:20:15"}],
		num:"0",
		cvb:"几秒前",
		n:"",
		m:""
	},methods:{
		fun:function(index){
			this.ses.splice(index,1)
		}
		
		
	},mounted:function(){
	
	autosize(document.querySelectorAll('textarea'));
 
	}
	
	
});
 
//多行文本框内容自适应

          
