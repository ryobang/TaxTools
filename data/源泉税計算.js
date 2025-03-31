const taxTable = [
    [88000, 89000, 130, 0, 0, 0, 0, 0, 0, 0, 3200],
    [89000, 90000, 180, 0, 0, 0, 0, 0, 0, 0, 3200],
    [90000, 91000, 230, 0, 0, 0, 0, 0, 0, 0, 3200],
    [91000, 92000, 290, 0, 0, 0, 0, 0, 0, 0, 3200],
    [92000, 93000, 340, 0, 0, 0, 0, 0, 0, 0, 3300],
    [93000, 94000, 390, 0, 0, 0, 0, 0, 0, 0, 3300],
    [94000, 95000, 440, 0, 0, 0, 0, 0, 0, 0, 3300],
    [95000, 96000, 490, 0, 0, 0, 0, 0, 0, 0, 3400],
    [96000, 97000, 540, 0, 0, 0, 0, 0, 0, 0, 3400],
    [97000, 98000, 590, 0, 0, 0, 0, 0, 0, 0, 3500],
    [98000, 99000, 640, 0, 0, 0, 0, 0, 0, 0, 3500],
    [99000, 101000, 720, 0, 0, 0, 0, 0, 0, 0, 3600],
    [101000, 103000, 830, 0, 0, 0, 0, 0, 0, 0, 3600],
    [103000, 105000, 930, 0, 0, 0, 0, 0, 0, 0, 3700],
    [105000, 107000, 1030, 0, 0, 0, 0, 0, 0, 0, 3800],
    [107000, 109000, 1130, 0, 0, 0, 0, 0, 0, 0, 3800],
    [109000, 111000, 1240, 0, 0, 0, 0, 0, 0, 0, 3900],
    [111000, 113000, 1340, 0, 0, 0, 0, 0, 0, 0, 4000],
    [113000, 115000, 1440, 0, 0, 0, 0, 0, 0, 0, 4100],
    [115000, 117000, 1540, 0, 0, 0, 0, 0, 0, 0, 4100],
    [117000, 119000, 1640, 0, 0, 0, 0, 0, 0, 0, 4200],
    [119000, 121000, 1750, 120, 0, 0, 0, 0, 0, 0, 4300],
    [121000, 123000, 1850, 220, 0, 0, 0, 0, 0, 0, 4500],
    [123000, 125000, 1950, 330, 0, 0, 0, 0, 0, 0, 4800],
    [125000, 127000, 2050, 430, 0, 0, 0, 0, 0, 0, 5100],
    [127000, 129000, 2150, 530, 0, 0, 0, 0, 0, 0, 5400],
    [129000, 131000, 2260, 630, 0, 0, 0, 0, 0, 0, 5700],
    [131000, 133000, 2360, 740, 0, 0, 0, 0, 0, 0, 6000],
    [133000, 135000, 2460, 840, 0, 0, 0, 0, 0, 0, 6300],
    [135000, 137000, 2550, 930, 0, 0, 0, 0, 0, 0, 6600],
    [137000, 139000, 2610, 990, 0, 0, 0, 0, 0, 0, 6800],
    [139000, 141000, 2680, 1050, 0, 0, 0, 0, 0, 0, 7100],
    [141000, 143000, 2740, 1110, 0, 0, 0, 0, 0, 0, 7500],
    [143000, 145000, 2800, 1170, 0, 0, 0, 0, 0, 0, 7800],
    [145000, 147000, 2860, 1240, 0, 0, 0, 0, 0, 0, 8100],
    [147000, 149000, 2920, 1300, 0, 0, 0, 0, 0, 0, 8400],
    [149000, 151000, 2980, 1360, 0, 0, 0, 0, 0, 0, 8700],
    [151000, 153000, 3050, 1430, 0, 0, 0, 0, 0, 0, 9000],
    [153000, 155000, 3120, 1500, 0, 0, 0, 0, 0, 0, 9300],
    [155000, 157000, 3200, 1570, 0, 0, 0, 0, 0, 0, 9600],
    [157000, 159000, 3270, 1640, 0, 0, 0, 0, 0, 0, 9900],
    [159000, 161000, 3340, 1720, 100, 0, 0, 0, 0, 0, 10200],
    [161000, 163000, 3410, 1790, 170, 0, 0, 0, 0, 0, 10500],
    [163000, 165000, 3480, 1860, 250, 0, 0, 0, 0, 0, 10800],
    [165000, 167000, 3550, 1930, 320, 0, 0, 0, 0, 0, 11100],
    [167000, 169000, 3620, 2000, 390, 0, 0, 0, 0, 0, 11400],
    [169000, 171000, 3700, 2070, 460, 0, 0, 0, 0, 0, 11700],
    [171000, 173000, 3770, 2140, 530, 0, 0, 0, 0, 0, 12000],
    [173000, 175000, 3840, 2220, 600, 0, 0, 0, 0, 0, 12400],
    [175000, 177000, 3910, 2290, 670, 0, 0, 0, 0, 0, 12700],
    [177000, 179000, 3980, 2360, 750, 0, 0, 0, 0, 0, 13200],
    [179000, 181000, 4050, 2430, 820, 0, 0, 0, 0, 0, 13900],
    [181000, 183000, 4120, 2500, 890, 0, 0, 0, 0, 0, 14600],
    [183000, 185000, 4200, 2570, 960, 0, 0, 0, 0, 0, 15300],
    [185000, 187000, 4270, 2640, 1030, 0, 0, 0, 0, 0, 16000],
    [187000, 189000, 4340, 2720, 1100, 0, 0, 0, 0, 0, 16700],
    [189000, 191000, 4410, 2790, 1170, 0, 0, 0, 0, 0, 17500],
    [191000, 193000, 4480, 2860, 1250, 0, 0, 0, 0, 0, 18100],
    [193000, 195000, 4550, 2930, 1320, 0, 0, 0, 0, 0, 18800],
    [195000, 197000, 4630, 3000, 1390, 0, 0, 0, 0, 0, 19500],
    [197000, 199000, 4700, 3070, 1460, 0, 0, 0, 0, 0, 20200],
    [199000, 201000, 4770, 3140, 1530, 0, 0, 0, 0, 0, 20900],
    [201000, 203000, 4840, 3220, 1600, 0, 0, 0, 0, 0, 21500],
    [203000, 205000, 4910, 3290, 1670, 0, 0, 0, 0, 0, 22200],
    [205000, 207000, 4980, 3360, 1750, 130, 0, 0, 0, 0, 22700],
    [207000, 209000, 5050, 3430, 1820, 200, 0, 0, 0, 0, 23300],
    [209000, 211000, 5130, 3500, 1890, 280, 0, 0, 0, 0, 23900],
    [211000, 213000, 5200, 3570, 1960, 350, 0, 0, 0, 0, 24400],
    [213000, 215000, 5270, 3640, 2030, 420, 0, 0, 0, 0, 25000],
    [215000, 217000, 5340, 3720, 2100, 490, 0, 0, 0, 0, 25500],
    [217000, 219000, 5410, 3790, 2170, 560, 0, 0, 0, 0, 26100],
    [219000, 221000, 5480, 3860, 2250, 630, 0, 0, 0, 0, 26800],
    [221000, 224000, 5560, 3950, 2340, 710, 0, 0, 0, 0, 27400],
    [224000, 227000, 5680, 4060, 2440, 830, 0, 0, 0, 0, 28400],
    [227000, 230000, 5780, 4170, 2550, 930, 0, 0, 0, 0, 29300],
    [230000, 233000, 5890, 4280, 2650, 1040, 0, 0, 0, 0, 30300],
    [233000, 236000, 5990, 4380, 2770, 1140, 0, 0, 0, 0, 31300],
    [236000, 239000, 6110, 4490, 2870, 1260, 0, 0, 0, 0, 32400],
    [239000, 242000, 6210, 4590, 2980, 1360, 0, 0, 0, 0, 33400],
    [242000, 245000, 6320, 4710, 3080, 1470, 0, 0, 0, 0, 34400],
    [245000, 248000, 6420, 4810, 3200, 1570, 0, 0, 0, 0, 35400],
    [248000, 251000, 6530, 4920, 3300, 1680, 0, 0, 0, 0, 36400],
    [251000, 254000, 6640, 5020, 3410, 1790, 170, 0, 0, 0, 37500],
    [254000, 257000, 6750, 5140, 3510, 1900, 290, 0, 0, 0, 38500],
    [257000, 260000, 6850, 5240, 3620, 2000, 390, 0, 0, 0, 39400],
    [260000, 263000, 6960, 5350, 3730, 2110, 500, 0, 0, 0, 40400],
    [263000, 266000, 7070, 5450, 3840, 2220, 600, 0, 0, 0, 41500],
    [266000, 269000, 7180, 5560, 3940, 2330, 710, 0, 0, 0, 42500],
    [269000, 272000, 7280, 5670, 4050, 2430, 820, 0, 0, 0, 43500],
    [272000, 275000, 7390, 5780, 4160, 2540, 930, 0, 0, 0, 44500],
    [275000, 278000, 7490, 5880, 4270, 2640, 1030, 0, 0, 0, 45500],
    [278000, 281000, 7610, 5990, 4370, 2760, 1140, 0, 0, 0, 46600],
    [281000, 284000, 7710, 6100, 4480, 2860, 1250, 0, 0, 0, 47600],
    [284000, 287000, 7820, 6210, 4580, 2970, 1360, 0, 0, 0, 48600],
    [287000, 290000, 7920, 6310, 4700, 3070, 1460, 0, 0, 0, 49700],
    [290000, 293000, 8040, 6420, 4800, 3190, 1570, 0, 0, 0, 50900],
    [293000, 296000, 8140, 6520, 4910, 3290, 1670, 0, 0, 0, 52100],
    [296000, 299000, 8250, 6640, 5010, 3400, 1790, 160, 0, 0, 52900],
    [299000, 302000, 8420, 6740, 5130, 3510, 1890, 280, 0, 0, 53700],
    [302000, 305000, 8670, 6860, 5250, 3630, 2010, 400, 0, 0, 54500],
    [305000, 308000, 8910, 6980, 5370, 3760, 2130, 520, 0, 0, 55200],
    [308000, 311000, 9160, 7110, 5490, 3880, 2260, 640, 0, 0, 56100],
    [311000, 314000, 9400, 7230, 5620, 4000, 2380, 770, 0, 0, 56900],
    [314000, 317000, 9650, 7350, 5740, 4120, 2500, 890, 0, 0, 57800],
    [317000, 320000, 9890, 7470, 5860, 4250, 2620, 1010, 0, 0, 58800],
    [320000, 323000, 10140, 7600, 5980, 4370, 2750, 1130, 0, 0, 59800],
    [323000, 326000, 10380, 7720, 6110, 4490, 2870, 1260, 0, 0, 60900],
    [326000, 329000, 10630, 7840, 6230, 4610, 2990, 1380, 0, 0, 61900],
    [329000, 332000, 10870, 7960, 6350, 4740, 3110, 1500, 0, 0, 62900],
    [332000, 335000, 11120, 8090, 6470, 4860, 3240, 1620, 0, 0, 63900],
    [335000, 338000, 11360, 8210, 6600, 4980, 3360, 1750, 130, 0, 64900],
    [338000, 341000, 11610, 8370, 6720, 5110, 3480, 1870, 260, 0, 66000],
    [341000, 344000, 11850, 8620, 6840, 5230, 3600, 1990, 380, 0, 67000],
    [344000, 347000, 12100, 8860, 6960, 5350, 3730, 2110, 500, 0, 68000],
    [347000, 350000, 12340, 9110, 7090, 5470, 3850, 2240, 620, 0, 69000],
    [350000, 353000, 12590, 9350, 7210, 5600, 3970, 2360, 750, 0, 70000],
    [353000, 356000, 12830, 9600, 7330, 5720, 4090, 2480, 870, 0, 71100],
    [356000, 359000, 13080, 9840, 7450, 5840, 4220, 2600, 990, 0, 72100],
    [359000, 362000, 13320, 10090, 7580, 5960, 4340, 2730, 1110, 0, 73100],
    [362000, 365000, 13570, 10330, 7700, 6090, 4460, 2850, 1240, 0, 74200],
    [365000, 368000, 13810, 10580, 7820, 6210, 4580, 2970, 1360, 0, 75200],
    [368000, 371000, 14060, 10820, 7940, 6330, 4710, 3090, 1480, 0, 76200],
    [371000, 374000, 14300, 11070, 8070, 6450, 4830, 3220, 1600, 0, 77100],
    [374000, 377000, 14550, 11310, 8190, 6580, 4950, 3340, 1730, 100, 78100],
    [377000, 380000, 14790, 11560, 8320, 6700, 5070, 3460, 1850, 220, 79000],
    [380000, 383000, 15040, 11800, 8570, 6820, 5200, 3580, 1970, 350, 79900],
    [383000, 386000, 15280, 12050, 8810, 6940, 5320, 3710, 2090, 470, 81400],
    [386000, 389000, 15530, 12290, 9060, 7070, 5440, 3830, 2220, 590, 83100],
    [389000, 392000, 15770, 12540, 9300, 7190, 5560, 3950, 2340, 710, 84700],
    [392000, 395000, 16020, 12780, 9550, 7310, 5690, 4070, 2460, 840, 86500],
    [395000, 398000, 16260, 13030, 9790, 7430, 5810, 4200, 2580, 960, 88200],
    [398000, 401000, 16510, 13270, 10040, 7560, 5930, 4320, 2710, 1080, 89800],
    [401000, 404000, 16750, 13520, 10280, 7680, 6050, 4440, 2830, 1200, 91600],
    [404000, 407000, 17000, 13760, 10530, 7800, 6180, 4560, 2950, 1330, 93300],
    [407000, 410000, 17240, 14010, 10770, 7920, 6300, 4690, 3070, 1450, 95000],
    [410000, 413000, 17490, 14250, 11020, 8050, 6420, 4810, 3200, 1570, 96700],
    [413000, 416000, 17730, 14500, 11260, 8170, 6540, 4930, 3320, 1690, 98300],
    [416000, 419000, 17980, 14740, 11510, 8290, 6670, 5050, 3440, 1820, 100100],
    [419000, 422000, 18220, 14990, 11750, 8530, 6790, 5180, 3560, 1940, 101800],
    [422000, 425000, 18470, 15230, 12000, 8770, 6910, 5300, 3690, 2060, 103400],
    [425000, 428000, 18710, 15480, 12240, 9020, 7030, 5420, 3810, 2180, 105200],
    [428000, 431000, 18960, 15720, 12490, 9260, 7160, 5540, 3930, 2310, 106900],
    [431000, 434000, 19210, 15970, 12730, 9510, 7280, 5670, 4050, 2430, 108500],
    [434000, 437000, 19450, 16210, 12980, 9750, 7400, 5790, 4180, 2550, 110300],
    [437000, 440000, 19700, 16460, 13220, 10000, 7520, 5910, 4300, 2680, 112000],
    [440000, 443000, 20090, 16700, 13470, 10240, 7650, 6030, 4420, 2800, 113600],
    [443000, 446000, 20580, 16950, 13710, 10490, 7770, 6160, 4540, 2920, 115400],
    [446000, 449000, 21070, 17190, 13960, 10730, 7890, 6280, 4670, 3040, 117100],
    [449000, 452000, 21560, 17440, 14200, 10980, 8010, 6400, 4790, 3170, 118700],
    [452000, 455000, 22050, 17680, 14450, 11220, 8140, 6520, 4910, 3290, 120500],
    [455000, 458000, 22540, 17930, 14690, 11470, 8260, 6650, 5030, 3410, 122200],
    [458000, 461000, 23030, 18170, 14940, 11710, 8470, 6770, 5160, 3530, 123800],
    [461000, 464000, 23520, 18420, 15180, 11960, 8720, 6890, 5280, 3660, 125600],
    [464000, 467000, 24010, 18660, 15430, 12200, 8960, 7010, 5400, 3780, 127300],
    [467000, 470000, 24500, 18910, 15670, 12450, 9210, 7140, 5520, 3900, 129000],
    [470000, 473000, 24990, 19150, 15920, 12690, 9450, 7260, 5650, 4020, 130700],
    [473000, 476000, 25480, 19400, 16160, 12940, 9700, 7380, 5770, 4150, 132300],
    [476000, 479000, 25970, 19640, 16410, 13180, 9940, 7500, 5890, 4270, 134000],
    [479000, 482000, 26460, 20000, 16650, 13430, 10190, 7630, 6010, 4390, 135600],
    [482000, 485000, 26950, 20490, 16900, 13670, 10430, 7750, 6140, 4510, 137200],
    [485000, 488000, 27440, 20980, 17140, 13920, 10680, 7870, 6260, 4640, 138800],
    [488000, 491000, 27930, 21470, 17390, 14160, 10920, 7990, 6380, 4760, 140400],
    [491000, 494000, 28420, 21960, 17630, 14410, 11170, 8120, 6500, 4880, 142000],
    [494000, 497000, 28910, 22450, 17880, 14650, 11410, 8240, 6630, 5000, 143700],
    [497000, 500000, 29400, 22940, 18120, 14900, 11660, 8420, 6750, 5130, 145200],
    [500000, 503000, 29890, 23430, 18370, 15140, 11900, 8670, 6870, 5250, 146800],
    [503000, 506000, 30380, 23920, 18610, 15390, 12150, 8910, 6990, 5370, 148500],
    [506000, 509000, 30880, 24410, 18860, 15630, 12390, 9160, 7120, 5490, 150100],
    [509000, 512000, 31370, 24900, 19100, 15880, 12640, 9400, 7240, 5620, 151600],
    [512000, 515000, 31860, 25390, 19350, 16120, 12890, 9650, 7360, 5740, 153300],
    [515000, 518000, 32350, 25880, 19590, 16370, 13130, 9890, 7480, 5860, 154900],
    [518000, 521000, 32840, 26370, 19900, 16610, 13380, 10140, 7610, 5980, 156500],
    [521000, 524000, 33330, 26860, 20390, 16860, 13620, 10380, 7730, 6110, 158100],
    [524000, 527000, 33820, 27350, 20880, 17100, 13870, 10630, 7850, 6230, 159600],
    [527000, 530000, 34310, 27840, 21370, 17350, 14110, 10870, 7970, 6350, 161000],
    [530000, 533000, 34800, 28330, 21860, 17590, 14360, 11120, 8100, 6470, 162500],
    [533000, 536000, 35290, 28820, 22350, 17840, 14600, 11360, 8220, 6600, 164000],
    [536000, 539000, 35780, 29310, 22840, 18080, 14850, 11610, 8380, 6720, 165400],
    [539000, 542000, 36270, 29800, 23330, 18330, 15090, 11850, 8630, 6840, 166900],
    [542000, 545000, 36760, 30290, 23820, 18570, 15340, 12100, 8870, 6960, 168400],
    [545000, 548000, 37250, 30780, 24310, 18820, 15580, 12340, 9120, 7090, 169900],
    [548000, 551000, 37740, 31270, 24800, 19060, 15830, 12590, 9360, 7210, 171300],
    [551000, 554000, 38280, 31810, 25340, 19330, 16100, 12860, 9630, 7350, 172800],
    [554000, 557000, 38830, 32370, 25890, 19600, 16380, 13140, 9900, 7480, 174300],
    [557000, 560000, 39380, 32920, 26440, 19980, 16650, 13420, 10180, 7630, 175700],
    [560000, 563000, 39930, 33470, 27000, 20530, 16930, 13690, 10460, 7760, 177200],
    [563000, 566000, 40480, 34020, 27550, 21080, 17200, 13970, 10730, 7900, 178700],
    [566000, 569000, 41030, 34570, 28100, 21630, 17480, 14240, 11010, 8040, 180100],
    [569000, 572000, 41590, 35120, 28650, 22190, 17760, 14520, 11280, 8180, 181600],
    [572000, 575000, 42140, 35670, 29200, 22740, 18030, 14790, 11560, 8330, 183100],
    [575000, 578000, 42690, 36230, 29750, 23290, 18310, 15070, 11830, 8610, 184600],
    [578000, 581000, 43240, 36780, 30300, 23840, 18580, 15350, 12110, 8880, 186000],
    [581000, 584000, 43790, 37330, 30850, 24390, 18860, 15620, 12380, 9160, 187500],
    [584000, 587000, 44340, 37880, 31410, 24940, 19130, 15900, 12660, 9430, 189000],
    [587000, 590000, 44890, 38430, 31960, 25490, 19410, 16170, 12940, 9710, 190400],
    [590000, 593000, 45440, 38980, 32510, 26050, 19680, 16450, 13210, 9990, 191900],
    [593000, 596000, 46000, 39530, 33060, 26600, 20130, 16720, 13490, 10260, 193400],
    [596000, 599000, 46550, 40080, 33610, 27150, 20690, 17000, 13760, 10540, 194800],
    [599000, 602000, 47100, 40640, 34160, 27700, 21240, 17280, 14040, 10810, 196300],
    [602000, 605000, 47650, 41190, 34710, 28250, 21790, 17550, 14310, 11090, 197800],
    [605000, 608000, 48200, 41740, 35270, 28800, 22340, 17830, 14590, 11360, 199300],
    [608000, 611000, 48750, 42290, 35820, 29350, 22890, 18100, 14870, 11640, 200700],
    [611000, 614000, 49300, 42840, 36370, 29910, 23440, 18380, 15140, 11920, 202200],
    [614000, 617000, 49860, 43390, 36920, 30460, 23990, 18650, 15420, 12190, 203700],
    [617000, 620000, 50410, 43940, 37470, 31010, 24540, 18930, 15690, 12470, 205100],
    [620000, 623000, 50960, 44500, 38020, 31560, 25100, 19210, 15970, 12740, 206700],
    [623000, 626000, 51510, 45050, 38570, 32110, 25650, 19480, 16240, 13020, 208100],
    [626000, 629000, 52060, 45600, 39120, 32660, 26200, 19760, 16520, 13290, 209500],
    [629000, 632000, 52610, 46150, 39680, 33210, 26750, 20280, 16800, 13570, 211000],
    [632000, 635000, 53160, 46700, 40230, 33760, 27300, 20830, 17070, 13840, 212500],
    [635000, 638000, 53710, 47250, 40780, 34320, 27850, 21380, 17350, 14120, 214000],
    [638000, 641000, 54270, 47800, 41330, 34870, 28400, 21930, 17620, 14400, 214900],
    [641000, 644000, 54820, 48350, 41880, 35420, 28960, 22480, 17900, 14670, 215900],
    [644000, 647000, 55370, 48910, 42430, 35970, 29510, 23030, 18170, 14950, 217000],
    [647000, 650000, 55920, 49460, 42980, 36520, 30060, 23590, 18450, 15220, 218000],
    [650000, 653000, 56470, 50010, 43540, 37070, 30610, 24140, 18730, 15500, 219000],
    [653000, 656000, 57020, 50560, 44090, 37620, 31160, 24690, 19000, 15770, 220000],
    [656000, 659000, 57570, 51110, 44640, 38180, 31710, 25240, 19280, 16050, 221000],
    [659000, 662000, 58130, 51660, 45190, 38730, 32260, 25790, 19550, 16330, 222100],
    [662000, 665000, 58680, 52210, 45740, 39280, 32810, 26340, 19880, 16600, 223100],
    [665000, 668000, 59230, 52770, 46290, 39830, 33370, 26890, 20430, 16880, 224100],
    [668000, 671000, 59780, 53320, 46840, 40380, 33920, 27440, 20980, 17150, 225000],
    [671000, 674000, 60330, 53870, 47390, 40930, 34470, 28000, 21530, 17430, 226000],
    [674000, 677000, 60880, 54420, 47950, 41480, 35020, 28550, 22080, 17700, 227100],
    [677000, 680000, 61430, 54970, 48500, 42030, 35570, 29100, 22640, 17980, 228100],
    [680000, 683000, 61980, 55520, 49050, 42590, 36120, 29650, 23190, 18260, 229100],
    [683000, 686000, 62540, 56070, 49600, 43140, 36670, 30200, 23740, 18530, 230400],
    [686000, 689000, 63090, 56620, 50150, 43690, 37230, 30750, 24290, 18810, 232100],
    [689000, 692000, 63640, 57180, 50700, 44240, 37780, 31300, 24840, 19080, 233600],
    [692000, 695000, 64190, 57730, 51250, 44790, 38330, 31860, 25390, 19360, 235100],
    [695000, 698000, 64740, 58280, 51810, 45340, 38880, 32410, 25940, 19630, 236700],
    [698000, 701000, 65290, 58830, 52360, 45890, 39430, 32960, 26490, 20030, 238200],
    [701000, 704000, 65840, 59380, 52910, 46450, 39980, 33510, 27050, 20580, 239700],
    [704000, 707000, 66400, 59930, 53460, 47000, 40530, 34060, 27600, 21130, 241300],
    [707000, 710000, 66960, 60480, 54020, 47550, 41090, 34620, 28150, 21690, 242900],
    [710000, 713000, 67570, 61100, 54630, 48160, 41700, 35230, 28760, 22300, 244400],
    [713000, 716000, 68180, 61710, 55250, 48770, 42310, 35850, 29370, 22910, 246000],
    [716000, 719000, 68790, 62320, 55860, 49390, 42920, 36460, 29990, 23520, 247500],
    [719000, 722000, 69410, 62930, 56470, 50000, 43540, 37070, 30600, 24140, 249000],
    [722000, 725000, 70020, 63550, 57080, 50610, 44150, 37690, 31210, 24750, 250600],
    [725000, 728000, 70630, 64160, 57700, 51220, 44760, 38300, 31820, 25360, 252200],
    [728000, 731000, 71250, 64770, 58310, 51840, 45370, 38910, 32440, 25970, 253700],
    [731000, 734000, 71860, 65380, 58920, 52450, 45990, 39520, 33050, 26590, 255300],
    [734000, 737000, 72470, 66000, 59530, 53060, 46600, 40140, 33660, 27200, 256800],
    [737000, 740000, 73080, 66610, 60150, 53670, 47210, 40750, 34270, 27810, 258300]
  ];


function 源泉税計算(金額, 人数) {
    let 税率 = null;

    // 金額が88000未満の場合は0を返す
    if (金額 < 88000) {
        return 0;
    }

    // 金額が表の最大値（740000）を超える場合は0を返す
    if (金額 >= 740000) {
        return 0;
    }

    // 人数の調整
    if (人数 >= 8) {
        人数 = 7;
    } else if (人数 === -1) {
        人数 = 8;
    }

    // taxTableから金額に基づいて税率を取得
    for (let i = 0; i < taxTable.length; i++) {
        if (金額 < taxTable[i][0]) {
            税率 = taxTable[i - 1][人数 + 2]; // 1つ上の行の該当列
            break;
        }
    }

    // 税率が見つからない場合は0を返す
    if (税率 === null) {
        return 0;
    }

    return 税率; // 計算された税率を返す
}
