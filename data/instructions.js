//@format
const INSTRUCTIONS = {
  unreachable: {
    args: [],
    opCode: 0,
  },
  nop: {
    args: [],
    opCode: 1,
  },
  block: {
    args: ['bt'],
    opCode: 2,
  },
  loop: {
    args: ['bt'],
    opCode: 3,
  },
  if: {
    args: ['bt'],
    opCode: 4,
  },
  else: {
    args: [],
    opCode: 5,
  },
  end: {
    args: [],
    opCode: 11,
  },
  br: {
    args: ['l'],
    opCode: 12,
  },
  br_if: {
    args: ['l'],
    opCode: 13,
  },
  br_table: {
    args: ['lAst', 'l'],
    opCode: 14,
  },
  return: {
    args: [],
    opCode: 15,
  },
  call: {
    args: ['x'],
    opCode: 16,
  },
  call_indirect: {
    args: ['x', 'y'],
    opCode: 17,
  },
  drop: {
    args: [],
    opCode: 26,
  },
  select: {
    args: ['t'],
    opCode: 28,
  },
  'local.get': {
    args: ['x'],
    opCode: 32,
  },
  'local.set': {
    args: ['x'],
    opCode: 33,
  },
  'local.tee': {
    args: ['x'],
    opCode: 34,
  },
  'global.get': {
    args: ['x'],
    opCode: 35,
  },
  'global.set': {
    args: ['x'],
    opCode: 36,
  },
  'table.get': {
    args: ['x'],
    opCode: 37,
  },
  'table.set': {
    args: ['x'],
    opCode: 38,
  },
  'i32.load': {
    args: ['memarg'],
    opCode: 40,
  },
  'i64.load': {
    args: ['memarg'],
    opCode: 41,
  },
  'f32.load': {
    args: ['memarg'],
    opCode: 42,
  },
  'f64.load': {
    args: ['memarg'],
    opCode: 43,
  },
  'i32.load8_s': {
    args: ['memarg'],
    opCode: 44,
  },
  'i32.load8_u': {
    args: ['memarg'],
    opCode: 45,
  },
  'i32.load16_s': {
    args: ['memarg'],
    opCode: 46,
  },
  'i32.load16_u': {
    args: ['memarg'],
    opCode: 47,
  },
  'i64.load8_s': {
    args: ['memarg'],
    opCode: 48,
  },
  'i64.load8_u': {
    args: ['memarg'],
    opCode: 49,
  },
  'i64.load16_s': {
    args: ['memarg'],
    opCode: 50,
  },
  'i64.load16_u': {
    args: ['memarg'],
    opCode: 51,
  },
  'i64.load32_s': {
    args: ['memarg'],
    opCode: 52,
  },
  'i64.load32_u': {
    args: ['memarg'],
    opCode: 53,
  },
  'i32.store': {
    args: ['memarg'],
    opCode: 54,
  },
  'i64.store': {
    args: ['memarg'],
    opCode: 55,
  },
  'f32.store': {
    args: ['memarg'],
    opCode: 56,
  },
  'f64.store': {
    args: ['memarg'],
    opCode: 57,
  },
  'i32.store8': {
    args: ['memarg'],
    opCode: 58,
  },
  'i32.store16': {
    args: ['memarg'],
    opCode: 59,
  },
  'i64.store8': {
    args: ['memarg'],
    opCode: 60,
  },
  'i64.store16': {
    args: ['memarg'],
    opCode: 61,
  },
  'i64.store32': {
    args: ['memarg'],
    opCode: 62,
  },
  'memory.size': {
    args: [],
    opCode: 63,
  },
  'memory.grow': {
    args: [],
    opCode: 64,
  },
  'i32.const': {
    args: ['i32'],
    opCode: 65,
  },
  'i64.const': {
    args: ['i64'],
    opCode: 66,
  },
  'f32.const': {
    args: ['f32'],
    opCode: 67,
  },
  'f64.const': {
    args: ['f64'],
    opCode: 68,
  },
  'i32.eqz': {
    args: [],
    opCode: 69,
  },
  'i32.eq': {
    args: [],
    opCode: 70,
  },
  'i32.ne': {
    args: [],
    opCode: 71,
  },
  'i32.lt_s': {
    args: [],
    opCode: 72,
  },
  'i32.lt_u': {
    args: [],
    opCode: 73,
  },
  'i32.gt_s': {
    args: [],
    opCode: 74,
  },
  'i32.gt_u': {
    args: [],
    opCode: 75,
  },
  'i32.le_s': {
    args: [],
    opCode: 76,
  },
  'i32.le_u': {
    args: [],
    opCode: 77,
  },
  'i32.ge_s': {
    args: [],
    opCode: 78,
  },
  'i32.ge_u': {
    args: [],
    opCode: 79,
  },
  'i64.eqz': {
    args: [],
    opCode: 80,
  },
  'i64.eq': {
    args: [],
    opCode: 81,
  },
  'i64.ne': {
    args: [],
    opCode: 82,
  },
  'i64.lt_s': {
    args: [],
    opCode: 83,
  },
  'i64.lt_u': {
    args: [],
    opCode: 84,
  },
  'i64.gt_s': {
    args: [],
    opCode: 85,
  },
  'i64.gt_u': {
    args: [],
    opCode: 86,
  },
  'i64.le_s': {
    args: [],
    opCode: 87,
  },
  'i64.le_u': {
    args: [],
    opCode: 88,
  },
  'i64.ge_s': {
    args: [],
    opCode: 89,
  },
  'i64.ge_u': {
    args: [],
    opCode: 90,
  },
  'f32.eq': {
    args: [],
    opCode: 91,
  },
  'f32.ne': {
    args: [],
    opCode: 92,
  },
  'f32.lt': {
    args: [],
    opCode: 93,
  },
  'f32.gt': {
    args: [],
    opCode: 94,
  },
  'f32.le': {
    args: [],
    opCode: 95,
  },
  'f32.ge': {
    args: [],
    opCode: 96,
  },
  'f64.eq': {
    args: [],
    opCode: 97,
  },
  'f64.ne': {
    args: [],
    opCode: 98,
  },
  'f64.lt': {
    args: [],
    opCode: 99,
  },
  'f64.gt': {
    args: [],
    opCode: 100,
  },
  'f64.le': {
    args: [],
    opCode: 101,
  },
  'f64.ge': {
    args: [],
    opCode: 102,
  },
  'i32.clz': {
    args: [],
    opCode: 103,
  },
  'i32.ctz': {
    args: [],
    opCode: 104,
  },
  'i32.popcnt': {
    args: [],
    opCode: 105,
  },
  'i32.add': {
    args: [],
    opCode: 106,
  },
  'i32.sub': {
    args: [],
    opCode: 107,
  },
  'i32.mul': {
    args: [],
    opCode: 108,
  },
  'i32.div_s': {
    args: [],
    opCode: 109,
  },
  'i32.div_u': {
    args: [],
    opCode: 110,
  },
  'i32.rem_s': {
    args: [],
    opCode: 111,
  },
  'i32.rem_u': {
    args: [],
    opCode: 112,
  },
  'i32.and': {
    args: [],
    opCode: 113,
  },
  'i32.or': {
    args: [],
    opCode: 114,
  },
  'i32.xor': {
    args: [],
    opCode: 115,
  },
  'i32.shl': {
    args: [],
    opCode: 116,
  },
  'i32.shr_s': {
    args: [],
    opCode: 117,
  },
  'i32.shr_u': {
    args: [],
    opCode: 118,
  },
  'i32.rotl': {
    args: [],
    opCode: 119,
  },
  'i32.rotr': {
    args: [],
    opCode: 120,
  },
  'i64.clz': {
    args: [],
    opCode: 121,
  },
  'i64.ctz': {
    args: [],
    opCode: 122,
  },
  'i64.popcnt': {
    args: [],
    opCode: 123,
  },
  'i64.add': {
    args: [],
    opCode: 124,
  },
  'i64.sub': {
    args: [],
    opCode: 125,
  },
  'i64.mul': {
    args: [],
    opCode: 126,
  },
  'i64.div_s': {
    args: [],
    opCode: 127,
  },
  'i64.div_u': {
    args: [],
    opCode: 128,
  },
  'i64.rem_s': {
    args: [],
    opCode: 129,
  },
  'i64.rem_u': {
    args: [],
    opCode: 130,
  },
  'i64.and': {
    args: [],
    opCode: 131,
  },
  'i64.or': {
    args: [],
    opCode: 132,
  },
  'i64.xor': {
    args: [],
    opCode: 133,
  },
  'i64.shl': {
    args: [],
    opCode: 134,
  },
  'i64.shr_s': {
    args: [],
    opCode: 135,
  },
  'i64.shr_u': {
    args: [],
    opCode: 136,
  },
  'i64.rotl': {
    args: [],
    opCode: 137,
  },
  'i64.rotr': {
    args: [],
    opCode: 138,
  },
  'f32.abs': {
    args: [],
    opCode: 139,
  },
  'f32.neg': {
    args: [],
    opCode: 140,
  },
  'f32.ceil': {
    args: [],
    opCode: 141,
  },
  'f32.floor': {
    args: [],
    opCode: 142,
  },
  'f32.trunc': {
    args: [],
    opCode: 143,
  },
  'f32.nearest': {
    args: [],
    opCode: 144,
  },
  'f32.sqrt': {
    args: [],
    opCode: 145,
  },
  'f32.add': {
    args: [],
    opCode: 146,
  },
  'f32.sub': {
    args: [],
    opCode: 147,
  },
  'f32.mul': {
    args: [],
    opCode: 148,
  },
  'f32.div': {
    args: [],
    opCode: 149,
  },
  'f32.min': {
    args: [],
    opCode: 150,
  },
  'f32.max': {
    args: [],
    opCode: 151,
  },
  'f32.copysign': {
    args: [],
    opCode: 152,
  },
  'f64.abs': {
    args: [],
    opCode: 153,
  },
  'f64.neg': {
    args: [],
    opCode: 154,
  },
  'f64.ceil': {
    args: [],
    opCode: 155,
  },
  'f64.floor': {
    args: [],
    opCode: 156,
  },
  'f64.trunc': {
    args: [],
    opCode: 157,
  },
  'f64.nearest': {
    args: [],
    opCode: 158,
  },
  'f64.sqrt': {
    args: [],
    opCode: 159,
  },
  'f64.add': {
    args: [],
    opCode: 160,
  },
  'f64.sub': {
    args: [],
    opCode: 161,
  },
  'f64.mul': {
    args: [],
    opCode: 162,
  },
  'f64.div': {
    args: [],
    opCode: 163,
  },
  'f64.min': {
    args: [],
    opCode: 164,
  },
  'f64.max': {
    args: [],
    opCode: 165,
  },
  'f64.copysign': {
    args: [],
    opCode: 166,
  },
  'i32.wrap_i64': {
    args: [],
    opCode: 167,
  },
  'i32.trunc_f32_s': {
    args: [],
    opCode: 168,
  },
  'i32.trunc_f32_u': {
    args: [],
    opCode: 169,
  },
  'i32.trunc_f64_s': {
    args: [],
    opCode: 170,
  },
  'i32.trunc_f64_u': {
    args: [],
    opCode: 171,
  },
  'i64.extend_i32_s': {
    args: [],
    opCode: 172,
  },
  'i64.extend_i32_u': {
    args: [],
    opCode: 173,
  },
  'i64.trunc_f32_s': {
    args: [],
    opCode: 174,
  },
  'i64.trunc_f32_u': {
    args: [],
    opCode: 175,
  },
  'i64.trunc_f64_s': {
    args: [],
    opCode: 176,
  },
  'i64.trunc_f64_u': {
    args: [],
    opCode: 177,
  },
  'f32.convert_i32_s': {
    args: [],
    opCode: 178,
  },
  'f32.convert_i32_u': {
    args: [],
    opCode: 179,
  },
  'f32.convert_i64_s': {
    args: [],
    opCode: 180,
  },
  'f32.convert_i64_u': {
    args: [],
    opCode: 181,
  },
  'f32.demote_f64': {
    args: [],
    opCode: 182,
  },
  'f64.convert_i32_s': {
    args: [],
    opCode: 183,
  },
  'f64.convert_i32_u': {
    args: [],
    opCode: 184,
  },
  'f64.convert_i64_s': {
    args: [],
    opCode: 185,
  },
  'f64.convert_i64_u': {
    args: [],
    opCode: 186,
  },
  'f64.promote_f32': {
    args: [],
    opCode: 187,
  },
  'i32.reinterpret_f32': {
    args: [],
    opCode: 188,
  },
  'i64.reinterpret_f64': {
    args: [],
    opCode: 189,
  },
  'f32.reinterpret_i32': {
    args: [],
    opCode: 190,
  },
  'f64.reinterpret_i64': {
    args: [],
    opCode: 191,
  },
  'i32.extend8_s': {
    args: [],
    opCode: 192,
  },
  'i32.extend16_s': {
    args: [],
    opCode: 193,
  },
  'i64.extend8_s': {
    args: [],
    opCode: 194,
  },
  'i64.extend16_s': {
    args: [],
    opCode: 195,
  },
  'i64.extend32_s': {
    args: [],
    opCode: 196,
  },
  'ref.null': {
    args: ['t'],
    opCode: 208,
  },
  'ref.is_null': {
    args: [],
    opCode: 209,
  },
  'ref.func': {
    args: ['x'],
    opCode: 210,
  },
  'i32.trunc_sat_f32_s': {
    args: [],
    opCode: 252,
  },
  'i32.trunc_sat_f32_u': {
    args: [],
    opCode: 252,
  },
  'i32.trunc_sat_f64_s': {
    args: [],
    opCode: 252,
  },
  'i32.trunc_sat_f64_u': {
    args: [],
    opCode: 252,
  },
  'i64.trunc_sat_f32_s': {
    args: [],
    opCode: 252,
  },
  'i64.trunc_sat_f32_u': {
    args: [],
    opCode: 252,
  },
  'i64.trunc_sat_f64_s': {
    args: [],
    opCode: 252,
  },
  'i64.trunc_sat_f64_u': {
    args: [],
    opCode: 252,
  },
  'memory.init': {
    args: ['x'],
    opCode: 252,
  },
  'data.drop': {
    args: ['x'],
    opCode: 252,
  },
  'memory.copy': {
    args: [],
    opCode: 252,
  },
  'memory.fill': {
    args: [],
    opCode: 252,
  },
  'table.init': {
    args: ['x', 'y'],
    opCode: 252,
  },
  'elem.drop': {
    args: ['x'],
    opCode: 252,
  },
  'table.copy': {
    args: ['x', 'y'],
    opCode: 252,
  },
  'table.grow': {
    args: ['x'],
    opCode: 252,
  },
  'table.size': {
    args: ['x'],
    opCode: 252,
  },
  'table.fill': {
    args: ['x'],
    opCode: 252,
  },
  'v128.load': {
    args: ['memarg'],
    opCode: 64768,
  },
  'v128.load8x8_s': {
    args: ['memarg'],
    opCode: 64769,
  },
  'v128.load8x8_u': {
    args: ['memarg'],
    opCode: 64770,
  },
  'v128.load16x4_s': {
    args: ['memarg'],
    opCode: 64771,
  },
  'v128.load16x4_u': {
    args: ['memarg'],
    opCode: 64772,
  },
  'v128.load32x2_s': {
    args: ['memarg'],
    opCode: 64773,
  },
  'v128.load32x2_u': {
    args: ['memarg'],
    opCode: 64774,
  },
  'v128.load8_splat': {
    args: ['memarg'],
    opCode: 64775,
  },
  'v128.load16_splat': {
    args: ['memarg'],
    opCode: 64776,
  },
  'v128.load32_splat': {
    args: ['memarg'],
    opCode: 64777,
  },
  'v128.load64_splat': {
    args: ['memarg'],
    opCode: 64778,
  },
  'v128.store': {
    args: ['memarg'],
    opCode: 64779,
  },
  'v128.const': {
    args: ['i128'],
    opCode: 64780,
  },
  'i8x16.shuffle': {
    args: ['laneidx16'],
    opCode: 64781,
  },
  'i8x16.swizzle': {
    args: [],
    opCode: 64782,
  },
  'i8x16.splat': {
    args: [],
    opCode: 64783,
  },
  'i16x8.splat': {
    args: [],
    opCode: 64784,
  },
  'i32x4.splat': {
    args: [],
    opCode: 64785,
  },
  'i64x2.splat': {
    args: [],
    opCode: 64786,
  },
  'f32x4.splat': {
    args: [],
    opCode: 64787,
  },
  'f64x2.splat': {
    args: [],
    opCode: 64788,
  },
  'i8x16.extract_lane_s': {
    args: ['laneidx'],
    opCode: 64789,
  },
  'i8x16.extract_lane_u': {
    args: ['laneidx'],
    opCode: 64790,
  },
  'i8x16.replace_lane': {
    args: ['laneidx'],
    opCode: 64791,
  },
  'i16x8.extract_lane_s': {
    args: ['laneidx'],
    opCode: 64792,
  },
  'i16x8.extract_lane_u': {
    args: ['laneidx'],
    opCode: 64793,
  },
  'i16x8.replace_lane': {
    args: ['laneidx'],
    opCode: 64794,
  },
  'i32x4.extract_lane': {
    args: ['laneidx'],
    opCode: 64795,
  },
  'i32x4.replace_lane': {
    args: ['laneidx'],
    opCode: 64796,
  },
  'i64x2.extract_lane': {
    args: ['laneidx'],
    opCode: 64797,
  },
  'i64x2.replace_lane': {
    args: ['laneidx'],
    opCode: 64798,
  },
  'f32x4.extract_lane': {
    args: ['laneidx'],
    opCode: 64799,
  },
  'f32x4.replace_lane': {
    args: ['laneidx'],
    opCode: 64800,
  },
  'f64x2.extract_lane': {
    args: ['laneidx'],
    opCode: 64801,
  },
  'f64x2.replace_lane': {
    args: ['laneidx'],
    opCode: 64802,
  },
  'i8x16.eq': {
    args: [],
    opCode: 64803,
  },
  'i8x16.ne': {
    args: [],
    opCode: 64804,
  },
  'i8x16.lt_s': {
    args: [],
    opCode: 64805,
  },
  'i8x16.lt_u': {
    args: [],
    opCode: 64806,
  },
  'i8x16.gt_s': {
    args: [],
    opCode: 64807,
  },
  'i8x16.gt_u': {
    args: [],
    opCode: 64808,
  },
  'i8x16.le_s': {
    args: [],
    opCode: 64809,
  },
  'i8x16.le_u': {
    args: [],
    opCode: 64810,
  },
  'i8x16.ge_s': {
    args: [],
    opCode: 64811,
  },
  'i8x16.ge_u': {
    args: [],
    opCode: 64812,
  },
  'i16x8.eq': {
    args: [],
    opCode: 64813,
  },
  'i16x8.ne': {
    args: [],
    opCode: 64814,
  },
  'i16x8.lt_s': {
    args: [],
    opCode: 64815,
  },
  'i16x8.lt_u': {
    args: [],
    opCode: 64816,
  },
  'i16x8.gt_s': {
    args: [],
    opCode: 64817,
  },
  'i16x8.gt_u': {
    args: [],
    opCode: 64818,
  },
  'i16x8.le_s': {
    args: [],
    opCode: 64819,
  },
  'i16x8.le_u': {
    args: [],
    opCode: 64820,
  },
  'i16x8.ge_s': {
    args: [],
    opCode: 64821,
  },
  'i16x8.ge_u': {
    args: [],
    opCode: 64822,
  },
  'i32x4.eq': {
    args: [],
    opCode: 64823,
  },
  'i32x4.ne': {
    args: [],
    opCode: 64824,
  },
  'i32x4.lt_s': {
    args: [],
    opCode: 64825,
  },
  'i32x4.lt_u': {
    args: [],
    opCode: 64826,
  },
  'i32x4.gt_s': {
    args: [],
    opCode: 64827,
  },
  'i32x4.gt_u': {
    args: [],
    opCode: 64828,
  },
  'i32x4.le_s': {
    args: [],
    opCode: 64829,
  },
  'i32x4.le_u': {
    args: [],
    opCode: 64830,
  },
  'i32x4.ge_s': {
    args: [],
    opCode: 64831,
  },
  'i32x4.ge_u': {
    args: [],
    opCode: 64832,
  },
  'f32x4.eq': {
    args: [],
    opCode: 64833,
  },
  'f32x4.ne': {
    args: [],
    opCode: 64834,
  },
  'f32x4.lt': {
    args: [],
    opCode: 64835,
  },
  'f32x4.gt': {
    args: [],
    opCode: 64836,
  },
  'f32x4.le': {
    args: [],
    opCode: 64837,
  },
  'f32x4.ge': {
    args: [],
    opCode: 64838,
  },
  'f64x2.eq': {
    args: [],
    opCode: 64839,
  },
  'f64x2.ne': {
    args: [],
    opCode: 64840,
  },
  'f64x2.lt': {
    args: [],
    opCode: 64841,
  },
  'f64x2.gt': {
    args: [],
    opCode: 64842,
  },
  'f64x2.le': {
    args: [],
    opCode: 64843,
  },
  'f64x2.ge': {
    args: [],
    opCode: 64844,
  },
  'v128.not': {
    args: [],
    opCode: 64845,
  },
  'v128.and': {
    args: [],
    opCode: 64846,
  },
  'v128.andnot': {
    args: [],
    opCode: 64847,
  },
  'v128.or': {
    args: [],
    opCode: 64848,
  },
  'v128.xor': {
    args: [],
    opCode: 64849,
  },
  'v128.bitselect': {
    args: [],
    opCode: 64850,
  },
  'v128.any_true': {
    args: [],
    opCode: 64851,
  },
  'v128.load8_lane': {
    args: ['memarg', 'laneidx'],
    opCode: 64852,
  },
  'v128.load16_lane': {
    args: ['memarg', 'laneidx'],
    opCode: 64853,
  },
  'v128.load32_lane': {
    args: ['memarg', 'laneidx'],
    opCode: 64854,
  },
  'v128.load64_lane': {
    args: ['memarg', 'laneidx'],
    opCode: 64855,
  },
  'v128.store8_lane': {
    args: ['memarg', 'laneidx'],
    opCode: 64856,
  },
  'v128.store16_lane': {
    args: ['memarg', 'laneidx'],
    opCode: 64857,
  },
  'v128.store32_lane': {
    args: ['memarg', 'laneidx'],
    opCode: 64858,
  },
  'v128.store64_lane': {
    args: ['memarg', 'laneidx'],
    opCode: 64859,
  },
  'v128.load32_zero': {
    args: ['memarg', 'laneidx'],
    opCode: 64860,
  },
  'v128.load64_zero': {
    args: ['memarg', 'laneidx'],
    opCode: 64861,
  },
  'f32x4.demote_f64x2_zero': {
    args: [],
    opCode: 64862,
  },
  'f64x2.promote_low_f32x4': {
    args: [],
    opCode: 64863,
  },
  'i8x16.abs': {
    args: [],
    opCode: 64864,
  },
  'i8x16.neg': {
    args: [],
    opCode: 64865,
  },
  'i8x16.popcnt': {
    args: [],
    opCode: 64866,
  },
  'i8x16.all_true': {
    args: [],
    opCode: 64867,
  },
  'i8x16.bitmask': {
    args: [],
    opCode: 64868,
  },
  'i8x16.narrow_i16x8_s': {
    args: [],
    opCode: 64869,
  },
  'i8x16.narrow_i16x8_u': {
    args: [],
    opCode: 64870,
  },
  'f32x4.ceil': {
    args: [],
    opCode: 64871,
  },
  'f32x4.floor': {
    args: [],
    opCode: 64872,
  },
  'f32x4.trunc': {
    args: [],
    opCode: 64873,
  },
  'f32x4.nearest': {
    args: [],
    opCode: 64874,
  },
  'i8x16.shl': {
    args: [],
    opCode: 64875,
  },
  'i8x16.shr_s': {
    args: [],
    opCode: 64876,
  },
  'i8x16.shr_u': {
    args: [],
    opCode: 64877,
  },
  'i8x16.add': {
    args: [],
    opCode: 64878,
  },
  'i8x16.add_sat_s': {
    args: [],
    opCode: 64879,
  },
  'i8x16.add_sat_u': {
    args: [],
    opCode: 64880,
  },
  'i8x16.sub': {
    args: [],
    opCode: 64881,
  },
  'i8x16.sub_sat_s': {
    args: [],
    opCode: 64882,
  },
  'i8x16.sub_sat_u': {
    args: [],
    opCode: 64883,
  },
  'f64x2.ceil': {
    args: [],
    opCode: 64884,
  },
  'f64x2.floor': {
    args: [],
    opCode: 64885,
  },
  'i8x16.min_s': {
    args: [],
    opCode: 64886,
  },
  'i8x16.min_u': {
    args: [],
    opCode: 64887,
  },
  'i8x16.max_s': {
    args: [],
    opCode: 64888,
  },
  'i8x16.max_u': {
    args: [],
    opCode: 64889,
  },
  'f64x2.trunc': {
    args: [],
    opCode: 64890,
  },
  'i8x16.avgr_u': {
    args: [],
    opCode: 64891,
  },
  'i16x8.extadd_pairwise_i8x16_s': {
    args: [],
    opCode: 64892,
  },
  'i16x8.extadd_pairwise_i8x16_u': {
    args: [],
    opCode: 64893,
  },
  'i32x4.extadd_pairwise_i16x8_s': {
    args: [],
    opCode: 64894,
  },
  'i32x4.extadd_pairwise_i16x8_u': {
    args: [],
    opCode: 64895,
  },
  'i16x8.abs': {
    args: [],
    opCode: 16613377,
  },
  'i16x8.neg': {
    args: [],
    opCode: 16613633,
  },
  'i16x8.q15mulr_sat_s': {
    args: [],
    opCode: 16613889,
  },
  'i16x8.all_true': {
    args: [],
    opCode: 16614145,
  },
  'i16x8.bitmask': {
    args: [],
    opCode: 16614401,
  },
  'i16x8.narrow_i32x4_s': {
    args: [],
    opCode: 16614657,
  },
  'i16x8.narrow_i32x4_u': {
    args: [],
    opCode: 16614913,
  },
  'i16x8.extend_low_i8x16_s': {
    args: [],
    opCode: 16615169,
  },
  'i16x8.extend_high_i8x16_s': {
    args: [],
    opCode: 16615425,
  },
  'i16x8.extend_low_i8x16_u': {
    args: [],
    opCode: 16615681,
  },
  'i16x8.extend_high_i8x16_u': {
    args: [],
    opCode: 16615937,
  },
  'i16x8.shl': {
    args: [],
    opCode: 16616193,
  },
  'i16x8.shr_s': {
    args: [],
    opCode: 16616449,
  },
  'i16x8.shr_u': {
    args: [],
    opCode: 16616705,
  },
  'i16x8.add': {
    args: [],
    opCode: 16616961,
  },
  'i16x8.add_sat_s': {
    args: [],
    opCode: 16617217,
  },
  'i16x8.add_sat_u': {
    args: [],
    opCode: 16617473,
  },
  'i16x8.sub': {
    args: [],
    opCode: 16617729,
  },
  'i16x8.sub_sat_s': {
    args: [],
    opCode: 16617985,
  },
  'i16x8.sub_sat_u': {
    args: [],
    opCode: 16618241,
  },
  'f64x2.nearest': {
    args: [],
    opCode: 16618497,
  },
  'i16x8.mul': {
    args: [],
    opCode: 16618753,
  },
  'i16x8.min_s': {
    args: [],
    opCode: 16619009,
  },
  'i16x8.min_u': {
    args: [],
    opCode: 16619265,
  },
  'i16x8.max_s': {
    args: [],
    opCode: 16619521,
  },
  'i16x8.max_u': {
    args: [],
    opCode: 16619777,
  },
  'i16x8.avgr_u': {
    args: [],
    opCode: 16620289,
  },
  'i16x8.extmul_low_i8x16_s': {
    args: [],
    opCode: 16620545,
  },
  'i16x8.extmul_high_i8x16_s': {
    args: [],
    opCode: 16620801,
  },
  'i16x8.extmul_low_i8x16_u': {
    args: [],
    opCode: 16621057,
  },
  'i16x8.extmul_high_i8x16_u': {
    args: [],
    opCode: 16621313,
  },
  'i32x4.abs': {
    args: [],
    opCode: 16621569,
  },
  'i32x4.neg': {
    args: [],
    opCode: 16621825,
  },
  'i32x4.all_true': {
    args: [],
    opCode: 16622337,
  },
  'i32x4.bitmask': {
    args: [],
    opCode: 16622593,
  },
  'i32x4.extend_low_i16x8_s': {
    args: [],
    opCode: 16623361,
  },
  'i32x4.extend_high_i16x8_s': {
    args: [],
    opCode: 16623617,
  },
  'i32x4.extend_low_i16x8_u': {
    args: [],
    opCode: 16623873,
  },
  'i32x4.extend_high_i16x8_u': {
    args: [],
    opCode: 16624129,
  },
  'i32x4.shl': {
    args: [],
    opCode: 16624385,
  },
  'i32x4.shr_s': {
    args: [],
    opCode: 16624641,
  },
  'i32x4.shr_u': {
    args: [],
    opCode: 16624897,
  },
  'i32x4.add': {
    args: [],
    opCode: 16625153,
  },
  'i32x4.sub': {
    args: [],
    opCode: 16625921,
  },
  'i32x4.mul': {
    args: [],
    opCode: 16626945,
  },
  'i32x4.min_s': {
    args: [],
    opCode: 16627201,
  },
  'i32x4.min_u': {
    args: [],
    opCode: 16627457,
  },
  'i32x4.max_s': {
    args: [],
    opCode: 16627713,
  },
  'i32x4.max_u': {
    args: [],
    opCode: 16627969,
  },
  'i32x4.dot_i16x8_s': {
    args: [],
    opCode: 16628225,
  },
  'i32x4.extmul_low_i16x8_s': {
    args: [],
    opCode: 16628737,
  },
  'i32x4.extmul_high_i16x8_s': {
    args: [],
    opCode: 16628993,
  },
  'i32x4.extmul_low_i16x8_u': {
    args: [],
    opCode: 16629249,
  },
  'i32x4.extmul_high_i16x8_u': {
    args: [],
    opCode: 16629505,
  },
  'i64x2.abs': {
    args: [],
    opCode: 16629761,
  },
  'i64x2.neg': {
    args: [],
    opCode: 16630017,
  },
  'i64x2.all_true': {
    args: [],
    opCode: 16630529,
  },
  'i64x2.bitmask': {
    args: [],
    opCode: 16630785,
  },
  'i64x2.extend_low_i32x4_s': {
    args: [],
    opCode: 16631553,
  },
  'i64x2.extend_high_i32x4_s': {
    args: [],
    opCode: 16631809,
  },
  'i64x2.extend_low_i32x4_u': {
    args: [],
    opCode: 16632065,
  },
  'i64x2.extend_high_i32x4_u': {
    args: [],
    opCode: 16632321,
  },
  'i64x2.shl': {
    args: [],
    opCode: 16632577,
  },
  'i64x2.shr_s': {
    args: [],
    opCode: 16632833,
  },
  'i64x2.shr_u': {
    args: [],
    opCode: 16633089,
  },
  'i64x2.add': {
    args: [],
    opCode: 16633345,
  },
  'i64x2.sub': {
    args: [],
    opCode: 16634113,
  },
  'i64x2.mul': {
    args: [],
    opCode: 16635137,
  },
  'i64x2.eq': {
    args: [],
    opCode: 16635393,
  },
  'i64x2.ne': {
    args: [],
    opCode: 16635649,
  },
  'i64x2.lt_s': {
    args: [],
    opCode: 16635905,
  },
  'i64x2.gt_s': {
    args: [],
    opCode: 16636161,
  },
  'i64x2.le_s': {
    args: [],
    opCode: 16636417,
  },
  'i64x2.ge_s': {
    args: [],
    opCode: 16636673,
  },
  'i64x2.extmul_low_i32x4_s': {
    args: [],
    opCode: 16636929,
  },
  'i64x2.extmul_high_i32x4_s': {
    args: [],
    opCode: 16637185,
  },
  'i64x2.extmul_low_i32x4_u': {
    args: [],
    opCode: 16637441,
  },
  'i64x2.extmul_high_i32x4_u': {
    args: [],
    opCode: 16637697,
  },
  'f32x4.abs': {
    args: [],
    opCode: 16637953,
  },
  'f32x4.neg': {
    args: [],
    opCode: 16638209,
  },
  'f32x4.sqrt': {
    args: [],
    opCode: 16638721,
  },
  'f32x4.add': {
    args: [],
    opCode: 16638977,
  },
  'f32x4.sub': {
    args: [],
    opCode: 16639233,
  },
  'f32x4.mul': {
    args: [],
    opCode: 16639489,
  },
  'f32x4.div': {
    args: [],
    opCode: 16639745,
  },
  'f32x4.min': {
    args: [],
    opCode: 16640001,
  },
  'f32x4.max': {
    args: [],
    opCode: 16640257,
  },
  'f32x4.pmin': {
    args: [],
    opCode: 16640513,
  },
  'f32x4.pmax': {
    args: [],
    opCode: 16640769,
  },
  'f64x2.abs': {
    args: [],
    opCode: 16641025,
  },
  'f64x2.neg': {
    args: [],
    opCode: 16641281,
  },
  'f64x2.sqrt': {
    args: [],
    opCode: 16641793,
  },
  'f64x2.add': {
    args: [],
    opCode: 16642049,
  },
  'f64x2.sub': {
    args: [],
    opCode: 16642305,
  },
  'f64x2.mul': {
    args: [],
    opCode: 16642561,
  },
  'f64x2.div': {
    args: [],
    opCode: 16642817,
  },
  'f64x2.min': {
    args: [],
    opCode: 16643073,
  },
  'f64x2.max': {
    args: [],
    opCode: 16643329,
  },
  'f64x2.pmin': {
    args: [],
    opCode: 16643585,
  },
  'f64x2.pmax': {
    args: [],
    opCode: 16643841,
  },
  'i32x4.trunc_sat_f32x4_s': {
    args: [],
    opCode: 16644097,
  },
  'i32x4.trunc_sat_f32x4_u': {
    args: [],
    opCode: 16644353,
  },
  'f32x4.convert_i32x4_s': {
    args: [],
    opCode: 16644609,
  },
  'f32x4.convert_i32x4_u': {
    args: [],
    opCode: 16644865,
  },
  'i32x4.trunc_sat_f64x2_s_zero': {
    args: [],
    opCode: 16645121,
  },
  'i32x4.trunc_sat_f64x2_u_zero': {
    args: [],
    opCode: 16645377,
  },
  'f64x2.convert_low_i32x4_s': {
    args: [],
    opCode: 16645633,
  },
  'f64x2.convert_low_i32x4_u': {
    args: [],
    opCode: 16645889,
  },
};

export {INSTRUCTIONS};
