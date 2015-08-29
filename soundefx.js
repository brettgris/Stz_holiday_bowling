var StarzGame = StarzGame || {};	

(function ($, StarzGame) {
	/***************
	MUSIC
	****************/
	StarzGame.Music = ( function(){
		var $doc,
			_sounds = [], 
			_mute = false,
			_ie;
		
		/***************
		INIT
		****************/
		function init() {
			$doc = $(document);
			
			_ie = $.browser.msie;
			
			audioSetup();
			
			$doc.on ('playSound', playSound);
		}
		
		/***************
		Audio Setup
		****************/
		function audioSetup(){
			
			_sounds["roll"] = document.getElementById( "rollSound" );
			_sounds["laugh"] = document.getElementById( "laughSound" );
			_sounds["score"] = document.getElementById( "scoreSound" );
			_sounds["holiday"] = document.getElementById( "holidaySound" );
		}
		
		/***************
		PlaySound
		****************/
		function playSound( e, sound ) {
			if ( !_mute) {
				if (!_ie) {
					_sounds[sound].play(); 
				}
			}
		}
		
		/***************
		PUBLIC
		****************/
		return {
			init:init 	
		}
	})();
	
	Construct = (function(){
		$(document).ready(function(){
			StarzGame.Music.init();
		});
	})();
})(jQuery,StarzGame);

