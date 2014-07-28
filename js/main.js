$(document).ready(function(){

	$('.carousel').carousel({
		interval:2000
	});

	$('.infoSecundario').hide();
	$('.infoTerciario').hide();
	$('#primaria').on('click',mostrarPrimario);
	$('#secundario').on('click',mostrarSecundario);
	$('#terciario').on('click',mostrarTerciario);
	function mostrarPrimario(){
		$('.infoSecundario').hide();
		$('.infoTerciario').hide();
		$('.infoPrimario').slideDown(1000);
	}

	function mostrarSecundario(){
		$('.infoPrimario').hide();
		$('.infoTerciario').hide();
		$('.infoSecundario').slideDown(1000);
	}

	function mostrarTerciario(){
		$('.infoPrimario').hide();
		$('.infoSecundario').hide();
		$('.infoTerciario').slideDown(1000);
	}
});



