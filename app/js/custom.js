$(document).ready(function(){
	     
$("#lform").submit(function(e){
  e.preventDefault();
  var form = $('#lform').serialize();
   $.ajax({
        type: 'POST',
        url: 'auth.php',
        data: form,
        success: function (data) {
			console.log(data);
        	if($.trim(data) == "success"){
       
       		 $('#alerttag1').show().delay(1000).fadeOut(100);
       		 setTimeout(function(){
 					window.location.href = 'home.php';
			 }, 1250);
        	}else{
        	 $('#alerttag2').show().delay(2000).fadeOut(100);
        	}
        }, error: function(jqXHR, textStatus, errorThrown){
     		$('#alerttag3').show().delay(2000).fadeOut(100);    
       	   console.log(" The following error occured: "+ textStatus, errorThrown );
       		}	
        });
});
$("#msform").submit(function(e){
  e.preventDefault();
  var form = $('#msform').serialize();
   $.ajax({
        type: 'POST',
        url: 'auth1.php',
        data: form,
        success: function (data) {
      console.log(data);
          if($.trim(data) == "success"){
       
           $('#alerttag1').show().delay(1000).fadeOut(100);
           setTimeout(function(){
          window.location.href = 'patienthome.php';
       }, 1250);
          }else{
           $('#alerttag2').show().delay(2000).fadeOut(100);
          }
        }, error: function(jqXHR, textStatus, errorThrown){
        $('#alerttag3').show().delay(2000).fadeOut(100);    
           console.log(" The following error occured: "+ textStatus, errorThrown );
          } 
        });
});
 $("#ddet").submit(function(e){
  e.preventDefault();
  var form = $('#ddet').serialize();
   $.ajax({
        type: 'POST',
        url: 'docd.php',
        data: form,
        success: function (data) {
      console.log(data);
          if($.trim(data) == "success"){
       
           $('#alert1').show().delay(1000).fadeOut(100);
           setTimeout(function(){
          window.location.href = 'ddet.php';
       }, 1250);
          }else{
           $('#alert2').show().delay(2000).fadeOut(100);
                      setTimeout(function(){
          window.location.href = 'ddet.php';
       }, 1250);
          }
        }, error: function(jqXHR, textStatus, errorThrown){
        $('#alert3').show().delay(2000).fadeOut(100);    
           console.log(" The following error occured: "+ textStatus, errorThrown );
          } 
        });
});   
$("#form").submit(function(e){
  e.preventDefault();
  var form = $('#form').serialize();
   $.ajax({
        type: 'POST',
        url: 'au.php',
        data: form,
        success: function (data) {
      console.log(data);
          if($.trim(data) == "success"){
       
           $('#alert1').show().delay(1000).fadeOut(100);
           setTimeout(function(){
          window.location.href = 'home.php';
       }, 1250);
          }else{
           $('#alert2').show().delay(2000).fadeOut(100);
          }
        }, error: function(jqXHR, textStatus, errorThrown){
        $('#alert3').show().delay(2000).fadeOut(100);    
           console.log(" The following error occured: "+ textStatus, errorThrown );
          } 
        });
});
$("#insdoc").submit(function(e){
  e.preventDefault();
  var form = $('#insdoc').serialize();
   $.ajax({
        type: 'POST',
        url: 'saveimage.php',
        data: form,
        success: function (data) {
      console.log(data);
          if($.trim(data) == "success"){
       
           $('#alert1').show().delay(1000).fadeOut(100);
           setTimeout(function(){
          window.location.href = 'insertadmin.php';
       }, 1250);
          }else{
           $('#alert2').show().delay(2000).fadeOut(100);
          }
        }, error: function(jqXHR, textStatus, errorThrown){
        $('#alert3').show().delay(2000).fadeOut(100);    
           console.log(" The following error occured: "+ textStatus, errorThrown );
          } 
        });
});

$("#ddoc").submit(function(e){
  e.preventDefault();
  var form = $('#ddoc').serialize();
   $.ajax({
        type: 'POST',
        url: 'deladmin.php',
        data: form,
        success: function (data) {
      console.log(data);
          if($.trim(data) == "success"){
       
           $('#alert1').show().delay(1000).fadeOut(100);
           setTimeout(function(){
          window.location.href = 'deleteadmin.php';
       }, 1250);
          }else{
           $('#alert2').show().delay(2000).fadeOut(100);
          }
        }, error: function(jqXHR, textStatus, errorThrown){
        $('#alert3').show().delay(2000).fadeOut(100);    
           console.log(" The following error occured: "+ textStatus, errorThrown );
          } 
        });
});
$("#dddeta").submit(function(e){
  e.preventDefault();
  var form = $('#dddeta').serialize();
   $.ajax({
        type: 'POST',
        url: 'deldeta.php',
        data: form,
        success: function (data) {
      console.log(data);
          if($.trim(data) == "success"){
       
           $('#alert1').show().delay(1000).fadeOut(100);
           setTimeout(function(){
          window.location.href = 'deldet.php';
       }, 1250);
          }else{
           $('#alert2').show().delay(2000).fadeOut(100);
          }
        }, error: function(jqXHR, textStatus, errorThrown){
        $('#alert3').show().delay(2000).fadeOut(100);    
           console.log(" The following error occured: "+ textStatus, errorThrown );
          } 
        });
});
$("#advac").submit(function(e){
  e.preventDefault();
  var form = $('#advac').serialize();
   $.ajax({
        type: 'POST',
        url: 'savevaccine.php',
        data: form,
        success: function (data) {
      console.log(data);
          if($.trim(data) == "success"){
       
           $('#alert1').show().delay(1000).fadeOut(100);
           setTimeout(function(){
          window.location.href = 'addvaccine.php';
       }, 1250);
          }else{
           $('#alert2').show().delay(2000).fadeOut(100);
          }
        }, error: function(jqXHR, textStatus, errorThrown){
        $('#alert3').show().delay(2000).fadeOut(100);    
           console.log(" The following error occured: "+ textStatus, errorThrown );
          } 
        });
});
$("#delvac").submit(function(e){
  e.preventDefault();
  var form = $('#delvac').serialize();
   $.ajax({
        type: 'POST',
        url: 'delvac.php',
        data: form,
        success: function (data) {
      console.log(data);
          if($.trim(data) == "success"){
       
           $('#alert1').show().delay(1000).fadeOut(100);
           setTimeout(function(){
          window.location.href = 'deletevac.php';
       }, 1250);
          }else{
           $('#alert2').show().delay(2000).fadeOut(100);
          }
        }, error: function(jqXHR, textStatus, errorThrown){
        $('#alert3').show().delay(2000).fadeOut(100);    
           console.log(" The following error occured: "+ textStatus, errorThrown );
          } 
        });
});
$("#reg").submit(function(e){
  e.preventDefault();
  var form = $('#reg').serialize();
   $.ajax({
        type: 'POST',
        url: 'insdet.php',
        data: form,
        success: function (data) {
      console.log(data);
          if($.trim(data) == "success"){
           $('#alert1').show().delay(1000).fadeOut(100);
           setTimeout(function(){
          window.location.href = 'home.php';
       }, 1250);
          }else{
           $('#alert2').show().delay(2000).fadeOut(100);
          }
        }, error: function(jqXHR, textStatus, errorThrown){
        $('#alert3').show().delay(2000).fadeOut(100);    
           console.log(" The following error occured: "+ textStatus, errorThrown );
          } 
        });
});

$("#log").submit(function(e){
  e.preventDefault();
  var form = $('#log').serialize();
   $.ajax({
        type: 'POST',
        url: 'docpat.php',
        data: form,
        success: function (data) {
      console.log(data);
          if($.trim(data) == "success"){
           $('#alert12').show().delay(1000).fadeOut(100);
           setTimeout(function(){
          window.location.href = 'docpat.php';
       }, 1250);
          }else{
           $('#alert22').show().delay(2000).fadeOut(100);
          }
        }, error: function(jqXHR, textStatus, errorThrown){
        $('#alert3').show().delay(2000).fadeOut(100);    
           console.log(" The following error occured: "+ textStatus, errorThrown );
          } 
        });
});
}); 