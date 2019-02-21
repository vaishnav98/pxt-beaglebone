'use strict';
pxsim.noRefCounting();
pxsim.setTitle("beaglegreen");
pxsim.setConfigData({
 "1": 1,
 "2": 2,
 "3": 3,
 "4": 4,
 "37": 160,
 "38": 128,
 "39": 144,
 "40": 922879,
 "41": 24,
 "106": 106,
 "107": 107,
 "108": 108,
 "109": 109,
 "110": 110,
 "111": 111,
 "112": 112,
 "113": 113,
 "114": 114,
 "115": 115,
 "116": 116,
 "117": 117,
 "118": 118,
 "125": 125,
 "160": 160,
 "161": 161,
 "162": 162,
 "163": 163,
 "164": 164,
 "165": 165,
 "166": 166,
 "167": 167,
 "170": 170,
 "171": 171,
 "172": 172,
 "173": 173,
 "174": 174,
 "175": 175,
 "176": 176,
 "179": 179,
 "182": 182,
 "184": 184,
 "185": 185,
 "186": 186,
 "187": 187,
 "188": 188,
 "189": 189,
 "190": 190,
 "191": 191,
 "192": 192,
 "193": 193,
 "194": 194,
 "195": 195,
 "200": 1
}, {
 "USR0": 1,
 "USR1": 2,
 "USR2": 3,
 "USR3": 4,
 "DISPLAY_WIDTH": 37,
 "DISPLAY_HEIGHT": 38,
 "DISPLAY_CFG0": 39,
 "DISPLAY_CFG1": 40,
 "DISPLAY_CFG2": 41,
 "P8_07": 106,
 "P8_08": 107,
 "P8_09": 108,
 "P8_10": 109,
 "P8_11": 110,
 "P8_12": 111,
 "P8_13": 112,
 "P8_14": 113,
 "P8_15": 114,
 "P8_16": 115,
 "P8_17": 116,
 "P8_18": 117,
 "P8_19": 118,
 "P8_26": 125,
 "P9_11": 160,
 "P9_12": 161,
 "P9_13": 162,
 "P9_14": 163,
 "P9_15": 164,
 "P9_16": 165,
 "P9_17": 166,
 "P9_18": 167,
 "P9_21": 170,
 "P9_22": 171,
 "P9_23": 172,
 "P9_24": 173,
 "P9_25": 174,
 "P9_26": 175,
 "P9_27": 176,
 "P9_30": 179,
 "P9_33": 182,
 "P9_35": 184,
 "P9_36": 185,
 "P9_37": 186,
 "P9_38": 187,
 "P9_39": 188,
 "P9_40": 189,
 "P9_41": 190,
 "P9_42": 191,
 "P9_43": 192,
 "P9_44": 193,
 "P9_45": 194,
 "P9_46": 195,
 "NUM_NEOPIXELS": 200
});
pxsim.pxtrt.mapKeyNames = [
 ""
];
__this.setupPerfCounters([]);


var _main___P1 = entryPoint = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    r0 = globals._pollEventQueue___121;
    r0 = undefined;
    globals._pollEventQueue___121 = (r0);
    return leave(s, r0)
  default: oops()
} } }
_main___P1.info = {"start":0,"length":0,"line":0,"column":0,"endLine":0,"endColumn":0,"fileName":"config.ts","functionName":"<main>"}
_main___P1.continuations = [  ]


setupDebugger(1)
