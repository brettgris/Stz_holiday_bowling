/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'FinalScene',
            type:'rect',
            rect:['137','105','auto','auto','auto','auto']
         },
         {
            id:'RollScene',
            type:'rect',
            rect:['382','257','auto','auto','auto','auto']
         },
         {
            id:'GameScene',
            type:'rect',
            rect:['294','283','auto','auto','auto','auto'],
            userClass:"gameScene"
         },
         {
            id:'Intro',
            type:'rect',
            rect:['118','130','auto','auto','auto','auto'],
            userClass:"introScene"
         }],
         symbolInstances: [
         {
            id:'Intro',
            symbolName:'Intro'
         },
         {
            id:'FinalScene',
            symbolName:'FinalScene'
         },
         {
            id:'RollScene',
            symbolName:'RollScene'
         },
         {
            id:'GameScene',
            symbolName:'GameScene'
         }
         ]
      },
   states: {
      "Base State": {
         "${_FinalScene}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '600px'],
            ["style", "width", '800px']
         ],
         "${_RollScene}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Intro}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "overflow", 'visible']
         ],
         "${_GameScene}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid28", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_GameScene}', [] ], ""], position: 0 },
            { id: "eid44", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_RollScene}', [] ], ""], position: 0 },
            { id: "eid764", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_FinalScene}', [] ], ""], position: 0 },
            { id: "eid1663", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Intro}', [0] ], ""], position: 0 }         ]
      }
   }
},
"Intro": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'introView',
      type: 'image',
      rect: ['357','378','1600px','600px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/introView.jpg','0px','0px']
   },
   {
      id: 'introBowlingPenguin',
      type: 'image',
      rect: ['233','451','131px','169px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/introBowlingPenguin.png','0px','0px']
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['180','622','auto','auto','auto','auto'],
      id: 'introSign'
   },
   {
      id: 'introArm',
      type: 'image',
      rect: ['94px','515px','60px','23px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/introArm.png','0px','0px']
   },
   {
      id: 'IntroPenguinRun',
      type: 'rect',
      rect: ['274','444','auto','auto','auto','auto']
   },
   {
      id: 'From',
      type: 'image',
      rect: ['410px','264px','78px','38px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/From.png','0px','0px']
   },
   {
      id: 'Starz',
      type: 'image',
      rect: ['482px','247px','166px','64px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Starz.png','0px','0px']
   },
   {
      id: 'Happy',
      type: 'image',
      rect: ['233px','22px','334px','112px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Happy.png','0px','0px']
   },
   {
      id: 'Holidays',
      type: 'image',
      rect: ['113px','122px','574px','140px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Holidays.png','0px','0px']
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['242px','400px','auto','auto','auto','auto'],
      id: 'JumpingSnowman'
   },
   {
      id: 'pOneCopy',
      type: 'rect',
      rect: ['598px','434px','auto','auto','auto','auto']
   },
   {
      id: 'pOne',
      type: 'rect',
      rect: ['598','434','auto','auto','auto','auto']
   },
   {
      id: 'pointLeft',
      type: 'rect',
      rect: ['551px','501px','auto','auto','auto','auto']
   },
   {
      id: 'IntroBall',
      type: 'image',
      rect: ['68px','489px','53px','62px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/IntroBall.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'pOne',
      symbolName: 'pOne'
   },
   {
      id: 'IntroPenguinRun',
      symbolName: 'IntroPenguinRun'
   },
   {
      id: 'pointLeft',
      symbolName: 'pointLeft'
   },
   {
      id: 'pOneCopy',
      symbolName: 'pOne'
   },
   {
      id: 'JumpingSnowman',
      symbolName: 'JumpingSnowman'
   },
   {
      id: 'introSign',
      symbolName: 'introSign'
   }   ]
   },
   states: {
      "Base State": {
         "${_From}": [
            ["style", "top", '262px'],
            ["style", "opacity", '0'],
            ["style", "left", '242px'],
            ["style", "display", 'block']
         ],
         "${_introView}": [
            ["style", "left", '-1px'],
            ["style", "top", '0px']
         ],
         "${_Starz}": [
            ["style", "top", '249px'],
            ["style", "opacity", '0'],
            ["style", "left", '269px'],
            ["style", "display", 'block']
         ],
         "${_IntroBall}": [
            ["motion", "location", '94.50001293026px 519.86293911537px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_introArm}": [
            ["style", "display", 'block'],
            ["style", "top", '515px'],
            ["style", "left", '94px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_pointLeft}": [
            ["style", "top", '474px'],
            ["transform", "scaleX", '0.77504'],
            ["transform", "scaleY", '0.77504'],
            ["style", "left", '880px']
         ],
         "${_JumpingSnowman}": [
            ["style", "display", 'none'],
            ["style", "left", '-140px'],
            ["style", "top", '392px']
         ],
         "${_IntroPenguinRun}": [
            ["style", "top", '444px'],
            ["style", "left", '473px'],
            ["style", "display", 'block']
         ],
         "${_Happy}": [
            ["style", "top", '-103px'],
            ["style", "opacity", '0'],
            ["style", "left", '233px'],
            ["style", "display", 'block']
         ],
         "${_introSign}": [
            ["style", "top", '665px'],
            ["style", "left", '188px'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '600px'],
            ["style", "width", '800px']
         ],
         "${_pOneCopy}": [
            ["style", "top", '406px'],
            ["transform", "scaleX", '0.77959'],
            ["transform", "scaleY", '0.77959'],
            ["style", "left", '880px']
         ],
         "${_introBowlingPenguin}": [
            ["style", "top", '400px'],
            ["style", "left", '111px'],
            ["style", "display", 'block']
         ],
         "${_pOne}": [
            ["style", "top", '406px'],
            ["transform", "scaleX", '0.77959'],
            ["transform", "scaleY", '0.77959'],
            ["style", "left", '792px']
         ],
         "${_Holidays}": [
            ["style", "top", '-29px'],
            ["style", "opacity", '0'],
            ["style", "left", '113px'],
            ["style", "display", 'block']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10500,
         autoPlay: false,
         timeline: [
            { id: "eid1235", tween: [ "style", "${_From}", "left", '410px', { fromValue: '242px'}], position: 3500, duration: 560 },
            { id: "eid1237", tween: [ "style", "${_From}", "top", '264px', { fromValue: '262px'}], position: 3500, duration: 560 },
            { id: "eid117", tween: [ "transform", "${_IntroBall}", "rotateZ", '644deg', { fromValue: '0deg'}], position: 2140, duration: 4860 },
            { id: "eid82", tween: [ "style", "${_introSign}", "left", '188px', { fromValue: '188px'}], position: 7579, duration: 0 },
            { id: "eid1330", tween: [ "transform", "${_pOne}", "scaleY", '0.77959', { fromValue: '0.77959'}], position: 10500, duration: 0 },
            { id: "eid1327", tween: [ "style", "${_pOneCopy}", "top", '406px', { fromValue: '406px'}], position: 10500, duration: 0 },
            { id: "eid86", tween: [ "style", "${_introSign}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
            { id: "eid1241", tween: [ "style", "${_Starz}", "left", '482px', { fromValue: '269px'}], position: 3288, duration: 558 },
            { id: "eid1323", tween: [ "transform", "${_pOneCopy}", "scaleX", '0.77959', { fromValue: '0.77959'}], position: 10500, duration: 0 },
            { id: "eid105", tween: [ "transform", "${_introArm}", "rotateZ", '-88deg', { fromValue: '0deg'}], position: 1500, duration: 250 },
            { id: "eid1264", tween: [ "transform", "${_introArm}", "rotateZ", '-149deg', { fromValue: '-88deg'}], position: 1750, duration: 250 },
            { id: "eid110", tween: [ "transform", "${_introArm}", "rotateZ", '-171deg', { fromValue: '-149deg'}], position: 2000, duration: 250 },
            { id: "eid1374", tween: [ "style", "${_JumpingSnowman}", "top", '393px', { fromValue: '392px'}], position: 7000, duration: 564 },
            { id: "eid1376", tween: [ "style", "${_JumpingSnowman}", "top", '394px', { fromValue: '393px'}], position: 8064, duration: 500 },
            { id: "eid107", tween: [ "style", "${_introArm}", "top", '542px', { fromValue: '515px'}], position: 1500, duration: 250 },
            { id: "eid109", tween: [ "style", "${_introArm}", "top", '545px', { fromValue: '542px'}], position: 1750, duration: 250 },
            { id: "eid112", tween: [ "style", "${_introArm}", "top", '537px', { fromValue: '545px'}], position: 2000, duration: 250 },
            { id: "eid115", tween: [ "style", "${_introArm}", "top", '536px', { fromValue: '537px'}], position: 2250, duration: 3643 },
            { id: "eid1263", tween: [ "style", "${_From}", "display", 'none', { fromValue: 'block'}], position: 9048, duration: 0 },
            { id: "eid1243", tween: [ "style", "${_Starz}", "top", '247px', { fromValue: '249px'}], position: 3288, duration: 558 },
            { id: "eid1377", tween: [ "motion", "${_IntroBall}", [[94.5,520,0,0],[151.98,587.09,213.64,32.99,223.3,34.49],[258.18,548,0,0]]], position: 1500, duration: 640 },
            { id: "eid1381", tween: [ "motion", "${_IntroBall}", [[258.18,548,0,0],[337.77,509.15,115.52,7.22,106.28,6.64],[406.3,557.26,0,0]]], position: 2140, duration: 860 },
            { id: "eid1382", tween: [ "motion", "${_IntroBall}", [[406.3,557.26,0,0],[569.01,577.65,208.83,65.31,223.16,69.8],[694.62,647.43,0,0]]], position: 4643, duration: 2357 },
            { id: "eid72", tween: [ "style", "${symbolSelector}", "height", '600px', { fromValue: '600px'}], position: 0, duration: 0 },
            { id: "eid1255", tween: [ "style", "${_Happy}", "opacity", '1', { fromValue: '0'}], position: 2843, duration: 710 },
            { id: "eid1258", tween: [ "style", "${_Happy}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 500 },
            { id: "eid84", tween: [ "style", "${_introSign}", "top", '36px', { fromValue: '665px'}], position: 7000, duration: 579 },
            { id: "eid102", tween: [ "style", "${_introBowlingPenguin}", "left", '-462px', { fromValue: '111px'}], position: 3000, duration: 2893 },
            { id: "eid1329", tween: [ "transform", "${_pOne}", "scaleX", '0.77959', { fromValue: '0.77959'}], position: 10500, duration: 0 },
            { id: "eid1336", tween: [ "style", "${_pOne}", "left", '490px', { fromValue: '792px'}], position: 5500, duration: 1500 },
            { id: "eid1333", tween: [ "style", "${_pOne}", "left", '490px', { fromValue: '490px'}], position: 10500, duration: 0 },
            { id: "eid207", tween: [ "style", "${_IntroPenguinRun}", "left", '850px', { fromValue: '473px'}], position: 1500, duration: 3500 },
            { id: "eid210", tween: [ "style", "${_introBowlingPenguin}", "display", 'none', { fromValue: 'block'}], position: 5957, duration: 0 },
            { id: "eid1661", tween: [ "style", "${_introView}", "left", '1px', { fromValue: '-1px'}], position: 1500, duration: 1500 },
            { id: "eid77", tween: [ "style", "${_introView}", "left", '-799px', { fromValue: '1px'}], position: 3000, duration: 4000 },
            { id: "eid209", tween: [ "style", "${_IntroPenguinRun}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid208", tween: [ "style", "${_IntroPenguinRun}", "top", '460px', { fromValue: '444px'}], position: 1500, duration: 3500 },
            { id: "eid211", tween: [ "style", "${_introArm}", "display", 'none', { fromValue: 'block'}], position: 5957, duration: 0 },
            { id: "eid1318", tween: [ "transform", "${_pointLeft}", "scaleY", '0.77504', { fromValue: '0.77504'}], position: 10500, duration: 0 },
            { id: "eid106", tween: [ "style", "${_introArm}", "left", '108px', { fromValue: '94px'}], position: 1500, duration: 250 },
            { id: "eid108", tween: [ "style", "${_introArm}", "left", '138px', { fromValue: '108px'}], position: 1750, duration: 250 },
            { id: "eid111", tween: [ "style", "${_introArm}", "left", '147px', { fromValue: '138px'}], position: 2000, duration: 250 },
            { id: "eid113", tween: [ "style", "${_introArm}", "left", '146px', { fromValue: '147px'}], position: 2250, duration: 750 },
            { id: "eid114", tween: [ "style", "${_introArm}", "left", '-427px', { fromValue: '146px'}], position: 3000, duration: 2893 },
            { id: "eid1249", tween: [ "style", "${_Holidays}", "top", '122px', { fromValue: '-29px'}], position: 2500, duration: 615 },
            { id: "eid1251", tween: [ "style", "${_Holidays}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 615 },
            { id: "eid1256", tween: [ "style", "${_Holidays}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 500 },
            { id: "eid1369", tween: [ "style", "${_JumpingSnowman}", "display", 'none', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid1370", tween: [ "style", "${_JumpingSnowman}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
            { id: "eid1239", tween: [ "style", "${_From}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 560 },
            { id: "eid1257", tween: [ "style", "${_From}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 500 },
            { id: "eid73", tween: [ "style", "${symbolSelector}", "width", '800px', { fromValue: '800px'}], position: 0, duration: 0 },
            { id: "eid1214", tween: [ "style", "${_introBowlingPenguin}", "top", '403px', { fromValue: '400px'}], position: 1500, duration: 4393 },
            { id: "eid1337", tween: [ "style", "${_pOneCopy}", "left", '578px', { fromValue: '880px'}], position: 5500, duration: 1500 },
            { id: "eid1328", tween: [ "style", "${_pOneCopy}", "left", '578px', { fromValue: '578px'}], position: 10500, duration: 0 },
            { id: "eid1261", tween: [ "style", "${_Holidays}", "display", 'none', { fromValue: 'block'}], position: 9048, duration: 0 },
            { id: "eid1322", tween: [ "style", "${_pointLeft}", "top", '474px', { fromValue: '474px'}], position: 10500, duration: 0 },
            { id: "eid1334", tween: [ "style", "${_pOne}", "top", '406px', { fromValue: '406px'}], position: 10500, duration: 0 },
            { id: "eid1335", tween: [ "style", "${_pointLeft}", "left", '578px', { fromValue: '880px'}], position: 5500, duration: 1500 },
            { id: "eid1321", tween: [ "style", "${_pointLeft}", "left", '578px', { fromValue: '578px'}], position: 10500, duration: 0 },
            { id: "eid1324", tween: [ "transform", "${_pOneCopy}", "scaleY", '0.77959', { fromValue: '0.77959'}], position: 10500, duration: 0 },
            { id: "eid1260", tween: [ "style", "${_Happy}", "display", 'none', { fromValue: 'block'}], position: 9048, duration: 0 },
            { id: "eid1317", tween: [ "transform", "${_pointLeft}", "scaleX", '0.77504', { fromValue: '0.77504'}], position: 10500, duration: 0 },
            { id: "eid1253", tween: [ "style", "${_Happy}", "top", '22px', { fromValue: '-103px'}], position: 2843, duration: 710 },
            { id: "eid1262", tween: [ "style", "${_Starz}", "display", 'none', { fromValue: 'block'}], position: 9048, duration: 0 },
            { id: "eid1245", tween: [ "style", "${_Starz}", "opacity", '1', { fromValue: '0'}], position: 3288, duration: 558 },
            { id: "eid1259", tween: [ "style", "${_Starz}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 500 },
            { id: "eid1373", tween: [ "style", "${_JumpingSnowman}", "left", '30px', { fromValue: '-140px'}], position: 7000, duration: 564 },
            { id: "eid1375", tween: [ "style", "${_JumpingSnowman}", "left", '104px', { fromValue: '30px'}], position: 8064, duration: 500 }         ]
      }
   }
},
"GameScene": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'bowlView',
      type: 'image',
      rect: ['647','259','800px','600px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bowlView.jpg','0px','0px']
   },
   {
      id: 'Pins',
      type: 'rect',
      userClass: 'gamePins',
      rect: ['369px','286px','auto','auto','auto','auto']
   },
   {
      id: 'Ball',
      type: 'rect',
      rect: ['378','490','auto','auto','auto','auto']
   },
   {
      id: 'ScoreBoard',
      type: 'rect',
      rect: ['20','29','auto','auto','auto','auto']
   },
   {
      id: 'shadow2',
      type: 'image',
      rect: ['604px','371px','106px','33px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/shadow2.png','0px','0px']
   },
   {
      id: 'snowman_game',
      type: 'rect',
      rect: ['576','221','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Pins',
      symbolName: 'penguinStack'
   },
   {
      id: 'Ball',
      symbolName: 'Ball'
   },
   {
      id: 'snowman_game',
      symbolName: 'snowman_game'
   },
   {
      id: 'ScoreBoard',
      symbolName: 'ScoreBoard'
   }   ]
   },
   states: {
      "Base State": {
         "${_Pins}": [
            ["style", "left", '367px'],
            ["style", "top", '284px']
         ],
         "${_Ball}": [
            ["style", "top", '400px'],
            ["style", "left", '93px']
         ],
         "${symbolSelector}": [
            ["style", "height", '600px'],
            ["style", "width", '800px']
         ],
         "${_snowman_game}": [
            ["transform", "scaleX", '0.5'],
            ["style", "left", '555px'],
            ["transform", "scaleY", '0.5'],
            ["style", "top", '244px']
         ],
         "${_shadow2}": [
            ["transform", "scaleX", '0.5'],
            ["style", "left", '569px'],
            ["transform", "scaleY", '0.5'],
            ["style", "top", '355px']
         ],
         "${_bowlView}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid1502", tween: [ "style", "${_snowman_game}", "left", '555px', { fromValue: '555px'}], position: 0, duration: 0 },
            { id: "eid284", tween: [ "style", "${_Pins}", "top", '284px', { fromValue: '284px'}], position: 0, duration: 0 },
            { id: "eid229", tween: [ "style", "${_Ball}", "top", '400px', { fromValue: '400px'}], position: 0, duration: 0 },
            { id: "eid1510", tween: [ "style", "${_shadow2}", "left", '569px', { fromValue: '569px'}], position: 0, duration: 0 },
            { id: "eid1507", tween: [ "transform", "${_shadow2}", "scaleY", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 },
            { id: "eid1506", tween: [ "transform", "${_shadow2}", "scaleX", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 },
            { id: "eid283", tween: [ "style", "${_Pins}", "left", '367px', { fromValue: '367px'}], position: 0, duration: 0 },
            { id: "eid65", tween: [ "style", "${symbolSelector}", "width", '800px', { fromValue: '800px'}], position: 0, duration: 0 },
            { id: "eid1509", tween: [ "style", "${_shadow2}", "top", '355px', { fromValue: '355px'}], position: 0, duration: 0 },
            { id: "eid1501", tween: [ "transform", "${_snowman_game}", "scaleY", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 },
            { id: "eid227", tween: [ "style", "${_Ball}", "left", '93px', { fromValue: '93px'}], position: 0, duration: 0 },
            { id: "eid64", tween: [ "style", "${symbolSelector}", "height", '600px', { fromValue: '600px'}], position: 0, duration: 0 },
            { id: "eid1503", tween: [ "style", "${_snowman_game}", "top", '244px', { fromValue: '244px'}], position: 0, duration: 0 },
            { id: "eid285", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Pins}', [] ], ""], position: 0 },
            { id: "eid222", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Ball}', [] ], ""], position: 0 },
            { id: "eid1511", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_snowman_game}', [] ], ""], position: 0 }         ]
      }
   }
},
"RollScene": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'hitView',
      type: 'image',
      rect: ['0px','0px','800px','600px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/hitView.jpg','0px','0px']
   },
   {
      id: 'pHit',
      type: 'rect',
      rect: ['340','430','auto','auto','auto','auto']
   },
   {
      id: 'Ball2',
      type: 'rect',
      rect: ['547','533','auto','auto','auto','auto']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'clouds',
      rect: ['273','213','auto','auto','auto','auto']
   },
   {
      id: 'leftP',
      type: 'rect',
      rect: ['319','322','auto','auto','auto','auto']
   },
   {
      id: 'roundScore',
      type: 'rect',
      rect: ['221','160','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'pHit',
      symbolName: 'pHit'
   },
   {
      id: 'roundScore',
      symbolName: 'roundScore'
   },
   {
      id: 'leftP',
      symbolName: 'leftP'
   },
   {
      id: 'Ball2',
      symbolName: 'Ball2'
   },
   {
      id: 'clouds',
      symbolName: 'clouds'
   }   ]
   },
   states: {
      "Base State": {
         "${_pHit}": [
            ["style", "top", '205px'],
            ["style", "left", '176px'],
            ["style", "display", 'block']
         ],
         "${_Ball2}": [
            ["style", "top", '7px'],
            ["transform", "scaleY", '1.12012'],
            ["style", "display", 'block'],
            ["style", "left", '6px'],
            ["transform", "scaleX", '1.12012']
         ],
         "${_clouds}": [
            ["style", "display", 'none']
         ],
         "${_hitView}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '600px'],
            ["style", "width", '800px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid346", tween: [ "style", "${_pHit}", "top", '205px', { fromValue: '205px'}], position: 0, duration: 0 },
            { id: "eid345", tween: [ "style", "${_pHit}", "left", '176px', { fromValue: '176px'}], position: 0, duration: 0 },
            { id: "eid511", tween: [ "style", "${_clouds}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid480", tween: [ "style", "${_pHit}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid1398", tween: [ "style", "${_Ball2}", "top", '7px', { fromValue: '7px'}], position: 0, duration: 0 },
            { id: "eid435", tween: [ "style", "${_Ball2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid1397", tween: [ "style", "${_Ball2}", "left", '6px', { fromValue: '6px'}], position: 0, duration: 0 },
            { id: "eid460", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Ball2}', [] ], ""], position: 0 },
            { id: "eid543", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_clouds}', [] ], ""], position: 0 },
            { id: "eid542", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_leftP}', [] ], ""], position: 0 },
            { id: "eid544", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_pHit}', [] ], ""], position: 0 }         ]
      }
   }
},
"Ball": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'shadow',
      rect: ['228px','166px','144px','84px','auto','auto'],
      transform: [[0,0],[],[],['0.8','0.8']],
      fill: ['rgba(0,0,0,0)','images/shadow.png','0px','0px']
   },
   {
      id: 'Ball',
      type: 'image',
      rect: ['250px','75px','108px','106px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Ball.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_shadow}": [
            ["transform", "scaleX", '0.8'],
            ["style", "top", '166px'],
            ["style", "left", '228px'],
            ["transform", "scaleY", '0.8']
         ],
         "${_Ball}": [
            ["style", "left", '250px'],
            ["style", "top", '75px']
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '614px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"introSign": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'sign2',
      type: 'image',
      rect: ['0px','-586px','458px','527px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/sign.png','0px','0px']
   },
   {
      id: 'introBtn',
      type: 'image',
      rect: ['155px','457px','151px','34px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/introBtn.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_sign2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_introBtn}": [
            ["style", "left", '155px'],
            ["style", "top", '457px']
         ],
         "${symbolSelector}": [
            ["style", "height", '527px'],
            ["style", "width", '458px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"IntroPenguinRun": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'runLeftFoot',
      type: 'image',
      rect: ['77px','89px','32px','19px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/runLeftFoot.png','0px','0px']
   },
   {
      id: 'runRightFoot',
      type: 'image',
      rect: ['41px','108px','42px','17px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/runRightFoot.png','0px','0px']
   },
   {
      id: 'runLeftArm',
      type: 'image',
      rect: ['68px','0px','50px','36px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/runLeftArm.png','0px','0px']
   },
   {
      id: 'penguinRunBody2',
      type: 'image',
      rect: ['0px','0px','102px','117px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/penguinRunBody2.png','0px','0px']
   },
   {
      id: 'runRightArm',
      type: 'image',
      rect: ['-22px','26px','53px','26px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/runRightArm.png','0px','0px']
   },
   {
      id: 'runHead',
      type: 'image',
      rect: ['5px','-44px','73px','58px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/runHead.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_runHead}": [
            ["style", "top", '-44px'],
            ["style", "left", '5px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_runRightArm}": [
            ["style", "top", '26px'],
            ["style", "left", '-22px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '117px'],
            ["style", "width", '102px']
         ],
         "${_runLeftFoot}": [
            ["style", "top", '89px'],
            ["style", "left", '77px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_runRightFoot}": [
            ["style", "top", '108px'],
            ["style", "left", '41px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_penguinRunBody2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_runLeftArm}": [
            ["style", "top", '0px'],
            ["style", "left", '68px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid161", tween: [ "style", "${_runRightFoot}", "top", '104px', { fromValue: '108px'}], position: 0, duration: 250 },
            { id: "eid163", tween: [ "style", "${_runRightFoot}", "top", '108px', { fromValue: '104px'}], position: 250, duration: 250 },
            { id: "eid167", tween: [ "style", "${_runRightFoot}", "top", '104px', { fromValue: '108px'}], position: 500, duration: 250 },
            { id: "eid170", tween: [ "style", "${_runRightFoot}", "top", '108px', { fromValue: '104px'}], position: 750, duration: 250 },
            { id: "eid173", tween: [ "style", "${_runRightFoot}", "top", '104px', { fromValue: '108px'}], position: 1000, duration: 250 },
            { id: "eid176", tween: [ "style", "${_runRightFoot}", "top", '108px', { fromValue: '104px'}], position: 1250, duration: 250 },
            { id: "eid179", tween: [ "style", "${_runRightFoot}", "top", '104px', { fromValue: '108px'}], position: 1500, duration: 250 },
            { id: "eid182", tween: [ "style", "${_runRightFoot}", "top", '108px', { fromValue: '104px'}], position: 1750, duration: 250 },
            { id: "eid118", tween: [ "transform", "${_runHead}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 0, duration: 500 },
            { id: "eid119", tween: [ "transform", "${_runHead}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 500, duration: 500 },
            { id: "eid120", tween: [ "transform", "${_runHead}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
            { id: "eid121", tween: [ "transform", "${_runHead}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 1500, duration: 500 },
            { id: "eid123", tween: [ "transform", "${_runRightArm}", "rotateZ", '36deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid126", tween: [ "transform", "${_runRightArm}", "rotateZ", '19deg', { fromValue: '36deg'}], position: 250, duration: 250 },
            { id: "eid128", tween: [ "transform", "${_runRightArm}", "rotateZ", '37deg', { fromValue: '19deg'}], position: 500, duration: 250 },
            { id: "eid131", tween: [ "transform", "${_runRightArm}", "rotateZ", '-1deg', { fromValue: '37deg'}], position: 750, duration: 250 },
            { id: "eid134", tween: [ "transform", "${_runRightArm}", "rotateZ", '36deg', { fromValue: '-1deg'}], position: 1000, duration: 500 },
            { id: "eid138", tween: [ "transform", "${_runRightArm}", "rotateZ", '0deg', { fromValue: '36deg'}], position: 1500, duration: 500 },
            { id: "eid124", tween: [ "style", "${_runRightArm}", "left", '-20px', { fromValue: '-22px'}], position: 0, duration: 250 },
            { id: "eid130", tween: [ "style", "${_runRightArm}", "left", '-19px', { fromValue: '-20px'}], position: 250, duration: 500 },
            { id: "eid132", tween: [ "style", "${_runRightArm}", "left", '-22px', { fromValue: '-19px'}], position: 750, duration: 250 },
            { id: "eid135", tween: [ "style", "${_runRightArm}", "left", '-21px', { fromValue: '-22px'}], position: 1000, duration: 500 },
            { id: "eid139", tween: [ "style", "${_runRightArm}", "left", '-22px', { fromValue: '-21px'}], position: 1500, duration: 500 },
            { id: "eid141", tween: [ "transform", "${_runLeftArm}", "rotateZ", '-32deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid144", tween: [ "transform", "${_runLeftArm}", "rotateZ", '0deg', { fromValue: '-32deg'}], position: 250, duration: 250 },
            { id: "eid147", tween: [ "transform", "${_runLeftArm}", "rotateZ", '-36deg', { fromValue: '0deg'}], position: 500, duration: 250 },
            { id: "eid150", tween: [ "transform", "${_runLeftArm}", "rotateZ", '0deg', { fromValue: '-36deg'}], position: 750, duration: 250 },
            { id: "eid153", tween: [ "transform", "${_runLeftArm}", "rotateZ", '-40deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
            { id: "eid156", tween: [ "transform", "${_runLeftArm}", "rotateZ", '0deg', { fromValue: '-40deg'}], position: 1500, duration: 500 },
            { id: "eid125", tween: [ "style", "${_runRightArm}", "top", '16px', { fromValue: '26px'}], position: 0, duration: 250 },
            { id: "eid127", tween: [ "style", "${_runRightArm}", "top", '23px', { fromValue: '16px'}], position: 250, duration: 250 },
            { id: "eid129", tween: [ "style", "${_runRightArm}", "top", '16px', { fromValue: '23px'}], position: 500, duration: 250 },
            { id: "eid133", tween: [ "style", "${_runRightArm}", "top", '26px', { fromValue: '16px'}], position: 750, duration: 250 },
            { id: "eid136", tween: [ "style", "${_runRightArm}", "top", '13px', { fromValue: '26px'}], position: 1000, duration: 500 },
            { id: "eid140", tween: [ "style", "${_runRightArm}", "top", '26px', { fromValue: '13px'}], position: 1500, duration: 500 },
            { id: "eid183", tween: [ "transform", "${_runLeftFoot}", "rotateZ", '25deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid186", tween: [ "transform", "${_runLeftFoot}", "rotateZ", '0deg', { fromValue: '25deg'}], position: 250, duration: 250 },
            { id: "eid189", tween: [ "transform", "${_runLeftFoot}", "rotateZ", '20deg', { fromValue: '0deg'}], position: 500, duration: 250 },
            { id: "eid192", tween: [ "transform", "${_runLeftFoot}", "rotateZ", '0deg', { fromValue: '20deg'}], position: 750, duration: 250 },
            { id: "eid195", tween: [ "transform", "${_runLeftFoot}", "rotateZ", '20deg', { fromValue: '0deg'}], position: 1000, duration: 250 },
            { id: "eid198", tween: [ "transform", "${_runLeftFoot}", "rotateZ", '0deg', { fromValue: '20deg'}], position: 1250, duration: 250 },
            { id: "eid201", tween: [ "transform", "${_runLeftFoot}", "rotateZ", '20deg', { fromValue: '0deg'}], position: 1500, duration: 250 },
            { id: "eid204", tween: [ "transform", "${_runLeftFoot}", "rotateZ", '0deg', { fromValue: '20deg'}], position: 1750, duration: 250 },
            { id: "eid185", tween: [ "style", "${_runLeftFoot}", "top", '108px', { fromValue: '89px'}], position: 0, duration: 250 },
            { id: "eid188", tween: [ "style", "${_runLeftFoot}", "top", '89px', { fromValue: '108px'}], position: 250, duration: 250 },
            { id: "eid191", tween: [ "style", "${_runLeftFoot}", "top", '107px', { fromValue: '89px'}], position: 500, duration: 250 },
            { id: "eid194", tween: [ "style", "${_runLeftFoot}", "top", '89px', { fromValue: '107px'}], position: 750, duration: 250 },
            { id: "eid197", tween: [ "style", "${_runLeftFoot}", "top", '107px', { fromValue: '89px'}], position: 1000, duration: 250 },
            { id: "eid200", tween: [ "style", "${_runLeftFoot}", "top", '89px', { fromValue: '107px'}], position: 1250, duration: 250 },
            { id: "eid203", tween: [ "style", "${_runLeftFoot}", "top", '107px', { fromValue: '89px'}], position: 1500, duration: 250 },
            { id: "eid206", tween: [ "style", "${_runLeftFoot}", "top", '89px', { fromValue: '107px'}], position: 1750, duration: 250 },
            { id: "eid184", tween: [ "style", "${_runLeftFoot}", "left", '44px', { fromValue: '77px'}], position: 0, duration: 250 },
            { id: "eid187", tween: [ "style", "${_runLeftFoot}", "left", '77px', { fromValue: '44px'}], position: 250, duration: 250 },
            { id: "eid190", tween: [ "style", "${_runLeftFoot}", "left", '43px', { fromValue: '77px'}], position: 500, duration: 250 },
            { id: "eid193", tween: [ "style", "${_runLeftFoot}", "left", '77px', { fromValue: '43px'}], position: 750, duration: 250 },
            { id: "eid196", tween: [ "style", "${_runLeftFoot}", "left", '43px', { fromValue: '77px'}], position: 1000, duration: 250 },
            { id: "eid199", tween: [ "style", "${_runLeftFoot}", "left", '77px', { fromValue: '43px'}], position: 1250, duration: 250 },
            { id: "eid202", tween: [ "style", "${_runLeftFoot}", "left", '43px', { fromValue: '77px'}], position: 1500, duration: 250 },
            { id: "eid205", tween: [ "style", "${_runLeftFoot}", "left", '77px', { fromValue: '43px'}], position: 1750, duration: 250 },
            { id: "eid142", tween: [ "style", "${_runLeftArm}", "left", '56px', { fromValue: '68px'}], position: 0, duration: 250 },
            { id: "eid145", tween: [ "style", "${_runLeftArm}", "left", '59px', { fromValue: '56px'}], position: 250, duration: 250 },
            { id: "eid148", tween: [ "style", "${_runLeftArm}", "left", '53px', { fromValue: '59px'}], position: 500, duration: 250 },
            { id: "eid151", tween: [ "style", "${_runLeftArm}", "left", '62px', { fromValue: '53px'}], position: 750, duration: 250 },
            { id: "eid154", tween: [ "style", "${_runLeftArm}", "left", '55px', { fromValue: '62px'}], position: 1000, duration: 500 },
            { id: "eid157", tween: [ "style", "${_runLeftArm}", "left", '68px', { fromValue: '55px'}], position: 1500, duration: 500 },
            { id: "eid143", tween: [ "style", "${_runLeftArm}", "top", '-4px', { fromValue: '0px'}], position: 0, duration: 250 },
            { id: "eid146", tween: [ "style", "${_runLeftArm}", "top", '0px', { fromValue: '-4px'}], position: 250, duration: 250 },
            { id: "eid149", tween: [ "style", "${_runLeftArm}", "top", '-4px', { fromValue: '0px'}], position: 500, duration: 250 },
            { id: "eid152", tween: [ "style", "${_runLeftArm}", "top", '1px', { fromValue: '-4px'}], position: 750, duration: 250 },
            { id: "eid155", tween: [ "style", "${_runLeftArm}", "top", '-3px', { fromValue: '1px'}], position: 1000, duration: 500 },
            { id: "eid158", tween: [ "style", "${_runLeftArm}", "top", '0px', { fromValue: '-3px'}], position: 1500, duration: 500 },
            { id: "eid159", tween: [ "transform", "${_runRightFoot}", "rotateZ", '-13deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid164", tween: [ "transform", "${_runRightFoot}", "rotateZ", '0deg', { fromValue: '-13deg'}], position: 250, duration: 250 },
            { id: "eid165", tween: [ "transform", "${_runRightFoot}", "rotateZ", '-13deg', { fromValue: '0deg'}], position: 500, duration: 250 },
            { id: "eid168", tween: [ "transform", "${_runRightFoot}", "rotateZ", '0deg', { fromValue: '-13deg'}], position: 750, duration: 250 },
            { id: "eid171", tween: [ "transform", "${_runRightFoot}", "rotateZ", '-13deg', { fromValue: '0deg'}], position: 1000, duration: 250 },
            { id: "eid174", tween: [ "transform", "${_runRightFoot}", "rotateZ", '0deg', { fromValue: '-13deg'}], position: 1250, duration: 250 },
            { id: "eid177", tween: [ "transform", "${_runRightFoot}", "rotateZ", '-13deg', { fromValue: '0deg'}], position: 1500, duration: 250 },
            { id: "eid180", tween: [ "transform", "${_runRightFoot}", "rotateZ", '0deg', { fromValue: '-13deg'}], position: 1750, duration: 250 },
            { id: "eid160", tween: [ "style", "${_runRightFoot}", "left", '56px', { fromValue: '41px'}], position: 0, duration: 250 },
            { id: "eid162", tween: [ "style", "${_runRightFoot}", "left", '41px', { fromValue: '56px'}], position: 250, duration: 250 },
            { id: "eid166", tween: [ "style", "${_runRightFoot}", "left", '56px', { fromValue: '41px'}], position: 500, duration: 250 },
            { id: "eid169", tween: [ "style", "${_runRightFoot}", "left", '41px', { fromValue: '56px'}], position: 750, duration: 250 },
            { id: "eid172", tween: [ "style", "${_runRightFoot}", "left", '56px', { fromValue: '41px'}], position: 1000, duration: 250 },
            { id: "eid175", tween: [ "style", "${_runRightFoot}", "left", '41px', { fromValue: '56px'}], position: 1250, duration: 250 },
            { id: "eid178", tween: [ "style", "${_runRightFoot}", "left", '56px', { fromValue: '41px'}], position: 1500, duration: 250 },
            { id: "eid181", tween: [ "style", "${_runRightFoot}", "left", '41px', { fromValue: '56px'}], position: 1750, duration: 250 }         ]
      }
   }
},
"penguinStack": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pb10',
      type: 'rect',
      rect: ['58','10','auto','auto','auto','auto']
   },
   {
      id: 'pb9',
      type: 'rect',
      rect: ['39','10','auto','auto','auto','auto']
   },
   {
      id: 'pb8',
      type: 'rect',
      rect: ['19','10','auto','auto','auto','auto']
   },
   {
      id: 'pb7',
      type: 'rect',
      rect: ['0','17px','auto','auto','auto','auto']
   },
   {
      id: 'pb6',
      type: 'rect',
      rect: ['48','17','auto','auto','auto','auto']
   },
   {
      id: 'pb5',
      type: 'rect',
      rect: ['29','17','auto','auto','auto','auto']
   },
   {
      id: 'pb4',
      type: 'rect',
      rect: ['10px','21px','auto','auto','auto','auto']
   },
   {
      id: 'pb3',
      type: 'rect',
      rect: ['39','21','auto','auto','auto','auto']
   },
   {
      id: 'pb2',
      type: 'rect',
      rect: ['20px','22px','auto','auto','auto','auto']
   },
   {
      id: 'pb1',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'pb1',
      symbolName: 'penguinBowl'
   },
   {
      id: 'pb3',
      symbolName: 'penguinBowl'
   },
   {
      id: 'pb5',
      symbolName: 'penguinBowl'
   },
   {
      id: 'pb9',
      symbolName: 'penguinBowl'
   },
   {
      id: 'pb7',
      symbolName: 'penguinBowl'
   },
   {
      id: 'pb10',
      symbolName: 'penguinBowl'
   },
   {
      id: 'pb2',
      symbolName: 'penguinBowl'
   },
   {
      id: 'pb4',
      symbolName: 'penguinBowl'
   },
   {
      id: 'pb6',
      symbolName: 'penguinBowl'
   },
   {
      id: 'pb8',
      symbolName: 'penguinBowl'
   }   ]
   },
   states: {
      "Base State": {
         "${_pb3}": [
            ["style", "display", 'block']
         ],
         "${_pb7}": [
            ["style", "top", '10px'],
            ["style", "display", 'block']
         ],
         "${_pb1}": [
            ["style", "top", '26px'],
            ["style", "left", '29px'],
            ["style", "display", 'block']
         ],
         "${_pb2}": [
            ["style", "top", '21px'],
            ["style", "left", '19px'],
            ["style", "display", 'block']
         ],
         "${_pb4}": [
            ["style", "top", '17px'],
            ["style", "left", '9px'],
            ["style", "display", 'block']
         ],
         "${_pb6}": [
            ["style", "display", 'block']
         ],
         "${symbolSelector}": [
            ["style", "height", '44px'],
            ["style", "width", '78px']
         ],
         "${_pb9}": [
            ["style", "display", 'block']
         ],
         "${_pb5}": [
            ["style", "display", 'block']
         ],
         "${_pb10}": [
            ["style", "display", 'block']
         ],
         "${_pb8}": [
            ["style", "display", 'block']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
            { id: "eid271", tween: [ "style", "${_pb2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid266", tween: [ "style", "${_pb7}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid269", tween: [ "style", "${_pb4}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid267", tween: [ "style", "${_pb6}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid268", tween: [ "style", "${_pb5}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid270", tween: [ "style", "${_pb3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid272", tween: [ "style", "${_pb1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid264", tween: [ "style", "${_pb9}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid265", tween: [ "style", "${_pb8}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid263", tween: [ "style", "${_pb10}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid273", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_pb1}', [] ], ""], position: 0 },
            { id: "eid281", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_pb2}', [] ], ""], position: 0 },
            { id: "eid279", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_pb3}', [] ], ""], position: 0 },
            { id: "eid280", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_pb4}', [] ], ""], position: 0 },
            { id: "eid278", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_pb5}', [] ], ""], position: 0 },
            { id: "eid274", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_pb6}', [] ], ""], position: 0 },
            { id: "eid275", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_pb7}', [] ], ""], position: 0 },
            { id: "eid276", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_pb8}', [] ], ""], position: 0 },
            { id: "eid277", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_pb9}', [] ], ""], position: 0 },
            { id: "eid282", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_pb10}', [] ], ""], position: 0 }         ]
      }
   }
},
"penguinBowl": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'penguinBowlRight',
      type: 'image',
      rect: ['-5px','0px','9px','4px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/penguinBowlRight.png','0px','0px']
   },
   {
      id: 'penguinBowlLeft',
      type: 'image',
      rect: ['14px','0px','9px','4px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/penguinBowlLeft.png','0px','0px']
   },
   {
      id: 'penguinBowlBody',
      type: 'image',
      rect: ['0px','0px','19px','18px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/penguinBowlBody.png','0px','0px']
   },
   {
      id: 'penguinBowlHead',
      type: 'image',
      rect: ['4px','-9px','12px','9px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/penguinBowlHead.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_penguinBowlRight}": [
            ["style", "top", '0px'],
            ["style", "left", '-5px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_penguinBowlHead}": [
            ["style", "left", '4px'],
            ["style", "top", '-9px']
         ],
         "${symbolSelector}": [
            ["style", "height", '18px'],
            ["style", "width", '19px']
         ],
         "${_penguinBowlLeft}": [
            ["style", "top", '0px'],
            ["style", "left", '14px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_penguinBowlBody}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         timeline: [
            { id: "eid256", tween: [ "style", "${_penguinBowlLeft}", "top", '-1px', { fromValue: '0px'}], position: 0, duration: 250 },
            { id: "eid262", tween: [ "style", "${_penguinBowlLeft}", "top", '0px', { fromValue: '-1px'}], position: 250, duration: 250 },
            { id: "eid249", tween: [ "style", "${_penguinBowlRight}", "top", '-1px', { fromValue: '0px'}], position: 0, duration: 250 },
            { id: "eid259", tween: [ "style", "${_penguinBowlRight}", "top", '0px', { fromValue: '-1px'}], position: 250, duration: 250 },
            { id: "eid253", tween: [ "style", "${_penguinBowlLeft}", "left", '13px', { fromValue: '14px'}], position: 0, duration: 250 },
            { id: "eid261", tween: [ "style", "${_penguinBowlLeft}", "left", '14px', { fromValue: '13px'}], position: 250, duration: 250 },
            { id: "eid251", tween: [ "transform", "${_penguinBowlLeft}", "rotateZ", '-20deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid260", tween: [ "transform", "${_penguinBowlLeft}", "rotateZ", '0deg', { fromValue: '-20deg'}], position: 250, duration: 250 },
            { id: "eid250", tween: [ "style", "${_penguinBowlRight}", "left", '-4px', { fromValue: '-5px'}], position: 0, duration: 250 },
            { id: "eid258", tween: [ "style", "${_penguinBowlRight}", "left", '-5px', { fromValue: '-4px'}], position: 250, duration: 250 },
            { id: "eid248", tween: [ "transform", "${_penguinBowlRight}", "rotateZ", '19deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid257", tween: [ "transform", "${_penguinBowlRight}", "rotateZ", '0deg', { fromValue: '19deg'}], position: 250, duration: 250 }         ]
      }
   }
},
"pHit": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'p10',
      type: 'rect',
      rect: ['198px','214px','auto','auto','auto','auto']
   },
   {
      id: 'p9',
      type: 'rect',
      rect: ['198px','214px','auto','auto','auto','auto']
   },
   {
      id: 'p8',
      type: 'rect',
      rect: ['198px','214px','auto','auto','auto','auto']
   },
   {
      id: 'p7',
      type: 'rect',
      rect: ['198px','214px','auto','auto','auto','auto']
   },
   {
      id: 'p6',
      type: 'rect',
      rect: ['198px','214px','auto','auto','auto','auto']
   },
   {
      id: 'p5',
      type: 'rect',
      rect: ['198px','214px','auto','auto','auto','auto']
   },
   {
      id: 'p4',
      type: 'rect',
      rect: ['198px','214px','auto','auto','auto','auto']
   },
   {
      id: 'p3',
      type: 'rect',
      rect: ['198px','214px','auto','auto','auto','auto']
   },
   {
      id: 'p2',
      type: 'rect',
      rect: ['198','214','auto','auto','auto','auto']
   },
   {
      id: 'p1',
      type: 'rect',
      rect: ['198px','214px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'p8',
      symbolName: 'penguinHit'
   },
   {
      id: 'p9',
      symbolName: 'penguinHit'
   },
   {
      id: 'p7',
      symbolName: 'penguinHit'
   },
   {
      id: 'p6',
      symbolName: 'penguinHit'
   },
   {
      id: 'p5',
      symbolName: 'penguinHit'
   },
   {
      id: 'p4',
      symbolName: 'penguinHit'
   },
   {
      id: 'p2',
      symbolName: 'penguinHit'
   },
   {
      id: 'p3',
      symbolName: 'penguinHit'
   },
   {
      id: 'p1',
      symbolName: 'penguinHit'
   },
   {
      id: 'p10',
      symbolName: 'penguinHit'
   }   ]
   },
   states: {
      "Base State": {
         "${_p7}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_p1}": [
            ["style", "top", '117px'],
            ["style", "left", '143px']
         ],
         "${_p9}": [
            ["style", "top", '0px'],
            ["style", "left", '174px']
         ],
         "${_p10}": [
            ["style", "top", '0px'],
            ["style", "left", '256px']
         ],
         "${_p5}": [
            ["style", "top", '39px'],
            ["style", "left", '143px']
         ],
         "${_p4}": [
            ["style", "top", '39px'],
            ["style", "left", '42px']
         ],
         "${symbolSelector}": [
            ["style", "height", '313px'],
            ["style", "width", '458px']
         ],
         "${_p6}": [
            ["style", "top", '39px'],
            ["style", "left", '229px']
         ],
         "${_p8}": [
            ["style", "top", '0px'],
            ["style", "left", '84px']
         ],
         "${_p2}": [
            ["style", "top", '70px'],
            ["style", "left", '90px']
         ],
         "${_p3}": [
            ["style", "top", '70px'],
            ["style", "left", '191px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
            { id: "eid419", tween: [ "style", "${_p1}", "top", '117px', { fromValue: '117px'}], position: 0, duration: 0 },
            { id: "eid411", tween: [ "style", "${_p4}", "left", '42px', { fromValue: '42px'}], position: 0, duration: 0 },
            { id: "eid420", tween: [ "style", "${_p1}", "left", '143px', { fromValue: '143px'}], position: 0, duration: 0 },
            { id: "eid415", tween: [ "style", "${_p3}", "left", '191px', { fromValue: '191px'}], position: 0, duration: 0 },
            { id: "eid417", tween: [ "style", "${_p2}", "left", '90px', { fromValue: '90px'}], position: 0, duration: 0 },
            { id: "eid410", tween: [ "style", "${_p4}", "top", '39px', { fromValue: '39px'}], position: 0, duration: 0 },
            { id: "eid412", tween: [ "style", "${_p5}", "top", '39px', { fromValue: '39px'}], position: 0, duration: 0 },
            { id: "eid399", tween: [ "style", "${_p7}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid408", tween: [ "style", "${_p10}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid390", tween: [ "style", "${_p5}", "left", '143px', { fromValue: '143px'}], position: 0, duration: 0 },
            { id: "eid416", tween: [ "style", "${_p3}", "top", '70px', { fromValue: '70px'}], position: 0, duration: 0 },
            { id: "eid401", tween: [ "style", "${_p8}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid400", tween: [ "style", "${_p7}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid418", tween: [ "style", "${_p2}", "top", '70px', { fromValue: '70px'}], position: 0, duration: 0 },
            { id: "eid414", tween: [ "style", "${_p6}", "top", '39px', { fromValue: '39px'}], position: 0, duration: 0 },
            { id: "eid413", tween: [ "style", "${_p6}", "left", '229px', { fromValue: '229px'}], position: 0, duration: 0 },
            { id: "eid409", tween: [ "style", "${_p10}", "left", '256px', { fromValue: '256px'}], position: 0, duration: 0 },
            { id: "eid404", tween: [ "style", "${_p9}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid406", tween: [ "style", "${_p9}", "left", '174px', { fromValue: '174px'}], position: 0, duration: 0 },
            { id: "eid403", tween: [ "style", "${_p8}", "left", '84px', { fromValue: '84px'}], position: 0, duration: 0 }         ]
      }
   }
},
"pOne": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pRArm',
      type: 'image',
      rect: ['14px','74px','55px','24px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pRArm.png','0px','0px']
   },
   {
      id: 'pLArm',
      type: 'image',
      rect: ['128px','74px','56px','24px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pLArm.png','0px','0px']
   },
   {
      id: 'pBody',
      type: 'image',
      rect: ['42px','67px','120px','115px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pBody.png','0px','0px']
   },
   {
      id: 'pHead',
      type: 'image',
      rect: ['64px','19px','75px','55px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pHead.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pHead}": [
            ["style", "left", '64px'],
            ["style", "top", '19px']
         ],
         "${_pRArm}": [
            ["style", "top", '74px'],
            ["style", "left", '14px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '202px'],
            ["style", "width", '202px']
         ],
         "${_pBody}": [
            ["style", "left", '42px'],
            ["style", "top", '67px']
         ],
         "${_pLArm}": [
            ["style", "top", '74px'],
            ["style", "left", '128px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         timeline: [
            { id: "eid290", tween: [ "style", "${_pLArm}", "left", '127px', { fromValue: '128px'}], position: 0, duration: 250 },
            { id: "eid297", tween: [ "style", "${_pLArm}", "left", '128px', { fromValue: '127px'}], position: 250, duration: 250 },
            { id: "eid292", tween: [ "transform", "${_pRArm}", "rotateZ", '20deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid294", tween: [ "transform", "${_pRArm}", "rotateZ", '0deg', { fromValue: '20deg'}], position: 250, duration: 250 },
            { id: "eid289", tween: [ "transform", "${_pLArm}", "rotateZ", '-24deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid296", tween: [ "transform", "${_pLArm}", "rotateZ", '0deg', { fromValue: '-24deg'}], position: 250, duration: 250 },
            { id: "eid291", tween: [ "style", "${_pLArm}", "top", '62px', { fromValue: '74px'}], position: 0, duration: 250 },
            { id: "eid298", tween: [ "style", "${_pLArm}", "top", '74px', { fromValue: '62px'}], position: 250, duration: 250 },
            { id: "eid293", tween: [ "style", "${_pRArm}", "top", '62px', { fromValue: '74px'}], position: 0, duration: 250 },
            { id: "eid295", tween: [ "style", "${_pRArm}", "top", '74px', { fromValue: '62px'}], position: 250, duration: 250 }         ]
      }
   }
},
"Ball2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['40px','608px','108px','106px','auto','auto'],
      id: 'Ball',
      userClass: 'ballRoll',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Ball.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ball}": [
            ["style", "top", '2px'],
            ["style", "height", '106px'],
            ["style", "display", 'block'],
            ["style", "background-size", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '0px'],
            ["style", "width", '108px']
         ],
         "${symbolSelector}": [
            ["style", "height", '109px'],
            ["style", "width", '108px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid459", tween: [ "style", "${_Ball}", "width", '108px', { fromValue: '108px'}], position: 0, duration: 0 },
            { id: "eid352", tween: [ "style", "${_Ball}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid458", tween: [ "style", "${_Ball}", "height", '106px', { fromValue: '106px'}], position: 0, duration: 0 },
            { id: "eid445", tween: [ "style", "${_Ball}", "background-size", [100,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,100]}], position: 0, duration: 0 }         ]
      }
   }
},
"penguinHit": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'ph1',
      type: 'rect',
      rect: ['-133px','-121px','auto','auto','auto','auto']
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['52','66','auto','auto','auto','auto'],
      id: 'ph2'
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['41','57','auto','auto','auto','auto'],
      id: 'ph3'
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['41','55','auto','auto','auto','auto'],
      id: 'ph4'
   }],
   symbolInstances: [
   {
      id: 'ph4',
      symbolName: 'pointLeft'
   },
   {
      id: 'ph1',
      symbolName: 'pOne'
   },
   {
      id: 'ph2',
      symbolName: 'pRock'
   },
   {
      id: 'ph3',
      symbolName: 'pointRight'
   }   ]
   },
   states: {
      "Base State": {
         "${_ph2}": [
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '202px'],
            ["style", "width", '202px']
         ],
         "${_ph1}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_ph3}": [
            ["style", "display", 'none']
         ],
         "${_ph4}": [
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid1140", tween: [ "style", "${_ph1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid1155", tween: [ "style", "${_ph2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid342", tween: [ "style", "${_ph1}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid1164", tween: [ "style", "${_ph3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid333", tween: [ "style", "${_ph1}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid1167", tween: [ "style", "${_ph4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
      }
   }
},
"clouds": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pc7',
      type: 'rect',
      rect: ['429px','428px','auto','auto','auto','auto']
   },
   {
      id: 'pc6',
      type: 'rect',
      rect: ['616px','413px','auto','auto','auto','auto']
   },
   {
      id: 'pc9',
      type: 'rect',
      rect: ['438','370','auto','auto','auto','auto']
   },
   {
      id: 'pc10',
      type: 'rect',
      rect: ['657','466','auto','auto','auto','auto']
   },
   {
      id: 'pc3',
      type: 'rect',
      rect: ['341','95','auto','auto','auto','auto']
   },
   {
      id: 'pc5',
      type: 'rect',
      rect: ['350','345','auto','auto','auto','auto']
   },
   {
      id: 'pc4',
      type: 'rect',
      rect: ['192px','366px','auto','auto','auto','auto']
   },
   {
      id: 'cloud3',
      type: 'image',
      rect: ['-84px','11px','223px','207px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cloud3.png','0px','0px']
   },
   {
      id: 'cloud2',
      type: 'image',
      rect: ['139px','27px','223px','207px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cloud2.png','0px','0px']
   },
   {
      id: 'pc8',
      type: 'rect',
      rect: ['315px','409px','auto','auto','auto','auto']
   },
   {
      id: 'pc2',
      type: 'rect',
      rect: ['90px','277px','auto','auto','auto','auto']
   },
   {
      id: 'pc1',
      type: 'rect',
      rect: ['433px','263px','auto','auto','auto','auto']
   },
   {
      id: 'cloud1',
      type: 'image',
      rect: ['5px','18px','277px','284px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cloud1.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'pc4',
      symbolName: 'ph4'
   },
   {
      id: 'pc3',
      symbolName: 'ph4'
   },
   {
      id: 'pc9',
      symbolName: 'phOne'
   },
   {
      id: 'pc5',
      symbolName: 'ph3'
   },
   {
      id: 'pc1',
      symbolName: 'phOne'
   },
   {
      id: 'pc7',
      symbolName: 'phit2'
   },
   {
      id: 'pc2',
      symbolName: 'phit2'
   },
   {
      id: 'pc10',
      symbolName: 'phit2'
   },
   {
      id: 'pc8',
      symbolName: 'ph4'
   },
   {
      id: 'pc6',
      symbolName: 'ph3'
   }   ]
   },
   states: {
      "Base State": {
         "${_pc4}": [
            ["style", "top", '118px'],
            ["transform", "scaleY", '0.8431'],
            ["transform", "rotateZ", '-83deg'],
            ["transform", "scaleX", '0.8431'],
            ["style", "left", '-69px']
         ],
         "${_pc2}": [
            ["style", "top", '127px'],
            ["transform", "scaleY", '0.8431'],
            ["transform", "rotateZ", '26deg'],
            ["transform", "scaleX", '0.8431'],
            ["style", "left", '8px']
         ],
         "${_pc6}": [
            ["style", "top", '68px'],
            ["transform", "scaleY", '0.82'],
            ["transform", "rotateZ", '-26deg'],
            ["transform", "scaleX", '0.82'],
            ["style", "left", '206px']
         ],
         "${_pc7}": [
            ["style", "top", '52px'],
            ["transform", "scaleY", '0.8431'],
            ["transform", "rotateZ", '-14deg'],
            ["transform", "scaleX", '0.8431'],
            ["style", "left", '-87px']
         ],
         "${_pc1}": [
            ["style", "top", '175px'],
            ["transform", "scaleY", '0.8431'],
            ["transform", "rotateZ", '-15deg'],
            ["transform", "scaleX", '0.8431'],
            ["style", "left", '131px']
         ],
         "${_pc10}": [
            ["transform", "scaleX", '0.78551'],
            ["transform", "scaleY", '0.78551'],
            ["style", "left", '244px'],
            ["style", "top", '128px']
         ],
         "${symbolSelector}": [
            ["style", "height", '284px'],
            ["style", "width", '277px']
         ],
         "${_pc5}": [
            ["style", "top", '35px'],
            ["transform", "scaleY", '0.77'],
            ["transform", "rotateZ", '55deg'],
            ["transform", "scaleX", '0.77'],
            ["style", "left", '80px']
         ],
         "${_cloud1}": [
            ["style", "top", '18px'],
            ["style", "left", '5px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_cloud3}": [
            ["style", "top", '11px'],
            ["style", "left", '-84px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_pc3}": [
            ["style", "top", '-2px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "rotateZ", '-20deg'],
            ["transform", "scaleX", '0.7'],
            ["style", "left", '168px']
         ],
         "${_pc9}": [
            ["style", "top", '52px'],
            ["transform", "scaleY", '0.8431'],
            ["transform", "rotateZ", '-31deg'],
            ["transform", "scaleX", '0.8431'],
            ["style", "left", '206px']
         ],
         "${_cloud2}": [
            ["style", "top", '11px'],
            ["style", "left", '144px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_pc8}": [
            ["transform", "scaleX", '0.66'],
            ["transform", "scaleY", '0.66'],
            ["style", "left", '18px'],
            ["style", "top", '59px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid485", tween: [ "transform", "${_cloud2}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 0, duration: 500 },
            { id: "eid486", tween: [ "transform", "${_cloud2}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 500, duration: 500 },
            { id: "eid1000", tween: [ "transform", "${_pc1}", "rotateZ", '-15deg', { fromValue: '-15deg'}], position: 0, duration: 0 },
            { id: "eid935", tween: [ "transform", "${_pc5}", "scaleY", '0.77', { fromValue: '0.77'}], position: 0, duration: 0 },
            { id: "eid1077", tween: [ "style", "${_pc6}", "top", '29px', { fromValue: '68px'}], position: 0, duration: 250 },
            { id: "eid1135", tween: [ "style", "${_pc6}", "top", '38px', { fromValue: '29px'}], position: 250, duration: 250 },
            { id: "eid1079", tween: [ "style", "${_pc6}", "top", '26px', { fromValue: '38px'}], position: 500, duration: 500 },
            { id: "eid1063", tween: [ "style", "${_pc3}", "left", '183px', { fromValue: '168px'}], position: 0, duration: 250 },
            { id: "eid1124", tween: [ "style", "${_pc3}", "left", '180px', { fromValue: '183px'}], position: 250, duration: 250 },
            { id: "eid1065", tween: [ "style", "${_pc3}", "left", '205px', { fromValue: '180px'}], position: 500, duration: 500 },
            { id: "eid983", tween: [ "transform", "${_pc9}", "scaleX", '0.8431', { fromValue: '0.8431'}], position: 0, duration: 0 },
            { id: "eid1049", tween: [ "style", "${_pc2}", "top", '140px', { fromValue: '127px'}], position: 0, duration: 308 },
            { id: "eid1108", tween: [ "style", "${_pc2}", "top", '148px', { fromValue: '140px'}], position: 308, duration: 192 },
            { id: "eid1050", tween: [ "style", "${_pc2}", "top", '139px', { fromValue: '148px'}], position: 500, duration: 250 },
            { id: "eid1109", tween: [ "style", "${_pc2}", "top", '152px', { fromValue: '139px'}], position: 750, duration: 250 },
            { id: "eid944", tween: [ "transform", "${_pc6}", "scaleY", '0.82', { fromValue: '0.82'}], position: 0, duration: 0 },
            { id: "eid1011", tween: [ "transform", "${_pc8}", "scaleY", '0.66', { fromValue: '0.66'}], position: 0, duration: 0 },
            { id: "eid949", tween: [ "transform", "${_pc7}", "rotateZ", '-14deg', { fromValue: '-14deg'}], position: 0, duration: 0 },
            { id: "eid924", tween: [ "transform", "${_pc4}", "rotateZ", '-83deg', { fromValue: '-83deg'}], position: 0, duration: 0 },
            { id: "eid502", tween: [ "style", "${_cloud3}", "top", '-30px', { fromValue: '11px'}], position: 0, duration: 250 },
            { id: "eid505", tween: [ "style", "${_cloud3}", "top", '24px', { fromValue: '-30px'}], position: 250, duration: 250 },
            { id: "eid508", tween: [ "style", "${_cloud3}", "top", '57px', { fromValue: '24px'}], position: 500, duration: 250 },
            { id: "eid510", tween: [ "style", "${_cloud3}", "top", '11px', { fromValue: '57px'}], position: 750, duration: 250 },
            { id: "eid928", tween: [ "transform", "${_pc4}", "scaleY", '0.8431', { fromValue: '0.8431'}], position: 0, duration: 0 },
            { id: "eid927", tween: [ "transform", "${_pc4}", "scaleX", '0.8431', { fromValue: '0.8431'}], position: 0, duration: 0 },
            { id: "eid1071", tween: [ "style", "${_pc9}", "top", '97px', { fromValue: '52px'}], position: 0, duration: 250 },
            { id: "eid1131", tween: [ "style", "${_pc9}", "top", '76px', { fromValue: '97px'}], position: 250, duration: 250 },
            { id: "eid1075", tween: [ "style", "${_pc9}", "top", '76px', { fromValue: '76px'}], position: 500, duration: 250 },
            { id: "eid1133", tween: [ "style", "${_pc9}", "top", '94px', { fromValue: '76px'}], position: 750, duration: 250 },
            { id: "eid482", tween: [ "style", "${_cloud2}", "top", '73px', { fromValue: '11px'}], position: 0, duration: 250 },
            { id: "eid495", tween: [ "style", "${_cloud2}", "top", '70px', { fromValue: '73px'}], position: 250, duration: 250 },
            { id: "eid484", tween: [ "style", "${_cloud2}", "top", '-11px', { fromValue: '70px'}], position: 500, duration: 250 },
            { id: "eid497", tween: [ "style", "${_cloud2}", "top", '11px', { fromValue: '-11px'}], position: 750, duration: 250 },
            { id: "eid943", tween: [ "transform", "${_pc6}", "scaleX", '0.82', { fromValue: '0.82'}], position: 0, duration: 0 },
            { id: "eid1045", tween: [ "style", "${_pc1}", "top", '194px', { fromValue: '175px'}], position: 0, duration: 250 },
            { id: "eid1104", tween: [ "style", "${_pc1}", "top", '181px', { fromValue: '194px'}], position: 250, duration: 250 },
            { id: "eid1047", tween: [ "style", "${_pc1}", "top", '207px', { fromValue: '181px'}], position: 500, duration: 250 },
            { id: "eid1106", tween: [ "style", "${_pc1}", "top", '199px', { fromValue: '207px'}], position: 750, duration: 250 },
            { id: "eid1057", tween: [ "style", "${_pc4}", "left", '-85px', { fromValue: '-69px'}], position: 0, duration: 250 },
            { id: "eid1114", tween: [ "style", "${_pc4}", "left", '-57px', { fromValue: '-85px'}], position: 250, duration: 250 },
            { id: "eid1059", tween: [ "style", "${_pc4}", "left", '-21px', { fromValue: '-57px'}], position: 500, duration: 500 },
            { id: "eid966", tween: [ "transform", "${_pc9}", "rotateZ", '-31deg', { fromValue: '-31deg'}], position: 0, duration: 0 },
            { id: "eid1064", tween: [ "style", "${_pc3}", "top", '-19px', { fromValue: '-2px'}], position: 0, duration: 250 },
            { id: "eid1125", tween: [ "style", "${_pc3}", "top", '1px', { fromValue: '-19px'}], position: 250, duration: 250 },
            { id: "eid1066", tween: [ "style", "${_pc3}", "top", '5px', { fromValue: '1px'}], position: 500, duration: 500 },
            { id: "eid910", tween: [ "transform", "${_pc2}", "rotateZ", '26deg', { fromValue: '26deg'}], position: 0, duration: 0 },
            { id: "eid1033", tween: [ "style", "${_pc5}", "left", '50px', { fromValue: '80px'}], position: 0, duration: 250 },
            { id: "eid1117", tween: [ "style", "${_pc5}", "left", '46px', { fromValue: '50px'}], position: 250, duration: 250 },
            { id: "eid1035", tween: [ "style", "${_pc5}", "left", '96px', { fromValue: '46px'}], position: 500, duration: 250 },
            { id: "eid1120", tween: [ "style", "${_pc5}", "left", '95px', { fromValue: '96px'}], position: 750, duration: 250 },
            { id: "eid978", tween: [ "transform", "${_pc10}", "scaleY", '0.78551', { fromValue: '0.78551'}], position: 0, duration: 0 },
            { id: "eid994", tween: [ "transform", "${_pc3}", "scaleX", '0.7', { fromValue: '0.7'}], position: 0, duration: 0 },
            { id: "eid1058", tween: [ "style", "${_pc4}", "top", '126px', { fromValue: '118px'}], position: 0, duration: 250 },
            { id: "eid1115", tween: [ "style", "${_pc4}", "top", '164px', { fromValue: '126px'}], position: 250, duration: 250 },
            { id: "eid1060", tween: [ "style", "${_pc4}", "top", '194px', { fromValue: '164px'}], position: 500, duration: 250 },
            { id: "eid1116", tween: [ "style", "${_pc4}", "top", '156px', { fromValue: '194px'}], position: 750, duration: 250 },
            { id: "eid1081", tween: [ "style", "${_pc7}", "top", '-23px', { fromValue: '52px'}], position: 0, duration: 250 },
            { id: "eid1139", tween: [ "style", "${_pc7}", "top", '11px', { fromValue: '-23px'}], position: 250, duration: 250 },
            { id: "eid1083", tween: [ "style", "${_pc7}", "top", '57px', { fromValue: '11px'}], position: 500, duration: 250 },
            { id: "eid1137", tween: [ "style", "${_pc7}", "top", '26px', { fromValue: '57px'}], position: 750, duration: 250 },
            { id: "eid1054", tween: [ "style", "${_pc8}", "top", '35px', { fromValue: '59px'}], position: 0, duration: 250 },
            { id: "eid1112", tween: [ "style", "${_pc8}", "top", '52px', { fromValue: '35px'}], position: 250, duration: 250 },
            { id: "eid1056", tween: [ "style", "${_pc8}", "top", '67px', { fromValue: '52px'}], position: 500, duration: 250 },
            { id: "eid1113", tween: [ "style", "${_pc8}", "top", '42px', { fromValue: '67px'}], position: 750, duration: 250 },
            { id: "eid1036", tween: [ "style", "${_pc5}", "top", '-21px', { fromValue: '35px'}], position: 0, duration: 250 },
            { id: "eid1118", tween: [ "style", "${_pc5}", "top", '26px', { fromValue: '-21px'}], position: 250, duration: 250 },
            { id: "eid1037", tween: [ "style", "${_pc5}", "top", '13px', { fromValue: '26px'}], position: 500, duration: 250 },
            { id: "eid1121", tween: [ "style", "${_pc5}", "top", '38px', { fromValue: '13px'}], position: 750, duration: 250 },
            { id: "eid488", tween: [ "transform", "${_cloud1}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid489", tween: [ "transform", "${_cloud1}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 250, duration: 250 },
            { id: "eid492", tween: [ "transform", "${_cloud1}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 500, duration: 250 },
            { id: "eid493", tween: [ "transform", "${_cloud1}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 750, duration: 250 },
            { id: "eid503", tween: [ "transform", "${_cloud3}", "rotateZ", '21deg', { fromValue: '0deg'}], position: 0, duration: 500 },
            { id: "eid506", tween: [ "transform", "${_cloud3}", "rotateZ", '0deg', { fromValue: '21deg'}], position: 500, duration: 500 },
            { id: "eid991", tween: [ "transform", "${_pc6}", "rotateZ", '-26deg', { fromValue: '-26deg'}], position: 0, duration: 0 },
            { id: "eid483", tween: [ "style", "${_cloud2}", "left", '137px', { fromValue: '144px'}], position: 0, duration: 250 },
            { id: "eid494", tween: [ "style", "${_cloud2}", "left", '160px', { fromValue: '137px'}], position: 250, duration: 250 },
            { id: "eid487", tween: [ "style", "${_cloud2}", "left", '159px', { fromValue: '160px'}], position: 500, duration: 250 },
            { id: "eid496", tween: [ "style", "${_cloud2}", "left", '144px', { fromValue: '159px'}], position: 750, duration: 250 },
            { id: "eid995", tween: [ "transform", "${_pc3}", "scaleY", '0.7', { fromValue: '0.7'}], position: 0, duration: 0 },
            { id: "eid1119", tween: [ "transform", "${_pc5}", "rotateZ", '37deg', { fromValue: '55deg'}], position: 0, duration: 500 },
            { id: "eid1122", tween: [ "transform", "${_pc5}", "rotateZ", '57deg', { fromValue: '37deg'}], position: 500, duration: 250 },
            { id: "eid1123", tween: [ "transform", "${_pc5}", "rotateZ", '35deg', { fromValue: '57deg'}], position: 750, duration: 250 },
            { id: "eid1073", tween: [ "style", "${_pc9}", "left", '243px', { fromValue: '206px'}], position: 0, duration: 250 },
            { id: "eid1130", tween: [ "style", "${_pc9}", "left", '254px', { fromValue: '243px'}], position: 250, duration: 250 },
            { id: "eid1074", tween: [ "style", "${_pc9}", "left", '224px', { fromValue: '254px'}], position: 500, duration: 250 },
            { id: "eid1132", tween: [ "style", "${_pc9}", "left", '236px', { fromValue: '224px'}], position: 750, duration: 250 },
            { id: "eid1053", tween: [ "style", "${_pc8}", "left", '-19px', { fromValue: '18px'}], position: 0, duration: 500 },
            { id: "eid1055", tween: [ "style", "${_pc8}", "left", '24px', { fromValue: '-19px'}], position: 500, duration: 500 },
            { id: "eid951", tween: [ "transform", "${_pc7}", "scaleY", '0.8431', { fromValue: '0.8431'}], position: 0, duration: 0 },
            { id: "eid934", tween: [ "transform", "${_pc5}", "scaleX", '0.77', { fromValue: '0.77'}], position: 0, duration: 0 },
            { id: "eid1076", tween: [ "style", "${_pc6}", "left", '172px', { fromValue: '206px'}], position: 0, duration: 250 },
            { id: "eid1134", tween: [ "style", "${_pc6}", "left", '207px', { fromValue: '172px'}], position: 250, duration: 250 },
            { id: "eid1078", tween: [ "style", "${_pc6}", "left", '237px', { fromValue: '207px'}], position: 500, duration: 500 },
            { id: "eid1002", tween: [ "transform", "${_pc1}", "scaleX", '0.8431', { fromValue: '0.8431'}], position: 0, duration: 0 },
            { id: "eid904", tween: [ "transform", "${_pc2}", "scaleX", '0.8431', { fromValue: '0.8431'}], position: 0, duration: 0 },
            { id: "eid1010", tween: [ "transform", "${_pc8}", "scaleX", '0.66', { fromValue: '0.66'}], position: 0, duration: 0 },
            { id: "eid984", tween: [ "transform", "${_pc9}", "scaleY", '0.8431', { fromValue: '0.8431'}], position: 0, duration: 0 },
            { id: "eid905", tween: [ "transform", "${_pc2}", "scaleY", '0.8431', { fromValue: '0.8431'}], position: 0, duration: 0 },
            { id: "eid977", tween: [ "transform", "${_pc10}", "scaleX", '0.78551', { fromValue: '0.78551'}], position: 0, duration: 0 },
            { id: "eid1068", tween: [ "style", "${_pc10}", "top", '177px', { fromValue: '128px'}], position: 0, duration: 250 },
            { id: "eid1127", tween: [ "style", "${_pc10}", "top", '146px', { fromValue: '177px'}], position: 250, duration: 250 },
            { id: "eid1070", tween: [ "style", "${_pc10}", "top", '136px', { fromValue: '146px'}], position: 500, duration: 250 },
            { id: "eid1129", tween: [ "style", "${_pc10}", "top", '140px', { fromValue: '136px'}], position: 750, duration: 250 },
            { id: "eid501", tween: [ "style", "${_cloud3}", "left", '-77px', { fromValue: '-84px'}], position: 0, duration: 250 },
            { id: "eid504", tween: [ "style", "${_cloud3}", "left", '-132px', { fromValue: '-77px'}], position: 250, duration: 250 },
            { id: "eid507", tween: [ "style", "${_cloud3}", "left", '-97px', { fromValue: '-132px'}], position: 500, duration: 250 },
            { id: "eid509", tween: [ "style", "${_cloud3}", "left", '-84px', { fromValue: '-97px'}], position: 750, duration: 250 },
            { id: "eid1003", tween: [ "transform", "${_pc1}", "scaleY", '0.8431', { fromValue: '0.8431'}], position: 0, duration: 0 },
            { id: "eid1048", tween: [ "style", "${_pc2}", "left", '-28px', { fromValue: '8px'}], position: 0, duration: 250 },
            { id: "eid1107", tween: [ "style", "${_pc2}", "left", '-13px', { fromValue: '-28px'}], position: 250, duration: 250 },
            { id: "eid1110", tween: [ "style", "${_pc2}", "left", '-9px', { fromValue: '-13px'}], position: 500, duration: 250 },
            { id: "eid1111", tween: [ "style", "${_pc2}", "left", '5px', { fromValue: '-9px'}], position: 750, duration: 250 },
            { id: "eid950", tween: [ "transform", "${_pc7}", "scaleX", '0.8431', { fromValue: '0.8431'}], position: 0, duration: 0 },
            { id: "eid1080", tween: [ "style", "${_pc7}", "left", '-85px', { fromValue: '-87px'}], position: 0, duration: 250 },
            { id: "eid1138", tween: [ "style", "${_pc7}", "left", '-123px', { fromValue: '-85px'}], position: 250, duration: 250 },
            { id: "eid1082", tween: [ "style", "${_pc7}", "left", '-103px', { fromValue: '-123px'}], position: 500, duration: 250 },
            { id: "eid1136", tween: [ "style", "${_pc7}", "left", '-75px', { fromValue: '-103px'}], position: 750, duration: 250 },
            { id: "eid1044", tween: [ "style", "${_pc1}", "left", '161px', { fromValue: '131px'}], position: 0, duration: 250 },
            { id: "eid1103", tween: [ "style", "${_pc1}", "left", '176px', { fromValue: '161px'}], position: 250, duration: 250 },
            { id: "eid1046", tween: [ "style", "${_pc1}", "left", '152px', { fromValue: '176px'}], position: 500, duration: 250 },
            { id: "eid1105", tween: [ "style", "${_pc1}", "left", '117px', { fromValue: '152px'}], position: 750, duration: 250 },
            { id: "eid921", tween: [ "transform", "${_pc3}", "rotateZ", '-20deg', { fromValue: '-20deg'}], position: 0, duration: 0 },
            { id: "eid1067", tween: [ "style", "${_pc10}", "left", '284px', { fromValue: '244px'}], position: 0, duration: 250 },
            { id: "eid1126", tween: [ "style", "${_pc10}", "left", '306px', { fromValue: '284px'}], position: 250, duration: 250 },
            { id: "eid1069", tween: [ "style", "${_pc10}", "left", '249px', { fromValue: '306px'}], position: 500, duration: 250 },
            { id: "eid1128", tween: [ "style", "${_pc10}", "left", '244px', { fromValue: '249px'}], position: 750, duration: 250 }         ]
      }
   }
},
"leftP": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'a10',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'a9',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'a8',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'a7',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'a6',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'a5',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'a4',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'a3',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'a2',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'a1',
      type: 'rect',
      rect: ['0','0','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'a9',
      symbolName: 'afterP'
   },
   {
      id: 'a8',
      symbolName: 'afterP'
   },
   {
      id: 'a4',
      symbolName: 'afterP'
   },
   {
      id: 'a5',
      symbolName: 'afterP'
   },
   {
      id: 'a6',
      symbolName: 'afterP'
   },
   {
      id: 'a7',
      symbolName: 'afterP'
   },
   {
      id: 'a3',
      symbolName: 'afterP'
   },
   {
      id: 'a2',
      symbolName: 'afterP'
   },
   {
      id: 'a1',
      symbolName: 'afterP'
   },
   {
      id: 'a10',
      symbolName: 'afterP'
   }   ]
   },
   states: {
      "Base State": {
         "${_a9}": [
            ["style", "left", '30px'],
            ["style", "top", '-118px']
         ],
         "${_a7}": [
            ["style", "left", '-144px'],
            ["style", "top", '-118px']
         ],
         "${_a8}": [
            ["style", "left", '-59px'],
            ["style", "top", '-118px']
         ],
         "${_a5}": [
            ["style", "left", '0px'],
            ["style", "top", '-80px']
         ],
         "${_a3}": [
            ["style", "left", '52px'],
            ["style", "top", '-50px']
         ],
         "${symbolSelector}": [
            ["style", "height", '202px'],
            ["style", "width", '202px']
         ],
         "${_a6}": [
            ["style", "left", '87px'],
            ["style", "top", '-80px']
         ],
         "${_a4}": [
            ["style", "left", '-101px'],
            ["style", "top", '-80px']
         ],
         "${_a2}": [
            ["style", "left", '-54px'],
            ["style", "top", '-50px']
         ],
         "${_a10}": [
            ["style", "left", '115px'],
            ["style", "top", '-118px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid516", tween: [ "style", "${_a3}", "top", '-50px', { fromValue: '-50px'}], position: 0, duration: 0 },
            { id: "eid522", tween: [ "style", "${_a4}", "top", '-80px', { fromValue: '-80px'}], position: 0, duration: 0 },
            { id: "eid521", tween: [ "style", "${_a4}", "left", '-101px', { fromValue: '-101px'}], position: 0, duration: 0 },
            { id: "eid541", tween: [ "style", "${_a10}", "left", '115px', { fromValue: '115px'}], position: 0, duration: 0 },
            { id: "eid533", tween: [ "style", "${_a8}", "top", '-118px', { fromValue: '-118px'}], position: 0, duration: 0 },
            { id: "eid525", tween: [ "style", "${_a5}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid528", tween: [ "style", "${_a6}", "left", '87px', { fromValue: '87px'}], position: 0, duration: 0 },
            { id: "eid532", tween: [ "style", "${_a7}", "top", '-118px', { fromValue: '-118px'}], position: 0, duration: 0 },
            { id: "eid526", tween: [ "style", "${_a6}", "top", '-80px', { fromValue: '-80px'}], position: 0, duration: 0 },
            { id: "eid524", tween: [ "style", "${_a5}", "top", '-80px', { fromValue: '-80px'}], position: 0, duration: 0 },
            { id: "eid531", tween: [ "style", "${_a7}", "left", '-144px', { fromValue: '-144px'}], position: 0, duration: 0 },
            { id: "eid515", tween: [ "style", "${_a2}", "top", '-50px', { fromValue: '-50px'}], position: 0, duration: 0 },
            { id: "eid538", tween: [ "style", "${_a9}", "left", '30px', { fromValue: '30px'}], position: 0, duration: 0 },
            { id: "eid518", tween: [ "style", "${_a3}", "left", '52px', { fromValue: '52px'}], position: 0, duration: 0 },
            { id: "eid535", tween: [ "style", "${_a8}", "left", '-59px', { fromValue: '-59px'}], position: 0, duration: 0 },
            { id: "eid514", tween: [ "style", "${_a2}", "left", '-54px', { fromValue: '-54px'}], position: 0, duration: 0 },
            { id: "eid540", tween: [ "style", "${_a10}", "top", '-118px', { fromValue: '-118px'}], position: 0, duration: 0 },
            { id: "eid537", tween: [ "style", "${_a9}", "top", '-118px', { fromValue: '-118px'}], position: 0, duration: 0 }         ]
      }
   }
},
"afterP": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pm1',
      type: 'rect',
      rect: ['47px','77px','auto','auto','auto','auto']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'pm2',
      rect: ['-64','155','auto','auto','auto','auto']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'pm3',
      rect: ['90px','53px','auto','auto','auto','auto']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'pl1',
      rect: ['41','43','auto','auto','auto','auto']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'ph1',
      rect: ['37','101','auto','auto','auto','auto']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'ph2',
      rect: ['44','99','auto','auto','auto','auto']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'ph3',
      rect: ['58','55','auto','auto','auto','auto']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'ph4',
      rect: ['44','109','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'pm2',
      symbolName: 'pJump'
   },
   {
      id: 'pm3',
      symbolName: 'pRock'
   },
   {
      id: 'pl1',
      symbolName: 'pLaugh'
   },
   {
      id: 'pm1',
      symbolName: 'pOne'
   },
   {
      id: 'ph4',
      symbolName: 'ph4'
   },
   {
      id: 'ph3',
      symbolName: 'ph3'
   },
   {
      id: 'ph2',
      symbolName: 'phit2'
   },
   {
      id: 'ph1',
      symbolName: 'phOne'
   }   ]
   },
   states: {
      "Base State": {
         "${_pm2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_ph1}": [
            ["style", "top", '99px'],
            ["transform", "scaleY", '1.16608'],
            ["transform", "scaleX", '1.16608'],
            ["style", "left", '37px'],
            ["style", "display", 'none']
         ],
         "${_ph2}": [
            ["style", "top", '99px'],
            ["transform", "scaleY", '1.16608'],
            ["transform", "scaleX", '1.16608'],
            ["style", "left", '44px'],
            ["style", "display", 'none']
         ],
         "${_pm3}": [
            ["style", "top", '65px'],
            ["style", "left", '43px'],
            ["style", "display", 'none']
         ],
         "${_pm1}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '202px'],
            ["style", "width", '202px']
         ],
         "${_ph3}": [
            ["style", "top", '112px'],
            ["transform", "scaleY", '1.07'],
            ["transform", "scaleX", '1.07'],
            ["style", "left", '42px'],
            ["style", "display", 'none']
         ],
         "${_pl1}": [
            ["style", "display", 'none']
         ],
         "${_ph4}": [
            ["style", "top", '110px'],
            ["transform", "scaleY", '1.07733'],
            ["transform", "scaleX", '1.07733'],
            ["style", "left", '44px'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
            { id: "eid1523", tween: [ "style", "${_pm3}", "top", '65px', { fromValue: '65px'}], position: 0, duration: 0 },
            { id: "eid806", tween: [ "style", "${_ph2}", "left", '44px', { fromValue: '44px'}], position: 0, duration: 0 },
            { id: "eid873", tween: [ "style", "${_ph4}", "left", '44px', { fromValue: '44px'}], position: 0, duration: 0 },
            { id: "eid870", tween: [ "transform", "${_ph4}", "scaleY", '1.07733', { fromValue: '1.07733'}], position: 0, duration: 0 },
            { id: "eid867", tween: [ "transform", "${_ph3}", "scaleY", '1.07', { fromValue: '1.07'}], position: 0, duration: 0 },
            { id: "eid889", tween: [ "style", "${_ph4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid512", tween: [ "style", "${_pm1}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid798", tween: [ "style", "${_ph1}", "left", '37px', { fromValue: '37px'}], position: 0, duration: 0 },
            { id: "eid869", tween: [ "transform", "${_ph4}", "scaleX", '1.07733', { fromValue: '1.07733'}], position: 0, duration: 0 },
            { id: "eid874", tween: [ "style", "${_ph4}", "top", '110px', { fromValue: '110px'}], position: 0, duration: 0 },
            { id: "eid513", tween: [ "style", "${_pm1}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid1524", tween: [ "style", "${_pm3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid800", tween: [ "transform", "${_ph2}", "scaleX", '1.16608', { fromValue: '1.16608'}], position: 0, duration: 0 },
            { id: "eid570", tween: [ "style", "${_ph1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid794", tween: [ "transform", "${_ph1}", "scaleX", '1.16608', { fromValue: '1.16608'}], position: 0, duration: 0 },
            { id: "eid865", tween: [ "style", "${_ph3}", "top", '112px', { fromValue: '112px'}], position: 0, duration: 0 },
            { id: "eid801", tween: [ "transform", "${_ph2}", "scaleY", '1.16608', { fromValue: '1.16608'}], position: 0, duration: 0 },
            { id: "eid1522", tween: [ "style", "${_pm3}", "left", '43px', { fromValue: '43px'}], position: 0, duration: 0 },
            { id: "eid866", tween: [ "transform", "${_ph3}", "scaleX", '1.07', { fromValue: '1.07'}], position: 0, duration: 0 },
            { id: "eid864", tween: [ "style", "${_ph3}", "left", '42px', { fromValue: '42px'}], position: 0, duration: 0 },
            { id: "eid1520", tween: [ "style", "${_pm2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid1521", tween: [ "style", "${_pm2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid795", tween: [ "transform", "${_ph1}", "scaleY", '1.16608', { fromValue: '1.16608'}], position: 0, duration: 0 },
            { id: "eid1529", tween: [ "style", "${_pl1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid868", tween: [ "style", "${_ph3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1519", tween: [ "style", "${_pm2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid837", tween: [ "style", "${_ph2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid805", tween: [ "style", "${_ph2}", "top", '99px', { fromValue: '99px'}], position: 0, duration: 0 },
            { id: "eid799", tween: [ "style", "${_ph1}", "top", '99px', { fromValue: '99px'}], position: 0, duration: 0 }         ]
      }
   }
},
"phOne": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'hp1-foot',
      type: 'image',
      rect: ['-13px','55px','26px','16px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/hp1-foot.png','0px','0px']
   },
   {
      id: 'hp1-body2',
      type: 'image',
      rect: ['0px','0px','128px','72px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/hp1-body2.png','0px','0px']
   },
   {
      id: 'hp1-head',
      type: 'image',
      rect: ['97px','19px','62px','44px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/hp1-head.png','0px','0px']
   },
   {
      id: 'hp1-arm',
      type: 'image',
      rect: ['64px','30px','56px','29px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/hp1-arm.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_hp1-foot}": [
            ["style", "top", '55px'],
            ["style", "left", '-13px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_hp1-body2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_hp1-head}": [
            ["style", "top", '19px'],
            ["style", "left", '97px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '72px'],
            ["style", "width", '128px']
         ],
         "${_hp1-arm}": [
            ["style", "top", '14px'],
            ["style", "left", '23px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid554", tween: [ "style", "${_hp1-head}", "left", '92px', { fromValue: '97px'}], position: 0, duration: 500 },
            { id: "eid557", tween: [ "style", "${_hp1-head}", "left", '97px', { fromValue: '92px'}], position: 500, duration: 500 },
            { id: "eid565", tween: [ "style", "${_hp1-arm}", "top", '8px', { fromValue: '14px'}], position: 500, duration: 250 },
            { id: "eid568", tween: [ "style", "${_hp1-arm}", "top", '14px', { fromValue: '8px'}], position: 750, duration: 250 },
            { id: "eid559", tween: [ "transform", "${_hp1-foot}", "rotateZ", '20deg', { fromValue: '0deg'}], position: 206, duration: 294 },
            { id: "eid561", tween: [ "transform", "${_hp1-foot}", "rotateZ", '0deg', { fromValue: '20deg'}], position: 500, duration: 250 },
            { id: "eid555", tween: [ "style", "${_hp1-head}", "top", '14px', { fromValue: '19px'}], position: 0, duration: 500 },
            { id: "eid558", tween: [ "style", "${_hp1-head}", "top", '19px', { fromValue: '14px'}], position: 500, duration: 500 },
            { id: "eid564", tween: [ "style", "${_hp1-arm}", "left", '25px', { fromValue: '23px'}], position: 500, duration: 250 },
            { id: "eid567", tween: [ "style", "${_hp1-arm}", "left", '23px', { fromValue: '25px'}], position: 750, duration: 250 },
            { id: "eid563", tween: [ "transform", "${_hp1-arm}", "rotateZ", '18deg', { fromValue: '0deg'}], position: 500, duration: 250 },
            { id: "eid566", tween: [ "transform", "${_hp1-arm}", "rotateZ", '0deg', { fromValue: '18deg'}], position: 750, duration: 250 },
            { id: "eid553", tween: [ "transform", "${_hp1-head}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 0, duration: 500 },
            { id: "eid556", tween: [ "transform", "${_hp1-head}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 500, duration: 500 },
            { id: "eid560", tween: [ "style", "${_hp1-foot}", "top", '52px', { fromValue: '55px'}], position: 206, duration: 294 },
            { id: "eid562", tween: [ "style", "${_hp1-foot}", "top", '55px', { fromValue: '52px'}], position: 500, duration: 250 }         ]
      }
   }
},
"ScoreBoard": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'scoreboard',
      type: 'image',
      rect: ['347px','28px','592px','85px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/scoreboard.png','0px','0px']
   },
   {
      rect: ['143px','27px','69px','45px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
      id: 'Total',
      text: '0',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['143px','27px','69px','45px','auto','auto'],
      id: 'r1',
      font: ['Arial, Helvetica, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
      align: 'center',
      type: 'text'
   },
   {
      rect: ['143px','27px','69px','45px','auto','auto'],
      id: 't1',
      font: ['Arial, Helvetica, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
      align: 'center',
      type: 'text'
   },
   {
      rect: ['143px','27px','69px','45px','auto','auto'],
      id: 't2',
      font: ['Arial, Helvetica, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
      align: 'center',
      type: 'text'
   },
   {
      rect: ['143px','27px','69px','45px','auto','auto'],
      id: 't3',
      font: ['Arial, Helvetica, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
      align: 'center',
      type: 'text'
   },
   {
      rect: ['143px','27px','69px','45px','auto','auto'],
      id: 't4',
      font: ['Arial, Helvetica, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
      align: 'center',
      type: 'text'
   },
   {
      rect: ['143px','27px','69px','45px','auto','auto'],
      id: 't5',
      font: ['Arial, Helvetica, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
      align: 'center',
      type: 'text'
   },
   {
      rect: ['143px','27px','69px','45px','auto','auto'],
      id: 't6',
      font: ['Arial, Helvetica, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
      align: 'center',
      type: 'text'
   },
   {
      rect: ['143px','27px','69px','45px','auto','auto'],
      id: 't7',
      font: ['Arial, Helvetica, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
      align: 'center',
      type: 'text'
   },
   {
      rect: ['143px','27px','69px','45px','auto','auto'],
      id: 't8',
      font: ['Arial, Helvetica, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
      align: 'center',
      type: 'text'
   },
   {
      rect: ['143px','27px','69px','45px','auto','auto'],
      id: 't9',
      font: ['Arial, Helvetica, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
      align: 'center',
      type: 'text'
   },
   {
      rect: ['143px','27px','69px','45px','auto','auto'],
      id: 't10',
      font: ['Arial, Helvetica, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
      align: 'center',
      type: 'text'
   },
   {
      rect: ['143px','27px','69px','45px','auto','auto'],
      id: 't11',
      font: ['Arial, Helvetica, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
      align: 'center',
      type: 'text'
   },
   {
      rect: ['143px','27px','69px','45px','auto','auto'],
      id: 'r2',
      font: ['Arial, Helvetica, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
      align: 'center',
      type: 'text'
   },
   {
      rect: ['143px','27px','69px','45px','auto','auto'],
      id: 'r3',
      font: ['Arial, Helvetica, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
      align: 'center',
      type: 'text'
   },
   {
      rect: ['143px','27px','69px','45px','auto','auto'],
      id: 'r5',
      font: ['Arial, Helvetica, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
      align: 'center',
      type: 'text'
   },
   {
      rect: ['143px','27px','69px','45px','auto','auto'],
      id: 'r4',
      font: ['Arial, Helvetica, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_t4}": [
            ["style", "top", '17px'],
            ["style", "width", '33px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'block'],
            ["style", "height", '21px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '328px'],
            ["style", "font-size", '18px']
         ],
         "${_r5}": [
            ["style", "top", '46px'],
            ["style", "text-align", 'center'],
            ["style", "height", '31px'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '511px'],
            ["style", "font-size", '24px']
         ],
         "${_t10}": [
            ["style", "top", '17px'],
            ["style", "width", '33px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'block'],
            ["style", "height", '21px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '530px'],
            ["style", "font-size", '18px']
         ],
         "${_r2}": [
            ["style", "top", '46px'],
            ["style", "text-align", 'center'],
            ["style", "height", '31px'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '293px'],
            ["style", "font-size", '24px']
         ],
         "${symbolSelector}": [
            ["style", "height", '85px'],
            ["style", "width", '592px']
         ],
         "${_t3}": [
            ["style", "top", '17px'],
            ["style", "font-size", '18px'],
            ["style", "text-align", 'center'],
            ["style", "height", '21px'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '294px'],
            ["style", "width", '33px']
         ],
         "${_r4}": [
            ["style", "top", '46px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'block'],
            ["style", "height", '31px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '429px'],
            ["style", "font-size", '24px']
         ],
         "${_t7}": [
            ["style", "top", '17px'],
            ["style", "font-size", '18px'],
            ["style", "text-align", 'center'],
            ["style", "height", '21px'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '430px'],
            ["style", "width", '33px']
         ],
         "${_r3}": [
            ["style", "top", '46px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'block'],
            ["style", "height", '31px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '361px'],
            ["style", "font-size", '24px']
         ],
         "${_t5}": [
            ["style", "top", '17px'],
            ["style", "font-size", '18px'],
            ["style", "text-align", 'center'],
            ["style", "height", '21px'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '362px'],
            ["style", "width", '33px']
         ],
         "${_t11}": [
            ["style", "top", '17px'],
            ["style", "font-size", '18px'],
            ["style", "text-align", 'center'],
            ["style", "height", '21px'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '563px'],
            ["style", "width", '33px']
         ],
         "${_t8}": [
            ["style", "top", '17px'],
            ["style", "width", '33px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'block'],
            ["style", "height", '21px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '464px'],
            ["style", "font-size", '18px']
         ],
         "${_t1}": [
            ["style", "top", '17px'],
            ["style", "font-size", '18px'],
            ["style", "text-align", 'center'],
            ["style", "height", '21px'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '226px'],
            ["style", "width", '33px']
         ],
         "${_t6}": [
            ["style", "top", '17px'],
            ["style", "width", '33px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'block'],
            ["style", "height", '21px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '396px'],
            ["style", "font-size", '18px']
         ],
         "${_scoreboard}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_t9}": [
            ["style", "top", '17px'],
            ["style", "font-size", '18px'],
            ["style", "text-align", 'center'],
            ["style", "height", '21px'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '497px'],
            ["style", "width", '33px']
         ],
         "${_Total}": [
            ["style", "top", '26px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '150px'],
            ["style", "font-size", '38px']
         ],
         "${_t2}": [
            ["style", "top", '17px'],
            ["style", "width", '33px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'block'],
            ["style", "height", '21px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '259px'],
            ["style", "font-size", '18px']
         ],
         "${_r1}": [
            ["style", "top", '46px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'block'],
            ["style", "height", '31px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '225px'],
            ["style", "font-size", '24px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
            { id: "eid671", tween: [ "style", "${_t3}", "font-size", '18px', { fromValue: '18px'}], position: 0, duration: 0 },
            { id: "eid650", tween: [ "style", "${_t1}", "left", '226px', { fromValue: '226px'}], position: 0, duration: 0 },
            { id: "eid733", tween: [ "style", "${_t9}", "width", '33px', { fromValue: '33px'}], position: 0, duration: 0 },
            { id: "eid634", tween: [ "style", "${_r2}", "top", '46px', { fromValue: '46px'}], position: 0, duration: 0 },
            { id: "eid682", tween: [ "style", "${_t4}", "width", '33px', { fromValue: '33px'}], position: 0, duration: 0 },
            { id: "eid598", tween: [ "color", "${_r2}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid704", tween: [ "style", "${_t6}", "height", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
            { id: "eid730", tween: [ "style", "${_t9}", "height", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
            { id: "eid689", tween: [ "color", "${_t5}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid673", tween: [ "style", "${_t3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid743", tween: [ "style", "${_t11}", "top", '17px', { fromValue: '17px'}], position: 0, duration: 0 },
            { id: "eid712", tween: [ "style", "${_t7}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid655", tween: [ "style", "${_t1}", "height", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
            { id: "eid672", tween: [ "style", "${_t3}", "height", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
            { id: "eid725", tween: [ "style", "${_t8}", "font-size", '18px', { fromValue: '18px'}], position: 0, duration: 0 },
            { id: "eid714", tween: [ "style", "${_t7}", "height", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
            { id: "eid715", tween: [ "color", "${_t7}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid686", tween: [ "style", "${_t4}", "font-size", '18px', { fromValue: '18px'}], position: 0, duration: 0 },
            { id: "eid695", tween: [ "style", "${_t5}", "left", '362px', { fromValue: '362px'}], position: 0, duration: 0 },
            { id: "eid659", tween: [ "color", "${_t2}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid746", tween: [ "style", "${_t11}", "height", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
            { id: "eid605", tween: [ "style", "${_r3}", "height", '31px', { fromValue: '31px'}], position: 0, duration: 0 },
            { id: "eid700", tween: [ "style", "${_t3}", "top", '17px', { fromValue: '17px'}], position: 0, duration: 0 },
            { id: "eid654", tween: [ "style", "${_t1}", "font-size", '18px', { fromValue: '18px'}], position: 0, duration: 0 },
            { id: "eid701", tween: [ "style", "${_t4}", "top", '17px', { fromValue: '17px'}], position: 0, duration: 0 },
            { id: "eid635", tween: [ "style", "${_r1}", "top", '46px', { fromValue: '46px'}], position: 0, duration: 0 },
            { id: "eid684", tween: [ "style", "${_t4}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid736", tween: [ "style", "${_t10}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid633", tween: [ "style", "${_r4}", "top", '46px', { fromValue: '46px'}], position: 0, duration: 0 },
            { id: "eid711", tween: [ "style", "${_t7}", "top", '17px', { fromValue: '17px'}], position: 0, duration: 0 },
            { id: "eid644", tween: [ "style", "${_t1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid583", tween: [ "color", "${_r1}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid574", tween: [ "color", "${_Total}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid726", tween: [ "style", "${_t8}", "left", '464px', { fromValue: '464px'}], position: 0, duration: 0 },
            { id: "eid692", tween: [ "style", "${_t5}", "width", '33px', { fromValue: '33px'}], position: 0, duration: 0 },
            { id: "eid734", tween: [ "style", "${_t9}", "left", '497px', { fromValue: '497px'}], position: 0, duration: 0 },
            { id: "eid735", tween: [ "style", "${_t10}", "top", '17px', { fromValue: '17px'}], position: 0, duration: 0 },
            { id: "eid639", tween: [ "style", "${_r4}", "left", '429px', { fromValue: '429px'}], position: 0, duration: 0 },
            { id: "eid580", tween: [ "style", "${_Total}", "left", '150px', { fromValue: '150px'}], position: 0, duration: 0 },
            { id: "eid674", tween: [ "color", "${_t3}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid643", tween: [ "color", "${_t1}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid601", tween: [ "style", "${_r2}", "font-size", '24px', { fromValue: '24px'}], position: 0, duration: 0 },
            { id: "eid702", tween: [ "style", "${_t5}", "top", '17px', { fromValue: '17px'}], position: 0, duration: 0 },
            { id: "eid706", tween: [ "style", "${_t6}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid572", tween: [ "style", "${_scoreboard}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid738", tween: [ "style", "${_t10}", "height", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
            { id: "eid651", tween: [ "style", "${_t1}", "width", '33px', { fromValue: '33px'}], position: 0, duration: 0 },
            { id: "eid660", tween: [ "style", "${_t2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid607", tween: [ "style", "${_r3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid737", tween: [ "style", "${_t10}", "font-size", '18px', { fromValue: '18px'}], position: 0, duration: 0 },
            { id: "eid709", tween: [ "style", "${_t6}", "font-size", '18px', { fromValue: '18px'}], position: 0, duration: 0 },
            { id: "eid720", tween: [ "style", "${_t8}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid571", tween: [ "style", "${_scoreboard}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid747", tween: [ "color", "${_t11}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid606", tween: [ "color", "${_r3}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid620", tween: [ "color", "${_r4}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid739", tween: [ "color", "${_t10}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid676", tween: [ "style", "${_t3}", "width", '33px', { fromValue: '33px'}], position: 0, duration: 0 },
            { id: "eid727", tween: [ "style", "${_t9}", "top", '17px', { fromValue: '17px'}], position: 0, duration: 0 },
            { id: "eid661", tween: [ "style", "${_t2}", "width", '33px', { fromValue: '33px'}], position: 0, duration: 0 },
            { id: "eid612", tween: [ "style", "${_r5}", "height", '31px', { fromValue: '31px'}], position: 0, duration: 0 },
            { id: "eid624", tween: [ "style", "${_r4}", "font-size", '24px', { fromValue: '24px'}], position: 0, duration: 0 },
            { id: "eid721", tween: [ "color", "${_t8}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid718", tween: [ "style", "${_t7}", "left", '430px', { fromValue: '430px'}], position: 0, duration: 0 },
            { id: "eid664", tween: [ "style", "${_t2}", "left", '259px', { fromValue: '259px'}], position: 0, duration: 0 },
            { id: "eid573", tween: [ "style", "${_Total}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid707", tween: [ "color", "${_t6}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid683", tween: [ "style", "${_t4}", "height", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
            { id: "eid713", tween: [ "style", "${_t7}", "width", '33px', { fromValue: '33px'}], position: 0, duration: 0 },
            { id: "eid694", tween: [ "style", "${_t5}", "font-size", '18px', { fromValue: '18px'}], position: 0, duration: 0 },
            { id: "eid691", tween: [ "style", "${_t5}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid744", tween: [ "style", "${_t11}", "font-size", '18px', { fromValue: '18px'}], position: 0, duration: 0 },
            { id: "eid722", tween: [ "style", "${_t8}", "height", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
            { id: "eid636", tween: [ "style", "${_r3}", "top", '46px', { fromValue: '46px'}], position: 0, duration: 0 },
            { id: "eid603", tween: [ "style", "${_r2}", "left", '293px', { fromValue: '293px'}], position: 0, duration: 0 },
            { id: "eid669", tween: [ "style", "${_t2}", "top", '17px', { fromValue: '17px'}], position: 0, duration: 0 },
            { id: "eid590", tween: [ "style", "${_r1}", "font-size", '24px', { fromValue: '24px'}], position: 0, duration: 0 },
            { id: "eid749", tween: [ "style", "${_t11}", "width", '33px', { fromValue: '33px'}], position: 0, duration: 0 },
            { id: "eid690", tween: [ "style", "${_t5}", "height", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
            { id: "eid613", tween: [ "color", "${_r5}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid710", tween: [ "style", "${_t6}", "left", '396px', { fromValue: '396px'}], position: 0, duration: 0 },
            { id: "eid731", tween: [ "color", "${_t9}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid622", tween: [ "style", "${_r4}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid618", tween: [ "style", "${_r5}", "left", '511px', { fromValue: '511px'}], position: 0, duration: 0 },
            { id: "eid750", tween: [ "style", "${_t11}", "left", '563px', { fromValue: '563px'}], position: 0, duration: 0 },
            { id: "eid681", tween: [ "color", "${_t4}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid577", tween: [ "style", "${_Total}", "font-size", '38px', { fromValue: '38px'}], position: 0, duration: 0 },
            { id: "eid705", tween: [ "style", "${_t6}", "width", '33px', { fromValue: '33px'}], position: 0, duration: 0 },
            { id: "eid703", tween: [ "style", "${_t6}", "top", '17px', { fromValue: '17px'}], position: 0, duration: 0 },
            { id: "eid609", tween: [ "style", "${_r3}", "font-size", '24px', { fromValue: '24px'}], position: 0, duration: 0 },
            { id: "eid640", tween: [ "style", "${_r3}", "left", '361px', { fromValue: '361px'}], position: 0, duration: 0 },
            { id: "eid579", tween: [ "style", "${_Total}", "top", '26px', { fromValue: '26px'}], position: 0, duration: 0 },
            { id: "eid717", tween: [ "style", "${_t7}", "font-size", '18px', { fromValue: '18px'}], position: 0, duration: 0 },
            { id: "eid637", tween: [ "style", "${_r5}", "top", '46px', { fromValue: '46px'}], position: 0, duration: 0 },
            { id: "eid719", tween: [ "style", "${_t8}", "top", '17px', { fromValue: '17px'}], position: 0, duration: 0 },
            { id: "eid616", tween: [ "style", "${_r5}", "font-size", '24px', { fromValue: '24px'}], position: 0, duration: 0 },
            { id: "eid745", tween: [ "style", "${_t11}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid582", tween: [ "style", "${_r1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid663", tween: [ "style", "${_t2}", "font-size", '18px', { fromValue: '18px'}], position: 0, duration: 0 },
            { id: "eid668", tween: [ "style", "${_t1}", "top", '17px', { fromValue: '17px'}], position: 0, duration: 0 },
            { id: "eid723", tween: [ "style", "${_t8}", "width", '33px', { fromValue: '33px'}], position: 0, duration: 0 },
            { id: "eid621", tween: [ "style", "${_r4}", "height", '31px', { fromValue: '31px'}], position: 0, duration: 0 },
            { id: "eid658", tween: [ "style", "${_t2}", "height", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
            { id: "eid595", tween: [ "style", "${_r1}", "left", '225px', { fromValue: '225px'}], position: 0, duration: 0 },
            { id: "eid599", tween: [ "style", "${_r2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid742", tween: [ "style", "${_t10}", "left", '530px', { fromValue: '530px'}], position: 0, duration: 0 },
            { id: "eid729", tween: [ "style", "${_t9}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid728", tween: [ "style", "${_t9}", "font-size", '18px', { fromValue: '18px'}], position: 0, duration: 0 },
            { id: "eid614", tween: [ "style", "${_r5}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid679", tween: [ "style", "${_t3}", "left", '294px', { fromValue: '294px'}], position: 0, duration: 0 },
            { id: "eid597", tween: [ "style", "${_r2}", "height", '31px', { fromValue: '31px'}], position: 0, duration: 0 },
            { id: "eid687", tween: [ "style", "${_t4}", "left", '328px', { fromValue: '328px'}], position: 0, duration: 0 },
            { id: "eid741", tween: [ "style", "${_t10}", "width", '33px', { fromValue: '33px'}], position: 0, duration: 0 },
            { id: "eid592", tween: [ "style", "${_r1}", "height", '31px', { fromValue: '31px'}], position: 0, duration: 0 }         ]
      }
   }
},
"roundScore": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 's1',
      type: 'rect',
      rect: ['0','0','auto','auto','auto','auto']
   },
   {
      id: 'k1',
      type: 'rect',
      rect: ['-17','1','auto','auto','auto','auto']
   },
   {
      id: 't1',
      type: 'rect',
      rect: ['-24','2','auto','auto','auto','auto']
   },
   {
      id: 's',
      type: 'rect',
      rect: ['148','-8','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'k1',
      symbolName: 'Strike'
   },
   {
      id: 's1',
      symbolName: 'Spare'
   },
   {
      id: 's',
      symbolName: 'OtherScore'
   },
   {
      id: 't1',
      symbolName: 'Turkey'
   }   ]
   },
   states: {
      "Base State": {
         "${_t1}": [
            ["style", "top", '55px']
         ],
         "${_k1}": [
            ["style", "top", '55px']
         ],
         "${_s1}": [
            ["style", "top", '55px']
         ],
         "${symbolSelector}": [
            ["style", "height", '90px'],
            ["style", "width", '379px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
            { id: "eid1201", tween: [ "style", "${_t1}", "top", '55px', { fromValue: '55px'}], position: 0, duration: 0 },
            { id: "eid1203", tween: [ "style", "${_s1}", "top", '55px', { fromValue: '55px'}], position: 0, duration: 0 },
            { id: "eid1202", tween: [ "style", "${_k1}", "top", '55px', { fromValue: '55px'}], position: 0, duration: 0 },
            { id: "eid771", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_t1}', [] ], ""], position: 0 },
            { id: "eid772", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_s1}', [] ], ""], position: 0 },
            { id: "eid770", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_k1}', [] ], ""], position: 0 },
            { id: "eid769", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_s}', [] ], ""], position: 0 }         ]
      }
   }
},
"FinalScene": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'introView',
      type: 'image',
      rect: ['0px','0px','1600px','600px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/introView.jpg','0px','0px']
   },
   {
      id: 'i1',
      type: 'rect',
      rect: ['-596','382','auto','auto','auto','auto']
   },
   {
      id: 'i2',
      type: 'rect',
      rect: ['-394','525','auto','auto','auto','auto']
   },
   {
      id: 'i3',
      type: 'rect',
      rect: ['292px','420px','auto','auto','auto','auto']
   },
   {
      id: 'i4',
      type: 'rect',
      rect: ['82','493','auto','auto','auto','auto']
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['293','522','auto','auto','auto','auto'],
      id: 'FinalSign'
   },
   {
      id: 'i5',
      type: 'rect',
      rect: ['649','513','auto','auto','auto','auto']
   },
   {
      id: 'i6',
      type: 'rect',
      rect: ['-332','432','auto','auto','auto','auto']
   },
   {
      id: 'turkeyImage',
      type: 'image',
      rect: ['-361px','342px','98px','79px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/turkeyImage.png','0px','0px']
   },
   {
      id: 'i7',
      type: 'rect',
      rect: ['-452','506','auto','auto','auto','auto']
   },
   {
      id: 'i8',
      type: 'rect',
      rect: ['710px','316px','auto','auto','auto','auto']
   },
   {
      id: 'From',
      type: 'image',
      rect: ['422px','253px','78px','38px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/From.png','0px','0px']
   },
   {
      id: 'Starz',
      type: 'image',
      rect: ['493px','238px','166px','64px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Starz.png','0px','0px']
   },
   {
      id: 'Happy',
      type: 'image',
      rect: ['242px','15px','334px','112px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Happy.png','0px','0px']
   },
   {
      id: 'Holidays',
      type: 'image',
      rect: ['122px','113px','574px','140px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Holidays.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'i4',
      symbolName: 'pRock'
   },
   {
      id: 'i5',
      symbolName: 'snowman_game'
   },
   {
      id: 'i6',
      symbolName: 'pointLeft'
   },
   {
      id: 'i7',
      symbolName: 'pointRight'
   },
   {
      id: 'i3',
      symbolName: 'pOne'
   },
   {
      id: 'i2',
      symbolName: 'IntroPenguinRun'
   },
   {
      id: 'i1',
      symbolName: 'JumpingSnowman'
   },
   {
      id: 'i8',
      symbolName: 'ph4'
   },
   {
      id: 'FinalSign',
      symbolName: 'FinalSign'
   }   ]
   },
   states: {
      "Base State": {
         "${_i8}": [
            ["motion", "location", '766.62822565873px 351.79347992754px'],
            ["transform", "scaleY", '0.41'],
            ["transform", "scaleX", '0.41']
         ],
         "${_i4}": [
            ["style", "top", '445px'],
            ["transform", "scaleY", '0.82773'],
            ["style", "left", '851px'],
            ["transform", "scaleX", '0.82773']
         ],
         "${_i1}": [
            ["style", "top", '298px'],
            ["transform", "scaleY", '0.63182'],
            ["style", "left", '135px'],
            ["transform", "scaleX", '0.63182']
         ],
         "${_Starz}": [
            ["style", "top", '236px'],
            ["style", "opacity", '0'],
            ["style", "left", '293px'],
            ["style", "display", 'block']
         ],
         "${_FinalSign}": [
            ["style", "top", '614px'],
            ["style", "left", '176px'],
            ["style", "display", 'none']
         ],
         "${_i2}": [
            ["transform", "scaleX", '0.67521'],
            ["style", "top", '441px'],
            ["transform", "scaleY", '0.67521'],
            ["style", "left", '22px']
         ],
         "${_From}": [
            ["style", "top", '251px'],
            ["style", "opacity", '0'],
            ["style", "left", '222px'],
            ["style", "display", 'block']
         ],
         "${_i5}": [
            ["style", "left", '1364px'],
            ["style", "top", '414px']
         ],
         "${_i6}": [
            ["style", "top", '419px'],
            ["transform", "scaleY", '0.50787'],
            ["style", "left", '686px'],
            ["transform", "scaleX", '0.50787']
         ],
         "${_turkeyImage}": [
            ["style", "top", '342px'],
            ["style", "height", '79px'],
            ["style", "left", '441px'],
            ["style", "width", '98px']
         ],
         "${_i3}": [
            ["style", "top", '320px'],
            ["transform", "scaleY", '0.5286'],
            ["style", "left", '982px'],
            ["transform", "scaleX", '0.5286']
         ],
         "${symbolSelector}": [
            ["style", "height", '600px'],
            ["style", "width", '800px']
         ],
         "${_introView}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Happy}": [
            ["style", "top", '-51px'],
            ["style", "opacity", '0'],
            ["style", "left", '239px'],
            ["style", "display", 'block']
         ],
         "${_Holidays}": [
            ["style", "top", '13px'],
            ["style", "opacity", '0'],
            ["style", "left", '119px'],
            ["style", "display", 'block']
         ],
         "${_i7}": [
            ["style", "top", '441px'],
            ["transform", "scaleY", '0.82353'],
            ["style", "left", '272px'],
            ["transform", "scaleX", '0.82353']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: false,
         timeline: [
            { id: "eid1630", tween: [ "style", "${_From}", "left", '422px', { fromValue: '222px'}], position: 1000, duration: 541 },
            { id: "eid1568", tween: [ "transform", "${_i7}", "scaleX", '0.82353', { fromValue: '0.82353'}], position: 5000, duration: 0 },
            { id: "eid1591", tween: [ "style", "${_i1}", "top", '298px', { fromValue: '298px'}], position: 5000, duration: 0 },
            { id: "eid1646", tween: [ "style", "${_Holidays}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500 },
            { id: "eid1651", tween: [ "style", "${_Holidays}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 500 },
            { id: "eid1560", tween: [ "transform", "${_i6}", "scaleX", '0.50787', { fromValue: '0.50787'}], position: 5000, duration: 0 },
            { id: "eid1587", tween: [ "transform", "${_i1}", "scaleY", '0.63182', { fromValue: '0.63182'}], position: 5000, duration: 0 },
            { id: "eid1571", tween: [ "style", "${_i7}", "top", '441px', { fromValue: '441px'}], position: 5000, duration: 0 },
            { id: "eid1616", tween: [ "style", "${_i1}", "left", '-667px', { fromValue: '135px'}], position: 0, duration: 5000 },
            { id: "eid1626", tween: [ "style", "${_Starz}", "left", '493px', { fromValue: '293px'}], position: 750, duration: 541 },
            { id: "eid1542", tween: [ "transform", "${_i4}", "scaleX", '0.82773', { fromValue: '0.82773'}], position: 5000, duration: 0 },
            { id: "eid1543", tween: [ "transform", "${_i4}", "scaleY", '0.82773', { fromValue: '0.82773'}], position: 5000, duration: 0 },
            { id: "eid1593", tween: [ "transform", "${_i2}", "scaleY", '0.67521', { fromValue: '0.67521'}], position: 5000, duration: 0 },
            { id: "eid763", tween: [ "style", "${_FinalSign}", "top", '36px', { fromValue: '614px'}], position: 4000, duration: 1000 },
            { id: "eid1655", tween: [ "style", "${_Holidays}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid1654", tween: [ "style", "${_From}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid1628", tween: [ "style", "${_Starz}", "top", '238px', { fromValue: '236px'}], position: 750, duration: 541 },
            { id: "eid1636", tween: [ "style", "${_From}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 541 },
            { id: "eid1650", tween: [ "style", "${_From}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 500 },
            { id: "eid1586", tween: [ "transform", "${_i1}", "scaleX", '0.63182', { fromValue: '0.63182'}], position: 5000, duration: 0 },
            { id: "eid1648", tween: [ "style", "${_Happy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid1652", tween: [ "style", "${_Happy}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 500 },
            { id: "eid1608", tween: [ "style", "${_i5}", "left", '562px', { fromValue: '1364px'}], position: 0, duration: 5000 },
            { id: "eid1657", tween: [ "style", "${_FinalSign}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1658", tween: [ "style", "${_FinalSign}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid1617", tween: [ "transform", "${_i8}", "scaleX", '0.60948', { fromValue: '0.41'}], position: 0, duration: 5000 },
            { id: "eid1611", tween: [ "style", "${_turkeyImage}", "left", '-361px', { fromValue: '441px'}], position: 0, duration: 5000 },
            { id: "eid1535", tween: [ "transform", "${_i3}", "scaleY", '0.5286', { fromValue: '0.5286'}], position: 5000, duration: 0 },
            { id: "eid1565", tween: [ "style", "${_i6}", "top", '419px', { fromValue: '419px'}], position: 5000, duration: 0 },
            { id: "eid754", tween: [ "style", "${_introView}", "left", '-800px', { fromValue: '0px'}], position: 0, duration: 5000 },
            { id: "eid1618", tween: [ "transform", "${_i8}", "scaleY", '0.60948', { fromValue: '0.41'}], position: 0, duration: 5000 },
            { id: "eid1592", tween: [ "transform", "${_i2}", "scaleX", '0.67521', { fromValue: '0.67521'}], position: 5000, duration: 0 },
            { id: "eid1656", tween: [ "style", "${_Happy}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid1539", tween: [ "style", "${_i3}", "top", '320px', { fromValue: '320px'}], position: 5000, duration: 0 },
            { id: "eid1613", tween: [ "style", "${_i6}", "left", '-116px', { fromValue: '686px'}], position: 0, duration: 5000 },
            { id: "eid1534", tween: [ "transform", "${_i3}", "scaleX", '0.5286', { fromValue: '0.5286'}], position: 5000, duration: 0 },
            { id: "eid1609", tween: [ "style", "${_i4}", "left", '49px', { fromValue: '851px'}], position: 0, duration: 5000 },
            { id: "eid1561", tween: [ "transform", "${_i6}", "scaleY", '0.50787', { fromValue: '0.50787'}], position: 5000, duration: 0 },
            { id: "eid1531", tween: [ "style", "${_i5}", "top", '414px', { fromValue: '414px'}], position: 5000, duration: 0 },
            { id: "eid762", tween: [ "style", "${_FinalSign}", "left", '176px', { fromValue: '176px'}], position: 5000, duration: 0 },
            { id: "eid1638", tween: [ "style", "${_Holidays}", "left", '122px', { fromValue: '119px'}], position: 250, duration: 500 },
            { id: "eid1607", tween: [ "motion", "${_i8}", [[766.63,351.79,0,0],[469.83,378.77,-439.39,102.67,-407.58,95.23],[45.66,511.58,-424.18,75.47,-451.41,80.32],[-212.5,526,0,0]]], position: 0, duration: 5000 },
            { id: "eid1569", tween: [ "transform", "${_i7}", "scaleY", '0.82353', { fromValue: '0.82353'}], position: 5000, duration: 0 },
            { id: "eid1614", tween: [ "style", "${_i2}", "left", '-780px', { fromValue: '22px'}], position: 0, duration: 5000 },
            { id: "eid1642", tween: [ "style", "${_Happy}", "left", '242px', { fromValue: '239px'}], position: 500, duration: 500 },
            { id: "eid1615", tween: [ "style", "${_i3}", "left", '180px', { fromValue: '982px'}], position: 0, duration: 5000 },
            { id: "eid1632", tween: [ "style", "${_From}", "top", '253px', { fromValue: '251px'}], position: 1000, duration: 541 },
            { id: "eid1640", tween: [ "style", "${_Holidays}", "top", '113px', { fromValue: '13px'}], position: 250, duration: 500 },
            { id: "eid1612", tween: [ "style", "${_i7}", "left", '-530px', { fromValue: '272px'}], position: 0, duration: 5000 },
            { id: "eid1644", tween: [ "style", "${_Happy}", "top", '15px', { fromValue: '-51px'}], position: 500, duration: 500 },
            { id: "eid1653", tween: [ "style", "${_Starz}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid1634", tween: [ "style", "${_Starz}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 541 },
            { id: "eid1649", tween: [ "style", "${_Starz}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 500 },
            { id: "eid1597", tween: [ "style", "${_i2}", "top", '441px', { fromValue: '441px'}], position: 5000, duration: 0 }         ]
      }
   }
},
"FinalSign": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'finalSign2',
      type: 'image',
      rect: ['0px','0px','458px','527px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/finalSign2.png','0px','0px']
   },
   {
      id: 'playAgain',
      type: 'image',
      rect: ['153px','455px','151px','34px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/playAgain.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['134px','114px','189px','85px','auto','auto'],
      id: 'ScoreText',
      text: '150',
      align: 'center',
      font: ['Arial, Helvetica, sans-serif',85,'rgba(72,50,37,1.00)','700','none','']
   },
   {
      type: 'text',
      rect: ['95px','203px','274px','34px','auto','auto'],
      id: 'Ranking',
      text: 'You\'re a Legend Of The Ice',
      align: 'center',
      font: ['Arial, Helvetica, sans-serif',20,'rgba(72,50,37,1.00)','400','none','']
   },
   {
      type: 'text',
      rect: ['62px','230px','333px','34px','auto','auto'],
      id: 'Description',
      text: 'Just a little more practice and you\'ll be a pro!',
      align: 'center',
      font: ['Arial, Helvetica, sans-serif',16,'rgba(72,50,37,1.00)','400','none','']
   },
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['104px','270px','250px','175px','auto','auto'],
      fill: ['rgba(255,255,255,0.30)']
   },
   {
      rect: ['104px','420px','250px','24px','auto','auto'],
      opacity: 0.6,
      id: 'Level',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(173,28,31,1.00)']
   },
   {
      id: 'ranking',
      type: 'image',
      rect: ['104px','270px','250px','175px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ranking.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ranking}": [
            ["style", "top", '203px'],
            ["style", "width", '274px'],
            ["style", "text-align", 'center'],
            ["style", "height", '34px'],
            ["color", "color", 'rgba(72,50,37,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '95px'],
            ["style", "font-size", '20px']
         ],
         "${_Level}": [
            ["color", "background-color", 'rgba(173,28,31,1.00)'],
            ["style", "opacity", '0.6'],
            ["style", "top", '420px']
         ],
         "${_ranking}": [
            ["style", "top", '270px'],
            ["style", "left", '104px']
         ],
         "${_ScoreText}": [
            ["style", "top", '114px'],
            ["style", "text-align", 'center'],
            ["style", "height", '85px'],
            ["color", "color", 'rgba(72,50,37,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '134px'],
            ["style", "font-size", '85px']
         ],
         "${symbolSelector}": [
            ["style", "height", '527px'],
            ["style", "width", '458px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,0.30)']
         ],
         "${_playAgain}": [
            ["style", "left", '153px'],
            ["style", "top", '455px']
         ],
         "${_Description}": [
            ["style", "top", '230px'],
            ["style", "font-size", '16px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(72,50,37,1.00)'],
            ["style", "height", '34px'],
            ["style", "font-weight", '400'],
            ["style", "left", '62px'],
            ["style", "width", '333px']
         ],
         "${_finalSign2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"Spare": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Spare',
      type: 'image',
      rect: ['0px','0px','379px','90px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Spare.png','0px','0px']
   },
   {
      id: 'spareBg',
      type: 'image',
      rect: ['190','-169','234px','232px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/spareBg.png','0px','0px']
   },
   {
      id: 'spareImage',
      type: 'image',
      rect: ['207','-125','226px','244px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/spareImage.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_spareBg}": [
            ["style", "top", '-206px'],
            ["transform", "scaleY", '0.25'],
            ["transform", "rotateZ", '-180deg'],
            ["transform", "scaleX", '0.25'],
            ["style", "opacity", '0'],
            ["style", "left", '73px']
         ],
         "${_Spare}": [
            ["style", "top", '134px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_spareImage}": [
            ["style", "top", '-62px'],
            ["style", "opacity", '0'],
            ["style", "left", '178px']
         ],
         "${symbolSelector}": [
            ["style", "height", '90px'],
            ["style", "width", '379px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid775", tween: [ "style", "${_Spare}", "top", '26px', { fromValue: '134px'}], position: 0, duration: 1000 },
            { id: "eid1182", tween: [ "transform", "${_spareBg}", "rotateZ", '0deg', { fromValue: '-180deg'}], position: 0, duration: 1000 },
            { id: "eid1213", tween: [ "style", "${_spareBg}", "top", '-206px', { fromValue: '-206px'}], position: 1000, duration: 0 },
            { id: "eid1188", tween: [ "style", "${_spareBg}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
            { id: "eid776", tween: [ "style", "${_Spare}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
            { id: "eid1173", tween: [ "style", "${_spareBg}", "left", '73px', { fromValue: '73px'}], position: 1000, duration: 0 },
            { id: "eid1177", tween: [ "style", "${_spareImage}", "left", '111px', { fromValue: '178px'}], position: 0, duration: 1000 },
            { id: "eid1184", tween: [ "transform", "${_spareBg}", "scaleX", '1', { fromValue: '0.25'}], position: 0, duration: 1000 },
            { id: "eid1180", tween: [ "style", "${_spareImage}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
            { id: "eid1178", tween: [ "style", "${_spareImage}", "top", '-139px', { fromValue: '-62px'}], position: 0, duration: 1000 },
            { id: "eid1186", tween: [ "transform", "${_spareBg}", "scaleY", '1', { fromValue: '0.25'}], position: 0, duration: 1000 }         ]
      }
   }
},
"Strike": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Strike',
      type: 'image',
      rect: ['0px','0px','413px','87px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Strike.png','0px','0px']
   },
   {
      id: 'strike2',
      type: 'image',
      rect: ['832','438','534px','704px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/strike2.png','0px','0px']
   },
   {
      id: 'strike22',
      type: 'image',
      rect: ['110','-125','228px','223px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/strike2.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_strike2}": [
            ["style", "top", '-352px'],
            ["style", "opacity", '0'],
            ["style", "left", '5px']
         ],
         "${_strike22}": [
            ["style", "top", '-67px'],
            ["style", "opacity", '0'],
            ["style", "left", '93px']
         ],
         "${_Strike}": [
            ["style", "top", '156px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '87px'],
            ["style", "width", '413px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid1210", tween: [ "style", "${_strike22}", "top", '-207px', { fromValue: '-67px'}], position: 0, duration: 1000 },
            { id: "eid780", tween: [ "style", "${_Strike}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
            { id: "eid779", tween: [ "style", "${_Strike}", "top", '18px', { fromValue: '156px'}], position: 0, duration: 1000 },
            { id: "eid1212", tween: [ "style", "${_strike22}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
            { id: "eid1205", tween: [ "style", "${_strike22}", "left", '93px', { fromValue: '93px'}], position: 1000, duration: 0 }         ]
      }
   }
},
"Turkey": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'turkey',
      type: 'image',
      rect: ['0px','0px','443px','85px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/turkey.png','0px','0px']
   },
   {
      id: 'turkeyImage',
      type: 'image',
      rect: ['654','346','243px','198px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/turkeyImage.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_turkey}": [
            ["style", "top", '164px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_turkeyImage}": [
            ["style", "top", '346px'],
            ["style", "opacity", '0'],
            ["style", "left", '654px']
         ],
         "${symbolSelector}": [
            ["style", "height", '85px'],
            ["style", "width", '443px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid784", tween: [ "style", "${_turkey}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
            { id: "eid783", tween: [ "style", "${_turkey}", "top", '0px', { fromValue: '164px'}], position: 0, duration: 1000 },
            { id: "eid1168", tween: [ "style", "${_turkeyImage}", "left", '84px', { fromValue: '654px'}], position: 0, duration: 0 },
            { id: "eid1170", tween: [ "style", "${_turkeyImage}", "top", '-209px', { fromValue: '-56px'}], position: 0, duration: 1000 },
            { id: "eid1172", tween: [ "style", "${_turkeyImage}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 }         ]
      }
   }
},
"Other": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 's0',
      type: 'image',
      rect: ['0px','0px','83px','106px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/0.png','0px','0px']
   },
   {
      id: 's1',
      type: 'image',
      rect: ['8px','1px','53px','103px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/1.png','0px','0px']
   },
   {
      id: 's2',
      type: 'image',
      rect: ['-1px','1px','86px','105px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/s2.png','0px','0px']
   },
   {
      id: 's3',
      type: 'image',
      rect: ['0px','1px','89px','106px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/s3.png','0px','0px']
   },
   {
      id: 's4',
      type: 'image',
      rect: ['-1px','4px','85px','103px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/s4.png','0px','0px']
   },
   {
      id: 's5',
      type: 'image',
      rect: ['-1px','0px','85px','105px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/s5.png','0px','0px']
   },
   {
      id: 's6',
      type: 'image',
      rect: ['0px','-2px','83px','108px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/s6.png','0px','0px']
   },
   {
      id: 's7',
      type: 'image',
      rect: ['8px','4px','76px','103px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/s7.png','0px','0px']
   },
   {
      id: 's8',
      type: 'image',
      rect: ['3px','-2px','86px','107px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/s8.png','0px','0px']
   },
   {
      id: 's9',
      type: 'image',
      rect: ['3px','-2px','84px','106px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/s9.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_s9}": [
            ["style", "left", '3px'],
            ["style", "top", '-2px']
         ],
         "${_s8}": [
            ["style", "left", '3px'],
            ["style", "top", '-2px']
         ],
         "${_s6}": [
            ["style", "left", '0px'],
            ["style", "top", '-2px']
         ],
         "${_s7}": [
            ["style", "left", '8px'],
            ["style", "top", '4px']
         ],
         "${_s0}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_s5}": [
            ["style", "left", '-1px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '106px'],
            ["style", "width", '83px']
         ],
         "${_s4}": [
            ["style", "left", '-1px'],
            ["style", "top", '4px']
         ],
         "${_s3}": [
            ["style", "left", '0px'],
            ["style", "top", '1px']
         ],
         "${_s1}": [
            ["style", "left", '8px'],
            ["style", "top", '1px']
         ],
         "${_s2}": [
            ["style", "left", '-1px'],
            ["style", "top", '1px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"OtherScore": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Score',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Score',
      symbolName: 'Other'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '106px'],
            ["style", "width", '83px']
         ],
         "${_Score}": [
            ["style", "top", '186px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid766", tween: [ "style", "${_Score}", "top", '-23px', { fromValue: '186px'}], position: 0, duration: 1000 },
            { id: "eid768", tween: [ "style", "${_Score}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 }         ]
      }
   }
},
"phit2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'ph2-rightarm',
      type: 'image',
      rect: ['98px','18px','43px','18px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ph2-rightarm.png','0px','0px']
   },
   {
      id: 'ph2-leftarm',
      type: 'image',
      rect: ['-22px','7px','43px','21px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ph2-leftarm.png','0px','0px']
   },
   {
      id: 'ph2-butt',
      type: 'image',
      rect: ['0px','0px','113px','72px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ph2-butt.png','0px','0px']
   },
   {
      id: 'ph2-leftfoot',
      type: 'image',
      rect: ['16px','36px','29px','24px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ph2-leftfoot.png','0px','0px']
   },
   {
      id: 'ph2-rightfoot',
      type: 'image',
      rect: ['64px','37px','29px','23px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ph2-rightfoot.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_ph2-leftarm}": [
            ["style", "top", '9px'],
            ["style", "left", '-21px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_ph2-rightarm}": [
            ["style", "top", '18px'],
            ["style", "left", '98px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_ph2-leftfoot}": [
            ["style", "left", '16px'],
            ["style", "top", '36px']
         ],
         "${_ph2-butt}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_ph2-rightfoot}": [
            ["style", "left", '64px'],
            ["style", "top", '37px']
         ],
         "${symbolSelector}": [
            ["style", "height", '72px'],
            ["style", "width", '113px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid818", tween: [ "style", "${_ph2-leftarm}", "top", '2px', { fromValue: '9px'}], position: 0, duration: 500 },
            { id: "eid832", tween: [ "style", "${_ph2-leftarm}", "top", '9px', { fromValue: '2px'}], position: 500, duration: 500 },
            { id: "eid808", tween: [ "style", "${_ph2-rightarm}", "left", '95px', { fromValue: '98px'}], position: 0, duration: 500 },
            { id: "eid828", tween: [ "style", "${_ph2-rightarm}", "left", '98px', { fromValue: '95px'}], position: 500, duration: 500 },
            { id: "eid810", tween: [ "transform", "${_ph2-leftarm}", "rotateZ", '21deg', { fromValue: '0deg'}], position: 0, duration: 500 },
            { id: "eid830", tween: [ "transform", "${_ph2-leftarm}", "rotateZ", '0deg', { fromValue: '21deg'}], position: 500, duration: 500 },
            { id: "eid807", tween: [ "transform", "${_ph2-rightarm}", "rotateZ", '-20deg', { fromValue: '0deg'}], position: 0, duration: 500 },
            { id: "eid827", tween: [ "transform", "${_ph2-rightarm}", "rotateZ", '0deg', { fromValue: '-20deg'}], position: 500, duration: 500 },
            { id: "eid821", tween: [ "style", "${_ph2-rightfoot}", "top", '34px', { fromValue: '37px'}], position: 0, duration: 250 },
            { id: "eid836", tween: [ "style", "${_ph2-rightfoot}", "top", '37px', { fromValue: '34px'}], position: 250, duration: 250 },
            { id: "eid809", tween: [ "style", "${_ph2-rightarm}", "top", '9px', { fromValue: '18px'}], position: 0, duration: 500 },
            { id: "eid829", tween: [ "style", "${_ph2-rightarm}", "top", '18px', { fromValue: '9px'}], position: 500, duration: 500 },
            { id: "eid822", tween: [ "style", "${_ph2-rightfoot}", "left", '62px', { fromValue: '64px'}], position: 0, duration: 250 },
            { id: "eid835", tween: [ "style", "${_ph2-rightfoot}", "left", '64px', { fromValue: '62px'}], position: 250, duration: 250 },
            { id: "eid824", tween: [ "style", "${_ph2-leftfoot}", "top", '35px', { fromValue: '36px'}], position: 250, duration: 250 },
            { id: "eid834", tween: [ "style", "${_ph2-leftfoot}", "top", '35px', { fromValue: '34px'}], position: 500, duration: 250 },
            { id: "eid823", tween: [ "style", "${_ph2-leftfoot}", "left", '19px', { fromValue: '16px'}], position: 250, duration: 250 },
            { id: "eid833", tween: [ "style", "${_ph2-leftfoot}", "left", '19px', { fromValue: '20px'}], position: 500, duration: 250 },
            { id: "eid817", tween: [ "style", "${_ph2-leftarm}", "left", '-18px', { fromValue: '-21px'}], position: 0, duration: 500 },
            { id: "eid831", tween: [ "style", "${_ph2-leftarm}", "left", '-21px', { fromValue: '-18px'}], position: 500, duration: 500 }         ]
      }
   }
},
"ph3": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'ph3-foot',
      type: 'image',
      rect: ['115px','47px','26px','16px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ph3-foot.png','0px','0px']
   },
   {
      id: 'ph3-body',
      type: 'image',
      rect: ['0px','0px','128px','72px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ph3-body.png','0px','0px']
   },
   {
      id: 'ph3-arm',
      type: 'image',
      rect: ['51px','14px','56px','29px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ph3-arm.png','0px','0px']
   },
   {
      type: 'image',
      id: 'ph3-head',
      rect: ['-39px','19px','62px','44px','auto','auto'],
      transform: [],
      fill: ['rgba(0,0,0,0)','images/ph3-head.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_ph3-head}": [
            ["style", "top", '19px'],
            ["style", "left", '-39px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_ph3-body}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_ph3-arm}": [
            ["style", "top", '14px'],
            ["style", "left", '51px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_ph3-foot}": [
            ["style", "top", '47px'],
            ["style", "left", '115px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '72px'],
            ["style", "width", '128px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid850", tween: [ "style", "${_ph3-head}", "top", '10px', { fromValue: '19px'}], position: 0, duration: 500 },
            { id: "eid853", tween: [ "style", "${_ph3-head}", "top", '19px', { fromValue: '10px'}], position: 500, duration: 500 },
            { id: "eid860", tween: [ "style", "${_ph3-arm}", "top", '9px', { fromValue: '14px'}], position: 500, duration: 250 },
            { id: "eid862", tween: [ "style", "${_ph3-arm}", "top", '14px', { fromValue: '9px'}], position: 750, duration: 250 },
            { id: "eid855", tween: [ "style", "${_ph3-foot}", "left", '120px', { fromValue: '115px'}], position: 206, duration: 294 },
            { id: "eid857", tween: [ "style", "${_ph3-foot}", "left", '115px', { fromValue: '120px'}], position: 500, duration: 250 },
            { id: "eid859", tween: [ "style", "${_ph3-arm}", "left", '50px', { fromValue: '51px'}], position: 500, duration: 250 },
            { id: "eid863", tween: [ "style", "${_ph3-arm}", "left", '51px', { fromValue: '50px'}], position: 750, duration: 250 },
            { id: "eid858", tween: [ "transform", "${_ph3-arm}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 500, duration: 250 },
            { id: "eid861", tween: [ "transform", "${_ph3-arm}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 750, duration: 250 },
            { id: "eid848", tween: [ "transform", "${_ph3-head}", "rotateZ", '12deg', { fromValue: '0deg'}], position: 0, duration: 500 },
            { id: "eid851", tween: [ "transform", "${_ph3-head}", "rotateZ", '0deg', { fromValue: '12deg'}], position: 500, duration: 500 },
            { id: "eid854", tween: [ "transform", "${_ph3-foot}", "rotateZ", '-11deg', { fromValue: '0deg'}], position: 206, duration: 294 },
            { id: "eid856", tween: [ "transform", "${_ph3-foot}", "rotateZ", '0deg', { fromValue: '-11deg'}], position: 500, duration: 250 },
            { id: "eid849", tween: [ "style", "${_ph3-head}", "left", '-36px', { fromValue: '-39px'}], position: 0, duration: 500 },
            { id: "eid852", tween: [ "style", "${_ph3-head}", "left", '-39px', { fromValue: '-36px'}], position: 500, duration: 500 }         ]
      }
   }
},
"ph4": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'ph2-rightarm2',
      type: 'image',
      rect: ['98px','18px','43px','18px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ph2-rightarm2.png','0px','0px']
   },
   {
      id: 'ph2-leftarm2',
      type: 'image',
      rect: ['-21px','10px','43px','21px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ph2-leftarm2.png','0px','0px']
   },
   {
      id: 'ph2-butt2',
      type: 'image',
      rect: ['0px','0px','113px','72px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ph2-butt2.png','0px','0px']
   },
   {
      id: 'ph42',
      type: 'image',
      rect: ['26px','18px','61px','49px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ph4.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '72px'],
            ["style", "width", '113px']
         ],
         "${_ph2-butt2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_ph2-rightarm2}": [
            ["style", "top", '18px'],
            ["style", "left", '98px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_ph42}": [
            ["style", "top", '18px'],
            ["style", "left", '26px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_ph2-leftarm2}": [
            ["style", "top", '10px'],
            ["style", "left", '-21px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid876", tween: [ "style", "${_ph2-rightarm2}", "top", '30px', { fromValue: '18px'}], position: 0, duration: 500 },
            { id: "eid888", tween: [ "style", "${_ph2-rightarm2}", "top", '18px', { fromValue: '30px'}], position: 500, duration: 500 },
            { id: "eid878", tween: [ "transform", "${_ph2-leftarm2}", "rotateZ", '-26deg', { fromValue: '0deg'}], position: 0, duration: 500 },
            { id: "eid883", tween: [ "transform", "${_ph2-leftarm2}", "rotateZ", '0deg', { fromValue: '-26deg'}], position: 500, duration: 500 },
            { id: "eid879", tween: [ "style", "${_ph2-leftarm2}", "top", '19px', { fromValue: '10px'}], position: 0, duration: 500 },
            { id: "eid884", tween: [ "style", "${_ph2-leftarm2}", "top", '10px', { fromValue: '19px'}], position: 500, duration: 500 },
            { id: "eid880", tween: [ "style", "${_ph2-leftarm2}", "left", '-20px', { fromValue: '-21px'}], position: 0, duration: 500 },
            { id: "eid885", tween: [ "style", "${_ph2-leftarm2}", "left", '-21px', { fromValue: '-20px'}], position: 500, duration: 500 },
            { id: "eid875", tween: [ "transform", "${_ph2-rightarm2}", "rotateZ", '24deg', { fromValue: '0deg'}], position: 0, duration: 500 },
            { id: "eid886", tween: [ "transform", "${_ph2-rightarm2}", "rotateZ", '0deg', { fromValue: '24deg'}], position: 500, duration: 500 },
            { id: "eid881", tween: [ "transform", "${_ph42}", "rotateZ", '18deg', { fromValue: '0deg'}], position: 0, duration: 500 },
            { id: "eid882", tween: [ "transform", "${_ph42}", "rotateZ", '0deg', { fromValue: '18deg'}], position: 500, duration: 500 },
            { id: "eid877", tween: [ "style", "${_ph2-rightarm2}", "left", '97px', { fromValue: '98px'}], position: 0, duration: 500 },
            { id: "eid887", tween: [ "style", "${_ph2-rightarm2}", "left", '98px', { fromValue: '97px'}], position: 500, duration: 500 }         ]
      }
   }
},
"pRock": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'rockArms',
      type: 'image',
      rect: ['-29px','0px','166px','35px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/rockArms.png','0px','0px']
   },
   {
      id: 'rockBody',
      type: 'image',
      rect: ['0px','0px','129px','121px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/rockBody.png','0px','0px']
   },
   {
      id: 'rockHead',
      type: 'image',
      rect: ['17px','-45px','73px','58px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/rockHead.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_rockHead}": [
            ["style", "top", '-45px'],
            ["style", "left", '17px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '121px'],
            ["style", "width", '129px']
         ],
         "${_rockBody}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_rockArms}": [
            ["style", "top", '0px'],
            ["style", "left", '-29px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid1146", tween: [ "style", "${_rockArms}", "left", '-18px', { fromValue: '-29px'}], position: 0, duration: 250 },
            { id: "eid1150", tween: [ "style", "${_rockArms}", "left", '-29px', { fromValue: '-18px'}], position: 750, duration: 250 },
            { id: "eid1143", tween: [ "style", "${_rockHead}", "left", '40px', { fromValue: '17px'}], position: 0, duration: 250 },
            { id: "eid1153", tween: [ "style", "${_rockHead}", "left", '17px', { fromValue: '40px'}], position: 750, duration: 250 },
            { id: "eid1142", tween: [ "style", "${_rockHead}", "top", '-46px', { fromValue: '-45px'}], position: 0, duration: 250 },
            { id: "eid1154", tween: [ "style", "${_rockHead}", "top", '-45px', { fromValue: '-46px'}], position: 750, duration: 250 },
            { id: "eid1144", tween: [ "transform", "${_rockHead}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid1152", tween: [ "transform", "${_rockHead}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 750, duration: 250 },
            { id: "eid1147", tween: [ "style", "${_rockArms}", "top", '-5px', { fromValue: '0px'}], position: 0, duration: 250 },
            { id: "eid1151", tween: [ "style", "${_rockArms}", "top", '0px', { fromValue: '-5px'}], position: 750, duration: 250 },
            { id: "eid1141", tween: [ "transform", "${_rockBody}", "rotateZ", '39deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid1148", tween: [ "transform", "${_rockBody}", "rotateZ", '0deg', { fromValue: '39deg'}], position: 750, duration: 250 },
            { id: "eid1145", tween: [ "transform", "${_rockArms}", "rotateZ", '12deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid1149", tween: [ "transform", "${_rockArms}", "rotateZ", '0deg', { fromValue: '12deg'}], position: 750, duration: 250 }         ]
      }
   }
},
"pointRight": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pRightBody',
      type: 'image',
      rect: ['0px','0px','119px','126px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pRightBody.png','0px','0px']
   },
   {
      id: 'pRightArms',
      type: 'image',
      rect: ['26px','13px','118px','48px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pRightArms.png','0px','0px']
   },
   {
      id: 'pRight_head',
      type: 'image',
      rect: ['26px','-46px','75px','59px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pRight_head.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '126px'],
            ["style", "width", '119px']
         ],
         "${_pRight_head}": [
            ["style", "top", '-46px'],
            ["style", "left", '26px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_pRightArms}": [
            ["style", "left", '26px'],
            ["style", "top", '13px']
         ],
         "${_pRightBody}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         timeline: [
            { id: "eid1158", tween: [ "style", "${_pRight_head}", "top", '-45px', { fromValue: '-46px'}], position: 0, duration: 250 },
            { id: "eid1163", tween: [ "style", "${_pRight_head}", "top", '-46px', { fromValue: '-45px'}], position: 250, duration: 250 },
            { id: "eid1161", tween: [ "style", "${_pRight_head}", "left", '26px', { fromValue: '26px'}], position: 0, duration: 0 },
            { id: "eid1156", tween: [ "transform", "${_pRight_head}", "rotateZ", '11deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid1162", tween: [ "transform", "${_pRight_head}", "rotateZ", '0deg', { fromValue: '11deg'}], position: 250, duration: 250 }         ]
      }
   }
},
"pointLeft": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pRightBody2',
      type: 'image',
      rect: ['1px','3px','119px','126px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pRightBody2.png','0px','0px']
   },
   {
      id: 'pLeftHead',
      type: 'image',
      rect: ['30px','-44px','75px','59px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pLeftHead.png','0px','0px']
   },
   {
      id: 'pLeftArms',
      type: 'image',
      rect: ['-22px','12px','118px','48px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pLeftArms.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pRightBody2}": [
            ["style", "top", '3px'],
            ["style", "left", '1px']
         ],
         "${symbolSelector}": [
            ["style", "height", '126px'],
            ["style", "width", '119px']
         ],
         "${_pLeftArms}": [
            ["style", "left", '-22px'],
            ["style", "top", '12px']
         ],
         "${_pLeftHead}": [
            ["style", "top", '-44px'],
            ["style", "left", '30px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         timeline: [
            { id: "eid1165", tween: [ "transform", "${_pLeftHead}", "rotateZ", '-13deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid1166", tween: [ "transform", "${_pLeftHead}", "rotateZ", '0deg', { fromValue: '-13deg'}], position: 250, duration: 250 }         ]
      }
   }
},
"JumpingSnowman": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'shadow2',
      type: 'image',
      rect: ['13px','152px','106px','33px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/shadow2.png','0px','0px']
   },
   {
      id: 'rightArm',
      type: 'image',
      rect: ['88px','79px','30px','33px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/rightArm.png','0px','0px']
   },
   {
      id: 'introBowlingPenguinCopy',
      type: 'image',
      rect: ['0px','0px','131px','169px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/introBowlingPenguin.png','0px','0px']
   },
   {
      id: 'introArmCopy',
      type: 'image',
      rect: ['-25px','105px','60px','23px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/introArm.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_introArmCopy}": [
            ["style", "top", '105px'],
            ["style", "left", '-25px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_rightArm}": [
            ["style", "top", '79px'],
            ["style", "left", '88px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '169px'],
            ["style", "width", '131px']
         ],
         "${_introBowlingPenguinCopy}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_shadow2}": [
            ["style", "left", '13px'],
            ["style", "top", '152px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid1356", tween: [ "style", "${_introArmCopy}", "top", '65px', { fromValue: '105px'}], position: 0, duration: 500 },
            { id: "eid1365", tween: [ "style", "${_introArmCopy}", "top", '105px', { fromValue: '65px'}], position: 500, duration: 500 },
            { id: "eid1361", tween: [ "style", "${_rightArm}", "left", '79px', { fromValue: '88px'}], position: 0, duration: 500 },
            { id: "eid1367", tween: [ "style", "${_rightArm}", "left", '88px', { fromValue: '79px'}], position: 500, duration: 500 },
            { id: "eid1355", tween: [ "style", "${_introBowlingPenguinCopy}", "top", '-28px', { fromValue: '0px'}], position: 0, duration: 500 },
            { id: "eid1362", tween: [ "style", "${_introBowlingPenguinCopy}", "top", '0px', { fromValue: '-28px'}], position: 500, duration: 500 },
            { id: "eid1357", tween: [ "style", "${_rightArm}", "top", '44px', { fromValue: '79px'}], position: 0, duration: 500 },
            { id: "eid1368", tween: [ "style", "${_rightArm}", "top", '79px', { fromValue: '44px'}], position: 500, duration: 500 },
            { id: "eid1358", tween: [ "transform", "${_introArmCopy}", "rotateZ", '31deg', { fromValue: '0deg'}], position: 0, duration: 500 },
            { id: "eid1363", tween: [ "transform", "${_introArmCopy}", "rotateZ", '0deg', { fromValue: '31deg'}], position: 500, duration: 500 },
            { id: "eid1360", tween: [ "transform", "${_rightArm}", "rotateZ", '-11deg', { fromValue: '0deg'}], position: 0, duration: 500 },
            { id: "eid1366", tween: [ "transform", "${_rightArm}", "rotateZ", '0deg', { fromValue: '-11deg'}], position: 500, duration: 500 },
            { id: "eid1359", tween: [ "style", "${_introArmCopy}", "left", '-17px', { fromValue: '-25px'}], position: 0, duration: 500 },
            { id: "eid1364", tween: [ "style", "${_introArmCopy}", "left", '-25px', { fromValue: '-17px'}], position: 500, duration: 500 }         ]
      }
   }
},
"snowman_game": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'smla',
      type: 'image',
      rect: ['13px','79px','30px','33px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/smla.png','0px','0px']
   },
   {
      id: 'smbody',
      type: 'image',
      rect: ['52px','116px','131px','169px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/smbody.png','0px','0px']
   },
   {
      id: 'smrarm',
      type: 'image',
      rect: ['85px','105px','60px','23px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/smrarm.png','0px','0px']
   },
   {
      rect: ['107px','84px','60px','56px','auto','auto'],
      id: 'smball',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/smball.png','0px','0px']
   },
   {
      rect: ['-38px','60px','217px','104px','auto','auto'],
      id: 'snsign',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/snsign.png','0px','0px']
   },
   {
      rect: ['185','149','38px','75px','auto','auto'],
      id: 'smhand',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/smhand.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_snsign}": [
            ["style", "top", '60px'],
            ["style", "display", 'none'],
            ["style", "left", '-38px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_smball}": [
            ["transform", "scaleY", '0.8'],
            ["motion", "location", '137px 112px'],
            ["style", "opacity", '1'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '0.8']
         ],
         "${_smbody}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_smhand}": [
            ["style", "display", 'none'],
            ["style", "top", '64px'],
            ["style", "left", '138px'],
            ["transform", "rotateZ", '62deg']
         ],
         "${_smrarm}": [
            ["style", "top", '105px'],
            ["style", "left", '85px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '169px'],
            ["style", "width", '131px']
         ],
         "${_smla}": [
            ["style", "top", '79px'],
            ["style", "left", '13px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 7500,
         autoPlay: true,
         timeline: [
            { id: "eid1448", tween: [ "transform", "${_snsign}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 3566, duration: 119 },
            { id: "eid1449", tween: [ "transform", "${_snsign}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 3685, duration: 113 },
            { id: "eid1450", tween: [ "transform", "${_snsign}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 3798, duration: 137 },
            { id: "eid1451", tween: [ "transform", "${_snsign}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 3935, duration: 150 },
            { id: "eid1453", tween: [ "style", "${_smhand}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0 },
            { id: "eid1497", tween: [ "style", "${_smhand}", "display", 'none', { fromValue: 'block'}], position: 7500, duration: 0 },
            { id: "eid1475", tween: [ "style", "${_smhand}", "top", '41px', { fromValue: '64px'}], position: 6000, duration: 134 },
            { id: "eid1481", tween: [ "style", "${_smhand}", "top", '54px', { fromValue: '41px'}], position: 6134, duration: 116 },
            { id: "eid1484", tween: [ "style", "${_smhand}", "top", '45px', { fromValue: '54px'}], position: 6250, duration: 132 },
            { id: "eid1496", tween: [ "style", "${_smhand}", "top", '63px', { fromValue: '45px'}], position: 7394, duration: 106 },
            { id: "eid1405", tween: [ "style", "${_smrarm}", "top", '52px', { fromValue: '105px'}], position: 1000, duration: 250 },
            { id: "eid1413", tween: [ "style", "${_smrarm}", "top", '105px', { fromValue: '52px'}], position: 1250, duration: 250 },
            { id: "eid1433", tween: [ "style", "${_smrarm}", "top", '89px', { fromValue: '105px'}], position: 2000, duration: 130 },
            { id: "eid1436", tween: [ "style", "${_smrarm}", "top", '98px', { fromValue: '89px'}], position: 2130, duration: 120 },
            { id: "eid1441", tween: [ "style", "${_smrarm}", "top", '89px', { fromValue: '98px'}], position: 2250, duration: 250 },
            { id: "eid1444", tween: [ "style", "${_smrarm}", "top", '105px', { fromValue: '89px'}], position: 2500, duration: 250 },
            { id: "eid1478", tween: [ "style", "${_smrarm}", "top", '95px', { fromValue: '105px'}], position: 6000, duration: 134 },
            { id: "eid1487", tween: [ "style", "${_smrarm}", "top", '98px', { fromValue: '95px'}], position: 6134, duration: 116 },
            { id: "eid1490", tween: [ "style", "${_smrarm}", "top", '99px', { fromValue: '98px'}], position: 6250, duration: 132 },
            { id: "eid1493", tween: [ "style", "${_smrarm}", "top", '105px', { fromValue: '99px'}], position: 7394, duration: 106 },
            { id: "eid1422", tween: [ "style", "${_smball}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid1424", tween: [ "transform", "${_smball}", "scaleY", '0.8', { fromValue: '0.8'}], position: 2000, duration: 0 },
            { id: "eid1399", tween: [ "style", "${_smbody}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid1473", tween: [ "transform", "${_smhand}", "rotateZ", '41deg', { fromValue: '62deg'}], position: 6000, duration: 134 },
            { id: "eid1479", tween: [ "transform", "${_smhand}", "rotateZ", '59deg', { fromValue: '41deg'}], position: 6134, duration: 116 },
            { id: "eid1482", tween: [ "transform", "${_smhand}", "rotateZ", '40deg', { fromValue: '59deg'}], position: 6250, duration: 132 },
            { id: "eid1494", tween: [ "transform", "${_smhand}", "rotateZ", '65deg', { fromValue: '40deg'}], position: 7394, duration: 106 },
            { id: "eid1408", tween: [ "transform", "${_smla}", "rotateZ", '26deg', { fromValue: '0deg'}], position: 1000, duration: 250 },
            { id: "eid1414", tween: [ "transform", "${_smla}", "rotateZ", '0deg', { fromValue: '26deg'}], position: 1250, duration: 250 },
            { id: "eid1406", tween: [ "transform", "${_smrarm}", "rotateZ", '-36deg', { fromValue: '0deg'}], position: 1000, duration: 250 },
            { id: "eid1411", tween: [ "transform", "${_smrarm}", "rotateZ", '0deg', { fromValue: '-36deg'}], position: 1250, duration: 250 },
            { id: "eid1431", tween: [ "transform", "${_smrarm}", "rotateZ", '-65deg', { fromValue: '0deg'}], position: 2000, duration: 130 },
            { id: "eid1434", tween: [ "transform", "${_smrarm}", "rotateZ", '-130deg', { fromValue: '-65deg'}], position: 2130, duration: 120 },
            { id: "eid1439", tween: [ "transform", "${_smrarm}", "rotateZ", '-65deg', { fromValue: '-130deg'}], position: 2250, duration: 250 },
            { id: "eid1442", tween: [ "transform", "${_smrarm}", "rotateZ", '0deg', { fromValue: '-65deg'}], position: 2500, duration: 250 },
            { id: "eid1476", tween: [ "transform", "${_smrarm}", "rotateZ", '-24deg', { fromValue: '0deg'}], position: 6000, duration: 134 },
            { id: "eid1485", tween: [ "transform", "${_smrarm}", "rotateZ", '-15deg', { fromValue: '-24deg'}], position: 6134, duration: 116 },
            { id: "eid1488", tween: [ "transform", "${_smrarm}", "rotateZ", '-17deg', { fromValue: '-15deg'}], position: 6250, duration: 132 },
            { id: "eid1491", tween: [ "transform", "${_smrarm}", "rotateZ", '0deg', { fromValue: '-17deg'}], position: 7394, duration: 106 },
            { id: "eid1423", tween: [ "transform", "${_smball}", "scaleX", '0.8', { fromValue: '0.8'}], position: 2000, duration: 0 },
            { id: "eid1474", tween: [ "style", "${_smhand}", "left", '129px', { fromValue: '138px'}], position: 6000, duration: 134 },
            { id: "eid1480", tween: [ "style", "${_smhand}", "left", '140px', { fromValue: '129px'}], position: 6134, duration: 116 },
            { id: "eid1483", tween: [ "style", "${_smhand}", "left", '127px', { fromValue: '140px'}], position: 6250, duration: 132 },
            { id: "eid1495", tween: [ "style", "${_smhand}", "left", '139px', { fromValue: '127px'}], position: 7394, duration: 106 },
            { id: "eid1403", tween: [ "style", "${_smla}", "top", '34px', { fromValue: '79px'}], position: 1000, duration: 250 },
            { id: "eid1416", tween: [ "style", "${_smla}", "top", '79px', { fromValue: '34px'}], position: 1250, duration: 250 },
            { id: "eid1421", tween: [ "motion", "${_smball}", [[137,112,0,0],[-149.12,-9.08,-662.74,-35.48,-561.7,-30.07],[-684.89,68,0,0]]], position: 2000, duration: 750 },
            { id: "eid1409", tween: [ "style", "${_smla}", "left", '19px', { fromValue: '13px'}], position: 1000, duration: 250 },
            { id: "eid1415", tween: [ "style", "${_smla}", "left", '13px', { fromValue: '19px'}], position: 1250, duration: 250 },
            { id: "eid1418", tween: [ "style", "${_smball}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid1446", tween: [ "style", "${_smball}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid1407", tween: [ "style", "${_smrarm}", "left", '80px', { fromValue: '85px'}], position: 1000, duration: 250 },
            { id: "eid1412", tween: [ "style", "${_smrarm}", "left", '85px', { fromValue: '80px'}], position: 1250, duration: 250 },
            { id: "eid1432", tween: [ "style", "${_smrarm}", "left", '64px', { fromValue: '85px'}], position: 2000, duration: 130 },
            { id: "eid1435", tween: [ "style", "${_smrarm}", "left", '41px', { fromValue: '64px'}], position: 2130, duration: 120 },
            { id: "eid1440", tween: [ "style", "${_smrarm}", "left", '64px', { fromValue: '41px'}], position: 2250, duration: 250 },
            { id: "eid1443", tween: [ "style", "${_smrarm}", "left", '85px', { fromValue: '64px'}], position: 2500, duration: 250 },
            { id: "eid1477", tween: [ "style", "${_smrarm}", "left", '86px', { fromValue: '85px'}], position: 6000, duration: 134 },
            { id: "eid1486", tween: [ "style", "${_smrarm}", "left", '88px', { fromValue: '86px'}], position: 6134, duration: 116 },
            { id: "eid1489", tween: [ "style", "${_smrarm}", "left", '84px', { fromValue: '88px'}], position: 6250, duration: 132 },
            { id: "eid1492", tween: [ "style", "${_smrarm}", "left", '85px', { fromValue: '84px'}], position: 7394, duration: 106 },
            { id: "eid1400", tween: [ "style", "${_smbody}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid1404", tween: [ "style", "${_smbody}", "top", '-39px', { fromValue: '0px'}], position: 1000, duration: 250 },
            { id: "eid1417", tween: [ "style", "${_smbody}", "top", '0px', { fromValue: '-39px'}], position: 1250, duration: 250 },
            { id: "eid1447", tween: [ "style", "${_snsign}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid1452", tween: [ "style", "${_snsign}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 }         ]
      }
   }
},
"pJump": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pRArm',
      type: 'image',
      rect: ['14px','74px','55px','24px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pRArm.png','0px','0px']
   },
   {
      id: 'pLArm',
      type: 'image',
      rect: ['128px','74px','56px','24px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pLArm.png','0px','0px']
   },
   {
      id: 'pBody',
      type: 'image',
      rect: ['42px','67px','120px','115px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pBody.png','0px','0px']
   },
   {
      id: 'pHead',
      type: 'image',
      rect: ['64px','19px','75px','55px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pHead.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pHead}": [
            ["style", "left", '64px'],
            ["style", "top", '19px']
         ],
         "${_pBody}": [
            ["style", "left", '42px'],
            ["style", "top", '67px']
         ],
         "${symbolSelector}": [
            ["style", "height", '202px'],
            ["style", "width", '202px']
         ],
         "${_pLArm}": [
            ["style", "top", '74px'],
            ["style", "left", '128px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_pRArm}": [
            ["style", "top", '74px'],
            ["style", "left", '14px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid1515", tween: [ "style", "${_pRArm}", "left", '21px', { fromValue: '14px'}], position: 0, duration: 500 },
            { id: "eid1518", tween: [ "style", "${_pRArm}", "left", '14px', { fromValue: '21px'}], position: 500, duration: 500 },
            { id: "eid1513", tween: [ "style", "${_pBody}", "top", '43px', { fromValue: '67px'}], position: 0, duration: 500 },
            { id: "eid1517", tween: [ "style", "${_pBody}", "top", '67px', { fromValue: '43px'}], position: 500, duration: 500 },
            { id: "eid290", tween: [ "style", "${_pLArm}", "left", '123px', { fromValue: '128px'}], position: 0, duration: 500 },
            { id: "eid297", tween: [ "style", "${_pLArm}", "left", '128px', { fromValue: '123px'}], position: 500, duration: 500 },
            { id: "eid293", tween: [ "style", "${_pRArm}", "top", '31px', { fromValue: '74px'}], position: 0, duration: 500 },
            { id: "eid295", tween: [ "style", "${_pRArm}", "top", '74px', { fromValue: '31px'}], position: 500, duration: 500 },
            { id: "eid289", tween: [ "transform", "${_pLArm}", "rotateZ", '-50deg', { fromValue: '0deg'}], position: 0, duration: 500 },
            { id: "eid296", tween: [ "transform", "${_pLArm}", "rotateZ", '0deg', { fromValue: '-50deg'}], position: 500, duration: 500 },
            { id: "eid291", tween: [ "style", "${_pLArm}", "top", '31px', { fromValue: '74px'}], position: 0, duration: 500 },
            { id: "eid298", tween: [ "style", "${_pLArm}", "top", '74px', { fromValue: '31px'}], position: 500, duration: 500 },
            { id: "eid1514", tween: [ "style", "${_pHead}", "top", '-5px', { fromValue: '19px'}], position: 0, duration: 500 },
            { id: "eid1516", tween: [ "style", "${_pHead}", "top", '19px', { fromValue: '-5px'}], position: 500, duration: 500 },
            { id: "eid292", tween: [ "transform", "${_pRArm}", "rotateZ", '53deg', { fromValue: '0deg'}], position: 0, duration: 500 },
            { id: "eid294", tween: [ "transform", "${_pRArm}", "rotateZ", '0deg', { fromValue: '53deg'}], position: 500, duration: 500 }         ]
      }
   }
},
"pLaugh": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'laughHead',
      type: 'image',
      rect: ['17px','-38px','85px','75px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/laughHead.png','0px','0px']
   },
   {
      id: 'laughBody',
      type: 'image',
      rect: ['0px','0px','120px','141px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/laughBody.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_laughBody}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_laughHead}": [
            ["style", "top", '-38px'],
            ["style", "left", '17px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '141px'],
            ["style", "width", '120px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         timeline: [
            { id: "eid1525", tween: [ "transform", "${_laughHead}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 0, duration: 130 },
            { id: "eid1526", tween: [ "transform", "${_laughHead}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 130, duration: 120 },
            { id: "eid1527", tween: [ "transform", "${_laughHead}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 250, duration: 116 },
            { id: "eid1528", tween: [ "transform", "${_laughHead}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 366, duration: 134 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-103187271");
