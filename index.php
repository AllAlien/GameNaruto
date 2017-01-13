<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<title>Game Naruto</title>
	<link rel="stylesheet" href="css/estilos.css">
</head>
<body>
<audio src="sound/narutosound.mp3" autoplay="autoplay" loop="lopp"></audio>
<?php

		include 'header.php';
?>
	<div class="circle">
			<h1>Escolha seu ninja</h1>
		<div class="center">
			<div class="luta ninja1"><p class="name">Naruto</p><img src="img/naruto.png"  id="naruto"></div>
			<div class="luta ninja2"><p class="name">Sasuki</p><img src="img/sasuke.png"  id="sasuke"></div>
			<div class="luta ninja3"><p class="name">Sakura</p><img src="img/sakura.png"  id="sakura"></div>
			<div class="luta ninja4"><p class="name">Neji</p><img src="img/neji.png"  id="neji"></div>
			<div class="luta ninja5"><p class="name">Orochimaru</p><img src="img/orochimaro.png"  id="orochimaro"></div>
			<div class="luta ninja6"><p class="name">Kakashi</p><img src="img/kakashi.png"  id="kakashi"></div>
			<div class="luta ninja7"><p class="name">Shino</p><img src="img/shino.png"  id="shino"></div>
			<div class="luta ninja8"><p class="name">Shikamu</p><img src="img/shikamaru.png"  id="shikamaru"></div>
			
		</div>
	</div>
	<?php
		include 'footer.php'; 
	?>
</body>
</html>