global.at_bunker_interact = 0;
global.at_npc_bot = 0;
global.at_secret_npc = 0;
var npc_bots = [];
var npc_colshapes = [];
var npc_markers = [];
var npc_bots_story = [];
var npc_colshapes_story = [];
var npc_labels_story = [];
var npc_markers_story = [];
var story_npc_spawned = false;
global.npc_options = [{
  name: "Pamela Fletcher",
  model: "a_f_m_bevhills_01",
  position: new mp.Vector3(426.994, -806.161, 29.491),
  rotation: 89.399,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_F_M_BEVHILLS_01_WHITE_FULL_01",
  conversation_id: 45,
  cam_pos: new mp.Vector3(426.43951416015625, -806.1426391601562, 30.13971710205078),
  cam_point: new mp.Vector3(426.7630615234375, -806.1445922851562, 30.155384063720703)
}, {
  name: "Stefania Backer",
  model: "a_f_y_bevhills_01",
  position: new mp.Vector3(-823.163, -1072.387, 11.328),
  rotation: 209.391,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_F_Y_BEVHILLS_01_WHITE_FULL_01",
  conversation_id: 46,
  cam_pos: new mp.Vector3(-822.9155883789062, -1072.82373046875, 11.976861953735352),
  cam_point: new mp.Vector3(-823.0587768554688, -1072.59423828125, 11.991195678710938)
}, {
  name: "Melissa Shoper",
  model: "a_f_y_bevhills_01",
  position: new mp.Vector3(-1449.914, -239.067, 49.813),
  rotation: 47.144,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_F_Y_BEVHILLS_01_WHITE_FULL_01",
  conversation_id: 77,
  cam_pos: new mp.Vector3(-1450.583, -238.467, 50.464),
  cam_point: new mp.Vector3(-1450.082, -238.898, 50.458)
}, {
  name: "Norman Young",
  model: "a_m_y_business_03",
  position: new mp.Vector3(-2961.072, 482.971, 15.697),
  rotation: 93.467,
  speech: "GENERIC_HOWS_IT_GOING",
  voice: "A_M_Y_BUSINESS_03_WHITE_MINI_01",
  conversation_id: 49,
  cam_pos: new mp.Vector3(-2962.67236328125, 482.9619445800781, 16.861875534057617),
  cam_point: new mp.Vector3(-2959.664794921875, 482.8644714355469, 15.84337043762207)
}, {
  name: "Roger Gill",
  model: "a_m_y_business_02",
  position: new mp.Vector3(-1211.899, -331.946, 37.781),
  rotation: 28.107,
  speech: "PHONE_CONV2_INTRO",
  voice: "A_M_Y_BUSINESS_02_WHITE_FULL_01",
  conversation_id: 49,
  cam_pos: new mp.Vector3(-1212.747802734375, -330.2837219238281, 39.11846160888672),
  cam_point: new mp.Vector3(-1212.283935546875, -331.24664306640625, 38.73263931274414)
}, {
  name: "Victor Bishop",
  model: "ig_bankman",
  position: new mp.Vector3(-351.363, -51.257, 49.036),
  rotation: 335.794,
  speech: "BUMP",
  voice: "A_M_Y_BUSINESS_01_CHINESE_FULL_01",
  conversation_id: 49,
  cam_pos: new mp.Vector3(-350.8448181152344, -49.473331451416016, 50.109214782714844),
  cam_point: new mp.Vector3(-351.17071533203125, -50.4981575012207, 49.91487121582031)
}, {
  name: "Douglas Fairy",
  model: "cs_barry",
  position: new mp.Vector3(313.769, -280.456, 54.165),
  rotation: 336.628,
  speech: "PHONE_CONV4_INTRO",
  voice: "A_M_Y_BUSINESS_03_WHITE_MINI_01",
  conversation_id: 49,
  cam_pos: new mp.Vector3(314.4437561035156, -278.6194763183594, 55.49787902832031),
  cam_point: new mp.Vector3(314.0486145019531, -279.709716796875, 55.14384078979492)
}, {
  name: "Elvin Thomas",
  model: "ig_bankman",
  position: new mp.Vector3(149.417, -1042.156, 29.368),
  rotation: 334.128,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_M_Y_BUSINESS_01_CHINESE_FULL_01",
  conversation_id: 49,
  cam_pos: new mp.Vector3(150.03981018066406, -1040.2921142578125, 30.493932723999023),
  cam_point: new mp.Vector3(149.65371704101562, -1041.3203125, 30.239933013916016)
}, {
  name: "Gerald Robin",
  model: "cs_barry",
  position: new mp.Vector3(1174.925, 2708.257, 38.088),
  rotation: 178.149,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_M_Y_BUSINESS_03_WHITE_MINI_01",
  conversation_id: 49,
  cam_pos: new mp.Vector3(1175.064208984375, 2706.396484375, 39.19147491455078),
  cam_point: new mp.Vector3(1175.0697021484375, 2707.443603515625, 38.99085998535156)
}, {
  name: "Kent Peacock",
  model: "a_m_y_business_02",
  position: new mp.Vector3(-111.26, 6470.051, 31.627),
  rotation: 133.355,
  speech: "PHONE_CONV4_INTRO",
  voice: "A_M_Y_VINEWOOD_02_WHITE_MINI_01",
  conversation_id: 49,
  cam_pos: new mp.Vector3(-112.25797271728516, 6469.005859375, 32.29395294189453),
  cam_point: new mp.Vector3(-110.36817169189453, 6470.8193359375, 32.253910064697266)
}, {
  name: "Adel Craft",
  model: "s_f_y_cop_01",
  position: new mp.Vector3(-447.101, 6011.323, 31.716),
  rotation: 320.376,
  speech: "CHALLENGE_ACCEPTED_GENERIC",
  voice: "S_F_Y_BAYWATCH_01_WHITE_FULL_02",
  conversation_id: 5,
  cam_pos: new mp.Vector3(-446.641, 6011.762, 32.368),
  cam_point: new mp.Vector3(-446.924, 6011.499, 32.305)
}, {
  name: "Tracey Smith",
  model: "s_f_y_cop_01",
  position: new mp.Vector3(440.95684814453125, -978.852294921875, 30.68960189819336),
  rotation: 175.62255859375,
  speech: "ARREST_PLAYER",
  voice: "S_F_Y_COP_01_WHITE_FULL_02",
  conversation_id: 147,
  cam_pos: new mp.Vector3(440.7910461425781, -980.78515625, 31.299785614013672),
  cam_point: new mp.Vector3(440.9488220214844, -979.1021728515625, 31.12557029724121)
}, {
  name: "Ada Clinton",
  model: "s_f_y_scrubs_01",
  position: new mp.Vector3(-1002.715, 3621.841, -57.441),
  rotation: 17.134,
  speech: "GENERIC_HOWS_IT_GOING",
  voice: "A_F_Y_BEVHILLS_04_WHITE_FULL_01",
  conversation_id: 6,
  cam_pos: new mp.Vector3(-1002.95, 3622.656, -56.791),
  cam_point: new mp.Vector3(-1002.8, 3622.076, -56.865),
  dimension: -1
}, {
  name: "Berenice Bennett",
  model: "s_f_y_scrubs_01",
  position: new mp.Vector3(324.431, -600.033, 43.268),
  rotation: 19.464,
  speech: "GENERIC_HOWS_IT_GOING",
  voice: "A_F_Y_BEVHILLS_04_WHITE_FULL_01",
  conversation_id: 6,
  cam_pos: new mp.Vector3(324.262, -599.516, 43.914),
  cam_point: new mp.Vector3(324.356, -599.804, 43.906)
}, {
  name: "Marcus Collins",
  model: "s_m_y_construct_02",
  position: new mp.Vector3(451.158, -1146.043, 29.341),
  rotation: 78.695,
  speech: "CHALLENGE_ACCEPTED_HIT_CAR",
  voice: "G_M_Y_FAMDNF_01_BLACK_MINI_03",
  conversation_id: 7,
  cam_pos: new mp.Vector3(450.466, -1145.918, 30),
  cam_point: new mp.Vector3(450.915, -1146.008, 29.956)
}, {
  name: "John Richard",
  model: "s_m_y_construct_02",
  position: new mp.Vector3(-1.848, 6308.265, 31.376),
  rotation: 26.969,
  speech: "CHALLENGE_ACCEPTED_HIT_CAR",
  voice: "G_M_Y_FAMDNF_01_BLACK_MINI_03",
  conversation_id: 104,
  cam_pos: new mp.Vector3(-2.182, 6308.915, 32.023),
  cam_point: new mp.Vector3(-1.954, 6308.486, 31.995)
}, {
  name: "George House",
  model: "s_m_m_autoshop_02",
  position: new mp.Vector3(797.2205200195312, -2988.744384765625, 6.020936489105225),
  rotation: 84.75740051269531,
  speech: "RESCUE_INJURED_BUDDY",
  voice: "S_M_M_CIASEC_01_WHITE_MINI_01",
  conversation_id: 9,
  cam_pos: new mp.Vector3(796.4632568359375, -2988.70849609375, 6.667823791503906),
  cam_point: new mp.Vector3(796.9854125976562, -2988.713134765625, 6.6701507568359375)
}, {
  name: "Adam Miller",
  model: "s_m_y_armymech_01",
  position: new mp.Vector3(454.150390625, -980.0173950195312, 30.689584732055664),
  rotation: 81.18248748779297,
  speech: "GUNSH_GREET0",
  voice: "S_M_Y_AMMUCITY_01_WHITE_01",
  conversation_id: 10,
  cam_pos: new mp.Vector3(453.1055908203125, -980.0362548828125, 31.537811279296875),
  cam_point: new mp.Vector3(453.3627624511719, -980.0302124023438, 31.481552124023438)
}, {
  name: "Bob Gunner",
  model: "s_m_y_armymech_01",
  position: new mp.Vector3(-443.04, 5989.102, 27.804),
  rotation: 240.81,
  speech: "GUNSH_GREET0",
  voice: "S_M_M_AMMUCOUNTRY_01_WHITE_01",
  conversation_id: 11,
  cam_pos: new mp.Vector3(-442.375, 5988.812, 28.452),
  cam_point: new mp.Vector3(-442.81, 5989.012, 28.414)
}, {
  name: "Harry Gunner",
  model: "s_m_y_armymech_01",
  position: new mp.Vector3(2500.779, -415.758, 94.126),
  rotation: -135.785,
  speech: "SHOP_BROWSE_GUN",
  voice: "S_M_Y_AMMUCITY_01_WHITE_MINI_01",
  conversation_id: 12,
  cam_pos: new mp.Vector3(2502.88, -417.799, 94.874),
  cam_point: new mp.Vector3(2501.706, -416.734, 94.771)
}, {
  name: "Carl Murphy",
  model: "s_m_y_armymech_01",
  position: new mp.Vector3(-1867.226, 3250.498, 32.909),
  rotation: 62.142,
  speech: "PHONE_CONV4_INTRO",
  voice: "S_M_Y_BAYWATCH_01_BLACK_FULL_01",
  conversation_id: 13,
  cam_pos: new mp.Vector3(-1868.215, 3251.095, 33.409),
  cam_point: new mp.Vector3(-1867.226, 3250.498, 33.409)
}, {
  name: "Cliff Birds",
  model: "u_m_y_baygor",
  position: new mp.Vector3(-1033.387, 3639.993, -60.803),
  rotation: 352.364,
  speech: "PHONE_CONV4_INTRO",
  voice: "A_M_Y_VINEWOOD_04_WHITE_FULL_01",
  conversation_id: 14,
  cam_pos: new mp.Vector3(-1033.324, 3640.989, -59.996),
  cam_point: new mp.Vector3(-1033.368, 3640.228, -60.15),
  dimension: -1
}, {
  name: "Jared Jackson",
  model: "u_m_y_baygor",
  position: new mp.Vector3(311.609, -597.796, 43.268),
  rotation: -17.99,
  speech: "PHONE_CONV4_INTRO",
  voice: "A_M_Y_VINEWOOD_04_WHITE_FULL_01",
  conversation_id: 14,
  cam_pos: new mp.Vector3(311.742, -597.219, 43.916),
  cam_point: new mp.Vector3(311.666, -597.576, 43.943)
}, {
  name: "Josh Deagler",
  model: "u_m_y_burgerdrug_01",
  position: new mp.Vector3(1692.8111572265625, 3761.60205078125, 34.7),
  rotation: 221.2316436767578,
  speech: "PHONE_CONV1_INTRO",
  voice: "A_M_Y_VINEWOOD_04_WHITE_MINI_01",
  conversation_id: 20,
  cam_pos: new mp.Vector3(1693.283447265625, 3761.11572265625, 35.361961364746094),
  cam_point: new mp.Vector3(1692.954833984375, 3761.42138671875, 35.365875244140625)
}, {
  name: "Stephen Mason",
  model: "g_m_m_armlieut_01",
  position: new mp.Vector3(-3173.22705078125, 1089.2110595703125, 20.83),
  rotation: 241.19839477539062,
  speech: "PHONE_CONV2_INTRO",
  voice: "G_M_M_ARMLIEUT_01_WHITE_ARMENIAN_MINI_01",
  conversation_id: 21,
  cam_pos: new mp.Vector3(-3172.59619140625, 1088.9287109375, 21.486093521118164),
  cam_point: new mp.Vector3(-3173.02392578125, 1089.1055908203125, 21.500446319580078)
}, {
  name: "Paul Sheldon",
  model: "g_m_m_armgoon_01",
  position: new mp.Vector3(-661.5018310546875, -933.5473022460938, 21.82),
  rotation: 174.2127685546875,
  speech: "PHONE_CONV3_INTRO",
  voice: "G_M_Y_ARMGOON_02_WHITE_ARMENIAN_MINI_01",
  conversation_id: 22,
  cam_pos: new mp.Vector3(-661.544677734375, -934.4356079101562, 22.475540161132812),
  cam_point: new mp.Vector3(-661.532470703125, -933.7714233398438, 22.496492385864258)
}, {
  name: "George Nash",
  model: "s_m_y_autopsy_01",
  position: new mp.Vector3(-971.589, 3644.539, -51.001),
  rotation: 133.6,
  speech: "PHONE_CONV4_INTRO",
  voice: "G_M_M_MEXBOSS_02_LATINO_MINI_02",
  conversation_id: 23,
  cam_pos: new mp.Vector3(-972.077, 3644.02, -50.354),
  cam_point: new mp.Vector3(-971.73, 3644.355, -50.337),
  dimension: -1
}, {
  name: "Thomas Powell",
  model: "s_m_y_autopsy_01",
  position: new mp.Vector3(317.603, -596.072, 43.268),
  rotation: -114.224,
  speech: "PHONE_CONV4_INTRO",
  voice: "G_M_M_MEXBOSS_02_LATINO_MINI_02",
  conversation_id: 198,
  cam_pos: new mp.Vector3(318.129, -596.276, 43.915),
  cam_point: new mp.Vector3(317.816, -596.164, 43.931)
}, {
  name: "John Smith",
  model: "s_m_m_doctor_01",
  position: new mp.Vector3(-1000.201, 3620.414, -60.803),
  rotation: 346.751,
  speech: "PHONE_CONV2_INTRO",
  voice: "A_M_Y_VINEWOOD_01_BLACK_MINI_01",
  conversation_id: 24,
  cam_pos: new mp.Vector3(-1000.153, 3621.14, -60.157),
  cam_point: new mp.Vector3(-1000.192, 3620.654, -60.163),
  dimension: -1
}, {
  name: "Russell King",
  model: "s_m_m_doctor_01",
  position: new mp.Vector3(350.03, -588.744, 28.847),
  rotation: -108.907,
  speech: "PHONE_CONV2_INTRO",
  voice: "A_M_Y_VINEWOOD_01_BLACK_MINI_01",
  conversation_id: 24,
  cam_pos: new mp.Vector3(351.457, -589.186, 29.495),
  cam_point: new mp.Vector3(350.269, -588.815, 29.441)
}, {
  name: "Brandon Nelson",
  model: "s_m_m_doctor_01",
  position: new mp.Vector3(310.535, -585.871, 43.268),
  rotation: 83.87,
  speech: "PHONE_CONV2_INTRO",
  voice: "A_M_Y_VINEWOOD_01_BLACK_MINI_01",
  conversation_id: 24,
  cam_pos: new mp.Vector3(309.092, -585.923, 43.914),
  cam_point: new mp.Vector3(310.286, -585.891, 43.845)
}, {
  name: "Willis Reed",
  model: "s_m_m_doctor_01",
  position: new mp.Vector3(-981.249, 3620.614, -54.241),
  rotation: 354.547,
  speech: "PHONE_CONV2_INTRO",
  voice: "A_M_Y_VINEWOOD_01_BLACK_MINI_01",
  conversation_id: 24,
  cam_pos: new mp.Vector3(-981.17, 3621.242, -53.595),
  cam_point: new mp.Vector3(-981.207, 3620.851, -53.604),
  dimension: -1
}, {
  name: "Edward Banks",
  model: "s_m_m_doctor_01",
  position: new mp.Vector3(-1020.517, 3625.692, -54.241),
  rotation: 347.942,
  speech: "PHONE_CONV2_INTRO",
  voice: "A_M_Y_VINEWOOD_01_BLACK_MINI_01",
  conversation_id: 24,
  cam_pos: new mp.Vector3(-1020.382, 3626.351, -53.594),
  cam_point: new mp.Vector3(-1020.45, 3625.92, -53.594),
  dimension: -1
}, {
  name: "Will Rider",
  model: "ig_andreas",
  position: new mp.Vector3(-700.215087890625, -1401.41015625, 5.495285987854004),
  rotation: 142.1859893798828,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_M_Y_BUSINESS_02_WHITE_FULL_01",
  conversation_id: 33,
  cam_pos: new mp.Vector3(-700.9990234375, -1402.4017333984375, 6.144380569458008),
  cam_point: new mp.Vector3(-700.0304565429688, -1400.950927734375, 6.1117353439331055),
  questionMarker: true
}, {
  name: "Philip Grocer",
  model: "ig_bestmen",
  position: new mp.Vector3(-1343.697, -1444.671, 4.332),
  rotation: -92.767,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_M_Y_VINEWOOD_01_BLACK_FULL_01",
  conversation_id: 34,
  cam_pos: new mp.Vector3(-1342.057, -1444.704, 4.827),
  cam_point: new mp.Vector3(-1343.697, -1444.671, 4.827)
}, {
  name: "Richard Rich",
  model: "u_m_y_antonb",
  position: new mp.Vector3(-54.087, -1219.718, 28.702),
  rotation: 89.097,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_M_Y_VINEWOOD_01_BLACK_FULL_01",
  conversation_id: 113,
  cam_pos: new mp.Vector3(-54.82, -1219.798, 29.35),
  cam_point: new mp.Vector3(-54.332, -1219.714, 29.32)
}, {
  name: "Robert Arms",
  model: "g_m_y_strpunk_01",
  position: new mp.Vector3(1077.463, -1980.421, 31.471),
  rotation: 341.177,
  speech: "GENERIC_HI",
  voice: "A_M_Y_SUNBATHE_01_BLACK_FULL_01",
  conversation_id: 39,
  cam_pos: new mp.Vector3(1077.738, -1979.689, 32.119),
  cam_point: new mp.Vector3(1077.523, -1980.201, 32.144)
}, {
  name: "Abigail Realtor",
  model: "ig_abigail",
  position: new mp.Vector3(-1906.769, -574.849, 19.097),
  rotation: 309.401,
  speech: "RAMPAGEHIPSTER",
  voice: "A_F_Y_VINEWOOD_01_WHITE_MINI_01",
  conversation_id: 40,
  cam_pos: new mp.Vector3(-1906.113, -574.396, 19.747),
  cam_point: new mp.Vector3(-1906.554, -574.721, 19.668)
}, {
  name: "Roger Crimson",
  model: "u_m_m_bankman",
  position: new mp.Vector3(-583.532, -209.86, 38.169),
  rotation: 26.546,
  speech: "BUMP",
  voice: "A_M_Y_STWHI_02_WHITE_FULL_01",
  conversation_id: 41,
  cam_pos: new mp.Vector3(-584.083, -208.843, 38.796),
  cam_point: new mp.Vector3(-583.641, -209.636, 38.762)
}, {
  name: "Bruce Robertson",
  model: "u_m_y_tattoo_01",
  position: new mp.Vector3(-292.043, 6199.771, 31.487),
  rotation: 221.425,
  speech: "SHOP_BANTER",
  voice: "U_M_Y_TATTOO_01_WHITE_MINI_01",
  conversation_id: 42,
  cam_pos: new mp.Vector3(-291.4229431152344, 6199.06982421875, 32.13512420654297),
  cam_point: new mp.Vector3(-291.88525390625, 6199.5869140625, 32.11873245239258)
}, {
  name: "Terry Butler",
  model: "u_m_y_tattoo_01",
  position: new mp.Vector3(-3170.51, 1073.091, 20.829),
  rotation: 332.45,
  speech: "SHOP_BANTER",
  voice: "U_M_Y_TATTOO_01_WHITE_MINI_01",
  conversation_id: 43,
  cam_pos: new mp.Vector3(-3170.1474609375, 1073.79296875, 21.476131439208984),
  cam_point: new mp.Vector3(-3170.39892578125, 1073.302734375, 21.47116470336914)
}, {
  name: "Claudia Sinclair",
  model: "a_f_m_bevhills_02",
  position: new mp.Vector3(-623.293, -230.413, 38.057),
  rotation: 128.125,
  speech: "WON_DISPUTE",
  voice: "A_F_Y_TOURIST_01_WHITE_MINI_01",
  conversation_id: 44,
  cam_pos: new mp.Vector3(-623.839111328125, -230.7606201171875, 38.70592498779297),
  cam_point: new mp.Vector3(-623.4913330078125, -230.52554321289062, 38.72953796386719)
}, {
  name: "Ethan Butler",
  model: "s_m_y_barman_01",
  position: new mp.Vector3(129.137, -1283.2, 29.272),
  rotation: 95.189,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 56,
  cam_pos: new mp.Vector3(128.156, -1283.506, 29.937),
  cam_point: new mp.Vector3(128.896, -1283.236, 29.9)
}, {
  name: "Archie Murphy",
  model: "s_m_y_barman_01",
  position: new mp.Vector3(-561.781, 286.681, 82.176),
  rotation: 265.399,
  speech: "GENERIC_HOWS_IT_GOING",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 57,
  cam_pos: new mp.Vector3(-560.919, 286.57, 82.821),
  cam_point: new mp.Vector3(-561.55, 286.629, 82.825)
}, {
  name: "Steve Postal",
  model: "s_m_m_postal_02",
  position: new mp.Vector3(140.01, 102.417, 83.666),
  rotation: 73.093,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_M_M_MALIBU_01_WHITE_FULL_01",
  conversation_id: 50,
  cam_pos: new mp.Vector3(137.306, 103.208, 84.275),
  cam_point: new mp.Vector3(139.786, 102.305, 84.24),
  questionMarker: true
}, {
  name: "Mike Postal",
  model: "a_m_o_soucent_02",
  position: new mp.Vector3(1103.828, -3101.24, -39),
  rotation: 57.855,
  speech: "PHONE_CONV2_INTRO",
  voice: "A_M_M_INDIAN_01_INDIAN_MINI_01",
  conversation_id: 50,
  cam_pos: new mp.Vector3(1102.264, -3100.748, -38.316),
  cam_point: new mp.Vector3(1105.497, -3102.52, -38.308)
}, {
  name: "Agatha Gumble",
  model: "IG_Agatha",
  position: new mp.Vector3(930.966, 35.908, 81.096),
  rotation: 3.428,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_F_M_BEVHILLS_02_WHITE_FULL_01",
  conversation_id: 52,
  cam_pos: new mp.Vector3(930.9327392578125, 36.72564697265625, 81.74324035644531),
  cam_point: new mp.Vector3(930.9630737304688, 36.15220260620117, 81.7194595336914)
}, {
  name: "Akeno Hattori",
  model: "IG_TaosTranslator2",
  position: new mp.Vector3(950.04, 19.081, 116.164),
  rotation: 6.541,
  speech: "GENERIC_HOWS_IT_GOING",
  voice: "A_M_Y_BEACH_01_CHINESE_FULL_01",
  conversation_id: 53,
  cam_pos: new mp.Vector3(949.9564819335938, 19.761140823364258, 116.8121337890625),
  cam_point: new mp.Vector3(950.0177001953125, 19.321123123168945, 116.79991149902344)
}, {
  name: "Ben Tiger",
  model: "g_m_y_ballaorig_01",
  position: new mp.Vector3(90.431, -1985.338, 20.437),
  rotation: -44.123,
  speech: "PHONE_CONV3_INTRO",
  voice: "G_M_Y_BALLAORIG_01_BLACK_FULL_01",
  conversation_id: 15,
  cam_pos: new mp.Vector3(91.401, -1983.625, 21.279),
  cam_point: new mp.Vector3(90.599, -1985.153, 20.929)
}, {
  name: "Quentin Stage",
  model: "mp_m_famdd_01",
  position: new mp.Vector3(-171.95, -1659.348, 33.455),
  rotation: 84.846,
  speech: "PHONE_CONV4_INTRO",
  voice: "G_M_Y_FAMCA_01_BLACK_FULL_01",
  conversation_id: 16,
  cam_pos: new mp.Vector3(-173.03, -1659.257, 34.075),
  cam_point: new mp.Vector3(-172.199, -1659.325, 34.024)
}, {
  name: "Maximiliano Loco",
  model: "g_m_y_mexgoon_03",
  position: new mp.Vector3(-1082.782, -1647.696, 4.435),
  rotation: 121.255,
  speech: "GENERIC_HI",
  voice: "G_M_Y_LOST_02_LATINO_MINI_01",
  conversation_id: 172,
  cam_pos: new mp.Vector3(-1083.52, -1648.105, 5.069),
  cam_point: new mp.Vector3(-1083.001, -1647.808, 5.048),
  eng_only: true
}, {
  name: "Clement Espado",
  model: "g_m_y_strpunk_02",
  position: new mp.Vector3(-1072.069580078125, -1661.8663330078125, 4.43),
  rotation: 86.22147369384766,
  speech: "GENERIC_HI",
  voice: "G_M_Y_LOST_02_LATINO_MINI_01",
  conversation_id: 17,
  cam_pos: new mp.Vector3(-1072.72216796875, -1661.860595703125, 5.05925989151001),
  cam_point: new mp.Vector3(-1072.308837890625, -1661.856689453125, 5.0716166496276855),
  eng_only: true
}, {
  name: "Clement Espado",
  model: "g_m_y_strpunk_02",
  position: new mp.Vector3(1343.285, -1529.908, 54.187),
  rotation: 70.211,
  speech: "GENERIC_HI",
  voice: "G_M_Y_LOST_02_LATINO_MINI_01",
  conversation_id: 17,
  cam_pos: new mp.Vector3(1342.837, -1529.85, 54.959),
  cam_point: new mp.Vector3(1342.929, -1529.87, 54.948),
  eng_only: false
}, {
  name: "Maximiliano Loco",
  model: "g_m_y_mexgoon_03",
  position: new mp.Vector3(1442.635, -1491.972, 60.163),
  rotation: 72.05,
  speech: "GENERIC_HI",
  voice: "G_M_Y_LOST_02_LATINO_MINI_01",
  conversation_id: 172,
  cam_pos: new mp.Vector3(1441.14, -1491.636, 60.7),
  cam_point: new mp.Vector3(1444.162, -1492.508, 61.039),
  eng_only: false
}, {
  name: "Bob Smith",
  model: "ig_claypain",
  position: new mp.Vector3(429.7893371582031, -1557.313720703125, 32.79),
  rotation: 228.23782348632812,
  speech: "PHONE_CONV4_INTRO",
  voice: "A_M_M_SOUCENT_04_BLACK_FULL_01",
  conversation_id: 18,
  cam_pos: new mp.Vector3(430.3969421386719, -1557.7857666015625, 33.438751220703125),
  cam_point: new mp.Vector3(429.96978759765625, -1557.4599609375, 33.45243453979492)
}, {
  name: "Julian Despacido",
  model: "g_m_y_strpunk_01",
  position: new mp.Vector3(843.806, -2118.413, 30.521),
  rotation: 169.837,
  speech: "GENERIC_HI",
  voice: "A_M_M_TRANVEST_02_LATINO_MINI_01",
  conversation_id: 19,
  cam_pos: new mp.Vector3(843.775, -2119.285, 31.175),
  cam_point: new mp.Vector3(843.834, -2118.656, 31.144)
}, {
  name: "Josh Benny",
  model: "g_m_y_ballasout_01",
  position: new mp.Vector3(104.515, -1961.599, 20.858),
  rotation: 25.915,
  speech: "PHONE_CONV3_INTRO",
  voice: "G_M_Y_BALLAORIG_01_BLACK_FULL_01",
  conversation_id: 152,
  cam_pos: new mp.Vector3(103.804, -1960.406, 21.508),
  cam_point: new mp.Vector3(104.387, -1961.384, 21.406)
}, {
  name: "Jeffrey Smoke",
  model: "g_m_y_famdnf_01",
  position: new mp.Vector3(-152.21, -1659.414, 32.856),
  rotation: 46.004,
  speech: "PHONE_CONV4_INTRO",
  voice: "G_M_Y_FAMCA_01_BLACK_FULL_01",
  conversation_id: 169,
  cam_pos: new mp.Vector3(-152.775, -1658.892, 33.493),
  cam_point: new mp.Vector3(-152.367, -1659.232, 33.494)
}, {
  name: "David McLaren",
  model: "a_m_y_stbla_01",
  position: new mp.Vector3(416.859, -1547.565, 29.242),
  rotation: 287.003,
  speech: "PHONE_CONV4_INTRO",
  voice: "A_M_M_SOUCENT_04_BLACK_FULL_01",
  conversation_id: 182,
  cam_pos: new mp.Vector3(417.506, -1547.36, 29.89),
  cam_point: new mp.Vector3(417.096, -1547.512, 29.871)
}, {
  name: "Emiliano Garcia",
  model: "a_m_m_soucent_03",
  position: new mp.Vector3(798.272, -2135.576, 29.519),
  rotation: 354.574,
  speech: "GENERIC_HI",
  voice: "A_M_M_TRANVEST_02_LATINO_MINI_01",
  conversation_id: 192,
  cam_pos: new mp.Vector3(798.289, -2134.634, 30.158),
  cam_point: new mp.Vector3(798.271, -2135.334, 30.153)
}, {
  name: "Brian Shipper",
  model: "mp_m_boatstaff_01",
  position: new mp.Vector3(-846.4028930664062, -1316.76708984375, 5.000180721282959),
  rotation: 288.1474609375,
  speech: "BUMP",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 2,
  cam_pos: new mp.Vector3(-844.3689575195312, -1315.95849609375, 5.817755699157715),
  cam_point: new mp.Vector3(-846.1693115234375, -1316.7086181640625, 5.6375226974487305)
}, {
  name: "Mike Winder",
  model: "s_m_y_airworker",
  position: new mp.Vector3(-1032.149, -3013.898, 13.947),
  rotation: 51.166,
  speech: "PHONE_CONV1_INTRO",
  voice: "S_M_Y_AIRWORKER_LATINO_FULL_02",
  conversation_id: 110,
  cam_pos: new mp.Vector3(-1032.954, -3013.326, 14.593),
  cam_point: new mp.Vector3(-1032.349, -3013.753, 14.554)
}, {
  name: "Mitchell Watts",
  model: "mp_m_shopkeep_01",
  position: new mp.Vector3(-2966.462, 390.608, 15.043),
  rotation: 82.123,
  speech: "SHOP_GREET",
  voice: "MP_M_SHOPKEEP_01_PAKISTANI_MINI_01",
  conversation_id: 66,
  cam_pos: new mp.Vector3(-2967.184, 390.686, 15.776),
  cam_point: new mp.Vector3(-2966.677, 390.636, 15.737)
}, {
  name: "Donald Stafford",
  model: "mp_m_shopkeep_01",
  position: new mp.Vector3(-47.333, -1758.576, 29.421),
  rotation: 50.216,
  speech: "SHOP_GREET",
  voice: "MP_M_SHOPKEEP_01_PAKISTANI_MINI_01",
  conversation_id: 67,
  cam_pos: new mp.Vector3(-48.073, -1757.939, 30.22),
  cam_point: new mp.Vector3(-47.507, -1758.439, 30.107)
}, {
  name: "David Carr",
  model: "mp_m_shopkeep_01",
  position: new mp.Vector3(-706.139, -914.512, 19.216),
  rotation: 84.129,
  speech: "SHOP_GREET",
  voice: "MP_M_SHOPKEEP_01_PAKISTANI_MINI_01",
  conversation_id: 68,
  cam_pos: new mp.Vector3(-706.981, -914.502, 19.862),
  cam_point: new mp.Vector3(-706.374, -914.501, 19.87)
}, {
  name: "Jeremy Williamson",
  model: "mp_m_shopkeep_01",
  position: new mp.Vector3(1164.904, -323.667, 69.205),
  rotation: 94.461,
  speech: "SHOP_GREET",
  voice: "MP_M_SHOPKEEP_01_PAKISTANI_MINI_01",
  conversation_id: 69,
  cam_pos: new mp.Vector3(1164.139, -323.785, 69.851),
  cam_point: new mp.Vector3(1164.671, -323.681, 69.863)
}, {
  name: "James Murphy",
  model: "mp_m_shopkeep_01",
  position: new mp.Vector3(2555.464, 380.861, 108.623),
  rotation: 348.45,
  speech: "SHOP_GREET",
  voice: "MP_M_SHOPKEEP_01_PAKISTANI_MINI_01",
  conversation_id: 70,
  cam_pos: new mp.Vector3(2555.563, 381.729, 109.268),
  cam_point: new mp.Vector3(2555.513, 381.091, 109.279)
}, {
  name: "John Porter",
  model: "mp_m_shopkeep_01",
  position: new mp.Vector3(-1819.566, 793.535, 138.087),
  rotation: 134.071,
  speech: "SHOP_GREET",
  voice: "MP_M_SHOPKEEP_01_PAKISTANI_MINI_01",
  conversation_id: 71,
  cam_pos: new mp.Vector3(-1820.32, 792.832, 138.756),
  cam_point: new mp.Vector3(-1819.741, 793.39, 138.761)
}, {
  name: "Thomas Gardner",
  model: "mp_m_shopkeep_01",
  position: new mp.Vector3(1165.186, 2710.816, 38.158),
  rotation: 183.601,
  speech: "SHOP_GREET",
  voice: "MP_M_SHOPKEEP_01_PAKISTANI_MINI_01",
  conversation_id: 72,
  cam_pos: new mp.Vector3(1165.244, 2709.925, 38.9),
  cam_point: new mp.Vector3(1165.189, 2710.599, 38.852)
}, {
  name: "Christopher Miller",
  model: "mp_m_shopkeep_01",
  position: new mp.Vector3(2676.558, 3280.268, 55.241),
  rotation: 320.006,
  speech: "SHOP_GREET",
  voice: "MP_M_SHOPKEEP_01_PAKISTANI_MINI_01",
  conversation_id: 73,
  cam_pos: new mp.Vector3(2677.095, 3281.015, 55.888),
  cam_point: new mp.Vector3(2676.702, 3280.452, 55.901)
}, {
  name: "Nigel Powers",
  model: "mp_m_shopkeep_01",
  position: new mp.Vector3(1959.247, 3741.452, 32.344),
  rotation: 296.315,
  speech: "SHOP_GREET",
  voice: "MP_M_SHOPKEEP_01_PAKISTANI_MINI_01",
  conversation_id: 93,
  cam_pos: new mp.Vector3(1959.867, 3741.81, 32.99),
  cam_point: new mp.Vector3(1959.455, 3741.563, 32.997)
}, {
  name: "Steve Jackson",
  model: "u_m_y_gunvend_01",
  position: new mp.Vector3(-67.288, 74.555, 71.9),
  rotation: 160.36,
  speech: "PHONE_CONV2_INTRO",
  voice: "A_M_Y_BUSINESS_02_WHITE_FULL_01",
  conversation_id: 59,
  cam_pos: new mp.Vector3(-67.751, 73.434, 72.546),
  cam_point: new mp.Vector3(-67.402, 74.336, 72.511)
}, {
  name: "Jeremy Clark",
  model: "s_m_o_busker_01",
  position: new mp.Vector3(3819.298, 4455.246, 3.514),
  rotation: 40.947,
  speech: "PHONE_CONV4_INTRO",
  voice: "G_M_M_MEXBOSS_02_LATINO_MINI_02",
  conversation_id: 61,
  cam_pos: new mp.Vector3(3818.61, 4455.946, 4.227),
  cam_point: new mp.Vector3(3819.165, 4455.43, 4.19)
}, {
  name: "Mark Corporal",
  model: "s_m_y_airworker",
  position: new mp.Vector3(1758.252, 3297.072, 41.146),
  rotation: 143.704,
  speech: "PHONE_CONV1_INTRO",
  voice: "S_M_Y_AIRWORKER_LATINO_FULL_02",
  conversation_id: 65,
  cam_pos: new mp.Vector3(1757.789, 3296.282, 41.812),
  cam_point: new mp.Vector3(1758.13, 3296.884, 41.827)
}, {
  name: "Mike Changer",
  model: "s_m_y_prismuscl_01",
  position: new mp.Vector3(1763.315, 2597.438, 45.798),
  rotation: 233.379,
  speech: "PHONE_CONV1_INTRO",
  voice: "S_M_Y_AIRWORKER_LATINO_FULL_02",
  conversation_id: 74,
  cam_pos: new mp.Vector3(1763.827, 2597.003, 46.446),
  cam_point: new mp.Vector3(1763.498, 2597.274, 46.413),
  dimension: -1
}, {
  name: "John Changer",
  model: "cs_drfriedlander",
  position: new mp.Vector3(-555.915, -185.843, 38.221),
  rotation: -155.179,
  speech: "BUMP",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 97,
  cam_pos: new mp.Vector3(-555.403, -186.775, 38.909),
  cam_point: new mp.Vector3(-555.824, -186.069, 38.846)
}, {
  name: "Steve Money",
  model: "ig_paper",
  position: new mp.Vector3(-139.152, -633.854, 168.82),
  rotation: -1.197,
  speech: "BUMP",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 75,
  cam_pos: new mp.Vector3(-139.176, -633.021, 169.596),
  cam_point: new mp.Vector3(-139.132, -633.622, 169.481)
}, {
  name: "Landon Roberts",
  model: "csb_cop",
  position: new mp.Vector3(-445.218, 6024.293, 31.49),
  rotation: 304.599,
  speech: "BUMP",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 76,
  cam_pos: new mp.Vector3(-444.576, 6024.803, 32.137),
  cam_point: new mp.Vector3(-445.014, 6024.424, 32.12)
}, {
  name: "Luke Walton",
  model: "a_m_m_socenlat_01",
  position: new mp.Vector3(286.969, 2843.46, 44.704),
  rotation: 29.234,
  speech: "BUMP",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 78,
  cam_pos: new mp.Vector3(286.668, 2843.905, 45.356),
  cam_point: new mp.Vector3(286.842, 2843.662, 45.35)
}, {
  name: "Samuel Shepherd",
  model: "a_m_m_socenlat_01",
  position: new mp.Vector3(1093.252, -2251.934, 31.234),
  rotation: 173.792,
  speech: "BUMP",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 79,
  cam_pos: new mp.Vector3(1093.187, -2252.624, 31.884),
  cam_point: new mp.Vector3(1093.222, -2252.169, 31.884),
  questionMarker: true
}, {
  name: "Luke Walton",
  model: "a_m_m_socenlat_01",
  position: new mp.Vector3(-272.121, -2496.399, 7.296),
  rotation: 141.946,
  speech: "BUMP",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 80,
  cam_pos: new mp.Vector3(-272.503, -2496.968, 7.948),
  cam_point: new mp.Vector3(-272.25, -2496.595, 7.951)
}, {
  name: "Mark Townsend",
  model: "ig_casey",
  position: new mp.Vector3(2491.156, -404.381, 100.1),
  rotation: 133.981,
  speech: "GUNSH_GREET0",
  voice: "S_M_M_AMMUCOUNTRY_01_WHITE_01",
  conversation_id: 9006,
  cam_pos: new mp.Vector3(2490.447, -405.323, 100.747),
  cam_point: new mp.Vector3(2491.057, -404.598, 100.744)
}, {
  name: "Anthony Tyler",
  model: "a_m_m_farmer_01",
  position: new mp.Vector3(2527.306, 4357.743, 40.13),
  rotation: 61.193,
  speech: "PHONE_CONV1_INTRO",
  voice: "S_M_Y_AIRWORKER_LATINO_FULL_02",
  conversation_id: 1501,
  cam_pos: new mp.Vector3(2526.582, 4358.277, 40.685),
  cam_point: new mp.Vector3(2527.102, 4357.887, 40.696)
}, {
  name: "Shannon Rogers",
  model: "a_m_m_mexcntry_01",
  position: new mp.Vector3(2591.899, 4418.257, 40.588),
  rotation: 40.619,
  speech: "PHONE_CONV1_INTRO",
  voice: "S_M_Y_AIRWORKER_LATINO_FULL_02",
  conversation_id: 1502,
  cam_pos: new mp.Vector3(2591.538, 4418.771, 41.212),
  cam_point: new mp.Vector3(2591.775, 4418.464, 41.223)
}, {
  name: "Roger Strickland",
  model: "a_m_y_vinewood_03",
  position: new mp.Vector3(2644.772, 4442.331, 40.631),
  rotation: 311.979,
  speech: "PHONE_CONV1_INTRO",
  voice: "S_M_Y_AIRWORKER_LATINO_FULL_02",
  conversation_id: 1503,
  cam_pos: new mp.Vector3(2645.337, 4442.975, 41.264),
  cam_point: new mp.Vector3(2644.941, 4442.509, 41.251)
}, {
  name: "Emery Cannon",
  model: "a_m_m_farmer_01",
  position: new mp.Vector3(2613.338, 4480.031, 37.556),
  rotation: 45.315,
  speech: "PHONE_CONV1_INTRO",
  voice: "S_M_Y_AIRWORKER_LATINO_FULL_02",
  conversation_id: 1504,
  cam_pos: new mp.Vector3(2612.913, 4480.605, 38.159),
  cam_point: new mp.Vector3(2613.186, 4480.228, 38.151)
}, {
  name: "Herbert Preston",
  model: "a_m_y_vinewood_03",
  position: new mp.Vector3(2551.128, 4537.528, 35.677),
  rotation: 213.215,
  speech: "PHONE_CONV1_INTRO",
  voice: "S_M_Y_AIRWORKER_LATINO_FULL_02",
  conversation_id: 1505,
  cam_pos: new mp.Vector3(2551.474, 4536.836, 36.469),
  cam_point: new mp.Vector3(2551.204, 4537.323, 36.368)
}, {
  name: "Joshua McGee",
  model: "a_m_m_mexcntry_01",
  position: new mp.Vector3(2636.986, 4581.696, 36.779),
  rotation: 317.831,
  speech: "PHONE_CONV1_INTRO",
  voice: "S_M_Y_AIRWORKER_LATINO_FULL_02",
  conversation_id: 1506,
  cam_pos: new mp.Vector3(2637.645, 4582.233, 37.445),
  cam_point: new mp.Vector3(2637.19, 4581.818, 37.425)
}, {
  name: "Michael Shepherd",
  model: "a_m_m_farmer_01",
  position: new mp.Vector3(2640.428, 4708.851, 35.337),
  rotation: 317.832,
  speech: "PHONE_CONV1_INTRO",
  voice: "S_M_Y_AIRWORKER_LATINO_FULL_02",
  conversation_id: 1507,
  cam_pos: new mp.Vector3(2641.107, 4709.498, 35.987),
  cam_point: new mp.Vector3(2640.612, 4709.011, 35.963)
}, {
  name: "Daniel Short",
  model: "a_m_y_vinewood_03",
  position: new mp.Vector3(2545.019, 4807.945, 33.532),
  rotation: 129.899,
  speech: "PHONE_CONV1_INTRO",
  voice: "S_M_Y_AIRWORKER_LATINO_FULL_02",
  conversation_id: 1508,
  cam_pos: new mp.Vector3(2544.59, 4807.511, 34.178),
  cam_point: new mp.Vector3(2544.848, 4807.774, 34.166)
}, {
  name: "Blaze Newton",
  model: "a_m_m_mexcntry_01",
  position: new mp.Vector3(2491.265, 4851.136, 36.22),
  rotation: 93.744,
  speech: "PHONE_CONV1_INTRO",
  voice: "S_M_Y_AIRWORKER_LATINO_FULL_02",
  conversation_id: 1509,
  cam_pos: new mp.Vector3(2490.628, 4851.073, 36.868),
  cam_point: new mp.Vector3(2491.026, 4851.121, 36.863)
}, {
  name: "Garry Wilkinson",
  model: "a_m_m_farmer_01",
  position: new mp.Vector3(2308.368, 5124.455, 49.725),
  rotation: 43.029,
  speech: "PHONE_CONV1_INTRO",
  voice: "S_M_Y_AIRWORKER_LATINO_FULL_02",
  conversation_id: 1510,
  cam_pos: new mp.Vector3(2307.82, 5125.194, 50.465),
  cam_point: new mp.Vector3(2308.225, 5124.659, 50.319)
}, {
  name: "Edward Griffin",
  model: "a_m_y_vinewood_03",
  position: new mp.Vector3(2234.698, 5067.105, 46.859),
  rotation: 42.062,
  speech: "PHONE_CONV1_INTRO",
  voice: "S_M_Y_AIRWORKER_LATINO_FULL_02",
  conversation_id: 1511,
  cam_pos: new mp.Vector3(2234.19, 5067.708, 47.72),
  cam_point: new mp.Vector3(2234.582, 5067.287, 47.555)
}, {
  name: "Jeremy Conley",
  model: "a_m_m_mexcntry_01",
  position: new mp.Vector3(2143.298, 5160.792, 53.017),
  rotation: 46.236,
  speech: "PHONE_CONV1_INTRO",
  voice: "S_M_Y_AIRWORKER_LATINO_FULL_02",
  conversation_id: 1512,
  cam_pos: new mp.Vector3(2142.649, 5161.553, 53.771),
  cam_point: new mp.Vector3(2143.165, 5160.989, 53.662)
}, {
  name: "Richard Page",
  model: "a_m_m_farmer_01",
  position: new mp.Vector3(1955.675, 4797.982, 43.577),
  rotation: 223.987,
  speech: "PHONE_CONV1_INTRO",
  voice: "S_M_Y_AIRWORKER_LATINO_FULL_02",
  conversation_id: 1513,
  cam_pos: new mp.Vector3(1956.22, 4797.245, 44.189),
  cam_point: new mp.Vector3(1955.818, 4797.779, 44.177)
}, {
  name: "Ronald McCarthy",
  model: "a_m_y_vinewood_03",
  position: new mp.Vector3(1915.717, 4760.938, 42.757),
  rotation: 43.827,
  speech: "PHONE_CONV1_INTRO",
  voice: "S_M_Y_AIRWORKER_LATINO_FULL_02",
  conversation_id: 1514,
  cam_pos: new mp.Vector3(1915.051, 4761.501, 43.397),
  cam_point: new mp.Vector3(1915.529, 4761.098, 43.368)
}, {
  name: "Richard Sutton",
  model: "a_m_y_vinewood_03",
  position: new mp.Vector3(1874.775, 4805.188, 45.063),
  rotation: 133.875,
  speech: "PHONE_CONV1_INTRO",
  voice: "S_M_Y_AIRWORKER_LATINO_FULL_02",
  conversation_id: 1515,
  cam_pos: new mp.Vector3(1874.244, 4804.661, 45.618),
  cam_point: new mp.Vector3(1874.585, 4805.028, 45.661)
}, {
  name: "Michael Allen",
  model: "s_m_y_airworker",
  position: new mp.Vector3(1047.069, 3071.548, 41.753),
  rotation: 288.536,
  speech: "PHONE_CONV1_INTRO",
  voice: "S_M_Y_AIRWORKER_LATINO_FULL_02",
  conversation_id: 89,
  cam_pos: new mp.Vector3(1047.663, 3071.701, 42.37),
  cam_point: new mp.Vector3(1047.304, 3071.614, 42.378)
}, {
  name: "Charla Morgan",
  model: "a_f_m_bevhills_01",
  position: new mp.Vector3(5.975, 6511.497, 31.878),
  rotation: 40.845,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_F_M_BEVHILLS_01_WHITE_FULL_01",
  conversation_id: 90,
  cam_pos: new mp.Vector3(5.494, 6512.076, 32.524),
  cam_point: new mp.Vector3(5.826, 6511.69, 32.502)
}, {
  name: "Emily Thomas",
  model: "csb_anita",
  position: new mp.Vector3(-3169.086, 1044.085, 20.863),
  rotation: 64.467,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_F_M_BEVHILLS_01_WHITE_FULL_01",
  conversation_id: 91,
  cam_pos: new mp.Vector3(-3169.681, 1044.453, 21.513),
  cam_point: new mp.Vector3(-3169.291, 1044.219, 21.483)
}, {
  name: "Madeline Sullivan",
  model: "a_f_y_bevhills_02",
  position: new mp.Vector3(1695.271, 4823.132, 42.063),
  rotation: 98.528,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_F_M_BEVHILLS_01_WHITE_FULL_01",
  conversation_id: 92,
  cam_pos: new mp.Vector3(1694.72, 4823.08, 42.711),
  cam_point: new mp.Vector3(1695.031, 4823.119, 42.702)
}, {
  name: "Justin Logan",
  model: "ig_beverly",
  position: new mp.Vector3(-1077.92, -260.64, 37.81),
  rotation: -158.944,
  speech: "PHONE_CONV2_INTRO",
  voice: "A_M_Y_BUSINESS_02_WHITE_FULL_01",
  conversation_id: 94,
  cam_pos: new mp.Vector3(-1077.554, -261.437, 38.491),
  cam_point: new mp.Vector3(-1077.829, -260.864, 38.443)
}, {
  name: "Kory Boone",
  model: "ig_benny",
  position: new mp.Vector3(540.627, -172.474, 54.481),
  rotation: 92.737,
  speech: "GENERIC_HI",
  voice: "A_M_Y_SUNBATHE_01_BLACK_FULL_01",
  conversation_id: 95,
  cam_pos: new mp.Vector3(539.758, -172.574, 55.132),
  cam_point: new mp.Vector3(540.392, -172.49, 55.134)
}, {
  name: "Easter Ross",
  model: "s_f_y_casino_01",
  position: new mp.Vector3(1117.276, 219.923, -49.435),
  rotation: 81.495,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_F_Y_BEVHILLS_01_WHITE_FULL_01",
  conversation_id: 96,
  cam_pos: new mp.Vector3(1115.617, 219.986, -48.785),
  cam_point: new mp.Vector3(1116.492, 219.952, -48.877)
}, {
  name: "Alvin Sparks",
  model: "a_m_m_mexcntry_01",
  position: new mp.Vector3(2504.148, 4744.339, 34.304),
  rotation: 132.136,
  speech: "PHONE_CONV1_INTRO",
  voice: "S_M_Y_AIRWORKER_LATINO_FULL_02",
  conversation_id: 1516,
  cam_pos: new mp.Vector3(2503.342, 4743.519, 34.951),
  cam_point: new mp.Vector3(2503.989, 4744.151, 34.918)
}, {
  name: "Gerard Robbins",
  model: "a_m_m_farmer_01",
  position: new mp.Vector3(2456.81, 4769.172, 34.375),
  rotation: 132.288,
  speech: "PHONE_CONV1_INTRO",
  voice: "S_M_Y_AIRWORKER_LATINO_FULL_02",
  conversation_id: 1517,
  cam_pos: new mp.Vector3(2456.003, 4768.352, 35.004),
  cam_point: new mp.Vector3(2456.639, 4768.996, 34.995)
}, {
  name: "Samuel Hodges",
  model: "a_m_y_vinewood_03",
  position: new mp.Vector3(2425.555, 4761.442, 34.315),
  rotation: 307.139,
  speech: "PHONE_CONV1_INTRO",
  voice: "S_M_Y_AIRWORKER_LATINO_FULL_02",
  conversation_id: 1518,
  cam_pos: new mp.Vector3(2426.345, 4762.092, 34.967),
  cam_point: new mp.Vector3(2425.741, 4761.598, 34.944)
}, {
  name: "Randall Rogers",
  model: "a_m_m_mexcntry_01",
  position: new mp.Vector3(2256.428, 4842.934, 40.657),
  rotation: 310.862,
  speech: "PHONE_CONV1_INTRO",
  voice: "S_M_Y_AIRWORKER_LATINO_FULL_02",
  conversation_id: 1519,
  cam_pos: new mp.Vector3(2257.157, 4843.539, 41.301),
  cam_point: new mp.Vector3(2256.628, 4843.07, 41.288)
}, {
  name: "Erick Fields",
  model: "a_m_m_farmer_01",
  position: new mp.Vector3(2236.263, 4891.014, 40.695),
  rotation: 312.897,
  speech: "PHONE_CONV1_INTRO",
  voice: "S_M_Y_AIRWORKER_LATINO_FULL_02",
  conversation_id: 1520,
  cam_pos: new mp.Vector3(2237.095, 4891.643, 41.365),
  cam_point: new mp.Vector3(2236.466, 4891.152, 41.312)
}, {
  name: "John Hubbard",
  model: "a_m_y_vinewood_03",
  position: new mp.Vector3(2247.761, 4903.328, 40.71),
  rotation: 135.066,
  speech: "PHONE_CONV1_INTRO",
  voice: "S_M_Y_AIRWORKER_LATINO_FULL_02",
  conversation_id: 1521,
  cam_pos: new mp.Vector3(2247.219, 4902.651, 41.357),
  cam_point: new mp.Vector3(2247.607, 4903.137, 41.328)
}, {
  name: "George Garrett",
  model: "a_m_m_mexcntry_01",
  position: new mp.Vector3(2192.607, 4979.481, 41.533),
  rotation: 316.392,
  speech: "PHONE_CONV1_INTRO",
  voice: "S_M_Y_AIRWORKER_LATINO_FULL_02",
  conversation_id: 1522,
  cam_pos: new mp.Vector3(2193.249, 4980.127, 42.204),
  cam_point: new mp.Vector3(2192.781, 4979.648, 42.166)
}, {
  name: "Charles Hoover",
  model: "a_m_m_farmer_01",
  position: new mp.Vector3(2158.757, 5014.042, 41.473),
  rotation: 304.753,
  speech: "PHONE_CONV1_INTRO",
  voice: "S_M_Y_AIRWORKER_LATINO_FULL_02",
  conversation_id: 1523,
  cam_pos: new mp.Vector3(2159.532, 5014.457, 42.137),
  cam_point: new mp.Vector3(2158.975, 5014.159, 42.077)
}, {
  name: "Brian Hunter",
  model: "s_m_m_mariachi_01",
  position: new mp.Vector3(-265.099, -2017.407, 30.146),
  rotation: 221.295,
  speech: "",
  voice: "",
  conversation_id: 99,
  cam_pos: new mp.Vector3(-264.626, -2017.861, 30.794),
  cam_point: new mp.Vector3(-264.923, -2017.578, 30.763)
}, {
  name: "Preston Cunningham",
  model: "s_m_y_blackops_01",
  position: new mp.Vector3(-2461.885, 3268.464, 32.828),
  rotation: 149.146,
  speech: "",
  voice: "",
  conversation_id: 112,
  cam_pos: new mp.Vector3(-2462.214, 3267.741, 33.476),
  cam_point: new mp.Vector3(-2462.003, 3268.25, 33.449)
}, {
  name: "James Builder",
  model: "ig_paper",
  position: new mp.Vector3(-1008.249, -475.082, 50.027),
  rotation: 218.235,
  speech: "BUMP",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 101,
  cam_pos: new mp.Vector3(-1007.525, -475.922, 50.674),
  cam_point: new mp.Vector3(-1008.073, -475.252, 50.65)
}, {
  name: "Joseph McDowell",
  model: "g_m_m_armgoon_01",
  position: new mp.Vector3(22.873, -1105.571, 29.797),
  rotation: 160.253,
  speech: "PHONE_CONV3_INTRO",
  voice: "G_M_Y_ARMGOON_02_WHITE_ARMENIAN_MINI_01",
  conversation_id: 102,
  cam_pos: new mp.Vector3(22.515, -1106.703, 30.444),
  cam_point: new mp.Vector3(22.85, -1105.814, 30.421)
}, {
  name: "Harry Douglas",
  model: "s_m_y_busboy_01",
  position: new mp.Vector3(956.62, 72.689, 112.553),
  rotation: 153.291,
  speech: "GENERIC_HOWS_IT_GOING",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 103,
  cam_pos: new mp.Vector3(956.313, 72.096, 113.199),
  cam_point: new mp.Vector3(956.52, 72.47, 113.191)
}, {
  name: "Kenneth Goodwin",
  model: "s_m_y_waiter_01",
  position: new mp.Vector3(920.1, 43.471, 111.661),
  rotation: 51.548,
  speech: "GENERIC_HOWS_IT_GOING",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 103,
  cam_pos: new mp.Vector3(919.518, 43.87, 112.309),
  cam_point: new mp.Vector3(919.892, 43.598, 112.288)
}, {
  name: "Elwin Skinner",
  model: "u_m_m_spyactor",
  position: new mp.Vector3(944.554, 38.515, 112.553),
  rotation: 330.881,
  speech: "GENERIC_HOWS_IT_GOING",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 103,
  cam_pos: new mp.Vector3(944.912, 39.195, 113.199),
  cam_point: new mp.Vector3(944.657, 38.736, 113.178)
}, {
  name: "Mark Dean",
  model: "s_m_y_armymech_01",
  position: new mp.Vector3(1782.186, 2543.456, 45.798),
  rotation: 270.183,
  speech: "GUNSH_GREET0",
  voice: "S_M_Y_AMMUCITY_01_WHITE_01",
  conversation_id: 105,
  cam_pos: new mp.Vector3(1783.72, 2543.396, 46.445),
  cam_point: new mp.Vector3(1783.129, 2543.423, 46.412)
}, {
  name: "Juniper Todd",
  model: "ig_priest",
  position: new mp.Vector3(-784.166, 7.054, 41.681),
  rotation: -156.875,
  speech: "BUMP",
  voice: "A_M_Y_STWHI_02_WHITE_FULL_01",
  conversation_id: 111,
  cam_pos: new mp.Vector3(-783.707, 6.272, 42.332),
  cam_point: new mp.Vector3(-784.052, 6.839, 42.309)
}, {
  name: "Victor Lindsey",
  model: "ig_gustavo",
  position: new mp.Vector3(3900.17, -4692.846, 4.173),
  rotation: 275.839,
  speech: "BUMP",
  voice: "A_M_Y_BUSINESS_01_CHINESE_FULL_01",
  conversation_id: 115,
  cam_pos: new mp.Vector3(3901, -4692.705, 4.816),
  cam_point: new mp.Vector3(3900.41, -4692.809, 4.802)
}, {
  name: "John Goodman",
  model: "ig_helmsmanpavel",
  position: new mp.Vector3(4807.419, -4298.137, 5.242),
  rotation: 201.844,
  speech: "BUMP",
  voice: "A_M_Y_BUSINESS_01_CHINESE_FULL_01",
  conversation_id: 115,
  cam_pos: new mp.Vector3(4807.633, -4298.686, 5.878),
  cam_point: new mp.Vector3(4807.5, -4298.369, 5.857)
}, {
  name: "Harry Craig",
  model: "ig_isldj_00",
  position: new mp.Vector3(5481.471, -5870.355, 19.339),
  rotation: 9.83,
  speech: "BUMP",
  voice: "A_M_Y_BUSINESS_01_CHINESE_FULL_01",
  conversation_id: 115,
  cam_pos: new mp.Vector3(5481.354, -5869.514, 19.935),
  cam_point: new mp.Vector3(5481.469, -5870.109, 19.952)
}, {
  name: "Joshua Wilson",
  model: "ig_isldj_01",
  position: new mp.Vector3(5416.705, -5114.053, 13.211),
  rotation: 170.29,
  speech: "BUMP",
  voice: "A_M_Y_BUSINESS_01_CHINESE_FULL_01",
  conversation_id: 115,
  cam_pos: new mp.Vector3(5416.578, -5114.689, 13.797),
  cam_point: new mp.Vector3(5416.638, -5114.293, 13.803)
}, {
  name: "Jack Williams",
  model: "s_m_y_barman_01",
  position: new mp.Vector3(-1376.369, -628.516, 30.82),
  rotation: 24.628,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 116,
  cam_pos: new mp.Vector3(-1376.741, -627.839, 31.466),
  cam_point: new mp.Vector3(-1376.455, -628.285, 31.433)
}, {
  name: "Jacob Patterson",
  model: "s_m_y_barman_01",
  position: new mp.Vector3(-1392.142, -604.76, 30.319),
  rotation: 97.664,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 116,
  cam_pos: new mp.Vector3(-1392.997, -605.027, 30.963),
  cam_point: new mp.Vector3(-1392.377, -604.813, 30.954)
}, {
  name: "Olivia Johnson",
  model: "a_f_y_business_04",
  position: new mp.Vector3(-836.235, -880.989, -54.547),
  rotation: 172.461,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_F_M_BEVHILLS_01_WHITE_FULL_01",
  conversation_id: 2000,
  cam_pos: new mp.Vector3(-836.341, -881.867, -53.899),
  cam_point: new mp.Vector3(-836.301, -881.216, -53.896),
  dimension: 50
}, {
  name: "Winifred Anderson",
  model: "s_f_y_airhostess_01",
  position: new mp.Vector3(-832.392, -1215.294, 6.935),
  rotation: -128.795,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_F_M_BEVHILLS_01_WHITE_FULL_01",
  conversation_id: 150,
  cam_pos: new mp.Vector3(-831.849, -1215.72, 7.582),
  cam_point: new mp.Vector3(-832.202, -1215.447, 7.559),
  eng_only: false
}, {
  name: "Winifred Anderson",
  model: "s_f_y_airhostess_01",
  position: new mp.Vector3(-1294.494, 273.805, 64.391),
  rotation: -27.868,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_F_M_BEVHILLS_01_WHITE_FULL_01",
  conversation_id: 150,
  cam_pos: new mp.Vector3(-1293.865, 274.629, 65.083),
  cam_point: new mp.Vector3(-1294.325, 273.989, 64.952),
  eng_only: true,
  questionMarker: true
}, {
  name: "Cornelius Blair",
  model: "s_m_y_garbage",
  position: new mp.Vector3(-893.654, -2262.138, 6.763),
  rotation: 310.107,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 117,
  cam_pos: new mp.Vector3(-892.96, -2261.437, 7.354),
  cam_point: new mp.Vector3(-893.469, -2261.97, 7.348)
}, {
  name: "Christopher Matthews",
  model: "s_m_y_garbage",
  position: new mp.Vector3(-3006.765, 100.157, 11.793),
  rotation: 20.769,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 118,
  cam_pos: new mp.Vector3(-3007.021, 100.859, 12.522),
  cam_point: new mp.Vector3(-3006.846, 100.375, 12.455),
  questionMarker: true
}, {
  name: "Buck Griffith",
  model: "s_m_y_garbage",
  position: new mp.Vector3(-44.668, 6528.3, 31.491),
  rotation: 214.925,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 119,
  cam_pos: new mp.Vector3(-44.232, 6527.846, 32.138),
  cam_point: new mp.Vector3(-44.505, 6528.122, 32.126)
}, {
  name: "Andrew Jackson",
  model: "s_m_y_garbage",
  position: new mp.Vector3(1551.507, 3789.567, 34.241),
  rotation: 203.345,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 120,
  cam_pos: new mp.Vector3(1551.844, 3788.863, 34.888),
  cam_point: new mp.Vector3(1551.597, 3789.341, 34.869)
}, {
  name: "Esmond Barber",
  model: "s_m_y_garbage",
  position: new mp.Vector3(379.201, 276.44, 103.064),
  rotation: 211.828,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 121,
  cam_pos: new mp.Vector3(379.699, 275.521, 103.699),
  cam_point: new mp.Vector3(379.318, 276.236, 103.72)
}, {
  name: "Ethan Henry",
  model: "s_m_y_garbage",
  position: new mp.Vector3(-559.615, 323.758, 84.4),
  rotation: 299.429,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 122,
  cam_pos: new mp.Vector3(-559.032, 324.185, 85.041),
  cam_point: new mp.Vector3(-559.415, 323.889, 85.041)
}, {
  name: "Noel Ramsey",
  model: "s_m_y_garbage",
  position: new mp.Vector3(-1202.002, -353.863, 37.289),
  rotation: 224.913,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 123,
  cam_pos: new mp.Vector3(-1201.439, -354.502, 37.937),
  cam_point: new mp.Vector3(-1201.857, -354.056, 37.924)
}, {
  name: "Jack Melton",
  model: "s_m_y_garbage",
  position: new mp.Vector3(-447.455, -819.294, 30.698),
  rotation: 105.752,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 124,
  cam_pos: new mp.Vector3(-448.58, -819.543, 31.335),
  cam_point: new mp.Vector3(-447.689, -819.369, 31.314)
}, {
  name: "Matthew Preston",
  model: "s_m_y_garbage",
  position: new mp.Vector3(431.227, -1305.323, 30.951),
  rotation: 290.022,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 125,
  cam_pos: new mp.Vector3(432.244, -1304.989, 31.604),
  cam_point: new mp.Vector3(431.467, -1305.265, 31.561),
  questionMarker: true
}, {
  name: "Peter Rodgers",
  model: "s_m_y_garbage",
  position: new mp.Vector3(-1164.133, -734.712, 20.073),
  rotation: 193.846,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 126,
  cam_pos: new mp.Vector3(-1163.871, -735.665, 20.644),
  cam_point: new mp.Vector3(-1164.063, -734.95, 20.676)
}, {
  name: "Charles Francis",
  model: "s_m_y_garbage",
  position: new mp.Vector3(675.864, 226.353, 94.035),
  rotation: 220.726,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 127,
  cam_pos: new mp.Vector3(676.449, 225.685, 94.596),
  cam_point: new mp.Vector3(676.006, 226.149, 94.634)
}, {
  name: "Francis Garrison",
  model: "s_m_y_garbage",
  position: new mp.Vector3(191.483, 375.055, 107.98),
  rotation: 228.473,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 128,
  cam_pos: new mp.Vector3(192.394, 374.431, 108.512),
  cam_point: new mp.Vector3(191.679, 374.9, 108.561)
}, {
  name: "Thomas Day",
  model: "s_m_y_garbage",
  position: new mp.Vector3(-342.758, 262.511, 85.451),
  rotation: 261.263,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 129,
  cam_pos: new mp.Vector3(-341.954, 262.39, 86.13),
  cam_point: new mp.Vector3(-342.514, 262.468, 86.058)
}, {
  name: "George Stokes",
  model: "s_m_y_garbage",
  position: new mp.Vector3(-2029.054, -463.628, 11.461),
  rotation: 320.261,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 130,
  cam_pos: new mp.Vector3(-2028.619, -463.045, 12.118),
  cam_point: new mp.Vector3(-2028.9, -463.438, 12.082)
}, {
  name: "Philip Golden",
  model: "s_m_y_garbage",
  position: new mp.Vector3(-1064.452, -1403.666, 5.398),
  rotation: 32.501,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 131,
  cam_pos: new mp.Vector3(-1065.005, -1402.599, 6.005),
  cam_point: new mp.Vector3(-1064.539, -1403.432, 5.971)
}, {
  name: "Lenard Fitzgerald",
  model: "s_m_y_garbage",
  position: new mp.Vector3(-279.759, -890.147, 31.081),
  rotation: 305.66,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 132,
  cam_pos: new mp.Vector3(-278.847, -889.498, 31.727),
  cam_point: new mp.Vector3(-279.547, -890.017, 31.679)
}, {
  name: "Tracy Matthews",
  model: "s_m_y_garbage",
  position: new mp.Vector3(-346.88, -825.202, 31.522),
  rotation: 121.972,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 133,
  cam_pos: new mp.Vector3(-347.812, -825.8, 32.164),
  cam_point: new mp.Vector3(-347.087, -825.334, 32.14)
}, {
  name: "Steven Ford",
  model: "s_m_y_barman_01",
  position: new mp.Vector3(-564.824, 284.794, 85.377),
  rotation: 268.993,
  speech: "GENERIC_HOWS_IT_GOING",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 57,
  cam_pos: new mp.Vector3(-563.809, 284.781, 86.025),
  cam_point: new mp.Vector3(-564.578, 284.795, 85.99)
}, {
  name: "Osborn Dixon",
  model: "mp_m_shopkeep_01",
  position: new mp.Vector3(-3242.223, 1000.013, 12.831),
  rotation: 352.754,
  speech: "SHOP_GREET",
  voice: "MP_M_SHOPKEEP_01_PAKISTANI_MINI_01",
  conversation_id: 136,
  cam_pos: new mp.Vector3(-3242.153, 1001.025, 13.477),
  cam_point: new mp.Vector3(-3242.201, 1000.256, 13.455)
}, {
  name: "Mark Grant",
  model: "mp_m_shopkeep_01",
  position: new mp.Vector3(-3038.797, 584.584, 7.909),
  rotation: 25.537,
  speech: "SHOP_GREET",
  voice: "MP_M_SHOPKEEP_01_PAKISTANI_MINI_01",
  conversation_id: 137,
  cam_pos: new mp.Vector3(-3039.082, 585.634, 8.554),
  cam_point: new mp.Vector3(-3038.839, 584.823, 8.54)
}, {
  name: "Mark Grant",
  model: "mp_m_shopkeep_01",
  position: new mp.Vector3(372.63, 326.976, 103.566),
  rotation: 243.26,
  speech: "SHOP_GREET",
  voice: "MP_M_SHOPKEEP_01_PAKISTANI_MINI_01",
  conversation_id: 138,
  cam_pos: new mp.Vector3(373.687, 326.552, 104.213),
  cam_point: new mp.Vector3(372.853, 326.872, 104.179)
}, {
  name: "Maude Wood",
  model: "a_f_y_bevhills_02",
  position: new mp.Vector3(-1193.718, -766.771, 17.316),
  rotation: 210.67,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_F_M_BEVHILLS_01_WHITE_FULL_01",
  conversation_id: 139,
  cam_pos: new mp.Vector3(-1193.296, -767.866, 17.965),
  cam_point: new mp.Vector3(-1193.644, -767.005, 17.932)
}, {
  name: "Mark Grant",
  model: "mp_m_shopkeep_01",
  position: new mp.Vector3(1727.977, 6415.413, 35.037),
  rotation: 234.928,
  speech: "SHOP_GREET",
  voice: "MP_M_SHOPKEEP_01_PAKISTANI_MINI_01",
  conversation_id: 141,
  cam_pos: new mp.Vector3(1728.819, 6414.956, 35.686),
  cam_point: new mp.Vector3(1728.208, 6415.322, 35.637)
}, {
  name: "Steven Parker",
  model: "mp_m_shopkeep_01",
  position: new mp.Vector3(24.504, -1347.041, 29.497),
  rotation: 271.206,
  speech: "SHOP_GREET",
  voice: "MP_M_SHOPKEEP_01_PAKISTANI_MINI_01",
  conversation_id: 142,
  cam_pos: new mp.Vector3(25.395, -1346.949, 30.278),
  cam_point: new mp.Vector3(24.721, -1347.009, 30.186)
}, {
  name: "Ronald Holland",
  model: "mp_m_shopkeep_01",
  position: new mp.Vector3(1134.2, -983.045, 46.416),
  rotation: 277.373,
  speech: "SHOP_GREET",
  voice: "MP_M_SHOPKEEP_01_PAKISTANI_MINI_01",
  conversation_id: 143,
  cam_pos: new mp.Vector3(1135.318, -982.878, 47.063),
  cam_point: new mp.Vector3(1134.428, -982.976, 47.061)
}, {
  name: "Bartholomew Brooks",
  model: "mp_m_shopkeep_01",
  position: new mp.Vector3(-1221.473, -907.937, 12.326),
  rotation: 32.91,
  speech: "SHOP_GREET",
  voice: "MP_M_SHOPKEEP_01_PAKISTANI_MINI_01",
  conversation_id: 144,
  cam_pos: new mp.Vector3(-1222.059, -907.202, 12.973),
  cam_point: new mp.Vector3(-1221.651, -907.766, 12.933),
  questionMarker: true
}, {
  name: "Prudence Hill",
  model: "a_f_y_bevhills_02",
  position: new mp.Vector3(73.967, -1393.092, 29.376),
  rotation: 270.698,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_F_M_BEVHILLS_01_WHITE_FULL_01",
  conversation_id: 145,
  cam_pos: new mp.Vector3(74.898, -1393.207, 30.023),
  cam_point: new mp.Vector3(74.211, -1393.132, 29.986)
}, {
  name: "Mike Cornsweet",
  model: "s_m_y_fireman_01",
  position: new mp.Vector3(1193.119, -1462.452, 34.89),
  rotation: 4.795,
  speech: "GENERIC_HOWS_IT_GOING",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 146,
  cam_pos: new mp.Vector3(1193.077, -1461.687, 35.577),
  cam_point: new mp.Vector3(1193.066, -1466.056, 35.391)
}, {
  name: "Gilbert Murphy",
  model: "ig_fbisuit_01",
  position: new mp.Vector3(2513.438, -429.717, 94.126),
  rotation: -44.719,
  speech: "GENERIC_HOWS_IT_GOING",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 148,
  cam_pos: new mp.Vector3(2514.459, -428.711, 94.774),
  cam_point: new mp.Vector3(2511.649, -431.455, 94.399)
}, {
  name: "George Page",
  model: "ig_casey",
  position: new mp.Vector3(576.67, 2739.217, 42.139),
  rotation: 182.848,
  speech: "GENERIC_HOWS_IT_GOING",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 149,
  cam_pos: new mp.Vector3(576.744, 2738.212, 42.649),
  cam_point: new mp.Vector3(576.702, 2738.969, 42.684)
}, {
  name: "Wilfrid Flynn",
  model: "s_m_y_garbage",
  position: new mp.Vector3(-1246.847, -238.198, 40.02),
  rotation: 340.858,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 153,
  cam_pos: new mp.Vector3(-1246.586, -237.503, 40.579),
  cam_point: new mp.Vector3(-1246.75, -237.97, 40.626)
}, {
  name: "Elvin Pope",
  model: "mp_m_shopkeep_01",
  position: new mp.Vector3(1697.366, 4923.422, 42.064),
  rotation: -33.913,
  speech: "SHOP_GREET",
  voice: "MP_M_SHOPKEEP_01_PAKISTANI_MINI_01",
  conversation_id: 154,
  cam_pos: new mp.Vector3(1697.915, 4924.305, 42.77),
  cam_point: new mp.Vector3(1697.486, 4923.626, 42.712)
}, {
  name: "Ronald Johns",
  model: "mp_m_shopkeep_01",
  position: new mp.Vector3(1392.047, 3606.087, 34.981),
  rotation: -163.516,
  speech: "SHOP_GREET",
  voice: "MP_M_SHOPKEEP_01_PAKISTANI_MINI_01",
  conversation_id: 155,
  cam_pos: new mp.Vector3(1392.388, 3605.246, 35.628),
  cam_point: new mp.Vector3(1392.125, 3605.854, 35.599)
}, {
  name: "Piers Harper",
  model: "mp_m_shopkeep_01",
  position: new mp.Vector3(548.975, 2671.758, 42.156),
  rotation: 93.53,
  speech: "SHOP_GREET",
  voice: "MP_M_SHOPKEEP_01_PAKISTANI_MINI_01",
  conversation_id: 156,
  cam_pos: new mp.Vector3(548.184, 2671.717, 42.804),
  cam_point: new mp.Vector3(548.735, 2671.759, 42.795)
}, {
  name: "John Hopkins",
  model: "mp_m_shopkeep_01",
  position: new mp.Vector3(-1486.731, -377.551, 40.163),
  rotation: 137.224,
  speech: "SHOP_GREET",
  voice: "MP_M_SHOPKEEP_01_PAKISTANI_MINI_01",
  conversation_id: 157,
  cam_pos: new mp.Vector3(-1487.556, -378.351, 40.834),
  cam_point: new mp.Vector3(-1486.898, -377.721, 40.809)
}, {
  name: "Jocelin Fox",
  model: "a_f_y_bevhills_02",
  position: new mp.Vector3(-164.414, -301.469, 39.733),
  rotation: -113.99,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_F_M_BEVHILLS_01_WHITE_FULL_01",
  conversation_id: 158,
  cam_pos: new mp.Vector3(-163.737, -301.778, 40.38),
  cam_point: new mp.Vector3(-164.192, -301.565, 40.368)
}, {
  name: "Georgiana Hensley",
  model: "a_f_y_bevhills_02",
  position: new mp.Vector3(127.219, -223.417, 54.558),
  rotation: 70.262,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_F_M_BEVHILLS_01_WHITE_FULL_01",
  conversation_id: 159,
  cam_pos: new mp.Vector3(126.204, -222.982, 55.205),
  cam_point: new mp.Vector3(126.988, -223.334, 55.176)
}, {
  name: "Donna Stevens",
  model: "a_f_y_bevhills_02",
  position: new mp.Vector3(-1102.666, 2711.475, 19.108),
  rotation: -137.527,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_F_M_BEVHILLS_01_WHITE_FULL_01",
  conversation_id: 160,
  cam_pos: new mp.Vector3(-1101.95, 2710.455, 19.756),
  cam_point: new mp.Vector3(-1102.533, 2711.264, 19.698)
}, {
  name: "Katherine Jacobs",
  model: "a_f_y_bevhills_02",
  position: new mp.Vector3(612.996, 2761.734, 42.088),
  rotation: -89.541,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_F_M_BEVHILLS_01_WHITE_FULL_01",
  conversation_id: 161,
  cam_pos: new mp.Vector3(614.357, 2761.663, 42.853),
  cam_point: new mp.Vector3(613.233, 2761.722, 42.736)
}, {
  name: "Vanessa McKinney",
  model: "a_f_y_bevhills_02",
  position: new mp.Vector3(1196.428, 2711.628, 38.223),
  rotation: 176.047,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_F_M_BEVHILLS_01_WHITE_FULL_01",
  conversation_id: 162,
  cam_pos: new mp.Vector3(1196.327, 2710.739, 38.93),
  cam_point: new mp.Vector3(1196.398, 2711.392, 38.871)
}, {
  name: "Richard Alexander",
  model: "g_m_m_armgoon_01",
  position: new mp.Vector3(-331.529, 6085.001, 31.455),
  rotation: -134.221,
  speech: "PHONE_CONV3_INTRO",
  voice: "G_M_Y_ARMGOON_02_WHITE_ARMENIAN_MINI_01",
  conversation_id: 163,
  cam_pos: new mp.Vector3(-330.774, 6084.11, 32.216),
  cam_point: new mp.Vector3(-331.383, 6084.805, 32.077)
}, {
  name: "Peter Henry",
  model: "g_m_m_armgoon_01",
  position: new mp.Vector3(-1118.876, 2699.81, 18.554),
  rotation: -139.177,
  speech: "PHONE_CONV3_INTRO",
  voice: "G_M_Y_ARMGOON_02_WHITE_ARMENIAN_MINI_01",
  conversation_id: 164,
  cam_pos: new mp.Vector3(-1118.263, 2699.064, 19.202),
  cam_point: new mp.Vector3(-1118.722, 2699.62, 19.174)
}, {
  name: "Samuel Holmes",
  model: "g_m_m_armgoon_01",
  position: new mp.Vector3(2567.96, 292.628, 108.735),
  rotation: -2.395,
  speech: "PHONE_CONV3_INTRO",
  voice: "G_M_Y_ARMGOON_02_WHITE_ARMENIAN_MINI_01",
  conversation_id: 165,
  cam_pos: new mp.Vector3(2567.937, 293.812, 109.382),
  cam_point: new mp.Vector3(2567.936, 292.876, 109.331)
}, {
  name: "Thomas Davis",
  model: "g_m_m_armgoon_01",
  position: new mp.Vector3(842.139, -1035.263, 28.195),
  rotation: -0.143,
  speech: "PHONE_CONV3_INTRO",
  voice: "G_M_Y_ARMGOON_02_WHITE_ARMENIAN_MINI_01",
  conversation_id: 166,
  cam_pos: new mp.Vector3(842.13, -1034.131, 28.843),
  cam_point: new mp.Vector3(842.089, -1035.02, 28.794)
}, {
  name: "Bartholomew McBride",
  model: "g_m_m_armgoon_01",
  position: new mp.Vector3(253.907, -50.47, 69.941),
  rotation: 76.634,
  speech: "PHONE_CONV3_INTRO",
  voice: "G_M_Y_ARMGOON_02_WHITE_ARMENIAN_MINI_01",
  conversation_id: 167,
  cam_pos: new mp.Vector3(252.497, -50.003, 70.59),
  cam_point: new mp.Vector3(253.662, -50.434, 70.542)
}, {
  name: "Arthur Flowers",
  model: "g_m_m_armgoon_01",
  position: new mp.Vector3(-1304.137, -394.495, 36.696),
  rotation: 70.715,
  speech: "PHONE_CONV3_INTRO",
  voice: "G_M_Y_ARMGOON_02_WHITE_ARMENIAN_MINI_01",
  conversation_id: 168,
  cam_pos: new mp.Vector3(-1305.34, -394.068, 37.343),
  cam_point: new mp.Vector3(-1304.378, -394.435, 37.291)
}, {
  name: "Mark Hunt",
  model: "s_m_m_scientist_01",
  position: new mp.Vector3(885.525, -3199.466, -98.196),
  rotation: 53.944,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_M_Y_BUSINESS_01_CHINESE_FULL_01",
  conversation_id: 0,
  cam_pos: new mp.Vector3(0, 0, 0),
  cam_point: new mp.Vector3(0, 0, 0),
  dimension: -1,
  bunker_npc: 1
}, {
  name: "Cori Scott",
  model: "mp_f_meth_01",
  position: new mp.Vector3(891.753, -3196.942, -98.196),
  rotation: 5.415,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_F_M_BEVHILLS_01_WHITE_FULL_01",
  conversation_id: 0,
  cam_pos: new mp.Vector3(0, 0, 0),
  cam_point: new mp.Vector3(0, 0, 0),
  dimension: -1,
  bunker_npc: 2
}, {
  name: "Bertram Dorsey",
  model: "mp_m_meth_01",
  position: new mp.Vector3(884.427, -3207.937, -98.196),
  rotation: 84.884,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_M_Y_BUSINESS_03_WHITE_MINI_01",
  conversation_id: 0,
  cam_pos: new mp.Vector3(0, 0, 0),
  cam_point: new mp.Vector3(0, 0, 0),
  dimension: -1,
  bunker_npc: 3
}, {
  name: "Nicholas Nash",
  model: "mp_m_waremech_01",
  position: new mp.Vector3(907.918, -3211.2, -98.222),
  rotation: 27.651,
  speech: "PHONE_CONV4_INTRO",
  voice: "A_M_Y_VINEWOOD_02_WHITE_MINI_01",
  conversation_id: 0,
  cam_pos: new mp.Vector3(0, 0, 0),
  cam_point: new mp.Vector3(0, 0, 0),
  dimension: -1,
  bunker_npc: 4
}, {
  name: "Kelley Dennis",
  model: "g_m_m_armgoon_01",
  position: new mp.Vector3(889.436, -3206.573, -98.19),
  rotation: 68.446,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_M_Y_BUSINESS_01_CHINESE_FULL_01",
  conversation_id: 0,
  cam_pos: new mp.Vector3(0, 0, 0),
  cam_point: new mp.Vector3(0, 0, 0),
  dimension: -1,
  bunker_npc: 5
}, {
  name: "Sophie Douglas",
  model: "mp_f_meth_01",
  position: new mp.Vector3(896.569, -3217.448, -98.226),
  rotation: 64.028,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_F_M_BEVHILLS_01_WHITE_FULL_01",
  conversation_id: 0,
  cam_pos: new mp.Vector3(0, 0, 0),
  cam_point: new mp.Vector3(0, 0, 0),
  dimension: -1,
  bunker_npc: 6
}, {
  name: "Neal Rogers",
  model: "mp_m_meth_01",
  position: new mp.Vector3(897.937, -3221.314, -98.246),
  rotation: -155.833,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_M_Y_BUSINESS_03_WHITE_MINI_01",
  conversation_id: 0,
  cam_pos: new mp.Vector3(0, 0, 0),
  cam_point: new mp.Vector3(0, 0, 0),
  dimension: -1,
  bunker_npc: 7
}, {
  name: "Stuart Jordan",
  model: "s_m_m_scientist_01",
  position: new mp.Vector3(899.367, -3223.841, -98.264),
  rotation: 25.526,
  speech: "PHONE_CONV4_INTRO",
  voice: "A_M_Y_VINEWOOD_02_WHITE_MINI_01",
  conversation_id: 0,
  cam_pos: new mp.Vector3(0, 0, 0),
  cam_point: new mp.Vector3(0, 0, 0),
  dimension: -1,
  bunker_npc: 8
}, {
  name: "Piers McBride",
  model: "mp_m_meth_01",
  position: new mp.Vector3(891.84, -3211.571, -98.2),
  rotation: -157.425,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_M_Y_BUSINESS_03_WHITE_MINI_01",
  conversation_id: 0,
  cam_pos: new mp.Vector3(0, 0, 0),
  cam_point: new mp.Vector3(0, 0, 0),
  dimension: -1,
  bunker_npc: 9
}, {
  name: "Simon Black",
  model: "s_m_y_construct_02",
  position: new mp.Vector3(2035.097, 3460.389, 43.759),
  rotation: -152.704,
  speech: "GENERIC_HOWS_IT_GOING",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 170,
  cam_pos: new mp.Vector3(2035.532, 3459.704, 44.362),
  cam_point: new mp.Vector3(2035.219, 3460.174, 44.367)
}, {
  name: "Godwin Dorsey",
  model: "s_m_y_construct_02",
  position: new mp.Vector3(1494.76, -1884.985, 71.863),
  rotation: -64.887,
  speech: "GENERIC_HOWS_IT_GOING",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 171,
  cam_pos: new mp.Vector3(1495.519, -1884.596, 72.499),
  cam_point: new mp.Vector3(1494.981, -1884.883, 72.489)
}, {
  name: "Paul Griffin",
  model: "s_m_y_construct_02",
  position: new mp.Vector3(2336.101, 4859.396, 41.808),
  rotation: -132.485,
  speech: "GENERIC_HOWS_IT_GOING",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 174,
  cam_pos: new mp.Vector3(2336.669, 4858.882, 42.454),
  cam_point: new mp.Vector3(2336.283, 4859.238, 42.446)
}, {
  name: "Steven Nelson",
  model: "s_m_y_construct_02",
  position: new mp.Vector3(1530.678, 818.091, 77.43),
  rotation: 61.043,
  speech: "GENERIC_HOWS_IT_GOING",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 176,
  cam_pos: new mp.Vector3(1529.89, 818.474, 78.076),
  cam_point: new mp.Vector3(1530.464, 818.207, 78.059)
}, {
  name: "Peter Fletcher",
  model: "s_m_y_construct_02",
  position: new mp.Vector3(2125.011, 1935.309, 93.784),
  rotation: 87.955,
  speech: "GENERIC_HOWS_IT_GOING",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 177,
  cam_pos: new mp.Vector3(2124.003, 1935.254, 94.431),
  cam_point: new mp.Vector3(2124.764, 1935.29, 94.39)
}, {
  name: "Donald Palmer",
  model: "s_m_y_construct_02",
  position: new mp.Vector3(2704.058, 2777.41, 37.878),
  rotation: 23.893,
  speech: "GENERIC_HOWS_IT_GOING",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 178,
  cam_pos: new mp.Vector3(2703.706, 2778.146, 38.53),
  cam_point: new mp.Vector3(2703.962, 2777.635, 38.497)
}, {
  name: "John Golden",
  model: "g_m_m_armgoon_01",
  position: new mp.Vector3(897.944, -3173.469, -97.124),
  rotation: 104.216,
  speech: "PHONE_CONV3_INTRO",
  voice: "G_M_Y_ARMGOON_02_WHITE_ARMENIAN_MINI_01",
  conversation_id: 179,
  cam_pos: new mp.Vector3(896.854, -3173.842, -96.476),
  cam_point: new mp.Vector3(897.702, -3173.52, -96.517),
  dimension: -1
}, {
  name: "Gavin Barnett",
  model: "u_m_y_tattoo_01",
  position: new mp.Vector3(1862.57, 3748.522, 33.032),
  rotation: 30.488,
  speech: "SHOP_BANTER",
  voice: "U_M_Y_TATTOO_01_WHITE_MINI_01",
  conversation_id: 180,
  cam_pos: new mp.Vector3(1861.943, 3749.507, 33.68),
  cam_point: new mp.Vector3(1862.409, 3748.712, 33.624)
}, {
  name: "Anthony Hines",
  model: "cs_beverly",
  position: new mp.Vector3(-442.571, -27.582, 45.645),
  rotation: -58.046,
  speech: "GENERIC_HOWS_IT_GOING",
  voice: "A_M_Y_BUSINESS_03_WHITE_MINI_01",
  conversation_id: 181,
  cam_pos: new mp.Vector3(-441.752, -26.996, 46.292),
  cam_point: new mp.Vector3(-442.363, -27.451, 46.26)
}, {
  name: "Peter Floyd",
  model: "mp_m_meth_01",
  position: new mp.Vector3(909.942, -3222.279, -98.266),
  rotation: -74.977,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_M_Y_BUSINESS_03_WHITE_MINI_01",
  conversation_id: 0,
  cam_pos: new mp.Vector3(0, 0, 0),
  cam_point: new mp.Vector3(0, 0, 0),
  dimension: -1,
  bunker_npc: 10
}, {
  name: "Daniel Craig",
  model: "hc_gunman",
  position: new mp.Vector3(-3427.261, 967.76, 8.347),
  rotation: -94.624,
  speech: "GENERIC_HOWS_IT_GOING",
  voice: "A_M_Y_BUSINESS_03_WHITE_MINI_01",
  conversation_id: 183,
  cam_pos: new mp.Vector3(-3426.42, 967.698, 8.998),
  cam_point: new mp.Vector3(-3427.02, 967.724, 8.972)
}, {
  name: "Paul Bell",
  model: "mp_m_meth_01",
  position: new mp.Vector3(905.807, -3230.671, -98.294),
  rotation: -177.754,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_M_Y_BUSINESS_03_WHITE_MINI_01",
  conversation_id: 0,
  cam_pos: new mp.Vector3(0, 0, 0),
  cam_point: new mp.Vector3(0, 0, 0),
  dimension: -1,
  bunker_npc: 11
}, {
  name: "James Logan",
  model: "mp_m_meth_01",
  position: new mp.Vector3(901.675, -3219.215, -98.242),
  rotation: -66.738,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_M_Y_BUSINESS_03_WHITE_MINI_01",
  conversation_id: 0,
  cam_pos: new mp.Vector3(0, 0, 0),
  cam_point: new mp.Vector3(0, 0, 0),
  dimension: -1,
  bunker_npc: 12
}, {
  name: "Gyles Bradford",
  model: "a_m_m_beach_01",
  position: new mp.Vector3(1232.75, -427.95, 67.748),
  rotation: 125.61,
  speech: "GENERIC_HOWS_IT_GOING",
  voice: "A_M_M_BEACH_01_BLACK_MINI_01",
  conversation_id: 184,
  cam_pos: new mp.Vector3(1231.926, -428.692, 68.248),
  cam_point: new mp.Vector3(1232.75, -427.95, 68.248)
}, {
  name: "Ethan Shields",
  model: "mp_m_meth_01",
  position: new mp.Vector3(893.55, -3201.277, -98.19),
  rotation: 104.284,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_M_Y_BUSINESS_03_WHITE_MINI_01",
  conversation_id: 0,
  cam_pos: new mp.Vector3(0, 0, 0),
  cam_point: new mp.Vector3(0, 0, 0),
  dimension: -1,
  bunker_npc: 13
}, {
  name: "Ethan Harmon",
  model: "u_m_y_tattoo_01",
  position: new mp.Vector3(-1151.846, -1424.159, 4.954),
  rotation: 120.178,
  speech: "SHOP_BANTER",
  voice: "U_M_Y_TATTOO_01_WHITE_MINI_01",
  conversation_id: 186,
  cam_pos: new mp.Vector3(-1152.781, -1424.769, 5.601),
  cam_point: new mp.Vector3(-1152.053, -1424.292, 5.567)
}, {
  name: "Charles Rose",
  model: "u_m_y_tattoo_01",
  position: new mp.Vector3(320.042, 181.509, 103.586),
  rotation: -110.431,
  speech: "SHOP_BANTER",
  voice: "U_M_Y_TATTOO_01_WHITE_MINI_01",
  conversation_id: 187,
  cam_pos: new mp.Vector3(320.801, 181.253, 104.234),
  cam_point: new mp.Vector3(320.28, 181.451, 104.204)
}, {
  name: "John Todd",
  model: "u_m_y_tattoo_01",
  position: new mp.Vector3(1324.978, -1650.836, 52.275),
  rotation: 135.35,
  speech: "SHOP_BANTER",
  voice: "U_M_Y_TATTOO_01_WHITE_MINI_01",
  conversation_id: 188,
  cam_pos: new mp.Vector3(1324.322, -1651.324, 52.923),
  cam_point: new mp.Vector3(1324.786, -1650.987, 52.898)
}, {
  name: "Harry Lloyd",
  model: "g_m_m_armgoon_01",
  position: new mp.Vector3(-2339.196, 3220.365, 33.076),
  rotation: 55.801,
  speech: "PHONE_CONV3_INTRO",
  voice: "G_M_Y_ARMGOON_02_WHITE_ARMENIAN_MINI_01",
  conversation_id: 189,
  cam_pos: new mp.Vector3(-2339.918, 3220.857, 33.778),
  cam_point: new mp.Vector3(-2339.383, 3220.516, 33.717),
  dimension: -1
}, {
  name: "Christopher Montgomery",
  model: "s_m_m_postal_01",
  position: new mp.Vector3(141.823, 107.404, 83.666),
  rotation: 74.789,
  speech: "GENERIC_HOWS_IT_GOING",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 190,
  cam_pos: new mp.Vector3(139.063, 108.323, 84.313),
  cam_point: new mp.Vector3(141.635, 107.374, 84.419)
}, {
  name: "Brian Poole",
  model: "mp_m_meth_01",
  position: new mp.Vector3(887.415, -3209.713, -98.196),
  rotation: -150.447,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_M_Y_BUSINESS_03_WHITE_MINI_01",
  conversation_id: 0,
  cam_pos: new mp.Vector3(0, 0, 0),
  cam_point: new mp.Vector3(0, 0, 0),
  dimension: -1,
  bunker_npc: 14
}, {
  name: "Ryan Cooper",
  model: "mp_m_meth_01",
  position: new mp.Vector3(885.301, -3203.379, -98.196),
  rotation: -93.65,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_M_Y_BUSINESS_03_WHITE_MINI_01",
  conversation_id: 0,
  cam_pos: new mp.Vector3(0, 0, 0),
  cam_point: new mp.Vector3(0, 0, 0),
  dimension: -1,
  bunker_npc: 15
}, {
  name: "Rudolph Wood",
  model: "g_m_m_armgoon_01",
  position: new mp.Vector3(-544.977, -584.607, 34.682),
  rotation: -88.539,
  speech: "PHONE_CONV3_INTRO",
  voice: "G_M_Y_ARMGOON_02_WHITE_ARMENIAN_MINI_01",
  conversation_id: 193,
  cam_pos: new mp.Vector3(-544.21, -584.593, 35.265),
  cam_point: new mp.Vector3(-544.729, -584.622, 35.281)
}, {
  name: "Harry Curtis",
  model: "mp_m_shopkeep_01",
  position: new mp.Vector3(-551.75, -583.208, 34.682),
  rotation: 177.64,
  speech: "SHOP_GREET",
  voice: "MP_M_SHOPKEEP_01_PAKISTANI_MINI_01",
  conversation_id: 194,
  cam_pos: new mp.Vector3(-551.78, -584.43, 35.376),
  cam_point: new mp.Vector3(-551.802, -583.453, 35.258)
}, {
  name: "Agatha Stokes",
  model: "a_f_y_bevhills_02",
  position: new mp.Vector3(-568.919, -586.574, 34.686),
  rotation: -92.263,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_F_M_BEVHILLS_01_WHITE_FULL_01",
  conversation_id: 195,
  cam_pos: new mp.Vector3(-568.125, -586.624, 35.288),
  cam_point: new mp.Vector3(-568.674, -586.593, 35.301)
}, {
  name: "Francis Davidson",
  model: "u_m_y_tattoo_01",
  position: new mp.Vector3(-587.57, -604.557, 41.43),
  rotation: -2.057,
  speech: "SHOP_BANTER",
  voice: "U_M_Y_TATTOO_01_WHITE_MINI_01",
  conversation_id: 196,
  cam_pos: new mp.Vector3(-587.534, -603.549, 42.017),
  cam_point: new mp.Vector3(-587.556, -604.308, 42.021)
}, {
  name: "Charles Oliver",
  model: "a_m_y_business_02",
  position: new mp.Vector3(-560.466, -583.178, 41.43),
  rotation: 86.402,
  speech: "PHONE_CONV4_INTRO",
  voice: "A_M_Y_VINEWOOD_02_WHITE_MINI_01",
  conversation_id: 49,
  cam_pos: new mp.Vector3(-561.867, -583.119, 42.137),
  cam_point: new mp.Vector3(-561.216, -583.147, 42.082)
}, {
  name: "William Gallagher",
  model: "s_m_y_barman_01",
  position: new mp.Vector3(-778.566, -395.307, 2.059),
  rotation: -177.622,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 197,
  cam_pos: new mp.Vector3(-778.563, -396.246, 2.68),
  cam_point: new mp.Vector3(-778.548, -395.552, 2.677),
  dimension: -1
}, {
  name: "Johnathan Cannon",
  model: "s_m_y_barman_01",
  position: new mp.Vector3(-734.25, -655.267, -60.877),
  rotation: -168.736,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 197,
  cam_pos: new mp.Vector3(-734.163, -656.206, -60.22),
  cam_point: new mp.Vector3(-734.244, -655.507, -60.236),
  dimension: -1
}, {
  name: "Jon Dionis",
  model: "s_m_y_busboy_01",
  position: new mp.Vector3(-1857.748, 2087.032, 140.432),
  rotation: 3.811,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 200,
  cam_pos: new mp.Vector3(-1858.149, 2092.782, 141.652),
  cam_point: new mp.Vector3(-1857.82, 2086.561, 141.326),
  dimension: -1
}, {
  name: "Antonio Greco",
  model: "s_m_m_movprem_01",
  position: new mp.Vector3(-1851.109, -355.504, 49.387),
  rotation: 143.469,
  speech: "GENERIC_HI",
  voice: "G_M_Y_LOST_02_LATINO_MINI_01",
  conversation_id: 202,
  cam_pos: new mp.Vector3(-1851.463, -355.951, 50.034),
  cam_point: new mp.Vector3(-1851.253, -355.687, 50.047),
  eng_only: false
}, {
  name: "Benjiro Harada",
  model: "ig_hao",
  position: new mp.Vector3(-1216.47, -195.977, 39.325),
  rotation: 63.289,
  speech: "GENERIC_HI",
  voice: "G_M_Y_LOST_02_LATINO_MINI_01",
  conversation_id: 202,
  cam_pos: new mp.Vector3(-1217.057, -195.694, 39.973),
  cam_point: new mp.Vector3(-1216.671, -195.87, 39.998),
  eng_only: false
}, {
  name: "Maxim Pakhan",
  model: "ig_isldj_03",
  position: new mp.Vector3(444.209, 214.18, 103.165),
  rotation: -18.5,
  speech: "GENERIC_HI",
  voice: "G_M_Y_LOST_02_LATINO_MINI_01",
  conversation_id: 202,
  cam_pos: new mp.Vector3(444.384, 214.754, 103.811),
  cam_point: new mp.Vector3(444.273, 214.408, 103.816),
  eng_only: false
}, {
  name: "Rafael Guajardo",
  model: "u_m_y_mani",
  position: new mp.Vector3(-74.594, 140.574, 81.494),
  rotation: 36.761,
  speech: "GENERIC_HI",
  voice: "G_M_Y_LOST_02_LATINO_MINI_01",
  conversation_id: 202,
  cam_pos: new mp.Vector3(-75.019, 141.202, 82.152),
  cam_point: new mp.Vector3(-74.707, 140.72, 82.233),
  eng_only: false
}, {
  name: "Mary Sutton",
  model: "u_f_y_spyactress",
  position: new mp.Vector3(-708.22, -152.906, 37.415),
  rotation: 120.522,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_F_Y_BEVHILLS_01_WHITE_FULL_01",
  conversation_id: 203,
  cam_pos: new mp.Vector3(-708.998, -153.281, 38.063),
  cam_point: new mp.Vector3(-708.448, -153.003, 38.017)
}, {
  name: "Mary Sutton",
  model: "u_f_y_spyactress",
  position: new mp.Vector3(-525.469, -594.988, 41.43),
  rotation: 178.047,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_F_M_BEVHILLS_01_WHITE_FULL_01",
  conversation_id: 204,
  cam_pos: new mp.Vector3(-525.492, -596.281, 42.079),
  cam_point: new mp.Vector3(-525.41, -593.977, 41.888)
}, {
  name: language["Преподаватель\nИстории"][curr_lang],
  model: "s_f_y_shop_mid",
  position: new mp.Vector3(4509.91, -4507.991, 4.052),
  rotation: 27.634,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_F_M_BEVHILLS_02_WHITE_FULL_01",
  conversation_id: 205,
  cam_pos: new mp.Vector3(4509.649, -4507.395, 4.755),
  cam_point: new mp.Vector3(4509.835, -4507.806, 4.772),
  dimension: -1,
  is_school: true
}, {
  name: language.Директор[curr_lang],
  model: "mp_g_m_pros_01",
  position: new mp.Vector3(-1016.977, -424.476, 39.628),
  rotation: 24.603,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 206,
  cam_pos: new mp.Vector3(-1017.748, -423.35, 40.28),
  cam_point: new mp.Vector3(-1011.821, -434.174, 38.61),
  dimension: -1,
  is_school: true
}, {
  name: language["Преподаватель\nЛитературы"][curr_lang],
  model: "a_f_y_bevhills_01",
  position: new mp.Vector3(-976.269, -392.174, 14.854),
  rotation: 116.013,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_F_M_BEVHILLS_02_WHITE_FULL_01",
  conversation_id: 207,
  cam_pos: new mp.Vector3(-977.815, -392.984, 15.505),
  cam_point: new mp.Vector3(-976.471, -392.321, 15.363),
  dimension: -1,
  is_school: true
}, {
  name: language["Преподаватель\nИностранного языка"][curr_lang],
  model: "cs_movpremmale",
  position: new mp.Vector3(-1065.863, -444.101, 14.854),
  rotation: 117.245,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 208,
  cam_pos: new mp.Vector3(-1067.313, -445.055, 15.502),
  cam_point: new mp.Vector3(-1066.05, -444.267, 15.417),
  dimension: -1,
  is_school: true
}, {
  name: language["Преподаватель\nГеологии"][curr_lang],
  model: "g_m_m_chigoon_01",
  position: new mp.Vector3(-3284.652, 991.848, 3.939),
  rotation: 50.965,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 209,
  cam_pos: new mp.Vector3(-3285.482, 992.347, 4.401),
  cam_point: new mp.Vector3(-3284.898, 991.89, 4.469),
  dimension: -1,
  is_school: true
}, {
  name: language["Преподаватель\nМатематики"][curr_lang],
  model: "a_f_m_soucentmc_01",
  position: new mp.Vector3(-1068.133, -440.325, 14.858),
  rotation: 117.692,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_F_M_BEVHILLS_02_WHITE_FULL_01",
  conversation_id: 210,
  cam_pos: new mp.Vector3(-1069.579, -441.211, 15.503),
  cam_point: new mp.Vector3(-1068.306, -440.494, 15.492),
  dimension: -1,
  is_school: true
}, {
  name: language["Преподаватель\nГеографии"][curr_lang],
  model: "a_m_m_business_01",
  position: new mp.Vector3(-978.432, -388.624, 14.858),
  rotation: 117.228,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 211,
  cam_pos: new mp.Vector3(-979.817, -389.521, 15.502),
  cam_point: new mp.Vector3(-978.597, -388.808, 15.465),
  dimension: -1,
  is_school: true
}, {
  name: language["Преподаватель\nСоциологии"][curr_lang],
  model: "cs_martinmadrazo",
  position: new mp.Vector3(-969.842, -405.602, 14.84),
  rotation: 151.433,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 212,
  cam_pos: new mp.Vector3(-970.051, -406.235, 15.487),
  cam_point: new mp.Vector3(-969.907, -405.822, 15.51),
  dimension: -1,
  is_school: true
}, {
  name: language["Преподаватель\nФизкультуры"][curr_lang],
  model: "u_m_y_babyd",
  position: new mp.Vector3(-986.845, -374.224, 14.874),
  rotation: 118.316,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 213,
  cam_pos: new mp.Vector3(-987.971, -374.957, 15.52),
  cam_point: new mp.Vector3(-986.317, -374.072, 15.542),
  dimension: -1,
  is_school: true
}, {
  name: language["Преподаватель\nФилософии"][curr_lang],
  model: "a_m_y_hipster_01",
  position: new mp.Vector3(-1076.403, -425.983, 14.874),
  rotation: 117.159,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 214,
  cam_pos: new mp.Vector3(-1077.821, -426.92, 15.521),
  cam_point: new mp.Vector3(-1074.817, -425.308, 15.395),
  dimension: -1,
  is_school: true
}, {
  name: language["Преподаватель\nЭтики"][curr_lang],
  model: "mp_g_m_pros_01",
  position: new mp.Vector3(-1057.745, -458.301, 14.838),
  rotation: 113.985,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 215,
  cam_pos: new mp.Vector3(-1059.221, -459.241, 15.485),
  cam_point: new mp.Vector3(-1056.206, -457.544, 15.304),
  dimension: -1,
  is_school: true
}, {
  name: "John Goldberg",
  model: "s_m_m_marine_01",
  position: new mp.Vector3(-2315.044, 3439.795, 31.474),
  rotation: 14.256,
  speech: "GENERIC_HOWS_IT_GOING",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 218,
  cam_pos: new mp.Vector3(-2315.351, 3441.002, 32.119),
  cam_point: new mp.Vector3(-2315.107, 3440.029, 32.105)
}, {
  name: "Nathan Murphy",
  model: "ig_fbisuit_01",
  position: new mp.Vector3(2587.265, -295.118, 93.078),
  rotation: -93.157,
  speech: "GENERIC_HOWS_IT_GOING",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 219,
  cam_pos: new mp.Vector3(2588.552, -295.148, 93.78),
  cam_point: new mp.Vector3(2587.504, -295.117, 93.72)
}, {
  name: "Winifred Anderson",
  model: "s_f_y_airhostess_01",
  position: new mp.Vector3(291.656, -564.903, 43.263),
  rotation: 68.824,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_F_M_BEVHILLS_01_WHITE_FULL_01",
  conversation_id: 5000,
  cam_pos: new mp.Vector3(289.891, -564.235, 43.763),
  cam_point: new mp.Vector3(291.656, -564.903, 43.763),
  questionMarker: true
}, {
  name: "Winifred Anderson",
  model: "s_f_y_airhostess_01",
  position: new mp.Vector3(1845.905, 3667.701, 33.742),
  rotation: 137.986,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_F_M_BEVHILLS_01_WHITE_FULL_01",
  conversation_id: 5000,
  cam_pos: new mp.Vector3(1844.655, 3666.151, 34.344),
  cam_point: new mp.Vector3(1845.905, 3667.701, 34.344),
  questionMarker: true
}, {
  name: "Winifred Anderson",
  model: "s_f_y_airhostess_01",
  position: new mp.Vector3(130.635, 85.199, 81.961),
  rotation: -22.608,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_F_M_BEVHILLS_01_WHITE_FULL_01",
  conversation_id: 5000,
  cam_pos: new mp.Vector3(131.573, 87.287, 82.461),
  cam_point: new mp.Vector3(130.635, 85.199, 82.461),
  questionMarker: true
}, {
  name: "",
  model: "",
  position: new mp.Vector3(-1646.569, -156.665, 57.633),
  rotation: -29.673,
  speech: "witch1",
  voice: "",
  conversation_id: 199,
  cam_pos: new mp.Vector3(-1647.519, -157.613, 60.246),
  cam_point: new mp.Vector3(-1646.364, -156.076, 59.959),
  is_halloween: true
}, {
  name: "Dominic Richardson",
  model: "a_m_y_business_03",
  position: new mp.Vector3(861.962, -2365.853, 30.346),
  rotation: 37.661,
  speech: "GENERIC_HOWS_IT_GOING",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 5002,
  cam_pos: new mp.Vector3(861.017, -2364.583, 30.846),
  cam_point: new mp.Vector3(861.962, -2365.853, 30.846)
}, {
  name: "Molly Boone",
  model: "s_f_y_shop_mid",
  position: new mp.Vector3(-276.745, 6290.26, 31.414),
  rotation: -135.573,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_F_Y_BEVHILLS_01_WHITE_FULL_01",
  conversation_id: 5012,
  cam_pos: new mp.Vector3(-275.843, 6289.39, 31.914),
  cam_point: new mp.Vector3(-276.745, 6290.26, 31.914)
}, {
  name: "John Smith",
  model: "a_m_y_business_03",
  position: new mp.Vector3(-199.597, -34.7, 50.643),
  rotation: 159.884,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_M_Y_BUSINESS_03_WHITE_MINI_01",
  conversation_id: 5013,
  cam_pos: new mp.Vector3(-199.821, -35.999, 51.143),
  cam_point: new mp.Vector3(-199.597, -34.7, 51.143)
}, {
  name: "James Caravan",
  model: "ig_lazlow",
  position: new mp.Vector3(1368.471, 6550.302, 14.91),
  rotation: -85.153,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_M_Y_BUSINESS_03_WHITE_MINI_01",
  conversation_id: 5014,
  cam_pos: new mp.Vector3(1370.062, 6550.458, 15.41),
  cam_point: new mp.Vector3(1368.471, 6550.302, 15.41)
}, {
  name: "Bob Jackson",
  model: "ig_oneil",
  position: new mp.Vector3(1282.091, -2563.021, 43.954),
  rotation: -50.271,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_M_Y_BUSINESS_03_WHITE_MINI_01",
  conversation_id: 5017,
  cam_pos: new mp.Vector3(1282.942, -2562.284, 44.568),
  cam_point: new mp.Vector3(1282.27, -2562.846, 44.398)
}, {
  name: "James Miller",
  model: "a_m_y_downtown_01",
  position: new mp.Vector3(211.444, -932.078, 29.623),
  rotation: 100.451,
  speech: "GENERIC_HOWS_IT_GOING",
  voice: "A_M_Y_GENSTREET_02_BLACK_FULL_01",
  conversation_id: 5021,
  cam_pos: new mp.Vector3(210.363, -932.202, 30.123),
  cam_point: new mp.Vector3(211.444, -932.078, 30.123),
  speechParams: "Speech_Params_Force",
  ru_only: true
}, {
  name: "Michael Johnson",
  model: "s_m_m_pilot_02",
  position: new mp.Vector3(186.651, -966.316, 47.038),
  rotation: 31.565,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_M_Y_BUSINESS_03_WHITE_MINI_01",
  conversation_id: 5022,
  cam_pos: new mp.Vector3(186.092, -965.293, 47.538),
  cam_point: new mp.Vector3(186.651, -966.316, 47.538),
  bSummer2025: true
}, {
  name: "Luke Burns",
  model: "a_m_y_smartcaspat_01",
  position: new mp.Vector3(-770.109, -26.187, 41.08),
  rotation: -101.115,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_M_Y_BUSINESS_03_WHITE_MINI_01",
  conversation_id: 5023,
  cam_pos: new mp.Vector3(-769.21, -26.42, 41.58),
  cam_point: new mp.Vector3(-770.109, -26.187, 41.58)
}, {
  name: "Josh Cook",
  model: "ig_davenorton",
  position: new mp.Vector3(-159.405, 917.556, 235.656),
  rotation: -45.636,
  speech: "PHONE_CONV3_INTRO",
  voice: "A_M_Y_BUSINESS_03_WHITE_MINI_01",
  conversation_id: 5024,
  cam_pos: new mp.Vector3(-158.801, 918.123, 236.156),
  cam_point: new mp.Vector3(-159.405, 917.556, 236.156),
  enServer: 3
}, {
  name: language.Начальник[curr_lang],
  model: "mp_s_m_armoured_01",
  position: new mp.Vector3(1788.054, 2597.74, 45.798),
  rotation: 173.011,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 6000,
  cam_pos: new mp.Vector3(1788.051, 2596.931, 46.35),
  cam_point: new mp.Vector3(1788.054, 2597.74, 46.4)
}, {
  name: "Marcus Cole",
  model: "s_m_m_highsec_04",
  position: new mp.Vector3(372.822, -574.376, 28.842),
  rotation: 166.044,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 6001,
  cam_pos: new mp.Vector3(372.571, -575.504, 29.546),
  cam_point: new mp.Vector3(372.822, -574.376, 29.546),
  dimension: 0
}, {
  name: "Daniel Brooks",
  model: "s_m_m_highsec_04",
  position: new mp.Vector3(1836.493, 3668.946, 33.678),
  rotation: -179.301,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 6002,
  cam_pos: new mp.Vector3(1836.588, 3667.125, 34.378),
  cam_point: new mp.Vector3(1836.493, 3668.946, 34.378),
  dimension: 0
}, {
  name: "Derrick Lawson",
  model: "s_m_m_highsec_04",
  position: new mp.Vector3(439.818, -1013, 28.609),
  rotation: 157.701,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 6003,
  cam_pos: new mp.Vector3(439.439, -1014.002, 29.351),
  cam_point: new mp.Vector3(439.818, -1013, 29.351),
  dimension: 0
}, {
  name: "Steven McCoy",
  model: "s_m_m_highsec_04",
  position: new mp.Vector3(2516.929, -373.902, 93.141),
  rotation: -133.504,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 6004,
  cam_pos: new mp.Vector3(2517.713, -374.793, 93.841),
  cam_point: new mp.Vector3(2516.929, -373.902, 93.841),
  dimension: 0
}, {
  name: "Caleb Turner",
  model: "s_m_m_highsec_04",
  position: new mp.Vector3(-459.075, 6031.561, 31.341),
  rotation: 125.26,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 6005,
  cam_pos: new mp.Vector3(-459.728, 6030.932, 32.041),
  cam_point: new mp.Vector3(-459.075, 6031.561, 32.041),
  dimension: 0
}, {
  name: "Jordan Reese",
  model: "s_m_m_highsec_04",
  position: new mp.Vector3(-1840.168, 3262.094, 32.942),
  rotation: 89.095,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 6006,
  cam_pos: new mp.Vector3(-1841.45, 3262.031, 33.642),
  cam_point: new mp.Vector3(-1840.168, 3262.094, 33.642),
  dimension: 0
}, {
  name: "Victor Hernandez",
  model: "s_m_m_highsec_04",
  position: new mp.Vector3(-1094.794, -260.308, 37.701),
  rotation: 123.049,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 6007,
  cam_pos: new mp.Vector3(-1095.816, -261.037, 38.393),
  cam_point: new mp.Vector3(-1094.794, -260.308, 38.393),
  dimension: 0
}, {
  name: "Isaac Howard",
  model: "s_m_m_highsec_04",
  position: new mp.Vector3(-559.944, -158.694, 30.424),
  rotation: 108.461,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 6008,
  cam_pos: new mp.Vector3(-561.105, -159.243, 31.125),
  cam_point: new mp.Vector3(-559.944, -158.694, 31.124),
  dimension: 0
}, {
  name: "Andre Mitchell",
  model: "s_m_m_highsec_04",
  position: new mp.Vector3(1805.473, 2614.807, 45.568),
  rotation: 151.863,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 6009,
  cam_pos: new mp.Vector3(1804.207, 2612.541, 46.327),
  cam_point: new mp.Vector3(1805.473, 2614.807, 46.327),
  dimension: 0
}, {
  name: "Derrick Rose",
  model: "g_m_y_ballaeast_01",
  position: new mp.Vector3(88.71, -1961.267, 20.747),
  rotation: -134.874,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 6010,
  cam_pos: new mp.Vector3(89.84, -1962.223, 21.4),
  cam_point: new mp.Vector3(88.71, -1961.267, 21.4),
  dimension: 0
}, {
  name: "Keisha Brown",
  model: "g_f_y_families_01",
  position: new mp.Vector3(-144.099, -1651.257, 32.694),
  rotation: 5.111,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 6011,
  cam_pos: new mp.Vector3(-144.241, -1650.024, 33.4),
  cam_point: new mp.Vector3(-144.099, -1651.257, 33.4),
  dimension: 0
}, {
  name: "Pedro Gutierrez",
  model: "g_m_y_mexgoon_02",
  position: new mp.Vector3(-1066.204, -1667.372, 4.537),
  rotation: 119.972,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 6012,
  cam_pos: new mp.Vector3(-1067.339, -1668.187, 5.2),
  cam_point: new mp.Vector3(-1066.204, -1667.372, 5.2),
  dimension: 0
}, {
  name: "Lamar Johnson",
  model: "a_m_m_afriamer_01",
  position: new mp.Vector3(412.418, -1507.573, 29.318),
  rotation: 118.167,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 6013,
  cam_pos: new mp.Vector3(411.412, -1508.234, 30),
  cam_point: new mp.Vector3(412.418, -1507.573, 30),
  dimension: 0
}, {
  name: "Carlos Medina",
  model: "a_m_m_soucent_03",
  position: new mp.Vector3(816.754, -2114.187, 29.385),
  rotation: 172.266,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 6014,
  cam_pos: new mp.Vector3(816.707, -2115.597, 30.068),
  cam_point: new mp.Vector3(816.754, -2114.187, 30.068),
  dimension: 0
}, {
  name: "Ice Johnson",
  model: "csb_prologuedriver",
  position: new mp.Vector3(1115.065, -663.869, 56.813),
  rotation: -170.082,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 6020,
  cam_pos: new mp.Vector3(1115.308, -665.32, 57.513),
  cam_point: new mp.Vector3(1115.065, -663.869, 57.513),
  dimension: 0,
  bChristmas2025: true
}, {
  name: "Kevin Brown",
  model: "csb_prologuedriver",
  position: new mp.Vector3(-79.613, -2502.014, 6.025),
  rotation: -116.596,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 6021,
  cam_pos: new mp.Vector3(-77.169, -2502.95, 6.806),
  cam_point: new mp.Vector3(-85.57, -2499.469, 5.666),
  dimension: 0,
  bChristmas2025: true
}, {
  name: "Matthew Carter",
  model: "a_m_y_musclbeac_01",
  position: new mp.Vector3(-1608.134, -1129.54, 2.148),
  rotation: -128.995,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 6022,
  cam_pos: new mp.Vector3(-1606.841, -1130.568, 2.844),
  cam_point: new mp.Vector3(-1608.134, -1129.54, 2.848),
  dimension: 0,
  bSummer2026: true
}, {
  name: "Darius Douglas",
  model: "u_m_m_vince",
  position: new mp.Vector3(1087.236, 221.163, -49.2),
  rotation: 178.683,
  speech: "GENERIC_HI",
  voice: "A_M_M_POLYNESIAN_01_POLYNESIAN_MINI_01",
  conversation_id: 6023,
  cam_pos: new mp.Vector3(1087.385, 218.936, -48.496),
  cam_point: new mp.Vector3(1087.331, 223.176, -48.721),
  dimension: 0
}];
global.bunker_npc = [];
mp.events.add("playerEnterColshape", _0x1493b4 => {
  if (mp.colshapes.exists(_0x1493b4) && _0x1493b4.interact_npc == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    if (_0x1493b4.bunker_interact > 0) {
      at_bunker_interact = _0x1493b4.bunker_interact;
    } else {
      at_npc_bot = _0x1493b4.index + 1;
    }
    if (npc_options[_0x1493b4.index].speech == "witch1") {
      StartCustomSound("witch_intro", "sounds/halloween/witch.ogg", 0.2);
    } else {
      let _0x870ccd = npc_bots[_0x1493b4.index];
      if (_0x1493b4.story_npc && npc_bots_story[_0x1493b4.index]) {
        _0x870ccd = npc_bots_story[_0x1493b4.index];
      }
      if (_0x870ccd) {
        mp.game.audio.playAmbientSpeechWithVoice(_0x870ccd.handle, npc_options[_0x1493b4.index].speech, npc_options[_0x1493b4.index].voice, npc_options[_0x1493b4.index].speechParams ? npc_options[_0x1493b4.index].speechParams : "SPEECH_PARAMS_FORCE_NORMAL", false);
      }
    }
  } else {
    ;
  }
});
mp.events.add("playerExitColshape", _0x4cb566 => {
  if (mp.colshapes.exists(_0x4cb566) && _0x4cb566.interact_npc == 1) {
    main_browser.execute("APPS.state.hud.interact = false;");
    at_npc_bot = 0;
    if (localcamera != null) {
      localcamera.destroy();
      localcamera = null;
    }
    if (at_bunker_interact > 0 && _0x4cb566.bunker_interact == at_bunker_interact) {
      at_bunker_interact = 0;
    }
    return;
  }
});
const gangNpcsToLoad = [{
  model: "a_m_m_fatlatin_01",
  pos: [-1108.6722412109375, -1636.678466796875, 4.615959167480469],
  rot: 8.737934112548828
}, {
  model: "s_m_y_dealer_01",
  pos: [-1043.8704833984375, -1592.55029296875, 4.930212497711182],
  rot: 256.0360107421875
}, {
  model: "a_m_y_cyclist_01",
  pos: [-1103.4351806640625, -1493.380615234375, 4.879530429840088],
  rot: 210.32579040527344
}, {
  model: "a_m_y_downtown_01",
  pos: [-1165.1162109375, -1551.06982421875, 4.3993940353393555],
  rot: 299.82135009765625
}, {
  model: "s_m_y_dwservice_01",
  pos: [-1126.1629638671875, -1453.7943115234375, 4.939870357513428],
  rot: 109.40074157714844
}, {
  model: "a_m_m_eastsa_02",
  pos: [-131.85787963867188, -1618.043212890625, 32.7634162902832],
  rot: 210.2216033935547
}, {
  model: "a_m_y_eastsa_02",
  pos: [-33.98107147216797, -1495.95703125, 30.767967224121094],
  rot: 185.28067016601562
}, {
  model: "u_m_m_edtoh",
  pos: [66.91033172607422, -1623.060302734375, 30.672636032104492],
  rot: 47.628997802734375
}, {
  model: "a_m_y_epsilon_01",
  pos: [142.75648498535156, -1520.0406494140625, 29.83696746826172],
  rot: 35.15830993652344
}, {
  model: "a_m_y_epsilon_02",
  pos: [318.540771484375, -1476.3328857421875, 29.962385177612305],
  rot: 251.35662841796875
}, {
  model: "mp_m_exarmy_01",
  pos: [455.5941162109375, -1498.0113525390625, 28.188175201416016],
  rot: 198.24050903320312
}, {
  model: "g_m_y_famdnf_01",
  pos: [308.81011962890625, -1641.8128662109375, 32.531211853027344],
  rot: 58.391475677490234
}, {
  model: "g_m_y_famfor_01",
  pos: [187.3758544921875, -1679.7261962890625, 29.739999771118164],
  rot: 329.3995056152344
}, {
  model: "a_m_m_farmer_01",
  pos: [250.4381561279297, -1769.7596435546875, 28.917165756225586],
  rot: 268.357666015625
}, {
  model: "a_m_m_fatlatin_01",
  pos: [113.81, -1764.824, 29.335],
  rot: 332.287
}, {
  model: "a_m_o_tramp_01",
  pos: [82.48138427734375, -1953.7777099609375, 20.755666732788086],
  rot: 326.97283935546875
}, {
  model: "u_m_y_fibmugger_01",
  pos: [188.88558959960938, -1844.8231201171875, 27.20120620727539],
  rot: 200.6105499267578
}, {
  model: "u_m_m_filmdirector",
  pos: [246.74111938476562, -1964.9779052734375, 21.961580276489258],
  rot: 222.9695281982422
}, {
  model: "ig_g",
  pos: [349.117431640625, -2068.77001953125, 20.938215255737305],
  rot: 291.50897216796875
}, {
  model: "g_m_y_lost_03",
  pos: [355.3297424316406, -1854.523193359375, 27.636150360107422],
  rot: 279.781982421875
}, {
  model: "csb_fos_rep",
  pos: [458.4259948730469, -1731.6048583984375, 29.05591583251953],
  rot: 43.93742370605469
}, {
  model: "ig_g",
  pos: [542.6640625, -1648.8433837890625, 28.49718475341797],
  rot: 180.8772735595703
}, {
  model: "s_m_m_gaffer_01",
  pos: [1224.7757568359375, -1511.0101318359375, 34.838165283203125],
  rot: 173.3780517578125
}, {
  model: "csb_g",
  pos: [1286.4425048828125, -1713.974609375, 55.041080474853516],
  rot: 233.46224975585938
}, {
  model: "a_m_m_genfat_01",
  pos: [1271.5621337890625, -1904.3458251953125, 38.50891876220703],
  rot: 339.7949523925781
}, {
  model: "a_m_m_genfat_02",
  pos: [1350.843505859375, -1551.6375732421875, 53.97150421142578],
  rot: 31.946435928344727
}, {
  model: "a_m_o_genstreet_01",
  pos: [-1223.6798095703125, -1310.6204833984375, 4.4863739013671875],
  rot: 276.18988037109375
}, {
  model: "a_m_y_genstreet_01",
  pos: [-1277.672119140625, -1334.9801025390625, 4.249084949493408],
  rot: 282.6983337402344
}, {
  model: "a_m_y_genstreet_02",
  pos: [-1252.8426513671875, -1219.192626953125, 5.412266731262207],
  rot: 104.78567504882812
}, {
  model: "hc_hacker",
  pos: [-1313.29150390625, -1242.8865966796875, 4.621341705322266],
  rot: 271.40264892578125
}, {
  model: "ig_hao",
  pos: [-957.8803100585938, -1105.600830078125, 2.15031099319458],
  rot: 30.72016143798828
}, {
  model: "a_m_m_hasjew_01",
  pos: [-1010.8307495117188, -1012.8524780273438, 2.150193452835083],
  rot: 39.21086502075195
}, {
  model: "a_m_y_hiker_01",
  pos: [-1111.4188232421875, -1045.8843994140625, 2.150357723236084],
  rot: 200.98556518554688
}, {
  model: "a_m_m_hillbilly_01",
  pos: [-1044.2698974609375, -1155.4039306640625, 2.158597230911255],
  rot: 23.576723098754883
}, {
  model: "a_m_m_hillbilly_02",
  pos: [-354.9808349609375, -1513.6822509765625, 27.717214584350586],
  rot: 177.81964111328125
}, {
  model: "u_m_y_hippie_01",
  pos: [-313.538818359375, -1341.9691162109375, 31.330848693847656],
  rot: 79.57408905029297
}, {
  model: "a_m_y_hipster_02",
  pos: [-176.2452850341797, -1312.12451171875, 32.29771041870117],
  rot: 112.44860076904297
}, {
  model: "csb_hugh",
  pos: [-19.242460250854492, -1309.8909912109375, 29.259878158569336],
  rot: 348.4241027832031
}, {
  model: "csb_imran",
  pos: [136.77371215820312, -1295.080810546875, 29.23272705078125],
  rot: 218.5988311767578
}, {
  model: "a_m_m_indian_01",
  pos: [265.2451477050781, -1377.4698486328125, 30.555580139160156],
  rot: 286.2606506347656
}, {
  model: "a_m_y_indian_01",
  pos: [459.78765869140625, -1315.0107421875, 29.282398223876953],
  rot: 291.779296875
}, {
  model: "csb_jackhowitzer",
  pos: [703.7060546875, -1539.5950927734375, 9.708629608154297],
  rot: 100.36161041259766
}, {
  model: "ig_jay_norris",
  pos: [1161.489501953125, -1312.933349609375, 34.74275588989258],
  rot: 172.50514221191406
}, {
  model: "ig_jimmyboston",
  pos: [980.360595703125, -1812.9693603515625, 31.3209171295166],
  rot: 217.693603515625
}, {
  model: "ig_joeminuteman",
  pos: [992.7223510742188, -1912.45751953125, 31.152734756469727],
  rot: 157.1504669189453
}, {
  model: "ig_josef",
  pos: [946.0223999023438, -2044.9317626953125, 30.170137405395508],
  rot: 91.29329681396484
}, {
  model: "a_m_y_juggalo_01",
  pos: [888.493408203125, -2001.9373779296875, 30.58584976196289],
  rot: 359.9994812011719
}, {
  model: "g_m_y_korean_01",
  pos: [1002.8483276367188, -2159.4501953125, 30.55156135559082],
  rot: 158.1061553955078
}, {
  model: "a_m_m_ktown_01",
  pos: [847.7052612304688, -2190.67236328125, 30.30517578125],
  rot: 4.957050800323486
}, {
  model: "a_m_o_ktown_01",
  pos: [827.0266723632812, -2340.332275390625, 30.334304809570312],
  rot: 170.22422790527344
}, {
  model: "a_m_y_latino_01",
  pos: [972.9524536132812, -2413.80908203125, 31.489017486572266],
  rot: 293.47027587890625
}];
function SpawnQuestionMarker(_0x1aba7e, _0x3dcfc0) {
  if (_0x1aba7e.questionMarker && story_quest_progress) {
    return mp.markers.new(32, new mp.Vector3(_0x1aba7e.position.x, _0x1aba7e.position.y, _0x1aba7e.position.z + 1.3), 0.5, {
      color: [255, 225, 0, 255],
      visible: true,
      dimension: _0x3dcfc0
    });
  }
}
function SpawnQuestionMarkers() {
  npc_options.forEach((_0x365551, _0x1684f6) => {
    if (!npc_colshapes[_0x1684f6]) {
      return;
    }
    if (npc_markers[_0x1684f6] && mp.markers.exists(npc_markers[_0x1684f6])) {
      return;
    }
    let _0x32c0fd = 0;
    if (_0x365551.dimension != null) {
      _0x32c0fd = _0x365551.dimension;
    }
    if (new_version != 1) {
      _0x32c0fd = 0;
    }
    npc_markers[_0x1684f6] = SpawnQuestionMarker(_0x365551, _0x32c0fd);
  });
}
function DestroyQuestionMarkers() {
  for (let _0x5d4c5f = 0; _0x5d4c5f < npc_markers.length; _0x5d4c5f++) {
    if (npc_markers[_0x5d4c5f] && mp.markers.exists(npc_markers[_0x5d4c5f])) {
      npc_markers[_0x5d4c5f].destroy();
    }
  }
  npc_markers = [];
}
function SpawnStoryDimensionNpcs() {
  if (story_npc_spawned) {
    return;
  }
  let _0x2dfa4c = localplayer.getVariable("REMOTE_ID") + 1;
  npc_options.forEach((_0x2acb30, _0x20aca9) => {
    if (!_0x2acb30.questionMarker) {
      return;
    }
    if (!is_school && _0x2acb30.is_school) {
      return;
    }
    if (!is_halloween && _0x2acb30.is_halloween) {
      return;
    }
    if (!bSummer2025 && _0x2acb30.bSummer2025) {
      return;
    }
    if (!bChristmas2025 && _0x2acb30.bChristmas2025) {
      return;
    }
    if (_0x2acb30.eng_only !== undefined && curr_lang == "ru" && _0x2acb30.eng_only == 1 || _0x2acb30.eng_only !== undefined && curr_lang != "ru" && _0x2acb30.eng_only == 0) {
      return;
    }
    if (_0x2acb30.ru_only && curr_lang != "ru") {
      return;
    }
    if (_0x2acb30.enServer && curr_lang != "en" && _0x2acb30.enServer != server_number) {
      return;
    }
    let _0x2ad13e = 0;
    if (_0x2acb30.dimension != null) {
      _0x2ad13e = _0x2acb30.dimension;
    }
    if (new_version != 1) {
      _0x2ad13e = 0;
    }
    if (_0x2ad13e == 0) {
      npc_labels_story[_0x20aca9] = mp.labels.new(_0x2acb30.name, new mp.Vector3(_0x2acb30.position.x, _0x2acb30.position.y, _0x2acb30.position.z + 1), {
        los: true,
        font: 0,
        drawDistance: 6,
        color: [255, 255, 255, 255],
        dimension: _0x2dfa4c
      });
      if (_0x2acb30.model) {
        npc_bots_story[_0x20aca9] = mp.peds.new(mp.game.joaat(_0x2acb30.model), _0x2acb30.position, _0x2acb30.rotation, _0x2dfa4c);
        if (_0x2acb30.santavillage != null) {
          npc_bots_story[_0x20aca9].santavillage = true;
        }
      }
      npc_colshapes_story[_0x20aca9] = mp.colshapes.newSphere(_0x2acb30.position.x, _0x2acb30.position.y, _0x2acb30.position.z, 2.5, _0x2dfa4c);
      npc_colshapes_story[_0x20aca9].index = _0x20aca9;
      npc_colshapes_story[_0x20aca9].interact_npc = true;
      npc_colshapes_story[_0x20aca9].story_npc = true;
      if (_0x2acb30.bunker_npc != null) {
        npc_colshapes_story[_0x20aca9].bunker_interact = _0x2acb30.bunker_npc;
      }
      npc_markers_story[_0x20aca9] = SpawnQuestionMarker(_0x2acb30, _0x2dfa4c);
    }
  });
  story_npc_spawned = true;
}
setTimeout(() => {
  npc_options.forEach((_0x4a2615, _0x56e672) => {
    if (!is_school && _0x4a2615.is_school) {
      return;
    }
    if (!is_halloween && _0x4a2615.is_halloween) {
      return;
    }
    if (!bSummer2025 && _0x4a2615.bSummer2025) {
      return;
    }
    if (!bChristmas2025 && _0x4a2615.bChristmas2025) {
      return;
    }
    if (_0x4a2615.eng_only !== undefined && curr_lang == "ru" && _0x4a2615.eng_only == 1 || _0x4a2615.eng_only !== undefined && curr_lang != "ru" && _0x4a2615.eng_only == 0) {
      return;
    }
    if (_0x4a2615.ru_only && curr_lang != "ru") {
      return;
    }
    if (_0x4a2615.enServer && curr_lang != "en" && _0x4a2615.enServer != server_number) {
      return;
    }
    let _0x1909b7 = 0;
    if (_0x4a2615.dimension != null) {
      _0x1909b7 = _0x4a2615.dimension;
    }
    if (new_version != 1) {
      _0x1909b7 = 0;
    }
    mp.labels.new(_0x4a2615.name, new mp.Vector3(_0x4a2615.position.x, _0x4a2615.position.y, _0x4a2615.position.z + 1), {
      los: true,
      font: 0,
      drawDistance: 6,
      color: [255, 255, 255, 255],
      dimension: _0x1909b7
    });
    if (_0x4a2615.model) {
      npc_bots[_0x56e672] = mp.peds.new(mp.game.joaat(_0x4a2615.model), _0x4a2615.position, _0x4a2615.rotation, _0x1909b7);
      if (_0x4a2615.santavillage != null) {
        npc_bots[_0x56e672].santavillage = true;
      }
      if (_0x4a2615.bunker_npc != null) {
        bunker_npc.push(npc_bots[_0x56e672]);
      }
    }
    npc_colshapes[_0x56e672] = mp.colshapes.newSphere(_0x4a2615.position.x, _0x4a2615.position.y, _0x4a2615.position.z, 2.5, _0x1909b7);
    npc_colshapes[_0x56e672].index = _0x56e672;
    npc_colshapes[_0x56e672].interact_npc = true;
    if (_0x4a2615.bunker_npc != null) {
      npc_colshapes[_0x56e672].bunker_interact = _0x4a2615.bunker_npc;
    }
  });
  SpawnQuestionMarkers();
  gangNpcsToLoad.forEach(_0x1af1b3 => {
    mp.peds.new(mp.game.joaat(_0x1af1b3.model), new mp.Vector3(_0x1af1b3.pos[0], _0x1af1b3.pos[1], _0x1af1b3.pos[2]), _0x1af1b3.rot, _0x90b1bf => {}, 0);
  });
}, 500);
global.DestroyStoryDimensionNpcs = function () {
  for (let _0x4c6b71 = 0; _0x4c6b71 < npc_bots_story.length; _0x4c6b71++) {
    if (npc_bots_story[_0x4c6b71] && mp.peds.exists(npc_bots_story[_0x4c6b71])) {
      npc_bots_story[_0x4c6b71].destroy();
    }
  }
  for (let _0x2e936c = 0; _0x2e936c < npc_colshapes_story.length; _0x2e936c++) {
    if (npc_colshapes_story[_0x2e936c] && mp.colshapes.exists(npc_colshapes_story[_0x2e936c])) {
      npc_colshapes_story[_0x2e936c].destroy();
    }
  }
  for (let _0xdbc0bc = 0; _0xdbc0bc < npc_labels_story.length; _0xdbc0bc++) {
    if (npc_labels_story[_0xdbc0bc] && mp.labels.exists(npc_labels_story[_0xdbc0bc])) {
      npc_labels_story[_0xdbc0bc].destroy();
    }
  }
  for (let _0x4e9d7a = 0; _0x4e9d7a < npc_markers_story.length; _0x4e9d7a++) {
    if (npc_markers_story[_0x4e9d7a] && mp.markers.exists(npc_markers_story[_0x4e9d7a])) {
      npc_markers_story[_0x4e9d7a].destroy();
    }
  }
  npc_bots_story = [];
  npc_colshapes_story = [];
  npc_labels_story = [];
  npc_markers_story = [];
  story_npc_spawned = false;
  DestroyQuestionMarkers();
};
global.UpdateStoryDimensionNpcs = function () {
  if (loggedin && story_quest_progress != 0) {
    SpawnQuestionMarkers();
    if (localplayer.dimension == localplayer.getVariable("REMOTE_ID") + 1) {
      SpawnStoryDimensionNpcs();
    }
  }
};