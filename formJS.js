<!DOCTYPE html>
<html>
<script language='JavaScript'>

	function getwords(){
		myOutput=document.getElementById('output');
		textbox = document.getElementById('words');
		if (textbox.value != "")

			myOutput.innerHTML="You entered: " + rot13(textbox.value);
		else
			alert("No word has been entered!")
	}

	function rot13(str) { 
  
  
  		str = str.replace(/[A-Z]/gi,function(element){
    			return String.fromCharCode(element.charCodeAt(0)%26 + 65);
  		});

  		return str;
	}
</script>
<body>
<div id = "main">
	<input type="text" id="words" />
	<input type="button" onclick="getwords()" value = "submit" />
	<div id="output">
	</div>
</div>
</body>
</html>