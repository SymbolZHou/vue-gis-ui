// export let city = []

// await (async () => {
//   city = await getCity().then(res => res.data)

//   city._map = keyBy(city, "adcode")

//   city._tree = city.filter(item => {
//     if (item.parent === null) return true

//     let parent = city._map[item.parent]

//     if (parent) {
//       get(parent, "children", !parent.children && (parent.children = [])).push(item)
//     }
//   })
// })()

export const city = [
  {
    adcode: 100000,
    lng: 116.3683244,
    lat: 39.915085,
    name: "中华人民共和国",
    level: "country",
    parent: null
  },
  {
    adcode: 110000,
    lng: 116.405285,
    lat: 39.904989,
    name: "北京市",
    level: "province",
    parent: 100000
  },
  {
    adcode: 110101,
    lng: 116.418757,
    lat: 39.917544,
    name: "东城区",
    level: "district",
    parent: 110000
  },
  {
    adcode: 110102,
    lng: 116.366794,
    lat: 39.915309,
    name: "西城区",
    level: "district",
    parent: 110000
  },
  {
    adcode: 110105,
    lng: 116.486409,
    lat: 39.921489,
    name: "朝阳区",
    level: "district",
    parent: 110000
  },
  {
    adcode: 110106,
    lng: 116.286968,
    lat: 39.863642,
    name: "丰台区",
    level: "district",
    parent: 110000
  },
  {
    adcode: 110107,
    lng: 116.195445,
    lat: 39.914601,
    name: "石景山区",
    level: "district",
    parent: 110000
  },
  {
    adcode: 110108,
    lng: 116.310316,
    lat: 39.956074,
    name: "海淀区",
    level: "district",
    parent: 110000
  },
  {
    adcode: 110109,
    lng: 116.105381,
    lat: 39.937183,
    name: "门头沟区",
    level: "district",
    parent: 110000
  },
  {
    adcode: 110111,
    lng: 116.139157,
    lat: 39.735535,
    name: "房山区",
    level: "district",
    parent: 110000
  },
  {
    adcode: 110112,
    lng: 116.658603,
    lat: 39.902486,
    name: "通州区",
    level: "district",
    parent: 110000
  },
  {
    adcode: 110113,
    lng: 116.653525,
    lat: 40.128936,
    name: "顺义区",
    level: "district",
    parent: 110000
  },
  {
    adcode: 110114,
    lng: 116.235906,
    lat: 40.218085,
    name: "昌平区",
    level: "district",
    parent: 110000
  },
  {
    adcode: 110115,
    lng: 116.338033,
    lat: 39.728908,
    name: "大兴区",
    level: "district",
    parent: 110000
  },
  {
    adcode: 110116,
    lng: 116.637122,
    lat: 40.324272,
    name: "怀柔区",
    level: "district",
    parent: 110000
  },
  {
    adcode: 110117,
    lng: 117.112335,
    lat: 40.144783,
    name: "平谷区",
    level: "district",
    parent: 110000
  },
  {
    adcode: 110118,
    lng: 116.843352,
    lat: 40.377362,
    name: "密云区",
    level: "district",
    parent: 110000
  },
  {
    adcode: 110119,
    lng: 115.985006,
    lat: 40.465325,
    name: "延庆区",
    level: "district",
    parent: 110000
  },
  {
    adcode: 120000,
    lng: 117.190182,
    lat: 39.125596,
    name: "天津市",
    level: "province",
    parent: 100000
  },
  {
    adcode: 120101,
    lng: 117.195907,
    lat: 39.118327,
    name: "和平区",
    level: "district",
    parent: 120000
  },
  {
    adcode: 120102,
    lng: 117.226568,
    lat: 39.122125,
    name: "河东区",
    level: "district",
    parent: 120000
  },
  {
    adcode: 120103,
    lng: 117.217536,
    lat: 39.101897,
    name: "河西区",
    level: "district",
    parent: 120000
  },
  {
    adcode: 120104,
    lng: 117.164143,
    lat: 39.120474,
    name: "南开区",
    level: "district",
    parent: 120000
  },
  {
    adcode: 120105,
    lng: 117.201569,
    lat: 39.156632,
    name: "河北区",
    level: "district",
    parent: 120000
  },
  {
    adcode: 120106,
    lng: 117.163301,
    lat: 39.175066,
    name: "红桥区",
    level: "district",
    parent: 120000
  },
  {
    adcode: 120110,
    lng: 117.313967,
    lat: 39.087764,
    name: "东丽区",
    level: "district",
    parent: 120000
  },
  {
    adcode: 120111,
    lng: 117.012247,
    lat: 39.139446,
    name: "西青区",
    level: "district",
    parent: 120000
  },
  {
    adcode: 120112,
    lng: 117.382549,
    lat: 38.989577,
    name: "津南区",
    level: "district",
    parent: 120000
  },
  {
    adcode: 120113,
    lng: 117.13482,
    lat: 39.225555,
    name: "北辰区",
    level: "district",
    parent: 120000
  },
  {
    adcode: 120114,
    lng: 117.057959,
    lat: 39.376925,
    name: "武清区",
    level: "district",
    parent: 120000
  },
  {
    adcode: 120115,
    lng: 117.308094,
    lat: 39.716965,
    name: "宝坻区",
    level: "district",
    parent: 120000
  },
  {
    adcode: 120116,
    lng: 117.654173,
    lat: 39.032846,
    name: "滨海新区",
    level: "district",
    parent: 120000
  },
  {
    adcode: 120117,
    lng: 117.82828,
    lat: 39.328886,
    name: "宁河区",
    level: "district",
    parent: 120000
  },
  {
    adcode: 120118,
    lng: 116.925304,
    lat: 38.935671,
    name: "静海区",
    level: "district",
    parent: 120000
  },
  {
    adcode: 120119,
    lng: 117.407449,
    lat: 40.045342,
    name: "蓟州区",
    level: "district",
    parent: 120000
  },
  {
    adcode: 130000,
    lng: 114.502461,
    lat: 38.045474,
    name: "河北省",
    level: "province",
    parent: 100000
  },
  {
    adcode: 130100,
    lng: 114.502461,
    lat: 38.045474,
    name: "石家庄市",
    level: "city",
    parent: 130000
  },
  {
    adcode: 130102,
    lng: 114.548151,
    lat: 38.047501,
    name: "长安区",
    level: "district",
    parent: 130100
  },
  {
    adcode: 130104,
    lng: 114.462931,
    lat: 38.028383,
    name: "桥西区",
    level: "district",
    parent: 130100
  },
  {
    adcode: 130105,
    lng: 114.465974,
    lat: 38.067142,
    name: "新华区",
    level: "district",
    parent: 130100
  },
  {
    adcode: 130107,
    lng: 114.058178,
    lat: 38.069748,
    name: "井陉矿区",
    level: "district",
    parent: 130100
  },
  {
    adcode: 130108,
    lng: 114.533257,
    lat: 38.027696,
    name: "裕华区",
    level: "district",
    parent: 130100
  },
  {
    adcode: 130109,
    lng: 114.849647,
    lat: 38.033767,
    name: "藁城区",
    level: "district",
    parent: 130100
  },
  {
    adcode: 130110,
    lng: 114.321023,
    lat: 38.093994,
    name: "鹿泉区",
    level: "district",
    parent: 130100
  },
  {
    adcode: 130111,
    lng: 114.654281,
    lat: 37.886911,
    name: "栾城区",
    level: "district",
    parent: 130100
  },
  {
    adcode: 130121,
    lng: 114.144488,
    lat: 38.033614,
    name: "井陉县",
    level: "district",
    parent: 130100
  },
  {
    adcode: 130123,
    lng: 114.569887,
    lat: 38.147835,
    name: "正定县",
    level: "district",
    parent: 130100
  },
  {
    adcode: 130125,
    lng: 114.552734,
    lat: 38.437422,
    name: "行唐县",
    level: "district",
    parent: 130100
  },
  {
    adcode: 130126,
    lng: 114.37946,
    lat: 38.306546,
    name: "灵寿县",
    level: "district",
    parent: 130100
  },
  {
    adcode: 130127,
    lng: 114.610699,
    lat: 37.605714,
    name: "高邑县",
    level: "district",
    parent: 130100
  },
  {
    adcode: 130128,
    lng: 115.200207,
    lat: 38.18454,
    name: "深泽县",
    level: "district",
    parent: 130100
  },
  {
    adcode: 130129,
    lng: 114.387756,
    lat: 37.660199,
    name: "赞皇县",
    level: "district",
    parent: 130100
  },
  {
    adcode: 130130,
    lng: 114.977845,
    lat: 38.176376,
    name: "无极县",
    level: "district",
    parent: 130100
  },
  {
    adcode: 130131,
    lng: 114.184144,
    lat: 38.259311,
    name: "平山县",
    level: "district",
    parent: 130100
  },
  {
    adcode: 130132,
    lng: 114.52618,
    lat: 37.762514,
    name: "元氏县",
    level: "district",
    parent: 130100
  },
  {
    adcode: 130133,
    lng: 114.775362,
    lat: 37.754341,
    name: "赵县",
    level: "district",
    parent: 130100
  },
  {
    adcode: 130181,
    lng: 115.217451,
    lat: 37.92904,
    name: "辛集市",
    level: "district",
    parent: 130100
  },
  {
    adcode: 130183,
    lng: 115.044886,
    lat: 38.027478,
    name: "晋州市",
    level: "district",
    parent: 130100
  },
  {
    adcode: 130184,
    lng: 114.68578,
    lat: 38.344768,
    name: "新乐市",
    level: "district",
    parent: 130100
  },
  {
    adcode: 130200,
    lng: 118.175393,
    lat: 39.635113,
    name: "唐山市",
    level: "city",
    parent: 130000
  },
  {
    adcode: 130202,
    lng: 118.210821,
    lat: 39.615162,
    name: "路南区",
    level: "district",
    parent: 130200
  },
  {
    adcode: 130203,
    lng: 118.174736,
    lat: 39.628538,
    name: "路北区",
    level: "district",
    parent: 130200
  },
  {
    adcode: 130204,
    lng: 118.45429,
    lat: 39.715736,
    name: "古冶区",
    level: "district",
    parent: 130200
  },
  {
    adcode: 130205,
    lng: 118.264425,
    lat: 39.676171,
    name: "开平区",
    level: "district",
    parent: 130200
  },
  {
    adcode: 130207,
    lng: 118.110793,
    lat: 39.56303,
    name: "丰南区",
    level: "district",
    parent: 130200
  },
  {
    adcode: 130208,
    lng: 118.155779,
    lat: 39.831363,
    name: "丰润区",
    level: "district",
    parent: 130200
  },
  {
    adcode: 130209,
    lng: 118.446585,
    lat: 39.278277,
    name: "曹妃甸区",
    level: "district",
    parent: 130200
  },
  {
    adcode: 130224,
    lng: 118.681552,
    lat: 39.506201,
    name: "滦南县",
    level: "district",
    parent: 130200
  },
  {
    adcode: 130225,
    lng: 118.905341,
    lat: 39.42813,
    name: "乐亭县",
    level: "district",
    parent: 130200
  },
  {
    adcode: 130227,
    lng: 118.305139,
    lat: 40.146238,
    name: "迁西县",
    level: "district",
    parent: 130200
  },
  {
    adcode: 130229,
    lng: 117.753665,
    lat: 39.887323,
    name: "玉田县",
    level: "district",
    parent: 130200
  },
  {
    adcode: 130281,
    lng: 117.965875,
    lat: 40.188616,
    name: "遵化市",
    level: "district",
    parent: 130200
  },
  {
    adcode: 130283,
    lng: 118.701933,
    lat: 40.012108,
    name: "迁安市",
    level: "district",
    parent: 130200
  },
  {
    adcode: 130284,
    lng: 118.699546,
    lat: 39.74485,
    name: "滦州市",
    level: "district",
    parent: 130200
  },
  {
    adcode: 130300,
    lng: 119.586579,
    lat: 39.942531,
    name: "秦皇岛市",
    level: "city",
    parent: 130000
  },
  {
    adcode: 130302,
    lng: 119.596224,
    lat: 39.943458,
    name: "海港区",
    level: "district",
    parent: 130300
  },
  {
    adcode: 130303,
    lng: 119.753591,
    lat: 39.998023,
    name: "山海关区",
    level: "district",
    parent: 130300
  },
  {
    adcode: 130304,
    lng: 119.486286,
    lat: 39.825121,
    name: "北戴河区",
    level: "district",
    parent: 130300
  },
  {
    adcode: 130306,
    lng: 119.240651,
    lat: 39.887053,
    name: "抚宁区",
    level: "district",
    parent: 130300
  },
  {
    adcode: 130321,
    lng: 118.954555,
    lat: 40.406023,
    name: "青龙满族自治县",
    level: "district",
    parent: 130300
  },
  {
    adcode: 130322,
    lng: 119.164541,
    lat: 39.709729,
    name: "昌黎县",
    level: "district",
    parent: 130300
  },
  {
    adcode: 130324,
    lng: 118.881809,
    lat: 39.891639,
    name: "卢龙县",
    level: "district",
    parent: 130300
  },
  {
    adcode: 130400,
    lng: 114.490686,
    lat: 36.612273,
    name: "邯郸市",
    level: "city",
    parent: 130000
  },
  {
    adcode: 130402,
    lng: 114.484989,
    lat: 36.603196,
    name: "邯山区",
    level: "district",
    parent: 130400
  },
  {
    adcode: 130403,
    lng: 114.494703,
    lat: 36.611082,
    name: "丛台区",
    level: "district",
    parent: 130400
  },
  {
    adcode: 130404,
    lng: 114.458242,
    lat: 36.615484,
    name: "复兴区",
    level: "district",
    parent: 130400
  },
  {
    adcode: 130406,
    lng: 114.209936,
    lat: 36.420487,
    name: "峰峰矿区",
    level: "district",
    parent: 130400
  },
  {
    adcode: 130407,
    lng: 114.805154,
    lat: 36.555778,
    name: "肥乡区",
    level: "district",
    parent: 130400
  },
  {
    adcode: 130408,
    lng: 114.496162,
    lat: 36.776413,
    name: "永年区",
    level: "district",
    parent: 130400
  },
  {
    adcode: 130423,
    lng: 114.610703,
    lat: 36.337604,
    name: "临漳县",
    level: "district",
    parent: 130400
  },
  {
    adcode: 130424,
    lng: 114.680356,
    lat: 36.443832,
    name: "成安县",
    level: "district",
    parent: 130400
  },
  {
    adcode: 130425,
    lng: 115.152586,
    lat: 36.283316,
    name: "大名县",
    level: "district",
    parent: 130400
  },
  {
    adcode: 130426,
    lng: 113.673297,
    lat: 36.563143,
    name: "涉县",
    level: "district",
    parent: 130400
  },
  {
    adcode: 130427,
    lng: 114.38208,
    lat: 36.367673,
    name: "磁县",
    level: "district",
    parent: 130400
  },
  {
    adcode: 130430,
    lng: 115.168584,
    lat: 36.81325,
    name: "邱县",
    level: "district",
    parent: 130400
  },
  {
    adcode: 130431,
    lng: 114.878517,
    lat: 36.914908,
    name: "鸡泽县",
    level: "district",
    parent: 130400
  },
  {
    adcode: 130432,
    lng: 114.950859,
    lat: 36.483603,
    name: "广平县",
    level: "district",
    parent: 130400
  },
  {
    adcode: 130433,
    lng: 115.289057,
    lat: 36.539461,
    name: "馆陶县",
    level: "district",
    parent: 130400
  },
  {
    adcode: 130434,
    lng: 114.93411,
    lat: 36.354248,
    name: "魏县",
    level: "district",
    parent: 130400
  },
  {
    adcode: 130435,
    lng: 114.957588,
    lat: 36.773398,
    name: "曲周县",
    level: "district",
    parent: 130400
  },
  {
    adcode: 130481,
    lng: 114.194581,
    lat: 36.696115,
    name: "武安市",
    level: "district",
    parent: 130400
  },
  {
    adcode: 130500,
    lng: 114.508851,
    lat: 37.0682,
    name: "邢台市",
    level: "city",
    parent: 130000
  },
  {
    adcode: 130502,
    lng: 114.507131,
    lat: 37.064125,
    name: "襄都区",
    level: "district",
    parent: 130500
  },
  {
    adcode: 130503,
    lng: 114.473687,
    lat: 37.068009,
    name: "信都区",
    level: "district",
    parent: 130500
  },
  {
    adcode: 130505,
    lng: 114.684469,
    lat: 37.129952,
    name: "任泽区",
    level: "district",
    parent: 130500
  },
  {
    adcode: 130506,
    lng: 114.691377,
    lat: 37.003812,
    name: "南和区",
    level: "district",
    parent: 130500
  },
  {
    adcode: 130522,
    lng: 114.506873,
    lat: 37.444009,
    name: "临城县",
    level: "district",
    parent: 130500
  },
  {
    adcode: 130523,
    lng: 114.511523,
    lat: 37.287663,
    name: "内丘县",
    level: "district",
    parent: 130500
  },
  {
    adcode: 130524,
    lng: 114.693382,
    lat: 37.483596,
    name: "柏乡县",
    level: "district",
    parent: 130500
  },
  {
    adcode: 130525,
    lng: 114.776348,
    lat: 37.350925,
    name: "隆尧县",
    level: "district",
    parent: 130500
  },
  {
    adcode: 130528,
    lng: 114.921027,
    lat: 37.618956,
    name: "宁晋县",
    level: "district",
    parent: 130500
  },
  {
    adcode: 130529,
    lng: 115.038782,
    lat: 37.21768,
    name: "巨鹿县",
    level: "district",
    parent: 130500
  },
  {
    adcode: 130530,
    lng: 115.247537,
    lat: 37.526216,
    name: "新河县",
    level: "district",
    parent: 130500
  },
  {
    adcode: 130531,
    lng: 115.142797,
    lat: 37.075548,
    name: "广宗县",
    level: "district",
    parent: 130500
  },
  {
    adcode: 130532,
    lng: 115.029218,
    lat: 37.069404,
    name: "平乡县",
    level: "district",
    parent: 130500
  },
  {
    adcode: 130533,
    lng: 115.272749,
    lat: 36.983272,
    name: "威县",
    level: "district",
    parent: 130500
  },
  {
    adcode: 130534,
    lng: 115.668999,
    lat: 37.059991,
    name: "清河县",
    level: "district",
    parent: 130500
  },
  {
    adcode: 130535,
    lng: 115.498684,
    lat: 36.8642,
    name: "临西县",
    level: "district",
    parent: 130500
  },
  {
    adcode: 130581,
    lng: 115.398102,
    lat: 37.359668,
    name: "南宫市",
    level: "district",
    parent: 130500
  },
  {
    adcode: 130582,
    lng: 114.504902,
    lat: 36.861903,
    name: "沙河市",
    level: "district",
    parent: 130500
  },
  {
    adcode: 130600,
    lng: 115.482331,
    lat: 38.867657,
    name: "保定市",
    level: "city",
    parent: 130000
  },
  {
    adcode: 130602,
    lng: 115.470659,
    lat: 38.88662,
    name: "竞秀区",
    level: "district",
    parent: 130600
  },
  {
    adcode: 130606,
    lng: 115.500934,
    lat: 38.865005,
    name: "莲池区",
    level: "district",
    parent: 130600
  },
  {
    adcode: 130607,
    lng: 115.32442,
    lat: 38.95138,
    name: "满城区",
    level: "district",
    parent: 130600
  },
  {
    adcode: 130608,
    lng: 115.492221,
    lat: 38.771012,
    name: "清苑区",
    level: "district",
    parent: 130600
  },
  {
    adcode: 130609,
    lng: 115.64941,
    lat: 39.020395,
    name: "徐水区",
    level: "district",
    parent: 130600
  },
  {
    adcode: 130623,
    lng: 115.711985,
    lat: 39.393148,
    name: "涞水县",
    level: "district",
    parent: 130600
  },
  {
    adcode: 130624,
    lng: 114.198801,
    lat: 38.847276,
    name: "阜平县",
    level: "district",
    parent: 130600
  },
  {
    adcode: 130626,
    lng: 115.796895,
    lat: 39.266195,
    name: "定兴县",
    level: "district",
    parent: 130600
  },
  {
    adcode: 130627,
    lng: 114.981241,
    lat: 38.748542,
    name: "唐县",
    level: "district",
    parent: 130600
  },
  {
    adcode: 130628,
    lng: 115.778878,
    lat: 38.690092,
    name: "高阳县",
    level: "district",
    parent: 130600
  },
  {
    adcode: 130629,
    lng: 115.866247,
    lat: 39.05282,
    name: "容城县",
    level: "district",
    parent: 130600
  },
  {
    adcode: 130630,
    lng: 114.692567,
    lat: 39.35755,
    name: "涞源县",
    level: "district",
    parent: 130600
  },
  {
    adcode: 130631,
    lng: 115.154009,
    lat: 38.707448,
    name: "望都县",
    level: "district",
    parent: 130600
  },
  {
    adcode: 130632,
    lng: 115.931979,
    lat: 38.929912,
    name: "安新县",
    level: "district",
    parent: 130600
  },
  {
    adcode: 130633,
    lng: 115.501146,
    lat: 39.35297,
    name: "易县",
    level: "district",
    parent: 130600
  },
  {
    adcode: 130634,
    lng: 114.704055,
    lat: 38.619992,
    name: "曲阳县",
    level: "district",
    parent: 130600
  },
  {
    adcode: 130635,
    lng: 115.583631,
    lat: 38.496429,
    name: "蠡县",
    level: "district",
    parent: 130600
  },
  {
    adcode: 130636,
    lng: 115.132749,
    lat: 38.845127,
    name: "顺平县",
    level: "district",
    parent: 130600
  },
  {
    adcode: 130637,
    lng: 115.461798,
    lat: 38.458271,
    name: "博野县",
    level: "district",
    parent: 130600
  },
  {
    adcode: 130638,
    lng: 116.107474,
    lat: 38.990819,
    name: "雄县",
    level: "district",
    parent: 130600
  },
  {
    adcode: 130681,
    lng: 115.973409,
    lat: 39.485765,
    name: "涿州市",
    level: "district",
    parent: 130600
  },
  {
    adcode: 130682,
    lng: 114.991389,
    lat: 38.517602,
    name: "定州市",
    level: "district",
    parent: 130600
  },
  {
    adcode: 130683,
    lng: 115.33141,
    lat: 38.421367,
    name: "安国市",
    level: "district",
    parent: 130600
  },
  {
    adcode: 130684,
    lng: 115.882704,
    lat: 39.327689,
    name: "高碑店市",
    level: "district",
    parent: 130600
  },
  {
    adcode: 130700,
    lng: 114.884091,
    lat: 40.811901,
    name: "张家口市",
    level: "city",
    parent: 130000
  },
  {
    adcode: 130702,
    lng: 114.885658,
    lat: 40.813875,
    name: "桥东区",
    level: "district",
    parent: 130700
  },
  {
    adcode: 130703,
    lng: 114.882127,
    lat: 40.824385,
    name: "桥西区",
    level: "district",
    parent: 130700
  },
  {
    adcode: 130705,
    lng: 115.0632,
    lat: 40.609368,
    name: "宣化区",
    level: "district",
    parent: 130700
  },
  {
    adcode: 130706,
    lng: 115.281002,
    lat: 40.488645,
    name: "下花园区",
    level: "district",
    parent: 130700
  },
  {
    adcode: 130708,
    lng: 114.736131,
    lat: 40.765136,
    name: "万全区",
    level: "district",
    parent: 130700
  },
  {
    adcode: 130709,
    lng: 115.281652,
    lat: 40.971302,
    name: "崇礼区",
    level: "district",
    parent: 130700
  },
  {
    adcode: 130722,
    lng: 114.715951,
    lat: 41.151713,
    name: "张北县",
    level: "district",
    parent: 130700
  },
  {
    adcode: 130723,
    lng: 114.615809,
    lat: 41.850046,
    name: "康保县",
    level: "district",
    parent: 130700
  },
  {
    adcode: 130724,
    lng: 115.684836,
    lat: 41.667419,
    name: "沽源县",
    level: "district",
    parent: 130700
  },
  {
    adcode: 130725,
    lng: 113.977713,
    lat: 41.080091,
    name: "尚义县",
    level: "district",
    parent: 130700
  },
  {
    adcode: 130726,
    lng: 114.582695,
    lat: 39.837181,
    name: "蔚县",
    level: "district",
    parent: 130700
  },
  {
    adcode: 130727,
    lng: 114.167343,
    lat: 40.113419,
    name: "阳原县",
    level: "district",
    parent: 130700
  },
  {
    adcode: 130728,
    lng: 114.422364,
    lat: 40.671274,
    name: "怀安县",
    level: "district",
    parent: 130700
  },
  {
    adcode: 130730,
    lng: 115.520846,
    lat: 40.405405,
    name: "怀来县",
    level: "district",
    parent: 130700
  },
  {
    adcode: 130731,
    lng: 115.219246,
    lat: 40.378701,
    name: "涿鹿县",
    level: "district",
    parent: 130700
  },
  {
    adcode: 130732,
    lng: 115.832708,
    lat: 40.912081,
    name: "赤城县",
    level: "district",
    parent: 130700
  },
  {
    adcode: 130800,
    lng: 117.939152,
    lat: 40.976204,
    name: "承德市",
    level: "city",
    parent: 130000
  },
  {
    adcode: 130802,
    lng: 117.939152,
    lat: 40.976204,
    name: "双桥区",
    level: "district",
    parent: 130800
  },
  {
    adcode: 130803,
    lng: 117.797485,
    lat: 40.959756,
    name: "双滦区",
    level: "district",
    parent: 130800
  },
  {
    adcode: 130804,
    lng: 117.661154,
    lat: 40.546956,
    name: "鹰手营子矿区",
    level: "district",
    parent: 130800
  },
  {
    adcode: 130821,
    lng: 118.172496,
    lat: 40.768637,
    name: "承德县",
    level: "district",
    parent: 130800
  },
  {
    adcode: 130822,
    lng: 117.507098,
    lat: 40.418525,
    name: "兴隆县",
    level: "district",
    parent: 130800
  },
  {
    adcode: 130824,
    lng: 117.337124,
    lat: 40.936644,
    name: "滦平县",
    level: "district",
    parent: 130800
  },
  {
    adcode: 130825,
    lng: 117.736343,
    lat: 41.316667,
    name: "隆化县",
    level: "district",
    parent: 130800
  },
  {
    adcode: 130826,
    lng: 116.65121,
    lat: 41.209903,
    name: "丰宁满族自治县",
    level: "district",
    parent: 130800
  },
  {
    adcode: 130827,
    lng: 118.488642,
    lat: 40.607981,
    name: "宽城满族自治县",
    level: "district",
    parent: 130800
  },
  {
    adcode: 130828,
    lng: 117.764086,
    lat: 41.949404,
    name: "围场满族蒙古族自治县",
    level: "district",
    parent: 130800
  },
  {
    adcode: 130881,
    lng: 118.690238,
    lat: 41.00561,
    name: "平泉市",
    level: "district",
    parent: 130800
  },
  {
    adcode: 130900,
    lng: 116.857461,
    lat: 38.310582,
    name: "沧州市",
    level: "city",
    parent: 130000
  },
  {
    adcode: 130902,
    lng: 116.873049,
    lat: 38.308273,
    name: "新华区",
    level: "district",
    parent: 130900
  },
  {
    adcode: 130903,
    lng: 116.840063,
    lat: 38.307405,
    name: "运河区",
    level: "district",
    parent: 130900
  },
  {
    adcode: 130921,
    lng: 117.007478,
    lat: 38.219856,
    name: "沧县",
    level: "district",
    parent: 130900
  },
  {
    adcode: 130922,
    lng: 116.838384,
    lat: 38.569646,
    name: "青县",
    level: "district",
    parent: 130900
  },
  {
    adcode: 130923,
    lng: 116.542062,
    lat: 37.88655,
    name: "东光县",
    level: "district",
    parent: 130900
  },
  {
    adcode: 130924,
    lng: 117.496606,
    lat: 38.141582,
    name: "海兴县",
    level: "district",
    parent: 130900
  },
  {
    adcode: 130925,
    lng: 117.229814,
    lat: 38.056141,
    name: "盐山县",
    level: "district",
    parent: 130900
  },
  {
    adcode: 130926,
    lng: 115.835856,
    lat: 38.427102,
    name: "肃宁县",
    level: "district",
    parent: 130900
  },
  {
    adcode: 130927,
    lng: 116.709171,
    lat: 38.042439,
    name: "南皮县",
    level: "district",
    parent: 130900
  },
  {
    adcode: 130928,
    lng: 116.391512,
    lat: 37.628182,
    name: "吴桥县",
    level: "district",
    parent: 130900
  },
  {
    adcode: 130929,
    lng: 116.123844,
    lat: 38.189661,
    name: "献县",
    level: "district",
    parent: 130900
  },
  {
    adcode: 130930,
    lng: 117.105104,
    lat: 38.057953,
    name: "孟村回族自治县",
    level: "district",
    parent: 130900
  },
  {
    adcode: 130981,
    lng: 116.570163,
    lat: 38.073479,
    name: "泊头市",
    level: "district",
    parent: 130900
  },
  {
    adcode: 130982,
    lng: 116.106764,
    lat: 38.706513,
    name: "任丘市",
    level: "district",
    parent: 130900
  },
  {
    adcode: 130983,
    lng: 117.343803,
    lat: 38.369238,
    name: "黄骅市",
    level: "district",
    parent: 130900
  },
  {
    adcode: 130984,
    lng: 116.089452,
    lat: 38.44149,
    name: "河间市",
    level: "district",
    parent: 130900
  },
  {
    adcode: 131000,
    lng: 116.704441,
    lat: 39.523927,
    name: "廊坊市",
    level: "city",
    parent: 130000
  },
  {
    adcode: 131002,
    lng: 116.694544,
    lat: 39.502569,
    name: "安次区",
    level: "district",
    parent: 131000
  },
  {
    adcode: 131003,
    lng: 116.713708,
    lat: 39.521931,
    name: "广阳区",
    level: "district",
    parent: 131000
  },
  {
    adcode: 131022,
    lng: 116.299894,
    lat: 39.436468,
    name: "固安县",
    level: "district",
    parent: 131000
  },
  {
    adcode: 131023,
    lng: 116.498089,
    lat: 39.319717,
    name: "永清县",
    level: "district",
    parent: 131000
  },
  {
    adcode: 131024,
    lng: 117.007161,
    lat: 39.757212,
    name: "香河县",
    level: "district",
    parent: 131000
  },
  {
    adcode: 131025,
    lng: 116.640735,
    lat: 38.699215,
    name: "大城县",
    level: "district",
    parent: 131000
  },
  {
    adcode: 131026,
    lng: 116.460107,
    lat: 38.866801,
    name: "文安县",
    level: "district",
    parent: 131000
  },
  {
    adcode: 131028,
    lng: 116.986501,
    lat: 39.889266,
    name: "大厂回族自治县",
    level: "district",
    parent: 131000
  },
  {
    adcode: 131081,
    lng: 116.392021,
    lat: 39.117331,
    name: "霸州市",
    level: "district",
    parent: 131000
  },
  {
    adcode: 131082,
    lng: 117.077018,
    lat: 39.982778,
    name: "三河市",
    level: "district",
    parent: 131000
  },
  {
    adcode: 131100,
    lng: 115.665993,
    lat: 37.735097,
    name: "衡水市",
    level: "city",
    parent: 130000
  },
  {
    adcode: 131102,
    lng: 115.694945,
    lat: 37.732237,
    name: "桃城区",
    level: "district",
    parent: 131100
  },
  {
    adcode: 131103,
    lng: 115.579173,
    lat: 37.542788,
    name: "冀州区",
    level: "district",
    parent: 131100
  },
  {
    adcode: 131121,
    lng: 115.726499,
    lat: 37.511512,
    name: "枣强县",
    level: "district",
    parent: 131100
  },
  {
    adcode: 131122,
    lng: 115.892415,
    lat: 37.803774,
    name: "武邑县",
    level: "district",
    parent: 131100
  },
  {
    adcode: 131123,
    lng: 115.970236,
    lat: 38.03698,
    name: "武强县",
    level: "district",
    parent: 131100
  },
  {
    adcode: 131124,
    lng: 115.726577,
    lat: 38.232671,
    name: "饶阳县",
    level: "district",
    parent: 131100
  },
  {
    adcode: 131125,
    lng: 115.519627,
    lat: 38.233511,
    name: "安平县",
    level: "district",
    parent: 131100
  },
  {
    adcode: 131126,
    lng: 115.966747,
    lat: 37.350981,
    name: "故城县",
    level: "district",
    parent: 131100
  },
  {
    adcode: 131127,
    lng: 116.258446,
    lat: 37.686622,
    name: "景县",
    level: "district",
    parent: 131100
  },
  {
    adcode: 131128,
    lng: 116.164727,
    lat: 37.869945,
    name: "阜城县",
    level: "district",
    parent: 131100
  },
  {
    adcode: 131182,
    lng: 115.554596,
    lat: 38.00347,
    name: "深州市",
    level: "district",
    parent: 131100
  },
  {
    adcode: 140000,
    lng: 112.549248,
    lat: 37.857014,
    name: "山西省",
    level: "province",
    parent: 100000
  },
  {
    adcode: 140100,
    lng: 112.549248,
    lat: 37.857014,
    name: "太原市",
    level: "city",
    parent: 140000
  },
  {
    adcode: 140105,
    lng: 112.564273,
    lat: 37.817974,
    name: "小店区",
    level: "district",
    parent: 140100
  },
  {
    adcode: 140106,
    lng: 112.558851,
    lat: 37.855804,
    name: "迎泽区",
    level: "district",
    parent: 140100
  },
  {
    adcode: 140107,
    lng: 112.560743,
    lat: 37.879291,
    name: "杏花岭区",
    level: "district",
    parent: 140100
  },
  {
    adcode: 140108,
    lng: 112.487122,
    lat: 37.939893,
    name: "尖草坪区",
    level: "district",
    parent: 140100
  },
  {
    adcode: 140109,
    lng: 112.522258,
    lat: 37.862653,
    name: "万柏林区",
    level: "district",
    parent: 140100
  },
  {
    adcode: 140110,
    lng: 112.477849,
    lat: 37.715619,
    name: "晋源区",
    level: "district",
    parent: 140100
  },
  {
    adcode: 140121,
    lng: 112.357961,
    lat: 37.60729,
    name: "清徐县",
    level: "district",
    parent: 140100
  },
  {
    adcode: 140122,
    lng: 112.673818,
    lat: 38.058797,
    name: "阳曲县",
    level: "district",
    parent: 140100
  },
  {
    adcode: 140123,
    lng: 111.793798,
    lat: 38.066035,
    name: "娄烦县",
    level: "district",
    parent: 140100
  },
  {
    adcode: 140181,
    lng: 112.174353,
    lat: 37.908534,
    name: "古交市",
    level: "district",
    parent: 140100
  },
  {
    adcode: 140200,
    lng: 113.295259,
    lat: 40.09031,
    name: "大同市",
    level: "city",
    parent: 140000
  },
  {
    adcode: 140212,
    lng: 113.141044,
    lat: 40.258269,
    name: "新荣区",
    level: "district",
    parent: 140200
  },
  {
    adcode: 140213,
    lng: 113.298027,
    lat: 40.075667,
    name: "平城区",
    level: "district",
    parent: 140200
  },
  {
    adcode: 140214,
    lng: 113.149693,
    lat: 40.005405,
    name: "云冈区",
    level: "district",
    parent: 140200
  },
  {
    adcode: 140215,
    lng: 113.61244,
    lat: 40.040295,
    name: "云州区",
    level: "district",
    parent: 140200
  },
  {
    adcode: 140221,
    lng: 113.749871,
    lat: 40.364927,
    name: "阳高县",
    level: "district",
    parent: 140200
  },
  {
    adcode: 140222,
    lng: 114.09112,
    lat: 40.421336,
    name: "天镇县",
    level: "district",
    parent: 140200
  },
  {
    adcode: 140223,
    lng: 114.279252,
    lat: 39.763051,
    name: "广灵县",
    level: "district",
    parent: 140200
  },
  {
    adcode: 140224,
    lng: 114.23576,
    lat: 39.438867,
    name: "灵丘县",
    level: "district",
    parent: 140200
  },
  {
    adcode: 140225,
    lng: 113.698091,
    lat: 39.699099,
    name: "浑源县",
    level: "district",
    parent: 140200
  },
  {
    adcode: 140226,
    lng: 112.70641,
    lat: 40.012873,
    name: "左云县",
    level: "district",
    parent: 140200
  },
  {
    adcode: 140300,
    lng: 113.583285,
    lat: 37.861188,
    name: "阳泉市",
    level: "city",
    parent: 140000
  },
  {
    adcode: 140302,
    lng: 113.586513,
    lat: 37.860938,
    name: "城区",
    level: "district",
    parent: 140300
  },
  {
    adcode: 140303,
    lng: 113.559066,
    lat: 37.870085,
    name: "矿区",
    level: "district",
    parent: 140300
  },
  {
    adcode: 140311,
    lng: 113.58664,
    lat: 37.94096,
    name: "郊区",
    level: "district",
    parent: 140300
  },
  {
    adcode: 140321,
    lng: 113.631049,
    lat: 37.800289,
    name: "平定县",
    level: "district",
    parent: 140300
  },
  {
    adcode: 140322,
    lng: 113.41223,
    lat: 38.086131,
    name: "盂县",
    level: "district",
    parent: 140300
  },
  {
    adcode: 140400,
    lng: 113.113556,
    lat: 36.191112,
    name: "长治市",
    level: "city",
    parent: 140000
  },
  {
    adcode: 140403,
    lng: 113.114107,
    lat: 36.187895,
    name: "潞州区",
    level: "district",
    parent: 140400
  },
  {
    adcode: 140404,
    lng: 113.056679,
    lat: 36.052438,
    name: "上党区",
    level: "district",
    parent: 140400
  },
  {
    adcode: 140405,
    lng: 112.892741,
    lat: 36.314072,
    name: "屯留区",
    level: "district",
    parent: 140400
  },
  {
    adcode: 140406,
    lng: 113.223245,
    lat: 36.332232,
    name: "潞城区",
    level: "district",
    parent: 140400
  },
  {
    adcode: 140423,
    lng: 113.050094,
    lat: 36.532854,
    name: "襄垣县",
    level: "district",
    parent: 140400
  },
  {
    adcode: 140425,
    lng: 113.438791,
    lat: 36.200202,
    name: "平顺县",
    level: "district",
    parent: 140400
  },
  {
    adcode: 140426,
    lng: 113.387366,
    lat: 36.502971,
    name: "黎城县",
    level: "district",
    parent: 140400
  },
  {
    adcode: 140427,
    lng: 113.206138,
    lat: 36.110938,
    name: "壶关县",
    level: "district",
    parent: 140400
  },
  {
    adcode: 140428,
    lng: 112.884656,
    lat: 36.119484,
    name: "长子县",
    level: "district",
    parent: 140400
  },
  {
    adcode: 140429,
    lng: 112.8653,
    lat: 36.834315,
    name: "武乡县",
    level: "district",
    parent: 140400
  },
  {
    adcode: 140430,
    lng: 112.70138,
    lat: 36.757123,
    name: "沁县",
    level: "district",
    parent: 140400
  },
  {
    adcode: 140431,
    lng: 112.340878,
    lat: 36.500777,
    name: "沁源县",
    level: "district",
    parent: 140400
  },
  {
    adcode: 140500,
    lng: 112.851274,
    lat: 35.497553,
    name: "晋城市",
    level: "city",
    parent: 140000
  },
  {
    adcode: 140502,
    lng: 112.853106,
    lat: 35.496641,
    name: "城区",
    level: "district",
    parent: 140500
  },
  {
    adcode: 140521,
    lng: 112.187213,
    lat: 35.689472,
    name: "沁水县",
    level: "district",
    parent: 140500
  },
  {
    adcode: 140522,
    lng: 112.422014,
    lat: 35.482177,
    name: "阳城县",
    level: "district",
    parent: 140500
  },
  {
    adcode: 140524,
    lng: 113.278877,
    lat: 35.775614,
    name: "陵川县",
    level: "district",
    parent: 140500
  },
  {
    adcode: 140525,
    lng: 112.899137,
    lat: 35.617221,
    name: "泽州县",
    level: "district",
    parent: 140500
  },
  {
    adcode: 140581,
    lng: 112.930691,
    lat: 35.791355,
    name: "高平市",
    level: "district",
    parent: 140500
  },
  {
    adcode: 140600,
    lng: 112.433387,
    lat: 39.331261,
    name: "朔州市",
    level: "city",
    parent: 140000
  },
  {
    adcode: 140602,
    lng: 112.428676,
    lat: 39.324525,
    name: "朔城区",
    level: "district",
    parent: 140600
  },
  {
    adcode: 140603,
    lng: 112.295227,
    lat: 39.515603,
    name: "平鲁区",
    level: "district",
    parent: 140600
  },
  {
    adcode: 140621,
    lng: 112.816396,
    lat: 39.52677,
    name: "山阴县",
    level: "district",
    parent: 140600
  },
  {
    adcode: 140622,
    lng: 113.187505,
    lat: 39.559187,
    name: "应县",
    level: "district",
    parent: 140600
  },
  {
    adcode: 140623,
    lng: 112.465588,
    lat: 39.988812,
    name: "右玉县",
    level: "district",
    parent: 140600
  },
  {
    adcode: 140681,
    lng: 113.100511,
    lat: 39.820789,
    name: "怀仁市",
    level: "district",
    parent: 140600
  },
  {
    adcode: 140700,
    lng: 112.736465,
    lat: 37.696495,
    name: "晋中市",
    level: "city",
    parent: 140000
  },
  {
    adcode: 140702,
    lng: 112.740056,
    lat: 37.6976,
    name: "榆次区",
    level: "district",
    parent: 140700
  },
  {
    adcode: 140703,
    lng: 112.554103,
    lat: 37.424595,
    name: "太谷区",
    level: "district",
    parent: 140700
  },
  {
    adcode: 140721,
    lng: 112.973521,
    lat: 37.069019,
    name: "榆社县",
    level: "district",
    parent: 140700
  },
  {
    adcode: 140722,
    lng: 113.377834,
    lat: 37.079672,
    name: "左权县",
    level: "district",
    parent: 140700
  },
  {
    adcode: 140723,
    lng: 113.572919,
    lat: 37.327027,
    name: "和顺县",
    level: "district",
    parent: 140700
  },
  {
    adcode: 140724,
    lng: 113.706166,
    lat: 37.60437,
    name: "昔阳县",
    level: "district",
    parent: 140700
  },
  {
    adcode: 140725,
    lng: 113.177708,
    lat: 37.891136,
    name: "寿阳县",
    level: "district",
    parent: 140700
  },
  {
    adcode: 140727,
    lng: 112.330532,
    lat: 37.358739,
    name: "祁县",
    level: "district",
    parent: 140700
  },
  {
    adcode: 140728,
    lng: 112.174059,
    lat: 37.195474,
    name: "平遥县",
    level: "district",
    parent: 140700
  },
  {
    adcode: 140729,
    lng: 111.772759,
    lat: 36.847469,
    name: "灵石县",
    level: "district",
    parent: 140700
  },
  {
    adcode: 140781,
    lng: 111.913857,
    lat: 37.027616,
    name: "介休市",
    level: "district",
    parent: 140700
  },
  {
    adcode: 140800,
    lng: 111.003957,
    lat: 35.022778,
    name: "运城市",
    level: "city",
    parent: 140000
  },
  {
    adcode: 140802,
    lng: 111.000627,
    lat: 35.025643,
    name: "盐湖区",
    level: "district",
    parent: 140800
  },
  {
    adcode: 140821,
    lng: 110.77493,
    lat: 35.141883,
    name: "临猗县",
    level: "district",
    parent: 140800
  },
  {
    adcode: 140822,
    lng: 110.843561,
    lat: 35.417042,
    name: "万荣县",
    level: "district",
    parent: 140800
  },
  {
    adcode: 140823,
    lng: 111.220306,
    lat: 35.353839,
    name: "闻喜县",
    level: "district",
    parent: 140800
  },
  {
    adcode: 140824,
    lng: 110.978996,
    lat: 35.600412,
    name: "稷山县",
    level: "district",
    parent: 140800
  },
  {
    adcode: 140825,
    lng: 111.225205,
    lat: 35.613697,
    name: "新绛县",
    level: "district",
    parent: 140800
  },
  {
    adcode: 140826,
    lng: 111.576182,
    lat: 35.49045,
    name: "绛县",
    level: "district",
    parent: 140800
  },
  {
    adcode: 140827,
    lng: 111.67099,
    lat: 35.298293,
    name: "垣曲县",
    level: "district",
    parent: 140800
  },
  {
    adcode: 140828,
    lng: 111.223174,
    lat: 35.140441,
    name: "夏县",
    level: "district",
    parent: 140800
  },
  {
    adcode: 140829,
    lng: 111.212377,
    lat: 34.837256,
    name: "平陆县",
    level: "district",
    parent: 140800
  },
  {
    adcode: 140830,
    lng: 110.69114,
    lat: 34.694769,
    name: "芮城县",
    level: "district",
    parent: 140800
  },
  {
    adcode: 140881,
    lng: 110.447984,
    lat: 34.865125,
    name: "永济市",
    level: "district",
    parent: 140800
  },
  {
    adcode: 140882,
    lng: 110.710268,
    lat: 35.59715,
    name: "河津市",
    level: "district",
    parent: 140800
  },
  {
    adcode: 140900,
    lng: 112.733538,
    lat: 38.41769,
    name: "忻州市",
    level: "city",
    parent: 140000
  },
  {
    adcode: 140902,
    lng: 112.734112,
    lat: 38.417743,
    name: "忻府区",
    level: "district",
    parent: 140900
  },
  {
    adcode: 140921,
    lng: 112.963231,
    lat: 38.484948,
    name: "定襄县",
    level: "district",
    parent: 140900
  },
  {
    adcode: 140922,
    lng: 113.259012,
    lat: 38.725711,
    name: "五台县",
    level: "district",
    parent: 140900
  },
  {
    adcode: 140923,
    lng: 112.962519,
    lat: 39.065138,
    name: "代县",
    level: "district",
    parent: 140900
  },
  {
    adcode: 140924,
    lng: 113.267707,
    lat: 39.188104,
    name: "繁峙县",
    level: "district",
    parent: 140900
  },
  {
    adcode: 140925,
    lng: 112.307936,
    lat: 39.001718,
    name: "宁武县",
    level: "district",
    parent: 140900
  },
  {
    adcode: 140926,
    lng: 111.940231,
    lat: 38.355947,
    name: "静乐县",
    level: "district",
    parent: 140900
  },
  {
    adcode: 140927,
    lng: 112.200438,
    lat: 39.088467,
    name: "神池县",
    level: "district",
    parent: 140900
  },
  {
    adcode: 140928,
    lng: 111.841015,
    lat: 38.912761,
    name: "五寨县",
    level: "district",
    parent: 140900
  },
  {
    adcode: 140929,
    lng: 111.56981,
    lat: 38.705625,
    name: "岢岚县",
    level: "district",
    parent: 140900
  },
  {
    adcode: 140930,
    lng: 111.146609,
    lat: 39.381895,
    name: "河曲县",
    level: "district",
    parent: 140900
  },
  {
    adcode: 140931,
    lng: 111.085688,
    lat: 39.022576,
    name: "保德县",
    level: "district",
    parent: 140900
  },
  {
    adcode: 140932,
    lng: 111.500477,
    lat: 39.442153,
    name: "偏关县",
    level: "district",
    parent: 140900
  },
  {
    adcode: 140981,
    lng: 112.713132,
    lat: 38.729186,
    name: "原平市",
    level: "district",
    parent: 140900
  },
  {
    adcode: 141000,
    lng: 111.517973,
    lat: 36.08415,
    name: "临汾市",
    level: "city",
    parent: 140000
  },
  {
    adcode: 141002,
    lng: 111.522945,
    lat: 36.080366,
    name: "尧都区",
    level: "district",
    parent: 141000
  },
  {
    adcode: 141021,
    lng: 111.475529,
    lat: 35.641387,
    name: "曲沃县",
    level: "district",
    parent: 141000
  },
  {
    adcode: 141022,
    lng: 111.713508,
    lat: 35.738621,
    name: "翼城县",
    level: "district",
    parent: 141000
  },
  {
    adcode: 141023,
    lng: 111.442932,
    lat: 35.876139,
    name: "襄汾县",
    level: "district",
    parent: 141000
  },
  {
    adcode: 141024,
    lng: 111.673692,
    lat: 36.255742,
    name: "洪洞县",
    level: "district",
    parent: 141000
  },
  {
    adcode: 141025,
    lng: 111.920207,
    lat: 36.26855,
    name: "古县",
    level: "district",
    parent: 141000
  },
  {
    adcode: 141026,
    lng: 112.251372,
    lat: 36.146032,
    name: "安泽县",
    level: "district",
    parent: 141000
  },
  {
    adcode: 141027,
    lng: 111.850039,
    lat: 35.971359,
    name: "浮山县",
    level: "district",
    parent: 141000
  },
  {
    adcode: 141028,
    lng: 110.682853,
    lat: 36.099355,
    name: "吉县",
    level: "district",
    parent: 141000
  },
  {
    adcode: 141029,
    lng: 110.857365,
    lat: 35.975402,
    name: "乡宁县",
    level: "district",
    parent: 141000
  },
  {
    adcode: 141030,
    lng: 110.751283,
    lat: 36.46383,
    name: "大宁县",
    level: "district",
    parent: 141000
  },
  {
    adcode: 141031,
    lng: 110.935809,
    lat: 36.692675,
    name: "隰县",
    level: "district",
    parent: 141000
  },
  {
    adcode: 141032,
    lng: 110.631276,
    lat: 36.760614,
    name: "永和县",
    level: "district",
    parent: 141000
  },
  {
    adcode: 141033,
    lng: 111.09733,
    lat: 36.411682,
    name: "蒲县",
    level: "district",
    parent: 141000
  },
  {
    adcode: 141034,
    lng: 111.563021,
    lat: 36.653368,
    name: "汾西县",
    level: "district",
    parent: 141000
  },
  {
    adcode: 141081,
    lng: 111.371272,
    lat: 35.620302,
    name: "侯马市",
    level: "district",
    parent: 141000
  },
  {
    adcode: 141082,
    lng: 111.723103,
    lat: 36.57202,
    name: "霍州市",
    level: "district",
    parent: 141000
  },
  {
    adcode: 141100,
    lng: 111.134335,
    lat: 37.524366,
    name: "吕梁市",
    level: "city",
    parent: 140000
  },
  {
    adcode: 141102,
    lng: 111.134462,
    lat: 37.524037,
    name: "离石区",
    level: "district",
    parent: 141100
  },
  {
    adcode: 141121,
    lng: 112.032595,
    lat: 37.436314,
    name: "文水县",
    level: "district",
    parent: 141100
  },
  {
    adcode: 141122,
    lng: 112.159154,
    lat: 37.555155,
    name: "交城县",
    level: "district",
    parent: 141100
  },
  {
    adcode: 141123,
    lng: 111.124816,
    lat: 38.464136,
    name: "兴县",
    level: "district",
    parent: 141100
  },
  {
    adcode: 141124,
    lng: 110.995963,
    lat: 37.960806,
    name: "临县",
    level: "district",
    parent: 141100
  },
  {
    adcode: 141125,
    lng: 110.89613,
    lat: 37.431664,
    name: "柳林县",
    level: "district",
    parent: 141100
  },
  {
    adcode: 141126,
    lng: 110.837119,
    lat: 36.999426,
    name: "石楼县",
    level: "district",
    parent: 141100
  },
  {
    adcode: 141127,
    lng: 111.671555,
    lat: 38.278654,
    name: "岚县",
    level: "district",
    parent: 141100
  },
  {
    adcode: 141128,
    lng: 111.238885,
    lat: 37.892632,
    name: "方山县",
    level: "district",
    parent: 141100
  },
  {
    adcode: 141129,
    lng: 111.193319,
    lat: 37.342054,
    name: "中阳县",
    level: "district",
    parent: 141100
  },
  {
    adcode: 141130,
    lng: 111.183188,
    lat: 36.983068,
    name: "交口县",
    level: "district",
    parent: 141100
  },
  {
    adcode: 141181,
    lng: 111.781568,
    lat: 37.144474,
    name: "孝义市",
    level: "district",
    parent: 141100
  },
  {
    adcode: 141182,
    lng: 111.785273,
    lat: 37.267742,
    name: "汾阳市",
    level: "district",
    parent: 141100
  },
  {
    adcode: 150000,
    lng: 111.670801,
    lat: 40.818311,
    name: "内蒙古自治区",
    level: "province",
    parent: 100000
  },
  {
    adcode: 150100,
    lng: 111.670801,
    lat: 40.818311,
    name: "呼和浩特市",
    level: "city",
    parent: 150000
  },
  {
    adcode: 150102,
    lng: 111.685964,
    lat: 40.826225,
    name: "新城区",
    level: "district",
    parent: 150100
  },
  {
    adcode: 150103,
    lng: 111.662162,
    lat: 40.815149,
    name: "回民区",
    level: "district",
    parent: 150100
  },
  {
    adcode: 150104,
    lng: 111.66543,
    lat: 40.799421,
    name: "玉泉区",
    level: "district",
    parent: 150100
  },
  {
    adcode: 150105,
    lng: 111.698463,
    lat: 40.807834,
    name: "赛罕区",
    level: "district",
    parent: 150100
  },
  {
    adcode: 150121,
    lng: 111.133615,
    lat: 40.720416,
    name: "土默特左旗",
    level: "district",
    parent: 150100
  },
  {
    adcode: 150122,
    lng: 111.197317,
    lat: 40.276729,
    name: "托克托县",
    level: "district",
    parent: 150100
  },
  {
    adcode: 150123,
    lng: 111.824143,
    lat: 40.380288,
    name: "和林格尔县",
    level: "district",
    parent: 150100
  },
  {
    adcode: 150124,
    lng: 111.67222,
    lat: 39.912479,
    name: "清水河县",
    level: "district",
    parent: 150100
  },
  {
    adcode: 150125,
    lng: 111.456563,
    lat: 41.094483,
    name: "武川县",
    level: "district",
    parent: 150100
  },
  {
    adcode: 150200,
    lng: 109.840405,
    lat: 40.658168,
    name: "包头市",
    level: "city",
    parent: 150000
  },
  {
    adcode: 150202,
    lng: 110.026895,
    lat: 40.587056,
    name: "东河区",
    level: "district",
    parent: 150200
  },
  {
    adcode: 150203,
    lng: 109.822932,
    lat: 40.661345,
    name: "昆都仑区",
    level: "district",
    parent: 150200
  },
  {
    adcode: 150204,
    lng: 109.880049,
    lat: 40.668558,
    name: "青山区",
    level: "district",
    parent: 150200
  },
  {
    adcode: 150205,
    lng: 110.272565,
    lat: 40.672094,
    name: "石拐区",
    level: "district",
    parent: 150200
  },
  {
    adcode: 150206,
    lng: 109.97016,
    lat: 41.769246,
    name: "白云鄂博矿区",
    level: "district",
    parent: 150200
  },
  {
    adcode: 150207,
    lng: 109.968122,
    lat: 40.600581,
    name: "九原区",
    level: "district",
    parent: 150200
  },
  {
    adcode: 150221,
    lng: 110.526766,
    lat: 40.566434,
    name: "土默特右旗",
    level: "district",
    parent: 150200
  },
  {
    adcode: 150222,
    lng: 110.063421,
    lat: 41.030004,
    name: "固阳县",
    level: "district",
    parent: 150200
  },
  {
    adcode: 150223,
    lng: 110.438452,
    lat: 41.702836,
    name: "达尔罕茂明安联合旗",
    level: "district",
    parent: 150200
  },
  {
    adcode: 150300,
    lng: 106.825563,
    lat: 39.673734,
    name: "乌海市",
    level: "city",
    parent: 150000
  },
  {
    adcode: 150302,
    lng: 106.817762,
    lat: 39.673527,
    name: "海勃湾区",
    level: "district",
    parent: 150300
  },
  {
    adcode: 150303,
    lng: 106.884789,
    lat: 39.44153,
    name: "海南区",
    level: "district",
    parent: 150300
  },
  {
    adcode: 150304,
    lng: 106.722711,
    lat: 39.502288,
    name: "乌达区",
    level: "district",
    parent: 150300
  },
  {
    adcode: 150400,
    lng: 118.956806,
    lat: 42.275317,
    name: "赤峰市",
    level: "city",
    parent: 150000
  },
  {
    adcode: 150402,
    lng: 118.961087,
    lat: 42.269732,
    name: "红山区",
    level: "district",
    parent: 150400
  },
  {
    adcode: 150403,
    lng: 119.289877,
    lat: 42.041168,
    name: "元宝山区",
    level: "district",
    parent: 150400
  },
  {
    adcode: 150404,
    lng: 118.938958,
    lat: 42.281046,
    name: "松山区",
    level: "district",
    parent: 150400
  },
  {
    adcode: 150421,
    lng: 120.094969,
    lat: 43.87877,
    name: "阿鲁科尔沁旗",
    level: "district",
    parent: 150400
  },
  {
    adcode: 150422,
    lng: 119.391737,
    lat: 43.980715,
    name: "巴林左旗",
    level: "district",
    parent: 150400
  },
  {
    adcode: 150423,
    lng: 118.678347,
    lat: 43.528963,
    name: "巴林右旗",
    level: "district",
    parent: 150400
  },
  {
    adcode: 150424,
    lng: 118.05775,
    lat: 43.605326,
    name: "林西县",
    level: "district",
    parent: 150400
  },
  {
    adcode: 150425,
    lng: 117.542465,
    lat: 43.256233,
    name: "克什克腾旗",
    level: "district",
    parent: 150400
  },
  {
    adcode: 150426,
    lng: 119.022619,
    lat: 42.937128,
    name: "翁牛特旗",
    level: "district",
    parent: 150400
  },
  {
    adcode: 150428,
    lng: 118.708572,
    lat: 41.92778,
    name: "喀喇沁旗",
    level: "district",
    parent: 150400
  },
  {
    adcode: 150429,
    lng: 119.339242,
    lat: 41.598692,
    name: "宁城县",
    level: "district",
    parent: 150400
  },
  {
    adcode: 150430,
    lng: 119.906486,
    lat: 42.287012,
    name: "敖汉旗",
    level: "district",
    parent: 150400
  },
  {
    adcode: 150500,
    lng: 122.263119,
    lat: 43.617429,
    name: "通辽市",
    level: "city",
    parent: 150000
  },
  {
    adcode: 150502,
    lng: 122.264042,
    lat: 43.617422,
    name: "科尔沁区",
    level: "district",
    parent: 150500
  },
  {
    adcode: 150521,
    lng: 123.313873,
    lat: 44.127166,
    name: "科尔沁左翼中旗",
    level: "district",
    parent: 150500
  },
  {
    adcode: 150522,
    lng: 122.355155,
    lat: 42.954564,
    name: "科尔沁左翼后旗",
    level: "district",
    parent: 150500
  },
  {
    adcode: 150523,
    lng: 121.308797,
    lat: 43.602432,
    name: "开鲁县",
    level: "district",
    parent: 150500
  },
  {
    adcode: 150524,
    lng: 121.774886,
    lat: 42.734692,
    name: "库伦旗",
    level: "district",
    parent: 150500
  },
  {
    adcode: 150525,
    lng: 120.662543,
    lat: 42.84685,
    name: "奈曼旗",
    level: "district",
    parent: 150500
  },
  {
    adcode: 150526,
    lng: 120.905275,
    lat: 44.555294,
    name: "扎鲁特旗",
    level: "district",
    parent: 150500
  },
  {
    adcode: 150581,
    lng: 119.657862,
    lat: 45.532361,
    name: "霍林郭勒市",
    level: "district",
    parent: 150500
  },
  {
    adcode: 150600,
    lng: 109.99029,
    lat: 39.817179,
    name: "鄂尔多斯市",
    level: "city",
    parent: 150000
  },
  {
    adcode: 150602,
    lng: 109.98945,
    lat: 39.81788,
    name: "东胜区",
    level: "district",
    parent: 150600
  },
  {
    adcode: 150603,
    lng: 109.790076,
    lat: 39.607472,
    name: "康巴什区",
    level: "district",
    parent: 150600
  },
  {
    adcode: 150621,
    lng: 110.040281,
    lat: 40.404076,
    name: "达拉特旗",
    level: "district",
    parent: 150600
  },
  {
    adcode: 150622,
    lng: 111.238332,
    lat: 39.865221,
    name: "准格尔旗",
    level: "district",
    parent: 150600
  },
  {
    adcode: 150623,
    lng: 107.48172,
    lat: 38.183257,
    name: "鄂托克前旗",
    level: "district",
    parent: 150600
  },
  {
    adcode: 150624,
    lng: 107.982604,
    lat: 39.095752,
    name: "鄂托克旗",
    level: "district",
    parent: 150600
  },
  {
    adcode: 150625,
    lng: 108.736324,
    lat: 39.831789,
    name: "杭锦旗",
    level: "district",
    parent: 150600
  },
  {
    adcode: 150626,
    lng: 108.842454,
    lat: 38.596611,
    name: "乌审旗",
    level: "district",
    parent: 150600
  },
  {
    adcode: 150627,
    lng: 109.787402,
    lat: 39.604312,
    name: "伊金霍洛旗",
    level: "district",
    parent: 150600
  },
  {
    adcode: 150700,
    lng: 119.758168,
    lat: 49.215333,
    name: "呼伦贝尔市",
    level: "city",
    parent: 150000
  },
  {
    adcode: 150702,
    lng: 119.764923,
    lat: 49.213889,
    name: "海拉尔区",
    level: "district",
    parent: 150700
  },
  {
    adcode: 150703,
    lng: 117.716373,
    lat: 49.456567,
    name: "扎赉诺尔区",
    level: "district",
    parent: 150700
  },
  {
    adcode: 150721,
    lng: 123.464615,
    lat: 48.130503,
    name: "阿荣旗",
    level: "district",
    parent: 150700
  },
  {
    adcode: 150722,
    lng: 124.507401,
    lat: 48.478385,
    name: "莫力达瓦达斡尔族自治旗",
    level: "district",
    parent: 150700
  },
  {
    adcode: 150723,
    lng: 123.725684,
    lat: 50.590177,
    name: "鄂伦春自治旗",
    level: "district",
    parent: 150700
  },
  {
    adcode: 150724,
    lng: 119.754041,
    lat: 49.143293,
    name: "鄂温克族自治旗",
    level: "district",
    parent: 150700
  },
  {
    adcode: 150725,
    lng: 119.437609,
    lat: 49.328422,
    name: "陈巴尔虎旗",
    level: "district",
    parent: 150700
  },
  {
    adcode: 150726,
    lng: 118.267454,
    lat: 48.216571,
    name: "新巴尔虎左旗",
    level: "district",
    parent: 150700
  },
  {
    adcode: 150727,
    lng: 116.825991,
    lat: 48.669134,
    name: "新巴尔虎右旗",
    level: "district",
    parent: 150700
  },
  {
    adcode: 150781,
    lng: 117.455561,
    lat: 49.590788,
    name: "满洲里市",
    level: "district",
    parent: 150700
  },
  {
    adcode: 150782,
    lng: 120.729005,
    lat: 49.287024,
    name: "牙克石市",
    level: "district",
    parent: 150700
  },
  {
    adcode: 150783,
    lng: 122.744401,
    lat: 48.007412,
    name: "扎兰屯市",
    level: "district",
    parent: 150700
  },
  {
    adcode: 150784,
    lng: 120.178636,
    lat: 50.2439,
    name: "额尔古纳市",
    level: "district",
    parent: 150700
  },
  {
    adcode: 150785,
    lng: 121.532724,
    lat: 50.780454,
    name: "根河市",
    level: "district",
    parent: 150700
  },
  {
    adcode: 150800,
    lng: 107.416959,
    lat: 40.757402,
    name: "巴彦淖尔市",
    level: "city",
    parent: 150000
  },
  {
    adcode: 150802,
    lng: 107.417018,
    lat: 40.757092,
    name: "临河区",
    level: "district",
    parent: 150800
  },
  {
    adcode: 150821,
    lng: 108.270658,
    lat: 41.097639,
    name: "五原县",
    level: "district",
    parent: 150800
  },
  {
    adcode: 150822,
    lng: 107.006056,
    lat: 40.330479,
    name: "磴口县",
    level: "district",
    parent: 150800
  },
  {
    adcode: 150823,
    lng: 108.656816,
    lat: 40.725209,
    name: "乌拉特前旗",
    level: "district",
    parent: 150800
  },
  {
    adcode: 150824,
    lng: 108.515255,
    lat: 41.57254,
    name: "乌拉特中旗",
    level: "district",
    parent: 150800
  },
  {
    adcode: 150825,
    lng: 107.074941,
    lat: 41.084307,
    name: "乌拉特后旗",
    level: "district",
    parent: 150800
  },
  {
    adcode: 150826,
    lng: 107.147682,
    lat: 40.888797,
    name: "杭锦后旗",
    level: "district",
    parent: 150800
  },
  {
    adcode: 150900,
    lng: 113.114543,
    lat: 41.034126,
    name: "乌兰察布市",
    level: "city",
    parent: 150000
  },
  {
    adcode: 150902,
    lng: 113.116453,
    lat: 41.034134,
    name: "集宁区",
    level: "district",
    parent: 150900
  },
  {
    adcode: 150921,
    lng: 112.577702,
    lat: 40.89576,
    name: "卓资县",
    level: "district",
    parent: 150900
  },
  {
    adcode: 150922,
    lng: 114.01008,
    lat: 41.899335,
    name: "化德县",
    level: "district",
    parent: 150900
  },
  {
    adcode: 150923,
    lng: 113.560643,
    lat: 41.560163,
    name: "商都县",
    level: "district",
    parent: 150900
  },
  {
    adcode: 150924,
    lng: 113.834009,
    lat: 40.872437,
    name: "兴和县",
    level: "district",
    parent: 150900
  },
  {
    adcode: 150925,
    lng: 112.500911,
    lat: 40.531627,
    name: "凉城县",
    level: "district",
    parent: 150900
  },
  {
    adcode: 150926,
    lng: 113.211958,
    lat: 40.786859,
    name: "察哈尔右翼前旗",
    level: "district",
    parent: 150900
  },
  {
    adcode: 150927,
    lng: 112.633563,
    lat: 41.274212,
    name: "察哈尔右翼中旗",
    level: "district",
    parent: 150900
  },
  {
    adcode: 150928,
    lng: 113.1906,
    lat: 41.447213,
    name: "察哈尔右翼后旗",
    level: "district",
    parent: 150900
  },
  {
    adcode: 150929,
    lng: 111.70123,
    lat: 41.528114,
    name: "四子王旗",
    level: "district",
    parent: 150900
  },
  {
    adcode: 150981,
    lng: 113.163462,
    lat: 40.437534,
    name: "丰镇市",
    level: "district",
    parent: 150900
  },
  {
    adcode: 152200,
    lng: 122.070317,
    lat: 46.076268,
    name: "兴安盟",
    level: "city",
    parent: 150000
  },
  {
    adcode: 152201,
    lng: 122.068975,
    lat: 46.077238,
    name: "乌兰浩特市",
    level: "district",
    parent: 152200
  },
  {
    adcode: 152202,
    lng: 119.943656,
    lat: 47.177,
    name: "阿尔山市",
    level: "district",
    parent: 152200
  },
  {
    adcode: 152221,
    lng: 121.957544,
    lat: 46.076497,
    name: "科尔沁右翼前旗",
    level: "district",
    parent: 152200
  },
  {
    adcode: 152222,
    lng: 121.472818,
    lat: 45.059645,
    name: "科尔沁右翼中旗",
    level: "district",
    parent: 152200
  },
  {
    adcode: 152223,
    lng: 122.909332,
    lat: 46.725136,
    name: "扎赉特旗",
    level: "district",
    parent: 152200
  },
  {
    adcode: 152224,
    lng: 121.564856,
    lat: 45.380986,
    name: "突泉县",
    level: "district",
    parent: 152200
  },
  {
    adcode: 152500,
    lng: 116.090996,
    lat: 43.944018,
    name: "锡林郭勒盟",
    level: "city",
    parent: 150000
  },
  {
    adcode: 152501,
    lng: 111.97981,
    lat: 43.652895,
    name: "二连浩特市",
    level: "district",
    parent: 152500
  },
  {
    adcode: 152502,
    lng: 116.091903,
    lat: 43.944301,
    name: "锡林浩特市",
    level: "district",
    parent: 152500
  },
  {
    adcode: 152522,
    lng: 114.970618,
    lat: 44.022728,
    name: "阿巴嘎旗",
    level: "district",
    parent: 152500
  },
  {
    adcode: 152523,
    lng: 113.653412,
    lat: 43.854108,
    name: "苏尼特左旗",
    level: "district",
    parent: 152500
  },
  {
    adcode: 152524,
    lng: 112.65539,
    lat: 42.746662,
    name: "苏尼特右旗",
    level: "district",
    parent: 152500
  },
  {
    adcode: 152525,
    lng: 116.980022,
    lat: 45.510307,
    name: "东乌珠穆沁旗",
    level: "district",
    parent: 152500
  },
  {
    adcode: 152526,
    lng: 117.615249,
    lat: 44.586147,
    name: "西乌珠穆沁旗",
    level: "district",
    parent: 152500
  },
  {
    adcode: 152527,
    lng: 115.28728,
    lat: 41.895199,
    name: "太仆寺旗",
    level: "district",
    parent: 152500
  },
  {
    adcode: 152528,
    lng: 113.843869,
    lat: 42.239229,
    name: "镶黄旗",
    level: "district",
    parent: 152500
  },
  {
    adcode: 152529,
    lng: 115.031423,
    lat: 42.286807,
    name: "正镶白旗",
    level: "district",
    parent: 152500
  },
  {
    adcode: 152530,
    lng: 116.003311,
    lat: 42.245895,
    name: "正蓝旗",
    level: "district",
    parent: 152500
  },
  {
    adcode: 152531,
    lng: 116.477288,
    lat: 42.197962,
    name: "多伦县",
    level: "district",
    parent: 152500
  },
  {
    adcode: 152900,
    lng: 105.706422,
    lat: 38.844814,
    name: "阿拉善盟",
    level: "city",
    parent: 150000
  },
  {
    adcode: 152921,
    lng: 105.70192,
    lat: 38.847241,
    name: "阿拉善左旗",
    level: "district",
    parent: 152900
  },
  {
    adcode: 152922,
    lng: 101.671984,
    lat: 39.21159,
    name: "阿拉善右旗",
    level: "district",
    parent: 152900
  },
  {
    adcode: 152923,
    lng: 101.06944,
    lat: 41.958813,
    name: "额济纳旗",
    level: "district",
    parent: 152900
  },
  {
    adcode: 210000,
    lng: 123.429096,
    lat: 41.796767,
    name: "辽宁省",
    level: "province",
    parent: 100000
  },
  {
    adcode: 210100,
    lng: 123.429096,
    lat: 41.796767,
    name: "沈阳市",
    level: "city",
    parent: 210000
  },
  {
    adcode: 210102,
    lng: 123.406664,
    lat: 41.788074,
    name: "和平区",
    level: "district",
    parent: 210100
  },
  {
    adcode: 210103,
    lng: 123.445696,
    lat: 41.795591,
    name: "沈河区",
    level: "district",
    parent: 210100
  },
  {
    adcode: 210104,
    lng: 123.469956,
    lat: 41.808503,
    name: "大东区",
    level: "district",
    parent: 210100
  },
  {
    adcode: 210105,
    lng: 123.405677,
    lat: 41.822336,
    name: "皇姑区",
    level: "district",
    parent: 210100
  },
  {
    adcode: 210106,
    lng: 123.350664,
    lat: 41.787808,
    name: "铁西区",
    level: "district",
    parent: 210100
  },
  {
    adcode: 210111,
    lng: 123.341604,
    lat: 41.665904,
    name: "苏家屯区",
    level: "district",
    parent: 210100
  },
  {
    adcode: 210112,
    lng: 123.458981,
    lat: 41.741946,
    name: "浑南区",
    level: "district",
    parent: 210100
  },
  {
    adcode: 210113,
    lng: 123.521471,
    lat: 42.052312,
    name: "沈北新区",
    level: "district",
    parent: 210100
  },
  {
    adcode: 210114,
    lng: 123.310829,
    lat: 41.795833,
    name: "于洪区",
    level: "district",
    parent: 210100
  },
  {
    adcode: 210115,
    lng: 122.731269,
    lat: 41.512725,
    name: "辽中区",
    level: "district",
    parent: 210100
  },
  {
    adcode: 210123,
    lng: 123.352703,
    lat: 42.741533,
    name: "康平县",
    level: "district",
    parent: 210100
  },
  {
    adcode: 210124,
    lng: 123.416722,
    lat: 42.507045,
    name: "法库县",
    level: "district",
    parent: 210100
  },
  {
    adcode: 210181,
    lng: 122.828868,
    lat: 41.996508,
    name: "新民市",
    level: "district",
    parent: 210100
  },
  {
    adcode: 210200,
    lng: 121.618622,
    lat: 38.91459,
    name: "大连市",
    level: "city",
    parent: 210000
  },
  {
    adcode: 210202,
    lng: 121.64376,
    lat: 38.921553,
    name: "中山区",
    level: "district",
    parent: 210200
  },
  {
    adcode: 210203,
    lng: 121.616112,
    lat: 38.914266,
    name: "西岗区",
    level: "district",
    parent: 210200
  },
  {
    adcode: 210204,
    lng: 121.593702,
    lat: 38.912859,
    name: "沙河口区",
    level: "district",
    parent: 210200
  },
  {
    adcode: 210211,
    lng: 121.582614,
    lat: 38.975148,
    name: "甘井子区",
    level: "district",
    parent: 210200
  },
  {
    adcode: 210212,
    lng: 121.26713,
    lat: 38.812043,
    name: "旅顺口区",
    level: "district",
    parent: 210200
  },
  {
    adcode: 210213,
    lng: 121.789413,
    lat: 39.052745,
    name: "金州区",
    level: "district",
    parent: 210200
  },
  {
    adcode: 210214,
    lng: 121.9705,
    lat: 39.401555,
    name: "普兰店区",
    level: "district",
    parent: 210200
  },
  {
    adcode: 210224,
    lng: 122.587824,
    lat: 39.272399,
    name: "长海县",
    level: "district",
    parent: 210200
  },
  {
    adcode: 210281,
    lng: 122.002656,
    lat: 39.63065,
    name: "瓦房店市",
    level: "district",
    parent: 210200
  },
  {
    adcode: 210283,
    lng: 122.970612,
    lat: 39.69829,
    name: "庄河市",
    level: "district",
    parent: 210200
  },
  {
    adcode: 210300,
    lng: 122.995632,
    lat: 41.110626,
    name: "鞍山市",
    level: "city",
    parent: 210000
  },
  {
    adcode: 210302,
    lng: 122.994475,
    lat: 41.110344,
    name: "铁东区",
    level: "district",
    parent: 210300
  },
  {
    adcode: 210303,
    lng: 122.971834,
    lat: 41.11069,
    name: "铁西区",
    level: "district",
    parent: 210300
  },
  {
    adcode: 210304,
    lng: 123.024806,
    lat: 41.150622,
    name: "立山区",
    level: "district",
    parent: 210300
  },
  {
    adcode: 210311,
    lng: 122.949298,
    lat: 41.068909,
    name: "千山区",
    level: "district",
    parent: 210300
  },
  {
    adcode: 210321,
    lng: 122.429736,
    lat: 41.38686,
    name: "台安县",
    level: "district",
    parent: 210300
  },
  {
    adcode: 210323,
    lng: 123.28833,
    lat: 40.281509,
    name: "岫岩满族自治县",
    level: "district",
    parent: 210300
  },
  {
    adcode: 210381,
    lng: 122.752199,
    lat: 40.852533,
    name: "海城市",
    level: "district",
    parent: 210300
  },
  {
    adcode: 210400,
    lng: 123.921109,
    lat: 41.875956,
    name: "抚顺市",
    level: "city",
    parent: 210000
  },
  {
    adcode: 210402,
    lng: 123.902858,
    lat: 41.86082,
    name: "新抚区",
    level: "district",
    parent: 210400
  },
  {
    adcode: 210403,
    lng: 124.047219,
    lat: 41.866829,
    name: "东洲区",
    level: "district",
    parent: 210400
  },
  {
    adcode: 210404,
    lng: 123.801509,
    lat: 41.851803,
    name: "望花区",
    level: "district",
    parent: 210400
  },
  {
    adcode: 210411,
    lng: 123.917165,
    lat: 41.881132,
    name: "顺城区",
    level: "district",
    parent: 210400
  },
  {
    adcode: 210421,
    lng: 124.097979,
    lat: 41.922644,
    name: "抚顺县",
    level: "district",
    parent: 210400
  },
  {
    adcode: 210422,
    lng: 125.037547,
    lat: 41.732456,
    name: "新宾满族自治县",
    level: "district",
    parent: 210400
  },
  {
    adcode: 210423,
    lng: 124.927192,
    lat: 42.10135,
    name: "清原满族自治县",
    level: "district",
    parent: 210400
  },
  {
    adcode: 210500,
    lng: 123.770519,
    lat: 41.297909,
    name: "本溪市",
    level: "city",
    parent: 210000
  },
  {
    adcode: 210502,
    lng: 123.761231,
    lat: 41.291581,
    name: "平山区",
    level: "district",
    parent: 210500
  },
  {
    adcode: 210503,
    lng: 123.765226,
    lat: 41.330056,
    name: "溪湖区",
    level: "district",
    parent: 210500
  },
  {
    adcode: 210504,
    lng: 123.763288,
    lat: 41.302429,
    name: "明山区",
    level: "district",
    parent: 210500
  },
  {
    adcode: 210505,
    lng: 123.748381,
    lat: 41.104093,
    name: "南芬区",
    level: "district",
    parent: 210500
  },
  {
    adcode: 210521,
    lng: 124.126156,
    lat: 41.300344,
    name: "本溪满族自治县",
    level: "district",
    parent: 210500
  },
  {
    adcode: 210522,
    lng: 125.359195,
    lat: 41.268997,
    name: "桓仁满族自治县",
    level: "district",
    parent: 210500
  },
  {
    adcode: 210600,
    lng: 124.383044,
    lat: 40.124296,
    name: "丹东市",
    level: "city",
    parent: 210000
  },
  {
    adcode: 210602,
    lng: 124.397814,
    lat: 40.136483,
    name: "元宝区",
    level: "district",
    parent: 210600
  },
  {
    adcode: 210603,
    lng: 124.361153,
    lat: 40.102801,
    name: "振兴区",
    level: "district",
    parent: 210600
  },
  {
    adcode: 210604,
    lng: 124.427709,
    lat: 40.158557,
    name: "振安区",
    level: "district",
    parent: 210600
  },
  {
    adcode: 210624,
    lng: 124.784867,
    lat: 40.730412,
    name: "宽甸满族自治县",
    level: "district",
    parent: 210600
  },
  {
    adcode: 210681,
    lng: 124.149437,
    lat: 39.883467,
    name: "东港市",
    level: "district",
    parent: 210600
  },
  {
    adcode: 210682,
    lng: 124.071067,
    lat: 40.457567,
    name: "凤城市",
    level: "district",
    parent: 210600
  },
  {
    adcode: 210700,
    lng: 121.135742,
    lat: 41.119269,
    name: "锦州市",
    level: "city",
    parent: 210000
  },
  {
    adcode: 210702,
    lng: 121.130085,
    lat: 41.115719,
    name: "古塔区",
    level: "district",
    parent: 210700
  },
  {
    adcode: 210703,
    lng: 121.151304,
    lat: 41.114662,
    name: "凌河区",
    level: "district",
    parent: 210700
  },
  {
    adcode: 210711,
    lng: 121.107297,
    lat: 41.105378,
    name: "太和区",
    level: "district",
    parent: 210700
  },
  {
    adcode: 210726,
    lng: 122.117915,
    lat: 41.691804,
    name: "黑山县",
    level: "district",
    parent: 210700
  },
  {
    adcode: 210727,
    lng: 121.242831,
    lat: 41.537224,
    name: "义县",
    level: "district",
    parent: 210700
  },
  {
    adcode: 210781,
    lng: 121.364236,
    lat: 41.171738,
    name: "凌海市",
    level: "district",
    parent: 210700
  },
  {
    adcode: 210782,
    lng: 121.795962,
    lat: 41.598764,
    name: "北镇市",
    level: "district",
    parent: 210700
  },
  {
    adcode: 210800,
    lng: 122.235151,
    lat: 40.667432,
    name: "营口市",
    level: "city",
    parent: 210000
  },
  {
    adcode: 210802,
    lng: 122.253235,
    lat: 40.669949,
    name: "站前区",
    level: "district",
    parent: 210800
  },
  {
    adcode: 210803,
    lng: 122.210067,
    lat: 40.663086,
    name: "西市区",
    level: "district",
    parent: 210800
  },
  {
    adcode: 210804,
    lng: 122.127242,
    lat: 40.263646,
    name: "鲅鱼圈区",
    level: "district",
    parent: 210800
  },
  {
    adcode: 210811,
    lng: 122.382584,
    lat: 40.682723,
    name: "老边区",
    level: "district",
    parent: 210800
  },
  {
    adcode: 210881,
    lng: 122.355534,
    lat: 40.405234,
    name: "盖州市",
    level: "district",
    parent: 210800
  },
  {
    adcode: 210882,
    lng: 122.505894,
    lat: 40.633973,
    name: "大石桥市",
    level: "district",
    parent: 210800
  },
  {
    adcode: 210900,
    lng: 121.648962,
    lat: 42.011796,
    name: "阜新市",
    level: "city",
    parent: 210000
  },
  {
    adcode: 210902,
    lng: 121.657639,
    lat: 42.011162,
    name: "海州区",
    level: "district",
    parent: 210900
  },
  {
    adcode: 210903,
    lng: 121.790541,
    lat: 42.086603,
    name: "新邱区",
    level: "district",
    parent: 210900
  },
  {
    adcode: 210904,
    lng: 121.677575,
    lat: 42.011145,
    name: "太平区",
    level: "district",
    parent: 210900
  },
  {
    adcode: 210905,
    lng: 121.42018,
    lat: 41.780477,
    name: "清河门区",
    level: "district",
    parent: 210900
  },
  {
    adcode: 210911,
    lng: 121.654791,
    lat: 42.019218,
    name: "细河区",
    level: "district",
    parent: 210900
  },
  {
    adcode: 210921,
    lng: 121.743125,
    lat: 42.058607,
    name: "阜新蒙古族自治县",
    level: "district",
    parent: 210900
  },
  {
    adcode: 210922,
    lng: 122.537444,
    lat: 42.384823,
    name: "彰武县",
    level: "district",
    parent: 210900
  },
  {
    adcode: 211000,
    lng: 123.18152,
    lat: 41.269402,
    name: "辽阳市",
    level: "city",
    parent: 210000
  },
  {
    adcode: 211002,
    lng: 123.172611,
    lat: 41.26745,
    name: "白塔区",
    level: "district",
    parent: 211000
  },
  {
    adcode: 211003,
    lng: 123.188227,
    lat: 41.266765,
    name: "文圣区",
    level: "district",
    parent: 211000
  },
  {
    adcode: 211004,
    lng: 123.200461,
    lat: 41.205747,
    name: "宏伟区",
    level: "district",
    parent: 211000
  },
  {
    adcode: 211005,
    lng: 123.431633,
    lat: 41.157831,
    name: "弓长岭区",
    level: "district",
    parent: 211000
  },
  {
    adcode: 211011,
    lng: 123.185336,
    lat: 41.251682,
    name: "太子河区",
    level: "district",
    parent: 211000
  },
  {
    adcode: 211021,
    lng: 123.079674,
    lat: 41.216479,
    name: "辽阳县",
    level: "district",
    parent: 211000
  },
  {
    adcode: 211081,
    lng: 123.325864,
    lat: 41.427836,
    name: "灯塔市",
    level: "district",
    parent: 211000
  },
  {
    adcode: 211100,
    lng: 122.06957,
    lat: 41.124484,
    name: "盘锦市",
    level: "city",
    parent: 210000
  },
  {
    adcode: 211102,
    lng: 122.055733,
    lat: 41.190365,
    name: "双台子区",
    level: "district",
    parent: 211100
  },
  {
    adcode: 211103,
    lng: 122.071624,
    lat: 41.122423,
    name: "兴隆台区",
    level: "district",
    parent: 211100
  },
  {
    adcode: 211104,
    lng: 122.071708,
    lat: 40.994428,
    name: "大洼区",
    level: "district",
    parent: 211100
  },
  {
    adcode: 211122,
    lng: 121.98528,
    lat: 41.240701,
    name: "盘山县",
    level: "district",
    parent: 211100
  },
  {
    adcode: 211200,
    lng: 123.844279,
    lat: 42.290585,
    name: "铁岭市",
    level: "city",
    parent: 210000
  },
  {
    adcode: 211202,
    lng: 123.844877,
    lat: 42.292278,
    name: "银州区",
    level: "district",
    parent: 211200
  },
  {
    adcode: 211204,
    lng: 124.14896,
    lat: 42.542978,
    name: "清河区",
    level: "district",
    parent: 211200
  },
  {
    adcode: 211221,
    lng: 123.725669,
    lat: 42.223316,
    name: "铁岭县",
    level: "district",
    parent: 211200
  },
  {
    adcode: 211223,
    lng: 124.72332,
    lat: 42.738091,
    name: "西丰县",
    level: "district",
    parent: 211200
  },
  {
    adcode: 211224,
    lng: 124.11017,
    lat: 42.784441,
    name: "昌图县",
    level: "district",
    parent: 211200
  },
  {
    adcode: 211281,
    lng: 123.545366,
    lat: 42.450734,
    name: "调兵山市",
    level: "district",
    parent: 211200
  },
  {
    adcode: 211282,
    lng: 124.045551,
    lat: 42.542141,
    name: "开原市",
    level: "district",
    parent: 211200
  },
  {
    adcode: 211300,
    lng: 120.451176,
    lat: 41.576758,
    name: "朝阳市",
    level: "city",
    parent: 210000
  },
  {
    adcode: 211302,
    lng: 120.44877,
    lat: 41.579389,
    name: "双塔区",
    level: "district",
    parent: 211300
  },
  {
    adcode: 211303,
    lng: 120.413376,
    lat: 41.576749,
    name: "龙城区",
    level: "district",
    parent: 211300
  },
  {
    adcode: 211321,
    lng: 120.404217,
    lat: 41.526342,
    name: "朝阳县",
    level: "district",
    parent: 211300
  },
  {
    adcode: 211322,
    lng: 119.642363,
    lat: 41.402576,
    name: "建平县",
    level: "district",
    parent: 211300
  },
  {
    adcode: 211324,
    lng: 119.744883,
    lat: 41.125428,
    name: "喀喇沁左翼蒙古族自治县",
    level: "district",
    parent: 211300
  },
  {
    adcode: 211381,
    lng: 120.766951,
    lat: 41.803286,
    name: "北票市",
    level: "district",
    parent: 211300
  },
  {
    adcode: 211382,
    lng: 119.404789,
    lat: 41.243086,
    name: "凌源市",
    level: "district",
    parent: 211300
  },
  {
    adcode: 211400,
    lng: 120.856394,
    lat: 40.755572,
    name: "葫芦岛市",
    level: "city",
    parent: 210000
  },
  {
    adcode: 211402,
    lng: 120.85937,
    lat: 40.755143,
    name: "连山区",
    level: "district",
    parent: 211400
  },
  {
    adcode: 211403,
    lng: 120.838569,
    lat: 40.709991,
    name: "龙港区",
    level: "district",
    parent: 211400
  },
  {
    adcode: 211404,
    lng: 120.752314,
    lat: 41.098813,
    name: "南票区",
    level: "district",
    parent: 211400
  },
  {
    adcode: 211421,
    lng: 120.342112,
    lat: 40.328407,
    name: "绥中县",
    level: "district",
    parent: 211400
  },
  {
    adcode: 211422,
    lng: 119.807776,
    lat: 40.812871,
    name: "建昌县",
    level: "district",
    parent: 211400
  },
  {
    adcode: 211481,
    lng: 120.729365,
    lat: 40.619413,
    name: "兴城市",
    level: "district",
    parent: 211400
  },
  {
    adcode: 220000,
    lng: 125.3245,
    lat: 43.886841,
    name: "吉林省",
    level: "province",
    parent: 100000
  },
  {
    adcode: 220100,
    lng: 125.3245,
    lat: 43.886841,
    name: "长春市",
    level: "city",
    parent: 220000
  },
  {
    adcode: 220102,
    lng: 125.337237,
    lat: 43.890235,
    name: "南关区",
    level: "district",
    parent: 220100
  },
  {
    adcode: 220103,
    lng: 125.342828,
    lat: 43.903823,
    name: "宽城区",
    level: "district",
    parent: 220100
  },
  {
    adcode: 220104,
    lng: 125.318042,
    lat: 43.86491,
    name: "朝阳区",
    level: "district",
    parent: 220100
  },
  {
    adcode: 220105,
    lng: 125.384727,
    lat: 43.870824,
    name: "二道区",
    level: "district",
    parent: 220100
  },
  {
    adcode: 220106,
    lng: 125.272467,
    lat: 43.892177,
    name: "绿园区",
    level: "district",
    parent: 220100
  },
  {
    adcode: 220112,
    lng: 125.659018,
    lat: 43.525168,
    name: "双阳区",
    level: "district",
    parent: 220100
  },
  {
    adcode: 220113,
    lng: 125.844682,
    lat: 44.157155,
    name: "九台区",
    level: "district",
    parent: 220100
  },
  {
    adcode: 220122,
    lng: 125.175287,
    lat: 44.431258,
    name: "农安县",
    level: "district",
    parent: 220100
  },
  {
    adcode: 220182,
    lng: 126.550107,
    lat: 44.827642,
    name: "榆树市",
    level: "district",
    parent: 220100
  },
  {
    adcode: 220183,
    lng: 125.703327,
    lat: 44.533909,
    name: "德惠市",
    level: "district",
    parent: 220100
  },
  {
    adcode: 220184,
    lng: 124.817588,
    lat: 43.509474,
    name: "公主岭市",
    level: "district",
    parent: 220100
  },
  {
    adcode: 220200,
    lng: 126.55302,
    lat: 43.843577,
    name: "吉林市",
    level: "city",
    parent: 220000
  },
  {
    adcode: 220202,
    lng: 126.570766,
    lat: 43.851118,
    name: "昌邑区",
    level: "district",
    parent: 220200
  },
  {
    adcode: 220203,
    lng: 126.561429,
    lat: 43.909755,
    name: "龙潭区",
    level: "district",
    parent: 220200
  },
  {
    adcode: 220204,
    lng: 126.55239,
    lat: 43.843804,
    name: "船营区",
    level: "district",
    parent: 220200
  },
  {
    adcode: 220211,
    lng: 126.560759,
    lat: 43.816594,
    name: "丰满区",
    level: "district",
    parent: 220200
  },
  {
    adcode: 220221,
    lng: 126.501622,
    lat: 43.667416,
    name: "永吉县",
    level: "district",
    parent: 220200
  },
  {
    adcode: 220281,
    lng: 127.342739,
    lat: 43.720579,
    name: "蛟河市",
    level: "district",
    parent: 220200
  },
  {
    adcode: 220282,
    lng: 126.745445,
    lat: 42.972093,
    name: "桦甸市",
    level: "district",
    parent: 220200
  },
  {
    adcode: 220283,
    lng: 126.947813,
    lat: 44.410906,
    name: "舒兰市",
    level: "district",
    parent: 220200
  },
  {
    adcode: 220284,
    lng: 126.059929,
    lat: 42.942476,
    name: "磐石市",
    level: "district",
    parent: 220200
  },
  {
    adcode: 220300,
    lng: 124.370785,
    lat: 43.170344,
    name: "四平市",
    level: "city",
    parent: 220000
  },
  {
    adcode: 220302,
    lng: 124.360894,
    lat: 43.176263,
    name: "铁西区",
    level: "district",
    parent: 220300
  },
  {
    adcode: 220303,
    lng: 124.388464,
    lat: 43.16726,
    name: "铁东区",
    level: "district",
    parent: 220300
  },
  {
    adcode: 220322,
    lng: 124.335802,
    lat: 43.30831,
    name: "梨树县",
    level: "district",
    parent: 220300
  },
  {
    adcode: 220323,
    lng: 125.303124,
    lat: 43.345464,
    name: "伊通满族自治县",
    level: "district",
    parent: 220300
  },
  {
    adcode: 220382,
    lng: 123.505283,
    lat: 43.518275,
    name: "双辽市",
    level: "district",
    parent: 220300
  },
  {
    adcode: 220400,
    lng: 125.145349,
    lat: 42.902692,
    name: "辽源市",
    level: "city",
    parent: 220000
  },
  {
    adcode: 220402,
    lng: 125.145164,
    lat: 42.902702,
    name: "龙山区",
    level: "district",
    parent: 220400
  },
  {
    adcode: 220403,
    lng: 125.151424,
    lat: 42.920415,
    name: "西安区",
    level: "district",
    parent: 220400
  },
  {
    adcode: 220421,
    lng: 125.529623,
    lat: 42.675228,
    name: "东丰县",
    level: "district",
    parent: 220400
  },
  {
    adcode: 220422,
    lng: 124.991995,
    lat: 42.927724,
    name: "东辽县",
    level: "district",
    parent: 220400
  },
  {
    adcode: 220500,
    lng: 125.936501,
    lat: 41.721177,
    name: "通化市",
    level: "city",
    parent: 220000
  },
  {
    adcode: 220502,
    lng: 125.936716,
    lat: 41.721233,
    name: "东昌区",
    level: "district",
    parent: 220500
  },
  {
    adcode: 220503,
    lng: 126.045987,
    lat: 41.777564,
    name: "二道江区",
    level: "district",
    parent: 220500
  },
  {
    adcode: 220521,
    lng: 125.753121,
    lat: 41.677918,
    name: "通化县",
    level: "district",
    parent: 220500
  },
  {
    adcode: 220523,
    lng: 126.042821,
    lat: 42.683459,
    name: "辉南县",
    level: "district",
    parent: 220500
  },
  {
    adcode: 220524,
    lng: 125.740536,
    lat: 42.281484,
    name: "柳河县",
    level: "district",
    parent: 220500
  },
  {
    adcode: 220581,
    lng: 125.687336,
    lat: 42.530002,
    name: "梅河口市",
    level: "district",
    parent: 220500
  },
  {
    adcode: 220582,
    lng: 126.186204,
    lat: 41.126276,
    name: "集安市",
    level: "district",
    parent: 220500
  },
  {
    adcode: 220600,
    lng: 126.427839,
    lat: 41.942505,
    name: "白山市",
    level: "city",
    parent: 220000
  },
  {
    adcode: 220602,
    lng: 126.428035,
    lat: 41.943065,
    name: "浑江区",
    level: "district",
    parent: 220600
  },
  {
    adcode: 220605,
    lng: 126.584229,
    lat: 42.048109,
    name: "江源区",
    level: "district",
    parent: 220600
  },
  {
    adcode: 220621,
    lng: 127.273796,
    lat: 42.332643,
    name: "抚松县",
    level: "district",
    parent: 220600
  },
  {
    adcode: 220622,
    lng: 126.808386,
    lat: 42.389689,
    name: "靖宇县",
    level: "district",
    parent: 220600
  },
  {
    adcode: 220623,
    lng: 128.203384,
    lat: 41.419361,
    name: "长白朝鲜族自治县",
    level: "district",
    parent: 220600
  },
  {
    adcode: 220681,
    lng: 126.919296,
    lat: 41.810689,
    name: "临江市",
    level: "district",
    parent: 220600
  },
  {
    adcode: 220700,
    lng: 124.823608,
    lat: 45.118243,
    name: "松原市",
    level: "city",
    parent: 220000
  },
  {
    adcode: 220702,
    lng: 124.827851,
    lat: 45.176498,
    name: "宁江区",
    level: "district",
    parent: 220700
  },
  {
    adcode: 220721,
    lng: 124.826808,
    lat: 45.116288,
    name: "前郭尔罗斯蒙古族自治县",
    level: "district",
    parent: 220700
  },
  {
    adcode: 220722,
    lng: 123.985184,
    lat: 44.276579,
    name: "长岭县",
    level: "district",
    parent: 220700
  },
  {
    adcode: 220723,
    lng: 124.024361,
    lat: 45.006846,
    name: "乾安县",
    level: "district",
    parent: 220700
  },
  {
    adcode: 220781,
    lng: 126.042758,
    lat: 44.986199,
    name: "扶余市",
    level: "district",
    parent: 220700
  },
  {
    adcode: 220800,
    lng: 122.841114,
    lat: 45.619026,
    name: "白城市",
    level: "city",
    parent: 220000
  },
  {
    adcode: 220802,
    lng: 122.842499,
    lat: 45.619253,
    name: "洮北区",
    level: "district",
    parent: 220800
  },
  {
    adcode: 220821,
    lng: 123.202246,
    lat: 45.846089,
    name: "镇赉县",
    level: "district",
    parent: 220800
  },
  {
    adcode: 220822,
    lng: 123.088543,
    lat: 44.80915,
    name: "通榆县",
    level: "district",
    parent: 220800
  },
  {
    adcode: 220881,
    lng: 122.783779,
    lat: 45.339113,
    name: "洮南市",
    level: "district",
    parent: 220800
  },
  {
    adcode: 220882,
    lng: 124.291512,
    lat: 45.507648,
    name: "大安市",
    level: "district",
    parent: 220800
  },
  {
    adcode: 222400,
    lng: 129.513228,
    lat: 42.904823,
    name: "延边朝鲜族自治州",
    level: "city",
    parent: 220000
  },
  {
    adcode: 222401,
    lng: 129.51579,
    lat: 42.906964,
    name: "延吉市",
    level: "district",
    parent: 222400
  },
  {
    adcode: 222402,
    lng: 129.846701,
    lat: 42.966621,
    name: "图们市",
    level: "district",
    parent: 222400
  },
  {
    adcode: 222403,
    lng: 128.22986,
    lat: 43.366921,
    name: "敦化市",
    level: "district",
    parent: 222400
  },
  {
    adcode: 222404,
    lng: 130.365787,
    lat: 42.871057,
    name: "珲春市",
    level: "district",
    parent: 222400
  },
  {
    adcode: 222405,
    lng: 129.425747,
    lat: 42.771029,
    name: "龙井市",
    level: "district",
    parent: 222400
  },
  {
    adcode: 222406,
    lng: 129.008748,
    lat: 42.547004,
    name: "和龙市",
    level: "district",
    parent: 222400
  },
  {
    adcode: 222424,
    lng: 129.766161,
    lat: 43.315426,
    name: "汪清县",
    level: "district",
    parent: 222400
  },
  {
    adcode: 222426,
    lng: 128.901865,
    lat: 43.110994,
    name: "安图县",
    level: "district",
    parent: 222400
  },
  {
    adcode: 230000,
    lng: 126.642464,
    lat: 45.756967,
    name: "黑龙江省",
    level: "province",
    parent: 100000
  },
  {
    adcode: 230100,
    lng: 126.642464,
    lat: 45.756967,
    name: "哈尔滨市",
    level: "city",
    parent: 230000
  },
  {
    adcode: 230102,
    lng: 126.612532,
    lat: 45.762035,
    name: "道里区",
    level: "district",
    parent: 230100
  },
  {
    adcode: 230103,
    lng: 126.652098,
    lat: 45.755971,
    name: "南岗区",
    level: "district",
    parent: 230100
  },
  {
    adcode: 230104,
    lng: 126.648838,
    lat: 45.78454,
    name: "道外区",
    level: "district",
    parent: 230100
  },
  {
    adcode: 230108,
    lng: 126.629257,
    lat: 45.605567,
    name: "平房区",
    level: "district",
    parent: 230100
  },
  {
    adcode: 230109,
    lng: 126.563066,
    lat: 45.814656,
    name: "松北区",
    level: "district",
    parent: 230100
  },
  {
    adcode: 230110,
    lng: 126.667049,
    lat: 45.713067,
    name: "香坊区",
    level: "district",
    parent: 230100
  },
  {
    adcode: 230111,
    lng: 126.603302,
    lat: 45.98423,
    name: "呼兰区",
    level: "district",
    parent: 230100
  },
  {
    adcode: 230112,
    lng: 126.972726,
    lat: 45.538372,
    name: "阿城区",
    level: "district",
    parent: 230100
  },
  {
    adcode: 230113,
    lng: 126.308784,
    lat: 45.377942,
    name: "双城区",
    level: "district",
    parent: 230100
  },
  {
    adcode: 230123,
    lng: 129.565594,
    lat: 46.315105,
    name: "依兰县",
    level: "district",
    parent: 230100
  },
  {
    adcode: 230124,
    lng: 128.836131,
    lat: 45.839536,
    name: "方正县",
    level: "district",
    parent: 230100
  },
  {
    adcode: 230125,
    lng: 127.48594,
    lat: 45.759369,
    name: "宾县",
    level: "district",
    parent: 230100
  },
  {
    adcode: 230126,
    lng: 127.403602,
    lat: 46.081889,
    name: "巴彦县",
    level: "district",
    parent: 230100
  },
  {
    adcode: 230127,
    lng: 128.042675,
    lat: 45.949826,
    name: "木兰县",
    level: "district",
    parent: 230100
  },
  {
    adcode: 230128,
    lng: 128.747786,
    lat: 45.977618,
    name: "通河县",
    level: "district",
    parent: 230100
  },
  {
    adcode: 230129,
    lng: 128.331886,
    lat: 45.455648,
    name: "延寿县",
    level: "district",
    parent: 230100
  },
  {
    adcode: 230183,
    lng: 127.968539,
    lat: 45.214953,
    name: "尚志市",
    level: "district",
    parent: 230100
  },
  {
    adcode: 230184,
    lng: 127.15759,
    lat: 44.919418,
    name: "五常市",
    level: "district",
    parent: 230100
  },
  {
    adcode: 230200,
    lng: 123.95792,
    lat: 47.342081,
    name: "齐齐哈尔市",
    level: "city",
    parent: 230000
  },
  {
    adcode: 230202,
    lng: 123.957338,
    lat: 47.341736,
    name: "龙沙区",
    level: "district",
    parent: 230200
  },
  {
    adcode: 230203,
    lng: 123.955888,
    lat: 47.354494,
    name: "建华区",
    level: "district",
    parent: 230200
  },
  {
    adcode: 230204,
    lng: 123.973555,
    lat: 47.339499,
    name: "铁锋区",
    level: "district",
    parent: 230200
  },
  {
    adcode: 230205,
    lng: 123.813181,
    lat: 47.156867,
    name: "昂昂溪区",
    level: "district",
    parent: 230200
  },
  {
    adcode: 230206,
    lng: 123.638873,
    lat: 47.20697,
    name: "富拉尔基区",
    level: "district",
    parent: 230200
  },
  {
    adcode: 230207,
    lng: 122.887972,
    lat: 47.51401,
    name: "碾子山区",
    level: "district",
    parent: 230200
  },
  {
    adcode: 230208,
    lng: 123.754599,
    lat: 47.311113,
    name: "梅里斯达斡尔族区",
    level: "district",
    parent: 230200
  },
  {
    adcode: 230221,
    lng: 123.187225,
    lat: 47.336388,
    name: "龙江县",
    level: "district",
    parent: 230200
  },
  {
    adcode: 230223,
    lng: 125.307561,
    lat: 47.890098,
    name: "依安县",
    level: "district",
    parent: 230200
  },
  {
    adcode: 230224,
    lng: 123.41953,
    lat: 46.39233,
    name: "泰来县",
    level: "district",
    parent: 230200
  },
  {
    adcode: 230225,
    lng: 123.506034,
    lat: 47.917838,
    name: "甘南县",
    level: "district",
    parent: 230200
  },
  {
    adcode: 230227,
    lng: 124.469106,
    lat: 47.797172,
    name: "富裕县",
    level: "district",
    parent: 230200
  },
  {
    adcode: 230229,
    lng: 125.874355,
    lat: 48.034342,
    name: "克山县",
    level: "district",
    parent: 230200
  },
  {
    adcode: 230230,
    lng: 126.249094,
    lat: 48.03732,
    name: "克东县",
    level: "district",
    parent: 230200
  },
  {
    adcode: 230231,
    lng: 126.091911,
    lat: 47.607363,
    name: "拜泉县",
    level: "district",
    parent: 230200
  },
  {
    adcode: 230281,
    lng: 124.882172,
    lat: 48.481133,
    name: "讷河市",
    level: "district",
    parent: 230200
  },
  {
    adcode: 230300,
    lng: 130.975966,
    lat: 45.300046,
    name: "鸡西市",
    level: "city",
    parent: 230000
  },
  {
    adcode: 230302,
    lng: 130.974374,
    lat: 45.30034,
    name: "鸡冠区",
    level: "district",
    parent: 230300
  },
  {
    adcode: 230303,
    lng: 130.910636,
    lat: 45.213242,
    name: "恒山区",
    level: "district",
    parent: 230300
  },
  {
    adcode: 230304,
    lng: 130.846823,
    lat: 45.348812,
    name: "滴道区",
    level: "district",
    parent: 230300
  },
  {
    adcode: 230305,
    lng: 130.697781,
    lat: 45.092195,
    name: "梨树区",
    level: "district",
    parent: 230300
  },
  {
    adcode: 230306,
    lng: 131.010501,
    lat: 45.338248,
    name: "城子河区",
    level: "district",
    parent: 230300
  },
  {
    adcode: 230307,
    lng: 130.481126,
    lat: 45.209607,
    name: "麻山区",
    level: "district",
    parent: 230300
  },
  {
    adcode: 230321,
    lng: 131.148907,
    lat: 45.250892,
    name: "鸡东县",
    level: "district",
    parent: 230300
  },
  {
    adcode: 230381,
    lng: 132.973881,
    lat: 45.767985,
    name: "虎林市",
    level: "district",
    parent: 230300
  },
  {
    adcode: 230382,
    lng: 131.874137,
    lat: 45.54725,
    name: "密山市",
    level: "district",
    parent: 230300
  },
  {
    adcode: 230400,
    lng: 130.277487,
    lat: 47.332085,
    name: "鹤岗市",
    level: "city",
    parent: 230000
  },
  {
    adcode: 230402,
    lng: 130.292478,
    lat: 47.345372,
    name: "向阳区",
    level: "district",
    parent: 230400
  },
  {
    adcode: 230403,
    lng: 130.276652,
    lat: 47.331678,
    name: "工农区",
    level: "district",
    parent: 230400
  },
  {
    adcode: 230404,
    lng: 130.275533,
    lat: 47.31324,
    name: "南山区",
    level: "district",
    parent: 230400
  },
  {
    adcode: 230405,
    lng: 130.236169,
    lat: 47.252911,
    name: "兴安区",
    level: "district",
    parent: 230400
  },
  {
    adcode: 230406,
    lng: 130.31714,
    lat: 47.337385,
    name: "东山区",
    level: "district",
    parent: 230400
  },
  {
    adcode: 230407,
    lng: 130.30534,
    lat: 47.35997,
    name: "兴山区",
    level: "district",
    parent: 230400
  },
  {
    adcode: 230421,
    lng: 130.829087,
    lat: 47.577577,
    name: "萝北县",
    level: "district",
    parent: 230400
  },
  {
    adcode: 230422,
    lng: 131.860526,
    lat: 47.289892,
    name: "绥滨县",
    level: "district",
    parent: 230400
  },
  {
    adcode: 230500,
    lng: 131.157304,
    lat: 46.643442,
    name: "双鸭山市",
    level: "city",
    parent: 230000
  },
  {
    adcode: 230502,
    lng: 131.15896,
    lat: 46.642961,
    name: "尖山区",
    level: "district",
    parent: 230500
  },
  {
    adcode: 230503,
    lng: 131.163675,
    lat: 46.591076,
    name: "岭东区",
    level: "district",
    parent: 230500
  },
  {
    adcode: 230505,
    lng: 131.333181,
    lat: 46.594347,
    name: "四方台区",
    level: "district",
    parent: 230500
  },
  {
    adcode: 230506,
    lng: 131.404294,
    lat: 46.573366,
    name: "宝山区",
    level: "district",
    parent: 230500
  },
  {
    adcode: 230521,
    lng: 131.13933,
    lat: 46.72898,
    name: "集贤县",
    level: "district",
    parent: 230500
  },
  {
    adcode: 230522,
    lng: 131.810622,
    lat: 46.775159,
    name: "友谊县",
    level: "district",
    parent: 230500
  },
  {
    adcode: 230523,
    lng: 132.206415,
    lat: 46.328781,
    name: "宝清县",
    level: "district",
    parent: 230500
  },
  {
    adcode: 230524,
    lng: 134.021162,
    lat: 46.801288,
    name: "饶河县",
    level: "district",
    parent: 230500
  },
  {
    adcode: 230600,
    lng: 125.11272,
    lat: 46.590734,
    name: "大庆市",
    level: "city",
    parent: 230000
  },
  {
    adcode: 230602,
    lng: 125.114643,
    lat: 46.596356,
    name: "萨尔图区",
    level: "district",
    parent: 230600
  },
  {
    adcode: 230603,
    lng: 125.145794,
    lat: 46.573948,
    name: "龙凤区",
    level: "district",
    parent: 230600
  },
  {
    adcode: 230604,
    lng: 124.868341,
    lat: 46.653254,
    name: "让胡路区",
    level: "district",
    parent: 230600
  },
  {
    adcode: 230605,
    lng: 124.889528,
    lat: 46.403049,
    name: "红岗区",
    level: "district",
    parent: 230600
  },
  {
    adcode: 230606,
    lng: 124.818509,
    lat: 46.034304,
    name: "大同区",
    level: "district",
    parent: 230600
  },
  {
    adcode: 230621,
    lng: 125.273254,
    lat: 45.708685,
    name: "肇州县",
    level: "district",
    parent: 230600
  },
  {
    adcode: 230622,
    lng: 125.081974,
    lat: 45.518832,
    name: "肇源县",
    level: "district",
    parent: 230600
  },
  {
    adcode: 230623,
    lng: 124.877742,
    lat: 47.186411,
    name: "林甸县",
    level: "district",
    parent: 230600
  },
  {
    adcode: 230624,
    lng: 124.446259,
    lat: 46.865973,
    name: "杜尔伯特蒙古族自治县",
    level: "district",
    parent: 230600
  },
  {
    adcode: 230700,
    lng: 128.899396,
    lat: 47.724775,
    name: "伊春市",
    level: "city",
    parent: 230000
  },
  {
    adcode: 230717,
    lng: 128.907303,
    lat: 47.728171,
    name: "伊美区",
    level: "district",
    parent: 230700
  },
  {
    adcode: 230718,
    lng: 128.669859,
    lat: 47.726728,
    name: "乌翠区",
    level: "district",
    parent: 230700
  },
  {
    adcode: 230719,
    lng: 128.84075,
    lat: 47.853778,
    name: "友好区",
    level: "district",
    parent: 230700
  },
  {
    adcode: 230722,
    lng: 130.397684,
    lat: 48.891378,
    name: "嘉荫县",
    level: "district",
    parent: 230700
  },
  {
    adcode: 230723,
    lng: 129.571108,
    lat: 48.454651,
    name: "汤旺县",
    level: "district",
    parent: 230700
  },
  {
    adcode: 230724,
    lng: 129.5336,
    lat: 48.290455,
    name: "丰林县",
    level: "district",
    parent: 230700
  },
  {
    adcode: 230725,
    lng: 129.020793,
    lat: 47.028397,
    name: "大箐山县",
    level: "district",
    parent: 230700
  },
  {
    adcode: 230726,
    lng: 129.28246,
    lat: 47.137314,
    name: "南岔县",
    level: "district",
    parent: 230700
  },
  {
    adcode: 230751,
    lng: 129.429117,
    lat: 47.413074,
    name: "金林区",
    level: "district",
    parent: 230700
  },
  {
    adcode: 230781,
    lng: 128.030561,
    lat: 46.985772,
    name: "铁力市",
    level: "district",
    parent: 230700
  },
  {
    adcode: 230800,
    lng: 130.361634,
    lat: 46.809606,
    name: "佳木斯市",
    level: "city",
    parent: 230000
  },
  {
    adcode: 230803,
    lng: 130.361786,
    lat: 46.809645,
    name: "向阳区",
    level: "district",
    parent: 230800
  },
  {
    adcode: 230804,
    lng: 130.377684,
    lat: 46.812345,
    name: "前进区",
    level: "district",
    parent: 230800
  },
  {
    adcode: 230805,
    lng: 130.403297,
    lat: 46.822476,
    name: "东风区",
    level: "district",
    parent: 230800
  },
  {
    adcode: 230811,
    lng: 130.351588,
    lat: 46.80712,
    name: "郊区",
    level: "district",
    parent: 230800
  },
  {
    adcode: 230822,
    lng: 130.570112,
    lat: 46.240118,
    name: "桦南县",
    level: "district",
    parent: 230800
  },
  {
    adcode: 230826,
    lng: 130.723713,
    lat: 47.023039,
    name: "桦川县",
    level: "district",
    parent: 230800
  },
  {
    adcode: 230828,
    lng: 129.904463,
    lat: 46.730048,
    name: "汤原县",
    level: "district",
    parent: 230800
  },
  {
    adcode: 230881,
    lng: 132.510119,
    lat: 47.651131,
    name: "同江市",
    level: "district",
    parent: 230800
  },
  {
    adcode: 230882,
    lng: 132.037951,
    lat: 47.250747,
    name: "富锦市",
    level: "district",
    parent: 230800
  },
  {
    adcode: 230883,
    lng: 134.294501,
    lat: 48.364707,
    name: "抚远市",
    level: "district",
    parent: 230800
  },
  {
    adcode: 230900,
    lng: 131.015584,
    lat: 45.771266,
    name: "七台河市",
    level: "city",
    parent: 230000
  },
  {
    adcode: 230902,
    lng: 130.889482,
    lat: 45.794258,
    name: "新兴区",
    level: "district",
    parent: 230900
  },
  {
    adcode: 230903,
    lng: 131.015848,
    lat: 45.771217,
    name: "桃山区",
    level: "district",
    parent: 230900
  },
  {
    adcode: 230904,
    lng: 131.071561,
    lat: 45.776587,
    name: "茄子河区",
    level: "district",
    parent: 230900
  },
  {
    adcode: 230921,
    lng: 130.575025,
    lat: 45.751573,
    name: "勃利县",
    level: "district",
    parent: 230900
  },
  {
    adcode: 231000,
    lng: 129.618602,
    lat: 44.582962,
    name: "牡丹江市",
    level: "city",
    parent: 230000
  },
  {
    adcode: 231002,
    lng: 129.623292,
    lat: 44.582399,
    name: "东安区",
    level: "district",
    parent: 231000
  },
  {
    adcode: 231003,
    lng: 129.634645,
    lat: 44.596328,
    name: "阳明区",
    level: "district",
    parent: 231000
  },
  {
    adcode: 231004,
    lng: 129.601232,
    lat: 44.595443,
    name: "爱民区",
    level: "district",
    parent: 231000
  },
  {
    adcode: 231005,
    lng: 129.61311,
    lat: 44.581032,
    name: "西安区",
    level: "district",
    parent: 231000
  },
  {
    adcode: 231025,
    lng: 130.268402,
    lat: 45.286645,
    name: "林口县",
    level: "district",
    parent: 231000
  },
  {
    adcode: 231081,
    lng: 131.164856,
    lat: 44.396864,
    name: "绥芬河市",
    level: "district",
    parent: 231000
  },
  {
    adcode: 231083,
    lng: 129.387902,
    lat: 44.574149,
    name: "海林市",
    level: "district",
    parent: 231000
  },
  {
    adcode: 231084,
    lng: 129.470019,
    lat: 44.346836,
    name: "宁安市",
    level: "district",
    parent: 231000
  },
  {
    adcode: 231085,
    lng: 130.527085,
    lat: 44.91967,
    name: "穆棱市",
    level: "district",
    parent: 231000
  },
  {
    adcode: 231086,
    lng: 131.125296,
    lat: 44.063578,
    name: "东宁市",
    level: "district",
    parent: 231000
  },
  {
    adcode: 231100,
    lng: 127.499023,
    lat: 50.249585,
    name: "黑河市",
    level: "city",
    parent: 230000
  },
  {
    adcode: 231102,
    lng: 127.497639,
    lat: 50.249027,
    name: "爱辉区",
    level: "district",
    parent: 231100
  },
  {
    adcode: 231123,
    lng: 128.476152,
    lat: 49.582974,
    name: "逊克县",
    level: "district",
    parent: 231100
  },
  {
    adcode: 231124,
    lng: 127.327315,
    lat: 49.423941,
    name: "孙吴县",
    level: "district",
    parent: 231100
  },
  {
    adcode: 231181,
    lng: 126.508737,
    lat: 48.245437,
    name: "北安市",
    level: "district",
    parent: 231100
  },
  {
    adcode: 231182,
    lng: 126.197694,
    lat: 48.512688,
    name: "五大连池市",
    level: "district",
    parent: 231100
  },
  {
    adcode: 231183,
    lng: 125.229904,
    lat: 49.177461,
    name: "嫩江市",
    level: "district",
    parent: 231100
  },
  {
    adcode: 231200,
    lng: 126.99293,
    lat: 46.637393,
    name: "绥化市",
    level: "city",
    parent: 230000
  },
  {
    adcode: 231202,
    lng: 126.990665,
    lat: 46.634912,
    name: "北林区",
    level: "district",
    parent: 231200
  },
  {
    adcode: 231221,
    lng: 126.484191,
    lat: 46.83352,
    name: "望奎县",
    level: "district",
    parent: 231200
  },
  {
    adcode: 231222,
    lng: 126.289315,
    lat: 46.259037,
    name: "兰西县",
    level: "district",
    parent: 231200
  },
  {
    adcode: 231223,
    lng: 126.112268,
    lat: 46.686596,
    name: "青冈县",
    level: "district",
    parent: 231200
  },
  {
    adcode: 231224,
    lng: 127.510024,
    lat: 46.879203,
    name: "庆安县",
    level: "district",
    parent: 231200
  },
  {
    adcode: 231225,
    lng: 125.907544,
    lat: 47.183527,
    name: "明水县",
    level: "district",
    parent: 231200
  },
  {
    adcode: 231226,
    lng: 127.111121,
    lat: 47.247195,
    name: "绥棱县",
    level: "district",
    parent: 231200
  },
  {
    adcode: 231281,
    lng: 125.329926,
    lat: 46.410614,
    name: "安达市",
    level: "district",
    parent: 231200
  },
  {
    adcode: 231282,
    lng: 125.991402,
    lat: 46.069471,
    name: "肇东市",
    level: "district",
    parent: 231200
  },
  {
    adcode: 231283,
    lng: 126.969383,
    lat: 47.460428,
    name: "海伦市",
    level: "district",
    parent: 231200
  },
  {
    adcode: 232700,
    lng: 124.711526,
    lat: 52.335262,
    name: "大兴安岭地区",
    level: "city",
    parent: 230000
  },
  {
    adcode: 232701,
    lng: 122.536256,
    lat: 52.972074,
    name: "漠河市",
    level: "district",
    parent: 232700
  },
  {
    adcode: 232718,
    lng: 124.126716,
    lat: 50.424654,
    name: "加格达奇区",
    level: "district",
    parent: 232700
  },
  {
    adcode: 232721,
    lng: 126.662105,
    lat: 51.726998,
    name: "呼玛县",
    level: "district",
    parent: 232700
  },
  {
    adcode: 232722,
    lng: 124.710516,
    lat: 52.335229,
    name: "塔河县",
    level: "district",
    parent: 232700
  },
  {
    adcode: 310000,
    lng: 121.472644,
    lat: 31.231706,
    name: "上海市",
    level: "province",
    parent: 100000
  },
  {
    adcode: 310101,
    lng: 121.490317,
    lat: 31.222771,
    name: "黄浦区",
    level: "district",
    parent: 310000
  },
  {
    adcode: 310104,
    lng: 121.43752,
    lat: 31.179973,
    name: "徐汇区",
    level: "district",
    parent: 310000
  },
  {
    adcode: 310105,
    lng: 121.4222,
    lat: 31.218123,
    name: "长宁区",
    level: "district",
    parent: 310000
  },
  {
    adcode: 310106,
    lng: 121.448224,
    lat: 31.229003,
    name: "静安区",
    level: "district",
    parent: 310000
  },
  {
    adcode: 310107,
    lng: 121.392499,
    lat: 31.241701,
    name: "普陀区",
    level: "district",
    parent: 310000
  },
  {
    adcode: 310109,
    lng: 121.491832,
    lat: 31.26097,
    name: "虹口区",
    level: "district",
    parent: 310000
  },
  {
    adcode: 310110,
    lng: 121.522797,
    lat: 31.270755,
    name: "杨浦区",
    level: "district",
    parent: 310000
  },
  {
    adcode: 310112,
    lng: 121.375972,
    lat: 31.111658,
    name: "闵行区",
    level: "district",
    parent: 310000
  },
  {
    adcode: 310113,
    lng: 121.489934,
    lat: 31.398896,
    name: "宝山区",
    level: "district",
    parent: 310000
  },
  {
    adcode: 310114,
    lng: 121.250333,
    lat: 31.383524,
    name: "嘉定区",
    level: "district",
    parent: 310000
  },
  {
    adcode: 310115,
    lng: 121.567706,
    lat: 31.245944,
    name: "浦东新区",
    level: "district",
    parent: 310000
  },
  {
    adcode: 310116,
    lng: 121.330736,
    lat: 30.724697,
    name: "金山区",
    level: "district",
    parent: 310000
  },
  {
    adcode: 310117,
    lng: 121.223543,
    lat: 31.03047,
    name: "松江区",
    level: "district",
    parent: 310000
  },
  {
    adcode: 310118,
    lng: 121.113021,
    lat: 31.151209,
    name: "青浦区",
    level: "district",
    parent: 310000
  },
  {
    adcode: 310120,
    lng: 121.458472,
    lat: 30.912345,
    name: "奉贤区",
    level: "district",
    parent: 310000
  },
  {
    adcode: 310151,
    lng: 121.397516,
    lat: 31.626946,
    name: "崇明区",
    level: "district",
    parent: 310000
  },
  {
    adcode: 320000,
    lng: 118.767413,
    lat: 32.041544,
    name: "江苏省",
    level: "province",
    parent: 100000
  },
  {
    adcode: 320100,
    lng: 118.767413,
    lat: 32.041544,
    name: "南京市",
    level: "city",
    parent: 320000
  },
  {
    adcode: 320102,
    lng: 118.792199,
    lat: 32.050678,
    name: "玄武区",
    level: "district",
    parent: 320100
  },
  {
    adcode: 320104,
    lng: 118.786088,
    lat: 32.033818,
    name: "秦淮区",
    level: "district",
    parent: 320100
  },
  {
    adcode: 320105,
    lng: 118.732688,
    lat: 32.004538,
    name: "建邺区",
    level: "district",
    parent: 320100
  },
  {
    adcode: 320106,
    lng: 118.769739,
    lat: 32.066966,
    name: "鼓楼区",
    level: "district",
    parent: 320100
  },
  {
    adcode: 320111,
    lng: 118.625307,
    lat: 32.05839,
    name: "浦口区",
    level: "district",
    parent: 320100
  },
  {
    adcode: 320113,
    lng: 118.808702,
    lat: 32.102147,
    name: "栖霞区",
    level: "district",
    parent: 320100
  },
  {
    adcode: 320114,
    lng: 118.77207,
    lat: 31.995946,
    name: "雨花台区",
    level: "district",
    parent: 320100
  },
  {
    adcode: 320115,
    lng: 118.850621,
    lat: 31.953418,
    name: "江宁区",
    level: "district",
    parent: 320100
  },
  {
    adcode: 320116,
    lng: 118.85065,
    lat: 32.340655,
    name: "六合区",
    level: "district",
    parent: 320100
  },
  {
    adcode: 320117,
    lng: 119.028732,
    lat: 31.653061,
    name: "溧水区",
    level: "district",
    parent: 320100
  },
  {
    adcode: 320118,
    lng: 118.87589,
    lat: 31.327132,
    name: "高淳区",
    level: "district",
    parent: 320100
  },
  {
    adcode: 320200,
    lng: 120.301663,
    lat: 31.574729,
    name: "无锡市",
    level: "city",
    parent: 320000
  },
  {
    adcode: 320205,
    lng: 120.357298,
    lat: 31.585559,
    name: "锡山区",
    level: "district",
    parent: 320200
  },
  {
    adcode: 320206,
    lng: 120.303543,
    lat: 31.681019,
    name: "惠山区",
    level: "district",
    parent: 320200
  },
  {
    adcode: 320211,
    lng: 120.266053,
    lat: 31.550228,
    name: "滨湖区",
    level: "district",
    parent: 320200
  },
  {
    adcode: 320213,
    lng: 120.296595,
    lat: 31.575706,
    name: "梁溪区",
    level: "district",
    parent: 320200
  },
  {
    adcode: 320214,
    lng: 120.352782,
    lat: 31.550966,
    name: "新吴区",
    level: "district",
    parent: 320200
  },
  {
    adcode: 320281,
    lng: 120.275891,
    lat: 31.910984,
    name: "江阴市",
    level: "district",
    parent: 320200
  },
  {
    adcode: 320282,
    lng: 119.820538,
    lat: 31.364384,
    name: "宜兴市",
    level: "district",
    parent: 320200
  },
  {
    adcode: 320300,
    lng: 117.184811,
    lat: 34.261792,
    name: "徐州市",
    level: "city",
    parent: 320000
  },
  {
    adcode: 320302,
    lng: 117.192941,
    lat: 34.269397,
    name: "鼓楼区",
    level: "district",
    parent: 320300
  },
  {
    adcode: 320303,
    lng: 117.194589,
    lat: 34.254805,
    name: "云龙区",
    level: "district",
    parent: 320300
  },
  {
    adcode: 320305,
    lng: 117.450212,
    lat: 34.441642,
    name: "贾汪区",
    level: "district",
    parent: 320300
  },
  {
    adcode: 320311,
    lng: 117.182225,
    lat: 34.262249,
    name: "泉山区",
    level: "district",
    parent: 320300
  },
  {
    adcode: 320312,
    lng: 117.183894,
    lat: 34.19288,
    name: "铜山区",
    level: "district",
    parent: 320300
  },
  {
    adcode: 320321,
    lng: 116.592888,
    lat: 34.696946,
    name: "丰县",
    level: "district",
    parent: 320300
  },
  {
    adcode: 320322,
    lng: 116.937182,
    lat: 34.729044,
    name: "沛县",
    level: "district",
    parent: 320300
  },
  {
    adcode: 320324,
    lng: 117.95066,
    lat: 33.899222,
    name: "睢宁县",
    level: "district",
    parent: 320300
  },
  {
    adcode: 320381,
    lng: 118.345828,
    lat: 34.368779,
    name: "新沂市",
    level: "district",
    parent: 320300
  },
  {
    adcode: 320382,
    lng: 117.963923,
    lat: 34.314708,
    name: "邳州市",
    level: "district",
    parent: 320300
  },
  {
    adcode: 320400,
    lng: 119.946973,
    lat: 31.772752,
    name: "常州市",
    level: "city",
    parent: 320000
  },
  {
    adcode: 320402,
    lng: 119.963783,
    lat: 31.779632,
    name: "天宁区",
    level: "district",
    parent: 320400
  },
  {
    adcode: 320404,
    lng: 119.948388,
    lat: 31.78096,
    name: "钟楼区",
    level: "district",
    parent: 320400
  },
  {
    adcode: 320411,
    lng: 119.974654,
    lat: 31.824664,
    name: "新北区",
    level: "district",
    parent: 320400
  },
  {
    adcode: 320412,
    lng: 119.958773,
    lat: 31.718566,
    name: "武进区",
    level: "district",
    parent: 320400
  },
  {
    adcode: 320413,
    lng: 119.573395,
    lat: 31.744399,
    name: "金坛区",
    level: "district",
    parent: 320400
  },
  {
    adcode: 320481,
    lng: 119.487816,
    lat: 31.427081,
    name: "溧阳市",
    level: "district",
    parent: 320400
  },
  {
    adcode: 320500,
    lng: 120.619585,
    lat: 31.299379,
    name: "苏州市",
    level: "city",
    parent: 320000
  },
  {
    adcode: 320505,
    lng: 120.566833,
    lat: 31.294845,
    name: "虎丘区",
    level: "district",
    parent: 320500
  },
  {
    adcode: 320506,
    lng: 120.624621,
    lat: 31.270839,
    name: "吴中区",
    level: "district",
    parent: 320500
  },
  {
    adcode: 320507,
    lng: 120.618956,
    lat: 31.396684,
    name: "相城区",
    level: "district",
    parent: 320500
  },
  {
    adcode: 320508,
    lng: 120.622249,
    lat: 31.311414,
    name: "姑苏区",
    level: "district",
    parent: 320500
  },
  {
    adcode: 320509,
    lng: 120.641601,
    lat: 31.160404,
    name: "吴江区",
    level: "district",
    parent: 320500
  },
  {
    adcode: 320581,
    lng: 120.74852,
    lat: 31.658156,
    name: "常熟市",
    level: "district",
    parent: 320500
  },
  {
    adcode: 320582,
    lng: 120.543441,
    lat: 31.865553,
    name: "张家港市",
    level: "district",
    parent: 320500
  },
  {
    adcode: 320583,
    lng: 120.958137,
    lat: 31.381925,
    name: "昆山市",
    level: "district",
    parent: 320500
  },
  {
    adcode: 320585,
    lng: 121.112275,
    lat: 31.452568,
    name: "太仓市",
    level: "district",
    parent: 320500
  },
  {
    adcode: 320600,
    lng: 120.864608,
    lat: 32.016212,
    name: "南通市",
    level: "city",
    parent: 320000
  },
  {
    adcode: 320602,
    lng: 120.86635,
    lat: 32.015278,
    name: "崇川区",
    level: "district",
    parent: 320600
  },
  {
    adcode: 320612,
    lng: 121.073171,
    lat: 32.084287,
    name: "通州区",
    level: "district",
    parent: 320600
  },
  {
    adcode: 320623,
    lng: 121.186088,
    lat: 32.311832,
    name: "如东县",
    level: "district",
    parent: 320600
  },
  {
    adcode: 320681,
    lng: 121.659724,
    lat: 31.810158,
    name: "启东市",
    level: "district",
    parent: 320600
  },
  {
    adcode: 320682,
    lng: 120.566324,
    lat: 32.391591,
    name: "如皋市",
    level: "district",
    parent: 320600
  },
  {
    adcode: 320684,
    lng: 121.176609,
    lat: 31.893528,
    name: "海门区",
    level: "district",
    parent: 320600
  },
  {
    adcode: 320685,
    lng: 120.465995,
    lat: 32.540288,
    name: "海安市",
    level: "district",
    parent: 320600
  },
  {
    adcode: 320700,
    lng: 119.178821,
    lat: 34.600018,
    name: "连云港市",
    level: "city",
    parent: 320000
  },
  {
    adcode: 320703,
    lng: 119.366487,
    lat: 34.739529,
    name: "连云区",
    level: "district",
    parent: 320700
  },
  {
    adcode: 320706,
    lng: 119.179793,
    lat: 34.601584,
    name: "海州区",
    level: "district",
    parent: 320700
  },
  {
    adcode: 320707,
    lng: 119.128774,
    lat: 34.839154,
    name: "赣榆区",
    level: "district",
    parent: 320700
  },
  {
    adcode: 320722,
    lng: 118.766489,
    lat: 34.522859,
    name: "东海县",
    level: "district",
    parent: 320700
  },
  {
    adcode: 320723,
    lng: 119.255741,
    lat: 34.298436,
    name: "灌云县",
    level: "district",
    parent: 320700
  },
  {
    adcode: 320724,
    lng: 119.352331,
    lat: 34.092553,
    name: "灌南县",
    level: "district",
    parent: 320700
  },
  {
    adcode: 320800,
    lng: 119.021265,
    lat: 33.597506,
    name: "淮安市",
    level: "city",
    parent: 320000
  },
  {
    adcode: 320803,
    lng: 119.14634,
    lat: 33.507499,
    name: "淮安区",
    level: "district",
    parent: 320800
  },
  {
    adcode: 320804,
    lng: 119.020817,
    lat: 33.622452,
    name: "淮阴区",
    level: "district",
    parent: 320800
  },
  {
    adcode: 320812,
    lng: 119.019454,
    lat: 33.603234,
    name: "清江浦区",
    level: "district",
    parent: 320800
  },
  {
    adcode: 320813,
    lng: 118.867875,
    lat: 33.294975,
    name: "洪泽区",
    level: "district",
    parent: 320800
  },
  {
    adcode: 320826,
    lng: 119.266078,
    lat: 33.771308,
    name: "涟水县",
    level: "district",
    parent: 320800
  },
  {
    adcode: 320830,
    lng: 118.493823,
    lat: 33.00439,
    name: "盱眙县",
    level: "district",
    parent: 320800
  },
  {
    adcode: 320831,
    lng: 119.016936,
    lat: 33.018162,
    name: "金湖县",
    level: "district",
    parent: 320800
  },
  {
    adcode: 320900,
    lng: 120.139998,
    lat: 33.377631,
    name: "盐城市",
    level: "city",
    parent: 320000
  },
  {
    adcode: 320902,
    lng: 120.136078,
    lat: 33.383912,
    name: "亭湖区",
    level: "district",
    parent: 320900
  },
  {
    adcode: 320903,
    lng: 120.139753,
    lat: 33.341288,
    name: "盐都区",
    level: "district",
    parent: 320900
  },
  {
    adcode: 320904,
    lng: 120.470324,
    lat: 33.199531,
    name: "大丰区",
    level: "district",
    parent: 320900
  },
  {
    adcode: 320921,
    lng: 119.579573,
    lat: 34.19996,
    name: "响水县",
    level: "district",
    parent: 320900
  },
  {
    adcode: 320922,
    lng: 119.828434,
    lat: 33.989888,
    name: "滨海县",
    level: "district",
    parent: 320900
  },
  {
    adcode: 320923,
    lng: 119.805338,
    lat: 33.78573,
    name: "阜宁县",
    level: "district",
    parent: 320900
  },
  {
    adcode: 320924,
    lng: 120.257444,
    lat: 33.773779,
    name: "射阳县",
    level: "district",
    parent: 320900
  },
  {
    adcode: 320925,
    lng: 119.793105,
    lat: 33.472621,
    name: "建湖县",
    level: "district",
    parent: 320900
  },
  {
    adcode: 320981,
    lng: 120.314101,
    lat: 32.853174,
    name: "东台市",
    level: "district",
    parent: 320900
  },
  {
    adcode: 321000,
    lng: 119.421003,
    lat: 32.393159,
    name: "扬州市",
    level: "city",
    parent: 320000
  },
  {
    adcode: 321002,
    lng: 119.442267,
    lat: 32.392154,
    name: "广陵区",
    level: "district",
    parent: 321000
  },
  {
    adcode: 321003,
    lng: 119.397777,
    lat: 32.377899,
    name: "邗江区",
    level: "district",
    parent: 321000
  },
  {
    adcode: 321012,
    lng: 119.567481,
    lat: 32.426564,
    name: "江都区",
    level: "district",
    parent: 321000
  },
  {
    adcode: 321023,
    lng: 119.321284,
    lat: 33.23694,
    name: "宝应县",
    level: "district",
    parent: 321000
  },
  {
    adcode: 321081,
    lng: 119.182443,
    lat: 32.271965,
    name: "仪征市",
    level: "district",
    parent: 321000
  },
  {
    adcode: 321084,
    lng: 119.443842,
    lat: 32.785164,
    name: "高邮市",
    level: "district",
    parent: 321000
  },
  {
    adcode: 321100,
    lng: 119.452753,
    lat: 32.204402,
    name: "镇江市",
    level: "city",
    parent: 320000
  },
  {
    adcode: 321102,
    lng: 119.454571,
    lat: 32.206191,
    name: "京口区",
    level: "district",
    parent: 321100
  },
  {
    adcode: 321111,
    lng: 119.414877,
    lat: 32.213501,
    name: "润州区",
    level: "district",
    parent: 321100
  },
  {
    adcode: 321112,
    lng: 119.433883,
    lat: 32.128972,
    name: "丹徒区",
    level: "district",
    parent: 321100
  },
  {
    adcode: 321181,
    lng: 119.581911,
    lat: 31.991459,
    name: "丹阳市",
    level: "district",
    parent: 321100
  },
  {
    adcode: 321182,
    lng: 119.828054,
    lat: 32.237266,
    name: "扬中市",
    level: "district",
    parent: 321100
  },
  {
    adcode: 321183,
    lng: 119.167135,
    lat: 31.947355,
    name: "句容市",
    level: "district",
    parent: 321100
  },
  {
    adcode: 321200,
    lng: 119.915176,
    lat: 32.484882,
    name: "泰州市",
    level: "city",
    parent: 320000
  },
  {
    adcode: 321202,
    lng: 119.920187,
    lat: 32.488406,
    name: "海陵区",
    level: "district",
    parent: 321200
  },
  {
    adcode: 321203,
    lng: 119.88166,
    lat: 32.315701,
    name: "高港区",
    level: "district",
    parent: 321200
  },
  {
    adcode: 321204,
    lng: 120.148208,
    lat: 32.508483,
    name: "姜堰区",
    level: "district",
    parent: 321200
  },
  {
    adcode: 321281,
    lng: 119.840162,
    lat: 32.938065,
    name: "兴化市",
    level: "district",
    parent: 321200
  },
  {
    adcode: 321282,
    lng: 120.26825,
    lat: 32.018168,
    name: "靖江市",
    level: "district",
    parent: 321200
  },
  {
    adcode: 321283,
    lng: 120.020228,
    lat: 32.168784,
    name: "泰兴市",
    level: "district",
    parent: 321200
  },
  {
    adcode: 321300,
    lng: 118.275162,
    lat: 33.963008,
    name: "宿迁市",
    level: "city",
    parent: 320000
  },
  {
    adcode: 321302,
    lng: 118.278984,
    lat: 33.937726,
    name: "宿城区",
    level: "district",
    parent: 321300
  },
  {
    adcode: 321311,
    lng: 118.330012,
    lat: 33.941071,
    name: "宿豫区",
    level: "district",
    parent: 321300
  },
  {
    adcode: 321322,
    lng: 118.775889,
    lat: 34.129097,
    name: "沭阳县",
    level: "district",
    parent: 321300
  },
  {
    adcode: 321323,
    lng: 118.681284,
    lat: 33.711433,
    name: "泗阳县",
    level: "district",
    parent: 321300
  },
  {
    adcode: 321324,
    lng: 118.211824,
    lat: 33.456538,
    name: "泗洪县",
    level: "district",
    parent: 321300
  },
  {
    adcode: 330000,
    lng: 120.153576,
    lat: 30.287459,
    name: "浙江省",
    level: "province",
    parent: 100000
  },
  {
    adcode: 330100,
    lng: 120.153576,
    lat: 30.287459,
    name: "杭州市",
    level: "city",
    parent: 330000
  },
  {
    adcode: 330102,
    lng: 120.171465,
    lat: 30.250236,
    name: "上城区",
    level: "district",
    parent: 330100
  },
  {
    adcode: 330105,
    lng: 120.150053,
    lat: 30.314697,
    name: "拱墅区",
    level: "district",
    parent: 330100
  },
  {
    adcode: 330106,
    lng: 120.147376,
    lat: 30.272934,
    name: "西湖区",
    level: "district",
    parent: 330100
  },
  {
    adcode: 330108,
    lng: 120.21062,
    lat: 30.206615,
    name: "滨江区",
    level: "district",
    parent: 330100
  },
  {
    adcode: 330109,
    lng: 120.27069,
    lat: 30.162932,
    name: "萧山区",
    level: "district",
    parent: 330100
  },
  {
    adcode: 330110,
    lng: 119.978959,
    lat: 30.27365,
    name: "余杭区",
    level: "district",
    parent: 330100
  },
  {
    adcode: 330111,
    lng: 119.949869,
    lat: 30.049871,
    name: "富阳区",
    level: "district",
    parent: 330100
  },
  {
    adcode: 330112,
    lng: 119.715101,
    lat: 30.231153,
    name: "临安区",
    level: "district",
    parent: 330100
  },
  {
    adcode: 330114,
    lng: 120.493972,
    lat: 30.322904,
    name: "钱塘区",
    level: "district",
    parent: 330100
  },
  {
    adcode: 330113,
    lng: 120.299376,
    lat: 30.419025,
    name: "临平区",
    level: "district",
    parent: 330100
  },
  {
    adcode: 330122,
    lng: 119.685045,
    lat: 29.797437,
    name: "桐庐县",
    level: "district",
    parent: 330100
  },
  {
    adcode: 330127,
    lng: 119.044276,
    lat: 29.604177,
    name: "淳安县",
    level: "district",
    parent: 330100
  },
  {
    adcode: 330182,
    lng: 119.279089,
    lat: 29.472284,
    name: "建德市",
    level: "district",
    parent: 330100
  },
  {
    adcode: 330200,
    lng: 121.549792,
    lat: 29.868388,
    name: "宁波市",
    level: "city",
    parent: 330000
  },
  {
    adcode: 330203,
    lng: 121.539698,
    lat: 29.874452,
    name: "海曙区",
    level: "district",
    parent: 330200
  },
  {
    adcode: 330205,
    lng: 121.559282,
    lat: 29.888361,
    name: "江北区",
    level: "district",
    parent: 330200
  },
  {
    adcode: 330206,
    lng: 121.831303,
    lat: 29.90944,
    name: "北仑区",
    level: "district",
    parent: 330200
  },
  {
    adcode: 330211,
    lng: 121.713162,
    lat: 29.952107,
    name: "镇海区",
    level: "district",
    parent: 330200
  },
  {
    adcode: 330212,
    lng: 121.558436,
    lat: 29.831662,
    name: "鄞州区",
    level: "district",
    parent: 330200
  },
  {
    adcode: 330213,
    lng: 121.41089,
    lat: 29.662348,
    name: "奉化区",
    level: "district",
    parent: 330200
  },
  {
    adcode: 330225,
    lng: 121.877091,
    lat: 29.470206,
    name: "象山县",
    level: "district",
    parent: 330200
  },
  {
    adcode: 330226,
    lng: 121.432606,
    lat: 29.299836,
    name: "宁海县",
    level: "district",
    parent: 330200
  },
  {
    adcode: 330281,
    lng: 121.156294,
    lat: 30.045404,
    name: "余姚市",
    level: "district",
    parent: 330200
  },
  {
    adcode: 330282,
    lng: 121.248052,
    lat: 30.177142,
    name: "慈溪市",
    level: "district",
    parent: 330200
  },
  {
    adcode: 330300,
    lng: 120.672111,
    lat: 28.000575,
    name: "温州市",
    level: "city",
    parent: 330000
  },
  {
    adcode: 330302,
    lng: 120.674231,
    lat: 28.003352,
    name: "鹿城区",
    level: "district",
    parent: 330300
  },
  {
    adcode: 330303,
    lng: 120.763469,
    lat: 27.970254,
    name: "龙湾区",
    level: "district",
    parent: 330300
  },
  {
    adcode: 330304,
    lng: 120.637145,
    lat: 28.006444,
    name: "瓯海区",
    level: "district",
    parent: 330300
  },
  {
    adcode: 330305,
    lng: 121.156181,
    lat: 27.836057,
    name: "洞头区",
    level: "district",
    parent: 330300
  },
  {
    adcode: 330324,
    lng: 120.690968,
    lat: 28.153886,
    name: "永嘉县",
    level: "district",
    parent: 330300
  },
  {
    adcode: 330326,
    lng: 120.564387,
    lat: 27.6693,
    name: "平阳县",
    level: "district",
    parent: 330300
  },
  {
    adcode: 330327,
    lng: 120.406256,
    lat: 27.507743,
    name: "苍南县",
    level: "district",
    parent: 330300
  },
  {
    adcode: 330328,
    lng: 120.09245,
    lat: 27.789133,
    name: "文成县",
    level: "district",
    parent: 330300
  },
  {
    adcode: 330329,
    lng: 119.71624,
    lat: 27.557309,
    name: "泰顺县",
    level: "district",
    parent: 330300
  },
  {
    adcode: 330381,
    lng: 120.646171,
    lat: 27.779321,
    name: "瑞安市",
    level: "district",
    parent: 330300
  },
  {
    adcode: 330382,
    lng: 120.967147,
    lat: 28.116083,
    name: "乐清市",
    level: "district",
    parent: 330300
  },
  {
    adcode: 330383,
    lng: 120.553039,
    lat: 27.578156,
    name: "龙港市",
    level: "district",
    parent: 330300
  },
  {
    adcode: 330400,
    lng: 120.750865,
    lat: 30.762653,
    name: "嘉兴市",
    level: "city",
    parent: 330000
  },
  {
    adcode: 330402,
    lng: 120.749953,
    lat: 30.764652,
    name: "南湖区",
    level: "district",
    parent: 330400
  },
  {
    adcode: 330411,
    lng: 120.720431,
    lat: 30.763323,
    name: "秀洲区",
    level: "district",
    parent: 330400
  },
  {
    adcode: 330421,
    lng: 120.921871,
    lat: 30.841352,
    name: "嘉善县",
    level: "district",
    parent: 330400
  },
  {
    adcode: 330424,
    lng: 120.942017,
    lat: 30.522223,
    name: "海盐县",
    level: "district",
    parent: 330400
  },
  {
    adcode: 330481,
    lng: 120.688821,
    lat: 30.525544,
    name: "海宁市",
    level: "district",
    parent: 330400
  },
  {
    adcode: 330482,
    lng: 121.014666,
    lat: 30.698921,
    name: "平湖市",
    level: "district",
    parent: 330400
  },
  {
    adcode: 330483,
    lng: 120.551085,
    lat: 30.629065,
    name: "桐乡市",
    level: "district",
    parent: 330400
  },
  {
    adcode: 330500,
    lng: 120.102398,
    lat: 30.867198,
    name: "湖州市",
    level: "city",
    parent: 330000
  },
  {
    adcode: 330502,
    lng: 120.101416,
    lat: 30.867252,
    name: "吴兴区",
    level: "district",
    parent: 330500
  },
  {
    adcode: 330503,
    lng: 120.417195,
    lat: 30.872742,
    name: "南浔区",
    level: "district",
    parent: 330500
  },
  {
    adcode: 330521,
    lng: 119.967662,
    lat: 30.534927,
    name: "德清县",
    level: "district",
    parent: 330500
  },
  {
    adcode: 330522,
    lng: 119.910122,
    lat: 31.00475,
    name: "长兴县",
    level: "district",
    parent: 330500
  },
  {
    adcode: 330523,
    lng: 119.687891,
    lat: 30.631974,
    name: "安吉县",
    level: "district",
    parent: 330500
  },
  {
    adcode: 330600,
    lng: 120.582112,
    lat: 29.997117,
    name: "绍兴市",
    level: "city",
    parent: 330000
  },
  {
    adcode: 330602,
    lng: 120.585315,
    lat: 29.996993,
    name: "越城区",
    level: "district",
    parent: 330600
  },
  {
    adcode: 330603,
    lng: 120.476075,
    lat: 30.078038,
    name: "柯桥区",
    level: "district",
    parent: 330600
  },
  {
    adcode: 330604,
    lng: 120.874185,
    lat: 30.016769,
    name: "上虞区",
    level: "district",
    parent: 330600
  },
  {
    adcode: 330624,
    lng: 120.905665,
    lat: 29.501205,
    name: "新昌县",
    level: "district",
    parent: 330600
  },
  {
    adcode: 330681,
    lng: 120.244326,
    lat: 29.713662,
    name: "诸暨市",
    level: "district",
    parent: 330600
  },
  {
    adcode: 330683,
    lng: 120.82888,
    lat: 29.586606,
    name: "嵊州市",
    level: "district",
    parent: 330600
  },
  {
    adcode: 330700,
    lng: 119.649506,
    lat: 29.089524,
    name: "金华市",
    level: "city",
    parent: 330000
  },
  {
    adcode: 330702,
    lng: 119.652579,
    lat: 29.082607,
    name: "婺城区",
    level: "district",
    parent: 330700
  },
  {
    adcode: 330703,
    lng: 119.681264,
    lat: 29.095835,
    name: "金东区",
    level: "district",
    parent: 330700
  },
  {
    adcode: 330723,
    lng: 119.819159,
    lat: 28.896563,
    name: "武义县",
    level: "district",
    parent: 330700
  },
  {
    adcode: 330726,
    lng: 119.893363,
    lat: 29.451254,
    name: "浦江县",
    level: "district",
    parent: 330700
  },
  {
    adcode: 330727,
    lng: 120.44513,
    lat: 29.052627,
    name: "磐安县",
    level: "district",
    parent: 330700
  },
  {
    adcode: 330781,
    lng: 119.460521,
    lat: 29.210065,
    name: "兰溪市",
    level: "district",
    parent: 330700
  },
  {
    adcode: 330782,
    lng: 120.074911,
    lat: 29.306863,
    name: "义乌市",
    level: "district",
    parent: 330700
  },
  {
    adcode: 330783,
    lng: 120.23334,
    lat: 29.262546,
    name: "东阳市",
    level: "district",
    parent: 330700
  },
  {
    adcode: 330784,
    lng: 120.036328,
    lat: 28.895293,
    name: "永康市",
    level: "district",
    parent: 330700
  },
  {
    adcode: 330800,
    lng: 118.87263,
    lat: 28.941708,
    name: "衢州市",
    level: "city",
    parent: 330000
  },
  {
    adcode: 330802,
    lng: 118.873041,
    lat: 28.944539,
    name: "柯城区",
    level: "district",
    parent: 330800
  },
  {
    adcode: 330803,
    lng: 118.957683,
    lat: 28.973195,
    name: "衢江区",
    level: "district",
    parent: 330800
  },
  {
    adcode: 330822,
    lng: 118.521654,
    lat: 28.900039,
    name: "常山县",
    level: "district",
    parent: 330800
  },
  {
    adcode: 330824,
    lng: 118.414435,
    lat: 29.136503,
    name: "开化县",
    level: "district",
    parent: 330800
  },
  {
    adcode: 330825,
    lng: 119.172525,
    lat: 29.031364,
    name: "龙游县",
    level: "district",
    parent: 330800
  },
  {
    adcode: 330881,
    lng: 118.627879,
    lat: 28.734674,
    name: "江山市",
    level: "district",
    parent: 330800
  },
  {
    adcode: 330900,
    lng: 122.106863,
    lat: 30.016028,
    name: "舟山市",
    level: "city",
    parent: 330000
  },
  {
    adcode: 330902,
    lng: 122.108496,
    lat: 30.016423,
    name: "定海区",
    level: "district",
    parent: 330900
  },
  {
    adcode: 330903,
    lng: 122.301953,
    lat: 29.945614,
    name: "普陀区",
    level: "district",
    parent: 330900
  },
  {
    adcode: 330921,
    lng: 122.201132,
    lat: 30.242865,
    name: "岱山县",
    level: "district",
    parent: 330900
  },
  {
    adcode: 330922,
    lng: 122.457809,
    lat: 30.727166,
    name: "嵊泗县",
    level: "district",
    parent: 330900
  },
  {
    adcode: 331000,
    lng: 121.428599,
    lat: 28.661378,
    name: "台州市",
    level: "city",
    parent: 330000
  },
  {
    adcode: 331002,
    lng: 121.431049,
    lat: 28.67615,
    name: "椒江区",
    level: "district",
    parent: 331000
  },
  {
    adcode: 331003,
    lng: 121.262138,
    lat: 28.64488,
    name: "黄岩区",
    level: "district",
    parent: 331000
  },
  {
    adcode: 331004,
    lng: 121.37292,
    lat: 28.581799,
    name: "路桥区",
    level: "district",
    parent: 331000
  },
  {
    adcode: 331022,
    lng: 121.376429,
    lat: 29.118955,
    name: "三门县",
    level: "district",
    parent: 331000
  },
  {
    adcode: 331023,
    lng: 121.031227,
    lat: 29.141126,
    name: "天台县",
    level: "district",
    parent: 331000
  },
  {
    adcode: 331024,
    lng: 120.735074,
    lat: 28.849213,
    name: "仙居县",
    level: "district",
    parent: 331000
  },
  {
    adcode: 331081,
    lng: 121.373611,
    lat: 28.368781,
    name: "温岭市",
    level: "district",
    parent: 331000
  },
  {
    adcode: 331082,
    lng: 121.131229,
    lat: 28.845441,
    name: "临海市",
    level: "district",
    parent: 331000
  },
  {
    adcode: 331083,
    lng: 121.232337,
    lat: 28.12842,
    name: "玉环市",
    level: "district",
    parent: 331000
  },
  {
    adcode: 331100,
    lng: 119.921786,
    lat: 28.451993,
    name: "丽水市",
    level: "city",
    parent: 330000
  },
  {
    adcode: 331102,
    lng: 119.922293,
    lat: 28.451103,
    name: "莲都区",
    level: "district",
    parent: 331100
  },
  {
    adcode: 331121,
    lng: 120.291939,
    lat: 28.135247,
    name: "青田县",
    level: "district",
    parent: 331100
  },
  {
    adcode: 331122,
    lng: 120.078965,
    lat: 28.654208,
    name: "缙云县",
    level: "district",
    parent: 331100
  },
  {
    adcode: 331123,
    lng: 119.27589,
    lat: 28.5924,
    name: "遂昌县",
    level: "district",
    parent: 331100
  },
  {
    adcode: 331124,
    lng: 119.485292,
    lat: 28.449937,
    name: "松阳县",
    level: "district",
    parent: 331100
  },
  {
    adcode: 331125,
    lng: 119.569458,
    lat: 28.111077,
    name: "云和县",
    level: "district",
    parent: 331100
  },
  {
    adcode: 331126,
    lng: 119.067233,
    lat: 27.618231,
    name: "庆元县",
    level: "district",
    parent: 331100
  },
  {
    adcode: 331127,
    lng: 119.634669,
    lat: 27.977247,
    name: "景宁畲族自治县",
    level: "district",
    parent: 331100
  },
  {
    adcode: 331181,
    lng: 119.132319,
    lat: 28.069177,
    name: "龙泉市",
    level: "district",
    parent: 331100
  },
  {
    adcode: 340000,
    lng: 117.283042,
    lat: 31.86119,
    name: "安徽省",
    level: "province",
    parent: 100000
  },
  {
    adcode: 340100,
    lng: 117.283042,
    lat: 31.86119,
    name: "合肥市",
    level: "city",
    parent: 340000
  },
  {
    adcode: 340102,
    lng: 117.315358,
    lat: 31.86961,
    name: "瑶海区",
    level: "district",
    parent: 340100
  },
  {
    adcode: 340103,
    lng: 117.283776,
    lat: 31.869011,
    name: "庐阳区",
    level: "district",
    parent: 340100
  },
  {
    adcode: 340104,
    lng: 117.262072,
    lat: 31.855868,
    name: "蜀山区",
    level: "district",
    parent: 340100
  },
  {
    adcode: 340111,
    lng: 117.285751,
    lat: 31.82956,
    name: "包河区",
    level: "district",
    parent: 340100
  },
  {
    adcode: 340121,
    lng: 117.164699,
    lat: 32.478548,
    name: "长丰县",
    level: "district",
    parent: 340100
  },
  {
    adcode: 340122,
    lng: 117.463222,
    lat: 31.883992,
    name: "肥东县",
    level: "district",
    parent: 340100
  },
  {
    adcode: 340123,
    lng: 117.166118,
    lat: 31.719646,
    name: "肥西县",
    level: "district",
    parent: 340100
  },
  {
    adcode: 340124,
    lng: 117.289844,
    lat: 31.251488,
    name: "庐江县",
    level: "district",
    parent: 340100
  },
  {
    adcode: 340181,
    lng: 117.874155,
    lat: 31.600518,
    name: "巢湖市",
    level: "district",
    parent: 340100
  },
  {
    adcode: 340200,
    lng: 118.376451,
    lat: 31.326319,
    name: "芜湖市",
    level: "city",
    parent: 340000
  },
  {
    adcode: 340202,
    lng: 118.376343,
    lat: 31.32559,
    name: "镜湖区",
    level: "district",
    parent: 340200
  },
  {
    adcode: 340207,
    lng: 118.400174,
    lat: 31.362716,
    name: "鸠江区",
    level: "district",
    parent: 340200
  },
  {
    adcode: 340209,
    lng: 118.377476,
    lat: 31.313394,
    name: "弋江区",
    level: "district",
    parent: 340200
  },
  {
    adcode: 340210,
    lng: 118.572301,
    lat: 31.145262,
    name: "湾沚区",
    level: "district",
    parent: 340200
  },
  {
    adcode: 340211,
    lng: 118.201349,
    lat: 31.080896,
    name: "繁昌区",
    level: "district",
    parent: 340200
  },
  {
    adcode: 340223,
    lng: 118.337104,
    lat: 30.919638,
    name: "南陵县",
    level: "district",
    parent: 340200
  },
  {
    adcode: 340281,
    lng: 117.911432,
    lat: 31.303075,
    name: "无为市",
    level: "district",
    parent: 340200
  },
  {
    adcode: 340300,
    lng: 117.363228,
    lat: 32.939667,
    name: "蚌埠市",
    level: "city",
    parent: 340000
  },
  {
    adcode: 340302,
    lng: 117.382312,
    lat: 32.950452,
    name: "龙子湖区",
    level: "district",
    parent: 340300
  },
  {
    adcode: 340303,
    lng: 117.355789,
    lat: 32.938066,
    name: "蚌山区",
    level: "district",
    parent: 340300
  },
  {
    adcode: 340304,
    lng: 117.35259,
    lat: 32.931933,
    name: "禹会区",
    level: "district",
    parent: 340300
  },
  {
    adcode: 340311,
    lng: 117.34709,
    lat: 32.963147,
    name: "淮上区",
    level: "district",
    parent: 340300
  },
  {
    adcode: 340321,
    lng: 117.200171,
    lat: 32.956934,
    name: "怀远县",
    level: "district",
    parent: 340300
  },
  {
    adcode: 340322,
    lng: 117.888809,
    lat: 33.146202,
    name: "五河县",
    level: "district",
    parent: 340300
  },
  {
    adcode: 340323,
    lng: 117.315962,
    lat: 33.318679,
    name: "固镇县",
    level: "district",
    parent: 340300
  },
  {
    adcode: 340400,
    lng: 117.018329,
    lat: 32.647574,
    name: "淮南市",
    level: "city",
    parent: 340000
  },
  {
    adcode: 340402,
    lng: 117.052927,
    lat: 32.632066,
    name: "大通区",
    level: "district",
    parent: 340400
  },
  {
    adcode: 340403,
    lng: 117.018318,
    lat: 32.644342,
    name: "田家庵区",
    level: "district",
    parent: 340400
  },
  {
    adcode: 340404,
    lng: 116.865354,
    lat: 32.598289,
    name: "谢家集区",
    level: "district",
    parent: 340400
  },
  {
    adcode: 340405,
    lng: 116.841111,
    lat: 32.628229,
    name: "八公山区",
    level: "district",
    parent: 340400
  },
  {
    adcode: 340406,
    lng: 116.816879,
    lat: 32.782117,
    name: "潘集区",
    level: "district",
    parent: 340400
  },
  {
    adcode: 340421,
    lng: 116.722769,
    lat: 32.705382,
    name: "凤台县",
    level: "district",
    parent: 340400
  },
  {
    adcode: 340422,
    lng: 116.785349,
    lat: 32.577304,
    name: "寿县",
    level: "district",
    parent: 340400
  },
  {
    adcode: 340500,
    lng: 118.507906,
    lat: 31.689362,
    name: "马鞍山市",
    level: "city",
    parent: 340000
  },
  {
    adcode: 340503,
    lng: 118.511308,
    lat: 31.69902,
    name: "花山区",
    level: "district",
    parent: 340500
  },
  {
    adcode: 340504,
    lng: 118.493104,
    lat: 31.685912,
    name: "雨山区",
    level: "district",
    parent: 340500
  },
  {
    adcode: 340506,
    lng: 118.843742,
    lat: 31.562321,
    name: "博望区",
    level: "district",
    parent: 340500
  },
  {
    adcode: 340521,
    lng: 118.489873,
    lat: 31.556167,
    name: "当涂县",
    level: "district",
    parent: 340500
  },
  {
    adcode: 340522,
    lng: 118.105545,
    lat: 31.727758,
    name: "含山县",
    level: "district",
    parent: 340500
  },
  {
    adcode: 340523,
    lng: 118.362998,
    lat: 31.716634,
    name: "和县",
    level: "district",
    parent: 340500
  },
  {
    adcode: 340600,
    lng: 116.794664,
    lat: 33.971707,
    name: "淮北市",
    level: "city",
    parent: 340000
  },
  {
    adcode: 340602,
    lng: 116.833925,
    lat: 33.991218,
    name: "杜集区",
    level: "district",
    parent: 340600
  },
  {
    adcode: 340603,
    lng: 116.790775,
    lat: 33.970916,
    name: "相山区",
    level: "district",
    parent: 340600
  },
  {
    adcode: 340604,
    lng: 116.809465,
    lat: 33.889529,
    name: "烈山区",
    level: "district",
    parent: 340600
  },
  {
    adcode: 340621,
    lng: 116.767435,
    lat: 33.916407,
    name: "濉溪县",
    level: "district",
    parent: 340600
  },
  {
    adcode: 340700,
    lng: 117.816576,
    lat: 30.929935,
    name: "铜陵市",
    level: "city",
    parent: 340000
  },
  {
    adcode: 340705,
    lng: 117.816167,
    lat: 30.927613,
    name: "铜官区",
    level: "district",
    parent: 340700
  },
  {
    adcode: 340706,
    lng: 117.792288,
    lat: 30.952338,
    name: "义安区",
    level: "district",
    parent: 340700
  },
  {
    adcode: 340711,
    lng: 117.80707,
    lat: 30.908927,
    name: "郊区",
    level: "district",
    parent: 340700
  },
  {
    adcode: 340722,
    lng: 117.222027,
    lat: 30.700615,
    name: "枞阳县",
    level: "district",
    parent: 340700
  },
  {
    adcode: 340800,
    lng: 117.043551,
    lat: 30.50883,
    name: "安庆市",
    level: "city",
    parent: 340000
  },
  {
    adcode: 340802,
    lng: 117.044965,
    lat: 30.506375,
    name: "迎江区",
    level: "district",
    parent: 340800
  },
  {
    adcode: 340803,
    lng: 117.034512,
    lat: 30.505632,
    name: "大观区",
    level: "district",
    parent: 340800
  },
  {
    adcode: 340811,
    lng: 117.070003,
    lat: 30.541323,
    name: "宜秀区",
    level: "district",
    parent: 340800
  },
  {
    adcode: 340822,
    lng: 116.828664,
    lat: 30.734994,
    name: "怀宁县",
    level: "district",
    parent: 340800
  },
  {
    adcode: 340825,
    lng: 116.305225,
    lat: 30.451869,
    name: "太湖县",
    level: "district",
    parent: 340800
  },
  {
    adcode: 340826,
    lng: 116.120204,
    lat: 30.158327,
    name: "宿松县",
    level: "district",
    parent: 340800
  },
  {
    adcode: 340827,
    lng: 116.690927,
    lat: 30.12491,
    name: "望江县",
    level: "district",
    parent: 340800
  },
  {
    adcode: 340828,
    lng: 116.360482,
    lat: 30.848502,
    name: "岳西县",
    level: "district",
    parent: 340800
  },
  {
    adcode: 340881,
    lng: 116.959656,
    lat: 31.050576,
    name: "桐城市",
    level: "district",
    parent: 340800
  },
  {
    adcode: 340882,
    lng: 116.573665,
    lat: 30.638222,
    name: "潜山市",
    level: "district",
    parent: 340800
  },
  {
    adcode: 341000,
    lng: 118.317325,
    lat: 29.709239,
    name: "黄山市",
    level: "city",
    parent: 340000
  },
  {
    adcode: 341002,
    lng: 118.317354,
    lat: 29.709186,
    name: "屯溪区",
    level: "district",
    parent: 341000
  },
  {
    adcode: 341003,
    lng: 118.136639,
    lat: 30.294517,
    name: "黄山区",
    level: "district",
    parent: 341000
  },
  {
    adcode: 341004,
    lng: 118.339743,
    lat: 29.825201,
    name: "徽州区",
    level: "district",
    parent: 341000
  },
  {
    adcode: 341021,
    lng: 118.428025,
    lat: 29.867748,
    name: "歙县",
    level: "district",
    parent: 341000
  },
  {
    adcode: 341022,
    lng: 118.188531,
    lat: 29.788878,
    name: "休宁县",
    level: "district",
    parent: 341000
  },
  {
    adcode: 341023,
    lng: 117.942911,
    lat: 29.923812,
    name: "黟县",
    level: "district",
    parent: 341000
  },
  {
    adcode: 341024,
    lng: 117.717237,
    lat: 29.853472,
    name: "祁门县",
    level: "district",
    parent: 341000
  },
  {
    adcode: 341100,
    lng: 118.316264,
    lat: 32.303627,
    name: "滁州市",
    level: "city",
    parent: 340000
  },
  {
    adcode: 341102,
    lng: 118.316475,
    lat: 32.303797,
    name: "琅琊区",
    level: "district",
    parent: 341100
  },
  {
    adcode: 341103,
    lng: 118.296955,
    lat: 32.329841,
    name: "南谯区",
    level: "district",
    parent: 341100
  },
  {
    adcode: 341122,
    lng: 118.433293,
    lat: 32.450231,
    name: "来安县",
    level: "district",
    parent: 341100
  },
  {
    adcode: 341124,
    lng: 118.268576,
    lat: 32.09385,
    name: "全椒县",
    level: "district",
    parent: 341100
  },
  {
    adcode: 341125,
    lng: 117.683713,
    lat: 32.527105,
    name: "定远县",
    level: "district",
    parent: 341100
  },
  {
    adcode: 341126,
    lng: 117.562461,
    lat: 32.867146,
    name: "凤阳县",
    level: "district",
    parent: 341100
  },
  {
    adcode: 341181,
    lng: 119.011212,
    lat: 32.6815,
    name: "天长市",
    level: "district",
    parent: 341100
  },
  {
    adcode: 341182,
    lng: 117.998048,
    lat: 32.781206,
    name: "明光市",
    level: "district",
    parent: 341100
  },
  {
    adcode: 341200,
    lng: 115.819729,
    lat: 32.896969,
    name: "阜阳市",
    level: "city",
    parent: 340000
  },
  {
    adcode: 341202,
    lng: 115.813914,
    lat: 32.891238,
    name: "颍州区",
    level: "district",
    parent: 341200
  },
  {
    adcode: 341203,
    lng: 115.858747,
    lat: 32.908861,
    name: "颍东区",
    level: "district",
    parent: 341200
  },
  {
    adcode: 341204,
    lng: 115.804525,
    lat: 32.924797,
    name: "颍泉区",
    level: "district",
    parent: 341200
  },
  {
    adcode: 341221,
    lng: 115.261688,
    lat: 33.062698,
    name: "临泉县",
    level: "district",
    parent: 341200
  },
  {
    adcode: 341222,
    lng: 115.627243,
    lat: 33.16229,
    name: "太和县",
    level: "district",
    parent: 341200
  },
  {
    adcode: 341225,
    lng: 115.590534,
    lat: 32.638102,
    name: "阜南县",
    level: "district",
    parent: 341200
  },
  {
    adcode: 341226,
    lng: 116.259122,
    lat: 32.637065,
    name: "颍上县",
    level: "district",
    parent: 341200
  },
  {
    adcode: 341282,
    lng: 115.362117,
    lat: 33.26153,
    name: "界首市",
    level: "district",
    parent: 341200
  },
  {
    adcode: 341300,
    lng: 116.984084,
    lat: 33.633891,
    name: "宿州市",
    level: "city",
    parent: 340000
  },
  {
    adcode: 341302,
    lng: 116.983309,
    lat: 33.633853,
    name: "埇桥区",
    level: "district",
    parent: 341300
  },
  {
    adcode: 341321,
    lng: 116.351113,
    lat: 34.426247,
    name: "砀山县",
    level: "district",
    parent: 341300
  },
  {
    adcode: 341322,
    lng: 116.945399,
    lat: 34.183266,
    name: "萧县",
    level: "district",
    parent: 341300
  },
  {
    adcode: 341323,
    lng: 117.551493,
    lat: 33.540629,
    name: "灵璧县",
    level: "district",
    parent: 341300
  },
  {
    adcode: 341324,
    lng: 117.885443,
    lat: 33.47758,
    name: "泗县",
    level: "district",
    parent: 341300
  },
  {
    adcode: 341500,
    lng: 116.507676,
    lat: 31.752889,
    name: "六安市",
    level: "city",
    parent: 340000
  },
  {
    adcode: 341502,
    lng: 116.503288,
    lat: 31.754491,
    name: "金安区",
    level: "district",
    parent: 341500
  },
  {
    adcode: 341503,
    lng: 116.494543,
    lat: 31.750692,
    name: "裕安区",
    level: "district",
    parent: 341500
  },
  {
    adcode: 341504,
    lng: 115.913594,
    lat: 31.84768,
    name: "叶集区",
    level: "district",
    parent: 341500
  },
  {
    adcode: 341522,
    lng: 116.278875,
    lat: 32.341305,
    name: "霍邱县",
    level: "district",
    parent: 341500
  },
  {
    adcode: 341523,
    lng: 116.944088,
    lat: 31.462848,
    name: "舒城县",
    level: "district",
    parent: 341500
  },
  {
    adcode: 341524,
    lng: 115.878514,
    lat: 31.681624,
    name: "金寨县",
    level: "district",
    parent: 341500
  },
  {
    adcode: 341525,
    lng: 116.333078,
    lat: 31.402456,
    name: "霍山县",
    level: "district",
    parent: 341500
  },
  {
    adcode: 341600,
    lng: 115.782939,
    lat: 33.869338,
    name: "亳州市",
    level: "city",
    parent: 340000
  },
  {
    adcode: 341602,
    lng: 115.781214,
    lat: 33.869284,
    name: "谯城区",
    level: "district",
    parent: 341600
  },
  {
    adcode: 341621,
    lng: 116.211551,
    lat: 33.502831,
    name: "涡阳县",
    level: "district",
    parent: 341600
  },
  {
    adcode: 341622,
    lng: 116.560337,
    lat: 33.260814,
    name: "蒙城县",
    level: "district",
    parent: 341600
  },
  {
    adcode: 341623,
    lng: 116.207782,
    lat: 33.143503,
    name: "利辛县",
    level: "district",
    parent: 341600
  },
  {
    adcode: 341700,
    lng: 117.489157,
    lat: 30.656037,
    name: "池州市",
    level: "city",
    parent: 340000
  },
  {
    adcode: 341702,
    lng: 117.488342,
    lat: 30.657378,
    name: "贵池区",
    level: "district",
    parent: 341700
  },
  {
    adcode: 341721,
    lng: 117.021476,
    lat: 30.096568,
    name: "东至县",
    level: "district",
    parent: 341700
  },
  {
    adcode: 341722,
    lng: 117.482907,
    lat: 30.210324,
    name: "石台县",
    level: "district",
    parent: 341700
  },
  {
    adcode: 341723,
    lng: 117.857395,
    lat: 30.63818,
    name: "青阳县",
    level: "district",
    parent: 341700
  },
  {
    adcode: 341800,
    lng: 118.757995,
    lat: 30.945667,
    name: "宣城市",
    level: "city",
    parent: 340000
  },
  {
    adcode: 341802,
    lng: 118.758412,
    lat: 30.946003,
    name: "宣州区",
    level: "district",
    parent: 341800
  },
  {
    adcode: 341821,
    lng: 119.185024,
    lat: 31.127834,
    name: "郎溪县",
    level: "district",
    parent: 341800
  },
  {
    adcode: 341823,
    lng: 118.412397,
    lat: 30.685975,
    name: "泾县",
    level: "district",
    parent: 341800
  },
  {
    adcode: 341824,
    lng: 118.594705,
    lat: 30.065267,
    name: "绩溪县",
    level: "district",
    parent: 341800
  },
  {
    adcode: 341825,
    lng: 118.543081,
    lat: 30.288057,
    name: "旌德县",
    level: "district",
    parent: 341800
  },
  {
    adcode: 341881,
    lng: 118.983407,
    lat: 30.626529,
    name: "宁国市",
    level: "district",
    parent: 341800
  },
  {
    adcode: 341882,
    lng: 119.417521,
    lat: 30.893116,
    name: "广德市",
    level: "district",
    parent: 341800
  },
  {
    adcode: 350000,
    lng: 119.306239,
    lat: 26.075302,
    name: "福建省",
    level: "province",
    parent: 100000
  },
  {
    adcode: 350100,
    lng: 119.306239,
    lat: 26.075302,
    name: "福州市",
    level: "city",
    parent: 350000
  },
  {
    adcode: 350102,
    lng: 119.29929,
    lat: 26.082284,
    name: "鼓楼区",
    level: "district",
    parent: 350100
  },
  {
    adcode: 350103,
    lng: 119.310156,
    lat: 26.058616,
    name: "台江区",
    level: "district",
    parent: 350100
  },
  {
    adcode: 350104,
    lng: 119.320988,
    lat: 26.038912,
    name: "仓山区",
    level: "district",
    parent: 350100
  },
  {
    adcode: 350105,
    lng: 119.458725,
    lat: 25.991975,
    name: "马尾区",
    level: "district",
    parent: 350100
  },
  {
    adcode: 350111,
    lng: 119.328597,
    lat: 26.078837,
    name: "晋安区",
    level: "district",
    parent: 350100
  },
  {
    adcode: 350112,
    lng: 119.510849,
    lat: 25.960583,
    name: "长乐区",
    level: "district",
    parent: 350100
  },
  {
    adcode: 350121,
    lng: 119.145117,
    lat: 26.148567,
    name: "闽侯县",
    level: "district",
    parent: 350100
  },
  {
    adcode: 350122,
    lng: 119.538365,
    lat: 26.202109,
    name: "连江县",
    level: "district",
    parent: 350100
  },
  {
    adcode: 350123,
    lng: 119.552645,
    lat: 26.487234,
    name: "罗源县",
    level: "district",
    parent: 350100
  },
  {
    adcode: 350124,
    lng: 118.868416,
    lat: 26.223793,
    name: "闽清县",
    level: "district",
    parent: 350100
  },
  {
    adcode: 350125,
    lng: 118.939089,
    lat: 25.864825,
    name: "永泰县",
    level: "district",
    parent: 350100
  },
  {
    adcode: 350128,
    lng: 119.791197,
    lat: 25.503672,
    name: "平潭县",
    level: "district",
    parent: 350100
  },
  {
    adcode: 350181,
    lng: 119.376992,
    lat: 25.720402,
    name: "福清市",
    level: "district",
    parent: 350100
  },
  {
    adcode: 350200,
    lng: 118.11022,
    lat: 24.490474,
    name: "厦门市",
    level: "city",
    parent: 350000
  },
  {
    adcode: 350203,
    lng: 118.087828,
    lat: 24.462059,
    name: "思明区",
    level: "district",
    parent: 350200
  },
  {
    adcode: 350205,
    lng: 118.036364,
    lat: 24.492512,
    name: "海沧区",
    level: "district",
    parent: 350200
  },
  {
    adcode: 350206,
    lng: 118.10943,
    lat: 24.512764,
    name: "湖里区",
    level: "district",
    parent: 350200
  },
  {
    adcode: 350211,
    lng: 118.100869,
    lat: 24.572874,
    name: "集美区",
    level: "district",
    parent: 350200
  },
  {
    adcode: 350212,
    lng: 118.150455,
    lat: 24.729333,
    name: "同安区",
    level: "district",
    parent: 350200
  },
  {
    adcode: 350213,
    lng: 118.242811,
    lat: 24.637479,
    name: "翔安区",
    level: "district",
    parent: 350200
  },
  {
    adcode: 350300,
    lng: 119.007558,
    lat: 25.431011,
    name: "莆田市",
    level: "city",
    parent: 350000
  },
  {
    adcode: 350302,
    lng: 119.001028,
    lat: 25.433737,
    name: "城厢区",
    level: "district",
    parent: 350300
  },
  {
    adcode: 350303,
    lng: 119.119102,
    lat: 25.459273,
    name: "涵江区",
    level: "district",
    parent: 350300
  },
  {
    adcode: 350304,
    lng: 119.020047,
    lat: 25.430047,
    name: "荔城区",
    level: "district",
    parent: 350300
  },
  {
    adcode: 350305,
    lng: 119.092607,
    lat: 25.316141,
    name: "秀屿区",
    level: "district",
    parent: 350300
  },
  {
    adcode: 350322,
    lng: 118.694331,
    lat: 25.356529,
    name: "仙游县",
    level: "district",
    parent: 350300
  },
  {
    adcode: 350400,
    lng: 117.635001,
    lat: 26.265444,
    name: "三明市",
    level: "city",
    parent: 350000
  },
  {
    adcode: 350403,
    lng: 117.607418,
    lat: 26.234191,
    name: "三元区",
    level: "district",
    parent: 350400
  },
  {
    adcode: 350421,
    lng: 117.201845,
    lat: 26.357375,
    name: "明溪县",
    level: "district",
    parent: 350400
  },
  {
    adcode: 350423,
    lng: 116.815821,
    lat: 26.17761,
    name: "清流县",
    level: "district",
    parent: 350400
  },
  {
    adcode: 350424,
    lng: 116.659725,
    lat: 26.259932,
    name: "宁化县",
    level: "district",
    parent: 350400
  },
  {
    adcode: 350425,
    lng: 117.849355,
    lat: 25.690803,
    name: "大田县",
    level: "district",
    parent: 350400
  },
  {
    adcode: 350426,
    lng: 118.188577,
    lat: 26.169261,
    name: "尤溪县",
    level: "district",
    parent: 350400
  },
  {
    adcode: 350427,
    lng: 117.789095,
    lat: 26.397361,
    name: "沙县区",
    level: "district",
    parent: 350400
  },
  {
    adcode: 350428,
    lng: 117.473558,
    lat: 26.728667,
    name: "将乐县",
    level: "district",
    parent: 350400
  },
  {
    adcode: 350429,
    lng: 117.177522,
    lat: 26.897995,
    name: "泰宁县",
    level: "district",
    parent: 350400
  },
  {
    adcode: 350430,
    lng: 116.845832,
    lat: 26.831398,
    name: "建宁县",
    level: "district",
    parent: 350400
  },
  {
    adcode: 350481,
    lng: 117.364447,
    lat: 25.974075,
    name: "永安市",
    level: "district",
    parent: 350400
  },
  {
    adcode: 350500,
    lng: 118.589421,
    lat: 24.908853,
    name: "泉州市",
    level: "city",
    parent: 350000
  },
  {
    adcode: 350502,
    lng: 118.588929,
    lat: 24.907645,
    name: "鲤城区",
    level: "district",
    parent: 350500
  },
  {
    adcode: 350503,
    lng: 118.605147,
    lat: 24.896041,
    name: "丰泽区",
    level: "district",
    parent: 350500
  },
  {
    adcode: 350504,
    lng: 118.670312,
    lat: 24.941153,
    name: "洛江区",
    level: "district",
    parent: 350500
  },
  {
    adcode: 350505,
    lng: 118.912285,
    lat: 25.126859,
    name: "泉港区",
    level: "district",
    parent: 350500
  },
  {
    adcode: 350521,
    lng: 118.798954,
    lat: 25.028718,
    name: "惠安县",
    level: "district",
    parent: 350500
  },
  {
    adcode: 350524,
    lng: 118.186014,
    lat: 25.056824,
    name: "安溪县",
    level: "district",
    parent: 350500
  },
  {
    adcode: 350525,
    lng: 118.29503,
    lat: 25.320721,
    name: "永春县",
    level: "district",
    parent: 350500
  },
  {
    adcode: 350526,
    lng: 118.242986,
    lat: 25.489004,
    name: "德化县",
    level: "district",
    parent: 350500
  },
  {
    adcode: 350527,
    lng: 118.323221,
    lat: 24.436417,
    name: "金门县",
    level: "district",
    parent: 350500
  },
  {
    adcode: 350581,
    lng: 118.628402,
    lat: 24.731978,
    name: "石狮市",
    level: "district",
    parent: 350500
  },
  {
    adcode: 350582,
    lng: 118.577338,
    lat: 24.807322,
    name: "晋江市",
    level: "district",
    parent: 350500
  },
  {
    adcode: 350583,
    lng: 118.387031,
    lat: 24.959494,
    name: "南安市",
    level: "district",
    parent: 350500
  },
  {
    adcode: 350600,
    lng: 117.661801,
    lat: 24.510897,
    name: "漳州市",
    level: "city",
    parent: 350000
  },
  {
    adcode: 350602,
    lng: 117.656461,
    lat: 24.509955,
    name: "芗城区",
    level: "district",
    parent: 350600
  },
  {
    adcode: 350603,
    lng: 117.671387,
    lat: 24.515656,
    name: "龙文区",
    level: "district",
    parent: 350600
  },
  {
    adcode: 350622,
    lng: 117.340946,
    lat: 23.950486,
    name: "云霄县",
    level: "district",
    parent: 350600
  },
  {
    adcode: 350623,
    lng: 117.614023,
    lat: 24.117907,
    name: "漳浦县",
    level: "district",
    parent: 350600
  },
  {
    adcode: 350624,
    lng: 117.176083,
    lat: 23.710834,
    name: "诏安县",
    level: "district",
    parent: 350600
  },
  {
    adcode: 350625,
    lng: 117.755913,
    lat: 24.621475,
    name: "长泰区",
    level: "district",
    parent: 350600
  },
  {
    adcode: 350626,
    lng: 117.427679,
    lat: 23.702845,
    name: "东山县",
    level: "district",
    parent: 350600
  },
  {
    adcode: 350627,
    lng: 117.365462,
    lat: 24.516425,
    name: "南靖县",
    level: "district",
    parent: 350600
  },
  {
    adcode: 350628,
    lng: 117.313549,
    lat: 24.366158,
    name: "平和县",
    level: "district",
    parent: 350600
  },
  {
    adcode: 350629,
    lng: 117.53631,
    lat: 25.001416,
    name: "华安县",
    level: "district",
    parent: 350600
  },
  {
    adcode: 350681,
    lng: 117.817292,
    lat: 24.445341,
    name: "龙海区",
    level: "district",
    parent: 350600
  },
  {
    adcode: 350700,
    lng: 118.178459,
    lat: 26.635627,
    name: "南平市",
    level: "city",
    parent: 350000
  },
  {
    adcode: 350702,
    lng: 118.178918,
    lat: 26.636079,
    name: "延平区",
    level: "district",
    parent: 350700
  },
  {
    adcode: 350703,
    lng: 118.12267,
    lat: 27.332067,
    name: "建阳区",
    level: "district",
    parent: 350700
  },
  {
    adcode: 350721,
    lng: 117.80771,
    lat: 26.792851,
    name: "顺昌县",
    level: "district",
    parent: 350700
  },
  {
    adcode: 350722,
    lng: 118.536822,
    lat: 27.920412,
    name: "浦城县",
    level: "district",
    parent: 350700
  },
  {
    adcode: 350723,
    lng: 117.337897,
    lat: 27.542803,
    name: "光泽县",
    level: "district",
    parent: 350700
  },
  {
    adcode: 350724,
    lng: 118.783491,
    lat: 27.525785,
    name: "松溪县",
    level: "district",
    parent: 350700
  },
  {
    adcode: 350725,
    lng: 118.858661,
    lat: 27.365398,
    name: "政和县",
    level: "district",
    parent: 350700
  },
  {
    adcode: 350781,
    lng: 117.491544,
    lat: 27.337952,
    name: "邵武市",
    level: "district",
    parent: 350700
  },
  {
    adcode: 350782,
    lng: 118.032796,
    lat: 27.751733,
    name: "武夷山市",
    level: "district",
    parent: 350700
  },
  {
    adcode: 350783,
    lng: 118.321765,
    lat: 27.03502,
    name: "建瓯市",
    level: "district",
    parent: 350700
  },
  {
    adcode: 350800,
    lng: 117.02978,
    lat: 25.091603,
    name: "龙岩市",
    level: "city",
    parent: 350000
  },
  {
    adcode: 350802,
    lng: 117.030721,
    lat: 25.0918,
    name: "新罗区",
    level: "district",
    parent: 350800
  },
  {
    adcode: 350803,
    lng: 116.732691,
    lat: 24.720442,
    name: "永定区",
    level: "district",
    parent: 350800
  },
  {
    adcode: 350821,
    lng: 116.361007,
    lat: 25.842278,
    name: "长汀县",
    level: "district",
    parent: 350800
  },
  {
    adcode: 350823,
    lng: 116.424774,
    lat: 25.050019,
    name: "上杭县",
    level: "district",
    parent: 350800
  },
  {
    adcode: 350824,
    lng: 116.100928,
    lat: 25.08865,
    name: "武平县",
    level: "district",
    parent: 350800
  },
  {
    adcode: 350825,
    lng: 116.756687,
    lat: 25.708506,
    name: "连城县",
    level: "district",
    parent: 350800
  },
  {
    adcode: 350881,
    lng: 117.42073,
    lat: 25.291597,
    name: "漳平市",
    level: "district",
    parent: 350800
  },
  {
    adcode: 350900,
    lng: 119.527082,
    lat: 26.65924,
    name: "宁德市",
    level: "city",
    parent: 350000
  },
  {
    adcode: 350902,
    lng: 119.527225,
    lat: 26.659253,
    name: "蕉城区",
    level: "district",
    parent: 350900
  },
  {
    adcode: 350921,
    lng: 120.005214,
    lat: 26.882068,
    name: "霞浦县",
    level: "district",
    parent: 350900
  },
  {
    adcode: 350922,
    lng: 118.743156,
    lat: 26.577491,
    name: "古田县",
    level: "district",
    parent: 350900
  },
  {
    adcode: 350923,
    lng: 118.987544,
    lat: 26.910826,
    name: "屏南县",
    level: "district",
    parent: 350900
  },
  {
    adcode: 350924,
    lng: 119.506733,
    lat: 27.457798,
    name: "寿宁县",
    level: "district",
    parent: 350900
  },
  {
    adcode: 350925,
    lng: 119.338239,
    lat: 27.103106,
    name: "周宁县",
    level: "district",
    parent: 350900
  },
  {
    adcode: 350926,
    lng: 119.898226,
    lat: 27.236163,
    name: "柘荣县",
    level: "district",
    parent: 350900
  },
  {
    adcode: 350981,
    lng: 119.650798,
    lat: 27.084246,
    name: "福安市",
    level: "district",
    parent: 350900
  },
  {
    adcode: 350982,
    lng: 120.219761,
    lat: 27.318884,
    name: "福鼎市",
    level: "district",
    parent: 350900
  },
  {
    adcode: 360000,
    lng: 115.892151,
    lat: 28.676493,
    name: "江西省",
    level: "province",
    parent: 100000
  },
  {
    adcode: 360100,
    lng: 115.892151,
    lat: 28.676493,
    name: "南昌市",
    level: "city",
    parent: 360000
  },
  {
    adcode: 360102,
    lng: 115.889675,
    lat: 28.682988,
    name: "东湖区",
    level: "district",
    parent: 360100
  },
  {
    adcode: 360103,
    lng: 115.91065,
    lat: 28.662901,
    name: "西湖区",
    level: "district",
    parent: 360100
  },
  {
    adcode: 360104,
    lng: 115.907292,
    lat: 28.635724,
    name: "青云谱区",
    level: "district",
    parent: 360100
  },
  {
    adcode: 360111,
    lng: 115.949044,
    lat: 28.689292,
    name: "青山湖区",
    level: "district",
    parent: 360100
  },
  {
    adcode: 360112,
    lng: 115.820806,
    lat: 28.690788,
    name: "新建区",
    level: "district",
    parent: 360100
  },
  {
    adcode: 360113,
    lng: 115.8580521,
    lat: 28.69819928,
    name: "红谷滩区",
    level: "district",
    parent: 360100
  },
  {
    adcode: 360121,
    lng: 115.942465,
    lat: 28.543781,
    name: "南昌县",
    level: "district",
    parent: 360100
  },
  {
    adcode: 360123,
    lng: 115.553109,
    lat: 28.841334,
    name: "安义县",
    level: "district",
    parent: 360100
  },
  {
    adcode: 360124,
    lng: 116.267671,
    lat: 28.365681,
    name: "进贤县",
    level: "district",
    parent: 360100
  },
  {
    adcode: 360200,
    lng: 117.214664,
    lat: 29.29256,
    name: "景德镇市",
    level: "city",
    parent: 360000
  },
  {
    adcode: 360202,
    lng: 117.195023,
    lat: 29.288465,
    name: "昌江区",
    level: "district",
    parent: 360200
  },
  {
    adcode: 360203,
    lng: 117.214814,
    lat: 29.292812,
    name: "珠山区",
    level: "district",
    parent: 360200
  },
  {
    adcode: 360222,
    lng: 117.217611,
    lat: 29.352251,
    name: "浮梁县",
    level: "district",
    parent: 360200
  },
  {
    adcode: 360281,
    lng: 117.129376,
    lat: 28.967361,
    name: "乐平市",
    level: "district",
    parent: 360200
  },
  {
    adcode: 360300,
    lng: 113.852186,
    lat: 27.622946,
    name: "萍乡市",
    level: "city",
    parent: 360000
  },
  {
    adcode: 360302,
    lng: 113.855044,
    lat: 27.625826,
    name: "安源区",
    level: "district",
    parent: 360300
  },
  {
    adcode: 360313,
    lng: 113.7456,
    lat: 27.639319,
    name: "湘东区",
    level: "district",
    parent: 360300
  },
  {
    adcode: 360321,
    lng: 113.955582,
    lat: 27.127807,
    name: "莲花县",
    level: "district",
    parent: 360300
  },
  {
    adcode: 360322,
    lng: 113.800525,
    lat: 27.877041,
    name: "上栗县",
    level: "district",
    parent: 360300
  },
  {
    adcode: 360323,
    lng: 114.041206,
    lat: 27.633633,
    name: "芦溪县",
    level: "district",
    parent: 360300
  },
  {
    adcode: 360400,
    lng: 115.992811,
    lat: 29.712034,
    name: "九江市",
    level: "city",
    parent: 360000
  },
  {
    adcode: 360402,
    lng: 115.99012,
    lat: 29.676175,
    name: "濂溪区",
    level: "district",
    parent: 360400
  },
  {
    adcode: 360403,
    lng: 115.995947,
    lat: 29.72465,
    name: "浔阳区",
    level: "district",
    parent: 360400
  },
  {
    adcode: 360404,
    lng: 115.892977,
    lat: 29.610264,
    name: "柴桑区",
    level: "district",
    parent: 360400
  },
  {
    adcode: 360423,
    lng: 115.105646,
    lat: 29.260182,
    name: "武宁县",
    level: "district",
    parent: 360400
  },
  {
    adcode: 360424,
    lng: 114.573428,
    lat: 29.032729,
    name: "修水县",
    level: "district",
    parent: 360400
  },
  {
    adcode: 360425,
    lng: 115.809055,
    lat: 29.018212,
    name: "永修县",
    level: "district",
    parent: 360400
  },
  {
    adcode: 360426,
    lng: 115.762611,
    lat: 29.327474,
    name: "德安县",
    level: "district",
    parent: 360400
  },
  {
    adcode: 360428,
    lng: 116.205114,
    lat: 29.275105,
    name: "都昌县",
    level: "district",
    parent: 360400
  },
  {
    adcode: 360429,
    lng: 116.244313,
    lat: 29.7263,
    name: "湖口县",
    level: "district",
    parent: 360400
  },
  {
    adcode: 360430,
    lng: 116.55584,
    lat: 29.898865,
    name: "彭泽县",
    level: "district",
    parent: 360400
  },
  {
    adcode: 360481,
    lng: 115.669081,
    lat: 29.676599,
    name: "瑞昌市",
    level: "district",
    parent: 360400
  },
  {
    adcode: 360482,
    lng: 115.805712,
    lat: 29.247884,
    name: "共青城市",
    level: "district",
    parent: 360400
  },
  {
    adcode: 360483,
    lng: 116.043743,
    lat: 29.456169,
    name: "庐山市",
    level: "district",
    parent: 360400
  },
  {
    adcode: 360500,
    lng: 114.930835,
    lat: 27.810834,
    name: "新余市",
    level: "city",
    parent: 360000
  },
  {
    adcode: 360502,
    lng: 114.923923,
    lat: 27.819171,
    name: "渝水区",
    level: "district",
    parent: 360500
  },
  {
    adcode: 360521,
    lng: 114.675262,
    lat: 27.811301,
    name: "分宜县",
    level: "district",
    parent: 360500
  },
  {
    adcode: 360600,
    lng: 117.033838,
    lat: 28.238638,
    name: "鹰潭市",
    level: "city",
    parent: 360000
  },
  {
    adcode: 360602,
    lng: 117.034112,
    lat: 28.239076,
    name: "月湖区",
    level: "district",
    parent: 360600
  },
  {
    adcode: 360603,
    lng: 116.822763,
    lat: 28.206177,
    name: "余江区",
    level: "district",
    parent: 360600
  },
  {
    adcode: 360681,
    lng: 117.212103,
    lat: 28.283693,
    name: "贵溪市",
    level: "district",
    parent: 360600
  },
  {
    adcode: 360700,
    lng: 114.940278,
    lat: 25.85097,
    name: "赣州市",
    level: "city",
    parent: 360000
  },
  {
    adcode: 360702,
    lng: 114.93872,
    lat: 25.851367,
    name: "章贡区",
    level: "district",
    parent: 360700
  },
  {
    adcode: 360703,
    lng: 114.756933,
    lat: 25.661721,
    name: "南康区",
    level: "district",
    parent: 360700
  },
  {
    adcode: 360704,
    lng: 115.018461,
    lat: 25.865432,
    name: "赣县区",
    level: "district",
    parent: 360700
  },
  {
    adcode: 360722,
    lng: 114.930893,
    lat: 25.38023,
    name: "信丰县",
    level: "district",
    parent: 360700
  },
  {
    adcode: 360723,
    lng: 114.362243,
    lat: 25.395937,
    name: "大余县",
    level: "district",
    parent: 360700
  },
  {
    adcode: 360724,
    lng: 114.540537,
    lat: 25.794284,
    name: "上犹县",
    level: "district",
    parent: 360700
  },
  {
    adcode: 360725,
    lng: 114.307348,
    lat: 25.687911,
    name: "崇义县",
    level: "district",
    parent: 360700
  },
  {
    adcode: 360726,
    lng: 115.392328,
    lat: 25.134591,
    name: "安远县",
    level: "district",
    parent: 360700
  },
  {
    adcode: 360728,
    lng: 115.03267,
    lat: 24.774277,
    name: "定南县",
    level: "district",
    parent: 360700
  },
  {
    adcode: 360729,
    lng: 114.531589,
    lat: 24.742651,
    name: "全南县",
    level: "district",
    parent: 360700
  },
  {
    adcode: 360730,
    lng: 116.018782,
    lat: 26.472054,
    name: "宁都县",
    level: "district",
    parent: 360700
  },
  {
    adcode: 360731,
    lng: 115.411198,
    lat: 25.955033,
    name: "于都县",
    level: "district",
    parent: 360700
  },
  {
    adcode: 360732,
    lng: 115.351896,
    lat: 26.330489,
    name: "兴国县",
    level: "district",
    parent: 360700
  },
  {
    adcode: 360733,
    lng: 115.791158,
    lat: 25.599125,
    name: "会昌县",
    level: "district",
    parent: 360700
  },
  {
    adcode: 360734,
    lng: 115.651399,
    lat: 24.954136,
    name: "寻乌县",
    level: "district",
    parent: 360700
  },
  {
    adcode: 360735,
    lng: 116.342249,
    lat: 26.326582,
    name: "石城县",
    level: "district",
    parent: 360700
  },
  {
    adcode: 360781,
    lng: 116.034854,
    lat: 25.875278,
    name: "瑞金市",
    level: "district",
    parent: 360700
  },
  {
    adcode: 360783,
    lng: 114.792657,
    lat: 24.90476,
    name: "龙南市",
    level: "district",
    parent: 360700
  },
  {
    adcode: 360800,
    lng: 114.986373,
    lat: 27.111699,
    name: "吉安市",
    level: "city",
    parent: 360000
  },
  {
    adcode: 360802,
    lng: 114.987331,
    lat: 27.112367,
    name: "吉州区",
    level: "district",
    parent: 360800
  },
  {
    adcode: 360803,
    lng: 115.016306,
    lat: 27.105879,
    name: "青原区",
    level: "district",
    parent: 360800
  },
  {
    adcode: 360821,
    lng: 114.905117,
    lat: 27.040042,
    name: "吉安县",
    level: "district",
    parent: 360800
  },
  {
    adcode: 360822,
    lng: 115.134569,
    lat: 27.213445,
    name: "吉水县",
    level: "district",
    parent: 360800
  },
  {
    adcode: 360823,
    lng: 115.319331,
    lat: 27.580862,
    name: "峡江县",
    level: "district",
    parent: 360800
  },
  {
    adcode: 360824,
    lng: 115.399294,
    lat: 27.755758,
    name: "新干县",
    level: "district",
    parent: 360800
  },
  {
    adcode: 360825,
    lng: 115.435559,
    lat: 27.321087,
    name: "永丰县",
    level: "district",
    parent: 360800
  },
  {
    adcode: 360826,
    lng: 114.901393,
    lat: 26.790164,
    name: "泰和县",
    level: "district",
    parent: 360800
  },
  {
    adcode: 360827,
    lng: 114.51689,
    lat: 26.323705,
    name: "遂川县",
    level: "district",
    parent: 360800
  },
  {
    adcode: 360828,
    lng: 114.784694,
    lat: 26.462085,
    name: "万安县",
    level: "district",
    parent: 360800
  },
  {
    adcode: 360829,
    lng: 114.61384,
    lat: 27.382746,
    name: "安福县",
    level: "district",
    parent: 360800
  },
  {
    adcode: 360830,
    lng: 114.242534,
    lat: 26.944721,
    name: "永新县",
    level: "district",
    parent: 360800
  },
  {
    adcode: 360881,
    lng: 114.284421,
    lat: 26.745919,
    name: "井冈山市",
    level: "district",
    parent: 360800
  },
  {
    adcode: 360900,
    lng: 114.391136,
    lat: 27.8043,
    name: "宜春市",
    level: "city",
    parent: 360000
  },
  {
    adcode: 360902,
    lng: 114.387379,
    lat: 27.800117,
    name: "袁州区",
    level: "district",
    parent: 360900
  },
  {
    adcode: 360921,
    lng: 115.389899,
    lat: 28.700672,
    name: "奉新县",
    level: "district",
    parent: 360900
  },
  {
    adcode: 360922,
    lng: 114.449012,
    lat: 28.104528,
    name: "万载县",
    level: "district",
    parent: 360900
  },
  {
    adcode: 360923,
    lng: 114.932653,
    lat: 28.234789,
    name: "上高县",
    level: "district",
    parent: 360900
  },
  {
    adcode: 360924,
    lng: 114.787381,
    lat: 28.388289,
    name: "宜丰县",
    level: "district",
    parent: 360900
  },
  {
    adcode: 360925,
    lng: 115.361744,
    lat: 28.86054,
    name: "靖安县",
    level: "district",
    parent: 360900
  },
  {
    adcode: 360926,
    lng: 114.37014,
    lat: 28.520956,
    name: "铜鼓县",
    level: "district",
    parent: 360900
  },
  {
    adcode: 360981,
    lng: 115.786005,
    lat: 28.191584,
    name: "丰城市",
    level: "district",
    parent: 360900
  },
  {
    adcode: 360982,
    lng: 115.543388,
    lat: 28.055898,
    name: "樟树市",
    level: "district",
    parent: 360900
  },
  {
    adcode: 360983,
    lng: 115.381527,
    lat: 28.420951,
    name: "高安市",
    level: "district",
    parent: 360900
  },
  {
    adcode: 361000,
    lng: 116.358351,
    lat: 27.98385,
    name: "抚州市",
    level: "city",
    parent: 360000
  },
  {
    adcode: 361002,
    lng: 116.361404,
    lat: 27.981919,
    name: "临川区",
    level: "district",
    parent: 361000
  },
  {
    adcode: 361003,
    lng: 116.605341,
    lat: 28.2325,
    name: "东乡区",
    level: "district",
    parent: 361000
  },
  {
    adcode: 361021,
    lng: 116.63945,
    lat: 27.55531,
    name: "南城县",
    level: "district",
    parent: 361000
  },
  {
    adcode: 361022,
    lng: 116.91457,
    lat: 27.292561,
    name: "黎川县",
    level: "district",
    parent: 361000
  },
  {
    adcode: 361023,
    lng: 116.532994,
    lat: 27.210132,
    name: "南丰县",
    level: "district",
    parent: 361000
  },
  {
    adcode: 361024,
    lng: 116.059109,
    lat: 27.760907,
    name: "崇仁县",
    level: "district",
    parent: 361000
  },
  {
    adcode: 361025,
    lng: 115.838432,
    lat: 27.420101,
    name: "乐安县",
    level: "district",
    parent: 361000
  },
  {
    adcode: 361026,
    lng: 116.223023,
    lat: 27.546512,
    name: "宜黄县",
    level: "district",
    parent: 361000
  },
  {
    adcode: 361027,
    lng: 116.778751,
    lat: 27.907387,
    name: "金溪县",
    level: "district",
    parent: 361000
  },
  {
    adcode: 361028,
    lng: 117.066095,
    lat: 27.70653,
    name: "资溪县",
    level: "district",
    parent: 361000
  },
  {
    adcode: 361030,
    lng: 116.327291,
    lat: 26.838426,
    name: "广昌县",
    level: "district",
    parent: 361000
  },
  {
    adcode: 361100,
    lng: 117.971185,
    lat: 28.44442,
    name: "上饶市",
    level: "city",
    parent: 360000
  },
  {
    adcode: 361102,
    lng: 117.970522,
    lat: 28.445378,
    name: "信州区",
    level: "district",
    parent: 361100
  },
  {
    adcode: 361103,
    lng: 118.189852,
    lat: 28.440285,
    name: "广丰区",
    level: "district",
    parent: 361100
  },
  {
    adcode: 361104,
    lng: 117.90612,
    lat: 28.453897,
    name: "广信区",
    level: "district",
    parent: 361100
  },
  {
    adcode: 361123,
    lng: 118.244408,
    lat: 28.673479,
    name: "玉山县",
    level: "district",
    parent: 361100
  },
  {
    adcode: 361124,
    lng: 117.711906,
    lat: 28.310892,
    name: "铅山县",
    level: "district",
    parent: 361100
  },
  {
    adcode: 361125,
    lng: 117.608247,
    lat: 28.415103,
    name: "横峰县",
    level: "district",
    parent: 361100
  },
  {
    adcode: 361126,
    lng: 117.435002,
    lat: 28.402391,
    name: "弋阳县",
    level: "district",
    parent: 361100
  },
  {
    adcode: 361127,
    lng: 116.691072,
    lat: 28.69173,
    name: "余干县",
    level: "district",
    parent: 361100
  },
  {
    adcode: 361128,
    lng: 116.673748,
    lat: 28.993374,
    name: "鄱阳县",
    level: "district",
    parent: 361100
  },
  {
    adcode: 361129,
    lng: 117.07015,
    lat: 28.692589,
    name: "万年县",
    level: "district",
    parent: 361100
  },
  {
    adcode: 361130,
    lng: 117.86219,
    lat: 29.254015,
    name: "婺源县",
    level: "district",
    parent: 361100
  },
  {
    adcode: 361181,
    lng: 117.578732,
    lat: 28.945034,
    name: "德兴市",
    level: "district",
    parent: 361100
  },
  {
    adcode: 370000,
    lng: 117.000923,
    lat: 36.675807,
    name: "山东省",
    level: "province",
    parent: 100000
  },
  {
    adcode: 370100,
    lng: 117.000923,
    lat: 36.675807,
    name: "济南市",
    level: "city",
    parent: 370000
  },
  {
    adcode: 370102,
    lng: 117.03862,
    lat: 36.664169,
    name: "历下区",
    level: "district",
    parent: 370100
  },
  {
    adcode: 370103,
    lng: 116.99898,
    lat: 36.657354,
    name: "市中区",
    level: "district",
    parent: 370100
  },
  {
    adcode: 370104,
    lng: 116.947921,
    lat: 36.668205,
    name: "槐荫区",
    level: "district",
    parent: 370100
  },
  {
    adcode: 370105,
    lng: 116.996086,
    lat: 36.693374,
    name: "天桥区",
    level: "district",
    parent: 370100
  },
  {
    adcode: 370112,
    lng: 117.063744,
    lat: 36.681744,
    name: "历城区",
    level: "district",
    parent: 370100
  },
  {
    adcode: 370113,
    lng: 116.74588,
    lat: 36.561049,
    name: "长清区",
    level: "district",
    parent: 370100
  },
  {
    adcode: 370114,
    lng: 117.54069,
    lat: 36.71209,
    name: "章丘区",
    level: "district",
    parent: 370100
  },
  {
    adcode: 370115,
    lng: 117.176035,
    lat: 36.976771,
    name: "济阳区",
    level: "district",
    parent: 370100
  },
  {
    adcode: 370116,
    lng: 117.675808,
    lat: 36.214395,
    name: "莱芜区",
    level: "district",
    parent: 370100
  },
  {
    adcode: 370117,
    lng: 117.82033,
    lat: 36.058038,
    name: "钢城区",
    level: "district",
    parent: 370100
  },
  {
    adcode: 370124,
    lng: 116.455054,
    lat: 36.286923,
    name: "平阴县",
    level: "district",
    parent: 370100
  },
  {
    adcode: 370126,
    lng: 117.156369,
    lat: 37.310544,
    name: "商河县",
    level: "district",
    parent: 370100
  },
  {
    adcode: 370200,
    lng: 120.355173,
    lat: 36.082982,
    name: "青岛市",
    level: "city",
    parent: 370000
  },
  {
    adcode: 370202,
    lng: 120.395966,
    lat: 36.070892,
    name: "市南区",
    level: "district",
    parent: 370200
  },
  {
    adcode: 370203,
    lng: 120.355026,
    lat: 36.083819,
    name: "市北区",
    level: "district",
    parent: 370200
  },
  {
    adcode: 370211,
    lng: 119.995518,
    lat: 35.875138,
    name: "黄岛区",
    level: "district",
    parent: 370200
  },
  {
    adcode: 370212,
    lng: 120.467393,
    lat: 36.102569,
    name: "崂山区",
    level: "district",
    parent: 370200
  },
  {
    adcode: 370213,
    lng: 120.421236,
    lat: 36.160023,
    name: "李沧区",
    level: "district",
    parent: 370200
  },
  {
    adcode: 370214,
    lng: 120.389135,
    lat: 36.306833,
    name: "城阳区",
    level: "district",
    parent: 370200
  },
  {
    adcode: 370215,
    lng: 120.447352,
    lat: 36.390847,
    name: "即墨区",
    level: "district",
    parent: 370200
  },
  {
    adcode: 370281,
    lng: 120.006202,
    lat: 36.285878,
    name: "胶州市",
    level: "district",
    parent: 370200
  },
  {
    adcode: 370283,
    lng: 119.959012,
    lat: 36.788828,
    name: "平度市",
    level: "district",
    parent: 370200
  },
  {
    adcode: 370285,
    lng: 120.526226,
    lat: 36.86509,
    name: "莱西市",
    level: "district",
    parent: 370200
  },
  {
    adcode: 370300,
    lng: 118.047648,
    lat: 36.814939,
    name: "淄博市",
    level: "city",
    parent: 370000
  },
  {
    adcode: 370302,
    lng: 117.967696,
    lat: 36.647272,
    name: "淄川区",
    level: "district",
    parent: 370300
  },
  {
    adcode: 370303,
    lng: 118.053521,
    lat: 36.807049,
    name: "张店区",
    level: "district",
    parent: 370300
  },
  {
    adcode: 370304,
    lng: 117.85823,
    lat: 36.497567,
    name: "博山区",
    level: "district",
    parent: 370300
  },
  {
    adcode: 370305,
    lng: 118.306018,
    lat: 36.816657,
    name: "临淄区",
    level: "district",
    parent: 370300
  },
  {
    adcode: 370306,
    lng: 117.851036,
    lat: 36.803699,
    name: "周村区",
    level: "district",
    parent: 370300
  },
  {
    adcode: 370321,
    lng: 118.101556,
    lat: 36.959773,
    name: "桓台县",
    level: "district",
    parent: 370300
  },
  {
    adcode: 370322,
    lng: 117.829839,
    lat: 37.169581,
    name: "高青县",
    level: "district",
    parent: 370300
  },
  {
    adcode: 370323,
    lng: 118.166161,
    lat: 36.186282,
    name: "沂源县",
    level: "district",
    parent: 370300
  },
  {
    adcode: 370400,
    lng: 117.557964,
    lat: 34.856424,
    name: "枣庄市",
    level: "city",
    parent: 370000
  },
  {
    adcode: 370402,
    lng: 117.557281,
    lat: 34.856651,
    name: "市中区",
    level: "district",
    parent: 370400
  },
  {
    adcode: 370403,
    lng: 117.265293,
    lat: 34.79789,
    name: "薛城区",
    level: "district",
    parent: 370400
  },
  {
    adcode: 370404,
    lng: 117.586316,
    lat: 34.767713,
    name: "峄城区",
    level: "district",
    parent: 370400
  },
  {
    adcode: 370405,
    lng: 117.734747,
    lat: 34.564815,
    name: "台儿庄区",
    level: "district",
    parent: 370400
  },
  {
    adcode: 370406,
    lng: 117.458968,
    lat: 35.096077,
    name: "山亭区",
    level: "district",
    parent: 370400
  },
  {
    adcode: 370481,
    lng: 117.162098,
    lat: 35.088498,
    name: "滕州市",
    level: "district",
    parent: 370400
  },
  {
    adcode: 370500,
    lng: 118.66471,
    lat: 37.434564,
    name: "东营市",
    level: "city",
    parent: 370000
  },
  {
    adcode: 370502,
    lng: 118.507543,
    lat: 37.461567,
    name: "东营区",
    level: "district",
    parent: 370500
  },
  {
    adcode: 370503,
    lng: 118.529613,
    lat: 37.886015,
    name: "河口区",
    level: "district",
    parent: 370500
  },
  {
    adcode: 370505,
    lng: 118.551314,
    lat: 37.588679,
    name: "垦利区",
    level: "district",
    parent: 370500
  },
  {
    adcode: 370522,
    lng: 118.248854,
    lat: 37.493365,
    name: "利津县",
    level: "district",
    parent: 370500
  },
  {
    adcode: 370523,
    lng: 118.407522,
    lat: 37.05161,
    name: "广饶县",
    level: "district",
    parent: 370500
  },
  {
    adcode: 370600,
    lng: 121.391382,
    lat: 37.539297,
    name: "烟台市",
    level: "city",
    parent: 370000
  },
  {
    adcode: 370602,
    lng: 121.385877,
    lat: 37.540925,
    name: "芝罘区",
    level: "district",
    parent: 370600
  },
  {
    adcode: 370611,
    lng: 121.264741,
    lat: 37.496875,
    name: "福山区",
    level: "district",
    parent: 370600
  },
  {
    adcode: 370612,
    lng: 121.60151,
    lat: 37.388356,
    name: "牟平区",
    level: "district",
    parent: 370600
  },
  {
    adcode: 370613,
    lng: 121.448866,
    lat: 37.473549,
    name: "莱山区",
    level: "district",
    parent: 370600
  },
  {
    adcode: 370614,
    lng: 120.759074,
    lat: 37.811045,
    name: "蓬莱区",
    level: "district",
    parent: 370600
  },
  {
    adcode: 370681,
    lng: 120.528328,
    lat: 37.648446,
    name: "龙口市",
    level: "district",
    parent: 370600
  },
  {
    adcode: 370682,
    lng: 120.711151,
    lat: 36.977037,
    name: "莱阳市",
    level: "district",
    parent: 370600
  },
  {
    adcode: 370683,
    lng: 119.942135,
    lat: 37.182725,
    name: "莱州市",
    level: "district",
    parent: 370600
  },
  {
    adcode: 370685,
    lng: 120.403142,
    lat: 37.364919,
    name: "招远市",
    level: "district",
    parent: 370600
  },
  {
    adcode: 370686,
    lng: 120.834097,
    lat: 37.305854,
    name: "栖霞市",
    level: "district",
    parent: 370600
  },
  {
    adcode: 370687,
    lng: 121.168392,
    lat: 36.780657,
    name: "海阳市",
    level: "district",
    parent: 370600
  },
  {
    adcode: 370700,
    lng: 119.107078,
    lat: 36.70925,
    name: "潍坊市",
    level: "city",
    parent: 370000
  },
  {
    adcode: 370702,
    lng: 119.103784,
    lat: 36.710062,
    name: "潍城区",
    level: "district",
    parent: 370700
  },
  {
    adcode: 370703,
    lng: 119.207866,
    lat: 36.772103,
    name: "寒亭区",
    level: "district",
    parent: 370700
  },
  {
    adcode: 370704,
    lng: 119.166326,
    lat: 36.654616,
    name: "坊子区",
    level: "district",
    parent: 370700
  },
  {
    adcode: 370705,
    lng: 119.137357,
    lat: 36.709494,
    name: "奎文区",
    level: "district",
    parent: 370700
  },
  {
    adcode: 370724,
    lng: 118.539876,
    lat: 36.516371,
    name: "临朐县",
    level: "district",
    parent: 370700
  },
  {
    adcode: 370725,
    lng: 118.839995,
    lat: 36.703253,
    name: "昌乐县",
    level: "district",
    parent: 370700
  },
  {
    adcode: 370781,
    lng: 118.484693,
    lat: 36.697855,
    name: "青州市",
    level: "district",
    parent: 370700
  },
  {
    adcode: 370782,
    lng: 119.403182,
    lat: 35.997093,
    name: "诸城市",
    level: "district",
    parent: 370700
  },
  {
    adcode: 370783,
    lng: 118.736451,
    lat: 36.874411,
    name: "寿光市",
    level: "district",
    parent: 370700
  },
  {
    adcode: 370784,
    lng: 119.206886,
    lat: 36.427417,
    name: "安丘市",
    level: "district",
    parent: 370700
  },
  {
    adcode: 370785,
    lng: 119.757033,
    lat: 36.37754,
    name: "高密市",
    level: "district",
    parent: 370700
  },
  {
    adcode: 370786,
    lng: 119.394502,
    lat: 36.854937,
    name: "昌邑市",
    level: "district",
    parent: 370700
  },
  {
    adcode: 370800,
    lng: 116.587245,
    lat: 35.415393,
    name: "济宁市",
    level: "city",
    parent: 370000
  },
  {
    adcode: 370811,
    lng: 116.595261,
    lat: 35.414828,
    name: "任城区",
    level: "district",
    parent: 370800
  },
  {
    adcode: 370812,
    lng: 116.828996,
    lat: 35.556445,
    name: "兖州区",
    level: "district",
    parent: 370800
  },
  {
    adcode: 370826,
    lng: 117.12861,
    lat: 34.809525,
    name: "微山县",
    level: "district",
    parent: 370800
  },
  {
    adcode: 370827,
    lng: 116.650023,
    lat: 34.997706,
    name: "鱼台县",
    level: "district",
    parent: 370800
  },
  {
    adcode: 370828,
    lng: 116.310364,
    lat: 35.06977,
    name: "金乡县",
    level: "district",
    parent: 370800
  },
  {
    adcode: 370829,
    lng: 116.342885,
    lat: 35.398098,
    name: "嘉祥县",
    level: "district",
    parent: 370800
  },
  {
    adcode: 370830,
    lng: 116.487146,
    lat: 35.721746,
    name: "汶上县",
    level: "district",
    parent: 370800
  },
  {
    adcode: 370831,
    lng: 117.273605,
    lat: 35.653216,
    name: "泗水县",
    level: "district",
    parent: 370800
  },
  {
    adcode: 370832,
    lng: 116.08963,
    lat: 35.801843,
    name: "梁山县",
    level: "district",
    parent: 370800
  },
  {
    adcode: 370881,
    lng: 116.991885,
    lat: 35.592788,
    name: "曲阜市",
    level: "district",
    parent: 370800
  },
  {
    adcode: 370883,
    lng: 116.96673,
    lat: 35.405259,
    name: "邹城市",
    level: "district",
    parent: 370800
  },
  {
    adcode: 370900,
    lng: 117.129063,
    lat: 36.194968,
    name: "泰安市",
    level: "city",
    parent: 370000
  },
  {
    adcode: 370902,
    lng: 117.129984,
    lat: 36.189313,
    name: "泰山区",
    level: "district",
    parent: 370900
  },
  {
    adcode: 370911,
    lng: 117.04353,
    lat: 36.1841,
    name: "岱岳区",
    level: "district",
    parent: 370900
  },
  {
    adcode: 370921,
    lng: 116.799297,
    lat: 35.76754,
    name: "宁阳县",
    level: "district",
    parent: 370900
  },
  {
    adcode: 370923,
    lng: 116.461052,
    lat: 35.930467,
    name: "东平县",
    level: "district",
    parent: 370900
  },
  {
    adcode: 370982,
    lng: 117.766092,
    lat: 35.910387,
    name: "新泰市",
    level: "district",
    parent: 370900
  },
  {
    adcode: 370983,
    lng: 116.763703,
    lat: 36.1856,
    name: "肥城市",
    level: "district",
    parent: 370900
  },
  {
    adcode: 371000,
    lng: 122.116394,
    lat: 37.509691,
    name: "威海市",
    level: "city",
    parent: 370000
  },
  {
    adcode: 371002,
    lng: 122.116189,
    lat: 37.510754,
    name: "环翠区",
    level: "district",
    parent: 371000
  },
  {
    adcode: 371003,
    lng: 122.057139,
    lat: 37.196211,
    name: "文登区",
    level: "district",
    parent: 371000
  },
  {
    adcode: 371082,
    lng: 122.422896,
    lat: 37.160134,
    name: "荣成市",
    level: "district",
    parent: 371000
  },
  {
    adcode: 371083,
    lng: 121.536346,
    lat: 36.919622,
    name: "乳山市",
    level: "district",
    parent: 371000
  },
  {
    adcode: 371100,
    lng: 119.461208,
    lat: 35.428588,
    name: "日照市",
    level: "city",
    parent: 370000
  },
  {
    adcode: 371102,
    lng: 119.457703,
    lat: 35.426152,
    name: "东港区",
    level: "district",
    parent: 371100
  },
  {
    adcode: 371103,
    lng: 119.315844,
    lat: 35.119794,
    name: "岚山区",
    level: "district",
    parent: 371100
  },
  {
    adcode: 371121,
    lng: 119.206745,
    lat: 35.751936,
    name: "五莲县",
    level: "district",
    parent: 371100
  },
  {
    adcode: 371122,
    lng: 118.832859,
    lat: 35.588115,
    name: "莒县",
    level: "district",
    parent: 371100
  },
  {
    adcode: 371300,
    lng: 118.326443,
    lat: 35.065282,
    name: "临沂市",
    level: "city",
    parent: 370000
  },
  {
    adcode: 371302,
    lng: 118.327667,
    lat: 35.061631,
    name: "兰山区",
    level: "district",
    parent: 371300
  },
  {
    adcode: 371311,
    lng: 118.284795,
    lat: 34.997204,
    name: "罗庄区",
    level: "district",
    parent: 371300
  },
  {
    adcode: 371312,
    lng: 118.398296,
    lat: 35.085004,
    name: "河东区",
    level: "district",
    parent: 371300
  },
  {
    adcode: 371321,
    lng: 118.455395,
    lat: 35.547002,
    name: "沂南县",
    level: "district",
    parent: 371300
  },
  {
    adcode: 371322,
    lng: 118.342963,
    lat: 34.614741,
    name: "郯城县",
    level: "district",
    parent: 371300
  },
  {
    adcode: 371323,
    lng: 118.634543,
    lat: 35.787029,
    name: "沂水县",
    level: "district",
    parent: 371300
  },
  {
    adcode: 371324,
    lng: 118.049968,
    lat: 34.855573,
    name: "兰陵县",
    level: "district",
    parent: 371300
  },
  {
    adcode: 371325,
    lng: 117.968869,
    lat: 35.269174,
    name: "费县",
    level: "district",
    parent: 371300
  },
  {
    adcode: 371326,
    lng: 117.631884,
    lat: 35.511519,
    name: "平邑县",
    level: "district",
    parent: 371300
  },
  {
    adcode: 371327,
    lng: 118.838322,
    lat: 35.175911,
    name: "莒南县",
    level: "district",
    parent: 371300
  },
  {
    adcode: 371328,
    lng: 117.943271,
    lat: 35.712435,
    name: "蒙阴县",
    level: "district",
    parent: 371300
  },
  {
    adcode: 371329,
    lng: 118.648379,
    lat: 34.917062,
    name: "临沭县",
    level: "district",
    parent: 371300
  },
  {
    adcode: 371400,
    lng: 116.307428,
    lat: 37.453968,
    name: "德州市",
    level: "city",
    parent: 370000
  },
  {
    adcode: 371402,
    lng: 116.307076,
    lat: 37.453923,
    name: "德城区",
    level: "district",
    parent: 371400
  },
  {
    adcode: 371403,
    lng: 116.574929,
    lat: 37.332848,
    name: "陵城区",
    level: "district",
    parent: 371400
  },
  {
    adcode: 371422,
    lng: 116.79372,
    lat: 37.649619,
    name: "宁津县",
    level: "district",
    parent: 371400
  },
  {
    adcode: 371423,
    lng: 117.390507,
    lat: 37.777724,
    name: "庆云县",
    level: "district",
    parent: 371400
  },
  {
    adcode: 371424,
    lng: 116.867028,
    lat: 37.192044,
    name: "临邑县",
    level: "district",
    parent: 371400
  },
  {
    adcode: 371425,
    lng: 116.758394,
    lat: 36.795497,
    name: "齐河县",
    level: "district",
    parent: 371400
  },
  {
    adcode: 371426,
    lng: 116.433904,
    lat: 37.164465,
    name: "平原县",
    level: "district",
    parent: 371400
  },
  {
    adcode: 371427,
    lng: 116.003816,
    lat: 36.950501,
    name: "夏津县",
    level: "district",
    parent: 371400
  },
  {
    adcode: 371428,
    lng: 116.078627,
    lat: 37.209527,
    name: "武城县",
    level: "district",
    parent: 371400
  },
  {
    adcode: 371481,
    lng: 117.216657,
    lat: 37.729115,
    name: "乐陵市",
    level: "district",
    parent: 371400
  },
  {
    adcode: 371482,
    lng: 116.642554,
    lat: 36.934485,
    name: "禹城市",
    level: "district",
    parent: 371400
  },
  {
    adcode: 371500,
    lng: 115.980367,
    lat: 36.456013,
    name: "聊城市",
    level: "city",
    parent: 370000
  },
  {
    adcode: 371502,
    lng: 115.980023,
    lat: 36.45606,
    name: "东昌府区",
    level: "district",
    parent: 371500
  },
  {
    adcode: 371503,
    lng: 116.25335,
    lat: 36.591934,
    name: "茌平区",
    level: "district",
    parent: 371500
  },
  {
    adcode: 371521,
    lng: 115.784287,
    lat: 36.113708,
    name: "阳谷县",
    level: "district",
    parent: 371500
  },
  {
    adcode: 371522,
    lng: 115.667291,
    lat: 36.237597,
    name: "莘县",
    level: "district",
    parent: 371500
  },
  {
    adcode: 371524,
    lng: 116.248855,
    lat: 36.336004,
    name: "东阿县",
    level: "district",
    parent: 371500
  },
  {
    adcode: 371525,
    lng: 115.444808,
    lat: 36.483753,
    name: "冠县",
    level: "district",
    parent: 371500
  },
  {
    adcode: 371526,
    lng: 116.229662,
    lat: 36.859755,
    name: "高唐县",
    level: "district",
    parent: 371500
  },
  {
    adcode: 371581,
    lng: 115.713462,
    lat: 36.842598,
    name: "临清市",
    level: "district",
    parent: 371500
  },
  {
    adcode: 371600,
    lng: 118.016974,
    lat: 37.383542,
    name: "滨州市",
    level: "city",
    parent: 370000
  },
  {
    adcode: 371602,
    lng: 118.020149,
    lat: 37.384842,
    name: "滨城区",
    level: "district",
    parent: 371600
  },
  {
    adcode: 371603,
    lng: 118.129902,
    lat: 37.698456,
    name: "沾化区",
    level: "district",
    parent: 371600
  },
  {
    adcode: 371621,
    lng: 117.508941,
    lat: 37.483876,
    name: "惠民县",
    level: "district",
    parent: 371600
  },
  {
    adcode: 371622,
    lng: 117.581326,
    lat: 37.640492,
    name: "阳信县",
    level: "district",
    parent: 371600
  },
  {
    adcode: 371623,
    lng: 117.616325,
    lat: 37.740848,
    name: "无棣县",
    level: "district",
    parent: 371600
  },
  {
    adcode: 371625,
    lng: 118.123096,
    lat: 37.147002,
    name: "博兴县",
    level: "district",
    parent: 371600
  },
  {
    adcode: 371681,
    lng: 117.736807,
    lat: 36.87803,
    name: "邹平市",
    level: "district",
    parent: 371600
  },
  {
    adcode: 371700,
    lng: 115.469381,
    lat: 35.246531,
    name: "菏泽市",
    level: "city",
    parent: 370000
  },
  {
    adcode: 371702,
    lng: 115.470946,
    lat: 35.24311,
    name: "牡丹区",
    level: "district",
    parent: 371700
  },
  {
    adcode: 371703,
    lng: 115.569601,
    lat: 35.072701,
    name: "定陶区",
    level: "district",
    parent: 371700
  },
  {
    adcode: 371721,
    lng: 115.549482,
    lat: 34.823253,
    name: "曹县",
    level: "district",
    parent: 371700
  },
  {
    adcode: 371722,
    lng: 116.08262,
    lat: 34.790851,
    name: "单县",
    level: "district",
    parent: 371700
  },
  {
    adcode: 371723,
    lng: 115.897349,
    lat: 34.947366,
    name: "成武县",
    level: "district",
    parent: 371700
  },
  {
    adcode: 371724,
    lng: 116.089341,
    lat: 35.390999,
    name: "巨野县",
    level: "district",
    parent: 371700
  },
  {
    adcode: 371725,
    lng: 115.93885,
    lat: 35.594773,
    name: "郓城县",
    level: "district",
    parent: 371700
  },
  {
    adcode: 371726,
    lng: 115.51434,
    lat: 35.560257,
    name: "鄄城县",
    level: "district",
    parent: 371700
  },
  {
    adcode: 371728,
    lng: 115.098412,
    lat: 35.289637,
    name: "东明县",
    level: "district",
    parent: 371700
  },
  {
    adcode: 410000,
    lng: 113.665412,
    lat: 34.757975,
    name: "河南省",
    level: "province",
    parent: 100000
  },
  {
    adcode: 410100,
    lng: 113.665412,
    lat: 34.757975,
    name: "郑州市",
    level: "city",
    parent: 410000
  },
  {
    adcode: 410102,
    lng: 113.611576,
    lat: 34.748286,
    name: "中原区",
    level: "district",
    parent: 410100
  },
  {
    adcode: 410103,
    lng: 113.645422,
    lat: 34.730936,
    name: "二七区",
    level: "district",
    parent: 410100
  },
  {
    adcode: 410104,
    lng: 113.685313,
    lat: 34.746453,
    name: "管城回族区",
    level: "district",
    parent: 410100
  },
  {
    adcode: 410105,
    lng: 113.686037,
    lat: 34.775838,
    name: "金水区",
    level: "district",
    parent: 410100
  },
  {
    adcode: 410106,
    lng: 113.298282,
    lat: 34.808689,
    name: "上街区",
    level: "district",
    parent: 410100
  },
  {
    adcode: 410108,
    lng: 113.61836,
    lat: 34.828591,
    name: "惠济区",
    level: "district",
    parent: 410100
  },
  {
    adcode: 410122,
    lng: 114.022521,
    lat: 34.721976,
    name: "中牟县",
    level: "district",
    parent: 410100
  },
  {
    adcode: 410181,
    lng: 112.98283,
    lat: 34.75218,
    name: "巩义市",
    level: "district",
    parent: 410100
  },
  {
    adcode: 410182,
    lng: 113.391523,
    lat: 34.789077,
    name: "荥阳市",
    level: "district",
    parent: 410100
  },
  {
    adcode: 410183,
    lng: 113.380616,
    lat: 34.537846,
    name: "新密市",
    level: "district",
    parent: 410100
  },
  {
    adcode: 410184,
    lng: 113.73967,
    lat: 34.394219,
    name: "新郑市",
    level: "district",
    parent: 410100
  },
  {
    adcode: 410185,
    lng: 113.037768,
    lat: 34.459939,
    name: "登封市",
    level: "district",
    parent: 410100
  },
  {
    adcode: 410200,
    lng: 114.341447,
    lat: 34.797049,
    name: "开封市",
    level: "city",
    parent: 410000
  },
  {
    adcode: 410202,
    lng: 114.353348,
    lat: 34.799833,
    name: "龙亭区",
    level: "district",
    parent: 410200
  },
  {
    adcode: 410203,
    lng: 114.364875,
    lat: 34.800459,
    name: "顺河回族区",
    level: "district",
    parent: 410200
  },
  {
    adcode: 410204,
    lng: 114.3485,
    lat: 34.792383,
    name: "鼓楼区",
    level: "district",
    parent: 410200
  },
  {
    adcode: 410205,
    lng: 114.350246,
    lat: 34.779727,
    name: "禹王台区",
    level: "district",
    parent: 410200
  },
  {
    adcode: 410212,
    lng: 114.437622,
    lat: 34.756476,
    name: "祥符区",
    level: "district",
    parent: 410200
  },
  {
    adcode: 410221,
    lng: 114.770472,
    lat: 34.554585,
    name: "杞县",
    level: "district",
    parent: 410200
  },
  {
    adcode: 410222,
    lng: 114.467734,
    lat: 34.477302,
    name: "通许县",
    level: "district",
    parent: 410200
  },
  {
    adcode: 410223,
    lng: 114.193927,
    lat: 34.412256,
    name: "尉氏县",
    level: "district",
    parent: 410200
  },
  {
    adcode: 410225,
    lng: 114.820572,
    lat: 34.829899,
    name: "兰考县",
    level: "district",
    parent: 410200
  },
  {
    adcode: 410300,
    lng: 112.434468,
    lat: 34.663041,
    name: "洛阳市",
    level: "city",
    parent: 410000
  },
  {
    adcode: 410302,
    lng: 112.477298,
    lat: 34.682945,
    name: "老城区",
    level: "district",
    parent: 410300
  },
  {
    adcode: 410303,
    lng: 112.443232,
    lat: 34.667847,
    name: "西工区",
    level: "district",
    parent: 410300
  },
  {
    adcode: 410304,
    lng: 112.491625,
    lat: 34.684738,
    name: "瀍河回族区",
    level: "district",
    parent: 410300
  },
  {
    adcode: 410305,
    lng: 112.399243,
    lat: 34.654251,
    name: "涧西区",
    level: "district",
    parent: 410300
  },
  {
    adcode: 410306,
    lng: 112.443892,
    lat: 34.826485,
    name: "孟津区",
    level: "district",
    parent: 410300
  },
  {
    adcode: 410311,
    lng: 112.456634,
    lat: 34.618557,
    name: "洛龙区",
    level: "district",
    parent: 410300
  },
  {
    adcode: 410323,
    lng: 112.141403,
    lat: 34.728679,
    name: "新安县",
    level: "district",
    parent: 410300
  },
  {
    adcode: 410324,
    lng: 111.618386,
    lat: 33.783195,
    name: "栾川县",
    level: "district",
    parent: 410300
  },
  {
    adcode: 410325,
    lng: 112.087765,
    lat: 34.131563,
    name: "嵩县",
    level: "district",
    parent: 410300
  },
  {
    adcode: 410326,
    lng: 112.473789,
    lat: 34.15323,
    name: "汝阳县",
    level: "district",
    parent: 410300
  },
  {
    adcode: 410327,
    lng: 112.179989,
    lat: 34.516478,
    name: "宜阳县",
    level: "district",
    parent: 410300
  },
  {
    adcode: 410328,
    lng: 111.655399,
    lat: 34.387179,
    name: "洛宁县",
    level: "district",
    parent: 410300
  },
  {
    adcode: 410329,
    lng: 112.429384,
    lat: 34.423416,
    name: "伊川县",
    level: "district",
    parent: 410300
  },
  {
    adcode: 410381,
    lng: 112.787739,
    lat: 34.723042,
    name: "偃师区",
    level: "district",
    parent: 410300
  },
  {
    adcode: 410400,
    lng: 113.307718,
    lat: 33.735241,
    name: "平顶山市",
    level: "city",
    parent: 410000
  },
  {
    adcode: 410402,
    lng: 113.299061,
    lat: 33.737579,
    name: "新华区",
    level: "district",
    parent: 410400
  },
  {
    adcode: 410403,
    lng: 113.310327,
    lat: 33.739285,
    name: "卫东区",
    level: "district",
    parent: 410400
  },
  {
    adcode: 410404,
    lng: 112.889885,
    lat: 33.901538,
    name: "石龙区",
    level: "district",
    parent: 410400
  },
  {
    adcode: 410411,
    lng: 113.320873,
    lat: 33.725681,
    name: "湛河区",
    level: "district",
    parent: 410400
  },
  {
    adcode: 410421,
    lng: 113.066812,
    lat: 33.866359,
    name: "宝丰县",
    level: "district",
    parent: 410400
  },
  {
    adcode: 410422,
    lng: 113.358298,
    lat: 33.621252,
    name: "叶县",
    level: "district",
    parent: 410400
  },
  {
    adcode: 410423,
    lng: 112.906703,
    lat: 33.740325,
    name: "鲁山县",
    level: "district",
    parent: 410400
  },
  {
    adcode: 410425,
    lng: 113.220451,
    lat: 33.971993,
    name: "郏县",
    level: "district",
    parent: 410400
  },
  {
    adcode: 410481,
    lng: 113.52625,
    lat: 33.302082,
    name: "舞钢市",
    level: "district",
    parent: 410400
  },
  {
    adcode: 410482,
    lng: 112.845336,
    lat: 34.167408,
    name: "汝州市",
    level: "district",
    parent: 410400
  },
  {
    adcode: 410500,
    lng: 114.352482,
    lat: 36.103442,
    name: "安阳市",
    level: "city",
    parent: 410000
  },
  {
    adcode: 410502,
    lng: 114.352562,
    lat: 36.098101,
    name: "文峰区",
    level: "district",
    parent: 410500
  },
  {
    adcode: 410503,
    lng: 114.352646,
    lat: 36.10978,
    name: "北关区",
    level: "district",
    parent: 410500
  },
  {
    adcode: 410505,
    lng: 114.300098,
    lat: 36.108974,
    name: "殷都区",
    level: "district",
    parent: 410500
  },
  {
    adcode: 410506,
    lng: 114.323522,
    lat: 36.095568,
    name: "龙安区",
    level: "district",
    parent: 410500
  },
  {
    adcode: 410522,
    lng: 114.130207,
    lat: 36.130585,
    name: "安阳县",
    level: "district",
    parent: 410500
  },
  {
    adcode: 410523,
    lng: 114.362357,
    lat: 35.922349,
    name: "汤阴县",
    level: "district",
    parent: 410500
  },
  {
    adcode: 410526,
    lng: 114.524,
    lat: 35.574628,
    name: "滑县",
    level: "district",
    parent: 410500
  },
  {
    adcode: 410527,
    lng: 114.904582,
    lat: 35.953702,
    name: "内黄县",
    level: "district",
    parent: 410500
  },
  {
    adcode: 410581,
    lng: 113.823767,
    lat: 36.063403,
    name: "林州市",
    level: "district",
    parent: 410500
  },
  {
    adcode: 410600,
    lng: 114.295444,
    lat: 35.748236,
    name: "鹤壁市",
    level: "city",
    parent: 410000
  },
  {
    adcode: 410602,
    lng: 114.166551,
    lat: 35.936128,
    name: "鹤山区",
    level: "district",
    parent: 410600
  },
  {
    adcode: 410603,
    lng: 114.184202,
    lat: 35.896058,
    name: "山城区",
    level: "district",
    parent: 410600
  },
  {
    adcode: 410611,
    lng: 114.293917,
    lat: 35.748382,
    name: "淇滨区",
    level: "district",
    parent: 410600
  },
  {
    adcode: 410621,
    lng: 114.550162,
    lat: 35.671282,
    name: "浚县",
    level: "district",
    parent: 410600
  },
  {
    adcode: 410622,
    lng: 114.200379,
    lat: 35.609478,
    name: "淇县",
    level: "district",
    parent: 410600
  },
  {
    adcode: 410700,
    lng: 113.883991,
    lat: 35.302616,
    name: "新乡市",
    level: "city",
    parent: 410000
  },
  {
    adcode: 410702,
    lng: 113.878158,
    lat: 35.302684,
    name: "红旗区",
    level: "district",
    parent: 410700
  },
  {
    adcode: 410703,
    lng: 113.866065,
    lat: 35.304905,
    name: "卫滨区",
    level: "district",
    parent: 410700
  },
  {
    adcode: 410704,
    lng: 113.906712,
    lat: 35.379855,
    name: "凤泉区",
    level: "district",
    parent: 410700
  },
  {
    adcode: 410711,
    lng: 113.89716,
    lat: 35.312974,
    name: "牧野区",
    level: "district",
    parent: 410700
  },
  {
    adcode: 410721,
    lng: 113.806186,
    lat: 35.190021,
    name: "新乡县",
    level: "district",
    parent: 410700
  },
  {
    adcode: 410724,
    lng: 113.657249,
    lat: 35.261685,
    name: "获嘉县",
    level: "district",
    parent: 410700
  },
  {
    adcode: 410725,
    lng: 113.965966,
    lat: 35.054001,
    name: "原阳县",
    level: "district",
    parent: 410700
  },
  {
    adcode: 410726,
    lng: 114.200982,
    lat: 35.149515,
    name: "延津县",
    level: "district",
    parent: 410700
  },
  {
    adcode: 410727,
    lng: 114.423405,
    lat: 35.04057,
    name: "封丘县",
    level: "district",
    parent: 410700
  },
  {
    adcode: 410781,
    lng: 114.065855,
    lat: 35.404295,
    name: "卫辉市",
    level: "district",
    parent: 410700
  },
  {
    adcode: 410782,
    lng: 113.802518,
    lat: 35.461318,
    name: "辉县市",
    level: "district",
    parent: 410700
  },
  {
    adcode: 410783,
    lng: 114.673807,
    lat: 35.19615,
    name: "长垣市",
    level: "district",
    parent: 410700
  },
  {
    adcode: 410800,
    lng: 113.238266,
    lat: 35.23904,
    name: "焦作市",
    level: "city",
    parent: 410000
  },
  {
    adcode: 410802,
    lng: 113.226126,
    lat: 35.241353,
    name: "解放区",
    level: "district",
    parent: 410800
  },
  {
    adcode: 410803,
    lng: 113.175485,
    lat: 35.236145,
    name: "中站区",
    level: "district",
    parent: 410800
  },
  {
    adcode: 410804,
    lng: 113.321703,
    lat: 35.265453,
    name: "马村区",
    level: "district",
    parent: 410800
  },
  {
    adcode: 410811,
    lng: 113.26766,
    lat: 35.21476,
    name: "山阳区",
    level: "district",
    parent: 410800
  },
  {
    adcode: 410821,
    lng: 113.447465,
    lat: 35.229923,
    name: "修武县",
    level: "district",
    parent: 410800
  },
  {
    adcode: 410822,
    lng: 113.069313,
    lat: 35.170351,
    name: "博爱县",
    level: "district",
    parent: 410800
  },
  {
    adcode: 410823,
    lng: 113.408334,
    lat: 35.09885,
    name: "武陟县",
    level: "district",
    parent: 410800
  },
  {
    adcode: 410825,
    lng: 113.079118,
    lat: 34.941233,
    name: "温县",
    level: "district",
    parent: 410800
  },
  {
    adcode: 410882,
    lng: 112.934538,
    lat: 35.08901,
    name: "沁阳市",
    level: "district",
    parent: 410800
  },
  {
    adcode: 410883,
    lng: 112.78708,
    lat: 34.90963,
    name: "孟州市",
    level: "district",
    parent: 410800
  },
  {
    adcode: 410900,
    lng: 115.041299,
    lat: 35.768234,
    name: "濮阳市",
    level: "city",
    parent: 410000
  },
  {
    adcode: 410902,
    lng: 115.03184,
    lat: 35.760473,
    name: "华龙区",
    level: "district",
    parent: 410900
  },
  {
    adcode: 410922,
    lng: 115.107287,
    lat: 35.902413,
    name: "清丰县",
    level: "district",
    parent: 410900
  },
  {
    adcode: 410923,
    lng: 115.204336,
    lat: 36.075204,
    name: "南乐县",
    level: "district",
    parent: 410900
  },
  {
    adcode: 410926,
    lng: 115.504212,
    lat: 35.851977,
    name: "范县",
    level: "district",
    parent: 410900
  },
  {
    adcode: 410927,
    lng: 115.855681,
    lat: 35.996474,
    name: "台前县",
    level: "district",
    parent: 410900
  },
  {
    adcode: 410928,
    lng: 115.023844,
    lat: 35.710349,
    name: "濮阳县",
    level: "district",
    parent: 410900
  },
  {
    adcode: 411000,
    lng: 113.826063,
    lat: 34.022956,
    name: "许昌市",
    level: "city",
    parent: 410000
  },
  {
    adcode: 411002,
    lng: 113.828307,
    lat: 34.02711,
    name: "魏都区",
    level: "district",
    parent: 411000
  },
  {
    adcode: 411003,
    lng: 113.842898,
    lat: 34.005018,
    name: "建安区",
    level: "district",
    parent: 411000
  },
  {
    adcode: 411024,
    lng: 114.188507,
    lat: 34.100502,
    name: "鄢陵县",
    level: "district",
    parent: 411000
  },
  {
    adcode: 411025,
    lng: 113.493166,
    lat: 33.855943,
    name: "襄城县",
    level: "district",
    parent: 411000
  },
  {
    adcode: 411081,
    lng: 113.471316,
    lat: 34.154403,
    name: "禹州市",
    level: "district",
    parent: 411000
  },
  {
    adcode: 411082,
    lng: 113.768912,
    lat: 34.219257,
    name: "长葛市",
    level: "district",
    parent: 411000
  },
  {
    adcode: 411100,
    lng: 114.026405,
    lat: 33.575855,
    name: "漯河市",
    level: "city",
    parent: 410000
  },
  {
    adcode: 411102,
    lng: 114.017948,
    lat: 33.565441,
    name: "源汇区",
    level: "district",
    parent: 411100
  },
  {
    adcode: 411103,
    lng: 114.016813,
    lat: 33.588897,
    name: "郾城区",
    level: "district",
    parent: 411100
  },
  {
    adcode: 411104,
    lng: 114.051686,
    lat: 33.567555,
    name: "召陵区",
    level: "district",
    parent: 411100
  },
  {
    adcode: 411121,
    lng: 113.610565,
    lat: 33.436278,
    name: "舞阳县",
    level: "district",
    parent: 411100
  },
  {
    adcode: 411122,
    lng: 113.938891,
    lat: 33.80609,
    name: "临颍县",
    level: "district",
    parent: 411100
  },
  {
    adcode: 411200,
    lng: 111.194099,
    lat: 34.777338,
    name: "三门峡市",
    level: "city",
    parent: 410000
  },
  {
    adcode: 411202,
    lng: 111.19487,
    lat: 34.77812,
    name: "湖滨区",
    level: "district",
    parent: 411200
  },
  {
    adcode: 411203,
    lng: 111.103851,
    lat: 34.720244,
    name: "陕州区",
    level: "district",
    parent: 411200
  },
  {
    adcode: 411221,
    lng: 111.762992,
    lat: 34.763487,
    name: "渑池县",
    level: "district",
    parent: 411200
  },
  {
    adcode: 411224,
    lng: 111.052649,
    lat: 34.053995,
    name: "卢氏县",
    level: "district",
    parent: 411200
  },
  {
    adcode: 411281,
    lng: 111.869417,
    lat: 34.746868,
    name: "义马市",
    level: "district",
    parent: 411200
  },
  {
    adcode: 411282,
    lng: 110.88577,
    lat: 34.521264,
    name: "灵宝市",
    level: "district",
    parent: 411200
  },
  {
    adcode: 411300,
    lng: 112.540918,
    lat: 32.999082,
    name: "南阳市",
    level: "city",
    parent: 410000
  },
  {
    adcode: 411302,
    lng: 112.544591,
    lat: 32.994857,
    name: "宛城区",
    level: "district",
    parent: 411300
  },
  {
    adcode: 411303,
    lng: 112.528789,
    lat: 32.989877,
    name: "卧龙区",
    level: "district",
    parent: 411300
  },
  {
    adcode: 411321,
    lng: 112.435583,
    lat: 33.488617,
    name: "南召县",
    level: "district",
    parent: 411300
  },
  {
    adcode: 411322,
    lng: 113.010933,
    lat: 33.255138,
    name: "方城县",
    level: "district",
    parent: 411300
  },
  {
    adcode: 411323,
    lng: 111.485772,
    lat: 33.302981,
    name: "西峡县",
    level: "district",
    parent: 411300
  },
  {
    adcode: 411324,
    lng: 112.232722,
    lat: 33.036651,
    name: "镇平县",
    level: "district",
    parent: 411300
  },
  {
    adcode: 411325,
    lng: 111.843801,
    lat: 33.046358,
    name: "内乡县",
    level: "district",
    parent: 411300
  },
  {
    adcode: 411326,
    lng: 111.489026,
    lat: 33.136106,
    name: "淅川县",
    level: "district",
    parent: 411300
  },
  {
    adcode: 411327,
    lng: 112.938279,
    lat: 33.056126,
    name: "社旗县",
    level: "district",
    parent: 411300
  },
  {
    adcode: 411328,
    lng: 112.838492,
    lat: 32.687892,
    name: "唐河县",
    level: "district",
    parent: 411300
  },
  {
    adcode: 411329,
    lng: 112.365624,
    lat: 32.524006,
    name: "新野县",
    level: "district",
    parent: 411300
  },
  {
    adcode: 411330,
    lng: 113.406059,
    lat: 32.367153,
    name: "桐柏县",
    level: "district",
    parent: 411300
  },
  {
    adcode: 411381,
    lng: 112.092716,
    lat: 32.681642,
    name: "邓州市",
    level: "district",
    parent: 411300
  },
  {
    adcode: 411400,
    lng: 115.650497,
    lat: 34.437054,
    name: "商丘市",
    level: "city",
    parent: 410000
  },
  {
    adcode: 411402,
    lng: 115.65459,
    lat: 34.436553,
    name: "梁园区",
    level: "district",
    parent: 411400
  },
  {
    adcode: 411403,
    lng: 115.653813,
    lat: 34.390536,
    name: "睢阳区",
    level: "district",
    parent: 411400
  },
  {
    adcode: 411421,
    lng: 115.148146,
    lat: 34.648455,
    name: "民权县",
    level: "district",
    parent: 411400
  },
  {
    adcode: 411422,
    lng: 115.070109,
    lat: 34.428433,
    name: "睢县",
    level: "district",
    parent: 411400
  },
  {
    adcode: 411423,
    lng: 115.320055,
    lat: 34.449299,
    name: "宁陵县",
    level: "district",
    parent: 411400
  },
  {
    adcode: 411424,
    lng: 115.307433,
    lat: 34.075277,
    name: "柘城县",
    level: "district",
    parent: 411400
  },
  {
    adcode: 411425,
    lng: 115.863811,
    lat: 34.399634,
    name: "虞城县",
    level: "district",
    parent: 411400
  },
  {
    adcode: 411426,
    lng: 116.13989,
    lat: 34.240894,
    name: "夏邑县",
    level: "district",
    parent: 411400
  },
  {
    adcode: 411481,
    lng: 116.449672,
    lat: 33.931318,
    name: "永城市",
    level: "district",
    parent: 411400
  },
  {
    adcode: 411500,
    lng: 114.075031,
    lat: 32.123274,
    name: "信阳市",
    level: "city",
    parent: 410000
  },
  {
    adcode: 411502,
    lng: 114.075031,
    lat: 32.123274,
    name: "浉河区",
    level: "district",
    parent: 411500
  },
  {
    adcode: 411503,
    lng: 114.126027,
    lat: 32.098395,
    name: "平桥区",
    level: "district",
    parent: 411500
  },
  {
    adcode: 411521,
    lng: 114.533414,
    lat: 32.203206,
    name: "罗山县",
    level: "district",
    parent: 411500
  },
  {
    adcode: 411522,
    lng: 114.903577,
    lat: 32.010398,
    name: "光山县",
    level: "district",
    parent: 411500
  },
  {
    adcode: 411523,
    lng: 114.87705,
    lat: 31.63515,
    name: "新县",
    level: "district",
    parent: 411500
  },
  {
    adcode: 411524,
    lng: 115.406297,
    lat: 31.799982,
    name: "商城县",
    level: "district",
    parent: 411500
  },
  {
    adcode: 411525,
    lng: 115.667328,
    lat: 32.183074,
    name: "固始县",
    level: "district",
    parent: 411500
  },
  {
    adcode: 411526,
    lng: 115.050123,
    lat: 32.134024,
    name: "潢川县",
    level: "district",
    parent: 411500
  },
  {
    adcode: 411527,
    lng: 115.415451,
    lat: 32.452639,
    name: "淮滨县",
    level: "district",
    parent: 411500
  },
  {
    adcode: 411528,
    lng: 114.740713,
    lat: 32.344744,
    name: "息县",
    level: "district",
    parent: 411500
  },
  {
    adcode: 411600,
    lng: 114.649653,
    lat: 33.620357,
    name: "周口市",
    level: "city",
    parent: 410000
  },
  {
    adcode: 411602,
    lng: 114.652136,
    lat: 33.614836,
    name: "川汇区",
    level: "district",
    parent: 411600
  },
  {
    adcode: 411603,
    lng: 114.870166,
    lat: 33.732547,
    name: "淮阳区",
    level: "district",
    parent: 411600
  },
  {
    adcode: 411621,
    lng: 114.392008,
    lat: 34.054061,
    name: "扶沟县",
    level: "district",
    parent: 411600
  },
  {
    adcode: 411622,
    lng: 114.530067,
    lat: 33.784378,
    name: "西华县",
    level: "district",
    parent: 411600
  },
  {
    adcode: 411623,
    lng: 114.60927,
    lat: 33.543845,
    name: "商水县",
    level: "district",
    parent: 411600
  },
  {
    adcode: 411624,
    lng: 115.078375,
    lat: 33.395514,
    name: "沈丘县",
    level: "district",
    parent: 411600
  },
  {
    adcode: 411625,
    lng: 115.189,
    lat: 33.643852,
    name: "郸城县",
    level: "district",
    parent: 411600
  },
  {
    adcode: 411627,
    lng: 114.853834,
    lat: 34.065312,
    name: "太康县",
    level: "district",
    parent: 411600
  },
  {
    adcode: 411628,
    lng: 115.486386,
    lat: 33.861067,
    name: "鹿邑县",
    level: "district",
    parent: 411600
  },
  {
    adcode: 411681,
    lng: 114.899521,
    lat: 33.443085,
    name: "项城市",
    level: "district",
    parent: 411600
  },
  {
    adcode: 411700,
    lng: 114.024736,
    lat: 32.980169,
    name: "驻马店市",
    level: "city",
    parent: 410000
  },
  {
    adcode: 411702,
    lng: 114.029149,
    lat: 32.977559,
    name: "驿城区",
    level: "district",
    parent: 411700
  },
  {
    adcode: 411721,
    lng: 114.026864,
    lat: 33.382315,
    name: "西平县",
    level: "district",
    parent: 411700
  },
  {
    adcode: 411722,
    lng: 114.266892,
    lat: 33.264719,
    name: "上蔡县",
    level: "district",
    parent: 411700
  },
  {
    adcode: 411723,
    lng: 114.637105,
    lat: 32.955626,
    name: "平舆县",
    level: "district",
    parent: 411700
  },
  {
    adcode: 411724,
    lng: 114.38948,
    lat: 32.601826,
    name: "正阳县",
    level: "district",
    parent: 411700
  },
  {
    adcode: 411725,
    lng: 114.026679,
    lat: 32.801538,
    name: "确山县",
    level: "district",
    parent: 411700
  },
  {
    adcode: 411726,
    lng: 113.32605,
    lat: 32.725129,
    name: "泌阳县",
    level: "district",
    parent: 411700
  },
  {
    adcode: 411727,
    lng: 114.359495,
    lat: 33.004535,
    name: "汝南县",
    level: "district",
    parent: 411700
  },
  {
    adcode: 411728,
    lng: 114.00371,
    lat: 33.14698,
    name: "遂平县",
    level: "district",
    parent: 411700
  },
  {
    adcode: 411729,
    lng: 114.975246,
    lat: 32.749948,
    name: "新蔡县",
    level: "district",
    parent: 411700
  },
  {
    adcode: 419001,
    lng: 112.590047,
    lat: 35.090378,
    name: "济源市",
    level: "city",
    parent: 410000
  },
  {
    adcode: 420000,
    lng: 114.298572,
    lat: 30.584355,
    name: "湖北省",
    level: "province",
    parent: 100000
  },
  {
    adcode: 420100,
    lng: 114.298572,
    lat: 30.584355,
    name: "武汉市",
    level: "city",
    parent: 420000
  },
  {
    adcode: 420102,
    lng: 114.30304,
    lat: 30.594911,
    name: "江岸区",
    level: "district",
    parent: 420100
  },
  {
    adcode: 420103,
    lng: 114.283109,
    lat: 30.578771,
    name: "江汉区",
    level: "district",
    parent: 420100
  },
  {
    adcode: 420104,
    lng: 114.264568,
    lat: 30.57061,
    name: "硚口区",
    level: "district",
    parent: 420100
  },
  {
    adcode: 420105,
    lng: 114.265807,
    lat: 30.549326,
    name: "汉阳区",
    level: "district",
    parent: 420100
  },
  {
    adcode: 420106,
    lng: 114.307344,
    lat: 30.546536,
    name: "武昌区",
    level: "district",
    parent: 420100
  },
  {
    adcode: 420107,
    lng: 114.39707,
    lat: 30.634215,
    name: "青山区",
    level: "district",
    parent: 420100
  },
  {
    adcode: 420111,
    lng: 114.400718,
    lat: 30.504259,
    name: "洪山区",
    level: "district",
    parent: 420100
  },
  {
    adcode: 420112,
    lng: 114.142483,
    lat: 30.622467,
    name: "东西湖区",
    level: "district",
    parent: 420100
  },
  {
    adcode: 420113,
    lng: 114.08124,
    lat: 30.309637,
    name: "汉南区",
    level: "district",
    parent: 420100
  },
  {
    adcode: 420114,
    lng: 114.029341,
    lat: 30.582186,
    name: "蔡甸区",
    level: "district",
    parent: 420100
  },
  {
    adcode: 420115,
    lng: 114.313961,
    lat: 30.349045,
    name: "江夏区",
    level: "district",
    parent: 420100
  },
  {
    adcode: 420116,
    lng: 114.374025,
    lat: 30.874155,
    name: "黄陂区",
    level: "district",
    parent: 420100
  },
  {
    adcode: 420117,
    lng: 114.802108,
    lat: 30.842149,
    name: "新洲区",
    level: "district",
    parent: 420100
  },
  {
    adcode: 420200,
    lng: 115.077048,
    lat: 30.220074,
    name: "黄石市",
    level: "city",
    parent: 420000
  },
  {
    adcode: 420202,
    lng: 115.090164,
    lat: 30.212086,
    name: "黄石港区",
    level: "district",
    parent: 420200
  },
  {
    adcode: 420203,
    lng: 115.093354,
    lat: 30.205365,
    name: "西塞山区",
    level: "district",
    parent: 420200
  },
  {
    adcode: 420204,
    lng: 114.975755,
    lat: 30.177845,
    name: "下陆区",
    level: "district",
    parent: 420200
  },
  {
    adcode: 420205,
    lng: 114.901366,
    lat: 30.20601,
    name: "铁山区",
    level: "district",
    parent: 420200
  },
  {
    adcode: 420222,
    lng: 115.212883,
    lat: 29.841572,
    name: "阳新县",
    level: "district",
    parent: 420200
  },
  {
    adcode: 420281,
    lng: 114.974842,
    lat: 30.098804,
    name: "大冶市",
    level: "district",
    parent: 420200
  },
  {
    adcode: 420300,
    lng: 110.787916,
    lat: 32.646907,
    name: "十堰市",
    level: "city",
    parent: 420000
  },
  {
    adcode: 420302,
    lng: 110.78621,
    lat: 32.644463,
    name: "茅箭区",
    level: "district",
    parent: 420300
  },
  {
    adcode: 420303,
    lng: 110.772365,
    lat: 32.652516,
    name: "张湾区",
    level: "district",
    parent: 420300
  },
  {
    adcode: 420304,
    lng: 110.812099,
    lat: 32.838267,
    name: "郧阳区",
    level: "district",
    parent: 420300
  },
  {
    adcode: 420322,
    lng: 110.426472,
    lat: 32.991457,
    name: "郧西县",
    level: "district",
    parent: 420300
  },
  {
    adcode: 420323,
    lng: 110.2296,
    lat: 32.22586,
    name: "竹山县",
    level: "district",
    parent: 420300
  },
  {
    adcode: 420324,
    lng: 109.717196,
    lat: 32.315342,
    name: "竹溪县",
    level: "district",
    parent: 420300
  },
  {
    adcode: 420325,
    lng: 110.741966,
    lat: 32.055002,
    name: "房县",
    level: "district",
    parent: 420300
  },
  {
    adcode: 420381,
    lng: 111.513793,
    lat: 32.538839,
    name: "丹江口市",
    level: "district",
    parent: 420300
  },
  {
    adcode: 420500,
    lng: 111.290843,
    lat: 30.702636,
    name: "宜昌市",
    level: "city",
    parent: 420000
  },
  {
    adcode: 420502,
    lng: 111.295468,
    lat: 30.702476,
    name: "西陵区",
    level: "district",
    parent: 420500
  },
  {
    adcode: 420503,
    lng: 111.307215,
    lat: 30.679053,
    name: "伍家岗区",
    level: "district",
    parent: 420500
  },
  {
    adcode: 420504,
    lng: 111.268163,
    lat: 30.692322,
    name: "点军区",
    level: "district",
    parent: 420500
  },
  {
    adcode: 420505,
    lng: 111.427642,
    lat: 30.530744,
    name: "猇亭区",
    level: "district",
    parent: 420500
  },
  {
    adcode: 420506,
    lng: 111.326747,
    lat: 30.770199,
    name: "夷陵区",
    level: "district",
    parent: 420500
  },
  {
    adcode: 420525,
    lng: 111.64331,
    lat: 31.059626,
    name: "远安县",
    level: "district",
    parent: 420500
  },
  {
    adcode: 420526,
    lng: 110.754499,
    lat: 31.34795,
    name: "兴山县",
    level: "district",
    parent: 420500
  },
  {
    adcode: 420527,
    lng: 110.976785,
    lat: 30.823908,
    name: "秭归县",
    level: "district",
    parent: 420500
  },
  {
    adcode: 420528,
    lng: 111.198475,
    lat: 30.466534,
    name: "长阳土家族自治县",
    level: "district",
    parent: 420500
  },
  {
    adcode: 420529,
    lng: 110.674938,
    lat: 30.199252,
    name: "五峰土家族自治县",
    level: "district",
    parent: 420500
  },
  {
    adcode: 420581,
    lng: 111.454367,
    lat: 30.387234,
    name: "宜都市",
    level: "district",
    parent: 420500
  },
  {
    adcode: 420582,
    lng: 111.793419,
    lat: 30.824492,
    name: "当阳市",
    level: "district",
    parent: 420500
  },
  {
    adcode: 420583,
    lng: 111.751799,
    lat: 30.425364,
    name: "枝江市",
    level: "district",
    parent: 420500
  },
  {
    adcode: 420600,
    lng: 112.144146,
    lat: 32.042426,
    name: "襄阳市",
    level: "city",
    parent: 420000
  },
  {
    adcode: 420602,
    lng: 112.150327,
    lat: 32.015088,
    name: "襄城区",
    level: "district",
    parent: 420600
  },
  {
    adcode: 420606,
    lng: 112.13957,
    lat: 32.058589,
    name: "樊城区",
    level: "district",
    parent: 420600
  },
  {
    adcode: 420607,
    lng: 112.197378,
    lat: 32.085517,
    name: "襄州区",
    level: "district",
    parent: 420600
  },
  {
    adcode: 420624,
    lng: 111.844424,
    lat: 31.77692,
    name: "南漳县",
    level: "district",
    parent: 420600
  },
  {
    adcode: 420625,
    lng: 111.640147,
    lat: 32.262676,
    name: "谷城县",
    level: "district",
    parent: 420600
  },
  {
    adcode: 420626,
    lng: 111.262235,
    lat: 31.873507,
    name: "保康县",
    level: "district",
    parent: 420600
  },
  {
    adcode: 420682,
    lng: 111.675732,
    lat: 32.385438,
    name: "老河口市",
    level: "district",
    parent: 420600
  },
  {
    adcode: 420683,
    lng: 112.765268,
    lat: 32.123083,
    name: "枣阳市",
    level: "district",
    parent: 420600
  },
  {
    adcode: 420684,
    lng: 112.261441,
    lat: 31.709203,
    name: "宜城市",
    level: "district",
    parent: 420600
  },
  {
    adcode: 420700,
    lng: 114.890593,
    lat: 30.396536,
    name: "鄂州市",
    level: "city",
    parent: 420000
  },
  {
    adcode: 420702,
    lng: 114.681967,
    lat: 30.098191,
    name: "梁子湖区",
    level: "district",
    parent: 420700
  },
  {
    adcode: 420703,
    lng: 114.74148,
    lat: 30.534468,
    name: "华容区",
    level: "district",
    parent: 420700
  },
  {
    adcode: 420704,
    lng: 114.890012,
    lat: 30.39669,
    name: "鄂城区",
    level: "district",
    parent: 420700
  },
  {
    adcode: 420800,
    lng: 112.204251,
    lat: 31.03542,
    name: "荆门市",
    level: "city",
    parent: 420000
  },
  {
    adcode: 420802,
    lng: 112.204804,
    lat: 31.033461,
    name: "东宝区",
    level: "district",
    parent: 420800
  },
  {
    adcode: 420804,
    lng: 112.198413,
    lat: 30.980798,
    name: "掇刀区",
    level: "district",
    parent: 420800
  },
  {
    adcode: 420822,
    lng: 112.595218,
    lat: 30.70359,
    name: "沙洋县",
    level: "district",
    parent: 420800
  },
  {
    adcode: 420881,
    lng: 112.587267,
    lat: 31.165573,
    name: "钟祥市",
    level: "district",
    parent: 420800
  },
  {
    adcode: 420882,
    lng: 113.114595,
    lat: 31.022457,
    name: "京山市",
    level: "district",
    parent: 420800
  },
  {
    adcode: 420900,
    lng: 113.926655,
    lat: 30.926423,
    name: "孝感市",
    level: "city",
    parent: 420000
  },
  {
    adcode: 420902,
    lng: 113.925849,
    lat: 30.925966,
    name: "孝南区",
    level: "district",
    parent: 420900
  },
  {
    adcode: 420921,
    lng: 113.988964,
    lat: 31.251618,
    name: "孝昌县",
    level: "district",
    parent: 420900
  },
  {
    adcode: 420922,
    lng: 114.126249,
    lat: 31.565483,
    name: "大悟县",
    level: "district",
    parent: 420900
  },
  {
    adcode: 420923,
    lng: 113.750616,
    lat: 31.021691,
    name: "云梦县",
    level: "district",
    parent: 420900
  },
  {
    adcode: 420981,
    lng: 113.573842,
    lat: 30.939038,
    name: "应城市",
    level: "district",
    parent: 420900
  },
  {
    adcode: 420982,
    lng: 113.690401,
    lat: 31.26174,
    name: "安陆市",
    level: "district",
    parent: 420900
  },
  {
    adcode: 420984,
    lng: 113.835301,
    lat: 30.652165,
    name: "汉川市",
    level: "district",
    parent: 420900
  },
  {
    adcode: 421000,
    lng: 112.23813,
    lat: 30.326857,
    name: "荆州市",
    level: "city",
    parent: 420000
  },
  {
    adcode: 421002,
    lng: 112.257433,
    lat: 30.315895,
    name: "沙市区",
    level: "district",
    parent: 421000
  },
  {
    adcode: 421003,
    lng: 112.195354,
    lat: 30.350674,
    name: "荆州区",
    level: "district",
    parent: 421000
  },
  {
    adcode: 421022,
    lng: 112.230179,
    lat: 30.059065,
    name: "公安县",
    level: "district",
    parent: 421000
  },
  {
    adcode: 421023,
    lng: 112.904344,
    lat: 29.820079,
    name: "监利市",
    level: "district",
    parent: 421000
  },
  {
    adcode: 421024,
    lng: 112.41735,
    lat: 30.033919,
    name: "江陵县",
    level: "district",
    parent: 421000
  },
  {
    adcode: 421081,
    lng: 112.40887,
    lat: 29.716437,
    name: "石首市",
    level: "district",
    parent: 421000
  },
  {
    adcode: 421083,
    lng: 113.470304,
    lat: 29.81297,
    name: "洪湖市",
    level: "district",
    parent: 421000
  },
  {
    adcode: 421087,
    lng: 111.77818,
    lat: 30.176037,
    name: "松滋市",
    level: "district",
    parent: 421000
  },
  {
    adcode: 421100,
    lng: 114.879365,
    lat: 30.447711,
    name: "黄冈市",
    level: "city",
    parent: 420000
  },
  {
    adcode: 421102,
    lng: 114.878934,
    lat: 30.447435,
    name: "黄州区",
    level: "district",
    parent: 421100
  },
  {
    adcode: 421121,
    lng: 114.872029,
    lat: 30.63569,
    name: "团风县",
    level: "district",
    parent: 421100
  },
  {
    adcode: 421122,
    lng: 114.615095,
    lat: 31.284777,
    name: "红安县",
    level: "district",
    parent: 421100
  },
  {
    adcode: 421123,
    lng: 115.398984,
    lat: 30.781679,
    name: "罗田县",
    level: "district",
    parent: 421100
  },
  {
    adcode: 421124,
    lng: 115.67753,
    lat: 30.735794,
    name: "英山县",
    level: "district",
    parent: 421100
  },
  {
    adcode: 421125,
    lng: 115.26344,
    lat: 30.454837,
    name: "浠水县",
    level: "district",
    parent: 421100
  },
  {
    adcode: 421126,
    lng: 115.433964,
    lat: 30.234927,
    name: "蕲春县",
    level: "district",
    parent: 421100
  },
  {
    adcode: 421127,
    lng: 115.942548,
    lat: 30.075113,
    name: "黄梅县",
    level: "district",
    parent: 421100
  },
  {
    adcode: 421181,
    lng: 115.02541,
    lat: 31.177906,
    name: "麻城市",
    level: "district",
    parent: 421100
  },
  {
    adcode: 421182,
    lng: 115.56242,
    lat: 29.849342,
    name: "武穴市",
    level: "district",
    parent: 421100
  },
  {
    adcode: 421200,
    lng: 114.328963,
    lat: 29.832798,
    name: "咸宁市",
    level: "city",
    parent: 420000
  },
  {
    adcode: 421202,
    lng: 114.333894,
    lat: 29.824716,
    name: "咸安区",
    level: "district",
    parent: 421200
  },
  {
    adcode: 421221,
    lng: 113.921547,
    lat: 29.973363,
    name: "嘉鱼县",
    level: "district",
    parent: 421200
  },
  {
    adcode: 421222,
    lng: 113.814131,
    lat: 29.246076,
    name: "通城县",
    level: "district",
    parent: 421200
  },
  {
    adcode: 421223,
    lng: 114.049958,
    lat: 29.54101,
    name: "崇阳县",
    level: "district",
    parent: 421200
  },
  {
    adcode: 421224,
    lng: 114.493163,
    lat: 29.604455,
    name: "通山县",
    level: "district",
    parent: 421200
  },
  {
    adcode: 421281,
    lng: 113.88366,
    lat: 29.716879,
    name: "赤壁市",
    level: "district",
    parent: 421200
  },
  {
    adcode: 421300,
    lng: 113.37377,
    lat: 31.717497,
    name: "随州市",
    level: "city",
    parent: 420000
  },
  {
    adcode: 421303,
    lng: 113.374519,
    lat: 31.717521,
    name: "曾都区",
    level: "district",
    parent: 421300
  },
  {
    adcode: 421321,
    lng: 113.301384,
    lat: 31.854246,
    name: "随县",
    level: "district",
    parent: 421300
  },
  {
    adcode: 421381,
    lng: 113.826601,
    lat: 31.617731,
    name: "广水市",
    level: "district",
    parent: 421300
  },
  {
    adcode: 422800,
    lng: 109.48699,
    lat: 30.283114,
    name: "恩施土家族苗族自治州",
    level: "city",
    parent: 420000
  },
  {
    adcode: 422801,
    lng: 109.486761,
    lat: 30.282406,
    name: "恩施市",
    level: "district",
    parent: 422800
  },
  {
    adcode: 422802,
    lng: 108.943491,
    lat: 30.294247,
    name: "利川市",
    level: "district",
    parent: 422800
  },
  {
    adcode: 422822,
    lng: 109.723822,
    lat: 30.601632,
    name: "建始县",
    level: "district",
    parent: 422800
  },
  {
    adcode: 422823,
    lng: 110.336665,
    lat: 31.041403,
    name: "巴东县",
    level: "district",
    parent: 422800
  },
  {
    adcode: 422825,
    lng: 109.482819,
    lat: 29.98867,
    name: "宣恩县",
    level: "district",
    parent: 422800
  },
  {
    adcode: 422826,
    lng: 109.15041,
    lat: 29.678967,
    name: "咸丰县",
    level: "district",
    parent: 422800
  },
  {
    adcode: 422827,
    lng: 109.408328,
    lat: 29.506945,
    name: "来凤县",
    level: "district",
    parent: 422800
  },
  {
    adcode: 422828,
    lng: 110.033699,
    lat: 29.887298,
    name: "鹤峰县",
    level: "district",
    parent: 422800
  },
  {
    adcode: 429004,
    lng: 113.453974,
    lat: 30.364953,
    name: "仙桃市",
    level: "city",
    parent: 420000
  },
  {
    adcode: 429005,
    lng: 112.896866,
    lat: 30.421215,
    name: "潜江市",
    level: "city",
    parent: 420000
  },
  {
    adcode: 429006,
    lng: 113.165862,
    lat: 30.653061,
    name: "天门市",
    level: "city",
    parent: 420000
  },
  {
    adcode: 429021,
    lng: 110.671525,
    lat: 31.744449,
    name: "神农架林区",
    level: "city",
    parent: 420000
  },
  {
    adcode: 430000,
    lng: 112.982279,
    lat: 28.19409,
    name: "湖南省",
    level: "province",
    parent: 100000
  },
  {
    adcode: 430100,
    lng: 112.982279,
    lat: 28.19409,
    name: "长沙市",
    level: "city",
    parent: 430000
  },
  {
    adcode: 430102,
    lng: 112.988094,
    lat: 28.193106,
    name: "芙蓉区",
    level: "district",
    parent: 430100
  },
  {
    adcode: 430103,
    lng: 112.97307,
    lat: 28.192375,
    name: "天心区",
    level: "district",
    parent: 430100
  },
  {
    adcode: 430104,
    lng: 112.911591,
    lat: 28.213044,
    name: "岳麓区",
    level: "district",
    parent: 430100
  },
  {
    adcode: 430105,
    lng: 112.985525,
    lat: 28.201336,
    name: "开福区",
    level: "district",
    parent: 430100
  },
  {
    adcode: 430111,
    lng: 113.016337,
    lat: 28.109937,
    name: "雨花区",
    level: "district",
    parent: 430100
  },
  {
    adcode: 430112,
    lng: 112.819549,
    lat: 28.347458,
    name: "望城区",
    level: "district",
    parent: 430100
  },
  {
    adcode: 430121,
    lng: 113.080098,
    lat: 28.237888,
    name: "长沙县",
    level: "district",
    parent: 430100
  },
  {
    adcode: 430181,
    lng: 113.633301,
    lat: 28.141112,
    name: "浏阳市",
    level: "district",
    parent: 430100
  },
  {
    adcode: 430182,
    lng: 112.553182,
    lat: 28.253928,
    name: "宁乡市",
    level: "district",
    parent: 430100
  },
  {
    adcode: 430200,
    lng: 113.151737,
    lat: 27.835806,
    name: "株洲市",
    level: "city",
    parent: 430000
  },
  {
    adcode: 430202,
    lng: 113.162548,
    lat: 27.833036,
    name: "荷塘区",
    level: "district",
    parent: 430200
  },
  {
    adcode: 430203,
    lng: 113.155169,
    lat: 27.827246,
    name: "芦淞区",
    level: "district",
    parent: 430200
  },
  {
    adcode: 430204,
    lng: 113.11295,
    lat: 27.871945,
    name: "石峰区",
    level: "district",
    parent: 430200
  },
  {
    adcode: 430211,
    lng: 113.136252,
    lat: 27.826909,
    name: "天元区",
    level: "district",
    parent: 430200
  },
  {
    adcode: 430212,
    lng: 113.146175,
    lat: 27.705844,
    name: "渌口区",
    level: "district",
    parent: 430200
  },
  {
    adcode: 430223,
    lng: 113.345774,
    lat: 27.000071,
    name: "攸县",
    level: "district",
    parent: 430200
  },
  {
    adcode: 430224,
    lng: 113.546509,
    lat: 26.789534,
    name: "茶陵县",
    level: "district",
    parent: 430200
  },
  {
    adcode: 430225,
    lng: 113.776884,
    lat: 26.489459,
    name: "炎陵县",
    level: "district",
    parent: 430200
  },
  {
    adcode: 430281,
    lng: 113.507157,
    lat: 27.657873,
    name: "醴陵市",
    level: "district",
    parent: 430200
  },
  {
    adcode: 430300,
    lng: 112.944052,
    lat: 27.82973,
    name: "湘潭市",
    level: "city",
    parent: 430000
  },
  {
    adcode: 430302,
    lng: 112.907427,
    lat: 27.86077,
    name: "雨湖区",
    level: "district",
    parent: 430300
  },
  {
    adcode: 430304,
    lng: 112.927707,
    lat: 27.828854,
    name: "岳塘区",
    level: "district",
    parent: 430300
  },
  {
    adcode: 430321,
    lng: 112.952829,
    lat: 27.778601,
    name: "湘潭县",
    level: "district",
    parent: 430300
  },
  {
    adcode: 430381,
    lng: 112.525217,
    lat: 27.734918,
    name: "湘乡市",
    level: "district",
    parent: 430300
  },
  {
    adcode: 430382,
    lng: 112.52848,
    lat: 27.922682,
    name: "韶山市",
    level: "district",
    parent: 430300
  },
  {
    adcode: 430400,
    lng: 112.607693,
    lat: 26.900358,
    name: "衡阳市",
    level: "city",
    parent: 430000
  },
  {
    adcode: 430405,
    lng: 112.626324,
    lat: 26.891063,
    name: "珠晖区",
    level: "district",
    parent: 430400
  },
  {
    adcode: 430406,
    lng: 112.612241,
    lat: 26.893694,
    name: "雁峰区",
    level: "district",
    parent: 430400
  },
  {
    adcode: 430407,
    lng: 112.607635,
    lat: 26.903908,
    name: "石鼓区",
    level: "district",
    parent: 430400
  },
  {
    adcode: 430408,
    lng: 112.570608,
    lat: 26.89087,
    name: "蒸湘区",
    level: "district",
    parent: 430400
  },
  {
    adcode: 430412,
    lng: 112.734147,
    lat: 27.240536,
    name: "南岳区",
    level: "district",
    parent: 430400
  },
  {
    adcode: 430421,
    lng: 112.379643,
    lat: 26.962388,
    name: "衡阳县",
    level: "district",
    parent: 430400
  },
  {
    adcode: 430422,
    lng: 112.677459,
    lat: 26.739973,
    name: "衡南县",
    level: "district",
    parent: 430400
  },
  {
    adcode: 430423,
    lng: 112.86971,
    lat: 27.234808,
    name: "衡山县",
    level: "district",
    parent: 430400
  },
  {
    adcode: 430424,
    lng: 112.950412,
    lat: 27.083531,
    name: "衡东县",
    level: "district",
    parent: 430400
  },
  {
    adcode: 430426,
    lng: 112.111192,
    lat: 26.787109,
    name: "祁东县",
    level: "district",
    parent: 430400
  },
  {
    adcode: 430481,
    lng: 112.847215,
    lat: 26.414162,
    name: "耒阳市",
    level: "district",
    parent: 430400
  },
  {
    adcode: 430482,
    lng: 112.396821,
    lat: 26.406773,
    name: "常宁市",
    level: "district",
    parent: 430400
  },
  {
    adcode: 430500,
    lng: 111.46923,
    lat: 27.237842,
    name: "邵阳市",
    level: "city",
    parent: 430000
  },
  {
    adcode: 430502,
    lng: 111.479756,
    lat: 27.240001,
    name: "双清区",
    level: "district",
    parent: 430500
  },
  {
    adcode: 430503,
    lng: 111.462968,
    lat: 27.233593,
    name: "大祥区",
    level: "district",
    parent: 430500
  },
  {
    adcode: 430511,
    lng: 111.452315,
    lat: 27.245688,
    name: "北塔区",
    level: "district",
    parent: 430500
  },
  {
    adcode: 430522,
    lng: 111.459762,
    lat: 27.311429,
    name: "新邵县",
    level: "district",
    parent: 430500
  },
  {
    adcode: 430523,
    lng: 111.2757,
    lat: 26.989713,
    name: "邵阳县",
    level: "district",
    parent: 430500
  },
  {
    adcode: 430524,
    lng: 111.038785,
    lat: 27.116002,
    name: "隆回县",
    level: "district",
    parent: 430500
  },
  {
    adcode: 430525,
    lng: 110.579212,
    lat: 27.062286,
    name: "洞口县",
    level: "district",
    parent: 430500
  },
  {
    adcode: 430527,
    lng: 110.155075,
    lat: 26.580622,
    name: "绥宁县",
    level: "district",
    parent: 430500
  },
  {
    adcode: 430528,
    lng: 110.859115,
    lat: 26.438912,
    name: "新宁县",
    level: "district",
    parent: 430500
  },
  {
    adcode: 430529,
    lng: 110.313226,
    lat: 26.363575,
    name: "城步苗族自治县",
    level: "district",
    parent: 430500
  },
  {
    adcode: 430581,
    lng: 110.636804,
    lat: 26.732086,
    name: "武冈市",
    level: "district",
    parent: 430500
  },
  {
    adcode: 430582,
    lng: 111.743168,
    lat: 27.257273,
    name: "邵东市",
    level: "district",
    parent: 430500
  },
  {
    adcode: 430600,
    lng: 113.132855,
    lat: 29.37029,
    name: "岳阳市",
    level: "city",
    parent: 430000
  },
  {
    adcode: 430602,
    lng: 113.120751,
    lat: 29.366784,
    name: "岳阳楼区",
    level: "district",
    parent: 430600
  },
  {
    adcode: 430603,
    lng: 113.27387,
    lat: 29.473395,
    name: "云溪区",
    level: "district",
    parent: 430600
  },
  {
    adcode: 430611,
    lng: 113.004082,
    lat: 29.438062,
    name: "君山区",
    level: "district",
    parent: 430600
  },
  {
    adcode: 430621,
    lng: 113.116073,
    lat: 29.144843,
    name: "岳阳县",
    level: "district",
    parent: 430600
  },
  {
    adcode: 430623,
    lng: 112.559369,
    lat: 29.524107,
    name: "华容县",
    level: "district",
    parent: 430600
  },
  {
    adcode: 430624,
    lng: 112.889748,
    lat: 28.677498,
    name: "湘阴县",
    level: "district",
    parent: 430600
  },
  {
    adcode: 430626,
    lng: 113.593751,
    lat: 28.701523,
    name: "平江县",
    level: "district",
    parent: 430600
  },
  {
    adcode: 430681,
    lng: 113.079419,
    lat: 28.803149,
    name: "汨罗市",
    level: "district",
    parent: 430600
  },
  {
    adcode: 430682,
    lng: 113.450809,
    lat: 29.471594,
    name: "临湘市",
    level: "district",
    parent: 430600
  },
  {
    adcode: 430700,
    lng: 111.691347,
    lat: 29.040225,
    name: "常德市",
    level: "city",
    parent: 430000
  },
  {
    adcode: 430702,
    lng: 111.690718,
    lat: 29.040477,
    name: "武陵区",
    level: "district",
    parent: 430700
  },
  {
    adcode: 430703,
    lng: 111.685327,
    lat: 29.014426,
    name: "鼎城区",
    level: "district",
    parent: 430700
  },
  {
    adcode: 430721,
    lng: 112.172289,
    lat: 29.414483,
    name: "安乡县",
    level: "district",
    parent: 430700
  },
  {
    adcode: 430722,
    lng: 111.968506,
    lat: 28.907319,
    name: "汉寿县",
    level: "district",
    parent: 430700
  },
  {
    adcode: 430723,
    lng: 111.761682,
    lat: 29.64264,
    name: "澧县",
    level: "district",
    parent: 430700
  },
  {
    adcode: 430724,
    lng: 111.645602,
    lat: 29.443217,
    name: "临澧县",
    level: "district",
    parent: 430700
  },
  {
    adcode: 430725,
    lng: 111.484503,
    lat: 28.902734,
    name: "桃源县",
    level: "district",
    parent: 430700
  },
  {
    adcode: 430726,
    lng: 111.379087,
    lat: 29.584703,
    name: "石门县",
    level: "district",
    parent: 430700
  },
  {
    adcode: 430781,
    lng: 111.879609,
    lat: 29.630867,
    name: "津市市",
    level: "district",
    parent: 430700
  },
  {
    adcode: 430800,
    lng: 110.479921,
    lat: 29.127401,
    name: "张家界市",
    level: "city",
    parent: 430000
  },
  {
    adcode: 430802,
    lng: 110.484559,
    lat: 29.125961,
    name: "永定区",
    level: "district",
    parent: 430800
  },
  {
    adcode: 430811,
    lng: 110.54758,
    lat: 29.347827,
    name: "武陵源区",
    level: "district",
    parent: 430800
  },
  {
    adcode: 430821,
    lng: 111.132702,
    lat: 29.423876,
    name: "慈利县",
    level: "district",
    parent: 430800
  },
  {
    adcode: 430822,
    lng: 110.164039,
    lat: 29.399939,
    name: "桑植县",
    level: "district",
    parent: 430800
  },
  {
    adcode: 430900,
    lng: 112.355042,
    lat: 28.570066,
    name: "益阳市",
    level: "city",
    parent: 430000
  },
  {
    adcode: 430902,
    lng: 112.33084,
    lat: 28.592771,
    name: "资阳区",
    level: "district",
    parent: 430900
  },
  {
    adcode: 430903,
    lng: 112.360946,
    lat: 28.568327,
    name: "赫山区",
    level: "district",
    parent: 430900
  },
  {
    adcode: 430921,
    lng: 112.410399,
    lat: 29.372181,
    name: "南县",
    level: "district",
    parent: 430900
  },
  {
    adcode: 430922,
    lng: 112.139732,
    lat: 28.520993,
    name: "桃江县",
    level: "district",
    parent: 430900
  },
  {
    adcode: 430923,
    lng: 111.221824,
    lat: 28.377421,
    name: "安化县",
    level: "district",
    parent: 430900
  },
  {
    adcode: 430981,
    lng: 112.361088,
    lat: 28.839713,
    name: "沅江市",
    level: "district",
    parent: 430900
  },
  {
    adcode: 431000,
    lng: 113.032067,
    lat: 25.793589,
    name: "郴州市",
    level: "city",
    parent: 430000
  },
  {
    adcode: 431002,
    lng: 113.032208,
    lat: 25.792628,
    name: "北湖区",
    level: "district",
    parent: 431000
  },
  {
    adcode: 431003,
    lng: 113.038698,
    lat: 25.793157,
    name: "苏仙区",
    level: "district",
    parent: 431000
  },
  {
    adcode: 431021,
    lng: 112.734466,
    lat: 25.737447,
    name: "桂阳县",
    level: "district",
    parent: 431000
  },
  {
    adcode: 431022,
    lng: 112.947884,
    lat: 25.394345,
    name: "宜章县",
    level: "district",
    parent: 431000
  },
  {
    adcode: 431023,
    lng: 113.114819,
    lat: 26.129392,
    name: "永兴县",
    level: "district",
    parent: 431000
  },
  {
    adcode: 431024,
    lng: 112.370618,
    lat: 25.587309,
    name: "嘉禾县",
    level: "district",
    parent: 431000
  },
  {
    adcode: 431025,
    lng: 112.564589,
    lat: 25.279119,
    name: "临武县",
    level: "district",
    parent: 431000
  },
  {
    adcode: 431026,
    lng: 113.685686,
    lat: 25.553759,
    name: "汝城县",
    level: "district",
    parent: 431000
  },
  {
    adcode: 431027,
    lng: 113.945879,
    lat: 26.073917,
    name: "桂东县",
    level: "district",
    parent: 431000
  },
  {
    adcode: 431028,
    lng: 113.27217,
    lat: 26.708625,
    name: "安仁县",
    level: "district",
    parent: 431000
  },
  {
    adcode: 431081,
    lng: 113.23682,
    lat: 25.974152,
    name: "资兴市",
    level: "district",
    parent: 431000
  },
  {
    adcode: 431100,
    lng: 111.608019,
    lat: 26.434516,
    name: "永州市",
    level: "city",
    parent: 430000
  },
  {
    adcode: 431102,
    lng: 111.626348,
    lat: 26.223347,
    name: "零陵区",
    level: "district",
    parent: 431100
  },
  {
    adcode: 431103,
    lng: 111.607156,
    lat: 26.434364,
    name: "冷水滩区",
    level: "district",
    parent: 431100
  },
  {
    adcode: 431121,
    lng: 111.85734,
    lat: 26.585929,
    name: "祁阳市",
    level: "district",
    parent: 431100
  },
  {
    adcode: 431122,
    lng: 111.313035,
    lat: 26.397278,
    name: "东安县",
    level: "district",
    parent: 431100
  },
  {
    adcode: 431123,
    lng: 111.662146,
    lat: 25.959397,
    name: "双牌县",
    level: "district",
    parent: 431100
  },
  {
    adcode: 431124,
    lng: 111.591614,
    lat: 25.518444,
    name: "道县",
    level: "district",
    parent: 431100
  },
  {
    adcode: 431125,
    lng: 111.346803,
    lat: 25.268154,
    name: "江永县",
    level: "district",
    parent: 431100
  },
  {
    adcode: 431126,
    lng: 111.944529,
    lat: 25.584112,
    name: "宁远县",
    level: "district",
    parent: 431100
  },
  {
    adcode: 431127,
    lng: 112.194195,
    lat: 25.375255,
    name: "蓝山县",
    level: "district",
    parent: 431100
  },
  {
    adcode: 431128,
    lng: 112.220341,
    lat: 25.906927,
    name: "新田县",
    level: "district",
    parent: 431100
  },
  {
    adcode: 431129,
    lng: 111.577276,
    lat: 25.182596,
    name: "江华瑶族自治县",
    level: "district",
    parent: 431100
  },
  {
    adcode: 431200,
    lng: 109.97824,
    lat: 27.550082,
    name: "怀化市",
    level: "city",
    parent: 430000
  },
  {
    adcode: 431202,
    lng: 109.982242,
    lat: 27.548474,
    name: "鹤城区",
    level: "district",
    parent: 431200
  },
  {
    adcode: 431221,
    lng: 109.948061,
    lat: 27.43736,
    name: "中方县",
    level: "district",
    parent: 431200
  },
  {
    adcode: 431222,
    lng: 110.399161,
    lat: 28.455554,
    name: "沅陵县",
    level: "district",
    parent: 431200
  },
  {
    adcode: 431223,
    lng: 110.196953,
    lat: 28.005474,
    name: "辰溪县",
    level: "district",
    parent: 431200
  },
  {
    adcode: 431224,
    lng: 110.593373,
    lat: 27.903802,
    name: "溆浦县",
    level: "district",
    parent: 431200
  },
  {
    adcode: 431225,
    lng: 109.720785,
    lat: 26.870789,
    name: "会同县",
    level: "district",
    parent: 431200
  },
  {
    adcode: 431226,
    lng: 109.802807,
    lat: 27.865991,
    name: "麻阳苗族自治县",
    level: "district",
    parent: 431200
  },
  {
    adcode: 431227,
    lng: 109.174443,
    lat: 27.359897,
    name: "新晃侗族自治县",
    level: "district",
    parent: 431200
  },
  {
    adcode: 431228,
    lng: 109.687777,
    lat: 27.437996,
    name: "芷江侗族自治县",
    level: "district",
    parent: 431200
  },
  {
    adcode: 431229,
    lng: 109.691159,
    lat: 26.573511,
    name: "靖州苗族侗族自治县",
    level: "district",
    parent: 431200
  },
  {
    adcode: 431230,
    lng: 109.783359,
    lat: 26.158349,
    name: "通道侗族自治县",
    level: "district",
    parent: 431200
  },
  {
    adcode: 431281,
    lng: 109.831765,
    lat: 27.201876,
    name: "洪江市",
    level: "district",
    parent: 431200
  },
  {
    adcode: 431300,
    lng: 112.008497,
    lat: 27.728136,
    name: "娄底市",
    level: "city",
    parent: 430000
  },
  {
    adcode: 431302,
    lng: 112.008486,
    lat: 27.726643,
    name: "娄星区",
    level: "district",
    parent: 431300
  },
  {
    adcode: 431321,
    lng: 112.198245,
    lat: 27.459126,
    name: "双峰县",
    level: "district",
    parent: 431300
  },
  {
    adcode: 431322,
    lng: 111.306747,
    lat: 27.737456,
    name: "新化县",
    level: "district",
    parent: 431300
  },
  {
    adcode: 431381,
    lng: 111.434674,
    lat: 27.685759,
    name: "冷水江市",
    level: "district",
    parent: 431300
  },
  {
    adcode: 431382,
    lng: 111.670847,
    lat: 27.692301,
    name: "涟源市",
    level: "district",
    parent: 431300
  },
  {
    adcode: 433100,
    lng: 109.739735,
    lat: 28.314296,
    name: "湘西土家族苗族自治州",
    level: "city",
    parent: 430000
  },
  {
    adcode: 433101,
    lng: 109.738273,
    lat: 28.314827,
    name: "吉首市",
    level: "district",
    parent: 433100
  },
  {
    adcode: 433122,
    lng: 110.214428,
    lat: 28.214516,
    name: "泸溪县",
    level: "district",
    parent: 433100
  },
  {
    adcode: 433123,
    lng: 109.599191,
    lat: 27.948308,
    name: "凤凰县",
    level: "district",
    parent: 433100
  },
  {
    adcode: 433124,
    lng: 109.479063,
    lat: 28.581352,
    name: "花垣县",
    level: "district",
    parent: 433100
  },
  {
    adcode: 433125,
    lng: 109.651445,
    lat: 28.709605,
    name: "保靖县",
    level: "district",
    parent: 433100
  },
  {
    adcode: 433126,
    lng: 109.949592,
    lat: 28.616973,
    name: "古丈县",
    level: "district",
    parent: 433100
  },
  {
    adcode: 433127,
    lng: 109.853292,
    lat: 28.998068,
    name: "永顺县",
    level: "district",
    parent: 433100
  },
  {
    adcode: 433130,
    lng: 109.441189,
    lat: 29.453438,
    name: "龙山县",
    level: "district",
    parent: 433100
  },
  {
    adcode: 440000,
    lng: 113.280637,
    lat: 23.125178,
    name: "广东省",
    level: "province",
    parent: 100000
  },
  {
    adcode: 440100,
    lng: 113.280637,
    lat: 23.125178,
    name: "广州市",
    level: "city",
    parent: 440000
  },
  {
    adcode: 440103,
    lng: 113.243038,
    lat: 23.124943,
    name: "荔湾区",
    level: "district",
    parent: 440100
  },
  {
    adcode: 440104,
    lng: 113.280714,
    lat: 23.125624,
    name: "越秀区",
    level: "district",
    parent: 440100
  },
  {
    adcode: 440105,
    lng: 113.262008,
    lat: 23.103131,
    name: "海珠区",
    level: "district",
    parent: 440100
  },
  {
    adcode: 440106,
    lng: 113.335367,
    lat: 23.13559,
    name: "天河区",
    level: "district",
    parent: 440100
  },
  {
    adcode: 440111,
    lng: 113.262831,
    lat: 23.162281,
    name: "白云区",
    level: "district",
    parent: 440100
  },
  {
    adcode: 440112,
    lng: 113.450761,
    lat: 23.103239,
    name: "黄埔区",
    level: "district",
    parent: 440100
  },
  {
    adcode: 440113,
    lng: 113.364619,
    lat: 22.938582,
    name: "番禺区",
    level: "district",
    parent: 440100
  },
  {
    adcode: 440114,
    lng: 113.211184,
    lat: 23.39205,
    name: "花都区",
    level: "district",
    parent: 440100
  },
  {
    adcode: 440115,
    lng: 113.53738,
    lat: 22.794531,
    name: "南沙区",
    level: "district",
    parent: 440100
  },
  {
    adcode: 440117,
    lng: 113.587386,
    lat: 23.545283,
    name: "从化区",
    level: "district",
    parent: 440100
  },
  {
    adcode: 440118,
    lng: 113.829579,
    lat: 23.290497,
    name: "增城区",
    level: "district",
    parent: 440100
  },
  {
    adcode: 440200,
    lng: 113.591544,
    lat: 24.801322,
    name: "韶关市",
    level: "city",
    parent: 440000
  },
  {
    adcode: 440203,
    lng: 113.588289,
    lat: 24.80016,
    name: "武江区",
    level: "district",
    parent: 440200
  },
  {
    adcode: 440204,
    lng: 113.599224,
    lat: 24.803977,
    name: "浈江区",
    level: "district",
    parent: 440200
  },
  {
    adcode: 440205,
    lng: 113.605582,
    lat: 24.680195,
    name: "曲江区",
    level: "district",
    parent: 440200
  },
  {
    adcode: 440222,
    lng: 114.067205,
    lat: 24.948364,
    name: "始兴县",
    level: "district",
    parent: 440200
  },
  {
    adcode: 440224,
    lng: 113.748627,
    lat: 25.088226,
    name: "仁化县",
    level: "district",
    parent: 440200
  },
  {
    adcode: 440229,
    lng: 114.131289,
    lat: 24.353887,
    name: "翁源县",
    level: "district",
    parent: 440200
  },
  {
    adcode: 440232,
    lng: 113.278417,
    lat: 24.776109,
    name: "乳源瑶族自治县",
    level: "district",
    parent: 440200
  },
  {
    adcode: 440233,
    lng: 114.207034,
    lat: 24.055412,
    name: "新丰县",
    level: "district",
    parent: 440200
  },
  {
    adcode: 440281,
    lng: 113.352413,
    lat: 25.128445,
    name: "乐昌市",
    level: "district",
    parent: 440200
  },
  {
    adcode: 440282,
    lng: 114.311231,
    lat: 25.115328,
    name: "南雄市",
    level: "district",
    parent: 440200
  },
  {
    adcode: 440300,
    lng: 114.085947,
    lat: 22.547,
    name: "深圳市",
    level: "city",
    parent: 440000
  },
  {
    adcode: 440303,
    lng: 114.123885,
    lat: 22.555341,
    name: "罗湖区",
    level: "district",
    parent: 440300
  },
  {
    adcode: 440304,
    lng: 114.05096,
    lat: 22.541009,
    name: "福田区",
    level: "district",
    parent: 440300
  },
  {
    adcode: 440305,
    lng: 113.92943,
    lat: 22.531221,
    name: "南山区",
    level: "district",
    parent: 440300
  },
  {
    adcode: 440306,
    lng: 113.828671,
    lat: 22.754741,
    name: "宝安区",
    level: "district",
    parent: 440300
  },
  {
    adcode: 440307,
    lng: 114.251372,
    lat: 22.721511,
    name: "龙岗区",
    level: "district",
    parent: 440300
  },
  {
    adcode: 440308,
    lng: 114.235366,
    lat: 22.555069,
    name: "盐田区",
    level: "district",
    parent: 440300
  },
  {
    adcode: 440309,
    lng: 114.044346,
    lat: 22.691963,
    name: "龙华区",
    level: "district",
    parent: 440300
  },
  {
    adcode: 440310,
    lng: 114.338441,
    lat: 22.69423,
    name: "坪山区",
    level: "district",
    parent: 440300
  },
  {
    adcode: 440311,
    lng: 113.935895,
    lat: 22.748816,
    name: "光明区",
    level: "district",
    parent: 440300
  },
  {
    adcode: 440400,
    lng: 113.553986,
    lat: 22.224979,
    name: "珠海市",
    level: "city",
    parent: 440000
  },
  {
    adcode: 440402,
    lng: 113.55027,
    lat: 22.271249,
    name: "香洲区",
    level: "district",
    parent: 440400
  },
  {
    adcode: 440403,
    lng: 113.297739,
    lat: 22.209117,
    name: "斗门区",
    level: "district",
    parent: 440400
  },
  {
    adcode: 440404,
    lng: 113.345071,
    lat: 22.139122,
    name: "金湾区",
    level: "district",
    parent: 440400
  },
  {
    adcode: 440500,
    lng: 116.708463,
    lat: 23.37102,
    name: "汕头市",
    level: "city",
    parent: 440000
  },
  {
    adcode: 440507,
    lng: 116.732015,
    lat: 23.373754,
    name: "龙湖区",
    level: "district",
    parent: 440500
  },
  {
    adcode: 440511,
    lng: 116.703583,
    lat: 23.367071,
    name: "金平区",
    level: "district",
    parent: 440500
  },
  {
    adcode: 440512,
    lng: 116.729528,
    lat: 23.279345,
    name: "濠江区",
    level: "district",
    parent: 440500
  },
  {
    adcode: 440513,
    lng: 116.602602,
    lat: 23.262336,
    name: "潮阳区",
    level: "district",
    parent: 440500
  },
  {
    adcode: 440514,
    lng: 116.423607,
    lat: 23.249798,
    name: "潮南区",
    level: "district",
    parent: 440500
  },
  {
    adcode: 440515,
    lng: 116.76336,
    lat: 23.46844,
    name: "澄海区",
    level: "district",
    parent: 440500
  },
  {
    adcode: 440523,
    lng: 117.027105,
    lat: 23.419562,
    name: "南澳县",
    level: "district",
    parent: 440500
  },
  {
    adcode: 440600,
    lng: 113.122717,
    lat: 23.028762,
    name: "佛山市",
    level: "city",
    parent: 440000
  },
  {
    adcode: 440604,
    lng: 113.112414,
    lat: 23.019643,
    name: "禅城区",
    level: "district",
    parent: 440600
  },
  {
    adcode: 440605,
    lng: 113.145577,
    lat: 23.031562,
    name: "南海区",
    level: "district",
    parent: 440600
  },
  {
    adcode: 440606,
    lng: 113.281826,
    lat: 22.75851,
    name: "顺德区",
    level: "district",
    parent: 440600
  },
  {
    adcode: 440607,
    lng: 112.899414,
    lat: 23.16504,
    name: "三水区",
    level: "district",
    parent: 440600
  },
  {
    adcode: 440608,
    lng: 112.882123,
    lat: 22.893855,
    name: "高明区",
    level: "district",
    parent: 440600
  },
  {
    adcode: 440700,
    lng: 113.094942,
    lat: 22.590431,
    name: "江门市",
    level: "city",
    parent: 440000
  },
  {
    adcode: 440703,
    lng: 113.07859,
    lat: 22.59677,
    name: "蓬江区",
    level: "district",
    parent: 440700
  },
  {
    adcode: 440704,
    lng: 113.120601,
    lat: 22.572211,
    name: "江海区",
    level: "district",
    parent: 440700
  },
  {
    adcode: 440705,
    lng: 113.038584,
    lat: 22.520247,
    name: "新会区",
    level: "district",
    parent: 440700
  },
  {
    adcode: 440781,
    lng: 112.793414,
    lat: 22.250713,
    name: "台山市",
    level: "district",
    parent: 440700
  },
  {
    adcode: 440783,
    lng: 112.692262,
    lat: 22.366286,
    name: "开平市",
    level: "district",
    parent: 440700
  },
  {
    adcode: 440784,
    lng: 112.961795,
    lat: 22.768104,
    name: "鹤山市",
    level: "district",
    parent: 440700
  },
  {
    adcode: 440785,
    lng: 112.314051,
    lat: 22.182956,
    name: "恩平市",
    level: "district",
    parent: 440700
  },
  {
    adcode: 440800,
    lng: 110.364977,
    lat: 21.274898,
    name: "湛江市",
    level: "city",
    parent: 440000
  },
  {
    adcode: 440802,
    lng: 110.361634,
    lat: 21.273365,
    name: "赤坎区",
    level: "district",
    parent: 440800
  },
  {
    adcode: 440803,
    lng: 110.406382,
    lat: 21.194229,
    name: "霞山区",
    level: "district",
    parent: 440800
  },
  {
    adcode: 440804,
    lng: 110.455632,
    lat: 21.24441,
    name: "坡头区",
    level: "district",
    parent: 440800
  },
  {
    adcode: 440811,
    lng: 110.329167,
    lat: 21.265997,
    name: "麻章区",
    level: "district",
    parent: 440800
  },
  {
    adcode: 440823,
    lng: 110.255321,
    lat: 21.376915,
    name: "遂溪县",
    level: "district",
    parent: 440800
  },
  {
    adcode: 440825,
    lng: 110.175718,
    lat: 20.326083,
    name: "徐闻县",
    level: "district",
    parent: 440800
  },
  {
    adcode: 440881,
    lng: 110.284961,
    lat: 21.611281,
    name: "廉江市",
    level: "district",
    parent: 440800
  },
  {
    adcode: 440882,
    lng: 110.088275,
    lat: 20.908523,
    name: "雷州市",
    level: "district",
    parent: 440800
  },
  {
    adcode: 440883,
    lng: 110.780508,
    lat: 21.428453,
    name: "吴川市",
    level: "district",
    parent: 440800
  },
  {
    adcode: 440900,
    lng: 110.919229,
    lat: 21.659751,
    name: "茂名市",
    level: "city",
    parent: 440000
  },
  {
    adcode: 440902,
    lng: 110.920542,
    lat: 21.660425,
    name: "茂南区",
    level: "district",
    parent: 440900
  },
  {
    adcode: 440904,
    lng: 111.007264,
    lat: 21.507219,
    name: "电白区",
    level: "district",
    parent: 440900
  },
  {
    adcode: 440981,
    lng: 110.853251,
    lat: 21.915153,
    name: "高州市",
    level: "district",
    parent: 440900
  },
  {
    adcode: 440982,
    lng: 110.63839,
    lat: 21.654953,
    name: "化州市",
    level: "district",
    parent: 440900
  },
  {
    adcode: 440983,
    lng: 110.941656,
    lat: 22.352681,
    name: "信宜市",
    level: "district",
    parent: 440900
  },
  {
    adcode: 441200,
    lng: 112.472529,
    lat: 23.051546,
    name: "肇庆市",
    level: "city",
    parent: 440000
  },
  {
    adcode: 441202,
    lng: 112.472329,
    lat: 23.052662,
    name: "端州区",
    level: "district",
    parent: 441200
  },
  {
    adcode: 441203,
    lng: 112.565249,
    lat: 23.155822,
    name: "鼎湖区",
    level: "district",
    parent: 441200
  },
  {
    adcode: 441204,
    lng: 112.460846,
    lat: 23.027694,
    name: "高要区",
    level: "district",
    parent: 441200
  },
  {
    adcode: 441223,
    lng: 112.440419,
    lat: 23.631486,
    name: "广宁县",
    level: "district",
    parent: 441200
  },
  {
    adcode: 441224,
    lng: 112.182466,
    lat: 23.913072,
    name: "怀集县",
    level: "district",
    parent: 441200
  },
  {
    adcode: 441225,
    lng: 111.502973,
    lat: 23.434731,
    name: "封开县",
    level: "district",
    parent: 441200
  },
  {
    adcode: 441226,
    lng: 111.78156,
    lat: 23.141711,
    name: "德庆县",
    level: "district",
    parent: 441200
  },
  {
    adcode: 441284,
    lng: 112.695028,
    lat: 23.340324,
    name: "四会市",
    level: "district",
    parent: 441200
  },
  {
    adcode: 441300,
    lng: 114.412599,
    lat: 23.079404,
    name: "惠州市",
    level: "city",
    parent: 440000
  },
  {
    adcode: 441302,
    lng: 114.413978,
    lat: 23.079883,
    name: "惠城区",
    level: "district",
    parent: 441300
  },
  {
    adcode: 441303,
    lng: 114.469444,
    lat: 22.78851,
    name: "惠阳区",
    level: "district",
    parent: 441300
  },
  {
    adcode: 441322,
    lng: 114.284254,
    lat: 23.167575,
    name: "博罗县",
    level: "district",
    parent: 441300
  },
  {
    adcode: 441323,
    lng: 114.723092,
    lat: 22.983036,
    name: "惠东县",
    level: "district",
    parent: 441300
  },
  {
    adcode: 441324,
    lng: 114.259986,
    lat: 23.723894,
    name: "龙门县",
    level: "district",
    parent: 441300
  },
  {
    adcode: 441400,
    lng: 116.117582,
    lat: 24.299112,
    name: "梅州市",
    level: "city",
    parent: 440000
  },
  {
    adcode: 441402,
    lng: 116.12116,
    lat: 24.302593,
    name: "梅江区",
    level: "district",
    parent: 441400
  },
  {
    adcode: 441403,
    lng: 116.083482,
    lat: 24.267825,
    name: "梅县区",
    level: "district",
    parent: 441400
  },
  {
    adcode: 441422,
    lng: 116.69552,
    lat: 24.351587,
    name: "大埔县",
    level: "district",
    parent: 441400
  },
  {
    adcode: 441423,
    lng: 116.184419,
    lat: 23.752771,
    name: "丰顺县",
    level: "district",
    parent: 441400
  },
  {
    adcode: 441424,
    lng: 115.775004,
    lat: 23.925424,
    name: "五华县",
    level: "district",
    parent: 441400
  },
  {
    adcode: 441426,
    lng: 115.891729,
    lat: 24.569651,
    name: "平远县",
    level: "district",
    parent: 441400
  },
  {
    adcode: 441427,
    lng: 116.170531,
    lat: 24.653313,
    name: "蕉岭县",
    level: "district",
    parent: 441400
  },
  {
    adcode: 441481,
    lng: 115.731648,
    lat: 24.138077,
    name: "兴宁市",
    level: "district",
    parent: 441400
  },
  {
    adcode: 441500,
    lng: 115.364238,
    lat: 22.774485,
    name: "汕尾市",
    level: "city",
    parent: 440000
  },
  {
    adcode: 441502,
    lng: 115.363667,
    lat: 22.776227,
    name: "城区",
    level: "district",
    parent: 441500
  },
  {
    adcode: 441521,
    lng: 115.337324,
    lat: 22.971042,
    name: "海丰县",
    level: "district",
    parent: 441500
  },
  {
    adcode: 441523,
    lng: 115.657565,
    lat: 23.302682,
    name: "陆河县",
    level: "district",
    parent: 441500
  },
  {
    adcode: 441581,
    lng: 115.644203,
    lat: 22.946104,
    name: "陆丰市",
    level: "district",
    parent: 441500
  },
  {
    adcode: 441600,
    lng: 114.697802,
    lat: 23.746266,
    name: "河源市",
    level: "city",
    parent: 440000
  },
  {
    adcode: 441602,
    lng: 114.696828,
    lat: 23.746255,
    name: "源城区",
    level: "district",
    parent: 441600
  },
  {
    adcode: 441621,
    lng: 115.184383,
    lat: 23.633744,
    name: "紫金县",
    level: "district",
    parent: 441600
  },
  {
    adcode: 441622,
    lng: 115.256415,
    lat: 24.101174,
    name: "龙川县",
    level: "district",
    parent: 441600
  },
  {
    adcode: 441623,
    lng: 114.495952,
    lat: 24.364227,
    name: "连平县",
    level: "district",
    parent: 441600
  },
  {
    adcode: 441624,
    lng: 114.941473,
    lat: 24.44318,
    name: "和平县",
    level: "district",
    parent: 441600
  },
  {
    adcode: 441625,
    lng: 114.742711,
    lat: 23.789093,
    name: "东源县",
    level: "district",
    parent: 441600
  },
  {
    adcode: 441700,
    lng: 111.975107,
    lat: 21.859222,
    name: "阳江市",
    level: "city",
    parent: 440000
  },
  {
    adcode: 441702,
    lng: 111.968909,
    lat: 21.859182,
    name: "江城区",
    level: "district",
    parent: 441700
  },
  {
    adcode: 441704,
    lng: 112.011267,
    lat: 21.864728,
    name: "阳东区",
    level: "district",
    parent: 441700
  },
  {
    adcode: 441721,
    lng: 111.617556,
    lat: 21.75367,
    name: "阳西县",
    level: "district",
    parent: 441700
  },
  {
    adcode: 441781,
    lng: 111.7905,
    lat: 22.169598,
    name: "阳春市",
    level: "district",
    parent: 441700
  },
  {
    adcode: 441800,
    lng: 113.051227,
    lat: 23.685022,
    name: "清远市",
    level: "city",
    parent: 440000
  },
  {
    adcode: 441802,
    lng: 113.048698,
    lat: 23.688976,
    name: "清城区",
    level: "district",
    parent: 441800
  },
  {
    adcode: 441803,
    lng: 113.015203,
    lat: 23.736949,
    name: "清新区",
    level: "district",
    parent: 441800
  },
  {
    adcode: 441821,
    lng: 113.534094,
    lat: 23.866739,
    name: "佛冈县",
    level: "district",
    parent: 441800
  },
  {
    adcode: 441823,
    lng: 112.634019,
    lat: 24.470286,
    name: "阳山县",
    level: "district",
    parent: 441800
  },
  {
    adcode: 441825,
    lng: 112.086555,
    lat: 24.567271,
    name: "连山壮族瑶族自治县",
    level: "district",
    parent: 441800
  },
  {
    adcode: 441826,
    lng: 112.290808,
    lat: 24.719097,
    name: "连南瑶族自治县",
    level: "district",
    parent: 441800
  },
  {
    adcode: 441881,
    lng: 113.405404,
    lat: 24.18612,
    name: "英德市",
    level: "district",
    parent: 441800
  },
  {
    adcode: 441882,
    lng: 112.379271,
    lat: 24.783966,
    name: "连州市",
    level: "district",
    parent: 441800
  },
  {
    adcode: 441900,
    lng: 113.746262,
    lat: 23.046237,
    name: "东莞市",
    level: "city",
    parent: 440000
  },
  {
    adcode: 442000,
    lng: 113.382391,
    lat: 22.521113,
    name: "中山市",
    level: "city",
    parent: 440000
  },
  {
    adcode: 445100,
    lng: 116.632301,
    lat: 23.661701,
    name: "潮州市",
    level: "city",
    parent: 440000
  },
  {
    adcode: 445102,
    lng: 116.63365,
    lat: 23.664675,
    name: "湘桥区",
    level: "district",
    parent: 445100
  },
  {
    adcode: 445103,
    lng: 116.67931,
    lat: 23.461012,
    name: "潮安区",
    level: "district",
    parent: 445100
  },
  {
    adcode: 445122,
    lng: 117.00205,
    lat: 23.668171,
    name: "饶平县",
    level: "district",
    parent: 445100
  },
  {
    adcode: 445200,
    lng: 116.355733,
    lat: 23.543778,
    name: "揭阳市",
    level: "city",
    parent: 440000
  },
  {
    adcode: 445202,
    lng: 116.357045,
    lat: 23.535524,
    name: "榕城区",
    level: "district",
    parent: 445200
  },
  {
    adcode: 445203,
    lng: 116.412947,
    lat: 23.569887,
    name: "揭东区",
    level: "district",
    parent: 445200
  },
  {
    adcode: 445222,
    lng: 115.838708,
    lat: 23.4273,
    name: "揭西县",
    level: "district",
    parent: 445200
  },
  {
    adcode: 445224,
    lng: 116.295832,
    lat: 23.029834,
    name: "惠来县",
    level: "district",
    parent: 445200
  },
  {
    adcode: 445281,
    lng: 116.165082,
    lat: 23.29788,
    name: "普宁市",
    level: "district",
    parent: 445200
  },
  {
    adcode: 445300,
    lng: 112.044439,
    lat: 22.929801,
    name: "云浮市",
    level: "city",
    parent: 440000
  },
  {
    adcode: 445302,
    lng: 112.04471,
    lat: 22.930827,
    name: "云城区",
    level: "district",
    parent: 445300
  },
  {
    adcode: 445303,
    lng: 112.005609,
    lat: 23.073152,
    name: "云安区",
    level: "district",
    parent: 445300
  },
  {
    adcode: 445321,
    lng: 112.23083,
    lat: 22.703204,
    name: "新兴县",
    level: "district",
    parent: 445300
  },
  {
    adcode: 445322,
    lng: 111.535921,
    lat: 23.237709,
    name: "郁南县",
    level: "district",
    parent: 445300
  },
  {
    adcode: 445381,
    lng: 111.578201,
    lat: 22.765415,
    name: "罗定市",
    level: "district",
    parent: 445300
  },
  {
    adcode: 450000,
    lng: 108.320004,
    lat: 22.82402,
    name: "广西壮族自治区",
    level: "province",
    parent: 100000
  },
  {
    adcode: 450100,
    lng: 108.320004,
    lat: 22.82402,
    name: "南宁市",
    level: "city",
    parent: 450000
  },
  {
    adcode: 450102,
    lng: 108.320189,
    lat: 22.819511,
    name: "兴宁区",
    level: "district",
    parent: 450100
  },
  {
    adcode: 450103,
    lng: 108.346113,
    lat: 22.816614,
    name: "青秀区",
    level: "district",
    parent: 450100
  },
  {
    adcode: 450105,
    lng: 108.310478,
    lat: 22.799593,
    name: "江南区",
    level: "district",
    parent: 450100
  },
  {
    adcode: 450107,
    lng: 108.306903,
    lat: 22.832779,
    name: "西乡塘区",
    level: "district",
    parent: 450100
  },
  {
    adcode: 450108,
    lng: 108.322102,
    lat: 22.75909,
    name: "良庆区",
    level: "district",
    parent: 450100
  },
  {
    adcode: 450109,
    lng: 108.484251,
    lat: 22.756598,
    name: "邕宁区",
    level: "district",
    parent: 450100
  },
  {
    adcode: 450110,
    lng: 108.280717,
    lat: 23.157163,
    name: "武鸣区",
    level: "district",
    parent: 450100
  },
  {
    adcode: 450123,
    lng: 107.688661,
    lat: 23.174763,
    name: "隆安县",
    level: "district",
    parent: 450100
  },
  {
    adcode: 450124,
    lng: 108.172903,
    lat: 23.711758,
    name: "马山县",
    level: "district",
    parent: 450100
  },
  {
    adcode: 450125,
    lng: 108.603937,
    lat: 23.431769,
    name: "上林县",
    level: "district",
    parent: 450100
  },
  {
    adcode: 450126,
    lng: 108.816735,
    lat: 23.216884,
    name: "宾阳县",
    level: "district",
    parent: 450100
  },
  {
    adcode: 450127,
    lng: 109.270987,
    lat: 22.68743,
    name: "横州市",
    level: "district",
    parent: 450100
  },
  {
    adcode: 450200,
    lng: 109.411703,
    lat: 24.314617,
    name: "柳州市",
    level: "city",
    parent: 450000
  },
  {
    adcode: 450202,
    lng: 109.411749,
    lat: 24.312324,
    name: "城中区",
    level: "district",
    parent: 450200
  },
  {
    adcode: 450203,
    lng: 109.415364,
    lat: 24.303848,
    name: "鱼峰区",
    level: "district",
    parent: 450200
  },
  {
    adcode: 450204,
    lng: 109.395936,
    lat: 24.287013,
    name: "柳南区",
    level: "district",
    parent: 450200
  },
  {
    adcode: 450205,
    lng: 109.406577,
    lat: 24.359145,
    name: "柳北区",
    level: "district",
    parent: 450200
  },
  {
    adcode: 450206,
    lng: 109.334503,
    lat: 24.257512,
    name: "柳江区",
    level: "district",
    parent: 450200
  },
  {
    adcode: 450222,
    lng: 109.245812,
    lat: 24.655121,
    name: "柳城县",
    level: "district",
    parent: 450200
  },
  {
    adcode: 450223,
    lng: 109.740805,
    lat: 24.483405,
    name: "鹿寨县",
    level: "district",
    parent: 450200
  },
  {
    adcode: 450224,
    lng: 109.403621,
    lat: 25.214703,
    name: "融安县",
    level: "district",
    parent: 450200
  },
  {
    adcode: 450225,
    lng: 109.252744,
    lat: 25.068812,
    name: "融水苗族自治县",
    level: "district",
    parent: 450200
  },
  {
    adcode: 450226,
    lng: 109.614846,
    lat: 25.78553,
    name: "三江侗族自治县",
    level: "district",
    parent: 450200
  },
  {
    adcode: 450300,
    lng: 110.299121,
    lat: 25.274215,
    name: "桂林市",
    level: "city",
    parent: 450000
  },
  {
    adcode: 450302,
    lng: 110.292445,
    lat: 25.278544,
    name: "秀峰区",
    level: "district",
    parent: 450300
  },
  {
    adcode: 450303,
    lng: 110.300783,
    lat: 25.301334,
    name: "叠彩区",
    level: "district",
    parent: 450300
  },
  {
    adcode: 450304,
    lng: 110.284882,
    lat: 25.261986,
    name: "象山区",
    level: "district",
    parent: 450300
  },
  {
    adcode: 450305,
    lng: 110.317577,
    lat: 25.254339,
    name: "七星区",
    level: "district",
    parent: 450300
  },
  {
    adcode: 450311,
    lng: 110.305667,
    lat: 25.077646,
    name: "雁山区",
    level: "district",
    parent: 450300
  },
  {
    adcode: 450312,
    lng: 110.205487,
    lat: 25.246257,
    name: "临桂区",
    level: "district",
    parent: 450300
  },
  {
    adcode: 450321,
    lng: 110.494699,
    lat: 24.77534,
    name: "阳朔县",
    level: "district",
    parent: 450300
  },
  {
    adcode: 450323,
    lng: 110.325712,
    lat: 25.408541,
    name: "灵川县",
    level: "district",
    parent: 450300
  },
  {
    adcode: 450324,
    lng: 111.072989,
    lat: 25.929897,
    name: "全州县",
    level: "district",
    parent: 450300
  },
  {
    adcode: 450325,
    lng: 110.670783,
    lat: 25.609554,
    name: "兴安县",
    level: "district",
    parent: 450300
  },
  {
    adcode: 450326,
    lng: 109.989208,
    lat: 24.986692,
    name: "永福县",
    level: "district",
    parent: 450300
  },
  {
    adcode: 450327,
    lng: 111.160248,
    lat: 25.489098,
    name: "灌阳县",
    level: "district",
    parent: 450300
  },
  {
    adcode: 450328,
    lng: 110.009423,
    lat: 25.796428,
    name: "龙胜各族自治县",
    level: "district",
    parent: 450300
  },
  {
    adcode: 450329,
    lng: 110.642587,
    lat: 26.0342,
    name: "资源县",
    level: "district",
    parent: 450300
  },
  {
    adcode: 450330,
    lng: 110.642821,
    lat: 24.632216,
    name: "平乐县",
    level: "district",
    parent: 450300
  },
  {
    adcode: 450332,
    lng: 110.82952,
    lat: 24.833612,
    name: "恭城瑶族自治县",
    level: "district",
    parent: 450300
  },
  {
    adcode: 450381,
    lng: 110.400149,
    lat: 24.497786,
    name: "荔浦市",
    level: "district",
    parent: 450300
  },
  {
    adcode: 450400,
    lng: 111.297604,
    lat: 23.474803,
    name: "梧州市",
    level: "city",
    parent: 450000
  },
  {
    adcode: 450403,
    lng: 111.315817,
    lat: 23.471318,
    name: "万秀区",
    level: "district",
    parent: 450400
  },
  {
    adcode: 450405,
    lng: 111.275678,
    lat: 23.4777,
    name: "长洲区",
    level: "district",
    parent: 450400
  },
  {
    adcode: 450406,
    lng: 111.246035,
    lat: 23.40996,
    name: "龙圩区",
    level: "district",
    parent: 450400
  },
  {
    adcode: 450421,
    lng: 111.544008,
    lat: 23.845097,
    name: "苍梧县",
    level: "district",
    parent: 450400
  },
  {
    adcode: 450422,
    lng: 110.931826,
    lat: 23.373963,
    name: "藤县",
    level: "district",
    parent: 450400
  },
  {
    adcode: 450423,
    lng: 110.5226,
    lat: 24.199829,
    name: "蒙山县",
    level: "district",
    parent: 450400
  },
  {
    adcode: 450481,
    lng: 110.998114,
    lat: 22.918406,
    name: "岑溪市",
    level: "district",
    parent: 450400
  },
  {
    adcode: 450500,
    lng: 109.119254,
    lat: 21.473343,
    name: "北海市",
    level: "city",
    parent: 450000
  },
  {
    adcode: 450502,
    lng: 109.107529,
    lat: 21.468443,
    name: "海城区",
    level: "district",
    parent: 450500
  },
  {
    adcode: 450503,
    lng: 109.118707,
    lat: 21.444909,
    name: "银海区",
    level: "district",
    parent: 450500
  },
  {
    adcode: 450512,
    lng: 109.450573,
    lat: 21.5928,
    name: "铁山港区",
    level: "district",
    parent: 450500
  },
  {
    adcode: 450521,
    lng: 109.200695,
    lat: 21.663554,
    name: "合浦县",
    level: "district",
    parent: 450500
  },
  {
    adcode: 450600,
    lng: 108.345478,
    lat: 21.614631,
    name: "防城港市",
    level: "city",
    parent: 450000
  },
  {
    adcode: 450602,
    lng: 108.346281,
    lat: 21.614406,
    name: "港口区",
    level: "district",
    parent: 450600
  },
  {
    adcode: 450603,
    lng: 108.358426,
    lat: 21.764758,
    name: "防城区",
    level: "district",
    parent: 450600
  },
  {
    adcode: 450621,
    lng: 107.982139,
    lat: 22.151423,
    name: "上思县",
    level: "district",
    parent: 450600
  },
  {
    adcode: 450681,
    lng: 107.97017,
    lat: 21.541172,
    name: "东兴市",
    level: "district",
    parent: 450600
  },
  {
    adcode: 450700,
    lng: 108.624175,
    lat: 21.967127,
    name: "钦州市",
    level: "city",
    parent: 450000
  },
  {
    adcode: 450702,
    lng: 108.626629,
    lat: 21.966808,
    name: "钦南区",
    level: "district",
    parent: 450700
  },
  {
    adcode: 450703,
    lng: 108.44911,
    lat: 22.132761,
    name: "钦北区",
    level: "district",
    parent: 450700
  },
  {
    adcode: 450721,
    lng: 109.293468,
    lat: 22.418041,
    name: "灵山县",
    level: "district",
    parent: 450700
  },
  {
    adcode: 450722,
    lng: 109.556341,
    lat: 22.268335,
    name: "浦北县",
    level: "district",
    parent: 450700
  },
  {
    adcode: 450800,
    lng: 109.602146,
    lat: 23.0936,
    name: "贵港市",
    level: "city",
    parent: 450000
  },
  {
    adcode: 450802,
    lng: 109.59481,
    lat: 23.107677,
    name: "港北区",
    level: "district",
    parent: 450800
  },
  {
    adcode: 450803,
    lng: 109.604665,
    lat: 23.067516,
    name: "港南区",
    level: "district",
    parent: 450800
  },
  {
    adcode: 450804,
    lng: 109.415697,
    lat: 23.132815,
    name: "覃塘区",
    level: "district",
    parent: 450800
  },
  {
    adcode: 450821,
    lng: 110.397485,
    lat: 23.544546,
    name: "平南县",
    level: "district",
    parent: 450800
  },
  {
    adcode: 450881,
    lng: 110.074668,
    lat: 23.382473,
    name: "桂平市",
    level: "district",
    parent: 450800
  },
  {
    adcode: 450900,
    lng: 110.154393,
    lat: 22.63136,
    name: "玉林市",
    level: "city",
    parent: 450000
  },
  {
    adcode: 450902,
    lng: 110.154912,
    lat: 22.632132,
    name: "玉州区",
    level: "district",
    parent: 450900
  },
  {
    adcode: 450903,
    lng: 110.054155,
    lat: 22.58163,
    name: "福绵区",
    level: "district",
    parent: 450900
  },
  {
    adcode: 450921,
    lng: 110.552467,
    lat: 22.856435,
    name: "容县",
    level: "district",
    parent: 450900
  },
  {
    adcode: 450922,
    lng: 110.264842,
    lat: 22.321054,
    name: "陆川县",
    level: "district",
    parent: 450900
  },
  {
    adcode: 450923,
    lng: 109.980004,
    lat: 22.271285,
    name: "博白县",
    level: "district",
    parent: 450900
  },
  {
    adcode: 450924,
    lng: 109.877768,
    lat: 22.74187,
    name: "兴业县",
    level: "district",
    parent: 450900
  },
  {
    adcode: 450981,
    lng: 110.348052,
    lat: 22.701648,
    name: "北流市",
    level: "district",
    parent: 450900
  },
  {
    adcode: 451000,
    lng: 106.616285,
    lat: 23.897742,
    name: "百色市",
    level: "city",
    parent: 450000
  },
  {
    adcode: 451002,
    lng: 106.615727,
    lat: 23.897675,
    name: "右江区",
    level: "district",
    parent: 451000
  },
  {
    adcode: 451003,
    lng: 106.904315,
    lat: 23.736079,
    name: "田阳区",
    level: "district",
    parent: 451000
  },
  {
    adcode: 451022,
    lng: 107.12426,
    lat: 23.600444,
    name: "田东县",
    level: "district",
    parent: 451000
  },
  {
    adcode: 451024,
    lng: 106.618164,
    lat: 23.321464,
    name: "德保县",
    level: "district",
    parent: 451000
  },
  {
    adcode: 451026,
    lng: 105.833553,
    lat: 23.400785,
    name: "那坡县",
    level: "district",
    parent: 451000
  },
  {
    adcode: 451027,
    lng: 106.56487,
    lat: 24.345643,
    name: "凌云县",
    level: "district",
    parent: 451000
  },
  {
    adcode: 451028,
    lng: 106.559638,
    lat: 24.782204,
    name: "乐业县",
    level: "district",
    parent: 451000
  },
  {
    adcode: 451029,
    lng: 106.235047,
    lat: 24.290262,
    name: "田林县",
    level: "district",
    parent: 451000
  },
  {
    adcode: 451030,
    lng: 105.095025,
    lat: 24.492041,
    name: "西林县",
    level: "district",
    parent: 451000
  },
  {
    adcode: 451031,
    lng: 105.342363,
    lat: 24.774318,
    name: "隆林各族自治县",
    level: "district",
    parent: 451000
  },
  {
    adcode: 451081,
    lng: 106.417549,
    lat: 23.134766,
    name: "靖西市",
    level: "district",
    parent: 451000
  },
  {
    adcode: 451082,
    lng: 107.580403,
    lat: 23.320479,
    name: "平果市",
    level: "district",
    parent: 451000
  },
  {
    adcode: 451100,
    lng: 111.552056,
    lat: 24.414141,
    name: "贺州市",
    level: "city",
    parent: 450000
  },
  {
    adcode: 451102,
    lng: 111.551991,
    lat: 24.412446,
    name: "八步区",
    level: "district",
    parent: 451100
  },
  {
    adcode: 451103,
    lng: 111.524014,
    lat: 24.417148,
    name: "平桂区",
    level: "district",
    parent: 451100
  },
  {
    adcode: 451121,
    lng: 110.810865,
    lat: 24.172958,
    name: "昭平县",
    level: "district",
    parent: 451100
  },
  {
    adcode: 451122,
    lng: 111.303629,
    lat: 24.528566,
    name: "钟山县",
    level: "district",
    parent: 451100
  },
  {
    adcode: 451123,
    lng: 111.277228,
    lat: 24.81896,
    name: "富川瑶族自治县",
    level: "district",
    parent: 451100
  },
  {
    adcode: 451200,
    lng: 108.062105,
    lat: 24.695899,
    name: "河池市",
    level: "city",
    parent: 450000
  },
  {
    adcode: 451202,
    lng: 108.062131,
    lat: 24.695625,
    name: "金城江区",
    level: "district",
    parent: 451200
  },
  {
    adcode: 451203,
    lng: 108.653965,
    lat: 24.492193,
    name: "宜州区",
    level: "district",
    parent: 451200
  },
  {
    adcode: 451221,
    lng: 107.546605,
    lat: 24.983192,
    name: "南丹县",
    level: "district",
    parent: 451200
  },
  {
    adcode: 451222,
    lng: 107.174939,
    lat: 24.985964,
    name: "天峨县",
    level: "district",
    parent: 451200
  },
  {
    adcode: 451223,
    lng: 107.044592,
    lat: 24.544561,
    name: "凤山县",
    level: "district",
    parent: 451200
  },
  {
    adcode: 451224,
    lng: 107.373696,
    lat: 24.509367,
    name: "东兰县",
    level: "district",
    parent: 451200
  },
  {
    adcode: 451225,
    lng: 108.902453,
    lat: 24.779327,
    name: "罗城仫佬族自治县",
    level: "district",
    parent: 451200
  },
  {
    adcode: 451226,
    lng: 108.258669,
    lat: 24.827628,
    name: "环江毛南族自治县",
    level: "district",
    parent: 451200
  },
  {
    adcode: 451227,
    lng: 107.253126,
    lat: 24.139538,
    name: "巴马瑶族自治县",
    level: "district",
    parent: 451200
  },
  {
    adcode: 451228,
    lng: 108.102761,
    lat: 23.934964,
    name: "都安瑶族自治县",
    level: "district",
    parent: 451200
  },
  {
    adcode: 451229,
    lng: 107.9945,
    lat: 23.739596,
    name: "大化瑶族自治县",
    level: "district",
    parent: 451200
  },
  {
    adcode: 451300,
    lng: 109.229772,
    lat: 23.733766,
    name: "来宾市",
    level: "city",
    parent: 450000
  },
  {
    adcode: 451302,
    lng: 109.230541,
    lat: 23.732926,
    name: "兴宾区",
    level: "district",
    parent: 451300
  },
  {
    adcode: 451321,
    lng: 108.667361,
    lat: 24.064779,
    name: "忻城县",
    level: "district",
    parent: 451300
  },
  {
    adcode: 451322,
    lng: 109.684555,
    lat: 23.959824,
    name: "象州县",
    level: "district",
    parent: 451300
  },
  {
    adcode: 451323,
    lng: 109.66287,
    lat: 23.604162,
    name: "武宣县",
    level: "district",
    parent: 451300
  },
  {
    adcode: 451324,
    lng: 110.188556,
    lat: 24.134941,
    name: "金秀瑶族自治县",
    level: "district",
    parent: 451300
  },
  {
    adcode: 451381,
    lng: 108.88858,
    lat: 23.81311,
    name: "合山市",
    level: "district",
    parent: 451300
  },
  {
    adcode: 451400,
    lng: 107.353926,
    lat: 22.404108,
    name: "崇左市",
    level: "city",
    parent: 450000
  },
  {
    adcode: 451402,
    lng: 107.354443,
    lat: 22.40469,
    name: "江州区",
    level: "district",
    parent: 451400
  },
  {
    adcode: 451421,
    lng: 107.911533,
    lat: 22.635821,
    name: "扶绥县",
    level: "district",
    parent: 451400
  },
  {
    adcode: 451422,
    lng: 107.067616,
    lat: 22.131353,
    name: "宁明县",
    level: "district",
    parent: 451400
  },
  {
    adcode: 451423,
    lng: 106.857502,
    lat: 22.343716,
    name: "龙州县",
    level: "district",
    parent: 451400
  },
  {
    adcode: 451424,
    lng: 107.200803,
    lat: 22.833369,
    name: "大新县",
    level: "district",
    parent: 451400
  },
  {
    adcode: 451425,
    lng: 107.142441,
    lat: 23.082484,
    name: "天等县",
    level: "district",
    parent: 451400
  },
  {
    adcode: 451481,
    lng: 106.759038,
    lat: 22.108882,
    name: "凭祥市",
    level: "district",
    parent: 451400
  },
  {
    adcode: 460000,
    lng: 110.33119,
    lat: 20.031971,
    name: "海南省",
    level: "province",
    parent: 100000
  },
  {
    adcode: 460100,
    lng: 110.33119,
    lat: 20.031971,
    name: "海口市",
    level: "city",
    parent: 460000
  },
  {
    adcode: 460105,
    lng: 110.282393,
    lat: 20.008145,
    name: "秀英区",
    level: "district",
    parent: 460100
  },
  {
    adcode: 460106,
    lng: 110.330373,
    lat: 20.031026,
    name: "龙华区",
    level: "district",
    parent: 460100
  },
  {
    adcode: 460107,
    lng: 110.354722,
    lat: 20.001051,
    name: "琼山区",
    level: "district",
    parent: 460100
  },
  {
    adcode: 460108,
    lng: 110.356566,
    lat: 20.03074,
    name: "美兰区",
    level: "district",
    parent: 460100
  },
  {
    adcode: 460200,
    lng: 109.508268,
    lat: 18.247872,
    name: "三亚市",
    level: "city",
    parent: 460000
  },
  {
    adcode: 460202,
    lng: 109.760778,
    lat: 18.407516,
    name: "海棠区",
    level: "district",
    parent: 460200
  },
  {
    adcode: 460203,
    lng: 109.512081,
    lat: 18.247436,
    name: "吉阳区",
    level: "district",
    parent: 460200
  },
  {
    adcode: 460204,
    lng: 109.506357,
    lat: 18.24734,
    name: "天涯区",
    level: "district",
    parent: 460200
  },
  {
    adcode: 460205,
    lng: 109.174306,
    lat: 18.352192,
    name: "崖州区",
    level: "district",
    parent: 460200
  },
  {
    adcode: 460300,
    lng: 112.34882,
    lat: 16.831039,
    name: "三沙市",
    level: "city",
    parent: 460000
  },
  {
    adcode: 460301,
    lng: 112.3386402,
    lat: 16.8310066,
    name: "西沙区",
    level: "district",
    parent: 460300
  },
  {
    adcode: 460302,
    lng: 112.891018,
    lat: 9.543575,
    name: "南沙区",
    level: "district",
    parent: 460300
  },
  {
    adcode: 460400,
    lng: 109.576782,
    lat: 19.517486,
    name: "儋州市",
    level: "city",
    parent: 460000
  },
  {
    adcode: 469001,
    lng: 109.516662,
    lat: 18.776921,
    name: "五指山市",
    level: "city",
    parent: 460000
  },
  {
    adcode: 469002,
    lng: 110.466785,
    lat: 19.246011,
    name: "琼海市",
    level: "city",
    parent: 460000
  },
  {
    adcode: 469005,
    lng: 110.753975,
    lat: 19.612986,
    name: "文昌市",
    level: "city",
    parent: 460000
  },
  {
    adcode: 469006,
    lng: 110.388793,
    lat: 18.796216,
    name: "万宁市",
    level: "city",
    parent: 460000
  },
  {
    adcode: 469007,
    lng: 108.653789,
    lat: 19.10198,
    name: "东方市",
    level: "city",
    parent: 460000
  },
  {
    adcode: 469021,
    lng: 110.349235,
    lat: 19.684966,
    name: "定安县",
    level: "city",
    parent: 460000
  },
  {
    adcode: 469022,
    lng: 110.102773,
    lat: 19.362916,
    name: "屯昌县",
    level: "city",
    parent: 460000
  },
  {
    adcode: 469023,
    lng: 110.007147,
    lat: 19.737095,
    name: "澄迈县",
    level: "city",
    parent: 460000
  },
  {
    adcode: 469024,
    lng: 109.687697,
    lat: 19.908293,
    name: "临高县",
    level: "city",
    parent: 460000
  },
  {
    adcode: 469025,
    lng: 109.452606,
    lat: 19.224584,
    name: "白沙黎族自治县",
    level: "city",
    parent: 460000
  },
  {
    adcode: 469026,
    lng: 109.053351,
    lat: 19.260968,
    name: "昌江黎族自治县",
    level: "city",
    parent: 460000
  },
  {
    adcode: 469027,
    lng: 109.175444,
    lat: 18.74758,
    name: "乐东黎族自治县",
    level: "city",
    parent: 460000
  },
  {
    adcode: 469028,
    lng: 110.037218,
    lat: 18.505006,
    name: "陵水黎族自治县",
    level: "city",
    parent: 460000
  },
  {
    adcode: 469029,
    lng: 109.70245,
    lat: 18.636371,
    name: "保亭黎族苗族自治县",
    level: "city",
    parent: 460000
  },
  {
    adcode: 469030,
    lng: 109.839996,
    lat: 19.03557,
    name: "琼中黎族苗族自治县",
    level: "city",
    parent: 460000
  },
  {
    adcode: 500000,
    lng: 106.504962,
    lat: 29.533155,
    name: "重庆市",
    level: "province",
    parent: 100000
  },
  {
    adcode: 500101,
    lng: 108.380246,
    lat: 30.807807,
    name: "万州区",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500102,
    lng: 107.394905,
    lat: 29.703652,
    name: "涪陵区",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500103,
    lng: 106.56288,
    lat: 29.556742,
    name: "渝中区",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500104,
    lng: 106.48613,
    lat: 29.481002,
    name: "大渡口区",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500105,
    lng: 106.532844,
    lat: 29.575352,
    name: "江北区",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500106,
    lng: 106.4542,
    lat: 29.541224,
    name: "沙坪坝区",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500107,
    lng: 106.480989,
    lat: 29.523492,
    name: "九龙坡区",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500108,
    lng: 106.560813,
    lat: 29.523992,
    name: "南岸区",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500109,
    lng: 106.437868,
    lat: 29.82543,
    name: "北碚区",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500110,
    lng: 106.651417,
    lat: 29.028091,
    name: "綦江区",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500111,
    lng: 105.715319,
    lat: 29.700498,
    name: "大足区",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500112,
    lng: 106.512851,
    lat: 29.601451,
    name: "渝北区",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500113,
    lng: 106.519423,
    lat: 29.381919,
    name: "巴南区",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500114,
    lng: 108.782577,
    lat: 29.527548,
    name: "黔江区",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500115,
    lng: 107.074854,
    lat: 29.833671,
    name: "长寿区",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500116,
    lng: 106.253156,
    lat: 29.283387,
    name: "江津区",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500117,
    lng: 106.265554,
    lat: 29.990993,
    name: "合川区",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500118,
    lng: 105.894714,
    lat: 29.348748,
    name: "永川区",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500119,
    lng: 107.098153,
    lat: 29.156646,
    name: "南川区",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500120,
    lng: 106.231126,
    lat: 29.593581,
    name: "璧山区",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500151,
    lng: 106.054948,
    lat: 29.839944,
    name: "铜梁区",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500152,
    lng: 105.841818,
    lat: 30.189554,
    name: "潼南区",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500153,
    lng: 105.594061,
    lat: 29.403627,
    name: "荣昌区",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500154,
    lng: 108.413317,
    lat: 31.167735,
    name: "开州区",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500155,
    lng: 107.800034,
    lat: 30.672168,
    name: "梁平区",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500156,
    lng: 107.75655,
    lat: 29.32376,
    name: "武隆区",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500229,
    lng: 108.6649,
    lat: 31.946293,
    name: "城口县",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500230,
    lng: 107.73248,
    lat: 29.866424,
    name: "丰都县",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500231,
    lng: 107.348692,
    lat: 30.330012,
    name: "垫江县",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500233,
    lng: 108.037518,
    lat: 30.291537,
    name: "忠县",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500235,
    lng: 108.697698,
    lat: 30.930529,
    name: "云阳县",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500236,
    lng: 109.465774,
    lat: 31.019967,
    name: "奉节县",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500237,
    lng: 109.878928,
    lat: 31.074843,
    name: "巫山县",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500238,
    lng: 109.628912,
    lat: 31.3966,
    name: "巫溪县",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500240,
    lng: 108.112448,
    lat: 29.99853,
    name: "石柱土家族自治县",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500241,
    lng: 108.996043,
    lat: 28.444772,
    name: "秀山土家族苗族自治县",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500242,
    lng: 108.767201,
    lat: 28.839828,
    name: "酉阳土家族苗族自治县",
    level: "district",
    parent: 500000
  },
  {
    adcode: 500243,
    lng: 108.166551,
    lat: 29.293856,
    name: "彭水苗族土家族自治县",
    level: "district",
    parent: 500000
  },
  {
    adcode: 510000,
    lng: 104.065735,
    lat: 30.659462,
    name: "四川省",
    level: "province",
    parent: 100000
  },
  {
    adcode: 510100,
    lng: 104.065735,
    lat: 30.659462,
    name: "成都市",
    level: "city",
    parent: 510000
  },
  {
    adcode: 510104,
    lng: 104.080989,
    lat: 30.657689,
    name: "锦江区",
    level: "district",
    parent: 510100
  },
  {
    adcode: 510105,
    lng: 104.055731,
    lat: 30.667648,
    name: "青羊区",
    level: "district",
    parent: 510100
  },
  {
    adcode: 510106,
    lng: 104.043487,
    lat: 30.692058,
    name: "金牛区",
    level: "district",
    parent: 510100
  },
  {
    adcode: 510107,
    lng: 104.05167,
    lat: 30.630862,
    name: "武侯区",
    level: "district",
    parent: 510100
  },
  {
    adcode: 510108,
    lng: 104.103077,
    lat: 30.660275,
    name: "成华区",
    level: "district",
    parent: 510100
  },
  {
    adcode: 510112,
    lng: 104.269181,
    lat: 30.56065,
    name: "龙泉驿区",
    level: "district",
    parent: 510100
  },
  {
    adcode: 510113,
    lng: 104.25494,
    lat: 30.883438,
    name: "青白江区",
    level: "district",
    parent: 510100
  },
  {
    adcode: 510114,
    lng: 104.16022,
    lat: 30.824223,
    name: "新都区",
    level: "district",
    parent: 510100
  },
  {
    adcode: 510115,
    lng: 103.836776,
    lat: 30.697996,
    name: "温江区",
    level: "district",
    parent: 510100
  },
  {
    adcode: 510116,
    lng: 103.922706,
    lat: 30.573243,
    name: "双流区",
    level: "district",
    parent: 510100
  },
  {
    adcode: 510117,
    lng: 103.887842,
    lat: 30.808752,
    name: "郫都区",
    level: "district",
    parent: 510100
  },
  {
    adcode: 510118,
    lng: 103.812449,
    lat: 30.414284,
    name: "新津区",
    level: "district",
    parent: 510100
  },
  {
    adcode: 510121,
    lng: 104.415604,
    lat: 30.858417,
    name: "金堂县",
    level: "district",
    parent: 510100
  },
  {
    adcode: 510129,
    lng: 103.522397,
    lat: 30.586602,
    name: "大邑县",
    level: "district",
    parent: 510100
  },
  {
    adcode: 510131,
    lng: 103.511541,
    lat: 30.194359,
    name: "蒲江县",
    level: "district",
    parent: 510100
  },
  {
    adcode: 510181,
    lng: 103.627898,
    lat: 30.99114,
    name: "都江堰市",
    level: "district",
    parent: 510100
  },
  {
    adcode: 510182,
    lng: 103.941173,
    lat: 30.985161,
    name: "彭州市",
    level: "district",
    parent: 510100
  },
  {
    adcode: 510183,
    lng: 103.46143,
    lat: 30.413271,
    name: "邛崃市",
    level: "district",
    parent: 510100
  },
  {
    adcode: 510184,
    lng: 103.671049,
    lat: 30.631478,
    name: "崇州市",
    level: "district",
    parent: 510100
  },
  {
    adcode: 510185,
    lng: 104.550339,
    lat: 30.390666,
    name: "简阳市",
    level: "district",
    parent: 510100
  },
  {
    adcode: 510300,
    lng: 104.773447,
    lat: 29.352765,
    name: "自贡市",
    level: "city",
    parent: 510000
  },
  {
    adcode: 510302,
    lng: 104.778188,
    lat: 29.343231,
    name: "自流井区",
    level: "district",
    parent: 510300
  },
  {
    adcode: 510303,
    lng: 104.714372,
    lat: 29.345675,
    name: "贡井区",
    level: "district",
    parent: 510300
  },
  {
    adcode: 510304,
    lng: 104.783229,
    lat: 29.367136,
    name: "大安区",
    level: "district",
    parent: 510300
  },
  {
    adcode: 510311,
    lng: 104.876417,
    lat: 29.272521,
    name: "沿滩区",
    level: "district",
    parent: 510300
  },
  {
    adcode: 510321,
    lng: 104.423932,
    lat: 29.454851,
    name: "荣县",
    level: "district",
    parent: 510300
  },
  {
    adcode: 510322,
    lng: 104.984256,
    lat: 29.181282,
    name: "富顺县",
    level: "district",
    parent: 510300
  },
  {
    adcode: 510400,
    lng: 101.716007,
    lat: 26.580446,
    name: "攀枝花市",
    level: "city",
    parent: 510000
  },
  {
    adcode: 510402,
    lng: 101.715134,
    lat: 26.580887,
    name: "东区",
    level: "district",
    parent: 510400
  },
  {
    adcode: 510403,
    lng: 101.637969,
    lat: 26.596776,
    name: "西区",
    level: "district",
    parent: 510400
  },
  {
    adcode: 510411,
    lng: 101.737916,
    lat: 26.497185,
    name: "仁和区",
    level: "district",
    parent: 510400
  },
  {
    adcode: 510421,
    lng: 102.109877,
    lat: 26.887474,
    name: "米易县",
    level: "district",
    parent: 510400
  },
  {
    adcode: 510422,
    lng: 101.851848,
    lat: 26.677619,
    name: "盐边县",
    level: "district",
    parent: 510400
  },
  {
    adcode: 510500,
    lng: 105.443348,
    lat: 28.889138,
    name: "泸州市",
    level: "city",
    parent: 510000
  },
  {
    adcode: 510502,
    lng: 105.445131,
    lat: 28.882889,
    name: "江阳区",
    level: "district",
    parent: 510500
  },
  {
    adcode: 510503,
    lng: 105.37721,
    lat: 28.77631,
    name: "纳溪区",
    level: "district",
    parent: 510500
  },
  {
    adcode: 510504,
    lng: 105.435228,
    lat: 28.897572,
    name: "龙马潭区",
    level: "district",
    parent: 510500
  },
  {
    adcode: 510521,
    lng: 105.376335,
    lat: 29.151288,
    name: "泸县",
    level: "district",
    parent: 510500
  },
  {
    adcode: 510522,
    lng: 105.834098,
    lat: 28.810325,
    name: "合江县",
    level: "district",
    parent: 510500
  },
  {
    adcode: 510524,
    lng: 105.437775,
    lat: 28.167919,
    name: "叙永县",
    level: "district",
    parent: 510500
  },
  {
    adcode: 510525,
    lng: 105.813359,
    lat: 28.03948,
    name: "古蔺县",
    level: "district",
    parent: 510500
  },
  {
    adcode: 510600,
    lng: 104.398651,
    lat: 31.127991,
    name: "德阳市",
    level: "city",
    parent: 510000
  },
  {
    adcode: 510603,
    lng: 104.389648,
    lat: 31.130428,
    name: "旌阳区",
    level: "district",
    parent: 510600
  },
  {
    adcode: 510604,
    lng: 104.507126,
    lat: 31.303281,
    name: "罗江区",
    level: "district",
    parent: 510600
  },
  {
    adcode: 510623,
    lng: 104.677831,
    lat: 31.03681,
    name: "中江县",
    level: "district",
    parent: 510600
  },
  {
    adcode: 510681,
    lng: 104.281903,
    lat: 30.97715,
    name: "广汉市",
    level: "district",
    parent: 510600
  },
  {
    adcode: 510682,
    lng: 104.173653,
    lat: 31.126881,
    name: "什邡市",
    level: "district",
    parent: 510600
  },
  {
    adcode: 510683,
    lng: 104.200162,
    lat: 31.343084,
    name: "绵竹市",
    level: "district",
    parent: 510600
  },
  {
    adcode: 510700,
    lng: 104.741722,
    lat: 31.46402,
    name: "绵阳市",
    level: "city",
    parent: 510000
  },
  {
    adcode: 510703,
    lng: 104.740971,
    lat: 31.463557,
    name: "涪城区",
    level: "district",
    parent: 510700
  },
  {
    adcode: 510704,
    lng: 104.770006,
    lat: 31.484772,
    name: "游仙区",
    level: "district",
    parent: 510700
  },
  {
    adcode: 510705,
    lng: 104.560341,
    lat: 31.53894,
    name: "安州区",
    level: "district",
    parent: 510700
  },
  {
    adcode: 510722,
    lng: 105.090316,
    lat: 31.090909,
    name: "三台县",
    level: "district",
    parent: 510700
  },
  {
    adcode: 510723,
    lng: 105.391991,
    lat: 31.22318,
    name: "盐亭县",
    level: "district",
    parent: 510700
  },
  {
    adcode: 510725,
    lng: 105.16353,
    lat: 31.635225,
    name: "梓潼县",
    level: "district",
    parent: 510700
  },
  {
    adcode: 510726,
    lng: 104.468069,
    lat: 31.615863,
    name: "北川羌族自治县",
    level: "district",
    parent: 510700
  },
  {
    adcode: 510727,
    lng: 104.530555,
    lat: 32.407588,
    name: "平武县",
    level: "district",
    parent: 510700
  },
  {
    adcode: 510781,
    lng: 104.744431,
    lat: 31.776386,
    name: "江油市",
    level: "district",
    parent: 510700
  },
  {
    adcode: 510800,
    lng: 105.829757,
    lat: 32.433668,
    name: "广元市",
    level: "city",
    parent: 510000
  },
  {
    adcode: 510802,
    lng: 105.826194,
    lat: 32.432276,
    name: "利州区",
    level: "district",
    parent: 510800
  },
  {
    adcode: 510811,
    lng: 105.964121,
    lat: 32.322788,
    name: "昭化区",
    level: "district",
    parent: 510800
  },
  {
    adcode: 510812,
    lng: 105.88917,
    lat: 32.642632,
    name: "朝天区",
    level: "district",
    parent: 510800
  },
  {
    adcode: 510821,
    lng: 106.290426,
    lat: 32.22833,
    name: "旺苍县",
    level: "district",
    parent: 510800
  },
  {
    adcode: 510822,
    lng: 105.238847,
    lat: 32.585655,
    name: "青川县",
    level: "district",
    parent: 510800
  },
  {
    adcode: 510823,
    lng: 105.527035,
    lat: 32.286517,
    name: "剑阁县",
    level: "district",
    parent: 510800
  },
  {
    adcode: 510824,
    lng: 105.939706,
    lat: 31.732251,
    name: "苍溪县",
    level: "district",
    parent: 510800
  },
  {
    adcode: 510900,
    lng: 105.571331,
    lat: 30.513311,
    name: "遂宁市",
    level: "city",
    parent: 510000
  },
  {
    adcode: 510903,
    lng: 105.582215,
    lat: 30.502647,
    name: "船山区",
    level: "district",
    parent: 510900
  },
  {
    adcode: 510904,
    lng: 105.459383,
    lat: 30.346121,
    name: "安居区",
    level: "district",
    parent: 510900
  },
  {
    adcode: 510921,
    lng: 105.713699,
    lat: 30.774883,
    name: "蓬溪县",
    level: "district",
    parent: 510900
  },
  {
    adcode: 510923,
    lng: 105.252187,
    lat: 30.581571,
    name: "大英县",
    level: "district",
    parent: 510900
  },
  {
    adcode: 510981,
    lng: 105.381849,
    lat: 30.868752,
    name: "射洪市",
    level: "district",
    parent: 510900
  },
  {
    adcode: 511000,
    lng: 105.066138,
    lat: 29.58708,
    name: "内江市",
    level: "city",
    parent: 510000
  },
  {
    adcode: 511002,
    lng: 105.065467,
    lat: 29.585265,
    name: "市中区",
    level: "district",
    parent: 511000
  },
  {
    adcode: 511011,
    lng: 105.067203,
    lat: 29.600107,
    name: "东兴区",
    level: "district",
    parent: 511000
  },
  {
    adcode: 511024,
    lng: 104.668327,
    lat: 29.52686,
    name: "威远县",
    level: "district",
    parent: 511000
  },
  {
    adcode: 511025,
    lng: 104.852463,
    lat: 29.775295,
    name: "资中县",
    level: "district",
    parent: 511000
  },
  {
    adcode: 511083,
    lng: 105.288074,
    lat: 29.338162,
    name: "隆昌市",
    level: "district",
    parent: 511000
  },
  {
    adcode: 511100,
    lng: 103.761263,
    lat: 29.582024,
    name: "乐山市",
    level: "city",
    parent: 510000
  },
  {
    adcode: 511102,
    lng: 103.75539,
    lat: 29.588327,
    name: "市中区",
    level: "district",
    parent: 511100
  },
  {
    adcode: 511111,
    lng: 103.549961,
    lat: 29.416536,
    name: "沙湾区",
    level: "district",
    parent: 511100
  },
  {
    adcode: 511112,
    lng: 103.816837,
    lat: 29.406186,
    name: "五通桥区",
    level: "district",
    parent: 511100
  },
  {
    adcode: 511113,
    lng: 103.077831,
    lat: 29.24602,
    name: "金口河区",
    level: "district",
    parent: 511100
  },
  {
    adcode: 511123,
    lng: 103.944266,
    lat: 29.209782,
    name: "犍为县",
    level: "district",
    parent: 511100
  },
  {
    adcode: 511124,
    lng: 104.06885,
    lat: 29.651645,
    name: "井研县",
    level: "district",
    parent: 511100
  },
  {
    adcode: 511126,
    lng: 103.578862,
    lat: 29.741019,
    name: "夹江县",
    level: "district",
    parent: 511100
  },
  {
    adcode: 511129,
    lng: 103.90211,
    lat: 28.956338,
    name: "沐川县",
    level: "district",
    parent: 511100
  },
  {
    adcode: 511132,
    lng: 103.262148,
    lat: 29.230271,
    name: "峨边彝族自治县",
    level: "district",
    parent: 511100
  },
  {
    adcode: 511133,
    lng: 103.546851,
    lat: 28.838933,
    name: "马边彝族自治县",
    level: "district",
    parent: 511100
  },
  {
    adcode: 511181,
    lng: 103.492488,
    lat: 29.597478,
    name: "峨眉山市",
    level: "district",
    parent: 511100
  },
  {
    adcode: 511300,
    lng: 106.082974,
    lat: 30.795281,
    name: "南充市",
    level: "city",
    parent: 510000
  },
  {
    adcode: 511302,
    lng: 106.084091,
    lat: 30.795572,
    name: "顺庆区",
    level: "district",
    parent: 511300
  },
  {
    adcode: 511303,
    lng: 106.108996,
    lat: 30.781809,
    name: "高坪区",
    level: "district",
    parent: 511300
  },
  {
    adcode: 511304,
    lng: 106.067027,
    lat: 30.762976,
    name: "嘉陵区",
    level: "district",
    parent: 511300
  },
  {
    adcode: 511321,
    lng: 106.061138,
    lat: 31.349407,
    name: "南部县",
    level: "district",
    parent: 511300
  },
  {
    adcode: 511322,
    lng: 106.564893,
    lat: 31.075907,
    name: "营山县",
    level: "district",
    parent: 511300
  },
  {
    adcode: 511323,
    lng: 106.413488,
    lat: 31.027978,
    name: "蓬安县",
    level: "district",
    parent: 511300
  },
  {
    adcode: 511324,
    lng: 106.297083,
    lat: 31.271261,
    name: "仪陇县",
    level: "district",
    parent: 511300
  },
  {
    adcode: 511325,
    lng: 105.893021,
    lat: 30.994616,
    name: "西充县",
    level: "district",
    parent: 511300
  },
  {
    adcode: 511381,
    lng: 105.975266,
    lat: 31.580466,
    name: "阆中市",
    level: "district",
    parent: 511300
  },
  {
    adcode: 511400,
    lng: 103.831788,
    lat: 30.048318,
    name: "眉山市",
    level: "city",
    parent: 510000
  },
  {
    adcode: 511402,
    lng: 103.831553,
    lat: 30.048128,
    name: "东坡区",
    level: "district",
    parent: 511400
  },
  {
    adcode: 511403,
    lng: 103.8701,
    lat: 30.192298,
    name: "彭山区",
    level: "district",
    parent: 511400
  },
  {
    adcode: 511421,
    lng: 104.147646,
    lat: 29.996721,
    name: "仁寿县",
    level: "district",
    parent: 511400
  },
  {
    adcode: 511423,
    lng: 103.375006,
    lat: 29.904867,
    name: "洪雅县",
    level: "district",
    parent: 511400
  },
  {
    adcode: 511424,
    lng: 103.518333,
    lat: 30.012751,
    name: "丹棱县",
    level: "district",
    parent: 511400
  },
  {
    adcode: 511425,
    lng: 103.846131,
    lat: 29.831469,
    name: "青神县",
    level: "district",
    parent: 511400
  },
  {
    adcode: 511500,
    lng: 104.630825,
    lat: 28.760189,
    name: "宜宾市",
    level: "city",
    parent: 510000
  },
  {
    adcode: 511502,
    lng: 104.630231,
    lat: 28.760179,
    name: "翠屏区",
    level: "district",
    parent: 511500
  },
  {
    adcode: 511503,
    lng: 104.981133,
    lat: 28.839806,
    name: "南溪区",
    level: "district",
    parent: 511500
  },
  {
    adcode: 511504,
    lng: 104.541489,
    lat: 28.695678,
    name: "叙州区",
    level: "district",
    parent: 511500
  },
  {
    adcode: 511523,
    lng: 105.068697,
    lat: 28.728102,
    name: "江安县",
    level: "district",
    parent: 511500
  },
  {
    adcode: 511524,
    lng: 104.921116,
    lat: 28.577271,
    name: "长宁县",
    level: "district",
    parent: 511500
  },
  {
    adcode: 511525,
    lng: 104.519187,
    lat: 28.435676,
    name: "高县",
    level: "district",
    parent: 511500
  },
  {
    adcode: 511526,
    lng: 104.712268,
    lat: 28.449041,
    name: "珙县",
    level: "district",
    parent: 511500
  },
  {
    adcode: 511527,
    lng: 104.507848,
    lat: 28.162017,
    name: "筠连县",
    level: "district",
    parent: 511500
  },
  {
    adcode: 511528,
    lng: 105.236549,
    lat: 28.302988,
    name: "兴文县",
    level: "district",
    parent: 511500
  },
  {
    adcode: 511529,
    lng: 104.162617,
    lat: 28.64237,
    name: "屏山县",
    level: "district",
    parent: 511500
  },
  {
    adcode: 511600,
    lng: 106.633369,
    lat: 30.456398,
    name: "广安市",
    level: "city",
    parent: 510000
  },
  {
    adcode: 511602,
    lng: 106.632907,
    lat: 30.456462,
    name: "广安区",
    level: "district",
    parent: 511600
  },
  {
    adcode: 511603,
    lng: 106.893277,
    lat: 30.4963,
    name: "前锋区",
    level: "district",
    parent: 511600
  },
  {
    adcode: 511621,
    lng: 106.444451,
    lat: 30.533538,
    name: "岳池县",
    level: "district",
    parent: 511600
  },
  {
    adcode: 511622,
    lng: 106.292473,
    lat: 30.344291,
    name: "武胜县",
    level: "district",
    parent: 511600
  },
  {
    adcode: 511623,
    lng: 106.934968,
    lat: 30.334323,
    name: "邻水县",
    level: "district",
    parent: 511600
  },
  {
    adcode: 511681,
    lng: 106.777882,
    lat: 30.380574,
    name: "华蓥市",
    level: "district",
    parent: 511600
  },
  {
    adcode: 511700,
    lng: 107.502262,
    lat: 31.209484,
    name: "达州市",
    level: "city",
    parent: 510000
  },
  {
    adcode: 511702,
    lng: 107.501062,
    lat: 31.213522,
    name: "通川区",
    level: "district",
    parent: 511700
  },
  {
    adcode: 511703,
    lng: 107.507926,
    lat: 31.199062,
    name: "达川区",
    level: "district",
    parent: 511700
  },
  {
    adcode: 511722,
    lng: 107.722254,
    lat: 31.355025,
    name: "宣汉县",
    level: "district",
    parent: 511700
  },
  {
    adcode: 511723,
    lng: 107.864135,
    lat: 31.085537,
    name: "开江县",
    level: "district",
    parent: 511700
  },
  {
    adcode: 511724,
    lng: 107.20742,
    lat: 30.736289,
    name: "大竹县",
    level: "district",
    parent: 511700
  },
  {
    adcode: 511725,
    lng: 106.970746,
    lat: 30.836348,
    name: "渠县",
    level: "district",
    parent: 511700
  },
  {
    adcode: 511781,
    lng: 108.037548,
    lat: 32.06777,
    name: "万源市",
    level: "district",
    parent: 511700
  },
  {
    adcode: 511800,
    lng: 103.001033,
    lat: 29.987722,
    name: "雅安市",
    level: "city",
    parent: 510000
  },
  {
    adcode: 511802,
    lng: 103.003398,
    lat: 29.981831,
    name: "雨城区",
    level: "district",
    parent: 511800
  },
  {
    adcode: 511803,
    lng: 103.112214,
    lat: 30.084718,
    name: "名山区",
    level: "district",
    parent: 511800
  },
  {
    adcode: 511822,
    lng: 102.844674,
    lat: 29.795529,
    name: "荥经县",
    level: "district",
    parent: 511800
  },
  {
    adcode: 511823,
    lng: 102.677145,
    lat: 29.349915,
    name: "汉源县",
    level: "district",
    parent: 511800
  },
  {
    adcode: 511824,
    lng: 102.35962,
    lat: 29.234063,
    name: "石棉县",
    level: "district",
    parent: 511800
  },
  {
    adcode: 511825,
    lng: 102.763462,
    lat: 30.059955,
    name: "天全县",
    level: "district",
    parent: 511800
  },
  {
    adcode: 511826,
    lng: 102.924016,
    lat: 30.152907,
    name: "芦山县",
    level: "district",
    parent: 511800
  },
  {
    adcode: 511827,
    lng: 102.813377,
    lat: 30.369026,
    name: "宝兴县",
    level: "district",
    parent: 511800
  },
  {
    adcode: 511900,
    lng: 106.753669,
    lat: 31.858809,
    name: "巴中市",
    level: "city",
    parent: 510000
  },
  {
    adcode: 511902,
    lng: 106.753671,
    lat: 31.858366,
    name: "巴州区",
    level: "district",
    parent: 511900
  },
  {
    adcode: 511903,
    lng: 106.486515,
    lat: 31.816336,
    name: "恩阳区",
    level: "district",
    parent: 511900
  },
  {
    adcode: 511921,
    lng: 107.247621,
    lat: 31.91212,
    name: "通江县",
    level: "district",
    parent: 511900
  },
  {
    adcode: 511922,
    lng: 106.843418,
    lat: 32.353164,
    name: "南江县",
    level: "district",
    parent: 511900
  },
  {
    adcode: 511923,
    lng: 107.101937,
    lat: 31.562814,
    name: "平昌县",
    level: "district",
    parent: 511900
  },
  {
    adcode: 512000,
    lng: 104.641917,
    lat: 30.122211,
    name: "资阳市",
    level: "city",
    parent: 510000
  },
  {
    adcode: 512002,
    lng: 104.642338,
    lat: 30.121686,
    name: "雁江区",
    level: "district",
    parent: 512000
  },
  {
    adcode: 512021,
    lng: 105.336764,
    lat: 30.099206,
    name: "安岳县",
    level: "district",
    parent: 512000
  },
  {
    adcode: 512022,
    lng: 105.031142,
    lat: 30.275619,
    name: "乐至县",
    level: "district",
    parent: 512000
  },
  {
    adcode: 513200,
    lng: 102.221374,
    lat: 31.899792,
    name: "阿坝藏族羌族自治州",
    level: "city",
    parent: 510000
  },
  {
    adcode: 513201,
    lng: 102.221187,
    lat: 31.899761,
    name: "马尔康市",
    level: "district",
    parent: 513200
  },
  {
    adcode: 513221,
    lng: 103.580675,
    lat: 31.47463,
    name: "汶川县",
    level: "district",
    parent: 513200
  },
  {
    adcode: 513222,
    lng: 103.165486,
    lat: 31.436764,
    name: "理县",
    level: "district",
    parent: 513200
  },
  {
    adcode: 513223,
    lng: 103.850684,
    lat: 31.680407,
    name: "茂县",
    level: "district",
    parent: 513200
  },
  {
    adcode: 513224,
    lng: 103.599177,
    lat: 32.63838,
    name: "松潘县",
    level: "district",
    parent: 513200
  },
  {
    adcode: 513225,
    lng: 104.236344,
    lat: 33.262097,
    name: "九寨沟县",
    level: "district",
    parent: 513200
  },
  {
    adcode: 513226,
    lng: 102.064647,
    lat: 31.476356,
    name: "金川县",
    level: "district",
    parent: 513200
  },
  {
    adcode: 513227,
    lng: 102.363193,
    lat: 30.999016,
    name: "小金县",
    level: "district",
    parent: 513200
  },
  {
    adcode: 513228,
    lng: 102.990805,
    lat: 32.061721,
    name: "黑水县",
    level: "district",
    parent: 513200
  },
  {
    adcode: 513230,
    lng: 100.979136,
    lat: 32.264887,
    name: "壤塘县",
    level: "district",
    parent: 513200
  },
  {
    adcode: 513231,
    lng: 101.700985,
    lat: 32.904223,
    name: "阿坝县",
    level: "district",
    parent: 513200
  },
  {
    adcode: 513232,
    lng: 102.963726,
    lat: 33.575934,
    name: "若尔盖县",
    level: "district",
    parent: 513200
  },
  {
    adcode: 513233,
    lng: 102.544906,
    lat: 32.793902,
    name: "红原县",
    level: "district",
    parent: 513200
  },
  {
    adcode: 513300,
    lng: 101.963815,
    lat: 30.050663,
    name: "甘孜藏族自治州",
    level: "city",
    parent: 510000
  },
  {
    adcode: 513301,
    lng: 101.964057,
    lat: 30.050738,
    name: "康定市",
    level: "district",
    parent: 513300
  },
  {
    adcode: 513322,
    lng: 102.233225,
    lat: 29.912482,
    name: "泸定县",
    level: "district",
    parent: 513300
  },
  {
    adcode: 513323,
    lng: 101.886125,
    lat: 30.877083,
    name: "丹巴县",
    level: "district",
    parent: 513300
  },
  {
    adcode: 513324,
    lng: 101.506942,
    lat: 29.001975,
    name: "九龙县",
    level: "district",
    parent: 513300
  },
  {
    adcode: 513325,
    lng: 101.015735,
    lat: 30.03225,
    name: "雅江县",
    level: "district",
    parent: 513300
  },
  {
    adcode: 513326,
    lng: 101.123327,
    lat: 30.978767,
    name: "道孚县",
    level: "district",
    parent: 513300
  },
  {
    adcode: 513327,
    lng: 100.679495,
    lat: 31.392674,
    name: "炉霍县",
    level: "district",
    parent: 513300
  },
  {
    adcode: 513328,
    lng: 99.991753,
    lat: 31.61975,
    name: "甘孜县",
    level: "district",
    parent: 513300
  },
  {
    adcode: 513329,
    lng: 100.312094,
    lat: 30.93896,
    name: "新龙县",
    level: "district",
    parent: 513300
  },
  {
    adcode: 513330,
    lng: 98.57999,
    lat: 31.806729,
    name: "德格县",
    level: "district",
    parent: 513300
  },
  {
    adcode: 513331,
    lng: 98.824343,
    lat: 31.208805,
    name: "白玉县",
    level: "district",
    parent: 513300
  },
  {
    adcode: 513332,
    lng: 98.100887,
    lat: 32.975302,
    name: "石渠县",
    level: "district",
    parent: 513300
  },
  {
    adcode: 513333,
    lng: 100.331657,
    lat: 32.268777,
    name: "色达县",
    level: "district",
    parent: 513300
  },
  {
    adcode: 513334,
    lng: 100.269862,
    lat: 29.991807,
    name: "理塘县",
    level: "district",
    parent: 513300
  },
  {
    adcode: 513335,
    lng: 99.109037,
    lat: 30.005723,
    name: "巴塘县",
    level: "district",
    parent: 513300
  },
  {
    adcode: 513336,
    lng: 99.799943,
    lat: 28.930855,
    name: "乡城县",
    level: "district",
    parent: 513300
  },
  {
    adcode: 513337,
    lng: 100.296689,
    lat: 29.037544,
    name: "稻城县",
    level: "district",
    parent: 513300
  },
  {
    adcode: 513338,
    lng: 99.288036,
    lat: 28.71134,
    name: "得荣县",
    level: "district",
    parent: 513300
  },
  {
    adcode: 513400,
    lng: 102.258746,
    lat: 27.886762,
    name: "凉山彝族自治州",
    level: "city",
    parent: 510000
  },
  {
    adcode: 513401,
    lng: 102.258758,
    lat: 27.885786,
    name: "西昌市",
    level: "district",
    parent: 513400
  },
  {
    adcode: 513422,
    lng: 101.280184,
    lat: 27.926859,
    name: "木里藏族自治县",
    level: "district",
    parent: 513400
  },
  {
    adcode: 513423,
    lng: 101.508909,
    lat: 27.423415,
    name: "盐源县",
    level: "district",
    parent: 513400
  },
  {
    adcode: 513424,
    lng: 102.178845,
    lat: 27.403827,
    name: "德昌县",
    level: "district",
    parent: 513400
  },
  {
    adcode: 513425,
    lng: 102.249548,
    lat: 26.658702,
    name: "会理市",
    level: "district",
    parent: 513400
  },
  {
    adcode: 513426,
    lng: 102.578985,
    lat: 26.630713,
    name: "会东县",
    level: "district",
    parent: 513400
  },
  {
    adcode: 513427,
    lng: 102.757374,
    lat: 27.065205,
    name: "宁南县",
    level: "district",
    parent: 513400
  },
  {
    adcode: 513428,
    lng: 102.541082,
    lat: 27.376828,
    name: "普格县",
    level: "district",
    parent: 513400
  },
  {
    adcode: 513429,
    lng: 102.808801,
    lat: 27.709062,
    name: "布拖县",
    level: "district",
    parent: 513400
  },
  {
    adcode: 513430,
    lng: 103.248704,
    lat: 27.695916,
    name: "金阳县",
    level: "district",
    parent: 513400
  },
  {
    adcode: 513431,
    lng: 102.843991,
    lat: 28.010554,
    name: "昭觉县",
    level: "district",
    parent: 513400
  },
  {
    adcode: 513432,
    lng: 102.412342,
    lat: 28.305486,
    name: "喜德县",
    level: "district",
    parent: 513400
  },
  {
    adcode: 513433,
    lng: 102.170046,
    lat: 28.550844,
    name: "冕宁县",
    level: "district",
    parent: 513400
  },
  {
    adcode: 513434,
    lng: 102.508875,
    lat: 28.639632,
    name: "越西县",
    level: "district",
    parent: 513400
  },
  {
    adcode: 513435,
    lng: 102.775924,
    lat: 28.977094,
    name: "甘洛县",
    level: "district",
    parent: 513400
  },
  {
    adcode: 513436,
    lng: 103.132007,
    lat: 28.327946,
    name: "美姑县",
    level: "district",
    parent: 513400
  },
  {
    adcode: 513437,
    lng: 103.571584,
    lat: 28.262946,
    name: "雷波县",
    level: "district",
    parent: 513400
  },
  {
    adcode: 520000,
    lng: 106.713478,
    lat: 26.578343,
    name: "贵州省",
    level: "province",
    parent: 100000
  },
  {
    adcode: 520100,
    lng: 106.713478,
    lat: 26.578343,
    name: "贵阳市",
    level: "city",
    parent: 520000
  },
  {
    adcode: 520102,
    lng: 106.715963,
    lat: 26.573743,
    name: "南明区",
    level: "district",
    parent: 520100
  },
  {
    adcode: 520103,
    lng: 106.713397,
    lat: 26.58301,
    name: "云岩区",
    level: "district",
    parent: 520100
  },
  {
    adcode: 520111,
    lng: 106.670791,
    lat: 26.410464,
    name: "花溪区",
    level: "district",
    parent: 520100
  },
  {
    adcode: 520112,
    lng: 106.762123,
    lat: 26.630928,
    name: "乌当区",
    level: "district",
    parent: 520100
  },
  {
    adcode: 520113,
    lng: 106.633037,
    lat: 26.676849,
    name: "白云区",
    level: "district",
    parent: 520100
  },
  {
    adcode: 520115,
    lng: 106.626323,
    lat: 26.646358,
    name: "观山湖区",
    level: "district",
    parent: 520100
  },
  {
    adcode: 520121,
    lng: 106.969438,
    lat: 27.056793,
    name: "开阳县",
    level: "district",
    parent: 520100
  },
  {
    adcode: 520122,
    lng: 106.737693,
    lat: 27.092665,
    name: "息烽县",
    level: "district",
    parent: 520100
  },
  {
    adcode: 520123,
    lng: 106.599218,
    lat: 26.840672,
    name: "修文县",
    level: "district",
    parent: 520100
  },
  {
    adcode: 520181,
    lng: 106.470278,
    lat: 26.551289,
    name: "清镇市",
    level: "district",
    parent: 520100
  },
  {
    adcode: 520200,
    lng: 104.846743,
    lat: 26.584643,
    name: "六盘水市",
    level: "city",
    parent: 520000
  },
  {
    adcode: 520201,
    lng: 104.846244,
    lat: 26.584805,
    name: "钟山区",
    level: "district",
    parent: 520200
  },
  {
    adcode: 520203,
    lng: 105.474235,
    lat: 26.210662,
    name: "六枝特区",
    level: "district",
    parent: 520200
  },
  {
    adcode: 520221,
    lng: 104.95685,
    lat: 26.540478,
    name: "水城区",
    level: "district",
    parent: 520200
  },
  {
    adcode: 520281,
    lng: 104.468367,
    lat: 25.706966,
    name: "盘州市",
    level: "district",
    parent: 520200
  },
  {
    adcode: 520300,
    lng: 106.937265,
    lat: 27.706626,
    name: "遵义市",
    level: "city",
    parent: 520000
  },
  {
    adcode: 520302,
    lng: 106.943784,
    lat: 27.694395,
    name: "红花岗区",
    level: "district",
    parent: 520300
  },
  {
    adcode: 520303,
    lng: 106.937265,
    lat: 27.706626,
    name: "汇川区",
    level: "district",
    parent: 520300
  },
  {
    adcode: 520304,
    lng: 106.831668,
    lat: 27.535288,
    name: "播州区",
    level: "district",
    parent: 520300
  },
  {
    adcode: 520322,
    lng: 106.826591,
    lat: 28.131559,
    name: "桐梓县",
    level: "district",
    parent: 520300
  },
  {
    adcode: 520323,
    lng: 107.191024,
    lat: 27.951342,
    name: "绥阳县",
    level: "district",
    parent: 520300
  },
  {
    adcode: 520324,
    lng: 107.441872,
    lat: 28.550337,
    name: "正安县",
    level: "district",
    parent: 520300
  },
  {
    adcode: 520325,
    lng: 107.605342,
    lat: 28.880088,
    name: "道真仡佬族苗族自治县",
    level: "district",
    parent: 520300
  },
  {
    adcode: 520326,
    lng: 107.887857,
    lat: 28.521567,
    name: "务川仡佬族苗族自治县",
    level: "district",
    parent: 520300
  },
  {
    adcode: 520327,
    lng: 107.722021,
    lat: 27.960858,
    name: "凤冈县",
    level: "district",
    parent: 520300
  },
  {
    adcode: 520328,
    lng: 107.485723,
    lat: 27.765839,
    name: "湄潭县",
    level: "district",
    parent: 520300
  },
  {
    adcode: 520329,
    lng: 107.892566,
    lat: 27.221552,
    name: "余庆县",
    level: "district",
    parent: 520300
  },
  {
    adcode: 520330,
    lng: 106.200954,
    lat: 28.327826,
    name: "习水县",
    level: "district",
    parent: 520300
  },
  {
    adcode: 520381,
    lng: 105.698116,
    lat: 28.587057,
    name: "赤水市",
    level: "district",
    parent: 520300
  },
  {
    adcode: 520382,
    lng: 106.412476,
    lat: 27.803377,
    name: "仁怀市",
    level: "district",
    parent: 520300
  },
  {
    adcode: 520400,
    lng: 105.932188,
    lat: 26.245544,
    name: "安顺市",
    level: "city",
    parent: 520000
  },
  {
    adcode: 520402,
    lng: 105.946169,
    lat: 26.248323,
    name: "西秀区",
    level: "district",
    parent: 520400
  },
  {
    adcode: 520403,
    lng: 106.259942,
    lat: 26.40608,
    name: "平坝区",
    level: "district",
    parent: 520400
  },
  {
    adcode: 520422,
    lng: 105.745609,
    lat: 26.305794,
    name: "普定县",
    level: "district",
    parent: 520400
  },
  {
    adcode: 520423,
    lng: 105.768656,
    lat: 26.056096,
    name: "镇宁布依族苗族自治县",
    level: "district",
    parent: 520400
  },
  {
    adcode: 520424,
    lng: 105.618454,
    lat: 25.944248,
    name: "关岭布依族苗族自治县",
    level: "district",
    parent: 520400
  },
  {
    adcode: 520425,
    lng: 106.084515,
    lat: 25.751567,
    name: "紫云苗族布依族自治县",
    level: "district",
    parent: 520400
  },
  {
    adcode: 520500,
    lng: 105.28501,
    lat: 27.301693,
    name: "毕节市",
    level: "city",
    parent: 520000
  },
  {
    adcode: 520502,
    lng: 105.284852,
    lat: 27.302085,
    name: "七星关区",
    level: "district",
    parent: 520500
  },
  {
    adcode: 520521,
    lng: 105.609254,
    lat: 27.143521,
    name: "大方县",
    level: "district",
    parent: 520500
  },
  {
    adcode: 520522,
    lng: 106.038299,
    lat: 27.024923,
    name: "黔西市",
    level: "district",
    parent: 520500
  },
  {
    adcode: 520523,
    lng: 106.222103,
    lat: 27.459693,
    name: "金沙县",
    level: "district",
    parent: 520500
  },
  {
    adcode: 520524,
    lng: 105.768997,
    lat: 26.668497,
    name: "织金县",
    level: "district",
    parent: 520500
  },
  {
    adcode: 520525,
    lng: 105.375322,
    lat: 26.769875,
    name: "纳雍县",
    level: "district",
    parent: 520500
  },
  {
    adcode: 520526,
    lng: 104.286523,
    lat: 26.859099,
    name: "威宁彝族回族苗族自治县",
    level: "district",
    parent: 520500
  },
  {
    adcode: 520527,
    lng: 104.726438,
    lat: 27.119243,
    name: "赫章县",
    level: "district",
    parent: 520500
  },
  {
    adcode: 520600,
    lng: 109.191555,
    lat: 27.718346,
    name: "铜仁市",
    level: "city",
    parent: 520000
  },
  {
    adcode: 520602,
    lng: 109.192117,
    lat: 27.718745,
    name: "碧江区",
    level: "district",
    parent: 520600
  },
  {
    adcode: 520603,
    lng: 109.21199,
    lat: 27.51903,
    name: "万山区",
    level: "district",
    parent: 520600
  },
  {
    adcode: 520621,
    lng: 108.848427,
    lat: 27.691904,
    name: "江口县",
    level: "district",
    parent: 520600
  },
  {
    adcode: 520622,
    lng: 108.917882,
    lat: 27.238024,
    name: "玉屏侗族自治县",
    level: "district",
    parent: 520600
  },
  {
    adcode: 520623,
    lng: 108.229854,
    lat: 27.519386,
    name: "石阡县",
    level: "district",
    parent: 520600
  },
  {
    adcode: 520624,
    lng: 108.255827,
    lat: 27.941331,
    name: "思南县",
    level: "district",
    parent: 520600
  },
  {
    adcode: 520625,
    lng: 108.405517,
    lat: 27.997976,
    name: "印江土家族苗族自治县",
    level: "district",
    parent: 520600
  },
  {
    adcode: 520626,
    lng: 108.117317,
    lat: 28.26094,
    name: "德江县",
    level: "district",
    parent: 520600
  },
  {
    adcode: 520627,
    lng: 108.495746,
    lat: 28.560487,
    name: "沿河土家族自治县",
    level: "district",
    parent: 520600
  },
  {
    adcode: 520628,
    lng: 109.202627,
    lat: 28.165419,
    name: "松桃苗族自治县",
    level: "district",
    parent: 520600
  },
  {
    adcode: 522300,
    lng: 104.897971,
    lat: 25.08812,
    name: "黔西南布依族苗族自治州",
    level: "city",
    parent: 520000
  },
  {
    adcode: 522301,
    lng: 104.897982,
    lat: 25.088599,
    name: "兴义市",
    level: "district",
    parent: 522300
  },
  {
    adcode: 522302,
    lng: 105.192778,
    lat: 25.431378,
    name: "兴仁市",
    level: "district",
    parent: 522300
  },
  {
    adcode: 522323,
    lng: 104.955347,
    lat: 25.786404,
    name: "普安县",
    level: "district",
    parent: 522300
  },
  {
    adcode: 522324,
    lng: 105.218773,
    lat: 25.832881,
    name: "晴隆县",
    level: "district",
    parent: 522300
  },
  {
    adcode: 522325,
    lng: 105.650133,
    lat: 25.385752,
    name: "贞丰县",
    level: "district",
    parent: 522300
  },
  {
    adcode: 522326,
    lng: 106.091563,
    lat: 25.166667,
    name: "望谟县",
    level: "district",
    parent: 522300
  },
  {
    adcode: 522327,
    lng: 105.81241,
    lat: 24.983338,
    name: "册亨县",
    level: "district",
    parent: 522300
  },
  {
    adcode: 522328,
    lng: 105.471498,
    lat: 25.108959,
    name: "安龙县",
    level: "district",
    parent: 522300
  },
  {
    adcode: 522600,
    lng: 107.977488,
    lat: 26.583352,
    name: "黔东南苗族侗族自治州",
    level: "city",
    parent: 520000
  },
  {
    adcode: 522601,
    lng: 107.977541,
    lat: 26.582964,
    name: "凯里市",
    level: "district",
    parent: 522600
  },
  {
    adcode: 522622,
    lng: 107.901337,
    lat: 26.896973,
    name: "黄平县",
    level: "district",
    parent: 522600
  },
  {
    adcode: 522623,
    lng: 108.12678,
    lat: 27.034657,
    name: "施秉县",
    level: "district",
    parent: 522600
  },
  {
    adcode: 522624,
    lng: 108.681121,
    lat: 26.959884,
    name: "三穗县",
    level: "district",
    parent: 522600
  },
  {
    adcode: 522625,
    lng: 108.423656,
    lat: 27.050233,
    name: "镇远县",
    level: "district",
    parent: 522600
  },
  {
    adcode: 522626,
    lng: 108.816459,
    lat: 27.173244,
    name: "岑巩县",
    level: "district",
    parent: 522600
  },
  {
    adcode: 522627,
    lng: 109.212798,
    lat: 26.909684,
    name: "天柱县",
    level: "district",
    parent: 522600
  },
  {
    adcode: 522628,
    lng: 109.20252,
    lat: 26.680625,
    name: "锦屏县",
    level: "district",
    parent: 522600
  },
  {
    adcode: 522629,
    lng: 108.440499,
    lat: 26.727349,
    name: "剑河县",
    level: "district",
    parent: 522600
  },
  {
    adcode: 522630,
    lng: 108.314637,
    lat: 26.669138,
    name: "台江县",
    level: "district",
    parent: 522600
  },
  {
    adcode: 522631,
    lng: 109.136504,
    lat: 26.230636,
    name: "黎平县",
    level: "district",
    parent: 522600
  },
  {
    adcode: 522632,
    lng: 108.521026,
    lat: 25.931085,
    name: "榕江县",
    level: "district",
    parent: 522600
  },
  {
    adcode: 522633,
    lng: 108.912648,
    lat: 25.747058,
    name: "从江县",
    level: "district",
    parent: 522600
  },
  {
    adcode: 522634,
    lng: 108.079613,
    lat: 26.381027,
    name: "雷山县",
    level: "district",
    parent: 522600
  },
  {
    adcode: 522635,
    lng: 107.593172,
    lat: 26.494803,
    name: "麻江县",
    level: "district",
    parent: 522600
  },
  {
    adcode: 522636,
    lng: 107.794808,
    lat: 26.199497,
    name: "丹寨县",
    level: "district",
    parent: 522600
  },
  {
    adcode: 522700,
    lng: 107.517156,
    lat: 26.258219,
    name: "黔南布依族苗族自治州",
    level: "city",
    parent: 520000
  },
  {
    adcode: 522701,
    lng: 107.517021,
    lat: 26.258205,
    name: "都匀市",
    level: "district",
    parent: 522700
  },
  {
    adcode: 522702,
    lng: 107.513508,
    lat: 26.702508,
    name: "福泉市",
    level: "district",
    parent: 522700
  },
  {
    adcode: 522722,
    lng: 107.8838,
    lat: 25.412239,
    name: "荔波县",
    level: "district",
    parent: 522700
  },
  {
    adcode: 522723,
    lng: 107.233588,
    lat: 26.580807,
    name: "贵定县",
    level: "district",
    parent: 522700
  },
  {
    adcode: 522725,
    lng: 107.478417,
    lat: 27.066339,
    name: "瓮安县",
    level: "district",
    parent: 522700
  },
  {
    adcode: 522726,
    lng: 107.542757,
    lat: 25.826283,
    name: "独山县",
    level: "district",
    parent: 522700
  },
  {
    adcode: 522727,
    lng: 107.32405,
    lat: 25.831803,
    name: "平塘县",
    level: "district",
    parent: 522700
  },
  {
    adcode: 522728,
    lng: 106.750006,
    lat: 25.429894,
    name: "罗甸县",
    level: "district",
    parent: 522700
  },
  {
    adcode: 522729,
    lng: 106.447376,
    lat: 26.022116,
    name: "长顺县",
    level: "district",
    parent: 522700
  },
  {
    adcode: 522730,
    lng: 106.977733,
    lat: 26.448809,
    name: "龙里县",
    level: "district",
    parent: 522700
  },
  {
    adcode: 522731,
    lng: 106.657848,
    lat: 26.128637,
    name: "惠水县",
    level: "district",
    parent: 522700
  },
  {
    adcode: 522732,
    lng: 107.87747,
    lat: 25.985183,
    name: "三都水族自治县",
    level: "district",
    parent: 522700
  },
  {
    adcode: 530000,
    lng: 102.712251,
    lat: 25.040609,
    name: "云南省",
    level: "province",
    parent: 100000
  },
  {
    adcode: 530100,
    lng: 102.712251,
    lat: 25.040609,
    name: "昆明市",
    level: "city",
    parent: 530000
  },
  {
    adcode: 530102,
    lng: 102.704412,
    lat: 25.042165,
    name: "五华区",
    level: "district",
    parent: 530100
  },
  {
    adcode: 530103,
    lng: 102.729044,
    lat: 25.070239,
    name: "盘龙区",
    level: "district",
    parent: 530100
  },
  {
    adcode: 530111,
    lng: 102.723437,
    lat: 25.021211,
    name: "官渡区",
    level: "district",
    parent: 530100
  },
  {
    adcode: 530112,
    lng: 102.705904,
    lat: 25.02436,
    name: "西山区",
    level: "district",
    parent: 530100
  },
  {
    adcode: 530113,
    lng: 103.182,
    lat: 26.08349,
    name: "东川区",
    level: "district",
    parent: 530100
  },
  {
    adcode: 530114,
    lng: 102.801382,
    lat: 24.889275,
    name: "呈贡区",
    level: "district",
    parent: 530100
  },
  {
    adcode: 530115,
    lng: 102.594987,
    lat: 24.666944,
    name: "晋宁区",
    level: "district",
    parent: 530100
  },
  {
    adcode: 530124,
    lng: 102.497888,
    lat: 25.219667,
    name: "富民县",
    level: "district",
    parent: 530100
  },
  {
    adcode: 530125,
    lng: 103.145989,
    lat: 24.918215,
    name: "宜良县",
    level: "district",
    parent: 530100
  },
  {
    adcode: 530126,
    lng: 103.271962,
    lat: 24.754545,
    name: "石林彝族自治县",
    level: "district",
    parent: 530100
  },
  {
    adcode: 530127,
    lng: 103.038777,
    lat: 25.335087,
    name: "嵩明县",
    level: "district",
    parent: 530100
  },
  {
    adcode: 530128,
    lng: 102.46905,
    lat: 25.556533,
    name: "禄劝彝族苗族自治县",
    level: "district",
    parent: 530100
  },
  {
    adcode: 530129,
    lng: 103.257588,
    lat: 25.559474,
    name: "寻甸回族彝族自治县",
    level: "district",
    parent: 530100
  },
  {
    adcode: 530181,
    lng: 102.485544,
    lat: 24.921785,
    name: "安宁市",
    level: "district",
    parent: 530100
  },
  {
    adcode: 530300,
    lng: 103.797851,
    lat: 25.501557,
    name: "曲靖市",
    level: "city",
    parent: 530000
  },
  {
    adcode: 530302,
    lng: 103.798054,
    lat: 25.501269,
    name: "麒麟区",
    level: "district",
    parent: 530300
  },
  {
    adcode: 530303,
    lng: 103.819262,
    lat: 25.600878,
    name: "沾益区",
    level: "district",
    parent: 530300
  },
  {
    adcode: 530304,
    lng: 103.578755,
    lat: 25.429451,
    name: "马龙区",
    level: "district",
    parent: 530300
  },
  {
    adcode: 530322,
    lng: 103.655233,
    lat: 25.022878,
    name: "陆良县",
    level: "district",
    parent: 530300
  },
  {
    adcode: 530323,
    lng: 103.993808,
    lat: 24.825681,
    name: "师宗县",
    level: "district",
    parent: 530300
  },
  {
    adcode: 530324,
    lng: 104.309263,
    lat: 24.885708,
    name: "罗平县",
    level: "district",
    parent: 530300
  },
  {
    adcode: 530325,
    lng: 104.25692,
    lat: 25.67064,
    name: "富源县",
    level: "district",
    parent: 530300
  },
  {
    adcode: 530326,
    lng: 103.300041,
    lat: 26.412861,
    name: "会泽县",
    level: "district",
    parent: 530300
  },
  {
    adcode: 530381,
    lng: 104.09554,
    lat: 26.227777,
    name: "宣威市",
    level: "district",
    parent: 530300
  },
  {
    adcode: 530400,
    lng: 102.543907,
    lat: 24.350461,
    name: "玉溪市",
    level: "city",
    parent: 530000
  },
  {
    adcode: 530402,
    lng: 102.543468,
    lat: 24.350753,
    name: "红塔区",
    level: "district",
    parent: 530400
  },
  {
    adcode: 530403,
    lng: 102.749839,
    lat: 24.291006,
    name: "江川区",
    level: "district",
    parent: 530400
  },
  {
    adcode: 530423,
    lng: 102.760039,
    lat: 24.112205,
    name: "通海县",
    level: "district",
    parent: 530400
  },
  {
    adcode: 530424,
    lng: 102.928982,
    lat: 24.189807,
    name: "华宁县",
    level: "district",
    parent: 530400
  },
  {
    adcode: 530425,
    lng: 102.16211,
    lat: 24.669598,
    name: "易门县",
    level: "district",
    parent: 530400
  },
  {
    adcode: 530426,
    lng: 102.404358,
    lat: 24.173256,
    name: "峨山彝族自治县",
    level: "district",
    parent: 530400
  },
  {
    adcode: 530427,
    lng: 101.990903,
    lat: 24.0664,
    name: "新平彝族傣族自治县",
    level: "district",
    parent: 530400
  },
  {
    adcode: 530428,
    lng: 101.999658,
    lat: 23.597618,
    name: "元江哈尼族彝族傣族自治县",
    level: "district",
    parent: 530400
  },
  {
    adcode: 530481,
    lng: 102.916652,
    lat: 24.669679,
    name: "澄江市",
    level: "district",
    parent: 530400
  },
  {
    adcode: 530500,
    lng: 99.167133,
    lat: 25.111802,
    name: "保山市",
    level: "city",
    parent: 530000
  },
  {
    adcode: 530502,
    lng: 99.165825,
    lat: 25.112144,
    name: "隆阳区",
    level: "district",
    parent: 530500
  },
  {
    adcode: 530521,
    lng: 99.183758,
    lat: 24.730847,
    name: "施甸县",
    level: "district",
    parent: 530500
  },
  {
    adcode: 530523,
    lng: 98.693567,
    lat: 24.591912,
    name: "龙陵县",
    level: "district",
    parent: 530500
  },
  {
    adcode: 530524,
    lng: 99.612344,
    lat: 24.823662,
    name: "昌宁县",
    level: "district",
    parent: 530500
  },
  {
    adcode: 530581,
    lng: 98.497292,
    lat: 25.01757,
    name: "腾冲市",
    level: "district",
    parent: 530500
  },
  {
    adcode: 530600,
    lng: 103.717216,
    lat: 27.336999,
    name: "昭通市",
    level: "city",
    parent: 530000
  },
  {
    adcode: 530602,
    lng: 103.717267,
    lat: 27.336636,
    name: "昭阳区",
    level: "district",
    parent: 530600
  },
  {
    adcode: 530621,
    lng: 103.549333,
    lat: 27.191637,
    name: "鲁甸县",
    level: "district",
    parent: 530600
  },
  {
    adcode: 530622,
    lng: 102.929284,
    lat: 26.9117,
    name: "巧家县",
    level: "district",
    parent: 530600
  },
  {
    adcode: 530623,
    lng: 104.23506,
    lat: 28.106923,
    name: "盐津县",
    level: "district",
    parent: 530600
  },
  {
    adcode: 530624,
    lng: 103.891608,
    lat: 27.747114,
    name: "大关县",
    level: "district",
    parent: 530600
  },
  {
    adcode: 530625,
    lng: 103.63732,
    lat: 28.231526,
    name: "永善县",
    level: "district",
    parent: 530600
  },
  {
    adcode: 530626,
    lng: 103.961095,
    lat: 28.599953,
    name: "绥江县",
    level: "district",
    parent: 530600
  },
  {
    adcode: 530627,
    lng: 104.873055,
    lat: 27.436267,
    name: "镇雄县",
    level: "district",
    parent: 530600
  },
  {
    adcode: 530628,
    lng: 104.048492,
    lat: 27.627425,
    name: "彝良县",
    level: "district",
    parent: 530600
  },
  {
    adcode: 530629,
    lng: 105.04869,
    lat: 27.843381,
    name: "威信县",
    level: "district",
    parent: 530600
  },
  {
    adcode: 530681,
    lng: 104.415376,
    lat: 28.629688,
    name: "水富市",
    level: "district",
    parent: 530600
  },
  {
    adcode: 530700,
    lng: 100.233026,
    lat: 26.872108,
    name: "丽江市",
    level: "city",
    parent: 530000
  },
  {
    adcode: 530702,
    lng: 100.234412,
    lat: 26.872229,
    name: "古城区",
    level: "district",
    parent: 530700
  },
  {
    adcode: 530721,
    lng: 100.238312,
    lat: 26.830593,
    name: "玉龙纳西族自治县",
    level: "district",
    parent: 530700
  },
  {
    adcode: 530722,
    lng: 100.750901,
    lat: 26.685623,
    name: "永胜县",
    level: "district",
    parent: 530700
  },
  {
    adcode: 530723,
    lng: 101.267796,
    lat: 26.628834,
    name: "华坪县",
    level: "district",
    parent: 530700
  },
  {
    adcode: 530724,
    lng: 100.852427,
    lat: 27.281109,
    name: "宁蒗彝族自治县",
    level: "district",
    parent: 530700
  },
  {
    adcode: 530800,
    lng: 100.972344,
    lat: 22.777321,
    name: "普洱市",
    level: "city",
    parent: 530000
  },
  {
    adcode: 530802,
    lng: 100.973227,
    lat: 22.776595,
    name: "思茅区",
    level: "district",
    parent: 530800
  },
  {
    adcode: 530821,
    lng: 101.04524,
    lat: 23.062507,
    name: "宁洱哈尼族彝族自治县",
    level: "district",
    parent: 530800
  },
  {
    adcode: 530822,
    lng: 101.687606,
    lat: 23.428165,
    name: "墨江哈尼族自治县",
    level: "district",
    parent: 530800
  },
  {
    adcode: 530823,
    lng: 100.840011,
    lat: 24.448523,
    name: "景东彝族自治县",
    level: "district",
    parent: 530800
  },
  {
    adcode: 530824,
    lng: 100.701425,
    lat: 23.500278,
    name: "景谷傣族彝族自治县",
    level: "district",
    parent: 530800
  },
  {
    adcode: 530825,
    lng: 101.108512,
    lat: 24.005712,
    name: "镇沅彝族哈尼族拉祜族自治县",
    level: "district",
    parent: 530800
  },
  {
    adcode: 530826,
    lng: 101.859144,
    lat: 22.58336,
    name: "江城哈尼族彝族自治县",
    level: "district",
    parent: 530800
  },
  {
    adcode: 530827,
    lng: 99.585406,
    lat: 22.325924,
    name: "孟连傣族拉祜族佤族自治县",
    level: "district",
    parent: 530800
  },
  {
    adcode: 530828,
    lng: 99.931201,
    lat: 22.553083,
    name: "澜沧拉祜族自治县",
    level: "district",
    parent: 530800
  },
  {
    adcode: 530829,
    lng: 99.594372,
    lat: 22.644423,
    name: "西盟佤族自治县",
    level: "district",
    parent: 530800
  },
  {
    adcode: 530900,
    lng: 100.08697,
    lat: 23.886567,
    name: "临沧市",
    level: "city",
    parent: 530000
  },
  {
    adcode: 530902,
    lng: 100.086486,
    lat: 23.886562,
    name: "临翔区",
    level: "district",
    parent: 530900
  },
  {
    adcode: 530921,
    lng: 99.91871,
    lat: 24.592738,
    name: "凤庆县",
    level: "district",
    parent: 530900
  },
  {
    adcode: 530922,
    lng: 100.125637,
    lat: 24.439026,
    name: "云县",
    level: "district",
    parent: 530900
  },
  {
    adcode: 530923,
    lng: 99.253679,
    lat: 24.028159,
    name: "永德县",
    level: "district",
    parent: 530900
  },
  {
    adcode: 530924,
    lng: 98.82743,
    lat: 23.761415,
    name: "镇康县",
    level: "district",
    parent: 530900
  },
  {
    adcode: 530925,
    lng: 99.824419,
    lat: 23.477476,
    name: "双江拉祜族佤族布朗族傣族自治县",
    level: "district",
    parent: 530900
  },
  {
    adcode: 530926,
    lng: 99.402495,
    lat: 23.534579,
    name: "耿马傣族佤族自治县",
    level: "district",
    parent: 530900
  },
  {
    adcode: 530927,
    lng: 99.2474,
    lat: 23.146887,
    name: "沧源佤族自治县",
    level: "district",
    parent: 530900
  },
  {
    adcode: 532300,
    lng: 101.546046,
    lat: 25.041988,
    name: "楚雄彝族自治州",
    level: "city",
    parent: 530000
  },
  {
    adcode: 532301,
    lng: 101.546145,
    lat: 25.040912,
    name: "楚雄市",
    level: "district",
    parent: 532300
  },
  {
    adcode: 532322,
    lng: 101.63824,
    lat: 24.685094,
    name: "双柏县",
    level: "district",
    parent: 532300
  },
  {
    adcode: 532323,
    lng: 101.543044,
    lat: 25.312111,
    name: "牟定县",
    level: "district",
    parent: 532300
  },
  {
    adcode: 532324,
    lng: 101.274991,
    lat: 25.192408,
    name: "南华县",
    level: "district",
    parent: 532300
  },
  {
    adcode: 532325,
    lng: 101.238399,
    lat: 25.505403,
    name: "姚安县",
    level: "district",
    parent: 532300
  },
  {
    adcode: 532326,
    lng: 101.323602,
    lat: 25.722348,
    name: "大姚县",
    level: "district",
    parent: 532300
  },
  {
    adcode: 532327,
    lng: 101.671175,
    lat: 26.056316,
    name: "永仁县",
    level: "district",
    parent: 532300
  },
  {
    adcode: 532328,
    lng: 101.870837,
    lat: 25.703313,
    name: "元谋县",
    level: "district",
    parent: 532300
  },
  {
    adcode: 532329,
    lng: 102.406785,
    lat: 25.5301,
    name: "武定县",
    level: "district",
    parent: 532300
  },
  {
    adcode: 532331,
    lng: 102.075694,
    lat: 25.14327,
    name: "禄丰市",
    level: "district",
    parent: 532300
  },
  {
    adcode: 532500,
    lng: 103.384182,
    lat: 23.366775,
    name: "红河哈尼族彝族自治州",
    level: "city",
    parent: 530000
  },
  {
    adcode: 532501,
    lng: 103.154752,
    lat: 23.360383,
    name: "个旧市",
    level: "district",
    parent: 532500
  },
  {
    adcode: 532502,
    lng: 103.258679,
    lat: 23.713832,
    name: "开远市",
    level: "district",
    parent: 532500
  },
  {
    adcode: 532503,
    lng: 103.385005,
    lat: 23.366843,
    name: "蒙自市",
    level: "district",
    parent: 532500
  },
  {
    adcode: 532504,
    lng: 103.436988,
    lat: 24.40837,
    name: "弥勒市",
    level: "district",
    parent: 532500
  },
  {
    adcode: 532523,
    lng: 103.687229,
    lat: 22.987013,
    name: "屏边苗族自治县",
    level: "district",
    parent: 532500
  },
  {
    adcode: 532524,
    lng: 102.820493,
    lat: 23.618387,
    name: "建水县",
    level: "district",
    parent: 532500
  },
  {
    adcode: 532525,
    lng: 102.484469,
    lat: 23.712569,
    name: "石屏县",
    level: "district",
    parent: 532500
  },
  {
    adcode: 532527,
    lng: 103.759622,
    lat: 24.532368,
    name: "泸西县",
    level: "district",
    parent: 532500
  },
  {
    adcode: 532528,
    lng: 102.837056,
    lat: 23.219773,
    name: "元阳县",
    level: "district",
    parent: 532500
  },
  {
    adcode: 532529,
    lng: 102.42121,
    lat: 23.369191,
    name: "红河县",
    level: "district",
    parent: 532500
  },
  {
    adcode: 532530,
    lng: 103.228359,
    lat: 22.779982,
    name: "金平苗族瑶族傣族自治县",
    level: "district",
    parent: 532500
  },
  {
    adcode: 532531,
    lng: 102.39286,
    lat: 22.99352,
    name: "绿春县",
    level: "district",
    parent: 532500
  },
  {
    adcode: 532532,
    lng: 103.961593,
    lat: 22.507563,
    name: "河口瑶族自治县",
    level: "district",
    parent: 532500
  },
  {
    adcode: 532600,
    lng: 104.24401,
    lat: 23.36951,
    name: "文山壮族苗族自治州",
    level: "city",
    parent: 530000
  },
  {
    adcode: 532601,
    lng: 104.244277,
    lat: 23.369216,
    name: "文山市",
    level: "district",
    parent: 532600
  },
  {
    adcode: 532622,
    lng: 104.343989,
    lat: 23.612301,
    name: "砚山县",
    level: "district",
    parent: 532600
  },
  {
    adcode: 532623,
    lng: 104.675711,
    lat: 23.437439,
    name: "西畴县",
    level: "district",
    parent: 532600
  },
  {
    adcode: 532624,
    lng: 104.701899,
    lat: 23.124202,
    name: "麻栗坡县",
    level: "district",
    parent: 532600
  },
  {
    adcode: 532625,
    lng: 104.398619,
    lat: 23.011723,
    name: "马关县",
    level: "district",
    parent: 532600
  },
  {
    adcode: 532626,
    lng: 104.194366,
    lat: 24.040982,
    name: "丘北县",
    level: "district",
    parent: 532600
  },
  {
    adcode: 532627,
    lng: 105.056684,
    lat: 24.050272,
    name: "广南县",
    level: "district",
    parent: 532600
  },
  {
    adcode: 532628,
    lng: 105.62856,
    lat: 23.626494,
    name: "富宁县",
    level: "district",
    parent: 532600
  },
  {
    adcode: 532800,
    lng: 100.797941,
    lat: 22.001724,
    name: "西双版纳傣族自治州",
    level: "city",
    parent: 530000
  },
  {
    adcode: 532801,
    lng: 100.797947,
    lat: 22.002087,
    name: "景洪市",
    level: "district",
    parent: 532800
  },
  {
    adcode: 532822,
    lng: 100.448288,
    lat: 21.955866,
    name: "勐海县",
    level: "district",
    parent: 532800
  },
  {
    adcode: 532823,
    lng: 101.567051,
    lat: 21.479449,
    name: "勐腊县",
    level: "district",
    parent: 532800
  },
  {
    adcode: 532900,
    lng: 100.225668,
    lat: 25.589449,
    name: "大理白族自治州",
    level: "city",
    parent: 530000
  },
  {
    adcode: 532901,
    lng: 100.241369,
    lat: 25.593067,
    name: "大理市",
    level: "district",
    parent: 532900
  },
  {
    adcode: 532922,
    lng: 99.95797,
    lat: 25.669543,
    name: "漾濞彝族自治县",
    level: "district",
    parent: 532900
  },
  {
    adcode: 532923,
    lng: 100.554025,
    lat: 25.477072,
    name: "祥云县",
    level: "district",
    parent: 532900
  },
  {
    adcode: 532924,
    lng: 100.578957,
    lat: 25.825904,
    name: "宾川县",
    level: "district",
    parent: 532900
  },
  {
    adcode: 532925,
    lng: 100.490669,
    lat: 25.342594,
    name: "弥渡县",
    level: "district",
    parent: 532900
  },
  {
    adcode: 532926,
    lng: 100.518683,
    lat: 25.041279,
    name: "南涧彝族自治县",
    level: "district",
    parent: 532900
  },
  {
    adcode: 532927,
    lng: 100.30793,
    lat: 25.230909,
    name: "巍山彝族回族自治县",
    level: "district",
    parent: 532900
  },
  {
    adcode: 532928,
    lng: 99.533536,
    lat: 25.461281,
    name: "永平县",
    level: "district",
    parent: 532900
  },
  {
    adcode: 532929,
    lng: 99.369402,
    lat: 25.884955,
    name: "云龙县",
    level: "district",
    parent: 532900
  },
  {
    adcode: 532930,
    lng: 99.951708,
    lat: 26.111184,
    name: "洱源县",
    level: "district",
    parent: 532900
  },
  {
    adcode: 532931,
    lng: 99.905887,
    lat: 26.530066,
    name: "剑川县",
    level: "district",
    parent: 532900
  },
  {
    adcode: 532932,
    lng: 100.173375,
    lat: 26.55839,
    name: "鹤庆县",
    level: "district",
    parent: 532900
  },
  {
    adcode: 533100,
    lng: 98.578363,
    lat: 24.436694,
    name: "德宏傣族景颇族自治州",
    level: "city",
    parent: 530000
  },
  {
    adcode: 533102,
    lng: 97.855883,
    lat: 24.010734,
    name: "瑞丽市",
    level: "district",
    parent: 533100
  },
  {
    adcode: 533103,
    lng: 98.577608,
    lat: 24.436699,
    name: "芒市",
    level: "district",
    parent: 533100
  },
  {
    adcode: 533122,
    lng: 98.298196,
    lat: 24.80742,
    name: "梁河县",
    level: "district",
    parent: 533100
  },
  {
    adcode: 533123,
    lng: 97.93393,
    lat: 24.709541,
    name: "盈江县",
    level: "district",
    parent: 533100
  },
  {
    adcode: 533124,
    lng: 97.794441,
    lat: 24.184065,
    name: "陇川县",
    level: "district",
    parent: 533100
  },
  {
    adcode: 533300,
    lng: 98.854304,
    lat: 25.850949,
    name: "怒江傈僳族自治州",
    level: "city",
    parent: 530000
  },
  {
    adcode: 533301,
    lng: 98.854063,
    lat: 25.851142,
    name: "泸水市",
    level: "district",
    parent: 533300
  },
  {
    adcode: 533323,
    lng: 98.867413,
    lat: 26.902738,
    name: "福贡县",
    level: "district",
    parent: 533300
  },
  {
    adcode: 533324,
    lng: 98.666141,
    lat: 27.738054,
    name: "贡山独龙族怒族自治县",
    level: "district",
    parent: 533300
  },
  {
    adcode: 533325,
    lng: 99.421378,
    lat: 26.453839,
    name: "兰坪白族普米族自治县",
    level: "district",
    parent: 533300
  },
  {
    adcode: 533400,
    lng: 99.706463,
    lat: 27.826853,
    name: "迪庆藏族自治州",
    level: "city",
    parent: 530000
  },
  {
    adcode: 533401,
    lng: 99.708667,
    lat: 27.825804,
    name: "香格里拉市",
    level: "district",
    parent: 533400
  },
  {
    adcode: 533422,
    lng: 98.91506,
    lat: 28.483272,
    name: "德钦县",
    level: "district",
    parent: 533400
  },
  {
    adcode: 533423,
    lng: 99.286355,
    lat: 27.180948,
    name: "维西傈僳族自治县",
    level: "district",
    parent: 533400
  },
  {
    adcode: 540000,
    lng: 91.132212,
    lat: 29.660361,
    name: "西藏自治区",
    level: "province",
    parent: 100000
  },
  {
    adcode: 540100,
    lng: 91.132212,
    lat: 29.660361,
    name: "拉萨市",
    level: "city",
    parent: 540000
  },
  {
    adcode: 540102,
    lng: 91.132911,
    lat: 29.659472,
    name: "城关区",
    level: "district",
    parent: 540100
  },
  {
    adcode: 540103,
    lng: 91.002823,
    lat: 29.647347,
    name: "堆龙德庆区",
    level: "district",
    parent: 540100
  },
  {
    adcode: 540104,
    lng: 91.350976,
    lat: 29.670314,
    name: "达孜区",
    level: "district",
    parent: 540100
  },
  {
    adcode: 540121,
    lng: 91.261842,
    lat: 29.895754,
    name: "林周县",
    level: "district",
    parent: 540100
  },
  {
    adcode: 540122,
    lng: 91.103551,
    lat: 30.474819,
    name: "当雄县",
    level: "district",
    parent: 540100
  },
  {
    adcode: 540123,
    lng: 90.165545,
    lat: 29.431346,
    name: "尼木县",
    level: "district",
    parent: 540100
  },
  {
    adcode: 540124,
    lng: 90.738051,
    lat: 29.349895,
    name: "曲水县",
    level: "district",
    parent: 540100
  },
  {
    adcode: 540127,
    lng: 91.731158,
    lat: 29.834657,
    name: "墨竹工卡县",
    level: "district",
    parent: 540100
  },
  {
    adcode: 540200,
    lng: 88.885148,
    lat: 29.267519,
    name: "日喀则市",
    level: "city",
    parent: 540000
  },
  {
    adcode: 540202,
    lng: 88.88667,
    lat: 29.267003,
    name: "桑珠孜区",
    level: "district",
    parent: 540200
  },
  {
    adcode: 540221,
    lng: 89.099434,
    lat: 29.680459,
    name: "南木林县",
    level: "district",
    parent: 540200
  },
  {
    adcode: 540222,
    lng: 89.605044,
    lat: 28.908845,
    name: "江孜县",
    level: "district",
    parent: 540200
  },
  {
    adcode: 540223,
    lng: 87.123887,
    lat: 28.656667,
    name: "定日县",
    level: "district",
    parent: 540200
  },
  {
    adcode: 540224,
    lng: 88.023007,
    lat: 28.901077,
    name: "萨迦县",
    level: "district",
    parent: 540200
  },
  {
    adcode: 540225,
    lng: 87.63743,
    lat: 29.085136,
    name: "拉孜县",
    level: "district",
    parent: 540200
  },
  {
    adcode: 540226,
    lng: 87.23578,
    lat: 29.294758,
    name: "昂仁县",
    level: "district",
    parent: 540200
  },
  {
    adcode: 540227,
    lng: 88.260517,
    lat: 29.431597,
    name: "谢通门县",
    level: "district",
    parent: 540200
  },
  {
    adcode: 540228,
    lng: 89.263618,
    lat: 29.106627,
    name: "白朗县",
    level: "district",
    parent: 540200
  },
  {
    adcode: 540229,
    lng: 89.843207,
    lat: 29.230299,
    name: "仁布县",
    level: "district",
    parent: 540200
  },
  {
    adcode: 540230,
    lng: 89.683406,
    lat: 28.554719,
    name: "康马县",
    level: "district",
    parent: 540200
  },
  {
    adcode: 540231,
    lng: 87.767723,
    lat: 28.36409,
    name: "定结县",
    level: "district",
    parent: 540200
  },
  {
    adcode: 540232,
    lng: 84.032826,
    lat: 29.768336,
    name: "仲巴县",
    level: "district",
    parent: 540200
  },
  {
    adcode: 540233,
    lng: 88.906806,
    lat: 27.482772,
    name: "亚东县",
    level: "district",
    parent: 540200
  },
  {
    adcode: 540234,
    lng: 85.298349,
    lat: 28.852416,
    name: "吉隆县",
    level: "district",
    parent: 540200
  },
  {
    adcode: 540235,
    lng: 85.981953,
    lat: 28.15595,
    name: "聂拉木县",
    level: "district",
    parent: 540200
  },
  {
    adcode: 540236,
    lng: 85.234622,
    lat: 29.328194,
    name: "萨嘎县",
    level: "district",
    parent: 540200
  },
  {
    adcode: 540237,
    lng: 88.518903,
    lat: 28.274371,
    name: "岗巴县",
    level: "district",
    parent: 540200
  },
  {
    adcode: 540300,
    lng: 97.178452,
    lat: 31.136875,
    name: "昌都市",
    level: "city",
    parent: 540000
  },
  {
    adcode: 540302,
    lng: 97.178255,
    lat: 31.137035,
    name: "卡若区",
    level: "district",
    parent: 540300
  },
  {
    adcode: 540321,
    lng: 98.218351,
    lat: 31.499534,
    name: "江达县",
    level: "district",
    parent: 540300
  },
  {
    adcode: 540322,
    lng: 98.271191,
    lat: 30.859206,
    name: "贡觉县",
    level: "district",
    parent: 540300
  },
  {
    adcode: 540323,
    lng: 96.601259,
    lat: 31.213048,
    name: "类乌齐县",
    level: "district",
    parent: 540300
  },
  {
    adcode: 540324,
    lng: 95.597748,
    lat: 31.410681,
    name: "丁青县",
    level: "district",
    parent: 540300
  },
  {
    adcode: 540325,
    lng: 97.565701,
    lat: 30.653038,
    name: "察雅县",
    level: "district",
    parent: 540300
  },
  {
    adcode: 540326,
    lng: 96.917893,
    lat: 30.053408,
    name: "八宿县",
    level: "district",
    parent: 540300
  },
  {
    adcode: 540327,
    lng: 97.840532,
    lat: 29.671335,
    name: "左贡县",
    level: "district",
    parent: 540300
  },
  {
    adcode: 540328,
    lng: 98.596444,
    lat: 29.686615,
    name: "芒康县",
    level: "district",
    parent: 540300
  },
  {
    adcode: 540329,
    lng: 95.823418,
    lat: 30.741947,
    name: "洛隆县",
    level: "district",
    parent: 540300
  },
  {
    adcode: 540330,
    lng: 94.707504,
    lat: 30.933849,
    name: "边坝县",
    level: "district",
    parent: 540300
  },
  {
    adcode: 540400,
    lng: 94.362348,
    lat: 29.654693,
    name: "林芝市",
    level: "city",
    parent: 540000
  },
  {
    adcode: 540402,
    lng: 94.360987,
    lat: 29.653732,
    name: "巴宜区",
    level: "district",
    parent: 540400
  },
  {
    adcode: 540421,
    lng: 93.246515,
    lat: 29.88447,
    name: "工布江达县",
    level: "district",
    parent: 540400
  },
  {
    adcode: 540422,
    lng: 94.213679,
    lat: 29.213811,
    name: "米林县",
    level: "district",
    parent: 540400
  },
  {
    adcode: 540423,
    lng: 95.332245,
    lat: 29.32573,
    name: "墨脱县",
    level: "district",
    parent: 540400
  },
  {
    adcode: 540424,
    lng: 95.768151,
    lat: 29.858771,
    name: "波密县",
    level: "district",
    parent: 540400
  },
  {
    adcode: 540425,
    lng: 97.465002,
    lat: 28.660244,
    name: "察隅县",
    level: "district",
    parent: 540400
  },
  {
    adcode: 540426,
    lng: 93.073429,
    lat: 29.0446,
    name: "朗县",
    level: "district",
    parent: 540400
  },
  {
    adcode: 540500,
    lng: 91.766529,
    lat: 29.236023,
    name: "山南市",
    level: "city",
    parent: 540000
  },
  {
    adcode: 540502,
    lng: 91.76525,
    lat: 29.236106,
    name: "乃东区",
    level: "district",
    parent: 540500
  },
  {
    adcode: 540521,
    lng: 91.338,
    lat: 29.246476,
    name: "扎囊县",
    level: "district",
    parent: 540500
  },
  {
    adcode: 540522,
    lng: 90.985271,
    lat: 29.289078,
    name: "贡嘎县",
    level: "district",
    parent: 540500
  },
  {
    adcode: 540523,
    lng: 92.015732,
    lat: 29.259774,
    name: "桑日县",
    level: "district",
    parent: 540500
  },
  {
    adcode: 540524,
    lng: 91.683753,
    lat: 29.025242,
    name: "琼结县",
    level: "district",
    parent: 540500
  },
  {
    adcode: 540525,
    lng: 92.201066,
    lat: 29.063656,
    name: "曲松县",
    level: "district",
    parent: 540500
  },
  {
    adcode: 540526,
    lng: 91.432347,
    lat: 28.437353,
    name: "措美县",
    level: "district",
    parent: 540500
  },
  {
    adcode: 540527,
    lng: 90.858243,
    lat: 28.385765,
    name: "洛扎县",
    level: "district",
    parent: 540500
  },
  {
    adcode: 540528,
    lng: 92.591043,
    lat: 29.140921,
    name: "加查县",
    level: "district",
    parent: 540500
  },
  {
    adcode: 540529,
    lng: 92.463309,
    lat: 28.408548,
    name: "隆子县",
    level: "district",
    parent: 540500
  },
  {
    adcode: 540530,
    lng: 91.960132,
    lat: 27.991707,
    name: "错那县",
    level: "district",
    parent: 540500
  },
  {
    adcode: 540531,
    lng: 90.398747,
    lat: 28.96836,
    name: "浪卡子县",
    level: "district",
    parent: 540500
  },
  {
    adcode: 540600,
    lng: 92.060214,
    lat: 31.476004,
    name: "那曲市",
    level: "city",
    parent: 540000
  },
  {
    adcode: 540602,
    lng: 92.061862,
    lat: 31.475756,
    name: "色尼区",
    level: "district",
    parent: 540600
  },
  {
    adcode: 540621,
    lng: 93.232907,
    lat: 30.640846,
    name: "嘉黎县",
    level: "district",
    parent: 540600
  },
  {
    adcode: 540622,
    lng: 93.68044,
    lat: 31.479917,
    name: "比如县",
    level: "district",
    parent: 540600
  },
  {
    adcode: 540623,
    lng: 92.303659,
    lat: 32.107855,
    name: "聂荣县",
    level: "district",
    parent: 540600
  },
  {
    adcode: 540624,
    lng: 91.681879,
    lat: 32.260299,
    name: "安多县",
    level: "district",
    parent: 540600
  },
  {
    adcode: 540625,
    lng: 88.709777,
    lat: 30.929056,
    name: "申扎县",
    level: "district",
    parent: 540600
  },
  {
    adcode: 540626,
    lng: 93.784964,
    lat: 31.886173,
    name: "索县",
    level: "district",
    parent: 540600
  },
  {
    adcode: 540627,
    lng: 90.011822,
    lat: 31.394578,
    name: "班戈县",
    level: "district",
    parent: 540600
  },
  {
    adcode: 540628,
    lng: 94.054049,
    lat: 31.918691,
    name: "巴青县",
    level: "district",
    parent: 540600
  },
  {
    adcode: 540629,
    lng: 87.236646,
    lat: 31.784979,
    name: "尼玛县",
    level: "district",
    parent: 540600
  },
  {
    adcode: 540630,
    lng: 88.838578,
    lat: 33.18698,
    name: "双湖县",
    level: "district",
    parent: 540600
  },
  {
    adcode: 542500,
    lng: 80.105498,
    lat: 32.503187,
    name: "阿里地区",
    level: "city",
    parent: 540000
  },
  {
    adcode: 542521,
    lng: 81.177588,
    lat: 30.291896,
    name: "普兰县",
    level: "district",
    parent: 542500
  },
  {
    adcode: 542522,
    lng: 79.803191,
    lat: 31.478587,
    name: "札达县",
    level: "district",
    parent: 542500
  },
  {
    adcode: 542523,
    lng: 80.105005,
    lat: 32.503373,
    name: "噶尔县",
    level: "district",
    parent: 542500
  },
  {
    adcode: 542524,
    lng: 79.731937,
    lat: 33.382454,
    name: "日土县",
    level: "district",
    parent: 542500
  },
  {
    adcode: 542525,
    lng: 81.142896,
    lat: 32.389192,
    name: "革吉县",
    level: "district",
    parent: 542500
  },
  {
    adcode: 542526,
    lng: 84.062384,
    lat: 32.302076,
    name: "改则县",
    level: "district",
    parent: 542500
  },
  {
    adcode: 542527,
    lng: 85.159254,
    lat: 31.016774,
    name: "措勤县",
    level: "district",
    parent: 542500
  },
  {
    adcode: 610000,
    lng: 108.948024,
    lat: 34.263161,
    name: "陕西省",
    level: "province",
    parent: 100000
  },
  {
    adcode: 610100,
    lng: 108.948024,
    lat: 34.263161,
    name: "西安市",
    level: "city",
    parent: 610000
  },
  {
    adcode: 610102,
    lng: 108.959903,
    lat: 34.26927,
    name: "新城区",
    level: "district",
    parent: 610100
  },
  {
    adcode: 610103,
    lng: 108.946994,
    lat: 34.251061,
    name: "碑林区",
    level: "district",
    parent: 610100
  },
  {
    adcode: 610104,
    lng: 108.933194,
    lat: 34.2656,
    name: "莲湖区",
    level: "district",
    parent: 610100
  },
  {
    adcode: 610111,
    lng: 109.067261,
    lat: 34.267453,
    name: "灞桥区",
    level: "district",
    parent: 610100
  },
  {
    adcode: 610112,
    lng: 108.946022,
    lat: 34.30823,
    name: "未央区",
    level: "district",
    parent: 610100
  },
  {
    adcode: 610113,
    lng: 108.926593,
    lat: 34.213389,
    name: "雁塔区",
    level: "district",
    parent: 610100
  },
  {
    adcode: 610114,
    lng: 109.22802,
    lat: 34.662141,
    name: "阎良区",
    level: "district",
    parent: 610100
  },
  {
    adcode: 610115,
    lng: 109.213986,
    lat: 34.372065,
    name: "临潼区",
    level: "district",
    parent: 610100
  },
  {
    adcode: 610116,
    lng: 108.941579,
    lat: 34.157097,
    name: "长安区",
    level: "district",
    parent: 610100
  },
  {
    adcode: 610117,
    lng: 109.088896,
    lat: 34.535065,
    name: "高陵区",
    level: "district",
    parent: 610100
  },
  {
    adcode: 610118,
    lng: 108.607385,
    lat: 34.108668,
    name: "鄠邑区",
    level: "district",
    parent: 610100
  },
  {
    adcode: 610122,
    lng: 109.317634,
    lat: 34.156189,
    name: "蓝田县",
    level: "district",
    parent: 610100
  },
  {
    adcode: 610124,
    lng: 108.216465,
    lat: 34.161532,
    name: "周至县",
    level: "district",
    parent: 610100
  },
  {
    adcode: 610200,
    lng: 108.979608,
    lat: 34.916582,
    name: "铜川市",
    level: "city",
    parent: 610000
  },
  {
    adcode: 610202,
    lng: 109.075862,
    lat: 35.069098,
    name: "王益区",
    level: "district",
    parent: 610200
  },
  {
    adcode: 610203,
    lng: 109.100814,
    lat: 35.111927,
    name: "印台区",
    level: "district",
    parent: 610200
  },
  {
    adcode: 610204,
    lng: 108.962538,
    lat: 34.910206,
    name: "耀州区",
    level: "district",
    parent: 610200
  },
  {
    adcode: 610222,
    lng: 109.118278,
    lat: 35.398766,
    name: "宜君县",
    level: "district",
    parent: 610200
  },
  {
    adcode: 610300,
    lng: 107.14487,
    lat: 34.369315,
    name: "宝鸡市",
    level: "city",
    parent: 610000
  },
  {
    adcode: 610302,
    lng: 107.144467,
    lat: 34.371008,
    name: "渭滨区",
    level: "district",
    parent: 610300
  },
  {
    adcode: 610303,
    lng: 107.149943,
    lat: 34.375192,
    name: "金台区",
    level: "district",
    parent: 610300
  },
  {
    adcode: 610304,
    lng: 107.383645,
    lat: 34.352747,
    name: "陈仓区",
    level: "district",
    parent: 610300
  },
  {
    adcode: 610322,
    lng: 107.400577,
    lat: 34.521668,
    name: "凤翔区",
    level: "district",
    parent: 610300
  },
  {
    adcode: 610323,
    lng: 107.624464,
    lat: 34.44296,
    name: "岐山县",
    level: "district",
    parent: 610300
  },
  {
    adcode: 610324,
    lng: 107.891419,
    lat: 34.375497,
    name: "扶风县",
    level: "district",
    parent: 610300
  },
  {
    adcode: 610326,
    lng: 107.752371,
    lat: 34.272137,
    name: "眉县",
    level: "district",
    parent: 610300
  },
  {
    adcode: 610327,
    lng: 106.857066,
    lat: 34.893262,
    name: "陇县",
    level: "district",
    parent: 610300
  },
  {
    adcode: 610328,
    lng: 107.132987,
    lat: 34.642584,
    name: "千阳县",
    level: "district",
    parent: 610300
  },
  {
    adcode: 610329,
    lng: 107.796608,
    lat: 34.677714,
    name: "麟游县",
    level: "district",
    parent: 610300
  },
  {
    adcode: 610330,
    lng: 106.525212,
    lat: 33.912464,
    name: "凤县",
    level: "district",
    parent: 610300
  },
  {
    adcode: 610331,
    lng: 107.316533,
    lat: 34.059215,
    name: "太白县",
    level: "district",
    parent: 610300
  },
  {
    adcode: 610400,
    lng: 108.705117,
    lat: 34.333439,
    name: "咸阳市",
    level: "city",
    parent: 610000
  },
  {
    adcode: 610402,
    lng: 108.698636,
    lat: 34.329801,
    name: "秦都区",
    level: "district",
    parent: 610400
  },
  {
    adcode: 610403,
    lng: 108.086348,
    lat: 34.27135,
    name: "杨陵区",
    level: "district",
    parent: 610400
  },
  {
    adcode: 610404,
    lng: 108.730957,
    lat: 34.336847,
    name: "渭城区",
    level: "district",
    parent: 610400
  },
  {
    adcode: 610422,
    lng: 108.943481,
    lat: 34.613996,
    name: "三原县",
    level: "district",
    parent: 610400
  },
  {
    adcode: 610423,
    lng: 108.83784,
    lat: 34.528493,
    name: "泾阳县",
    level: "district",
    parent: 610400
  },
  {
    adcode: 610424,
    lng: 108.247406,
    lat: 34.527261,
    name: "乾县",
    level: "district",
    parent: 610400
  },
  {
    adcode: 610425,
    lng: 108.428317,
    lat: 34.482583,
    name: "礼泉县",
    level: "district",
    parent: 610400
  },
  {
    adcode: 610426,
    lng: 108.143129,
    lat: 34.692619,
    name: "永寿县",
    level: "district",
    parent: 610400
  },
  {
    adcode: 610428,
    lng: 107.795835,
    lat: 35.206122,
    name: "长武县",
    level: "district",
    parent: 610400
  },
  {
    adcode: 610429,
    lng: 108.337231,
    lat: 35.112234,
    name: "旬邑县",
    level: "district",
    parent: 610400
  },
  {
    adcode: 610430,
    lng: 108.581173,
    lat: 34.79797,
    name: "淳化县",
    level: "district",
    parent: 610400
  },
  {
    adcode: 610431,
    lng: 108.212857,
    lat: 34.259732,
    name: "武功县",
    level: "district",
    parent: 610400
  },
  {
    adcode: 610481,
    lng: 108.488493,
    lat: 34.297134,
    name: "兴平市",
    level: "district",
    parent: 610400
  },
  {
    adcode: 610482,
    lng: 108.083674,
    lat: 35.034233,
    name: "彬州市",
    level: "district",
    parent: 610400
  },
  {
    adcode: 610500,
    lng: 109.502882,
    lat: 34.499381,
    name: "渭南市",
    level: "city",
    parent: 610000
  },
  {
    adcode: 610502,
    lng: 109.503299,
    lat: 34.501271,
    name: "临渭区",
    level: "district",
    parent: 610500
  },
  {
    adcode: 610503,
    lng: 109.76141,
    lat: 34.511958,
    name: "华州区",
    level: "district",
    parent: 610500
  },
  {
    adcode: 610522,
    lng: 110.24726,
    lat: 34.544515,
    name: "潼关县",
    level: "district",
    parent: 610500
  },
  {
    adcode: 610523,
    lng: 109.943123,
    lat: 34.795011,
    name: "大荔县",
    level: "district",
    parent: 610500
  },
  {
    adcode: 610524,
    lng: 110.147979,
    lat: 35.237098,
    name: "合阳县",
    level: "district",
    parent: 610500
  },
  {
    adcode: 610525,
    lng: 109.937609,
    lat: 35.184,
    name: "澄城县",
    level: "district",
    parent: 610500
  },
  {
    adcode: 610526,
    lng: 109.589653,
    lat: 34.956034,
    name: "蒲城县",
    level: "district",
    parent: 610500
  },
  {
    adcode: 610527,
    lng: 109.594309,
    lat: 35.177291,
    name: "白水县",
    level: "district",
    parent: 610500
  },
  {
    adcode: 610528,
    lng: 109.187174,
    lat: 34.746679,
    name: "富平县",
    level: "district",
    parent: 610500
  },
  {
    adcode: 610581,
    lng: 110.452391,
    lat: 35.475238,
    name: "韩城市",
    level: "district",
    parent: 610500
  },
  {
    adcode: 610582,
    lng: 110.08952,
    lat: 34.565359,
    name: "华阴市",
    level: "district",
    parent: 610500
  },
  {
    adcode: 610600,
    lng: 109.49081,
    lat: 36.596537,
    name: "延安市",
    level: "city",
    parent: 610000
  },
  {
    adcode: 610602,
    lng: 109.49069,
    lat: 36.596291,
    name: "宝塔区",
    level: "district",
    parent: 610600
  },
  {
    adcode: 610603,
    lng: 109.325341,
    lat: 36.86441,
    name: "安塞区",
    level: "district",
    parent: 610600
  },
  {
    adcode: 610621,
    lng: 110.012961,
    lat: 36.578306,
    name: "延长县",
    level: "district",
    parent: 610600
  },
  {
    adcode: 610622,
    lng: 110.190314,
    lat: 36.882066,
    name: "延川县",
    level: "district",
    parent: 610600
  },
  {
    adcode: 610625,
    lng: 108.768898,
    lat: 36.823031,
    name: "志丹县",
    level: "district",
    parent: 610600
  },
  {
    adcode: 610626,
    lng: 108.176976,
    lat: 36.924852,
    name: "吴起县",
    level: "district",
    parent: 610600
  },
  {
    adcode: 610627,
    lng: 109.34961,
    lat: 36.277729,
    name: "甘泉县",
    level: "district",
    parent: 610600
  },
  {
    adcode: 610628,
    lng: 109.384136,
    lat: 35.996495,
    name: "富县",
    level: "district",
    parent: 610600
  },
  {
    adcode: 610629,
    lng: 109.435712,
    lat: 35.762133,
    name: "洛川县",
    level: "district",
    parent: 610600
  },
  {
    adcode: 610630,
    lng: 110.175537,
    lat: 36.050391,
    name: "宜川县",
    level: "district",
    parent: 610600
  },
  {
    adcode: 610631,
    lng: 109.83502,
    lat: 35.583276,
    name: "黄龙县",
    level: "district",
    parent: 610600
  },
  {
    adcode: 610632,
    lng: 109.262469,
    lat: 35.580165,
    name: "黄陵县",
    level: "district",
    parent: 610600
  },
  {
    adcode: 610681,
    lng: 109.675968,
    lat: 37.14207,
    name: "子长市",
    level: "district",
    parent: 610600
  },
  {
    adcode: 610700,
    lng: 107.028621,
    lat: 33.077668,
    name: "汉中市",
    level: "city",
    parent: 610000
  },
  {
    adcode: 610702,
    lng: 107.028233,
    lat: 33.077674,
    name: "汉台区",
    level: "district",
    parent: 610700
  },
  {
    adcode: 610703,
    lng: 106.942393,
    lat: 33.003341,
    name: "南郑区",
    level: "district",
    parent: 610700
  },
  {
    adcode: 610722,
    lng: 107.329887,
    lat: 33.153098,
    name: "城固县",
    level: "district",
    parent: 610700
  },
  {
    adcode: 610723,
    lng: 107.549962,
    lat: 33.223283,
    name: "洋县",
    level: "district",
    parent: 610700
  },
  {
    adcode: 610724,
    lng: 107.765858,
    lat: 32.987961,
    name: "西乡县",
    level: "district",
    parent: 610700
  },
  {
    adcode: 610725,
    lng: 106.680175,
    lat: 33.155618,
    name: "勉县",
    level: "district",
    parent: 610700
  },
  {
    adcode: 610726,
    lng: 106.25739,
    lat: 32.830806,
    name: "宁强县",
    level: "district",
    parent: 610700
  },
  {
    adcode: 610727,
    lng: 106.153899,
    lat: 33.329638,
    name: "略阳县",
    level: "district",
    parent: 610700
  },
  {
    adcode: 610728,
    lng: 107.89531,
    lat: 32.535854,
    name: "镇巴县",
    level: "district",
    parent: 610700
  },
  {
    adcode: 610729,
    lng: 106.924377,
    lat: 33.61334,
    name: "留坝县",
    level: "district",
    parent: 610700
  },
  {
    adcode: 610730,
    lng: 107.988582,
    lat: 33.520745,
    name: "佛坪县",
    level: "district",
    parent: 610700
  },
  {
    adcode: 610800,
    lng: 109.741193,
    lat: 38.290162,
    name: "榆林市",
    level: "city",
    parent: 610000
  },
  {
    adcode: 610802,
    lng: 109.74791,
    lat: 38.299267,
    name: "榆阳区",
    level: "district",
    parent: 610800
  },
  {
    adcode: 610803,
    lng: 109.292596,
    lat: 37.964048,
    name: "横山区",
    level: "district",
    parent: 610800
  },
  {
    adcode: 610822,
    lng: 111.069645,
    lat: 39.029243,
    name: "府谷县",
    level: "district",
    parent: 610800
  },
  {
    adcode: 610824,
    lng: 108.80567,
    lat: 37.596084,
    name: "靖边县",
    level: "district",
    parent: 610800
  },
  {
    adcode: 610825,
    lng: 107.601284,
    lat: 37.59523,
    name: "定边县",
    level: "district",
    parent: 610800
  },
  {
    adcode: 610826,
    lng: 110.265377,
    lat: 37.507701,
    name: "绥德县",
    level: "district",
    parent: 610800
  },
  {
    adcode: 610827,
    lng: 110.178683,
    lat: 37.759081,
    name: "米脂县",
    level: "district",
    parent: 610800
  },
  {
    adcode: 610828,
    lng: 110.493367,
    lat: 38.021597,
    name: "佳县",
    level: "district",
    parent: 610800
  },
  {
    adcode: 610829,
    lng: 110.739315,
    lat: 37.451925,
    name: "吴堡县",
    level: "district",
    parent: 610800
  },
  {
    adcode: 610830,
    lng: 110.12146,
    lat: 37.087702,
    name: "清涧县",
    level: "district",
    parent: 610800
  },
  {
    adcode: 610831,
    lng: 110.03457,
    lat: 37.611573,
    name: "子洲县",
    level: "district",
    parent: 610800
  },
  {
    adcode: 610881,
    lng: 110.497005,
    lat: 38.835641,
    name: "神木市",
    level: "district",
    parent: 610800
  },
  {
    adcode: 610900,
    lng: 109.029273,
    lat: 32.6903,
    name: "安康市",
    level: "city",
    parent: 610000
  },
  {
    adcode: 610902,
    lng: 109.029098,
    lat: 32.690817,
    name: "汉滨区",
    level: "district",
    parent: 610900
  },
  {
    adcode: 610921,
    lng: 108.510946,
    lat: 32.891121,
    name: "汉阴县",
    level: "district",
    parent: 610900
  },
  {
    adcode: 610922,
    lng: 108.250512,
    lat: 33.038512,
    name: "石泉县",
    level: "district",
    parent: 610900
  },
  {
    adcode: 610923,
    lng: 108.313714,
    lat: 33.312184,
    name: "宁陕县",
    level: "district",
    parent: 610900
  },
  {
    adcode: 610924,
    lng: 108.537788,
    lat: 32.520176,
    name: "紫阳县",
    level: "district",
    parent: 610900
  },
  {
    adcode: 610925,
    lng: 108.900663,
    lat: 32.31069,
    name: "岚皋县",
    level: "district",
    parent: 610900
  },
  {
    adcode: 610926,
    lng: 109.361865,
    lat: 32.387933,
    name: "平利县",
    level: "district",
    parent: 610900
  },
  {
    adcode: 610927,
    lng: 109.526437,
    lat: 31.883395,
    name: "镇坪县",
    level: "district",
    parent: 610900
  },
  {
    adcode: 610928,
    lng: 109.368149,
    lat: 32.833567,
    name: "旬阳市",
    level: "district",
    parent: 610900
  },
  {
    adcode: 610929,
    lng: 110.114186,
    lat: 32.809484,
    name: "白河县",
    level: "district",
    parent: 610900
  },
  {
    adcode: 611000,
    lng: 109.939776,
    lat: 33.868319,
    name: "商洛市",
    level: "city",
    parent: 610000
  },
  {
    adcode: 611002,
    lng: 109.937685,
    lat: 33.869208,
    name: "商州区",
    level: "district",
    parent: 611000
  },
  {
    adcode: 611021,
    lng: 110.145716,
    lat: 34.088502,
    name: "洛南县",
    level: "district",
    parent: 611000
  },
  {
    adcode: 611022,
    lng: 110.33191,
    lat: 33.694711,
    name: "丹凤县",
    level: "district",
    parent: 611000
  },
  {
    adcode: 611023,
    lng: 110.885437,
    lat: 33.526367,
    name: "商南县",
    level: "district",
    parent: 611000
  },
  {
    adcode: 611024,
    lng: 109.880435,
    lat: 33.530411,
    name: "山阳县",
    level: "district",
    parent: 611000
  },
  {
    adcode: 611025,
    lng: 109.151075,
    lat: 33.423981,
    name: "镇安县",
    level: "district",
    parent: 611000
  },
  {
    adcode: 611026,
    lng: 109.111249,
    lat: 33.682773,
    name: "柞水县",
    level: "district",
    parent: 611000
  },
  {
    adcode: 620000,
    lng: 103.823557,
    lat: 36.058039,
    name: "甘肃省",
    level: "province",
    parent: 100000
  },
  {
    adcode: 620100,
    lng: 103.823557,
    lat: 36.058039,
    name: "兰州市",
    level: "city",
    parent: 620000
  },
  {
    adcode: 620102,
    lng: 103.841032,
    lat: 36.049115,
    name: "城关区",
    level: "district",
    parent: 620100
  },
  {
    adcode: 620103,
    lng: 103.784326,
    lat: 36.06673,
    name: "七里河区",
    level: "district",
    parent: 620100
  },
  {
    adcode: 620104,
    lng: 103.622331,
    lat: 36.100369,
    name: "西固区",
    level: "district",
    parent: 620100
  },
  {
    adcode: 620105,
    lng: 103.724038,
    lat: 36.10329,
    name: "安宁区",
    level: "district",
    parent: 620100
  },
  {
    adcode: 620111,
    lng: 102.861814,
    lat: 36.344177,
    name: "红古区",
    level: "district",
    parent: 620100
  },
  {
    adcode: 620121,
    lng: 103.262203,
    lat: 36.734428,
    name: "永登县",
    level: "district",
    parent: 620100
  },
  {
    adcode: 620122,
    lng: 103.94933,
    lat: 36.331254,
    name: "皋兰县",
    level: "district",
    parent: 620100
  },
  {
    adcode: 620123,
    lng: 104.114975,
    lat: 35.84443,
    name: "榆中县",
    level: "district",
    parent: 620100
  },
  {
    adcode: 620200,
    lng: 98.277304,
    lat: 39.786529,
    name: "嘉峪关市",
    level: "city",
    parent: 620000
  },
  {
    adcode: 620300,
    lng: 102.187888,
    lat: 38.514238,
    name: "金昌市",
    level: "city",
    parent: 620000
  },
  {
    adcode: 620302,
    lng: 102.187683,
    lat: 38.513793,
    name: "金川区",
    level: "district",
    parent: 620300
  },
  {
    adcode: 620321,
    lng: 101.971957,
    lat: 38.247354,
    name: "永昌县",
    level: "district",
    parent: 620300
  },
  {
    adcode: 620400,
    lng: 104.173606,
    lat: 36.54568,
    name: "白银市",
    level: "city",
    parent: 620000
  },
  {
    adcode: 620402,
    lng: 104.17425,
    lat: 36.545649,
    name: "白银区",
    level: "district",
    parent: 620400
  },
  {
    adcode: 620403,
    lng: 104.819207,
    lat: 36.72921,
    name: "平川区",
    level: "district",
    parent: 620400
  },
  {
    adcode: 620421,
    lng: 104.686972,
    lat: 36.561424,
    name: "靖远县",
    level: "district",
    parent: 620400
  },
  {
    adcode: 620422,
    lng: 105.054337,
    lat: 35.692486,
    name: "会宁县",
    level: "district",
    parent: 620400
  },
  {
    adcode: 620423,
    lng: 104.066394,
    lat: 37.193519,
    name: "景泰县",
    level: "district",
    parent: 620400
  },
  {
    adcode: 620500,
    lng: 105.724998,
    lat: 34.578529,
    name: "天水市",
    level: "city",
    parent: 620000
  },
  {
    adcode: 620502,
    lng: 105.724477,
    lat: 34.578645,
    name: "秦州区",
    level: "district",
    parent: 620500
  },
  {
    adcode: 620503,
    lng: 105.897631,
    lat: 34.563504,
    name: "麦积区",
    level: "district",
    parent: 620500
  },
  {
    adcode: 620521,
    lng: 106.139878,
    lat: 34.75287,
    name: "清水县",
    level: "district",
    parent: 620500
  },
  {
    adcode: 620522,
    lng: 105.6733,
    lat: 34.862354,
    name: "秦安县",
    level: "district",
    parent: 620500
  },
  {
    adcode: 620523,
    lng: 105.332347,
    lat: 34.747327,
    name: "甘谷县",
    level: "district",
    parent: 620500
  },
  {
    adcode: 620524,
    lng: 104.891696,
    lat: 34.721955,
    name: "武山县",
    level: "district",
    parent: 620500
  },
  {
    adcode: 620525,
    lng: 106.212416,
    lat: 34.993237,
    name: "张家川回族自治县",
    level: "district",
    parent: 620500
  },
  {
    adcode: 620600,
    lng: 102.634697,
    lat: 37.929996,
    name: "武威市",
    level: "city",
    parent: 620000
  },
  {
    adcode: 620602,
    lng: 102.634492,
    lat: 37.93025,
    name: "凉州区",
    level: "district",
    parent: 620600
  },
  {
    adcode: 620621,
    lng: 103.090654,
    lat: 38.624621,
    name: "民勤县",
    level: "district",
    parent: 620600
  },
  {
    adcode: 620622,
    lng: 102.898047,
    lat: 37.470571,
    name: "古浪县",
    level: "district",
    parent: 620600
  },
  {
    adcode: 620623,
    lng: 103.142034,
    lat: 36.971678,
    name: "天祝藏族自治县",
    level: "district",
    parent: 620600
  },
  {
    adcode: 620700,
    lng: 100.455472,
    lat: 38.932897,
    name: "张掖市",
    level: "city",
    parent: 620000
  },
  {
    adcode: 620702,
    lng: 100.454862,
    lat: 38.931774,
    name: "甘州区",
    level: "district",
    parent: 620700
  },
  {
    adcode: 620721,
    lng: 99.617086,
    lat: 38.837269,
    name: "肃南裕固族自治县",
    level: "district",
    parent: 620700
  },
  {
    adcode: 620722,
    lng: 100.816623,
    lat: 38.434454,
    name: "民乐县",
    level: "district",
    parent: 620700
  },
  {
    adcode: 620723,
    lng: 100.166333,
    lat: 39.152151,
    name: "临泽县",
    level: "district",
    parent: 620700
  },
  {
    adcode: 620724,
    lng: 99.81665,
    lat: 39.376308,
    name: "高台县",
    level: "district",
    parent: 620700
  },
  {
    adcode: 620725,
    lng: 101.088442,
    lat: 38.784839,
    name: "山丹县",
    level: "district",
    parent: 620700
  },
  {
    adcode: 620800,
    lng: 106.684691,
    lat: 35.54279,
    name: "平凉市",
    level: "city",
    parent: 620000
  },
  {
    adcode: 620802,
    lng: 106.684223,
    lat: 35.54173,
    name: "崆峒区",
    level: "district",
    parent: 620800
  },
  {
    adcode: 620821,
    lng: 107.365218,
    lat: 35.335283,
    name: "泾川县",
    level: "district",
    parent: 620800
  },
  {
    adcode: 620822,
    lng: 107.620587,
    lat: 35.064009,
    name: "灵台县",
    level: "district",
    parent: 620800
  },
  {
    adcode: 620823,
    lng: 107.031253,
    lat: 35.304533,
    name: "崇信县",
    level: "district",
    parent: 620800
  },
  {
    adcode: 620825,
    lng: 106.041979,
    lat: 35.203428,
    name: "庄浪县",
    level: "district",
    parent: 620800
  },
  {
    adcode: 620826,
    lng: 105.733489,
    lat: 35.525243,
    name: "静宁县",
    level: "district",
    parent: 620800
  },
  {
    adcode: 620881,
    lng: 106.649308,
    lat: 35.215341,
    name: "华亭市",
    level: "district",
    parent: 620800
  },
  {
    adcode: 620900,
    lng: 98.510795,
    lat: 39.744023,
    name: "酒泉市",
    level: "city",
    parent: 620000
  },
  {
    adcode: 620902,
    lng: 98.511155,
    lat: 39.743858,
    name: "肃州区",
    level: "district",
    parent: 620900
  },
  {
    adcode: 620921,
    lng: 98.902959,
    lat: 39.983036,
    name: "金塔县",
    level: "district",
    parent: 620900
  },
  {
    adcode: 620922,
    lng: 95.780591,
    lat: 40.516525,
    name: "瓜州县",
    level: "district",
    parent: 620900
  },
  {
    adcode: 620923,
    lng: 94.87728,
    lat: 39.51224,
    name: "肃北蒙古族自治县",
    level: "district",
    parent: 620900
  },
  {
    adcode: 620924,
    lng: 94.337642,
    lat: 39.631642,
    name: "阿克塞哈萨克族自治县",
    level: "district",
    parent: 620900
  },
  {
    adcode: 620981,
    lng: 97.037206,
    lat: 40.28682,
    name: "玉门市",
    level: "district",
    parent: 620900
  },
  {
    adcode: 620982,
    lng: 94.664279,
    lat: 40.141119,
    name: "敦煌市",
    level: "district",
    parent: 620900
  },
  {
    adcode: 621000,
    lng: 107.638372,
    lat: 35.734218,
    name: "庆阳市",
    level: "city",
    parent: 620000
  },
  {
    adcode: 621002,
    lng: 107.638824,
    lat: 35.733713,
    name: "西峰区",
    level: "district",
    parent: 621000
  },
  {
    adcode: 621021,
    lng: 107.885664,
    lat: 36.013504,
    name: "庆城县",
    level: "district",
    parent: 621000
  },
  {
    adcode: 621022,
    lng: 107.308754,
    lat: 36.569322,
    name: "环县",
    level: "district",
    parent: 621000
  },
  {
    adcode: 621023,
    lng: 107.986288,
    lat: 36.457304,
    name: "华池县",
    level: "district",
    parent: 621000
  },
  {
    adcode: 621024,
    lng: 108.019865,
    lat: 35.819005,
    name: "合水县",
    level: "district",
    parent: 621000
  },
  {
    adcode: 621025,
    lng: 108.361068,
    lat: 35.490642,
    name: "正宁县",
    level: "district",
    parent: 621000
  },
  {
    adcode: 621026,
    lng: 107.921182,
    lat: 35.50201,
    name: "宁县",
    level: "district",
    parent: 621000
  },
  {
    adcode: 621027,
    lng: 107.195706,
    lat: 35.677806,
    name: "镇原县",
    level: "district",
    parent: 621000
  },
  {
    adcode: 621100,
    lng: 104.626294,
    lat: 35.579578,
    name: "定西市",
    level: "city",
    parent: 620000
  },
  {
    adcode: 621102,
    lng: 104.62577,
    lat: 35.579764,
    name: "安定区",
    level: "district",
    parent: 621100
  },
  {
    adcode: 621121,
    lng: 105.250102,
    lat: 35.208922,
    name: "通渭县",
    level: "district",
    parent: 621100
  },
  {
    adcode: 621122,
    lng: 104.637554,
    lat: 35.003409,
    name: "陇西县",
    level: "district",
    parent: 621100
  },
  {
    adcode: 621123,
    lng: 104.211742,
    lat: 35.133023,
    name: "渭源县",
    level: "district",
    parent: 621100
  },
  {
    adcode: 621124,
    lng: 103.862186,
    lat: 35.376233,
    name: "临洮县",
    level: "district",
    parent: 621100
  },
  {
    adcode: 621125,
    lng: 104.466756,
    lat: 34.848642,
    name: "漳县",
    level: "district",
    parent: 621100
  },
  {
    adcode: 621126,
    lng: 104.039882,
    lat: 34.439105,
    name: "岷县",
    level: "district",
    parent: 621100
  },
  {
    adcode: 621200,
    lng: 104.929379,
    lat: 33.388598,
    name: "陇南市",
    level: "city",
    parent: 620000
  },
  {
    adcode: 621202,
    lng: 104.929866,
    lat: 33.388155,
    name: "武都区",
    level: "district",
    parent: 621200
  },
  {
    adcode: 621221,
    lng: 105.734434,
    lat: 33.739863,
    name: "成县",
    level: "district",
    parent: 621200
  },
  {
    adcode: 621222,
    lng: 104.682448,
    lat: 32.942171,
    name: "文县",
    level: "district",
    parent: 621200
  },
  {
    adcode: 621223,
    lng: 104.394475,
    lat: 34.042655,
    name: "宕昌县",
    level: "district",
    parent: 621200
  },
  {
    adcode: 621224,
    lng: 105.609534,
    lat: 33.328266,
    name: "康县",
    level: "district",
    parent: 621200
  },
  {
    adcode: 621225,
    lng: 105.299737,
    lat: 34.013718,
    name: "西和县",
    level: "district",
    parent: 621200
  },
  {
    adcode: 621226,
    lng: 105.181616,
    lat: 34.189387,
    name: "礼县",
    level: "district",
    parent: 621200
  },
  {
    adcode: 621227,
    lng: 106.085632,
    lat: 33.767785,
    name: "徽县",
    level: "district",
    parent: 621200
  },
  {
    adcode: 621228,
    lng: 106.306959,
    lat: 33.910729,
    name: "两当县",
    level: "district",
    parent: 621200
  },
  {
    adcode: 622900,
    lng: 103.212006,
    lat: 35.599446,
    name: "临夏回族自治州",
    level: "city",
    parent: 620000
  },
  {
    adcode: 622901,
    lng: 103.211634,
    lat: 35.59941,
    name: "临夏市",
    level: "district",
    parent: 622900
  },
  {
    adcode: 622921,
    lng: 102.993873,
    lat: 35.49236,
    name: "临夏县",
    level: "district",
    parent: 622900
  },
  {
    adcode: 622922,
    lng: 103.709852,
    lat: 35.371906,
    name: "康乐县",
    level: "district",
    parent: 622900
  },
  {
    adcode: 622923,
    lng: 103.319871,
    lat: 35.938933,
    name: "永靖县",
    level: "district",
    parent: 622900
  },
  {
    adcode: 622924,
    lng: 103.576188,
    lat: 35.481688,
    name: "广河县",
    level: "district",
    parent: 622900
  },
  {
    adcode: 622925,
    lng: 103.350357,
    lat: 35.425971,
    name: "和政县",
    level: "district",
    parent: 622900
  },
  {
    adcode: 622926,
    lng: 103.389568,
    lat: 35.66383,
    name: "东乡族自治县",
    level: "district",
    parent: 622900
  },
  {
    adcode: 622927,
    lng: 102.877473,
    lat: 35.712906,
    name: "积石山保安族东乡族撒拉族自治县",
    level: "district",
    parent: 622900
  },
  {
    adcode: 623000,
    lng: 102.911008,
    lat: 34.986354,
    name: "甘南藏族自治州",
    level: "city",
    parent: 620000
  },
  {
    adcode: 623001,
    lng: 102.91149,
    lat: 34.985973,
    name: "合作市",
    level: "district",
    parent: 623000
  },
  {
    adcode: 623021,
    lng: 103.353054,
    lat: 34.69164,
    name: "临潭县",
    level: "district",
    parent: 623000
  },
  {
    adcode: 623022,
    lng: 103.508508,
    lat: 34.588165,
    name: "卓尼县",
    level: "district",
    parent: 623000
  },
  {
    adcode: 623023,
    lng: 104.370271,
    lat: 33.782964,
    name: "舟曲县",
    level: "district",
    parent: 623000
  },
  {
    adcode: 623024,
    lng: 103.221009,
    lat: 34.055348,
    name: "迭部县",
    level: "district",
    parent: 623000
  },
  {
    adcode: 623025,
    lng: 102.075767,
    lat: 33.998068,
    name: "玛曲县",
    level: "district",
    parent: 623000
  },
  {
    adcode: 623026,
    lng: 102.488495,
    lat: 34.589591,
    name: "碌曲县",
    level: "district",
    parent: 623000
  },
  {
    adcode: 623027,
    lng: 102.520743,
    lat: 35.200853,
    name: "夏河县",
    level: "district",
    parent: 623000
  },
  {
    adcode: 630000,
    lng: 101.778916,
    lat: 36.623178,
    name: "青海省",
    level: "province",
    parent: 100000
  },
  {
    adcode: 630100,
    lng: 101.778916,
    lat: 36.623178,
    name: "西宁市",
    level: "city",
    parent: 630000
  },
  {
    adcode: 630102,
    lng: 101.796095,
    lat: 36.616043,
    name: "城东区",
    level: "district",
    parent: 630100
  },
  {
    adcode: 630103,
    lng: 101.784554,
    lat: 36.621181,
    name: "城中区",
    level: "district",
    parent: 630100
  },
  {
    adcode: 630104,
    lng: 101.763649,
    lat: 36.628323,
    name: "城西区",
    level: "district",
    parent: 630100
  },
  {
    adcode: 630105,
    lng: 101.761297,
    lat: 36.648448,
    name: "城北区",
    level: "district",
    parent: 630100
  },
  {
    adcode: 630106,
    lng: 101.569475,
    lat: 36.500419,
    name: "湟中区",
    level: "district",
    parent: 630100
  },
  {
    adcode: 630121,
    lng: 101.684183,
    lat: 36.931343,
    name: "大通回族土族自治县",
    level: "district",
    parent: 630100
  },
  {
    adcode: 630123,
    lng: 101.263435,
    lat: 36.684818,
    name: "湟源县",
    level: "district",
    parent: 630100
  },
  {
    adcode: 630200,
    lng: 102.10327,
    lat: 36.502916,
    name: "海东市",
    level: "city",
    parent: 630000
  },
  {
    adcode: 630202,
    lng: 102.402431,
    lat: 36.480291,
    name: "乐都区",
    level: "district",
    parent: 630200
  },
  {
    adcode: 630203,
    lng: 102.104295,
    lat: 36.502714,
    name: "平安区",
    level: "district",
    parent: 630200
  },
  {
    adcode: 630222,
    lng: 102.804209,
    lat: 36.329451,
    name: "民和回族土族自治县",
    level: "district",
    parent: 630200
  },
  {
    adcode: 630223,
    lng: 101.956734,
    lat: 36.83994,
    name: "互助土族自治县",
    level: "district",
    parent: 630200
  },
  {
    adcode: 630224,
    lng: 102.262329,
    lat: 36.098322,
    name: "化隆回族自治县",
    level: "district",
    parent: 630200
  },
  {
    adcode: 630225,
    lng: 102.486534,
    lat: 35.847247,
    name: "循化撒拉族自治县",
    level: "district",
    parent: 630200
  },
  {
    adcode: 632200,
    lng: 100.901059,
    lat: 36.959435,
    name: "海北藏族自治州",
    level: "city",
    parent: 630000
  },
  {
    adcode: 632221,
    lng: 101.618461,
    lat: 37.376627,
    name: "门源回族自治县",
    level: "district",
    parent: 632200
  },
  {
    adcode: 632222,
    lng: 100.249778,
    lat: 38.175409,
    name: "祁连县",
    level: "district",
    parent: 632200
  },
  {
    adcode: 632223,
    lng: 100.90049,
    lat: 36.959542,
    name: "海晏县",
    level: "district",
    parent: 632200
  },
  {
    adcode: 632224,
    lng: 100.138417,
    lat: 37.326263,
    name: "刚察县",
    level: "district",
    parent: 632200
  },
  {
    adcode: 632300,
    lng: 102.019988,
    lat: 35.517744,
    name: "黄南藏族自治州",
    level: "city",
    parent: 630000
  },
  {
    adcode: 632301,
    lng: 102.017604,
    lat: 35.516337,
    name: "同仁市",
    level: "district",
    parent: 632300
  },
  {
    adcode: 632322,
    lng: 102.031953,
    lat: 35.938205,
    name: "尖扎县",
    level: "district",
    parent: 632300
  },
  {
    adcode: 632323,
    lng: 101.469343,
    lat: 35.036842,
    name: "泽库县",
    level: "district",
    parent: 632300
  },
  {
    adcode: 632324,
    lng: 101.611877,
    lat: 34.734522,
    name: "河南蒙古族自治县",
    level: "district",
    parent: 632300
  },
  {
    adcode: 632500,
    lng: 100.619542,
    lat: 36.280353,
    name: "海南藏族自治州",
    level: "city",
    parent: 630000
  },
  {
    adcode: 632521,
    lng: 100.619597,
    lat: 36.280286,
    name: "共和县",
    level: "district",
    parent: 632500
  },
  {
    adcode: 632522,
    lng: 100.579465,
    lat: 35.254492,
    name: "同德县",
    level: "district",
    parent: 632500
  },
  {
    adcode: 632523,
    lng: 101.431856,
    lat: 36.040456,
    name: "贵德县",
    level: "district",
    parent: 632500
  },
  {
    adcode: 632524,
    lng: 99.986963,
    lat: 35.58909,
    name: "兴海县",
    level: "district",
    parent: 632500
  },
  {
    adcode: 632525,
    lng: 100.74792,
    lat: 35.587085,
    name: "贵南县",
    level: "district",
    parent: 632500
  },
  {
    adcode: 632600,
    lng: 100.242143,
    lat: 34.4736,
    name: "果洛藏族自治州",
    level: "city",
    parent: 630000
  },
  {
    adcode: 632621,
    lng: 100.243531,
    lat: 34.473386,
    name: "玛沁县",
    level: "district",
    parent: 632600
  },
  {
    adcode: 632622,
    lng: 100.737955,
    lat: 32.931589,
    name: "班玛县",
    level: "district",
    parent: 632600
  },
  {
    adcode: 632623,
    lng: 99.902589,
    lat: 33.966987,
    name: "甘德县",
    level: "district",
    parent: 632600
  },
  {
    adcode: 632624,
    lng: 99.651715,
    lat: 33.753259,
    name: "达日县",
    level: "district",
    parent: 632600
  },
  {
    adcode: 632625,
    lng: 101.484884,
    lat: 33.430217,
    name: "久治县",
    level: "district",
    parent: 632600
  },
  {
    adcode: 632626,
    lng: 98.211343,
    lat: 34.91528,
    name: "玛多县",
    level: "district",
    parent: 632600
  },
  {
    adcode: 632700,
    lng: 97.008522,
    lat: 33.004049,
    name: "玉树藏族自治州",
    level: "city",
    parent: 630000
  },
  {
    adcode: 632701,
    lng: 97.008762,
    lat: 33.00393,
    name: "玉树市",
    level: "district",
    parent: 632700
  },
  {
    adcode: 632722,
    lng: 95.293423,
    lat: 32.891886,
    name: "杂多县",
    level: "district",
    parent: 632700
  },
  {
    adcode: 632723,
    lng: 97.110893,
    lat: 33.367884,
    name: "称多县",
    level: "district",
    parent: 632700
  },
  {
    adcode: 632724,
    lng: 95.616843,
    lat: 33.852322,
    name: "治多县",
    level: "district",
    parent: 632700
  },
  {
    adcode: 632725,
    lng: 96.479797,
    lat: 32.203206,
    name: "囊谦县",
    level: "district",
    parent: 632700
  },
  {
    adcode: 632726,
    lng: 95.800674,
    lat: 34.12654,
    name: "曲麻莱县",
    level: "district",
    parent: 632700
  },
  {
    adcode: 632800,
    lng: 97.370785,
    lat: 37.374663,
    name: "海西蒙古族藏族自治州",
    level: "city",
    parent: 630000
  },
  {
    adcode: 632801,
    lng: 94.905777,
    lat: 36.401541,
    name: "格尔木市",
    level: "district",
    parent: 632800
  },
  {
    adcode: 632802,
    lng: 97.370143,
    lat: 37.374555,
    name: "德令哈市",
    level: "district",
    parent: 632800
  },
  {
    adcode: 632803,
    lng: 90.855955,
    lat: 38.247117,
    name: "茫崖市",
    level: "district",
    parent: 632800
  },
  {
    adcode: 632821,
    lng: 98.479852,
    lat: 36.930389,
    name: "乌兰县",
    level: "district",
    parent: 632800
  },
  {
    adcode: 632822,
    lng: 98.089161,
    lat: 36.298553,
    name: "都兰县",
    level: "district",
    parent: 632800
  },
  {
    adcode: 632823,
    lng: 99.02078,
    lat: 37.29906,
    name: "天峻县",
    level: "district",
    parent: 632800
  },
  {
    adcode: 632825,
    lng: 95.357233,
    lat: 37.853631,
    name: "海西蒙古族藏族自治州直辖",
    level: "district",
    parent: 632800
  },
  {
    adcode: 640000,
    lng: 106.278179,
    lat: 38.46637,
    name: "宁夏回族自治区",
    level: "province",
    parent: 100000
  },
  {
    adcode: 640100,
    lng: 106.278179,
    lat: 38.46637,
    name: "银川市",
    level: "city",
    parent: 640000
  },
  {
    adcode: 640104,
    lng: 106.278393,
    lat: 38.46747,
    name: "兴庆区",
    level: "district",
    parent: 640100
  },
  {
    adcode: 640105,
    lng: 106.132116,
    lat: 38.492424,
    name: "西夏区",
    level: "district",
    parent: 640100
  },
  {
    adcode: 640106,
    lng: 106.228486,
    lat: 38.477353,
    name: "金凤区",
    level: "district",
    parent: 640100
  },
  {
    adcode: 640121,
    lng: 106.253781,
    lat: 38.28043,
    name: "永宁县",
    level: "district",
    parent: 640100
  },
  {
    adcode: 640122,
    lng: 106.345904,
    lat: 38.554563,
    name: "贺兰县",
    level: "district",
    parent: 640100
  },
  {
    adcode: 640181,
    lng: 106.334701,
    lat: 38.094058,
    name: "灵武市",
    level: "district",
    parent: 640100
  },
  {
    adcode: 640200,
    lng: 106.376173,
    lat: 39.01333,
    name: "石嘴山市",
    level: "city",
    parent: 640000
  },
  {
    adcode: 640202,
    lng: 106.376651,
    lat: 39.014158,
    name: "大武口区",
    level: "district",
    parent: 640200
  },
  {
    adcode: 640205,
    lng: 106.775513,
    lat: 39.230094,
    name: "惠农区",
    level: "district",
    parent: 640200
  },
  {
    adcode: 640221,
    lng: 106.54489,
    lat: 38.90674,
    name: "平罗县",
    level: "district",
    parent: 640200
  },
  {
    adcode: 640300,
    lng: 106.199409,
    lat: 37.986165,
    name: "吴忠市",
    level: "city",
    parent: 640000
  },
  {
    adcode: 640302,
    lng: 106.199419,
    lat: 37.985967,
    name: "利通区",
    level: "district",
    parent: 640300
  },
  {
    adcode: 640303,
    lng: 106.067315,
    lat: 37.421616,
    name: "红寺堡区",
    level: "district",
    parent: 640300
  },
  {
    adcode: 640323,
    lng: 107.40541,
    lat: 37.784222,
    name: "盐池县",
    level: "district",
    parent: 640300
  },
  {
    adcode: 640324,
    lng: 105.914764,
    lat: 36.9829,
    name: "同心县",
    level: "district",
    parent: 640300
  },
  {
    adcode: 640381,
    lng: 106.075395,
    lat: 38.021509,
    name: "青铜峡市",
    level: "district",
    parent: 640300
  },
  {
    adcode: 640400,
    lng: 106.285241,
    lat: 36.004561,
    name: "固原市",
    level: "city",
    parent: 640000
  },
  {
    adcode: 640402,
    lng: 106.28477,
    lat: 36.005337,
    name: "原州区",
    level: "district",
    parent: 640400
  },
  {
    adcode: 640422,
    lng: 105.731801,
    lat: 35.965384,
    name: "西吉县",
    level: "district",
    parent: 640400
  },
  {
    adcode: 640423,
    lng: 106.12344,
    lat: 35.618234,
    name: "隆德县",
    level: "district",
    parent: 640400
  },
  {
    adcode: 640424,
    lng: 106.338674,
    lat: 35.49344,
    name: "泾源县",
    level: "district",
    parent: 640400
  },
  {
    adcode: 640425,
    lng: 106.641512,
    lat: 35.849975,
    name: "彭阳县",
    level: "district",
    parent: 640400
  },
  {
    adcode: 640500,
    lng: 105.189568,
    lat: 37.514951,
    name: "中卫市",
    level: "city",
    parent: 640000
  },
  {
    adcode: 640502,
    lng: 105.190536,
    lat: 37.514564,
    name: "沙坡头区",
    level: "district",
    parent: 640500
  },
  {
    adcode: 640521,
    lng: 105.675784,
    lat: 37.489736,
    name: "中宁县",
    level: "district",
    parent: 640500
  },
  {
    adcode: 640522,
    lng: 105.647323,
    lat: 36.562007,
    name: "海原县",
    level: "district",
    parent: 640500
  },
  {
    adcode: 650000,
    lng: 87.617733,
    lat: 43.792818,
    name: "新疆维吾尔自治区",
    level: "province",
    parent: 100000
  },
  {
    adcode: 650100,
    lng: 87.617733,
    lat: 43.792818,
    name: "乌鲁木齐市",
    level: "city",
    parent: 650000
  },
  {
    adcode: 650102,
    lng: 87.620116,
    lat: 43.796428,
    name: "天山区",
    level: "district",
    parent: 650100
  },
  {
    adcode: 650103,
    lng: 87.596639,
    lat: 43.788872,
    name: "沙依巴克区",
    level: "district",
    parent: 650100
  },
  {
    adcode: 650104,
    lng: 87.560653,
    lat: 43.870882,
    name: "新市区",
    level: "district",
    parent: 650100
  },
  {
    adcode: 650105,
    lng: 87.613093,
    lat: 43.816747,
    name: "水磨沟区",
    level: "district",
    parent: 650100
  },
  {
    adcode: 650106,
    lng: 87.425823,
    lat: 43.876053,
    name: "头屯河区",
    level: "district",
    parent: 650100
  },
  {
    adcode: 650107,
    lng: 88.30994,
    lat: 43.36181,
    name: "达坂城区",
    level: "district",
    parent: 650100
  },
  {
    adcode: 650109,
    lng: 87.691801,
    lat: 43.960982,
    name: "米东区",
    level: "district",
    parent: 650100
  },
  {
    adcode: 650121,
    lng: 87.505603,
    lat: 43.982546,
    name: "乌鲁木齐县",
    level: "district",
    parent: 650100
  },
  {
    adcode: 650200,
    lng: 84.873946,
    lat: 45.595886,
    name: "克拉玛依市",
    level: "city",
    parent: 650000
  },
  {
    adcode: 650202,
    lng: 84.882267,
    lat: 44.327207,
    name: "独山子区",
    level: "district",
    parent: 650200
  },
  {
    adcode: 650203,
    lng: 84.868918,
    lat: 45.600477,
    name: "克拉玛依区",
    level: "district",
    parent: 650200
  },
  {
    adcode: 650204,
    lng: 85.129882,
    lat: 45.689021,
    name: "白碱滩区",
    level: "district",
    parent: 650200
  },
  {
    adcode: 650205,
    lng: 85.697767,
    lat: 46.08776,
    name: "乌尔禾区",
    level: "district",
    parent: 650200
  },
  {
    adcode: 650400,
    lng: 89.184078,
    lat: 42.947613,
    name: "吐鲁番市",
    level: "city",
    parent: 650000
  },
  {
    adcode: 650402,
    lng: 89.182324,
    lat: 42.947627,
    name: "高昌区",
    level: "district",
    parent: 650400
  },
  {
    adcode: 650421,
    lng: 90.212692,
    lat: 42.865503,
    name: "鄯善县",
    level: "district",
    parent: 650400
  },
  {
    adcode: 650422,
    lng: 88.655771,
    lat: 42.793536,
    name: "托克逊县",
    level: "district",
    parent: 650400
  },
  {
    adcode: 650500,
    lng: 93.51316,
    lat: 42.833248,
    name: "哈密市",
    level: "city",
    parent: 650000
  },
  {
    adcode: 650502,
    lng: 93.509174,
    lat: 42.833888,
    name: "伊州区",
    level: "district",
    parent: 650500
  },
  {
    adcode: 650521,
    lng: 93.021795,
    lat: 43.599032,
    name: "巴里坤哈萨克自治县",
    level: "district",
    parent: 650500
  },
  {
    adcode: 650522,
    lng: 94.692773,
    lat: 43.252012,
    name: "伊吾县",
    level: "district",
    parent: 650500
  },
  {
    adcode: 652300,
    lng: 87.304012,
    lat: 44.014577,
    name: "昌吉回族自治州",
    level: "city",
    parent: 650000
  },
  {
    adcode: 652301,
    lng: 87.304112,
    lat: 44.013183,
    name: "昌吉市",
    level: "district",
    parent: 652300
  },
  {
    adcode: 652302,
    lng: 87.98384,
    lat: 44.152153,
    name: "阜康市",
    level: "district",
    parent: 652300
  },
  {
    adcode: 652323,
    lng: 86.888613,
    lat: 44.189342,
    name: "呼图壁县",
    level: "district",
    parent: 652300
  },
  {
    adcode: 652324,
    lng: 86.217687,
    lat: 44.305625,
    name: "玛纳斯县",
    level: "district",
    parent: 652300
  },
  {
    adcode: 652325,
    lng: 89.591437,
    lat: 44.021996,
    name: "奇台县",
    level: "district",
    parent: 652300
  },
  {
    adcode: 652327,
    lng: 89.181288,
    lat: 43.997162,
    name: "吉木萨尔县",
    level: "district",
    parent: 652300
  },
  {
    adcode: 652328,
    lng: 90.282833,
    lat: 43.832442,
    name: "木垒哈萨克自治县",
    level: "district",
    parent: 652300
  },
  {
    adcode: 652700,
    lng: 82.074778,
    lat: 44.903258,
    name: "博尔塔拉蒙古自治州",
    level: "city",
    parent: 650000
  },
  {
    adcode: 652701,
    lng: 82.072237,
    lat: 44.903087,
    name: "博乐市",
    level: "district",
    parent: 652700
  },
  {
    adcode: 652702,
    lng: 82.569389,
    lat: 45.16777,
    name: "阿拉山口市",
    level: "district",
    parent: 652700
  },
  {
    adcode: 652722,
    lng: 82.892938,
    lat: 44.605645,
    name: "精河县",
    level: "district",
    parent: 652700
  },
  {
    adcode: 652723,
    lng: 81.03099,
    lat: 44.973751,
    name: "温泉县",
    level: "district",
    parent: 652700
  },
  {
    adcode: 652800,
    lng: 86.150969,
    lat: 41.768552,
    name: "巴音郭楞蒙古自治州",
    level: "city",
    parent: 650000
  },
  {
    adcode: 652801,
    lng: 86.145948,
    lat: 41.763122,
    name: "库尔勒市",
    level: "district",
    parent: 652800
  },
  {
    adcode: 652822,
    lng: 84.248542,
    lat: 41.781266,
    name: "轮台县",
    level: "district",
    parent: 652800
  },
  {
    adcode: 652823,
    lng: 86.263412,
    lat: 41.337428,
    name: "尉犁县",
    level: "district",
    parent: 652800
  },
  {
    adcode: 652824,
    lng: 88.168807,
    lat: 39.023807,
    name: "若羌县",
    level: "district",
    parent: 652800
  },
  {
    adcode: 652825,
    lng: 85.532629,
    lat: 38.138562,
    name: "且末县",
    level: "district",
    parent: 652800
  },
  {
    adcode: 652826,
    lng: 86.5698,
    lat: 42.064349,
    name: "焉耆回族自治县",
    level: "district",
    parent: 652800
  },
  {
    adcode: 652827,
    lng: 86.391067,
    lat: 42.31716,
    name: "和静县",
    level: "district",
    parent: 652800
  },
  {
    adcode: 652828,
    lng: 86.864947,
    lat: 42.268863,
    name: "和硕县",
    level: "district",
    parent: 652800
  },
  {
    adcode: 652829,
    lng: 86.631576,
    lat: 41.980166,
    name: "博湖县",
    level: "district",
    parent: 652800
  },
  {
    adcode: 652900,
    lng: 80.265068,
    lat: 41.170712,
    name: "阿克苏地区",
    level: "city",
    parent: 650000
  },
  {
    adcode: 652901,
    lng: 80.2629,
    lat: 41.171272,
    name: "阿克苏市",
    level: "district",
    parent: 652900
  },
  {
    adcode: 652902,
    lng: 82.96304,
    lat: 41.717141,
    name: "库车市",
    level: "district",
    parent: 652900
  },
  {
    adcode: 652922,
    lng: 80.243273,
    lat: 41.272995,
    name: "温宿县",
    level: "district",
    parent: 652900
  },
  {
    adcode: 652924,
    lng: 82.78077,
    lat: 41.226268,
    name: "沙雅县",
    level: "district",
    parent: 652900
  },
  {
    adcode: 652925,
    lng: 82.610828,
    lat: 41.551176,
    name: "新和县",
    level: "district",
    parent: 652900
  },
  {
    adcode: 652926,
    lng: 81.869881,
    lat: 41.796101,
    name: "拜城县",
    level: "district",
    parent: 652900
  },
  {
    adcode: 652927,
    lng: 79.230805,
    lat: 41.21587,
    name: "乌什县",
    level: "district",
    parent: 652900
  },
  {
    adcode: 652928,
    lng: 80.378426,
    lat: 40.638422,
    name: "阿瓦提县",
    level: "district",
    parent: 652900
  },
  {
    adcode: 652929,
    lng: 79.04785,
    lat: 40.50624,
    name: "柯坪县",
    level: "district",
    parent: 652900
  },
  {
    adcode: 653000,
    lng: 76.172825,
    lat: 39.713431,
    name: "克孜勒苏柯尔克孜自治州",
    level: "city",
    parent: 650000
  },
  {
    adcode: 653001,
    lng: 76.173939,
    lat: 39.712898,
    name: "阿图什市",
    level: "district",
    parent: 653000
  },
  {
    adcode: 653022,
    lng: 75.945159,
    lat: 39.147079,
    name: "阿克陶县",
    level: "district",
    parent: 653000
  },
  {
    adcode: 653023,
    lng: 78.450164,
    lat: 40.937567,
    name: "阿合奇县",
    level: "district",
    parent: 653000
  },
  {
    adcode: 653024,
    lng: 75.25969,
    lat: 39.716633,
    name: "乌恰县",
    level: "district",
    parent: 653000
  },
  {
    adcode: 653100,
    lng: 75.989138,
    lat: 39.467664,
    name: "喀什地区",
    level: "city",
    parent: 650000
  },
  {
    adcode: 653101,
    lng: 75.98838,
    lat: 39.467861,
    name: "喀什市",
    level: "district",
    parent: 653100
  },
  {
    adcode: 653121,
    lng: 75.863075,
    lat: 39.378306,
    name: "疏附县",
    level: "district",
    parent: 653100
  },
  {
    adcode: 653122,
    lng: 76.053653,
    lat: 39.399461,
    name: "疏勒县",
    level: "district",
    parent: 653100
  },
  {
    adcode: 653123,
    lng: 76.174292,
    lat: 38.929839,
    name: "英吉沙县",
    level: "district",
    parent: 653100
  },
  {
    adcode: 653124,
    lng: 77.273593,
    lat: 38.191217,
    name: "泽普县",
    level: "district",
    parent: 653100
  },
  {
    adcode: 653125,
    lng: 77.248884,
    lat: 38.414499,
    name: "莎车县",
    level: "district",
    parent: 653100
  },
  {
    adcode: 653126,
    lng: 77.420353,
    lat: 37.884679,
    name: "叶城县",
    level: "district",
    parent: 653100
  },
  {
    adcode: 653127,
    lng: 77.651538,
    lat: 38.903384,
    name: "麦盖提县",
    level: "district",
    parent: 653100
  },
  {
    adcode: 653128,
    lng: 76.7724,
    lat: 39.235248,
    name: "岳普湖县",
    level: "district",
    parent: 653100
  },
  {
    adcode: 653129,
    lng: 76.741982,
    lat: 39.494325,
    name: "伽师县",
    level: "district",
    parent: 653100
  },
  {
    adcode: 653130,
    lng: 78.55041,
    lat: 39.783479,
    name: "巴楚县",
    level: "district",
    parent: 653100
  },
  {
    adcode: 653131,
    lng: 75.228068,
    lat: 37.775437,
    name: "塔什库尔干塔吉克自治县",
    level: "district",
    parent: 653100
  },
  {
    adcode: 653200,
    lng: 79.92533,
    lat: 37.110687,
    name: "和田地区",
    level: "city",
    parent: 650000
  },
  {
    adcode: 653201,
    lng: 79.927542,
    lat: 37.108944,
    name: "和田市",
    level: "district",
    parent: 653200
  },
  {
    adcode: 653221,
    lng: 79.81907,
    lat: 37.120031,
    name: "和田县",
    level: "district",
    parent: 653200
  },
  {
    adcode: 653222,
    lng: 79.736629,
    lat: 37.271511,
    name: "墨玉县",
    level: "district",
    parent: 653200
  },
  {
    adcode: 653223,
    lng: 78.282301,
    lat: 37.616332,
    name: "皮山县",
    level: "district",
    parent: 653200
  },
  {
    adcode: 653224,
    lng: 80.184038,
    lat: 37.074377,
    name: "洛浦县",
    level: "district",
    parent: 653200
  },
  {
    adcode: 653225,
    lng: 80.803572,
    lat: 37.001672,
    name: "策勒县",
    level: "district",
    parent: 653200
  },
  {
    adcode: 653226,
    lng: 81.667845,
    lat: 36.854628,
    name: "于田县",
    level: "district",
    parent: 653200
  },
  {
    adcode: 653227,
    lng: 82.692354,
    lat: 37.064909,
    name: "民丰县",
    level: "district",
    parent: 653200
  },
  {
    adcode: 654000,
    lng: 81.317946,
    lat: 43.92186,
    name: "伊犁哈萨克自治州",
    level: "city",
    parent: 650000
  },
  {
    adcode: 654002,
    lng: 81.316343,
    lat: 43.922209,
    name: "伊宁市",
    level: "district",
    parent: 654000
  },
  {
    adcode: 654003,
    lng: 84.901602,
    lat: 44.423445,
    name: "奎屯市",
    level: "district",
    parent: 654000
  },
  {
    adcode: 654004,
    lng: 80.420759,
    lat: 44.201669,
    name: "霍尔果斯市",
    level: "district",
    parent: 654000
  },
  {
    adcode: 654021,
    lng: 81.524671,
    lat: 43.977876,
    name: "伊宁县",
    level: "district",
    parent: 654000
  },
  {
    adcode: 654022,
    lng: 81.150874,
    lat: 43.838883,
    name: "察布查尔锡伯自治县",
    level: "district",
    parent: 654000
  },
  {
    adcode: 654023,
    lng: 80.872508,
    lat: 44.049912,
    name: "霍城县",
    level: "district",
    parent: 654000
  },
  {
    adcode: 654024,
    lng: 82.227044,
    lat: 43.481618,
    name: "巩留县",
    level: "district",
    parent: 654000
  },
  {
    adcode: 654025,
    lng: 83.258493,
    lat: 43.434249,
    name: "新源县",
    level: "district",
    parent: 654000
  },
  {
    adcode: 654026,
    lng: 81.126029,
    lat: 43.157765,
    name: "昭苏县",
    level: "district",
    parent: 654000
  },
  {
    adcode: 654027,
    lng: 81.840058,
    lat: 43.214861,
    name: "特克斯县",
    level: "district",
    parent: 654000
  },
  {
    adcode: 654028,
    lng: 82.504119,
    lat: 43.789737,
    name: "尼勒克县",
    level: "district",
    parent: 654000
  },
  {
    adcode: 654200,
    lng: 82.985732,
    lat: 46.746301,
    name: "塔城地区",
    level: "city",
    parent: 650000
  },
  {
    adcode: 654201,
    lng: 82.983988,
    lat: 46.746281,
    name: "塔城市",
    level: "district",
    parent: 654200
  },
  {
    adcode: 654202,
    lng: 84.677624,
    lat: 44.430115,
    name: "乌苏市",
    level: "district",
    parent: 654200
  },
  {
    adcode: 654221,
    lng: 83.622118,
    lat: 46.522555,
    name: "额敏县",
    level: "district",
    parent: 654200
  },
  {
    adcode: 654223,
    lng: 85.622508,
    lat: 44.329544,
    name: "沙湾市",
    level: "district",
    parent: 654200
  },
  {
    adcode: 654224,
    lng: 83.60469,
    lat: 45.935863,
    name: "托里县",
    level: "district",
    parent: 654200
  },
  {
    adcode: 654225,
    lng: 82.982157,
    lat: 46.202781,
    name: "裕民县",
    level: "district",
    parent: 654200
  },
  {
    adcode: 654226,
    lng: 85.733551,
    lat: 46.793001,
    name: "和布克赛尔蒙古自治县",
    level: "district",
    parent: 654200
  },
  {
    adcode: 654300,
    lng: 88.13963,
    lat: 47.848393,
    name: "阿勒泰地区",
    level: "city",
    parent: 650000
  },
  {
    adcode: 654301,
    lng: 88.138743,
    lat: 47.848911,
    name: "阿勒泰市",
    level: "district",
    parent: 654300
  },
  {
    adcode: 654321,
    lng: 86.86186,
    lat: 47.70453,
    name: "布尔津县",
    level: "district",
    parent: 654300
  },
  {
    adcode: 654322,
    lng: 89.524993,
    lat: 46.993106,
    name: "富蕴县",
    level: "district",
    parent: 654300
  },
  {
    adcode: 654323,
    lng: 87.494569,
    lat: 47.113128,
    name: "福海县",
    level: "district",
    parent: 654300
  },
  {
    adcode: 654324,
    lng: 86.418964,
    lat: 48.059284,
    name: "哈巴河县",
    level: "district",
    parent: 654300
  },
  {
    adcode: 654325,
    lng: 90.381561,
    lat: 46.672446,
    name: "青河县",
    level: "district",
    parent: 654300
  },
  {
    adcode: 654326,
    lng: 85.876064,
    lat: 47.434633,
    name: "吉木乃县",
    level: "district",
    parent: 654300
  },
  {
    adcode: 659001,
    lng: 86.041075,
    lat: 44.305886,
    name: "石河子市",
    level: "city",
    parent: 650000
  },
  {
    adcode: 659002,
    lng: 81.285884,
    lat: 40.541914,
    name: "阿拉尔市",
    level: "city",
    parent: 650000
  },
  {
    adcode: 659003,
    lng: 79.077978,
    lat: 39.867316,
    name: "图木舒克市",
    level: "city",
    parent: 650000
  },
  {
    adcode: 659004,
    lng: 87.526884,
    lat: 44.167401,
    name: "五家渠市",
    level: "city",
    parent: 650000
  },
  {
    adcode: 659005,
    lng: 87.824932,
    lat: 47.353177,
    name: "北屯市",
    level: "city",
    parent: 650000
  },
  {
    adcode: 659006,
    lng: 85.501218,
    lat: 41.827251,
    name: "铁门关市",
    level: "city",
    parent: 650000
  },
  {
    adcode: 659007,
    lng: 82.353656,
    lat: 44.840524,
    name: "双河市",
    level: "city",
    parent: 650000
  },
  {
    adcode: 659008,
    lng: 80.63579,
    lat: 43.6832,
    name: "可克达拉市",
    level: "city",
    parent: 650000
  },
  {
    adcode: 659009,
    lng: 79.287372,
    lat: 37.207994,
    name: "昆玉市",
    level: "city",
    parent: 650000
  },
  {
    adcode: 659010,
    lng: 84.8275959,
    lat: 44.69288853,
    name: "胡杨河市",
    level: "city",
    parent: 650000
  },
  {
    adcode: 710000,
    lng: 121.509062,
    lat: 25.044332,
    name: "台湾省",
    level: "province",
    parent: 100000
  },
  {
    adcode: 810000,
    lng: 114.173355,
    lat: 22.320048,
    name: "香港特别行政区",
    level: "province",
    parent: 100000
  },
  {
    adcode: 810001,
    lng: 114.1543731,
    lat: 22.28198083,
    name: "中西区",
    level: "district",
    parent: 810000
  },
  {
    adcode: 810002,
    lng: 114.1829153,
    lat: 22.27638889,
    name: "湾仔区",
    level: "district",
    parent: 810000
  },
  {
    adcode: 810003,
    lng: 114.2260031,
    lat: 22.27969306,
    name: "东区",
    level: "district",
    parent: 810000
  },
  {
    adcode: 810004,
    lng: 114.1600117,
    lat: 22.24589667,
    name: "南区",
    level: "district",
    parent: 810000
  },
  {
    adcode: 810005,
    lng: 114.1733317,
    lat: 22.31170389,
    name: "油尖旺区",
    level: "district",
    parent: 810000
  },
  {
    adcode: 810006,
    lng: 114.1632417,
    lat: 22.33385417,
    name: "深水埗区",
    level: "district",
    parent: 810000
  },
  {
    adcode: 810007,
    lng: 114.1928467,
    lat: 22.31251,
    name: "九龙城区",
    level: "district",
    parent: 810000
  },
  {
    adcode: 810008,
    lng: 114.2038856,
    lat: 22.33632056,
    name: "黄大仙区",
    level: "district",
    parent: 810000
  },
  {
    adcode: 810009,
    lng: 114.2140542,
    lat: 22.32083778,
    name: "观塘区",
    level: "district",
    parent: 810000
  },
  {
    adcode: 810010,
    lng: 114.1210792,
    lat: 22.36830667,
    name: "荃湾区",
    level: "district",
    parent: 810000
  },
  {
    adcode: 810011,
    lng: 113.9765742,
    lat: 22.39384417,
    name: "屯门区",
    level: "district",
    parent: 810000
  },
  {
    adcode: 810012,
    lng: 114.0324381,
    lat: 22.44142833,
    name: "元朗区",
    level: "district",
    parent: 810000
  },
  {
    adcode: 810013,
    lng: 114.1473639,
    lat: 22.49610389,
    name: "北区",
    level: "district",
    parent: 810000
  },
  {
    adcode: 810014,
    lng: 114.1717431,
    lat: 22.44565306,
    name: "大埔区",
    level: "district",
    parent: 810000
  },
  {
    adcode: 810015,
    lng: 114.264645,
    lat: 22.31421306,
    name: "西贡区",
    level: "district",
    parent: 810000
  },
  {
    adcode: 810016,
    lng: 114.1953653,
    lat: 22.37953167,
    name: "沙田区",
    level: "district",
    parent: 810000
  },
  {
    adcode: 810017,
    lng: 114.1393194,
    lat: 22.36387667,
    name: "葵青区",
    level: "district",
    parent: 810000
  },
  {
    adcode: 810018,
    lng: 113.94612,
    lat: 22.28640778,
    name: "离岛区",
    level: "district",
    parent: 810000
  },
  {
    adcode: 820000,
    lng: 113.54909,
    lat: 22.198951,
    name: "澳门特别行政区",
    level: "province",
    parent: 100000
  },
  {
    adcode: 820001,
    lng: 113.5528956,
    lat: 22.20787,
    name: "花地玛堂区",
    level: "district",
    parent: 820000
  },
  {
    adcode: 820002,
    lng: 113.5489608,
    lat: 22.1992075,
    name: "花王堂区",
    level: "district",
    parent: 820000
  },
  {
    adcode: 820003,
    lng: 113.5501828,
    lat: 22.19372083,
    name: "望德堂区",
    level: "district",
    parent: 820000
  },
  {
    adcode: 820004,
    lng: 113.5536475,
    lat: 22.18853944,
    name: "大堂区",
    level: "district",
    parent: 820000
  },
  {
    adcode: 820005,
    lng: 113.5419278,
    lat: 22.18736806,
    name: "风顺堂区",
    level: "district",
    parent: 820000
  },
  {
    adcode: 820006,
    lng: 113.5587044,
    lat: 22.15375944,
    name: "嘉模堂区",
    level: "district",
    parent: 820000
  },
  {
    adcode: 820007,
    lng: 113.5695992,
    lat: 22.13663,
    name: "路凼填海区",
    level: "district",
    parent: 820000
  },
  {
    adcode: 820008,
    lng: 113.5599542,
    lat: 22.12348639,
    name: "圣方济各堂区",
    level: "district",
    parent: 820000
  }
]

city._map = keyBy(city, "adcode")

city._tree = city.filter(item => {
  if (item.parent === null) return true

  let parent = city._map[item.parent]

  if (parent) {
    get(parent, "children", !parent.children && (parent.children = [])).push(item)
  }
})
