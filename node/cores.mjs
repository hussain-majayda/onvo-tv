const _0x16ff53=_0x35eb;(function(_0x5e99e9,_0x5a1a24){const _0x1f0249=_0x35eb,_0x100112=_0x5e99e9();while(!![]){try{const _0x5e9634=-parseInt(_0x1f0249(0x19e))/0x1*(-parseInt(_0x1f0249(0x134))/0x2)+parseInt(_0x1f0249(0x152))/0x3*(-parseInt(_0x1f0249(0x177))/0x4)+parseInt(_0x1f0249(0x185))/0x5+-parseInt(_0x1f0249(0x138))/0x6*(-parseInt(_0x1f0249(0x19a))/0x7)+-parseInt(_0x1f0249(0x151))/0x8*(parseInt(_0x1f0249(0x1a4))/0x9)+parseInt(_0x1f0249(0x183))/0xa*(parseInt(_0x1f0249(0x188))/0xb)+-parseInt(_0x1f0249(0x17f))/0xc;if(_0x5e9634===_0x5a1a24)break;else _0x100112['push'](_0x100112['shift']());}catch(_0x56656a){_0x100112['push'](_0x100112['shift']());}}}(_0x6127,0xd7020));const _0x39c8b2=_0x2814;!function(_0x212531,_0x38516c){const _0x5b5b46=_0x35eb,_0x331d00=_0x2814,_0x1d3747=_0xa9b8();for(;;)try{if(0x45513===-parseInt(_0x331d00(0x10c))/0x1*(parseInt(_0x331d00(0x130))/0x2)+-parseInt(_0x331d00(0x144))/0x3+-parseInt(_0x331d00(0x110))/0x4+parseInt(_0x331d00(0x11c))/0x5*(-parseInt(_0x331d00(0x12c))/0x6)+-parseInt(_0x331d00(0x14e))/0x7+parseInt(_0x331d00(0xfe))/0x8*(-parseInt(_0x331d00(0x149))/0x9)+parseInt(_0x331d00(0x127))/0xa)break;_0x1d3747[_0x5b5b46(0x1a9)](_0x1d3747[_0x5b5b46(0x181)]());}catch(_0x53178e){_0x1d3747[_0x5b5b46(0x1a9)](_0x1d3747[_0x5b5b46(0x181)]());}}();import _0x37b99d from'webtorrent';const client=new _0x37b99d();import _0x1de84e from'path';import{fileURLToPath}from'url';import _0x58a082 from'mime';import _0x5553e3 from'fs';let fetch;((async()=>{const _0x5db86d=_0x2814;fetch=(await import('node-fetch'))[_0x5db86d(0x12e)];})());const __filename=fileURLToPath(import.meta[_0x39c8b2(0x137)]),__dirname=_0x1de84e[_0x39c8b2(0x146)](__filename),isApp=!0x0;let rootPath=process[_0x39c8b2(0x152)][0x2];function _0x35eb(_0x20a287,_0x1c918a){const _0x61270f=_0x6127();return _0x35eb=function(_0x35eb9a,_0x198a1a){_0x35eb9a=_0x35eb9a-0x132;let _0x183afe=_0x61270f[_0x35eb9a];return _0x183afe;},_0x35eb(_0x20a287,_0x1c918a);}try{!_0x5553e3[_0x39c8b2(0xf5)](rootPath)&&_0x5553e3[_0x39c8b2(0x143)](rootPath,{'recursive':!0x0});}catch(_0x557dde){console[_0x39c8b2(0x133)](_0x557dde);}const offlineRootPath=_0x1de84e[_0x16ff53(0x15e)](__dirname,_0x16ff53(0x16f));let savePath=_0x1de84e[_0x39c8b2(0x123)](rootPath,_0x39c8b2(0x121)),settingsPath=_0x1de84e[_0x39c8b2(0x123)](rootPath,'settings.json'),globalImages=[],settings={},torrentsMap=new Map();const defaultSettings={'save':!![]};try{!_0x5553e3[_0x39c8b2(0xf5)](settingsPath)&&_0x5553e3[_0x16ff53(0x1ad)](settingsPath,JSON[_0x39c8b2(0x122)](defaultSettings,null,0x2),_0x39c8b2(0x128));const t=_0x5553e3[_0x16ff53(0x193)](settingsPath,_0x39c8b2(0x128));settings=JSON[_0x39c8b2(0x12b)](t),settings[_0x39c8b2(0x14d)]&&(savePath=settings[_0x39c8b2(0x14d)]),_0x5553e3[_0x39c8b2(0xf5)](savePath)?0x0==settings['save']&&(_0x5553e3[_0x39c8b2(0x11a)](savePath,{'recursive':!0x0}),_0x5553e3[_0x39c8b2(0x143)](savePath,{'recursive':!0x0})):(_0x5553e3[_0x39c8b2(0x143)](savePath,{'recursive':!0x0}),console[_0x39c8b2(0x148)](_0x39c8b2(0x11f),rootPath));}catch(_0x5adc9a){console[_0x39c8b2(0x133)](_0x5adc9a);}function changeSettings(_0x1eddf7,_0x37bfd7){const _0x354ad3=_0x39c8b2;settings[_0x1eddf7]=_0x37bfd7;try{_0x5553e3['writeFileSync'](settingsPath,JSON[_0x354ad3(0x122)](settings),_0x354ad3(0x128));}catch(_0x587f9f){console[_0x354ad3(0x133)](err);}}let updateBackground=function(_0x3d5e14){},setSubtitles=function(_0x586cff){};export function handleIncomming(_0x349899,_0x3db9e3,_0x58b533){const _0x23a0f5=_0x16ff53,_0x1815f6=_0x39c8b2;try{const _0x2fd234=JSON[_0x1815f6(0x12b)](_0x58b533);_0x2fd234['ct']==_0x1815f6(0x104)?changeSettings(_0x1815f6(0x104),_0x2fd234[_0x1815f6(0x142)]):_0x2fd234['ct']==_0x1815f6(0x15f)?(torrentsMap[_0x1815f6(0x119)](_0x3db9e3)[_0x1815f6(0x153)][_0x1815f6(0x105)](),videosGlobal?.[_0x1815f6(0x13f)](torrentsMap[_0x1815f6(0x119)](_0x3db9e3)[_0x1815f6(0x153)][_0x1815f6(0x13a)])):_0x2fd234['ct']==_0x1815f6(0x145)?torrentsMap['get'](_0x3db9e3)[_0x1815f6(0x153)]?.[_0x23a0f5(0x195)]():_0x2fd234['ct']==_0x1815f6(0x105)?(torrentsMap[_0x1815f6(0x119)](_0x3db9e3)[_0x1815f6(0x153)]?.[_0x1815f6(0x105)](),videosGlobal?.[_0x1815f6(0x13f)](torrentsMap[_0x1815f6(0x119)](_0x3db9e3)[_0x23a0f5(0x13b)][_0x1815f6(0x13a)]),clearInterval(interValD)):_0x2fd234['ct']==_0x1815f6(0x163)?updateBackground(_0x2fd234[_0x1815f6(0x115)]):'set_srt'==_0x2fd234['ct']&&setSubtitles(_0x2fd234[_0x1815f6(0x126)]);}catch(_0x1e05de){console[_0x23a0f5(0x186)](_0x1e05de);}}function checkDiskSpace(_0x494184){return new Promise((_0x3f05ac,_0x4ebf37)=>{disk[_0x2814(0x12d)](_0x494184,(_0x793be7,_0x4ed618)=>{_0x793be7?_0x4ebf37(_0x793be7):_0x3f05ac(_0x4ed618);});});}let interValD,videosGlobal=new Map();function _0x2814(_0x1ee90d,_0x4d357c){const _0x1da7a5=_0xa9b8();return(_0x2814=function(_0x4539a6,_0x2c2e39){return _0x1da7a5[_0x4539a6-=0xed];})(_0x1ee90d,_0x4d357c);}function _0xa9b8(){const _0x34f80e=_0x16ff53,_0x178eb4=[_0x34f80e(0x15f),_0x34f80e(0x18b),'Error\x20writing\x20JSON\x20file:',_0x34f80e(0x13f),_0x34f80e(0x18e),_0x34f80e(0x166),'pause',_0x34f80e(0x18f),_0x34f80e(0x19d),_0x34f80e(0x1a1),_0x34f80e(0x173),_0x34f80e(0x18d),_0x34f80e(0x17c),_0x34f80e(0x184),_0x34f80e(0x15a),_0x34f80e(0x1a2),'Please\x20restart\x20app','paused',_0x34f80e(0x161),'createWriteStream',_0x34f80e(0x150),_0x34f80e(0x1a7),_0x34f80e(0x148),_0x34f80e(0x168),'some',_0x34f80e(0x14e),'noPeers','download',_0x34f80e(0x144),'statusCode',_0x34f80e(0x158),_0x34f80e(0x189),'Error\x20occured,\x20please\x20restart\x20app\x20and\x20back\x20again,\x20code:\x20',_0x34f80e(0x157),_0x34f80e(0x14c),_0x34f80e(0x163),_0x34f80e(0x190),_0x34f80e(0x160),_0x34f80e(0x1a6),'no_files_found',_0x34f80e(0x191),_0x34f80e(0x14f),_0x34f80e(0x14b),_0x34f80e(0x172),_0x34f80e(0x155),'add',_0x34f80e(0x140),_0x34f80e(0x1ad),'1010932eoMrGm','no_peers',_0x34f80e(0x147),_0x34f80e(0x135),_0x34f80e(0x1a8),_0x34f80e(0x187),_0x34f80e(0x171),_0x34f80e(0x19b),_0x34f80e(0x149),'get',_0x34f80e(0x196),_0x34f80e(0x1ab),'6445wvMXeE','.srt','File\x20written\x20successfully','Directory\x20created:',_0x34f80e(0x174),_0x34f80e(0x176),'stringify','join',_0x34f80e(0x169),_0x34f80e(0x154),_0x34f80e(0x175),_0x34f80e(0x19f),_0x34f80e(0x132),'seasons',_0x34f80e(0x167),_0x34f80e(0x178),'114nXeHYY',_0x34f80e(0x16a),_0x34f80e(0x13e),_0x34f80e(0x136),_0x34f80e(0x159),_0x34f80e(0x146),_0x34f80e(0x13c),_0x34f80e(0x186),_0x34f80e(0x13a),'Looks\x20like\x20this\x20source\x20has\x20no\x20video\x20files,\x20try\x20another\x20one',_0x34f80e(0x197),_0x34f80e(0x17d),'readFileSync',_0x34f80e(0x1a3),'infoHash',_0x34f80e(0x194),_0x34f80e(0x198),'progress',_0x34f80e(0x182),_0x34f80e(0x15d),_0x34f80e(0x16b),_0x34f80e(0x133),_0x34f80e(0x142),'mkdirSync',_0x34f80e(0x16d),'resume',_0x34f80e(0x18c),_0x34f80e(0x19c),_0x34f80e(0x156),'9JKdHus','startsWith',_0x34f80e(0x170),_0x34f80e(0x15c),_0x34f80e(0x180),_0x34f80e(0x17a),'/ONVO\x20TV',_0x34f80e(0x16c),_0x34f80e(0x143),'argv',_0x34f80e(0x13b),_0x34f80e(0x13d),_0x34f80e(0x1a9),_0x34f80e(0x17b),_0x34f80e(0x15b),'Error\x20in\x20source'];return(_0xa9b8=function(){return _0x178eb4;})();}function filterFile(_0x521875){const _0x517252=_0x16ff53,_0x465c91=_0x39c8b2;return _0x521875[_0x465c91(0x10e)][_0x517252(0x145)](_0x29a053=>{const _0xe6163=_0x517252,_0x5986f6=_0x465c91;return[_0x5986f6(0x10b),_0x5986f6(0x10a),_0xe6163(0x164),_0xe6163(0x141)][_0x5986f6(0xf8)](_0xa9a3a5=>_0x29a053[_0x5986f6(0x159)][_0x5986f6(0x13b)](_0xa9a3a5));});}let jsonContent,globalSavePath=savePath,imagesGloabl=[];function _0x6127(){const _0x2fe53c=['error_solve','check','now','info.json','225087Gjxflx','statusCode','../','getType','https://image.tmdb.org/t/p/original','.mp4','update_info','has','srt','downloads','16YXGEcB','parse','Torrent\x20info\x20hash:\x20','1276044PoAqDE','timeRemaining','https://image.tmdb.org/t/p/','url','public','1792188cXRhLI','path','shift','magnetURI','94050PzsSyy','finish','2177510hILSuo','error','background','1716JZgiPj','\x27\x20(','downloadSpeed','data','dirname','length','readyState','episodes','save','hasOwnProperty','authorization','readFileSync','endsWith','resume','rmSync','https://image.tmdb.org/t/p/w342','entries','infoHash','539kIVnSu','offline','utf-8','Error\x20downloading\x20','18931fKpAjt','14408660ZWRxpy','writeFile','Failed\x20to\x20get\x20\x27','extname','memory','112851QnRMwj','Dead\x20source','Error:\x20Cannot\x20add\x20duplicate\x20torrent','existsSync','Looks\x20like\x20this\x20source\x20has\x20no\x20peers\x20that\x20share\x20the\x20file,\x20try\x20another\x20one','push','startsWith','type','seasons','writeFileSync','utf8','JSON\x20file\x20saved\x20successfully:','106HDvQei','mvid','https://api.onvo.me/tv/interface/','https://image.tmdb.org/t/p/w500','32766ZsDjal','uploadSpeed','writed\x20successfully','torrent','No\x20peers\x20found','success','default','forEach','files','.hevc','action','status','set','find','episode','OPEN','it\x20has\x20already','season','WebTorrent:','.mkv','json','https','downloaded','users','toString','920MsfipW','640887cdmwYm','stringify','replace','1Tpfcub','log','split','1873336OsDbUD','776462WMvsPy','send','series','duplicate_torrent','delete','join','name','destroy','poster','message','size','.avi','get','logo','includes','numPeers'];_0x6127=function(){return _0x2fe53c;};return _0x6127();}const downloadImage=(_0x4ffa15,_0x244324)=>new Promise((_0x43d483,_0x557c85)=>{const _0x14b249=_0x16ff53,_0x8ac7bc=_0x2814;(_0x4ffa15[_0x8ac7bc(0x14a)](_0x14b249(0x14d))?https:http)[_0x8ac7bc(0x119)](_0x4ffa15,_0x921f0e=>{const _0x2bc4b1=_0x14b249,_0xd1179c=_0x8ac7bc;if(0xc8!==_0x921f0e[_0xd1179c(0xfd)])return _0x557c85(new Error(_0xd1179c(0x162)+_0x4ffa15+_0xd1179c(0xff)+_0x921f0e[_0x2bc4b1(0x16e)]+')'));const _0x4bfa06=_0x5553e3[_0xd1179c(0xf3)](_0x244324);_0x921f0e['pipe'](_0x4bfa06),_0x4bfa06['on'](_0xd1179c(0xed),_0x43d483),_0x4bfa06['on'](_0xd1179c(0x133),_0x557c85);})['on'](_0x8ac7bc(0x133),_0x557c85);}),downloadImages=async _0x4086a0=>{const _0x5dc1d8=_0x16ff53,_0x3d9042=_0x39c8b2,_0x8e324d=_0x1de84e[_0x3d9042(0x123)](offlineRootPath,_0x5dc1d8(0x17e),_0x3d9042(0x117),_0x3d9042(0x121));if(!_0x5553e3[_0x3d9042(0xf5)](_0x8e324d)&&_0x5553e3[_0x3d9042(0x143)](_0x8e324d,{'recursive':!0x0}),_0x4086a0){for(const [_0x205b32,_0x3924fe]of _0x4086a0[_0x3d9042(0x13c)]())try{const _0x2b36ad=_0x3924fe[_0x5dc1d8(0x154)](_0x3d9042(0x165),'')[_0x3d9042(0x101)]('/');if(imagesGloabl[_0x3d9042(0x12a)](_0x2b36ad[0x1]))continue;!_0x5553e3['existsSync'](_0x1de84e[_0x3d9042(0x123)](_0x8e324d,_0x2b36ad[0x0]))&&_0x5553e3[_0x3d9042(0x143)](_0x1de84e[_0x3d9042(0x123)](_0x8e324d,_0x2b36ad[0x0]),{'recursive':!0x0});const _0x26d69d=_0x1de84e[_0x3d9042(0x123)](_0x8e324d,_0x2b36ad[0x0],_0x2b36ad[0x1]);!_0x5553e3[_0x3d9042(0xf5)](_0x26d69d)&&(await downloadImage(_0x3924fe,_0x26d69d),imagesGloabl[_0x3d9042(0x155)](_0x2b36ad[0x1]));}catch(_0x530f67){console[_0x3d9042(0x133)](_0x3d9042(0x161)+_0x3924fe+':',_0x530f67[_0x5dc1d8(0x162)]);}}};export async function getVideo(_0x5e1020,_0x228f35={},_0x565003,_0x2335cf,_0x3a6f33,_0x38c8cd){const _0x21c6e8=_0x16ff53,_0x31c9e3=_0x39c8b2;if(videosGlobal=_0x2335cf,torrentsMap=_0x3a6f33,!torrentsMap[_0x31c9e3(0x120)](_0x31c9e3(0x139))&&torrentsMap[_0x31c9e3(0xfc)](_0x31c9e3(0x139),{}),torrentsMap[_0x31c9e3(0x119)](_0x31c9e3(0x139))[_0x31c9e3(0x108)](_0x5e1020)){console['log'](_0x31c9e3(0xf6));const _0x4bf3d1=torrentsMap[_0x31c9e3(0x119)](torrentsMap[_0x21c6e8(0x165)](_0x21c6e8(0x1a3))[_0x5e1020])[_0x31c9e3(0x153)];try{const _0x9e4c8b=filterFile(_0x4bf3d1);return{'id':_0x4bf3d1['infoHash'],'file':_0x9e4c8b,'magnate':_0x4bf3d1[_0x31c9e3(0x13e)],'name':_0x9e4c8b[_0x31c9e3(0x159)],'path':_0x1de84e[_0x31c9e3(0x123)](savePath,_0x9e4c8b[_0x31c9e3(0x14d)]),'size':_0x4bf3d1[_0x21c6e8(0x18d)],'downloaded':_0x4bf3d1[_0x21c6e8(0x14e)],'codec':_0x58a082[_0x31c9e3(0x14b)](_0x1de84e[_0x31c9e3(0x123)](savePath,_0x9e4c8b[_0x31c9e3(0x14d)])),'space':null,'files':_0x4bf3d1[_0x31c9e3(0x10e)]};}catch(_0x296a9f){console[_0x31c9e3(0x133)](_0x296a9f);}}savePath=globalSavePath;const _0xeb7575=await fetch(_0x31c9e3(0x12f),{'headers':{'Authorization':_0x565003}}),_0x213845=await _0xeb7575[_0x31c9e3(0x102)]();return new Promise((_0x18c032,_0x4d3176)=>{const _0x4c4597=_0x21c6e8,_0x50642c=_0x31c9e3;try{let _0x4e0df4;if(_0x213845[_0x50642c(0x151)]!==_0x50642c(0x154))return void _0x4d3176({'code':_0x4c4597(0x192),..._0x213845});let _0x1a30a5,_0x39d349,_0x3a2e1c,_0xe2616e=_0x228f35[_0x4c4597(0x1ab)]+'_'+_0x228f35[_0x50642c(0x113)];if(_0x228f35[_0x50642c(0x11b)]==_0x50642c(0x157)&&_0x228f35[_0x50642c(0x113)]){if(_0x5553e3['existsSync'](_0x1de84e[_0x4c4597(0x15e)](globalSavePath,_0xe2616e,_0x228f35[_0x4c4597(0x149)],_0x228f35[_0x50642c(0x131)])))try{if(_0x5553e3[_0x4c4597(0x1a7)](_0x1de84e[_0x50642c(0x123)](globalSavePath,_0xe2616e,_0x4c4597(0x16c)))){const _0xadbe0=_0x5553e3[_0x50642c(0x138)](_0x1de84e[_0x50642c(0x123)](globalSavePath,_0xe2616e,_0x4c4597(0x16c)),_0x50642c(0x128));_0x3a2e1c=JSON[_0x50642c(0x12b)](_0xadbe0);}}catch(_0x4cfa62){console[_0x50642c(0x133)](_0x4cfa62);}else _0x5553e3[_0x50642c(0x143)](_0x1de84e[_0x50642c(0x123)](globalSavePath,_0xe2616e,_0x228f35[_0x50642c(0x118)],_0x228f35[_0x50642c(0x131)]),{'recursive':!0x0});savePath=_0x1de84e[_0x4c4597(0x15e)](globalSavePath,_0xe2616e,_0x228f35[_0x50642c(0x118)],_0x228f35[_0x50642c(0x131)]),_0x39d349=_0x1de84e[_0x50642c(0x123)](globalSavePath,_0xe2616e,_0x50642c(0x150));}else savePath=_0x1de84e[_0x50642c(0x123)](globalSavePath,_0xe2616e),!_0x5553e3[_0x50642c(0xf5)](_0x1de84e['join'](globalSavePath,_0xe2616e))&&_0x5553e3[_0x50642c(0x143)](_0x1de84e[_0x50642c(0x123)](globalSavePath,_0xe2616e),{'recursive':!0x0});try{downloadImages([_0x50642c(0x136)+_0x228f35[_0x50642c(0xf2)],_0x4c4597(0x171)+_0x228f35[_0x50642c(0x115)],_0x4c4597(0x137)+_0x228f35[_0x50642c(0x15e)]]);}catch(_0x549e35){console[_0x50642c(0x148)](_0x549e35);}let _0x5397f6=!0x1;client[_0x50642c(0x10d)](_0x5e1020,{'path':savePath},async _0x315e7d=>{const _0x3e0cde=_0x4c4597,_0x381dc2=_0x50642c;if(_0x4e0df4=_0x315e7d[_0x381dc2(0x13a)],torrentsMap[_0x381dc2(0xfc)](_0x315e7d[_0x381dc2(0x13a)],{'torrent':_0x315e7d,'link':_0x5e1020}),torrentsMap[_0x3e0cde(0x165)](_0x3e0cde(0x1a3))[_0x5e1020]=_0x315e7d[_0x381dc2(0x13a)],console[_0x381dc2(0x148)](_0x3e0cde(0x179)+_0x315e7d[_0x381dc2(0x13a)]),_0x1a30a5=filterFile(_0x315e7d),_0x315e7d['on'](_0x381dc2(0xfa),function(_0x393d76){const _0x28a757=_0x381dc2,_0x54fc6d={'error':_0x28a757(0x111),'type':_0x28a757(0x132),'message':_0x28a757(0x114)};_0x4d3176(_0x54fc6d);}),!_0x1a30a5){const _0xe23882={'error':_0x381dc2(0x107),'type':_0x3e0cde(0x1a5),'message':_0x381dc2(0x135)};return _0x4d3176(_0xe23882),void Object[_0x381dc2(0x13c)](_0x38c8cd[_0x381dc2(0x119)](_0x315e7d[_0x3e0cde(0x199)])?.[_0x381dc2(0x109)]||{})[_0x3e0cde(0x13f)](([_0x2a9de3,_0x706cae])=>{const _0xc5cc6e=_0x381dc2;_0x706cae[_0xc5cc6e(0x15d)]===_0x706cae[_0xc5cc6e(0x112)]?_0x706cae[_0xc5cc6e(0xee)](JSON['stringify'](_0xe23882)):_0x38c8cd[_0xc5cc6e(0x119)](_0x315e7d[_0xc5cc6e(0x13a)])[_0xc5cc6e(0x109)](_0x2a9de3);});}try{!_0x39d349&&(_0x39d349=_0x1de84e[_0x381dc2(0x123)](globalSavePath,_0xe2616e,_0x381dc2(0x150))),_0x228f35[_0x381dc2(0x11b)]==_0x381dc2(0x157)?(_0x3a2e1c?(!_0x3a2e1c[_0x381dc2(0x129)][_0x228f35[_0x381dc2(0x118)]]&&(_0x3a2e1c[_0x381dc2(0x129)][_0x228f35[_0x381dc2(0x118)]]={'episodes':{},'poster':_0x228f35[_0x381dc2(0xf2)]}),!_0x3a2e1c[_0x3e0cde(0x1ac)][_0x228f35[_0x381dc2(0x118)]]['episodes'][_0x228f35['episode']]&&(_0x3a2e1c[_0x381dc2(0x129)][_0x228f35[_0x381dc2(0x118)]][_0x381dc2(0x160)][_0x228f35[_0x381dc2(0x131)]]={'data':{},'background':_0x228f35[_0x381dc2(0x115)]}),_0x3a2e1c[_0x3e0cde(0x1ac)][_0x228f35[_0x3e0cde(0x149)]][_0x381dc2(0x160)][_0x228f35[_0x3e0cde(0x146)]][_0x381dc2(0x115)]=_0x228f35[_0x3e0cde(0x187)],_0x3a2e1c[_0x381dc2(0x129)][_0x228f35[_0x381dc2(0x118)]][_0x381dc2(0x160)][_0x228f35[_0x3e0cde(0x146)]]['data'][_0x315e7d[_0x381dc2(0x13a)]]={'size':_0x315e7d[_0x381dc2(0x164)],'downloaded':_0x315e7d[_0x381dc2(0xf9)],'path':_0x1de84e[_0x381dc2(0x123)](savePath,_0x1a30a5[_0x381dc2(0x14d)])}):(_0x3a2e1c={},_0x3a2e1c[_0x381dc2(0x129)]={[_0x228f35[_0x381dc2(0x118)]]:{'episodes':{[_0x228f35[_0x381dc2(0x131)]]:{'background':_0x228f35[_0x381dc2(0x115)],'data':{[_0x315e7d[_0x381dc2(0x13a)]]:{'size':_0x315e7d[_0x381dc2(0x164)],'downloaded':_0x315e7d[_0x381dc2(0xf9)],'path':_0x1de84e['join'](savePath,_0x1a30a5['path'])}}}},'poster':_0x228f35[_0x381dc2(0xf2)]}},_0x228f35['id']=_0x315e7d[_0x3e0cde(0x199)],_0x228f35[_0x381dc2(0x103)]=_0x315e7d[_0x381dc2(0x164)],_0x228f35[_0x381dc2(0x14d)]=_0x1de84e[_0x3e0cde(0x15e)](globalSavePath,_0xe2616e,_0x1a30a5[_0x3e0cde(0x180)])),_0x228f35={..._0x3a2e1c,..._0x228f35}):(_0x228f35['id']=_0x315e7d[_0x3e0cde(0x199)],_0x228f35[_0x381dc2(0x103)]=_0x315e7d[_0x3e0cde(0x18d)],_0x228f35[_0x3e0cde(0x14e)]=_0x315e7d[_0x381dc2(0xf9)],_0x228f35[_0x3e0cde(0x180)]=_0x1de84e[_0x3e0cde(0x15e)](savePath,_0x1a30a5[_0x3e0cde(0x180)])),jsonContent=JSON[_0x381dc2(0x122)](_0x228f35,null,0x2),_0x5553e3[_0x3e0cde(0x1a0)](_0x39d349,jsonContent,_0x381dc2(0x128),_0x484d53=>{const _0x14df2f=_0x381dc2;_0x484d53?console[_0x14df2f(0x133)](_0x14df2f(0x15b),_0x484d53):console[_0x14df2f(0x148)](_0x14df2f(0x141),_0x39d349);});}catch(_0x367a77){console[_0x381dc2(0x133)](_0x367a77);}_0x18c032({'id':_0x315e7d[_0x381dc2(0x13a)],'file':_0x1a30a5,'magnate':_0x315e7d[_0x381dc2(0x13e)],'name':_0x1a30a5[_0x381dc2(0x159)],'path':_0x1de84e[_0x381dc2(0x123)](savePath,_0x1a30a5[_0x381dc2(0x14d)]),'size':_0x315e7d[_0x381dc2(0x164)],'downloaded':_0x315e7d[_0x381dc2(0xf9)],'codec':_0x58a082[_0x381dc2(0x14b)](_0x1de84e[_0x381dc2(0x123)](savePath,_0x1a30a5[_0x381dc2(0x14d)])),'space':null,'files':_0x315e7d[_0x381dc2(0x10e)]}),clearInterval(interValD),interValD=setInterval(()=>{const _0x85add6=_0x3e0cde,_0x11ff50=_0x381dc2;try{Object[_0x11ff50(0x13c)](_0x38c8cd['get'](_0x315e7d[_0x85add6(0x199)])?.[_0x11ff50(0x109)]||{})[_0x11ff50(0x15c)](([_0x193d5a,_0x2a052a])=>{const _0xe493a3=_0x85add6,_0x1450ba=_0x11ff50;_0x2a052a[_0x1450ba(0x15d)]===_0x2a052a[_0xe493a3(0x147)]?_0x2a052a[_0x1450ba(0xee)](JSON[_0x1450ba(0x122)]({'type':_0x1450ba(0x13d),'downloaded':_0x315e7d[_0x1450ba(0xf9)],'uploadSpeed':_0x315e7d[_0xe493a3(0x139)],'downloadSpeed':_0x315e7d[_0xe493a3(0x18a)],'total':_0x315e7d[_0x1450ba(0x164)],'remaining':_0x315e7d[_0x1450ba(0x156)],'peers':_0x315e7d[_0x1450ba(0xf7)],'paused':_0x315e7d[_0x1450ba(0xf1)]})):_0x38c8cd[_0xe493a3(0x165)](_0x315e7d[_0x1450ba(0x13a)])[_0x1450ba(0x109)](_0x193d5a);});}catch(_0x13d735){console[_0x11ff50(0x133)](_0x13d735);}},0x3e8);let _0x34406=Date[_0x381dc2(0x140)]();updateBackground=function(_0x13f467){const _0x143330=_0x3e0cde,_0x3d0d4d=_0x381dc2;try{if(_0x228f35[_0x3d0d4d(0x11b)]==_0x3d0d4d(0x157)){downloadImages([_0x3d0d4d(0x116)+_0x13f467]);const _0x3e1e7b=_0x5553e3['readFileSync'](_0x1de84e[_0x3d0d4d(0x123)](globalSavePath,_0xe2616e,_0x3d0d4d(0x150)),_0x3d0d4d(0x128)),_0x35fbbc=JSON[_0x3d0d4d(0x12b)](_0x3e1e7b);_0x35fbbc['seasons'][_0x228f35[_0x3d0d4d(0x118)]][_0x3d0d4d(0x160)][_0x228f35[_0x143330(0x146)]][_0x3d0d4d(0x115)]=_0x13f467,_0x5553e3[_0x3d0d4d(0x10f)](_0x39d349,JSON[_0x3d0d4d(0x122)](_0x35fbbc,null,0x2),_0x3d0d4d(0x128)),console[_0x3d0d4d(0x148)](_0x3d0d4d(0x11e));}}catch(_0x1c99cb){console[_0x3d0d4d(0x133)](_0x1c99cb);}},setSubtitles=function(_0x21f58b){const _0x248d9c=_0x3e0cde,_0x3bb33b=_0x381dc2;let _0x44d83f;try{if(_0x228f35[_0x3bb33b(0x11b)]==_0x3bb33b(0x157)){const _0x390c80=_0x5553e3[_0x3bb33b(0x138)](_0x1de84e[_0x248d9c(0x15e)](globalSavePath,_0xe2616e,_0x3bb33b(0x150)),_0x3bb33b(0x128));_0x44d83f=JSON[_0x3bb33b(0x12b)](_0x390c80)[_0x3bb33b(0x129)][_0x228f35[_0x3bb33b(0x118)]]['episodes'][_0x228f35[_0x248d9c(0x146)]][_0x3bb33b(0x15a)][_0x4e0df4][_0x248d9c(0x180)];}else _0x44d83f=_0x228f35[_0x3bb33b(0x14d)];const _0x42b991=_0x1de84e[_0x3bb33b(0xef)](_0x44d83f),_0x31b564=_0x44d83f[_0x3bb33b(0x125)](_0x42b991,_0x3bb33b(0x11d));console[_0x3bb33b(0x148)](_0x31b564),_0x5553e3[_0x3bb33b(0x10f)](_0x31b564,_0x21f58b,_0x3bb33b(0x128)),console[_0x3bb33b(0x148)](_0x3bb33b(0x134));}catch(_0x1ce405){console[_0x3bb33b(0x133)](_0x1ce405);}};let _0xa3458=!0x1;_0x315e7d['on'](_0x381dc2(0xfb),function(_0x2ad9d8){const _0x19f6ef=_0x3e0cde,_0x856512=_0x381dc2;if(_0x34406<Date[_0x856512(0x140)]()-0x1f40&&!_0xa3458){_0x34406=Date[_0x856512(0x140)](),_0x5397f6=!0x0;try{if(_0x228f35[_0x19f6ef(0x1ab)]==_0x856512(0x157)){const _0x3b8207=_0x5553e3[_0x856512(0x138)](_0x1de84e[_0x856512(0x123)](globalSavePath,_0xe2616e,_0x19f6ef(0x16c)),_0x856512(0x128)),_0x375ae1=JSON[_0x19f6ef(0x178)](_0x3b8207);console[_0x856512(0x148)](_0x228f35[_0x856512(0x118)]),_0x375ae1[_0x19f6ef(0x1ac)][_0x228f35[_0x856512(0x118)]][_0x19f6ef(0x18f)][_0x228f35[_0x856512(0x131)]][_0x856512(0x15a)][_0x4e0df4][_0x856512(0xf9)]=_0x315e7d[_0x856512(0xf9)],_0x5553e3[_0x856512(0x10f)](_0x39d349,JSON['stringify'](_0x375ae1,null,0x2),_0x856512(0x128)),_0x375ae1[_0x856512(0x129)][_0x228f35[_0x856512(0x118)]][_0x856512(0x160)][_0x228f35[_0x856512(0x131)]][_0x19f6ef(0x18b)][_0x4e0df4][_0x19f6ef(0x14e)]==_0x375ae1[_0x856512(0x129)][_0x228f35[_0x856512(0x118)]][_0x856512(0x160)][_0x228f35[_0x856512(0x131)]][_0x856512(0x15a)][_0x4e0df4][_0x856512(0x103)]&&(_0xa3458=!0x0);}else _0x228f35[_0x19f6ef(0x14e)]=_0x315e7d[_0x19f6ef(0x14e)],_0x5553e3[_0x856512(0x10f)](_0x39d349,JSON[_0x856512(0x122)](_0x228f35,null,0x2),_0x856512(0x128)),_0x228f35[_0x856512(0xf9)]==_0x228f35[_0x856512(0x103)]&&(_0xa3458=!0x0);}catch(_0x4ab228){console[_0x856512(0x133)](_0x4ab228);}}}),_0x315e7d['on'](_0x3e0cde(0x186),_0x5b3ec8=>{const _0x43945b=_0x3e0cde,_0xede536=_0x381dc2;let _0x5af5a3={};if(_0x5b3ec8[_0xede536(0xf4)]()[_0xede536(0x14a)](_0xede536(0x106)))return _0x5af5a3={'id':_0x315e7d[_0x43945b(0x199)],'type':_0xede536(0x14c),'magnate':_0x315e7d[_0xede536(0x13e)],'downloaded':_0x315e7d[_0xede536(0xf9)]},void _0x18c032(_0x5af5a3);try{_0x5af5a3={'error':_0x5b3ec8,'type':_0xede536(0x158),'message':_0x5b3ec8[_0x43945b(0x150)]()[_0xede536(0x125)]('WebTorrent:','')};}catch(_0x30c6a0){}_0x4d3176(_0x5af5a3),Object[_0x43945b(0x198)](_0x38c8cd[_0xede536(0x119)](_0x315e7d[_0xede536(0x13a)])?.[_0xede536(0x109)]||{})[_0xede536(0x15c)](([_0x3ae237,_0x8fe4c4])=>{const _0x4fd4bd=_0x43945b,_0x38fe93=_0xede536;_0x8fe4c4[_0x38fe93(0x15d)]===_0x8fe4c4[_0x38fe93(0x112)]?_0x8fe4c4[_0x4fd4bd(0x15a)](JSON[_0x4fd4bd(0x153)](_0x5af5a3)):_0x38c8cd[_0x38fe93(0x119)](_0x315e7d[_0x38fe93(0x13a)])[_0x38fe93(0x109)](_0x3ae237);});});}),client['on'](_0x50642c(0x133),_0x1c4a1a=>{const _0x12ff7c=_0x4c4597,_0x444d65=_0x50642c;if(console[_0x444d65(0x133)](_0x1c4a1a),_0x4e0df4&&!_0x1c4a1a[_0x444d65(0xf4)]()[_0x12ff7c(0x1aa)](_0x444d65(0x106)))try{Object[_0x12ff7c(0x198)](_0x38c8cd[_0x444d65(0x119)](_0x4e0df4)?.[_0x444d65(0x109)]||{})[_0x444d65(0x15c)](([_0x8f630d,_0x34defd])=>{const _0x4edfac=_0x12ff7c,_0x5634ad=_0x444d65;_0x34defd[_0x5634ad(0x15d)]===_0x34defd[_0x5634ad(0x112)]?_0x34defd[_0x5634ad(0xee)](JSON[_0x5634ad(0x122)](_0x1c4a1a?.[_0x5634ad(0x125)](_0x4edfac(0x14a),''))):_0x38c8cd[_0x5634ad(0x119)](torrent['infoHash'])[_0x5634ad(0x109)](_0x8f630d);});}catch(_0x182db1){console[_0x12ff7c(0x186)](_0x182db1);}});}catch(_0x1c35cf){_0x4d3176({'error':_0x50642c(0x124),'type':_0x50642c(0xf0),'message':_0x50642c(0x100)+_0x1c35cf[_0x50642c(0xf4)](_0x50642c(0x147))});}});}