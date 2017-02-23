// JavaScript Document
$(document).ready(function(){

}) 

   var wait=60;
   function time()
   {
	   	var price, zone, code;
	   	price = $("#price").val();
	   	zone = $("#zone").val();
	   	code = $("#code").val();
	   	
	   	if (price.length<1)
		{
			return;
        }
	   	if (zone.length<1)
		{
			return;
        }
	   	if (code.length<1)
		{
			return;
        }
	   	
	   var mobile = $("#authcode").val();
	   if (mobile.length==11)
	   {
		if (wait == 0)
		{ 
			$('#btnmsg').removeAttr("disabled");
			$('#btnmsg').val("点击获取");
			//p.html("如果您在1分钟内没有收到验证码，请检查您填写的手机号码是否正确或重新发送"); 
			wait = 60;
		}
		else 
		{ 
			$('#btnmsg').attr("disabled", true);
			$('#btnmsg').val(wait + "秒");
			wait--; 
			setTimeout(
				function() { 
					time();
				}, 
				1000) ;
		}
	   }
   }
   
   function sendMsg()
   {
	   	var price, zone, code;
	   	price = $("#price").val();
	   	zone = $("#zone").val();
	   	code = $("#code").val();
	   	
	   	if (price.length<1)
		{
	   		$("#errormsg").html("请输入第一排第一区域");
			return;
        }
	   	if (zone.length<1)
		{
	   		$("#errormsg").html("请输入第一排排第二区域");
			return;
        }
	   	if (code.length<1)
		{
	   		$("#errormsg").html("请输入第二排");
			return;
        }
	   
		var mobile, u;
		mobile = $("#authcode").val();
		if (mobile.length==11)
		{
			$("#errormsg").html("请输入您收到的验证码");
			u = "/dy/send_msg?mobile=" + mobile + "&a=" + Math.floor(Math.random()*9999+1000);
			jQuery.getJSON(u, function(d) {
				$("#errormsg").html(d.message);
			});
			
        }
		else
		{
			$("#errormsg").html("请输入正确手机号");
		}
   }
   
     
   function sendFindMsg2() 
   {
	  
	   	var allcode, price, zone, code;
	   	price = $("#price").val();
	   	zone = $("#zone").val();
	   	code = $("#code").val();
	   	
	   	if (price.length<1)
		{
	   		$("#errormsg").html("请输入第一排第一区域");
			return;
        }
	   	if (zone.length<1)
		{
	   		$("#errormsg").html("请输入第一排排第二区域");
			return;
        }
	   	if (code.length<1)
		{
	   		$("#errormsg").html("请输入第二排");
			return;
        }
	    
	   	allcode = price + "" + zone + "" + code;
	   	var mobile = $("#authcode").val();
		if (mobile.length==11)
		{
			
			$.ajax({
		        url : "/dy/send_find_msg",
		        type : 'post',
		        data : {
		        	mobile:mobile,
		        	code:allcode
		        },
		        async : false,
		        dataType : 'json',
		        cache : false,
		        success : function(data){
		        	var mess = "" + data.message;
			   	    if(data.result=='0')
			   	    {
			   	    	time();
			   	    }
			   	    $("#errormsg").html(mess);
				}
			});
			
        }
		else
		{
			$("#errormsg").html("请输入正确手机号");
		}

   }
   

   
		   