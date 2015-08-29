var Bowling = Bowling || {};

(function (Bowling) {
	Bowling.Score = ( function(){
		var _first = true, _game = true, _last=false;
		var _rounds = [];
		var _frame = 1;
		var _val = "NONE";
		var _fifth = 1;
		var _s = 0;
		
		/*********
		resetScore
		*********/
		function newGame(){
			//console.log( "startGame" );
			_rounds = [];
			_frame = 1;
			_first = true;
			_game = true;
			_fifth = 1;
			
			return {t:"NONE", score: _rounds, gameover:false};
		}
		
		/*********
		addScore
		*********/
		function score(val){
			var go = false;
			//_rounds[_frame-1].score = 0;
			//_val = "NONE";
			if( _game ) {
				if( _frame == 5 ) {
					if (_fifth==1) {
						_rounds.push ({ f:val,s:0,e:0,t:"FIFTH"} );
						if (val==10) {
							if (_rounds[_frame-3].t=="DOUBLE"){
									_rounds[_frame-3].t="TURKEY";
									_rounds[_frame-2].t="DOUBLE";
									_val = "TURKEY";
									//$("document").trigger( "SCORETIME", "TURKEY" );
							} else if (_rounds[_frame-2].t=="DOUBLE") {
								_val = "TURKEY";
								_rounds[_frame-2].t = "TURKEY";
								//$("document").trigger( "SCORETIME", "TURKEY" );
							} else if (_rounds[_frame-2].t=="STRIKE") {
								_val = "DOUBLE";
								_rounds[_frame-2].t = "DOUBLE";
								//$("document").trigger( "SCORETIME", "DOUBLE" );
							} else {
								_val = "STRIKE";
								//$("document").trigger( "SCORETIME", "STRIKE" );
							}
							
						} 
						else {
							_val = "FIRST";
							//$("document").trigger( "SCORETIME", "NONE" );
						}
						
						_fifth++;
					} 
					else if (_fifth==2) {
						if ( _val == "FIRST" ) {
							if ( (_rounds[_frame-1].f+val)==10 ){
								_val = "SPARE";
								//$("document").trigger( "SCORETIME", "SPARE" );
								_rounds[_frame-1].s = val;
								_fifth++;
							} else {
								_rounds[_frame-1].s = val;
								_val = "SECOND";
								_rounds[_frame-1].sv = _rounds[_frame-1].f+_rounds[_frame-1].s;
								//$("document").trigger( "SCORETIME",  );
								go=true;
							}
						} 
						else {
							if (val==10) {
								if ( _rounds[_frame-1].f==10 ) {
									if (_rounds[_frame-2].t=="DOUBLE") {
										_val = "TURKEY";
										_rounds[_frame-2].t = "TURKEY";
										//$("document").trigger( "SCORETIME",  "TURKEY" );
									} else {
										_val = "DOUBLE";
										//$("document").trigger( "SCORETIME",  "DOUBLE" );
									}
								} else {
									_val = "STRIKE";
									//$("document").trigger( "SCORETIME",  "STRIKE" );
								}
							} else {
								_val = "FIRST";
							}
							
							_rounds[_frame-1].s = val;
							_fifth++;
						}	
					} 
					else if ( _fifth==3 ) {
						_rounds[_frame-1].e = val;
						if ( val == 10 ) {
							if ( _rounds[_frame-1].f==10 && _rounds[_frame-1].s==10 ) { 
								_val = "TURKEY";
								//$("document").trigger( "SCORETIME",  "TURKEY" );
							} else {
								_val = "STRIKE";
								//$("document").trigger( "SCORETIME",  "STRIKE" );
							}
						} else {
							
						}
						
						if ( _rounds[_frame-1].f==10 && _rounds[_frame-1].s==10 ) {
							_val = "SECOND";
							_rounds[_frame-1].sv = _rounds[_frame-1].e;
							//$("document").trigger( "SCORETIME",  _rounds[_frame-1].e );
						} else if ( _rounds[_frame-1].f==10 && (_rounds[_frame-1].s+_rounds[_frame-1].e)==10 ) {
							_val = "SPARE";
							//$("document").trigger( "SCORETIME",  "SPARE" );
						} else if ( _rounds[_frame-1].f==10 && _rounds[_frame-1].s!=10 ){
							_val = "SECOND";
							_rounds[_frame-1].sv = _rounds[_frame-1].s+_rounds[_frame-1].e;
							//$("document").trigger( "SCORETIME", _rounds[_frame-1].s+_rounds[_frame-1].e );
						} else if ( (_rounds[_frame-1].f+_rounds[_frame-1].s )==10 ) {
							_val = "SECOND";
							_rounds[_frame-1].sv = _rounds[_frame-1].e;
							//$("document").trigger( "SCORETIME", _rounds[_frame-1].e );
						}
						
						go = true;
					}
				} 
				else {
					if ( _first ) {
						if (val==10) {
							_rounds.push ({ f:10,s:0,t:"STRIKE"} );
							
							if (_frame!=1) {
								if (_frame>2) {
									if (_rounds[_frame-3].t=="DOUBLE") {
										_rounds[_frame-3].t = "TURKEY";
										_rounds[_frame-2].t = "DOUBLE";
										//_rounds[_frame-1].t = "DOUBLE";
										_val = "TURKEY";
										//$("document").trigger( "SCORETIME", "TURKEY" );
									} else if (_rounds[_frame-2].t=="STRIKE") {
										_rounds[_frame-2].t = "DOUBLE";
										_val = "DOUBLE";
										//$("document").trigger( "SCORETIME", "DOUBLE" );	
									} else {
										_val = "STRIKE";
										//$("document").trigger( "SCORETIME", "STRIKE" );
									}
								} else {
									if (_rounds[_frame-2].t=="STRIKE") {
										_rounds[_frame-2].t = "DOUBLE";
										_val = "DOUBLE";
										//$("document").trigger( "SCORETIME", "DOUBLE" );	
									} else {
										_val = "STRIKE";
										//$("document").trigger( "SCORETIME", "STRIKE" );
									}
								}
							} else {
								_val = "STRIKE";
								//$("document").trigger( "SCORETIME", "STRIKE" );
							}
							
							_frame++; 
							
						}else {
							_first = false;
							_rounds.push ({ f:val,s:0,t:"NONE"} );
							_val = "FIRST"
							//$("document").trigger( "SCORETIME", "NONE" );
						}
					} else {
						_val = "SECOND"
						
						_first = true;
						_rounds[_frame-1].s = val;
						
						if ( (_rounds[_frame-1].f+val)==10 ){
							_rounds[_frame-1].t = "SPARE";
							_val = "SPARE";	
							//$("document").trigger( "SCORETIME", "SPARE" );
						} else{
							_rounds[_frame-1].sv = _rounds[_frame-1].f+_rounds[_frame-1].s;
							//$("document").trigger( "SCORETIME", _rounds[_frame-1].f+_rounds[_frame-1].s );
						}
						
						_frame++;
					}
				}
				
				total();
			}	
			return {t:_val, score: _rounds, gameover:go};
		}
		
		/*********
		Total Score
		*********/
		function total(){
			var _total = 0;
			var last = _rounds.length-1;
			
			var t = [];
			
			for ( i=0;i<_rounds.length;i++) {
				if ( _rounds[i].t=="FIFTH" ) {
					_total+= _rounds[i].f;
					_total+= _rounds[i].s;
					_total+= _rounds[i].e;
				} else if ( _rounds[i].t=="DOUBLE" ||  _rounds[i].t=="TURKEY" ){
					_total+=20;
					
					//console.log( i, last-1 )
					
					if (i!=(last-1)) {
						if ( _rounds[i+2].f != 10) {
							_total+= _rounds[i+2].f;
							_total+= _rounds[i+2].s;
						} else {
							_total+= _rounds[i+2].f;
						}
					} else {
						if ( _rounds[i].t=="TURKEY" ) {
							_total+=10
						} else {
							if ( i== 4 ) {
								_total+= _rounds[i+1].s;
								_total+= _rounds[i+1].e;
							} //else {
								//_total+= _rounds[i+1].f;
								//_total+= _rounds[i+1].s;
							//}
						}

					}
					
				} else if ( _rounds[i].t=="STRIKE" ){
					_total+=10;
					if (i!=last) {
						if ( _rounds[i+1].f!=10 ){
							_total+= _rounds[i+1].f;
							_total+= _rounds[i+1].s;
						} else {
							_total+= _rounds[i+1].f;
						}
					}
				} else if ( _rounds[i].t=="SPARE" ) {
					_total+=10;
					if (i!=last) {
						_total+= _rounds[i+1].f;
					}
				} else if ( _rounds[i].t=="NONE" ) {
					_total+= _rounds[i].f;
					_total+= _rounds[i].s;
				}
				
				$("document").trigger( "TOTALFRAMES", {f:i+1, t:_total } );
				
				_rounds[i].total = _total;
				//console.log( "total in frame ", i+1, "is",  _total);
			}
		}
		
		
		function test(){
			return {t:_val, score: _rounds, gameover:false};
		}
		
		/*********
		PUBLIC
		*********/
		return {
			newGame:newGame,
			score:score,
			total:total,
			test:test
		}
	})(); 
	
	/*********
	Constructor
	*********/
	Bowling.Score.newGame();
})(Bowling);

