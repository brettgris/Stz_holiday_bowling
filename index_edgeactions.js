/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol, Scene = "Intro", Roll = {x:0,y:0, roll:false}, Hit = [], bHit=[], Frame = [], Score = {};// aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
   	/***********************
             INIT
      ***********************/
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         sym.$("GameScene").hide();
         sym.$("Intro").show();
         sym.$("RollScene").hide();
         sym.$("FinalScene").hide();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         
         yepnope( { nope: "jquery-ui.min.js"} );
         yepnope( { nope: "jquery.ui.touch-punch.min.js"} );
         yepnope( { nope: "bowling.js" } );
         yepnope( { nope: "scoreboard.js" } );
         yepnope( { nope: "soundefx.js", complete:init } );
         yepnope( { nope: "http://cdnjs.cloudflare.com/ajax/libs/gsap/1.11.2/plugins/CSSPlugin.min.js" });
         yepnope( { nope: "http://cdnjs.cloudflare.com/ajax/libs/gsap/1.11.2/easing/EasePack.min.js" });
         yepnope( { nope: "http://cdnjs.cloudflare.com/ajax/libs/gsap/1.11.2/TweenLite.min.js" });
         
         var $p = [];
         var $drag = false;
         
         function init() {
         	sym.getSymbol("GameScene").getSymbol("Ball").$("Ball").draggable ({
         		containment: 'parent',
         		start: function(){
         			e.preventDefault();
         
         			var l = Number( $(this).css("left").slice(0,-2) );
         			var t = Number( $(this).css("top").slice(0,-2) ); 
         			$p = [
         				{x:l,y:t},{x:l,y:t},{x:l,y:t},{x:l,y:t},{x:l,y:t}
         			];
         			$drag = true;
         		},
         		drag: function (){
         			if ( $drag ) {
         
							var l = Number( $(this).css("left").slice(0,-2) );
							var t = Number( $(this).css("top").slice(0,-2) ); 

							sym.getSymbol("GameScene").getSymbol("Ball").$("shadow").css( {
								'left':(l-15)+'px',
								'top':(t+100)+'px'
							} );

							if ( l<0 ) $(this).css("left", '0px !important');
							if ( l>535 ) $(this).css("left", '535px');

							$p[5] = $p[4];$p[4] = $p[3]; $p[3] = $p[2]; $p[2] = $p[1]; 
							$p[0] = {x:l,y:t};

							if ( t < 30 ) throwBall();
         			}
         		}, stop: function (){
         			if ( $drag ) {
         				throwBall();
         			}
         		}
         	});

         	for ( var i=0;i<10;i++){
         		Hit[i] = false;
         		Frame[i] = false;
         	}
         }

         function throwBall(){
         	//$(document).trigger("playSound", "roll");

         	_gaq.push(['_trackEvent', 'Bowling', 'Bowl']);

         	$drag = false;

         	Roll = {
         		s: $p[5].x,
         		e: $p[0].x,
         		roll: true
         	}

         	bHit = Bowling.Roll.roll( Roll );

        	var h = 0, p = 0;
			for ( var i=0;i<10;i++) {
			   	if (bHit[i]&&!Frame[i]) h++;
			   	if (!Frame[i]) p++;
			}

			if ( h==0 || (h==1&&p>1) ) {
				$(document).trigger("playSound", "laugh");
			}else {
				$(document).trigger("playSound", "roll");
			}

			var p = sym.getComposition().getStage().getSymbol("GameScene").getSymbol( "Pins" );
			for ( var i=1;i<11;i++ ) {
				p.getSymbol("pb"+i).getSymbolElement().trigger( "stopTime" );
			}

			sym.getComposition().getStage().getSymbol("GameScene").getSymbol( "snowman_game" ).getSymbolElement().trigger( "stopRand" );

         	sym.getComposition().getStage().$("GameScene").hide();
         	sym.getComposition().getStage().$("RollScene").show();
         	sym.getComposition().getStage().getSymbol("RollScene").play(0);
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Intro'
   (function(symbolName) {   
	   Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         $(document).trigger("playSound", "holiday");
      });
      //Edge binding end
	  
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.getSymbol("JumpingSnowman").play(0);
		 //$(document).trigger("playSound", "penguin");
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8064, function(sym, e) {
         sym.getSymbol("JumpingSnowman").play(0);
         sym.getSymbolElement().trigger("startRandom");

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.getSymbolElement().on("startRandom", startRandom);
         sym.getSymbolElement().on("stopRandom", stopRandom);
         
         var ito;
         var ip = ["JumpingSnowman","pointLeft", "pOne", "pOneCopy"];
         var l = 0;
         
         function startRandom() {
         	ito = setTimeout( randomP, Math.floor( Math.random()* 1000 )+500 );
         }
         
         
         function randomP(){
         	var p = Math.floor( Math.random()* ip.length ) ;
         	if (p==l) p++;
         	if (p>3)p=0;
         	l=p;
         
         	sym.getSymbol( ip[p] ).play(0);
         
         	ito = setTimeout( randomP, Math.floor( Math.random()* 1000 )+500 );
         }
         
         function stopRandom() {
         	clearTimeout( ito );
         }

      });
      //Edge binding end

   })("Intro");
   //Edge symbol end:'Intro'

   //=========================================================
   
   //Edge symbol: 'GameScene'
   (function(symbolName) {   
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
         
         
         if ( Scene == "GameScene" ) {
         	delayedScore();
		 	
		 	sym.getSymbol("snowman_game").getSymbolElement().trigger ("randTime");
         	
         	var p = sym.getSymbol( "Pins" );
         	for ( var i=1;i<11;i++ ) {
         	 	p.getSymbol("pb"+i).getSymbolElement().trigger( "random" );
         	}
         }
         
         function delayedScore(){
         	sym.getSymbol("ScoreBoard").getSymbolElement().trigger("update");
         }

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
		  sym.getSymbolElement().on("playTime", playTime);
         
         function playTime(){
         	sym.play("0");
         	//$(document).trigger("playSound", "penguin");
         	
         	sym.getSymbol("Ball").$("Ball").css({
         		left:"253px", 
         		top:"87px"
         	});
         
         	sym.getSymbol("Ball").$("shadow").css( {
				'left':(253-15)+'px',
				'top':(87+100)+'px'
			});

         	if ( Score.t == "FIRST" ) {
         		for (var i=1;i<11;i++){
         			Frame[i-1]=Hit[i-1];
         			if ( !Hit[i-1] ) sym.getSymbol("Pins").$("pb"+i).show();
         			else sym.getSymbol("Pins").$("pb"+i).hide();

         		}
         	} else {
         		for (var i=1;i<11;i++){
         			Frame[i-1]=false;
         			Hit[i-1]=false;
         			sym.getSymbol("Pins").$("pb"+i).show();
         		}
         	}

         	sym.getSymbol("ScoreBoard").getSymbolElement().trigger("update")
         }

      });
      //Edge binding end

   })("GameScene");
   //Edge symbol end:'GameScene'

   //=========================================================
   
   //Edge symbol: 'RollScene'
   (function(symbolName) {   
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
        	if ( Roll.roll ) {
        		sym.$("pHit").show();
        		sym.$("Ball2").show();
        		sym.$("clouds").hide();
        		sym.$("leftP").hide();
        		sym.$("roundScore").hide();
        	
        		Ball = sym.getSymbol("Ball2").getSymbolElement();
        	
				var f = undefined;
        		for (var i=1;i<11;i++){
        			if (!Hit[i-1]) {
        				if ( f==undefined) f = i;
        				sym.getSymbol("pHit").$("p"+i).show();
        				sym.getSymbol("pHit").getSymbol("p"+i).getSymbolElement().trigger("pickRandom");
        			}else sym.getSymbol("pHit").$("p"+i).hide();
        		}
        	
        		var w = 351;
        		var h = 235;
        	
				var p = (Roll.e)/(506);
        		var x = Math.round( p*(600-90) )+90;
        		var y = 600;

        		var dx = Roll.e - Roll.s;

        		var ey = 350;
        		var ex = Math.round( p*(505-245) )+245+dx;

        		if (ex<245) ex=245;
        		if (ex>505) ex=505;

        		sym.$("Ball2").width ( 50 );

        		Ball.css({
        			left: x+'px',
        			top:600+'px'
        		});

        		TweenLite.to( Ball, .25, {top:ey, left:ex,  scale:.6, ease:Linear.easeNone, onComplete:showHit, delay:1} ); 
        	}

        	function showHit(){
        		sym.$("Ball2").hide();
        		sym.$("pHit").hide();
        		sym.$("clouds").show();
        		
        		
        		for (var i=1;i<11;i++){
        			//if (!Hit[i-1]) {
        				sym.getSymbol("pHit").getSymbol("p"+i).getSymbolElement().trigger("stopTime");
        			//}
        			Hit[i-1] = bHit[i-1];
        		}
				
				sym.getSymbol("clouds").play(0);
        	}


      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
        sym.getSymbolElement().bind("hitDone", showEnd);
        sym.getSymbolElement().bind("scoreDone", nextScene);
        
        function showEnd(){
        	sym.$("clouds").hide();
        	sym.getSymbol("leftP").getSymbolElement().trigger( "updateHit" );
        	sym.$("leftP").show();
        
        	var s = 0;
        	for ( var i=0; i<10; i++ ) {
        		if ( Hit[i] && !Frame[i] ) s++;
        	}
        
        	Score = Bowling.Score.score( s );
			if (Score.t!=="FIRST") $(document).trigger("playSound", "score");
        
        	sym.getSymbol("roundScore").getSymbolElement().trigger("playTime");	
        	sym.$("roundScore").show();
        }
        
        function nextScene(){
        	sym.getSymbol("leftP").getSymbolElement().trigger( "stopTime" );
        
        	if ( Score.gameover ) {
        		sym.getComposition().getStage().$("RollScene").hide();
        		sym.getComposition().getStage().$("FinalScene").show();
        		sym.getComposition().getStage().getSymbol("FinalScene").getSymbolElement().trigger("updateScore");
        		sym.getComposition().getStage().getSymbol("FinalScene").getSymbolElement().trigger("startAnimation");
        		sym.getComposition().getStage().getSymbol("FinalScene").play(0);
        	} else {
        		sym.getComposition().getStage().$("RollScene").hide();
        		sym.getComposition().getStage().getSymbol("GameScene").getSymbolElement().trigger("playTime");
        		sym.getComposition().getStage().$("GameScene").show();
        
        	}
        }

      });
      //Edge binding end

   })("RollScene");
   //Edge symbol end:'RollScene'

   //=========================================================
   
   //Edge symbol: 'Ball'
   (function(symbolName) {   
   
   })("Ball");
   //Edge symbol end:'Ball'

   //=========================================================
   
   //Edge symbol: 'introSign'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_introBtn}", "click", function(sym, e) {
      	_gaq.push(['_trackEvent', 'Bowling', 'Start Game']);
        sym.getComposition().getStage().$("GameScene").show();
        
        sym.getComposition().getStage().$("Intro").hide();
        
        sym.getComposition().getStage().getSymbol("Intro").getSymbolElement().trigger("stopRandom");
        
        Scene = "GameScene";
        Hit = Bowling.Roll.newFrame();
        Score = Bowling.Score.newGame();
        //sym.getComposition().getStage().getSymbol("RollScene").getSymbol("leftP").getSymbolElement().trigger( "updateHit" );
        
        sym.getComposition().getStage().getSymbol("GameScene").getSymbol("ScoreBoard").getSymbolElement().trigger("update");
        sym.getComposition().getStage().getSymbol("GameScene").getSymbolElement().trigger("playTime");
        sym.getComposition().getStage().getSymbol("GameScene").play(0);
        

      });
      //Edge binding end

   })("introSign");
   //Edge symbol end:'introSign'

   //=========================================================
   
   //Edge symbol: 'IntroPenguinRun'
   (function(symbolName) {   
      
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         sym.play(0);
      
      });
      //Edge binding end

   })("IntroPenguinRun");
   //Edge symbol end:'IntroPenguinRun'

   //=========================================================
   
   //Edge symbol: 'penguinStack'
   (function(symbolName) {   


   })("penguinStack");
   //Edge symbol end:'penguinStack'

   //=========================================================
   
   //Edge symbol: 'penguinBowl'
   (function(symbolName) {   
   
      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var to;
         
         sym.getSymbolElement().bind("random", randomTime);
         sym.getSymbolElement().bind("stopTime", stopTime);
         
         function randomTime(){
         	to = setTimeout( playMe, Math.floor( Math.random()*2000 ) );
         }
         
         function playMe() {
         	sym.play(0);
         	to = setTimeout( randomTime, 1000 );
         }
         
         function stopTime(){
         	clearTimeout( to );
         }
         

      });
      //Edge binding end

   })("penguinBowl");
   //Edge symbol end:'penguinBowl'

   //=========================================================
   
   //Edge symbol: 'pHit'
   (function(symbolName) {   


   })("pHit");
   //Edge symbol end:'pHit'

   //=========================================================
   
   //Edge symbol: 'pOne'
   (function(symbolName) {   
   
   })("pOne");
   //Edge symbol end:'pOne'

   //=========================================================
   
   //Edge symbol: 'Ball_1'
   (function(symbolName) {   
   
      })("Ball2");
   //Edge symbol end:'Ball2'

   //=========================================================
   
   //Edge symbol: 'penguinHit'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var to;
         var pgs = ["ph1","ph2","ph3","ph4"];
         var _p;
         
         sym.getSymbolElement().on("pickRandom", randomTime);
         sym.getSymbolElement().on("stopTime", stopTime);
         
         function randomTime(){
         	var r = Math.floor( Math.random()*pgs.length );
         
         	for ( var a=0;a<pgs.length;a++) {
         	  		if ( r==a ) {
            			sym.$( pgs[a] ).show();
            			_p = sym.getSymbol( pgs[a] )
            		} else sym.$( pgs[a] ).hide();
         	}
         
         	to = setTimeout( playMe, Math.floor( Math.random()*1000 ) );
         }
         
         function playMe(){
         	_p.play(0);
         	
         	to = setTimeout( playMe, Math.floor( Math.random()*1000 )+1000 );
         }
         
         function stopTime(){
         	clearTimeout( to );
         }
         

      });
      //Edge binding end

   })("penguinHit");
   //Edge symbol end:'penguinHit'

   //=========================================================
   
   //Edge symbol: 'clouds'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
        sym.stop();
        sym.getComposition().getStage().getSymbol("RollScene").getSymbolElement().trigger( "hitDone" );

      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
         for ( var i=1;i<11;i++) {
         	if ( Hit[i] && !Frame[i] ) {
         		sym.$('pc'+i).show();
         	} else sym.$('pc'+i).hide();
         }

      });
      //Edge binding end

   })("clouds");
   //Edge symbol end:'clouds'

   //=========================================================
   
   //Edge symbol: 'leftP'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
sym.getSymbolElement().on("updateHit", updateHit);
sym.getSymbolElement().on("stopTime", stopThem);

function updateHit(){
	for ( i=0;i<10;i++) {
   	if ( Frame[i] ) {
	   	sym.$("a"+(i+1)).hide();
      } else {
	   	sym.$("a"+(i+1)).show();
	   	if ( Hit[i] ) {
	    		sym.getSymbol("a"+(i+1)).getSymbolElement().trigger( "hit" );
	      } else {
	      	sym.getSymbol("a"+(i+1)).getSymbolElement().trigger( "missed" );
	   	}
   	}         		
	}
}

function stopThem(){
	for ( i=0;i<10;i++) {
   	if ( !Frame[i] ) {
	   	sym.getSymbol("a"+(i+1)).getSymbolElement().trigger( "stopMe" );
   	}         		
	}
}

      });
      //Edge binding end

   })("leftP");
   //Edge symbol end:'leftP'

   //=========================================================
   
   //Edge symbol: 'afterP'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
var mp = ["pm1", "pm2", "pm3" ];
var hp = ["ph1", "ph2", "ph3", "ph4"];
var to, _r, _current;

sym.getSymbolElement().on( "missed", missed );
sym.getSymbolElement().on( "hit", hit ); 
sym.getSymbolElement().on( "stopMe", stopMe ); 

function missed(){
	_r = Math.round ( Math.random()*1500 );
   var r = Math.floor( Math.random()*mp.length );

    var h = 0, p = 0;
    for ( var i=0;i<10;i++) {
   		if (Hit[i]&&!Frame[i]) h++;
   		if (!Frame[i]) p++;
	}
	
	if ( h==0 || (h==1&&p>1) ) {
		
	   	for (var i=0;i<mp.length;i++){
	   		sym.$(mp[i]).hide();
	   	}
	   	sym.$("pl1").show();
	   	_current = "pl1";
	} else {
		

	   for (var i=0;i<mp.length;i++){
	   		if ( r == i ) {
	   			_current = mp[i];
		  		sym.$(mp[i]).show();
		  	} else {
				sym.$(mp[i]).hide();
			}
		}
		sym.$("pl1").hide();
	}
	
    for (var i=0;i<hp.length;i++){
   		sym.$(hp[i]).hide();
   	}

    to = setTimeout( playItem, _r );
}

function hit(){
	_r = Math.round ( Math.random()*1500 );

   var r = Math.floor( Math.random()*hp.length );

	for (var i=0;i<hp.length;i++){
	   	if ( r == i ) {
	   		_current = hp[i];
	   		sym.$(hp[i]).show();
	   	} else {
	   		sym.$(hp[i]).hide();
	   	}
   	}
   	sym.$("pl1").hide();

	for (var i=0;i<mp.length;i++){
		sym.$(mp[i]).hide();
	}

   to = setTimeout( playItem, _r );
}

function playItem(){
	_r = Math.floor ( Math.random()*1500 )+500;

   sym.getSymbol(_current).play(0);

   to = setTimeout( playItem, _r );
}

function stopMe(){
	clearTimeout( to );
}

      });
      //Edge binding end

   })("afterP");
   //Edge symbol end:'afterP'

   //=========================================================
   
   //Edge symbol: 'phOne'
   (function(symbolName) {   
   
   })("phOne");
   //Edge symbol end:'phOne'

   //=========================================================
   
   //Edge symbol: 'ScoreBoard'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.getSymbolElement().on("update", update);
         
         function update() {
         	sym.$("Total").text( 0 );
         
         	for ( var i=1;i<6;i++ ){
         		sym.$("r"+i).text( "" );
         		sym.$("t"+(i*2-1) ).text("");
         		sym.$("t"+ (i*2) ).text("");
         		if ( i==5 ) sym.$("t"+ (i*2+1) ).text("");
         	}
         
         	for ( var i=1;i<6;i++ ){
         		if( Score.score[i-1] != undefined ){
         			sym.$("Total").text( Score.score[i-1].total );
         			sym.$("r"+i).text( Score.score[i-1].total );
         
         			if ( i!=5 ) {
         				if ( Score.score[i-1].f== 10 ) {
         					sym.$("t"+(i*2-1) ).text("X");
         					sym.$("t"+ (i*2) ).text("");
         				} else {
         					if ( Score.score[i-1].f+Score.score[i-1].s == 10 ) {
         						sym.$("t"+(i*2-1) ).text(Score.score[i-1].f);
         						sym.$("t"+ (i*2) ).text("/");
         					}else {
         						sym.$("t"+(i*2-1) ).text(Score.score[i-1].f);
         
         						if ( Score.t == "FIRST" && i==Score.score.length ) sym.$("t"+ (i*2) ).text("");
         						else sym.$("t"+ (i*2) ).text(Score.score[i-1].s);
         					}
         				}	
         			}
         			else {
         				if ( Score.score[i-1].f== 10 && Score.score[i-1].s== 10 && Score.score[i-1].e== 10 ) {
	         				sym.$("t"+(i*2-1) ).text("X");
	         				sym.$("t"+(i*2) ).text("X");
	         				sym.$("t"+(i*2+1) ).text("X");
         				} else if ( Score.score[i-1].f== 10 && Score.score[i-1].s== 10 ) {
         					sym.$("t"+(i*2-1) ).text("X");
	         				sym.$("t"+(i*2) ).text("X");
	         				if ( Score.t == "STRIKE" || Score.t == "TURKEY" || Score.t == "DOUBLE") sym.$("t"+(i*2+1) ).text("");
	         				else sym.$("t"+(i*2+1) ).text(Score.score[i-1].e);
         				} else if ( Score.score[i-1].f== 10 ) {
	         				sym.$("t"+(i*2-1) ).text("X");
	         				if ( Score.score[i-1].s+Score.score[i-1].e == 10 ) {
	         					sym.$("t"+(i*2) ).text(Score.score[i-1].s);
	         					sym.$("t"+(i*2+1) ).text("/");
	         				} else {
	         					if ( Score.t == "STRIKE" || Score.t == "TURKEY" || Score.t == "DOUBLE") {
	         						sym.$("t"+(i*2) ).text("");
				 					sym.$("t"+(i*2+1) ).text("");
	         					} else {
		         					sym.$("t"+(i*2) ).text(Score.score[i-1].s);
				 					if ( Score.t == "FIRST") sym.$("t"+(i*2+1) ).text("");
				 					else sym.$("t"+(i*2+1) ).text(Score.score[i-1].e);
	         					}

	         				}
         				} else if ( Score.score[i-1].f+Score.score[i-1].s == 10 ) {
         					sym.$("t"+(i*2-1) ).text(Score.score[i-1].f);
	         				sym.$("t"+(i*2) ).text("/");
	         				if ( Score.t == "SPARE" ) {
		         				sym.$("t"+(i*2+1) ).text("");
	         				} else {
		         				if( Score.score[i-1].e!=10 ) sym.$("t"+(i*2+1) ).text(Score.score[i-1].e);
				 				else sym.$("t"+(i*2+1) ).text("X");
	         				}

         				} else {
	         				sym.$("t"+(i*2-1) ).text(Score.score[i-1].f);
	         				if ( Score.t == "FIRST" ) sym.$("t"+ (i*2) ).text("");
	         				else sym.$("t"+(i*2) ).text(Score.score[i-1].s);
         				}
         			}
         		} else {
         			sym.$("r"+i).text( "" );
         			sym.$("t"+(i*2-1) ).text("");
         			sym.$("t"+ (i*2) ).text("");
         			if ( i==5 ) sym.$("t"+ (i*2+1) ).text("");
         		}
         	}
         }

      });
      //Edge binding end

   })("ScoreBoard");
   //Edge symbol end:'ScoreBoard'

   //=========================================================
   
   //Edge symbol: 'roundScore'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.getSymbolElement().on("playTime", playTime);
         
         function playTime(){
         	if ( Score.t == "FIRST" ) {
         		sym.$("s1").hide();
         		sym.$("k1").hide();
         		sym.$("t1").hide();
         		sym.$("s").hide();
         	} else if ( Score.t == "TURKEY" ) {
         		sym.$("s1").hide();
         		sym.$("k1").hide();
         		sym.$("t1").show();
         		sym.$("s").hide();
         
         		sym.getSymbol("t1").play(0);
         	} else if ( Score.t == "STRIKE" || Score.t == "DOUBLE" ) {
         		sym.$("s1").hide();
         		sym.$("k1").show();
         		sym.$("t1").hide();
         		sym.$("s").hide();
         
         		sym.getSymbol("k1").play(0);
         	} else if ( Score.t == "SPARE" ) {
         		sym.$("s1").show();
         		sym.$("k1").hide();
         		sym.$("t1").hide();
         		sym.$("s").hide();
         
         		sym.getSymbol("s1").play(0);
         	} else {
         		sym.$("s1").hide();
         		sym.$("k1").hide();
         		sym.$("t1").hide();
         		sym.$("s").show();
         	
         		var s = Score.score[ Score.score.length-1 ].sv;
         		for ( var i=0;i<10;i++ ){
         			if ( i==s ) sym.getSymbol("s").getSymbol("Score").$("s"+i).show();
         			else sym.getSymbol("s").getSymbol("Score").$("s"+i).hide();
         		}
         
         		sym.getSymbol("s").play(0);
         	}
         
         
         	setTimeout(allDone, 2000 );
         }
         
         function allDone(){
         	sym.getComposition().getStage().getSymbol("RollScene").getSymbolElement().trigger( "scoreDone" );
         }
         

      });
      //Edge binding end

   })("roundScore");
   //Edge symbol end:'roundScore'

   //=========================================================
   
   //Edge symbol: 'FinalScene'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.getSymbolElement().on("updateScore", updateScore);
         sym.getSymbolElement().on("startAnimation", startAnimation);
         sym.getSymbolElement().on("stopAnimation", stopAnimation);
         
         function updateScore(){
         	_gaq.push(['_trackEvent', 'Bowling', 'End Game']);
         	sym.$("FinalSign").hide();
         	var score = Score.score[Score.score.length-1].total;
         
         	sym.getSymbol("FinalSign").$("ScoreText").text( score );
         
         	var _message = "", _title = "", _level = 420;
         	if (score<26) {
         		_message = "Did you slip and fall on the ice?";
         		_title = "You're a Pipsqueak";
         		_level = 420;
         	}else if (score<51) {
         		_message = "Penguins are a little too slick for you!";
         		_title = "You're an Arctic Tourist";
         		_level = 395;
         	}else if (score<76) {
         		_message = "Just a little more practice and you'll be a pro!";
         		_title = "You're a Snowflake";
         		_level = 370;
         	}else if (score<101) {
         		_message = "Now that's how you throw a snowball!";
         		_title = "You're a Snowball Master";
         		_level = 345;
         	}else if (score<126) {
         		_message = "You've got skills to SPARE!";
         		_title = "You're an Iceberg Hero";
         		_level = 320;
         	}else if (score<150) {
         		_message = "Watch out for melting ice - you're on fire!";
         		_title = "You're a Blizzard King";
         		_level = 295;
         	}else if (score==150) {
         		_message = "Perfect Game! Good-bye penguins!";
         		_title = "You're a Legend Of The Ice";
         		_level = 270;
         	}
         
         		sym.getSymbol("FinalSign").$("Ranking").text( _title );
         		sym.getSymbol("FinalSign").$("Description").text( _message );
         		sym.getSymbol("FinalSign").$("Level").css('top', _level+'px');
         }
         
         var to, _last=5;
         var items = [
         	sym.getSymbol("i1"),
         	sym.getSymbol("i3"),
         	sym.getSymbol("i4"),
         	sym.getSymbol("i6"),
         	sym.getSymbol("i7"),
         	sym.getSymbol("i8")
         ];
         
         function startAnimation(){
         	to = setTimeout( playItem, Math.floor( Math.random()*750 ) );
         
	      	sym.getSymbol("i5").play(0);
	      	
         }

         function playItem(){
	        var r = Math.floor( Math.random()*items.length );
	        if ( r == _last ) r++;
	        if ( r==items.length) r= 0;
	        _last = r;

	        items[r].play(0);

	        to = setTimeout( playItem, Math.floor( Math.random()*750 ) );
         }

         function stopAnimation(){
	        clearTimeout( to );
	        sym.$("FinalSign").hide();
         }

      });
      //Edge binding end

   })("FinalScene");
   //Edge symbol end:'FinalScene'

   //=========================================================
   
   //Edge symbol: 'FinalSign'
   (function(symbolName) {   
      
      Symbol.bindElementAction(compId, symbolName, "${_playAgain}", "click", function(sym, e) {
         _gaq.push(['_trackEvent', 'Bowling', 'Replay']);
         
         sym.getComposition().getStage().$("FinalScene").hide();
         sym.getComposition().getStage().getSymbol("FinalScene").getSymbolElement().trigger("stopAnimation");
         
         Bowling.Score.newGame();
         sym.getComposition().getStage().getSymbol("GameScene").getSymbol("ScoreBoard").getSymbolElement().trigger("update");
         
         sym.getComposition().getStage().$("Intro").show();
         sym.getComposition().getStage().getSymbol("Intro").play(0);

      });
      //Edge binding end

   })("FinalSign");
   //Edge symbol end:'FinalSign'

   //=========================================================
   
   //Edge symbol: 'Spare'
   (function(symbolName) {   
   
   })("Spare");
   //Edge symbol end:'Spare'

   //=========================================================
   
   //Edge symbol: 'Strike'
   (function(symbolName) {   
   
   })("Strike");
   //Edge symbol end:'Strike'

   //=========================================================
   
   //Edge symbol: 'Turkey'
   (function(symbolName) {   
   
   })("Turkey");
   //Edge symbol end:'Turkey'

   //=========================================================
   
   //Edge symbol: 'Other'
   (function(symbolName) {   
   
   })("Other");
   //Edge symbol end:'Other'

   //=========================================================
   
   //Edge symbol: 'OtherScore'
   (function(symbolName) {   
   
   })("OtherScore");
   //Edge symbol end:'OtherScore'

   //=========================================================
   
   //Edge symbol: 'phit2'
   (function(symbolName) {   
   
   })("phit2");
   //Edge symbol end:'phit2'

   //=========================================================
   
   //Edge symbol: 'phOne_1'
   (function(symbolName) {   
   
      })("ph3");
   //Edge symbol end:'ph3'

   //=========================================================
   
   //Edge symbol: 'ph4'
   (function(symbolName) {   
   
   })("ph4");
   //Edge symbol end:'ph4'

   //=========================================================
   
   //Edge symbol: 'pRock'
   (function(symbolName) {   
   
   })("pRock");
   //Edge symbol end:'pRock'

   //=========================================================
   
   //Edge symbol: 'pointRight'
   (function(symbolName) {   
   
   })("pointRight");
   //Edge symbol end:'pointRight'

   //=========================================================
   
   //Edge symbol: 'pointLeft'
   (function(symbolName) {   
   
   })("pointLeft");
   //Edge symbol end:'pointLeft'

   //=========================================================
   
   //Edge symbol: 'JumpingSnowman'
   (function(symbolName) {   
   
   })("JumpingSnowman");
   //Edge symbol end:'JumpingSnowman'

   //=========================================================
   
   //Edge symbol: 'snowman_game'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
         
         sym.getSymbolElement().trigger( "randTime" );
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.getSymbolElement().on ("randTime", randTime);
         sym.getSymbolElement().on ("stopRand", stopRand);
         
         var to, times = [1000, 2000, 3000, 5500];
         
         function randTime(){
         	to = setTimeout( smTime, Math.floor( Math.random()*1500 )+1000 )
         }
         
         function smTime(){
         	var r = Math.floor( Math.random()*times.length );
         	sym.play( times[r] );
         
         }
         
         function stopRand(){
         	clearTimeout( to );
         }

      });
      //Edge binding end

   })("snowman_game");
   //Edge symbol end:'snowman_game'

   //=========================================================
   
   //Edge symbol: 'pOne_1'
   (function(symbolName) {   
   
      })("pJump");
   //Edge symbol end:'pJump'

   //=========================================================
   
   //Edge symbol: 'pLaugh'
   (function(symbolName) {   
   
   })("pLaugh");
   //Edge symbol end:'pLaugh'

})(jQuery, AdobeEdge, "EDGE-103187271");