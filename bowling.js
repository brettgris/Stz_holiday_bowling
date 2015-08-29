var Bowling = Bowling || {};

(function (Score) {
	Bowling.Roll = ( function(){
		var _pins = [];
		
		/*********
		New Frame
		*********/
		function newFrame(){
			//console.log( "NEW FRAME - reset pins" );
			var a = [];
			
			for (i=0;i<10;i++) {
				_pins[i]=true;
				a[i] = _pins[i];
			}
			
			return a;
		}
		
		/*********
		ROLL!!
		*********/
		function roll(obj){
			var a = [];
			
			for (i=0;i<10;i++) {
				var rand = Math.random()*50;
				
				//if ( i == 0 ) _pins[i]=true;
				//else 
				_pins[i] = rand < 43;
				
				a[i] = _pins[i];
			}

			return a;
		}
		
		/*********
		PUBLIC
		*********/
		return {
			newFrame:newFrame,
			roll: roll
		}
	})(); 
	
	/*********
	Constructor
	*********/
	Bowling.Roll.newFrame();
})(Bowling);