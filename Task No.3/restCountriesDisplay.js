// --------------------------------------------------------------------------------------------------------------------------------------
//                   Using restcountries API URL, display all country flags, names, regions, sub-region and populations
// --------------------------------------------------------------------------------------------------------------------------------------
//input
var xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all", true);

xhr.onload = function () {
  var allcountries = JSON.parse(xhr.responseText);
  console.log(allcountries);
  
  for (var i = 0; i < allcountries.length; i++){
    console.log(allcountries[i].name.common + ": " + allcountries[i].flag);
    console.log("Populations: ", allcountries[i].population);
    console.log("Regions: ", allcountries[i].region);
    console.log("Sub-regions: ", allcountries[i].subregion);
    } 
};
xhr.send();
// --------------------------------------------------------------------------------------------------------------------------------------
//output
// Cyprus: 🇨🇾
// index.js:10 Populations:  1207361
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Southern Europe
// index.js:9 Eritrea: 🇪🇷
// index.js:10 Populations:  5352000
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Eastern Africa
// index.js:9 Liberia: 🇱🇷
// index.js:10 Populations:  5057677
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Western Africa
// index.js:9 Bermuda: 🇧🇲
// index.js:10 Populations:  63903
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  North America
// index.js:9 Vatican City: 🇻🇦
// index.js:10 Populations:  451
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Southern Europe
// index.js:9 Cook Islands: 🇨🇰
// index.js:10 Populations:  18100
// index.js:11 Regions:  Oceania
// index.js:12 Sub-regions:  Polynesia
// index.js:9 Somalia: 🇸🇴
// index.js:10 Populations:  15893219
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Eastern Africa
// index.js:9 Zambia: 🇿🇲
// index.js:10 Populations:  18383956
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Eastern Africa
// index.js:9 Venezuela: 🇻🇪
// index.js:10 Populations:  28435943
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  South America
// index.js:9 Turkmenistan: 🇹🇲
// index.js:10 Populations:  6031187
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Central Asia
// index.js:9 Albania: 🇦🇱
// index.js:10 Populations:  2837743
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Southeast Europe
// index.js:9 Croatia: 🇭🇷
// index.js:10 Populations:  4047200
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Southeast Europe
// index.js:9 United Kingdom: 🇬🇧
// index.js:10 Populations:  67215293
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Northern Europe
// index.js:9 Sudan: 🇸🇩
// index.js:10 Populations:  43849269
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Northern Africa
// index.js:9 Timor-Leste: 🇹🇱
// index.js:10 Populations:  1318442
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  South-Eastern Asia
// index.js:9 Republic of the Congo: 🇨🇬
// index.js:10 Populations:  5657000
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Middle Africa
// index.js:9 Azerbaijan: 🇦🇿
// index.js:10 Populations:  10110116
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Western Asia
// index.js:9 Kenya: 🇰🇪
// index.js:10 Populations:  53771300
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Eastern Africa
// index.js:9 American Samoa: 🇦🇸
// index.js:10 Populations:  55197
// index.js:11 Regions:  Oceania
// index.js:12 Sub-regions:  Polynesia
// index.js:9 Ivory Coast: 🇨🇮
// index.js:10 Populations:  26378275
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Western Africa
// index.js:9 Senegal: 🇸🇳
// index.js:10 Populations:  16743930
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Western Africa
// index.js:9 Vietnam: 🇻🇳
// index.js:10 Populations:  97338583
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  South-Eastern Asia
// index.js:9 El Salvador: 🇸🇻
// index.js:10 Populations:  6486201
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Central America
// index.js:9 Afghanistan: 🇦🇫
// index.js:10 Populations:  40218234
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Southern Asia
// index.js:9 Saint Martin: 🇲🇫
// index.js:10 Populations:  38659
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Caribbean
// index.js:9 Latvia: 🇱🇻
// index.js:10 Populations:  1901548
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Northern Europe
// index.js:9 Guatemala: 🇬🇹
// index.js:10 Populations:  16858333
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Central America
// index.js:9 Kuwait: 🇰🇼
// index.js:10 Populations:  4270563
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Western Asia
// index.js:9 São Tomé and Príncipe: 🇸🇹
// index.js:10 Populations:  219161
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Middle Africa
// index.js:9 Kyrgyzstan: 🇰🇬
// index.js:10 Populations:  6591600
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Central Asia
// index.js:9 Poland: 🇵🇱
// index.js:10 Populations:  37950802
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Central Europe
// index.js:9 Guam: 🇬🇺
// index.js:10 Populations:  168783
// index.js:11 Regions:  Oceania
// index.js:12 Sub-regions:  Micronesia
// index.js:9 Ghana: 🇬🇭
// index.js:10 Populations:  31072945
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Western Africa
// index.js:9 Lithuania: 🇱🇹
// index.js:10 Populations:  2794700
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Northern Europe
// index.js:9 Armenia: 🇦🇲
// index.js:10 Populations:  2963234
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Western Asia
// index.js:9 Jersey: 🇯🇪
// index.js:10 Populations:  100800
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Northern Europe
// index.js:9 Grenada: 🇬🇩
// index.js:10 Populations:  112519
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Caribbean
// index.js:9 Tajikistan: 🇹🇯
// index.js:10 Populations:  9537642
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Central Asia
// index.js:9 Ethiopia: 🇪🇹
// index.js:10 Populations:  114963583
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Eastern Africa
// index.js:9 Western Sahara: 🇪🇭
// index.js:10 Populations:  510713
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Northern Africa
// index.js:9 Morocco: 🇲🇦
// index.js:10 Populations:  36910558
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Northern Africa
// index.js:9 Puerto Rico: 🇵🇷
// index.js:10 Populations:  3194034
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Caribbean
// index.js:9 Christmas Island: 🇨🇽
// index.js:10 Populations:  2072
// index.js:11 Regions:  Oceania
// index.js:12 Sub-regions:  Australia and New Zealand
// index.js:9 New Zealand: 🇳🇿
// index.js:10 Populations:  5084300
// index.js:11 Regions:  Oceania
// index.js:12 Sub-regions:  Australia and New Zealand
// index.js:9 Brunei: 🇧🇳
// index.js:10 Populations:  437483
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  South-Eastern Asia
// index.js:9 French Guiana: 🇬🇫
// index.js:10 Populations:  254541
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  South America
// index.js:9 Niue: 🇳🇺
// index.js:10 Populations:  1470
// index.js:11 Regions:  Oceania
// index.js:12 Sub-regions:  Polynesia
// index.js:9 Romania: 🇷🇴
// index.js:10 Populations:  19286123
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Southeast Europe
// index.js:9 Svalbard and Jan Mayen: 🇸🇯
// index.js:10 Populations:  2562
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Northern Europe
// index.js:9 Belarus: 🇧🇾
// index.js:10 Populations:  9398861
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Eastern Europe
// index.js:9 Panama: 🇵🇦
// index.js:10 Populations:  4314768
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Central America
// index.js:9 Cameroon: 🇨🇲
// index.js:10 Populations:  26545864
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Middle Africa
// index.js:9 Czechia: 🇨🇿
// index.js:10 Populations:  10698896
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Central Europe
// index.js:9 Saint Barthélemy: 🇧🇱
// index.js:10 Populations:  4255
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Caribbean
// index.js:9 Greece: 🇬🇷
// index.js:10 Populations:  10715549
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Southern Europe
// index.js:9 Mali: 🇲🇱
// index.js:10 Populations:  20250834
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Western Africa
// index.js:9 Martinique: 🇲🇶
// index.js:10 Populations:  378243
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Caribbean
// index.js:9 France: 🇫🇷
// index.js:10 Populations:  67391582
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Western Europe
// index.js:9 Pakistan: 🇵🇰
// index.js:10 Populations:  220892331
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Southern Asia
// index.js:9 Peru: 🇵🇪
// index.js:10 Populations:  32971846
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  South America
// index.js:9 Barbados: 🇧🇧
// index.js:10 Populations:  287371
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Caribbean
// index.js:9 Greenland: 🇬🇱
// index.js:10 Populations:  56367
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  North America
// index.js:9 Saint Pierre and Miquelon: 🇵🇲
// index.js:10 Populations:  6069
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  North America
// index.js:9 Chad: 🇹🇩
// index.js:10 Populations:  16425859
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Middle Africa
// index.js:9 Hungary: 🇭🇺
// index.js:10 Populations:  9749763
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Central Europe
// index.js:9 Comoros: 🇰🇲
// index.js:10 Populations:  869595
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Eastern Africa
// index.js:9 Bangladesh: 🇧🇩
// index.js:10 Populations:  164689383
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Southern Asia
// index.js:9 Tokelau: 🇹🇰
// index.js:10 Populations:  1411
// index.js:11 Regions:  Oceania
// index.js:12 Sub-regions:  Polynesia
// index.js:9 Fiji: 🇫🇯
// index.js:10 Populations:  896444
// index.js:11 Regions:  Oceania
// index.js:12 Sub-regions:  Melanesia
// index.js:9 China: 🇨🇳
// index.js:10 Populations:  1402112000
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Eastern Asia
// index.js:9 Colombia: 🇨🇴
// index.js:10 Populations:  50882884
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  South America
// index.js:9 British Virgin Islands: 🇻🇬
// index.js:10 Populations:  30237
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Caribbean
// index.js:9 Algeria: 🇩🇿
// index.js:10 Populations:  44700000
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Northern Africa
// index.js:9 Maldives: 🇲🇻
// index.js:10 Populations:  540542
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Southern Asia
// index.js:9 Malaysia: 🇲🇾
// index.js:10 Populations:  32365998
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  South-Eastern Asia
// index.js:9 Cayman Islands: 🇰🇾
// index.js:10 Populations:  65720
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Caribbean
// index.js:9 Spain: 🇪🇸
// index.js:10 Populations:  47351567
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Southern Europe
// index.js:9 Ireland: 🇮🇪
// index.js:10 Populations:  4994724
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Northern Europe
// index.js:9 Estonia: 🇪🇪
// index.js:10 Populations:  1331057
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Northern Europe
// index.js:9 Paraguay: 🇵🇾
// index.js:10 Populations:  7132530
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  South America
// index.js:9 Uruguay: 🇺🇾
// index.js:10 Populations:  3473727
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  South America
// index.js:9 South Africa: 🇿🇦
// index.js:10 Populations:  59308690
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Southern Africa
// index.js:9 Saint Lucia: 🇱🇨
// index.js:10 Populations:  183629
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Caribbean
// index.js:9 Vanuatu: 🇻🇺
// index.js:10 Populations:  307150
// index.js:11 Regions:  Oceania
// index.js:12 Sub-regions:  Melanesia
// index.js:9 Finland: 🇫🇮
// index.js:10 Populations:  5530719
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Northern Europe
// index.js:9 Sweden: 🇸🇪
// index.js:10 Populations:  10353442
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Northern Europe
// index.js:9 British Indian Ocean Territory: 🇮🇴
// index.js:10 Populations:  3000
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Eastern Africa
// index.js:9 Lebanon: 🇱🇧
// index.js:10 Populations:  6825442
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Western Asia
// index.js:9 United States: 🇺🇸
// index.js:10 Populations:  329484123
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  North America
// index.js:9 Chile: 🇨🇱
// index.js:10 Populations:  19116209
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  South America
// index.js:9 Norfolk Island: 🇳🇫
// index.js:10 Populations:  2302
// index.js:11 Regions:  Oceania
// index.js:12 Sub-regions:  Australia and New Zealand
// index.js:9 Montserrat: 🇲🇸
// index.js:10 Populations:  4922
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Caribbean
// index.js:9 Australia: 🇦🇺
// index.js:10 Populations:  25687041
// index.js:11 Regions:  Oceania
// index.js:12 Sub-regions:  Australia and New Zealand
// index.js:9 Belize: 🇧🇿
// index.js:10 Populations:  397621
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Central America
// index.js:9 Guyana: 🇬🇾
// index.js:10 Populations:  786559
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  South America
// index.js:9 Mongolia: 🇲🇳
// index.js:10 Populations:  3278292
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Eastern Asia
// index.js:9 Tuvalu: 🇹🇻
// index.js:10 Populations:  11792
// index.js:11 Regions:  Oceania
// index.js:12 Sub-regions:  Polynesia
// index.js:9 Dominican Republic: 🇩🇴
// index.js:10 Populations:  10847904
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Caribbean
// index.js:9 Equatorial Guinea: 🇬🇶
// index.js:10 Populations:  1402985
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Middle Africa
// index.js:9 Saint Kitts and Nevis: 🇰🇳
// index.js:10 Populations:  53192
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Caribbean
// index.js:9 Bolivia: 🇧🇴
// index.js:10 Populations:  11673029
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  South America
// index.js:9 Nepal: 🇳🇵
// index.js:10 Populations:  29136808
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Southern Asia
// index.js:9 French Southern and Antarctic Lands: 🇹🇫
// index.js:10 Populations:  400
// index.js:11 Regions:  Antarctic
// index.js:12 Sub-regions:  undefined
// index.js:9 Taiwan: 🇹🇼
// index.js:10 Populations:  23503349
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Eastern Asia
// index.js:9 Benin: 🇧🇯
// index.js:10 Populations:  12123198
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Western Africa
// index.js:9 Bulgaria: 🇧🇬
// index.js:10 Populations:  6927288
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Southeast Europe
// index.js:9 Moldova: 🇲🇩
// index.js:10 Populations:  2617820
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Eastern Europe
// index.js:9 Isle of Man: 🇮🇲
// index.js:10 Populations:  85032
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Northern Europe
// index.js:9 Bhutan: 🇧🇹
// index.js:10 Populations:  771612
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Southern Asia
// index.js:9 Cambodia: 🇰🇭
// index.js:10 Populations:  16718971
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  South-Eastern Asia
// index.js:9 Antigua and Barbuda: 🇦🇬
// index.js:10 Populations:  97928
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Caribbean
// index.js:9 Haiti: 🇭🇹
// index.js:10 Populations:  11402533
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Caribbean
// index.js:9 Cape Verde: 🇨🇻
// index.js:10 Populations:  555988
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Western Africa
// index.js:9 Georgia: 🇬🇪
// index.js:10 Populations:  3714000
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Western Asia
// index.js:9 Burundi: 🇧🇮
// index.js:10 Populations:  11890781
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Eastern Africa
// index.js:9 Bahamas: 🇧🇸
// index.js:10 Populations:  393248
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Caribbean
// index.js:9 Mauritius: 🇲🇺
// index.js:10 Populations:  1265740
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Eastern Africa
// index.js:9 Libya: 🇱🇾
// index.js:10 Populations:  6871287
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Northern Africa
// index.js:9 Malawi: 🇲🇼
// index.js:10 Populations:  19129955
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Eastern Africa
// index.js:9 Mexico: 🇲🇽
// index.js:10 Populations:  128932753
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  North America
// index.js:9 Eswatini: 🇸🇿
// index.js:10 Populations:  1160164
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Southern Africa
// index.js:9 Papua New Guinea: 🇵🇬
// index.js:10 Populations:  8947027
// index.js:11 Regions:  Oceania
// index.js:12 Sub-regions:  Melanesia
// index.js:9 Dominica: 🇩🇲
// index.js:10 Populations:  71991
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Caribbean
// index.js:9 Liechtenstein: 🇱🇮
// index.js:10 Populations:  38137
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Western Europe
// index.js:9 Russia: 🇷🇺
// index.js:10 Populations:  144104080
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Eastern Europe
// index.js:9 Israel: 🇮🇱
// index.js:10 Populations:  9216900
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Western Asia
// index.js:9 Singapore: 🇸🇬
// index.js:10 Populations:  5685807
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  South-Eastern Asia
// index.js:9 Uganda: 🇺🇬
// index.js:10 Populations:  45741000
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Eastern Africa
// index.js:9 Slovakia: 🇸🇰
// index.js:10 Populations:  5458827
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Central Europe
// index.js:9 Tonga: 🇹🇴
// index.js:10 Populations:  105697
// index.js:11 Regions:  Oceania
// index.js:12 Sub-regions:  Polynesia
// index.js:9 United Arab Emirates: 🇦🇪
// index.js:10 Populations:  9890400
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Western Asia
// index.js:9 Mayotte: 🇾🇹
// index.js:10 Populations:  226915
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Eastern Africa
// index.js:9 Suriname: 🇸🇷
// index.js:10 Populations:  586634
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  South America
// index.js:9 Uzbekistan: 🇺🇿
// index.js:10 Populations:  34232050
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Central Asia
// index.js:9 Saudi Arabia: 🇸🇦
// index.js:10 Populations:  34813867
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Western Asia
// index.js:9 Egypt: 🇪🇬
// index.js:10 Populations:  102334403
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Northern Africa
// index.js:9 Italy: 🇮🇹
// index.js:10 Populations:  59554023
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Southern Europe
// index.js:9 Madagascar: 🇲🇬
// index.js:10 Populations:  27691019
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Eastern Africa
// index.js:9 New Caledonia: 🇳🇨
// index.js:10 Populations:  271960
// index.js:11 Regions:  Oceania
// index.js:12 Sub-regions:  Melanesia
// index.js:9 Canada: 🇨🇦
// index.js:10 Populations:  38005238
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  North America
// index.js:9 United States Virgin Islands: 🇻🇮
// index.js:10 Populations:  106290
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Caribbean
// index.js:9 Marshall Islands: 🇲🇭
// index.js:10 Populations:  59194
// index.js:11 Regions:  Oceania
// index.js:12 Sub-regions:  Micronesia
// index.js:9 Mauritania: 🇲🇷
// index.js:10 Populations:  4649660
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Western Africa
// index.js:9 Gambia: 🇬🇲
// index.js:10 Populations:  2416664
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Western Africa
// index.js:9 Trinidad and Tobago: 🇹🇹
// index.js:10 Populations:  1399491
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Caribbean
// index.js:9 Seychelles: 🇸🇨
// index.js:10 Populations:  98462
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Eastern Africa
// index.js:9 Japan: 🇯🇵
// index.js:10 Populations:  125836021
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Eastern Asia
// index.js:9 Brazil: 🇧🇷
// index.js:10 Populations:  212559409
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  South America
// index.js:9 Syria: 🇸🇾
// index.js:10 Populations:  17500657
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Western Asia
// index.js:9 Saint Helena, Ascension and Tristan da Cunha: 🇸🇭
// index.js:10 Populations:  53192
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Western Africa
// index.js:9 Tanzania: 🇹🇿
// index.js:10 Populations:  59734213
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Eastern Africa
// index.js:9 Andorra: 🇦🇩
// index.js:10 Populations:  77265
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Southern Europe
// index.js:9 Iran: 🇮🇷
// index.js:10 Populations:  83992953
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Southern Asia
// index.js:9 Togo: 🇹🇬
// index.js:10 Populations:  8278737
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Western Africa
// index.js:9 Malta: 🇲🇹
// index.js:10 Populations:  525285
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Southern Europe
// index.js:9 South Korea: 🇰🇷
// index.js:10 Populations:  51780579
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Eastern Asia
// index.js:9 Samoa: 🇼🇸
// index.js:10 Populations:  198410
// index.js:11 Regions:  Oceania
// index.js:12 Sub-regions:  Polynesia
// index.js:9 Germany: 🇩🇪
// index.js:10 Populations:  83240525
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Western Europe
// index.js:9 Niger: 🇳🇪
// index.js:10 Populations:  24206636
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Western Africa
// index.js:9 Bouvet Island: 🇧🇻
// index.js:10 Populations:  0
// index.js:11 Regions:  Antarctic
// index.js:12 Sub-regions:  undefined
// index.js:9 Jamaica: 🇯🇲
// index.js:10 Populations:  2961161
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Caribbean
// index.js:9 Nicaragua: 🇳🇮
// index.js:10 Populations:  6624554
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Central America
// index.js:9 Guinea: 🇬🇳
// index.js:10 Populations:  13132792
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Western Africa
// index.js:9 Anguilla: 🇦🇮
// index.js:10 Populations:  13452
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Caribbean
// index.js:9 Åland Islands: 🇦🇽
// index.js:10 Populations:  29458
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Northern Europe
// index.js:9 Belgium: 🇧🇪
// index.js:10 Populations:  11555997
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Western Europe
// index.js:9 Portugal: 🇵🇹
// index.js:10 Populations:  10305564
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Southern Europe
// index.js:9 Denmark: 🇩🇰
// index.js:10 Populations:  5831404
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Northern Europe
// index.js:9 Philippines: 🇵🇭
// index.js:10 Populations:  109581085
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  South-Eastern Asia
// index.js:9 Wallis and Futuna: 🇼🇫
// index.js:10 Populations:  11750
// index.js:11 Regions:  Oceania
// index.js:12 Sub-regions:  Polynesia
// index.js:9 Austria: 🇦🇹
// index.js:10 Populations:  8917205
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Central Europe
// index.js:9 Guinea-Bissau: 🇬🇼
// index.js:10 Populations:  1967998
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Western Africa
// index.js:9 Monaco: 🇲🇨
// index.js:10 Populations:  39244
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Western Europe
// index.js:9 Namibia: 🇳🇦
// index.js:10 Populations:  2540916
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Southern Africa
// index.js:9 United States Minor Outlying Islands: 🇺🇲
// index.js:10 Populations:  300
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  North America
// index.js:9 Costa Rica: 🇨🇷
// index.js:10 Populations:  5094114
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Central America
// index.js:9 Bosnia and Herzegovina: 🇧🇦
// index.js:10 Populations:  3280815
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Southeast Europe
// index.js:9 Macau: 🇲🇴
// index.js:10 Populations:  649342
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Eastern Asia
// index.js:9 Mozambique: 🇲🇿
// index.js:10 Populations:  31255435
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Eastern Africa
// index.js:9 Réunion: 🇷🇪
// index.js:10 Populations:  840974
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Eastern Africa
// index.js:9 Montenegro: 🇲🇪
// index.js:10 Populations:  621718
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Southeast Europe
// index.js:9 North Korea: 🇰🇵
// index.js:10 Populations:  25778815
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Eastern Asia
// index.js:9 Northern Mariana Islands: 🇲🇵
// index.js:10 Populations:  57557
// index.js:11 Regions:  Oceania
// index.js:12 Sub-regions:  Micronesia
// index.js:9 Ukraine: 🇺🇦
// index.js:10 Populations:  44134693
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Eastern Europe
// index.js:9 Iraq: 🇮🇶
// index.js:10 Populations:  40222503
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Western Asia
// index.js:9 South Georgia: 🇬🇸
// index.js:10 Populations:  30
// index.js:11 Regions:  Antarctic
// index.js:12 Sub-regions:  undefined
// index.js:9 Angola: 🇦🇴
// index.js:10 Populations:  32866268
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Middle Africa
// index.js:9 Sierra Leone: 🇸🇱
// index.js:10 Populations:  7976985
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Western Africa
// index.js:9 Micronesia: 🇫🇲
// index.js:10 Populations:  115021
// index.js:11 Regions:  Oceania
// index.js:12 Sub-regions:  Micronesia
// index.js:9 Cuba: 🇨🇺
// index.js:10 Populations:  11326616
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Caribbean
// index.js:9 Turks and Caicos Islands: 🇹🇨
// index.js:10 Populations:  38718
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Caribbean
// index.js:9 Serbia: 🇷🇸
// index.js:10 Populations:  6908224
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Southeast Europe
// index.js:9 Ecuador: 🇪🇨
// index.js:10 Populations:  17643060
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  South America
// index.js:9 Faroe Islands: 🇫🇴
// index.js:10 Populations:  48865
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Northern Europe
// index.js:9 Antarctica: 🇦🇶
// index.js:10 Populations:  1000
// index.js:11 Regions:  Antarctic
// index.js:12 Sub-regions:  undefined
// index.js:9 Palestine: 🇵🇸
// index.js:10 Populations:  4803269
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Western Asia
// index.js:9 Turkey: 🇹🇷
// index.js:10 Populations:  84339067
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Western Asia
// index.js:9 Kiribati: 🇰🇮
// index.js:10 Populations:  119446
// index.js:11 Regions:  Oceania
// index.js:12 Sub-regions:  Micronesia
// index.js:9 Kazakhstan: 🇰🇿
// index.js:10 Populations:  18754440
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Central Asia
// index.js:9 Gibraltar: 🇬🇮
// index.js:10 Populations:  33691
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Southern Europe
// index.js:9 Iceland: 🇮🇸
// index.js:10 Populations:  366425
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Northern Europe
// index.js:9 Palau: 🇵🇼
// index.js:10 Populations:  18092
// index.js:11 Regions:  Oceania
// index.js:12 Sub-regions:  Micronesia
// index.js:9 Qatar: 🇶🇦
// index.js:10 Populations:  2881060
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Western Asia
// index.js:9 Switzerland: 🇨🇭
// index.js:10 Populations:  8654622
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Western Europe
// index.js:9 French Polynesia: 🇵🇫
// index.js:10 Populations:  280904
// index.js:11 Regions:  Oceania
// index.js:12 Sub-regions:  Polynesia
// index.js:9 Pitcairn Islands: 🇵🇳
// index.js:10 Populations:  56
// index.js:11 Regions:  Oceania
// index.js:12 Sub-regions:  Polynesia
// index.js:9 Jordan: 🇯🇴
// index.js:10 Populations:  10203140
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Western Asia
// index.js:9 Myanmar: 🇲🇲
// index.js:10 Populations:  54409794
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  South-Eastern Asia
// index.js:9 Thailand: 🇹🇭
// index.js:10 Populations:  69799978
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  South-Eastern Asia
// index.js:9 Caribbean Netherlands: 🇧🇶
// index.js:10 Populations:  25987
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Caribbean
// index.js:9 Aruba: 🇦🇼
// index.js:10 Populations:  106766
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Caribbean
// index.js:9 Guadeloupe: 🇬🇵
// index.js:10 Populations:  400132
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Caribbean
// index.js:9 Nigeria: 🇳🇬
// index.js:10 Populations:  206139587
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Western Africa
// index.js:9 Bahrain: 🇧🇭
// index.js:10 Populations:  1701583
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Western Asia
// index.js:9 Laos: 🇱🇦
// index.js:10 Populations:  7275556
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  South-Eastern Asia
// index.js:9 Cocos (Keeling) Islands: 🇨🇨
// index.js:10 Populations:  544
// index.js:11 Regions:  Oceania
// index.js:12 Sub-regions:  Australia and New Zealand
// index.js:9 Djibouti: 🇩🇯
// index.js:10 Populations:  988002
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Eastern Africa
// index.js:9 Solomon Islands: 🇸🇧
// index.js:10 Populations:  686878
// index.js:11 Regions:  Oceania
// index.js:12 Sub-regions:  Melanesia
// index.js:9 Heard Island and McDonald Islands: 🇭🇲
// index.js:10 Populations:  0
// index.js:11 Regions:  Antarctic
// index.js:12 Sub-regions:  undefined
// index.js:9 India: 🇮🇳
// index.js:10 Populations:  1380004385
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Southern Asia
// index.js:9 San Marino: 🇸🇲
// index.js:10 Populations:  33938
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Southern Europe
// index.js:9 Luxembourg: 🇱🇺
// index.js:10 Populations:  632275
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Western Europe
// index.js:9 Sint Maarten: 🇸🇽
// index.js:10 Populations:  40812
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Caribbean
// index.js:9 Falkland Islands: 🇫🇰
// index.js:10 Populations:  2563
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  South America
// index.js:9 Central African Republic: 🇨🇫
// index.js:10 Populations:  4829764
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Middle Africa
// index.js:9 Botswana: 🇧🇼
// index.js:10 Populations:  2351625
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Southern Africa
// index.js:9 Curaçao: 🇨🇼
// index.js:10 Populations:  155014
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Caribbean
// index.js:9 Guernsey: 🇬🇬
// index.js:10 Populations:  62999
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Northern Europe
// index.js:9 Norway: 🇳🇴
// index.js:10 Populations:  5379475
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Northern Europe
// index.js:9 Gabon: 🇬🇦
// index.js:10 Populations:  2225728
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Middle Africa
// index.js:9 Zimbabwe: 🇿🇼
// index.js:10 Populations:  14862927
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Southern Africa
// index.js:9 Lesotho: 🇱🇸
// index.js:10 Populations:  2142252
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Southern Africa
// index.js:9 Slovenia: 🇸🇮
// index.js:10 Populations:  2100126
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Central Europe
// index.js:9 Argentina: 🇦🇷
// index.js:10 Populations:  45376763
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  South America
// index.js:9 Burkina Faso: 🇧🇫
// index.js:10 Populations:  20903278
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Western Africa
// index.js:9 Yemen: 🇾🇪
// index.js:10 Populations:  29825968
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Western Asia
// index.js:9 DR Congo: 🇨🇩
// index.js:10 Populations:  108407721
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Middle Africa
// index.js:9 Oman: 🇴🇲
// index.js:10 Populations:  5106622
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Western Asia
// index.js:9 Indonesia: 🇮🇩
// index.js:10 Populations:  273523621
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  South-Eastern Asia
// index.js:9 Nauru: 🇳🇷
// index.js:10 Populations:  10834
// index.js:11 Regions:  Oceania
// index.js:12 Sub-regions:  Micronesia
// index.js:9 Rwanda: 🇷🇼
// index.js:10 Populations:  12952209
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Eastern Africa
// index.js:9 North Macedonia: 🇲🇰
// index.js:10 Populations:  2077132
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Southeast Europe
// index.js:9 Kosovo: 🇽🇰
// index.js:10 Populations:  1775378
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Southeast Europe
// index.js:9 Netherlands: 🇳🇱
// index.js:10 Populations:  16655799
// index.js:11 Regions:  Europe
// index.js:12 Sub-regions:  Western Europe
// index.js:9 Tunisia: 🇹🇳
// index.js:10 Populations:  11818618
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Northern Africa
// index.js:9 South Sudan: 🇸🇸
// index.js:10 Populations:  11193729
// index.js:11 Regions:  Africa
// index.js:12 Sub-regions:  Middle Africa
// index.js:9 Honduras: 🇭🇳
// index.js:10 Populations:  9904608
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Central America
// index.js:9 Saint Vincent and the Grenadines: 🇻🇨
// index.js:10 Populations:  110947
// index.js:11 Regions:  Americas
// index.js:12 Sub-regions:  Caribbean
// index.js:9 Sri Lanka: 🇱🇰
// index.js:10 Populations:  21919000
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Southern Asia
// index.js:9 Hong Kong: 🇭🇰
// index.js:10 Populations:  7500700
// index.js:11 Regions:  Asia
// index.js:12 Sub-regions:  Eastern Asia
// --------------------------------------------------------------------------------------------------------------------------------------