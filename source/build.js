const P=require('pptxgenjs'),React=require('react'),RS=require('react-dom/server'),sharp=require('sharp'),fa=require('react-icons/fa'),fs=require('fs');
let applyTheme=async()=>{};try{applyTheme=require('./apply_theme.js').applyTheme;}catch(e){console.log('apply_theme.js not found - theme colours skipped (optional)');}
const G='1B5E20',F='66BB6A',CR='F5F1E8',GR='5F6B61',INK='1F2A24',W='FFFFFF',TI='E8F5E9',LG='ECEFEC',FN='Calibri';
const N={leaf:'FaLeaf',seed:'FaSeedling',cloud:'FaCloudSun',water:'FaTint',harv:'FaTractor',chart:'FaChartLine',hand:'FaHandshake',truck:'FaTruck',user:'FaUserTie',phone:'FaMobileAlt',db:'FaDatabase',cogs:'FaCogs',check:'FaCheckCircle',reg:'FaUserPlus',pin:'FaMapMarkerAlt',layers:'FaLayerGroup',cam:'FaCamera',chip:'FaMicrochip',robot:'FaRobot',box:'FaBoxOpen',lang:'FaLanguage',route:'FaRoute',store:'FaStore',wifi:'FaWifi',eye:'FaEye',tools:'FaTools',coins:'FaCoins',sun:'FaSun',bulb:'FaLightbulb',users:'FaUsers',bank:'FaLandmark',flask:'FaFlask'};
const IC={};
async function prep(){for(const k in N)for(const c of [W,G]){const svg=RS.renderToStaticMarkup(React.createElement(fa[N[k]],{color:'#'+c,size:256}));IC[k+c]='image/png;base64,'+(await sharp(Buffer.from(svg)).resize(256,256).png().toBuffer()).toString('base64');}}
const guide=[];
(async()=>{
await prep();
const pres=new P();pres.layout='LAYOUT_16x9';pres.title='Smart Crop Advisory System';
const THEME={name:'SmartAgri',headFontFace:FN,bodyFontFace:FN,colors:{dk1:INK,lt1:W,dk2:G,lt2:CR,accent1:G,accent2:F,accent3:'8D6E63',accent4:'FBC02D',accent5:'0288D1',accent6:GR,hlink:G,folHlink:GR}};
pres.theme={headFontFace:FN,bodyFontFace:FN};
const RR=pres.shapes.ROUNDED_RECTANGLE,RC=pres.shapes.RECTANGLE,EL=pres.shapes.OVAL,LN=pres.shapes.LINE;
const ico=(s,k,x,y,z,c=W)=>s.addImage({data:IC[k+c],x,y,w:z,h:z});
const tx=(s,t,x,y,w,h,o={})=>s.addText(t,Object.assign({x,y,w,h,fontFace:FN,fontSize:14,color:INK,valign:'top',margin:0,isTextBox:true},o));
const bl=(s,a,x,y,w,h,z=14,c=INK)=>tx(s,a.map((t,i)=>({text:t,options:{bullet:true,breakLine:i<a.length-1,paraSpaceAfter:5}})),x,y,w,h,{fontSize:z,color:c});
const rr=(s,x,y,w,h,fill,line)=>s.addShape(RR,{x,y,w,h,rectRadius:.08,fill:{color:fill},line:{color:line||fill,width:1}});
const arr=(s,x1,y1,x2,y2,c=G)=>s.addShape(LN,{x:x1,y:y1,w:x2-x1,h:y2-y1,line:{color:c,width:2.25,endArrowType:'triangle'}});
const photo=(s,x,y,w,h,label,dark)=>{guide.push(label);rr(s,x,y,w,h,dark?'2E7D32':TI,F);s.objects;const c=dark?W:G;
 if(h<1){ico(s,'cam',x+.2,y+h/2-.15,.3,c);tx(s,'PHOTO: '+label,x+.65,y+.05,w-.8,h-.1,{fontSize:11,color:dark?W:GR,valign:'middle'});}
 else{ico(s,'cam',x+w/2-.2,y+h/2-.55,.4,c);tx(s,'PHOTO: '+label,x+.12,y+h/2-.05,w-.24,h/2-.1,{fontSize:11,color:dark?W:GR,align:'center'});}};
const title=(s,t,n)=>{tx(s,t,.5,.3,9,.65,{fontSize:28,bold:true,color:G,valign:'middle'});s.slideNumber={x:9.0,y:5.25,fontSize:10,color:GR,fontFace:FN};if(n)s.addNotes(n);};
const tag=(s,t,x,y,w)=>tx(s,t,x,y,w,.25,{fontSize:10.5,italic:true,color:GR});
const card=(s,x,y,w,h,k,label,z=13)=>{rr(s,x,y,w,h,CR,F);ico(s,k,x+w/2-.2,y+.12,.4,G);tx(s,label,x+.1,y+.6,w-.2,h-.65,{fontSize:z,align:'center',bold:true,color:INK});};
const flow=(s,labels,keys,y,h)=>{const n=labels.length,gap=.4,w=(9-(n-1)*gap)/n;labels.forEach((l,i)=>{const x=.5+i*(w+gap);card(s,x,y,w,h,keys[i],l,14);if(i<n-1)arr(s,x+w+.04,y+h/2,x+w+gap-.04,y+h/2);});};
const chip=(s,x,y,w,h,k,l)=>{rr(s,x,y,w,h,CR,F);s.addShape(EL,{x:x+.12,y:y+h/2-.25,w:.5,h:.5,fill:{color:G},line:{color:G}});ico(s,k,x+.24,y+h/2-.13,.26);tx(s,l,x+.75,y,w-.85,h,{fontSize:13,bold:true,valign:'middle'});};
const circ=(s,x,y,z,k)=>{s.addShape(EL,{x,y,w:z,h:z,fill:{color:G},line:{color:G}});ico(s,k,x+z*.25,y+z*.25,z*.5);};
const nb=()=>pres.addSlide();

// 1 Title
let s=nb();s.background={color:G};
tx(s,'SMART CROP ADVISORY SYSTEM',.6,.9,5.2,1.4,{fontSize:36,bold:true,color:W,valign:'middle'});
tx(s,'For Small and Marginal Farmers',.6,2.35,5.2,.45,{fontSize:20,color:'C8E6C9'});
tx(s,'An Integrated Digital Platform for Crop-to-Market Support',.6,2.9,5.2,.7,{fontSize:15,italic:true,color:W});
tx(s,['Student Name: ______________________','Department: ________________________','College: ____________________________','Project Guide: ______________________','Academic Year: ____________________'].map((t,i,a)=>({text:t,options:{breakLine:i<a.length-1,paraSpaceAfter:3}})),.6,3.75,5.2,1.5,{fontSize:13,color:W});
photo(s,6.1,.5,3.4,4.6,'Indian farmer standing in a green field holding a smartphone',true);
circ(s,6.35,4.4,.55,'phone');circ(s,7.0,4.4,.55,'leaf');circ(s,7.65,4.4,.55,'cloud');
s.addNotes('Good morning. This is our project, the Smart Crop Advisory System for Small and Marginal Farmers. It is a proposed integrated digital platform that supports farmers from crop selection to selling their produce.');

// 2 Intro
s=nb();title(s,'Introduction','Small and marginal farmers face difficulties at almost every stage: choosing crops and seeds, knowing the weather, planning irrigation, harvesting, selling, finding customers and arranging transport. Today this information is scattered. Our proposal brings these support services together in one platform.');
bl(s,['Crop selection and seed selection','Weather awareness','Irrigation planning','Harvesting','Marketing and selling','Customer connectivity','Transportation'],.5,1.15,4.4,2.9,15);
rr(s,.5,4.15,4.4,.95,G);tx(s,'The proposed digital platform brings multiple farmer-support services together in one place.',.65,4.15,4.1,.95,{fontSize:14,bold:true,color:W,valign:'middle'});
photo(s,5.3,1.15,4.2,2.9,'Indian farmer inspecting crops in a green field');
['leaf','cloud','water','harv','chart','truck'].forEach((k,i)=>circ(s,5.35+i*.7,4.3,.55,k));

// 3 Problem
s=nb();title(s,'Problem Statement','These are the main problems identified in the project. Farmers find it hard to select suitable crops and seeds, get timely weather information, plan irrigation and harvesting, learn about market prices, reach customers directly and arrange transport. All this information is spread across different sources.');
photo(s,.5,1.1,9,.65,'Background photograph of Indian agricultural fields or farmers');
const pr=[['leaf','Difficulty selecting suitable crops and seeds'],['cloud','Lack of timely weather information'],['water','Difficulty planning irrigation'],['harv','Limited harvesting guidance'],['chart','Lack of market-price and selling information'],['hand','Difficulty connecting directly with customers'],['truck','Transportation challenges'],['layers','Agricultural information spread across different sources']];
pr.forEach((p,i)=>card(s,.5+(i%4)*2.3,1.95+Math.floor(i/4)*1.7,2.1,1.55,p[0],p[1],13));

// 4 Proposed
s=nb();title(s,'Proposed System','The proposed system is a single farmer-oriented platform with eight services: crop selection, seed selection, weather information, irrigation guidance, harvesting guidance, market information, customer connection and transportation support. The phone screen is a conceptual mockup, not an implemented application.');
const L=[['leaf','Crop selection guidance'],['seed','Seed selection support'],['cloud','Weather information'],['water','Irrigation guidance']],R=[['harv','Harvesting guidance'],['chart','Market information'],['hand','Customer connection'],['truck','Transportation support']];
L.forEach((m,i)=>chip(s,.5,1.15+i*.95,3.1,.8,m[0],m[1]));R.forEach((m,i)=>chip(s,6.4,1.15+i*.95,3.1,.8,m[0],m[1]));
rr(s,3.9,1.1,2.2,3.75,INK);rr(s,4.0,1.3,2.0,3.35,W);rr(s,4.08,1.38,1.84,.42,G);tx(s,'Farmer Dashboard',4.08,1.38,1.84,.42,{fontSize:11,bold:true,color:W,align:'center',valign:'middle'});
[['leaf','Crop'],['cloud','Weather'],['chart','Market'],['truck','Transport']].forEach((t,i)=>{const x=4.1+(i%2)*.92,y=1.9+Math.floor(i/2)*.95;rr(s,x,y,.85,.85,TI,F);ico(s,t[0],x+.28,y+.1,.3,G);tx(s,t[1],x,y+.5,.85,.3,{fontSize:10,align:'center',bold:true});});
rr(s,4.1,3.85,1.8,.15,LG);rr(s,4.1,4.1,1.3,.15,LG);rr(s,4.1,4.35,1.5,.15,LG);
tag(s,'Conceptual mockup - not an implemented application',2.5,4.95,5);

// 5 Architecture
s=nb();title(s,'System Architecture','The farmer provides farm and crop information to the smart advisory platform. The platform processes this data and generates recommendations through eight modules. The farmer then makes the final decision. This is the proposed architecture, not an implemented system.');
const top=[['user','Farmer'],['db','Farm / Crop Information'],['phone','Smart Advisory Platform'],['chip','Data Processing and Recommendation']];
top.forEach((t,i)=>{const x=.5+i*2.333;card(s,x,1.1,2.0,1.1,t[0],t[1],13);if(i<3)arr(s,x+2.04,1.65,x+2.29,1.65);});
arr(s,8.5,2.22,8.5,2.55);
rr(s,.5,2.55,9,1.35,LG);
[['leaf','Crop'],['seed','Seed'],['cloud','Weather'],['water','Irrigation'],['harv','Harvest'],['chart','Market'],['hand','Customer'],['truck','Transport']].forEach((m,i)=>{const x=.72+i*1.08;rr(s,x,2.65,1.0,1.15,W,F);ico(s,m[0],x+.3,2.75,.4,G);tx(s,m[1],x,3.25,1.0,.4,{fontSize:11,bold:true,align:'center'});});
arr(s,5,3.92,5,4.25);rr(s,3.5,4.25,3,.6,G);tx(s,'Farmer Decision',3.5,4.25,3,.6,{fontSize:17,bold:true,color:W,align:'center',valign:'middle'});
tag(s,'Proposed conceptual architecture - not an implemented system',.5,4.95,6);

// 6 Methodology
s=nb();title(s,'Working Methodology','The workflow has eight steps. The farmer registers and enters location and farm details. The system processes the available information and gives crop and seed recommendations, weather and irrigation support, and harvest planning guidance. Finally, market information is shown and customer and transport services are connected.');
const st=[['reg','Farmer registration'],['pin','Enter location and farm details'],['cogs','System processes available information'],['leaf','Crop and seed recommendations generated'],['cloud','Weather and irrigation support provided'],['harv','Harvest planning guidance provided'],['chart','Market information displayed'],['truck','Customer and transport services connected']];
st.forEach((t,i)=>{const x=.5+(i%4)*2.333,y=1.2+Math.floor(i/4)*2.0;card(s,x,y,2.0,1.65,t[0],t[1],13);s.addShape(EL,{x:x+.08,y:y+.08,w:.36,h:.36,fill:{color:G},line:{color:G}});tx(s,String(i+1),x+.08,y+.08,.36,.36,{fontSize:13,bold:true,color:W,align:'center',valign:'middle'});if(i%4<3)arr(s,x+2.04,y+.82,x+2.29,y+.82);});
tx(s,'Steps 1-4 (top row) continue into steps 5-8 (bottom row)',.5,4.95,6,.25,{fontSize:10.5,italic:true,color:GR});

// 7 Crop & seed
s=nb();title(s,'Crop and Seed Recommendation','This module uses soil and climate parameters such as nitrogen, phosphorus, potassium, soil pH, temperature, humidity and rainfall to support informed crop and seed selection. We do not claim model accuracy here; the dashboard is illustrative only.');
['Nitrogen (N)','Phosphorus (P)','Potassium (K)','Soil pH','Temperature','Humidity','Rainfall','Environmental parameters'].forEach((t,i)=>{const x=.5+(i%2)*2.25,y=1.15+Math.floor(i/2)*.55;rr(s,x,y,2.15,.45,TI,F);tx(s,t,x,y,2.15,.45,{fontSize:12,bold:true,align:'center',valign:'middle'});});
bl(s,['Soil and climate data guide crop choice','Helps match suitable seeds to local conditions','Recommendations are proposed, not validated'],.5,3.5,4.4,1.6,14);
photo(s,5.2,1.15,2.15,1.65,'Indian farmer examining crops');photo(s,7.45,1.15,2.05,1.65,'Different agricultural seeds');
photo(s,5.2,2.95,2.15,1.65,'Healthy crop varieties in the field');
rr(s,7.45,2.95,2.05,1.65,W,F);tx(s,'Crop Recommendation',7.5,3.0,1.95,.25,{fontSize:10,bold:true,color:G,align:'center'});
[['N',.8],['P',.55],['K',.7]].forEach((b,i)=>{tx(s,b[0],7.55,3.35+i*.32,.25,.22,{fontSize:10,bold:true});rr(s,7.85,3.38+i*.32,1.5,.16,LG);rr(s,7.85,3.38+i*.32,1.5*b[1],.16,F);});
rr(s,7.55,4.3,1.85,.22,G);tx(s,'Suggested crop: sample',7.55,4.3,1.85,.22,{fontSize:9.5,color:W,align:'center',valign:'middle'});
tag(s,'Conceptual dashboard - illustrative only',5.2,4.7,4.3);

// 8 Weather & irrigation
s=nb();title(s,'Weather Information and Irrigation Support','Weather awareness, rainfall, temperature and humidity help the farmer plan irrigation and manage water. The process is simple: weather and environmental information supports irrigation planning, which supports the farmer decision. The interfaces shown are illustrative samples; there are no live readings.');
[['Weather and Environmental Information','cloud'],['Irrigation Planning','water'],['Farmer Decision','check']].forEach((t,i)=>{const x=.5+i*3.25;rr(s,x,1.1,2.5,.9,G);ico(s,t[1],x+.15,1.35,.4);tx(s,t[0],x+.65,1.1,1.75,.9,{fontSize:13,bold:true,color:W,valign:'middle'});if(i<2)arr(s,x+2.54,1.55,x+3.21,1.55);});
bl(s,['Weather awareness','Rainfall information','Temperature and humidity','Irrigation planning','Water management'],.5,2.3,4.3,2.7,15);
photo(s,5.0,2.2,2.2,1.4,'Indian farm under changing weather, dark clouds and sun');photo(s,7.3,2.2,2.2,1.4,'Irrigation water flowing through crop rows');
rr(s,5.0,3.75,2.2,1.3,W,F);ico(s,'sun',5.1,3.85,.35,G);tx(s,'Weather (sample)',5.5,3.85,1.65,.35,{fontSize:11,bold:true,valign:'middle'});tx(s,'-- C   -- %   -- mm',5.1,4.3,2.0,.3,{fontSize:13,bold:true,color:G});tx(s,'Illustrative values',5.1,4.7,2.0,.25,{fontSize:10,italic:true,color:GR});
rr(s,7.3,3.75,2.2,1.3,W,F);tx(s,'Soil moisture',7.4,3.85,2.0,.3,{fontSize:11,bold:true});rr(s,7.4,4.3,2.0,.22,LG);rr(s,7.4,4.3,1.2,.22,F);tx(s,'Illustrative water management',7.4,4.7,2.0,.25,{fontSize:10,italic:true,color:GR});

// 9 Harvest
s=nb();title(s,'Harvesting Guidance','Harvest planning is an important part of farming. The platform gives guidance on harvest planning, suitable harvesting activities, handling of the harvested crop and preparation for selling and transport. Automatic prediction of crop maturity is a future enhancement and is not claimed.');
flow(s,['Crop Monitoring','Harvest Planning','Harvesting','Post-Harvest Handling'],['eye','tools','harv','box'],1.1,1.15);
bl(s,['Harvest planning','Identifying appropriate harvesting activities','Harvested crop handling','Preparation for selling and transportation'],.5,2.6,4.4,2.2,15);
photo(s,5.2,2.6,2.15,2.2,'Indian farmers harvesting mature paddy');photo(s,7.45,2.6,2.05,2.2,'Harvested grains, vegetables or crop samples');
tag(s,'Guidance only - automatic maturity prediction is a future enhancement',.5,4.95,7);

// 10 Market
s=nb();title(s,'Market Information','Market information helps farmers understand selling opportunities. The platform is proposed to provide access to market information, awareness of selling options and support for market decisions, and to help prepare harvested produce for sale. The price fields in the dashboard are placeholders, not real data.');
bl(s,['Access to market information','Awareness of selling options','Support for market-related decisions','Preparation for selling harvested produce'],.5,1.2,4.3,2.6,15);
photo(s,5.1,1.15,4.4,1.85,'Indian agricultural market with vegetables, grains, farmers and vendors');
const th={bold:true,color:W,fill:{color:G},fontSize:11,fontFace:FN},td={fontSize:11,fontFace:FN,color:INK};
s.addTable([[{text:'Crop category',options:th},{text:'Price (Rs/quintal)',options:th}],...['Cereals','Vegetables','Pulses','Fruits'].map(c=>[{text:c,options:td},{text:'--- (illustrative)',options:Object.assign({italic:true,color:GR},td)}])],{x:5.1,y:3.15,w:4.4,colW:[2.2,2.2],rowH:.3,border:{type:'solid',color:F,pt:1}});
tag(s,'Conceptual dashboard - placeholder fields, no real prices',5.1,4.85,4.4);

// 11 Customer
s=nb();title(s,'Customer Connection','This proposed module connects farmers with potential customers. Farmers can list available produce, customers can view it, and both can communicate to coordinate the sale. The interface shown is a conceptual mockup.');
flow(s,['Farmer','Produce Information','Customer Connection','Sale Coordination'],['user','box','hand','check'],1.1,1.15);
bl(s,['Connect farmers and potential customers','Display available produce','Support direct communication','Help coordinate produce sales'],.5,2.6,3.1,2.4,14);
photo(s,3.8,2.6,2.6,2.3,'Indian farmer handing fresh vegetables to a customer');
rr(s,6.6,2.6,2.9,2.3,W,F);circ(s,6.75,2.75,.5,'user');circ(s,7.8,2.75,.5,'phone');circ(s,8.85,2.75,.5,'users');arr(s,7.3,3.0,7.75,3.0);arr(s,8.35,3.0,8.8,3.0);
['Vegetables','Grains','Fruits'].forEach((t,i)=>{const x=6.7+i*.93;rr(s,x,3.55,.85,.65,TI,F);tx(s,t,x,3.55,.85,.65,{fontSize:10,bold:true,align:'center',valign:'middle'});});
tag(s,'Conceptual mockup',6.7,4.5,2.7);

// 12 Transport
s=nb();title(s,'Transportation Support','The transportation module connects farms, markets and customers. It is proposed to support transport coordination, movement of produce from farms, delivery planning, and links between collection points, markets and customers. No live GPS tracking or route optimisation is claimed.');
flow(s,['Farm','Collection Point','Market / Customer'],['leaf','warehouse'in N?'warehouse':'box','store'],1.1,1.15);
bl(s,['Transportation coordination','Produce movement from farms','Delivery planning','Links between collection points, markets and customers'],.5,2.6,4.4,2.3,14);
photo(s,5.2,2.6,2.15,2.3,'Small transport truck carrying fresh produce on a rural Indian road');photo(s,7.45,2.6,2.05,2.3,'Crates of harvested vegetables');
tag(s,'Conceptual module - no live tracking or route optimisation claimed',.5,4.95,7);

// 13 Research gap
s=nb();title(s,'Existing Research and Research Gap','Existing research covers crop recommendation from NPK, pH, temperature, humidity and rainfall, plant disease detection, fertiliser recommendation, yield prediction and multilingual advisory platforms. Many systems focus on one or a few functions. Farmers may benefit from connected support across the complete agricultural cycle.');
['Crop recommendation (NPK values)','Soil pH','Temperature and humidity','Rainfall and environmental parameters','Plant disease detection','Fertilizer recommendation','Yield prediction','Multilingual advisory platforms'].forEach((t,i)=>{const x=.5+(i%4)*2.3,y=1.1+Math.floor(i/4)*.6;rr(s,x,y,2.15,.5,TI,F);tx(s,t,x+.05,y,2.05,.5,{fontSize:11,bold:true,align:'center',valign:'middle'});});
tx(s,'Research gap: many systems cover only one or a few functions.',.5,2.4,9,.35,{fontSize:15,bold:true,color:G});
rr(s,.5,2.85,4.0,1.1,LG);tx(s,'Separate tools',.6,2.9,3.8,.3,{fontSize:12,bold:true,color:GR});['Crop','Disease','Fertilizer'].forEach((t,i)=>{rr(s,.65+i*1.2,3.3,1.1,.45,W,GR);tx(s,t,.65+i*1.2,3.3,1.1,.45,{fontSize:11,align:'center',valign:'middle'});});
arr(s,4.6,3.4,5.0,3.4);rr(s,5.1,2.85,4.4,1.1,G);tx(s,'One integrated farmer-oriented platform',5.25,2.9,4.1,.4,{fontSize:14,bold:true,color:W});tx(s,'Connected support across the complete cycle',5.25,3.35,4.1,.5,{fontSize:13,color:W});
['Crop Selection','Cultivation','Irrigation','Harvesting','Marketing','Selling','Transportation'].forEach((t,i)=>{const w=1.1,x=.5+i*1.317;rr(s,x,4.25,w,.6,CR,F);tx(s,t,x,4.25,w,.6,{fontSize:11,bold:true,align:'center',valign:'middle'});if(i<6)arr(s,x+w+.01,4.55,x+1.31,4.55);});

// 14 Feasibility
s=nb();title(s,'Feasibility and Scalability','We present feasibility as a proposal. Technically the platform could use web or mobile technologies, databases, APIs and machine learning. Economically a software platform may need less physical infrastructure. Operationally a simple interface could improve accessibility. For scalability, future additions include AI, real-time data, regional languages, voice, government services and IoT.');
[['cogs','Technical Feasibility','Could use web or mobile technologies, databases, APIs and machine learning models.'],['coins','Economic Feasibility','A software-based platform may reduce the need for initial physical infrastructure.'],['users','Operational Feasibility','A simple interface could improve accessibility for farmers.'],['chip','Future Scalability','Potential additions: AI, real-time weather and market data, regional languages, voice interaction, government services and IoT monitoring.']].forEach((c,i)=>{const x=.5+(i%2)*4.6,y=1.1+Math.floor(i/2)*2.0;rr(s,x,y,4.4,1.85,CR,F);circ(s,x+.2,y+.2,.6,c[0]);tx(s,c[1],x+1.0,y+.2,3.3,.4,{fontSize:16,bold:true,color:G});tx(s,c[2],x+1.0,y+.65,3.3,1.15,{fontSize:13});});
tag(s,'Feasibility is a proposal; no implementation or cost analysis is available.',.5,5.1,7);

// 15 Benefits & future
s=nb();title(s,'Expected Benefits and Future Scope','Expected benefits are what the proposed platform aims to provide. Future scope lists enhancements for later work; these are not completed functions. They include AI recommendations, machine learning prediction, IoT monitoring, computer vision, regional languages and voice, real-time market prices, government scheme information and smart irrigation control.');
rr(s,.5,1.1,4.4,3.4,CR,F);rr(s,.5,1.1,4.4,.45,G);tx(s,'Expected Benefits',.65,1.1,4.1,.45,{fontSize:15,bold:true,color:W,valign:'middle'});
bl(s,['Better-informed crop selection','Timely agricultural information','Improved irrigation planning','Better harvest planning','Easier access to market information','Direct farmer-customer connection','Easier transportation coordination','Multiple services through one platform'],.65,1.65,4.1,2.8,13);
rr(s,5.1,1.1,4.4,3.4,CR,F);rr(s,5.1,1.1,4.4,.45,F);tx(s,'Future Scope (not yet implemented)',5.25,1.1,4.1,.45,{fontSize:15,bold:true,color:INK,valign:'middle'});
bl(s,['AI-powered personalized crop recommendations','Machine learning for crop and market prediction','IoT-based soil and environmental monitoring','Computer vision for plant disease identification','Regional languages and voice interaction','Real-time market-price information','Government agricultural scheme information','Smart irrigation control'],5.25,1.65,4.1,2.8,13);
s.addShape(LN,{x:1.0,y:4.95,w:8.0,h:0,line:{color:F,width:2}});
['user','phone','wifi','leaf','cloud','water','chart'].forEach((k,i)=>circ(s,.75+i*1.3,4.65,.6,k));
tag(s,'Smart farming concept',7.9,4.3,1.8);

// 16 Conclusion & refs
s=nb();title(s,'Conclusion and References','In conclusion, the Smart Crop Advisory System is a proposed integrated platform supporting small and marginal farmers across the agricultural cycle through eight modules. It gives a foundation for future AI, IoT and data-driven agricultural services. The references are kept as in the original presentation.');
bl(s,['The Smart Crop Advisory System is a proposed integrated digital platform supporting small and marginal farmers throughout the agricultural cycle.','Core modules: crop selection, seed selection, weather information, irrigation, harvesting, market information, customer connectivity and transportation.','It provides a foundation for future AI-, IoT- and data-driven agricultural services.'],.5,1.15,4.2,3.9,14);
rr(s,4.95,1.1,4.55,4.0,CR,F);tx(s,'References',5.1,1.17,4.2,.3,{fontSize:15,bold:true,color:G});
tx(s,['Smart Crop Advisory System for Small and Marginal Farmers, 2026.','Smart Crop Advisory System: A Machine Learning Approach to Precision Crop Recommendation Using Soil and Climatic Parameters, 2026.','An IoT-enabled AI system for real-time crop prediction using soil and weather data in precision agriculture, Smart Agricultural Technology, 2025.','A Review on AI-Driven Smart Crop Advisory Systems for Small and Marginal Farmers, 2026.','KRISHI.AI: an explainable machine learning framework for data-driven crop recommendation, Scientific Reports, 2026.'].map((t,i,a)=>({text:t,options:{bullet:{type:'number'},breakLine:i<a.length-1,paraSpaceAfter:4}})),5.1,1.55,4.25,3.45,{fontSize:11});

// 17 Thank you
s=nb();s.background={color:G};
tx(s,'THANK YOU',.6,1.6,4.5,1,{fontSize:44,bold:true,color:W,valign:'middle'});
tx(s,'Smart Crop Advisory System for Small and Marginal Farmers',.6,2.7,4.4,.9,{fontSize:18,color:'C8E6C9'});
photo(s,5.3,.5,4.2,4.6,'Indian agricultural landscape with green crops and a farmer',true);
s.addNotes('Thank you. We are happy to answer any questions about the proposed Smart Crop Advisory System.');

await pres.writeFile({fileName:'Smart_Crop_Advisory_System.pptx'});
await applyTheme('Smart_Crop_Advisory_System.pptx',THEME);
fs.writeFileSync('PHOTO_GUIDE.md','# Photo guide (replace each dashed PHOTO frame)\nUse royalty-free, high-resolution, watermark-free photos (Unsplash, Pexels). Right-click frame > Change Picture > Fill/Crop.\n\n'+[...new Set(guide)].map((g,i)=>(i+1)+'. '+g).join('\n')+'\n');
console.log('done',guide.length);
})();
