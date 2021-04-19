const http = require('https');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
/*API language*/
const lang = 'it-it';
/*API priaid sandbox url*/
const hosthealth = 'sandbox-healthservice.priaid.ch';
/*Function URL to retrieve authentication token*/
const hostoken = 'URL';

/*API query methods*/
function findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] == value) {
            return array[i];
        } 
}
return null;
}
function chunkSubstr(str, size) {
  const numChunks = Math.ceil(str.length / size)
  const chunks = new Array(numChunks)

  for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size)
  }

  return chunks
}
function getFields(input, field) {
    var outputar = [];
    for (var i=0; i < input.length ; i++) {
        outputar.push(input[i][field]);
        }
    return outputar;
}

/*GET response*/
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 5000));
app.listen((process.env.PORT || 5000));
app.get('/', function (req, res) {
    res.send('Deployed!');
});

/*POST response*/
app.post('/', function (req, res) {
  let symparameters = {};
  let propObj = {};
  let prop1Obj = {};
  let soloObj = {};
  let symObj = {};
  let sym1Obj = {};
  let sym2Obj = {};
  let sym3Obj = {};
  let sym4Obj = {};
  let speech = '';
  let idsymptom = '';
  let symptom = ''; 
  let symptom1 = '';
  let symptom2 = '';
  let symptom3 = '';
  let symptom4 = '';
  let propsymptomreq = ''; 
  let propsymptomreq1 = '';
  let solopropsymptomreq = ''; 
  let propsymptom = ''; 
  let propsymptom1 = '';
  let propsymptom2 = '';
  let propsymptom3 = '';
  let propsymptom4 = '';
  let propsymptom5 = '';
  let propsymptom6 = '';
  let propsymptom7 = '';
  let propid = ''; 
  let propid1 = '';
  let propid2 = '';
  let propid3 = '';
  let propid4 = '';
  let propid5 = '';
  let propid6 = '';
  let propid7 = '';
  let proposed1 = '';
  let proposed2 = '';
  let proposed3 = '';
  let proposed4 = '';
  let proposed5 = '';
  let proposed6 = '';
  let proposed7 = '';
  let propo = '';
  let propo1 = '';
  let propo2 = '';
  let propo3 = '';
  let gender = ''; 
  let year = '';
  let height = '';
  let weight = '';
  let intent = '';
  let actualcontext = '';
  let contexts = [];
  let contextout = [];
  let contextoutname = '';
  let token = '';
  let token1 = '';
  let token2 = '';
  let token3 = '';
  let token4 = '';
  let token5 = '';
  let token6 = '';
  let token7 = '';
  let token8 = '';
  let name = '';
  let yes = '';
  let no = '';
  let comname = '';
  let prof = '';
  let probab = '';
  let symptomgeneral = '';
  let proposed = '';
  let sessioncontext = '';
  let prefixcontext = '';
  let propox = '';
 
/*Dialogflow parameters*/
  if (req.body.session) {  
  sessioncontext = req.body.session;
  console.log('sessioncontext: ' + sessioncontext);
} else {
sessioncontext = null;
}
prefixcontext = sessioncontext + '/contexts/';
if (req.body.queryResult.parameters) {
if (req.body.queryResult.parameters['propsymptomreq']) {
	propObj = req.body.queryResult.parameters['propsymptomreq'];
if (Object.keys(propObj)[0] == 'Ghiandole_gonfie_sotto_l') {	
propsymptomreq = 'Ghiandole gonfie sotto l’ascella';
}	
if (Object.keys(propObj)[0] == 'Mal_d') {	
propsymptomreq = 'Mal d’orecchi';
}
if (Object.keys(propObj)[0] == 'Riduzione_dell') {	
propsymptomreq = 'Riduzione dell’appetito';
}
if (Object.keys(propObj)[0] == 'Sensazione_di_un_corpo_estraneo_nell') {	
propsymptomreq = 'Sensazione di un corpo estraneo nell’occhio';
}
if (Object.keys(propObj)[0] == 'Perdita_di_conoscenza_breve') {	
propsymptomreq = 'Perdita di conoscenza, breve';
}
if (Object.keys(propObj)[0] == 'Sazieta_precoce') {	
propsymptomreq = 'Sazietà precoce';
}
if (Object.keys(propObj)[0] == 'Difficolta_a_dormire') {	
propsymptomreq = 'Difficoltà a dormire';
}
if (!propsymptomreq) {			
propsymptomreq = Object.keys(propObj)[0].toString().replace(/_/g, ' ');
}
} else {
propsymptomreq = null;
}
if (req.body.queryResult.parameters['propsymptomreq1']) {
	prop1Obj = req.body.queryResult.parameters['propsymptomreq1'];
if (Object.keys(prop1Obj)[0] == 'Ghiandole_gonfie_sotto_l') {	
propsymptomreq1 = 'Ghiandole gonfie sotto l’ascella';
}	
if (Object.keys(prop1Obj)[0] == 'Mal_d') {	
propsymptomreq1 = 'Mal d’orecchi';
}
if (Object.keys(prop1Obj)[0] == 'Riduzione_dell') {	
propsymptomreq1 = 'Riduzione dell’appetito';
}
if (Object.keys(prop1Obj)[0] == 'Sensazione_di_un_corpo_estraneo_nell') {	
propsymptomreq1 = 'Sensazione di un corpo estraneo nell’occhio';
}
if (Object.keys(prop1Obj)[0] == 'Perdita_di_conoscenza_breve') {	
propsymptomreq1 = 'Perdita di conoscenza, breve';
}
if (Object.keys(prop1Obj)[0] == 'Sazieta_precoce') {	
propsymptomreq1 = 'Sazietà precoce';
}
if (Object.keys(prop1Obj)[0] == 'Difficolta_a_dormire') {	
propsymptomreq1 = 'Difficoltà a dormire';
}
if (!propsymptomreq1) {			
propsymptomreq1 = Object.keys(prop1Obj)[0].toString().replace(/_/g, ' ');
}
} else {
propsymptomreq1 = null;
}
if (req.body.queryResult.parameters['solopropsymptomreq']) {
	soloObj = req.body.queryResult.parameters['solopropsymptomreq'];
if (Object.keys(soloObj)[0] == 'Ghiandole_gonfie_sotto_l') {	
solopropsymptomreq = 'Ghiandole gonfie sotto l’ascella';
}	
if (Object.keys(soloObj)[0] == 'Mal_d') {	
solopropsymptomreq = 'Mal d’orecchi';
}
if (Object.keys(soloObj)[0] == 'Riduzione_dell') {	
solopropsymptomreq = 'Riduzione dell’appetito';
}
if (Object.keys(soloObj)[0] == 'Sensazione_di_un_corpo_estraneo_nell') {	
solopropsymptomreq = 'Sensazione di un corpo estraneo nell’occhio';
}
if (Object.keys(soloObj)[0] == 'Perdita_di_conoscenza_breve') {	
solopropsymptomreq = 'Perdita di conoscenza, breve';
}
if (Object.keys(soloObj)[0] == 'Sazieta_precoce') {	
solopropsymptomreq = 'Sazietà precoce';
}
if (Object.keys(soloObj)[0] == 'Difficolta_a_dormire') {	
solopropsymptomreq = 'Difficoltà a dormire';
}
if (!solopropsymptomreq) {			
solopropsymptomreq = Object.keys(soloObj)[0].toString().replace(/_/g, ' ');
}
} else {
solopropsymptomreq = null;
}
if (req.body.queryResult.parameters['name']) {  
  name = req.body.queryResult.parameters['name'];
  symparameters.name = name;
} else {
name = null;
}  
if (req.body.queryResult.parameters['contextprop']) {  
  contextoutname = prefixcontext + 'contextprop';
}
if (req.body.queryResult.parameters['contextprop1']) {  
  contextoutname = prefixcontext + 'contextprop1';
}
if (req.body.queryResult.parameters['contextprop2']) {  
  contextoutname = prefixcontext + 'contextprop2';
}
if (req.body.queryResult.parameters['contextprop3']) {  
  contextoutname = prefixcontext + 'contextprop3';
}
if (req.body.queryResult.parameters['symptom']) {  
  symObj = req.body.queryResult.parameters['symptom'];
  if (Object.keys(symObj)[0] == 'Ghiandole_gonfie_sotto_l') {	
symptom = 'Ghiandole gonfie sotto l’ascella';
}	
if (Object.keys(symObj)[0] == 'Mal_d') {	
symptom = 'Mal d’orecchi';
}
if (Object.keys(symObj)[0] == 'Riduzione_dell') {	
symptom = 'Riduzione dell’appetito';
}
if (Object.keys(symObj)[0] == 'Sensazione_di_un_corpo_estraneo_nell') {	
symptom = 'Sensazione di un corpo estraneo nell’occhio';
}
if (Object.keys(symObj)[0] == 'Perdita_di_conoscenza_breve') {	
symptom = 'Perdita di conoscenza, breve';
}
if (Object.keys(symObj)[0] == 'Sazieta_precoce') {	
symptom = 'Sazietà precoce';
}
if (Object.keys(symObj)[0] == 'Difficolta_a_dormire') {	
symptom = 'Difficoltà a dormire';
}
if (!symptom) {			
symptom = Object.keys(symObj)[0].toString().replace(/_/g, ' ');
}  
  symparameters.symptom = symptom;
} else {
symptom = null;
}
if (req.body.queryResult.parameters['symptom1']) {
  sym1Obj = req.body.queryResult.parameters['symptom1'];
  if (Object.keys(sym1Obj)[0] == 'Ghiandole_gonfie_sotto_l') {	
symptom1 = 'Ghiandole gonfie sotto l’ascella';
}	
if (Object.keys(sym1Obj)[0] == 'Mal_d') {	
symptom1 = 'Mal d’orecchi';
}
if (Object.keys(sym1Obj)[0] == 'Riduzione_dell') {	
symptom1 = 'Riduzione dell’appetito';
}
if (Object.keys(sym1Obj)[0] == 'Sensazione_di_un_corpo_estraneo_nell') {	
symptom1 = 'Sensazione di un corpo estraneo nell’occhio';
}
if (Object.keys(sym1Obj)[0] == 'Perdita_di_conoscenza_breve') {	
symptom1 = 'Perdita di conoscenza, breve';
}
if (Object.keys(sym1Obj)[0] == 'Sazieta_precoce') {	
symptom1 = 'Sazietà precoce';
}
if (Object.keys(sym1Obj)[0] == 'Difficolta_a_dormire') {	
symptom1 = 'Difficoltà a dormire';
}
if (!symptom1) {			
symptom1 = Object.keys(sym1Obj)[0].toString().replace(/_/g, ' ');
}  
  symparameters.symptom1 = symptom1;
} else {
symptom1 = null;
} 
if (req.body.queryResult.parameters['symptom2']) {
sym2Obj = req.body.queryResult.parameters['symptom2'];
  if (Object.keys(sym2Obj)[0] == 'Ghiandole_gonfie_sotto_l') {	
symptom2 = 'Ghiandole gonfie sotto l’ascella';
}	
if (Object.keys(sym2Obj)[0] == 'Mal_d') {	
symptom2 = 'Mal d’orecchi';
}
if (Object.keys(sym2Obj)[0] == 'Riduzione_dell') {	
symptom2 = 'Riduzione dell’appetito';
}
if (Object.keys(sym2Obj)[0] == 'Sensazione_di_un_corpo_estraneo_nell') {	
symptom2 = 'Sensazione di un corpo estraneo nell’occhio';
}
if (Object.keys(sym2Obj)[0] == 'Perdita_di_conoscenza_breve') {	
symptom2 = 'Perdita di conoscenza, breve';
}
if (Object.keys(sym2Obj)[0] == 'Sazieta_precoce') {	
symptom2 = 'Sazietà precoce';
}
if (Object.keys(sym2Obj)[0] == 'Difficolta_a_dormire') {	
symptom2 = 'Difficoltà a dormire';
}
if (!symptom2) {			
symptom2 = Object.keys(sym2Obj)[0].toString().replace(/_/g, ' ');
}  
  symparameters.symptom2 = symptom2;
} else {
symptom2 = null;
} 
if (req.body.queryResult.parameters['symptom3']) {
sym3Obj = req.body.queryResult.parameters['symptom3'];
  if (Object.keys(sym3Obj)[0] == 'Ghiandole_gonfie_sotto_l') {	
symptom3 = 'Ghiandole gonfie sotto l’ascella';
}	
if (Object.keys(sym3Obj)[0] == 'Mal_d') {	
symptom3 = 'Mal d’orecchi';
}
if (Object.keys(sym3Obj)[0] == 'Riduzione_dell') {	
symptom3 = 'Riduzione dell’appetito';
}
if (Object.keys(sym3Obj)[0] == 'Sensazione_di_un_corpo_estraneo_nell') {	
symptom3 = 'Sensazione di un corpo estraneo nell’occhio';
}
if (Object.keys(sym3Obj)[0] == 'Perdita_di_conoscenza_breve') {	
symptom3 = 'Perdita di conoscenza, breve';
}
if (Object.keys(sym3Obj)[0] == 'Sazieta_precoce') {	
symptom3 = 'Sazietà precoce';
}
if (Object.keys(sym3Obj)[0] == 'Difficolta_a_dormire') {	
symptom3 = 'Difficoltà a dormire';
}
if (!symptom3) {			
symptom3 = Object.keys(sym3Obj)[0].toString().replace(/_/g, ' ');
}  
  symparameters.symptom3 = symptom3;
} else {
symptom3 = null;
} 
if (req.body.queryResult.parameters['symptom4']) {
  sym4Obj = req.body.queryResult.parameters['symptom4'];
  if (Object.keys(sym4Obj)[0] == 'Ghiandole_gonfie_sotto_l') {	
symptom4 = 'Ghiandole gonfie sotto l’ascella';
}	
if (Object.keys(sym4Obj)[0] == 'Mal_d') {	
symptom4 = 'Mal d’orecchi';
}
if (Object.keys(sym4Obj)[0] == 'Riduzione_dell') {	
symptom4 = 'Riduzione dell’appetito';
}
if (Object.keys(sym4Obj)[0] == 'Sensazione_di_un_corpo_estraneo_nell') {	
symptom4 = 'Sensazione di un corpo estraneo nell’occhio';
}
if (Object.keys(sym4Obj)[0] == 'Perdita_di_conoscenza_breve') {	
symptom4 = 'Perdita di conoscenza, breve';
}
if (Object.keys(sym4Obj)[0] == 'Sazieta_precoce') {	
symptom4 = 'Sazietà precoce';
}
if (Object.keys(sym4Obj)[0] == 'Difficolta_a_dormire') {	
symptom4 = 'Difficoltà a dormire';
}
if (!symptom4) {			
symptom4 = Object.keys(sym4Obj)[0].toString().replace(/_/g, ' ');
}  
  symparameters.symptom4 = symptom4;
  } else {
symptom4 = null;
}
if (req.body.queryResult.parameters['gender']) {
 gender = req.body.queryResult.parameters['gender'];
 symparameters.gender = gender;
} else {
gender = null;
}
if (req.body.queryResult.parameters['year']) {
 year = req.body.queryResult.parameters['year'];
 symparameters.year = year;
} else {
year = null;
}
if (req.body.queryResult.parameters['weight']) {
 weight = req.body.queryResult.parameters['weight'];
 symparameters.weight = weight;
} else {
weight = null;
}

if (req.body.queryResult.parameters['height']) {
 height = req.body.queryResult.parameters['height'];
 symparameters.height = height;
} else {
height = null;
}
if (req.body.queryResult.parameters['yes']) {  
  yes = req.body.queryResult.parameters['yes'];
} else {
yes = null;
}
if (req.body.queryResult.parameters['no']) {
  no = req.body.queryResult.parameters['no'];
} else {
no = null;
}
}
if (req.body.queryResult.intent.displayName) {
intent = req.body.queryResult.intent.displayName;
console.log('intent: ' + intent);
} else {
intent = null;
}
if (req.body.queryResult.outputContexts) {
  contexts = req.body.queryResult.outputContexts;
  actualcontext = contexts[0];
} else {
contexts = null;
actualcontext = null;
}
if (actualcontext) {
	if (actualcontext.parameters['propox']) {
  propox = 'propox';
  symparameters.propox = propox;
} else {
propox = null;
}
if (actualcontext.parameters['propo']) {
  propo = 'propo';
  symparameters.propo = propo;
} else {
propo = null;
}
if (actualcontext.parameters['propo1']) {
  propo1 = 'propo1';
  symparameters.propo1 = propo1;
} else {
propo1 = null;
}
if (actualcontext.parameters['propo2']) {
  propo2 = 'propo2';
  symparameters.propo2 = propo2;
} else {
propo2 = null;
}
if (actualcontext.parameters['propo3']) {
  propo3 = 'propo3';
  symparameters.propo3 = propo3;
} else {
propo3 = null;
}
if (actualcontext.parameters['prof']) {
  prof = actualcontext.parameters['prof'];
  symparameters.prof = prof;
} else {
prof = null;
}
if (actualcontext.parameters['comname']) {
  comname = actualcontext.parameters['comname'];
  symparameters.comname = comname;
} else {
comname = null;
}
if (actualcontext.parameters['probab']) {
  probab = actualcontext.parameters['probab'];
  symparameters.probab = probab;
} else {
probab = null;
}
if (actualcontext.parameters['symptom']) {
  symptom = actualcontext.parameters['symptom'];
  symparameters.symptom = symptom;
} else {
symptom = null;
}
if (actualcontext.parameters['symptom1']) {
  symptom1 = actualcontext.parameters['symptom1'];
  symparameters.symptom1 = symptom1;
} else {
symptom1 = null;
}
if (actualcontext.parameters['symptom2']) {
  symptom2 = actualcontext.parameters['symptom2'];
  symparameters.symptom2 = symptom2;
} else {
symptom2 = null;
}
if (actualcontext.parameters['symptom3']) {
  symptom3 = actualcontext.parameters['symptom3'];
  symparameters.symptom3 = symptom3;
} else {
symptom3 = null;
}
if (actualcontext.parameters['symptom4']) {
  symptom4 = actualcontext.parameters['symptom4'];
  symparameters.symptom4 = symptom4;
} else {
symptom4 = null;
}
if (actualcontext.parameters['name']) {
  name = actualcontext.parameters['name'];
  symparameters.name = name;
} else {
name = null;
}
if (actualcontext.parameters['symptomgeneral']) {
  symptomgeneral = actualcontext.parameters['symptomgeneral'];
  symparameters.symptomgeneral = symptomgeneral;
  console.log('symptomgeneral: ' + symptomgeneral);
} else {
symptomgeneral = null;
}
if (actualcontext.parameters['idsymptom']) {
  idsymptom = actualcontext.parameters['idsymptom'];
  symparameters.idsymptom = idsymptom;
} else {
idsymptom = null;
}
if (actualcontext.parameters['gender']) {
  gender = actualcontext.parameters['gender'];
  symparameters.gender = gender;
} else {
gender = null;
}
if (actualcontext.parameters['year']) {
  year = actualcontext.parameters['year'];
  symparameters.year = year;
} else {
year = null;
}
if (actualcontext.parameters['height']) {
  height = actualcontext.parameters['height'];
  symparameters.height = height;
} else {
height = null;
}
if (actualcontext.parameters['weight']) {
  weight = actualcontext.parameters['weight'];
  symparameters.weight = weight;
} else {
weight = null;
}
if (actualcontext.parameters['propid']) {
  propid = actualcontext.parameters['propid'];
  symparameters.propid = propid;
} else {
propid = null;
}
if (actualcontext.parameters['propid1']) {
  propid1 = actualcontext.parameters['propid1'];
  symparameters.propid1 = propid1;
} else {
propid1 = null;
}
if (actualcontext.parameters['propid2']) {
  propid2 = actualcontext.parameters['propid2'];
  symparameters.propid2 = propid2;
} else {
propid2 = null;
}
if (actualcontext.parameters['propid3']) {
  propid3 = actualcontext.parameters['propid3'];
  symparameters.propid3 = propid3;
} else {
propid3 = null;
}
if (actualcontext.parameters['propid4']) {
  propid4 = actualcontext.parameters['propid4'];
  symparameters.propid4 = propid4;
} else {
propid4 = null;
}
if (actualcontext.parameters['propid5']) {
  propid5 = actualcontext.parameters['propid5'];
  symparameters.propid5 = propid5;
} else {
propid5 = null;
}
if (actualcontext.parameters['propid6']) {
  propid6 = actualcontext.parameters['propid6'];
  symparameters.propid6 = propid6;
} else {
propid6 = null;
}
if (actualcontext.parameters['propid7']) {
  propid7 = actualcontext.parameters['propid7'];
  symparameters.propid7 = propid7;
} else {
propid7 = null;
}
if (actualcontext.parameters['proposed']) {
  proposed = actualcontext.parameters['proposed'];
  symparameters.proposed = proposed;
} else {
proposed = null;
}
if (actualcontext.parameters['proposed1']) {
  proposed1 = actualcontext.parameters['proposed1'];
  symparameters.proposed1 = proposed1;
} else {
proposed1 = null;
}
if (actualcontext.parameters['proposed2']) {
  proposed2 = actualcontext.parameters['proposed2'];
  symparameters.proposed2 = proposed2;
} else {
proposed2 = null;
}
if (actualcontext.parameters['proposed3']) {
  proposed3 = actualcontext.parameters['proposed3'];
  symparameters.proposed3 = proposed3;
} else {
proposed3 = null;
}
if (actualcontext.parameters['proposed4']) {
  proposed4 = actualcontext.parameters['proposed4'];
  symparameters.proposed4 = proposed4;
} else {
proposed4 = null;
}
if (actualcontext.parameters['proposed5']) {
  proposed5 = actualcontext.parameters['proposed5'];
  symparameters.proposed5 = proposed5;
} else {
proposed5 = null;
}
if (actualcontext.parameters['proposed6']) {
  proposed6 = actualcontext.parameters['proposed6'];
  symparameters.proposed6 = proposed6;
} else {
proposed6 = null;
}
if (actualcontext.parameters['proposed7']) {
  proposed7 = actualcontext.parameters['proposed7'];
  symparameters.proposed7 = proposed7;
} else {
proposed7 = null;
}
if (actualcontext.parameters['propsymptom']) {
  propsymptom = actualcontext.parameters['propsymptom'];
  symparameters.propsymptom = propsymptom;
} else {
propsymptom = null;
}
if (actualcontext.parameters['propsymptom1']) {
  propsymptom1 = actualcontext.parameters['propsymptom1'];
  symparameters.propsymptom1 = propsymptom1;
} else {
propsymptom1 = null;
}
if (actualcontext.parameters['propsymptom2']) {
  propsymptom2 = actualcontext.parameters['propsymptom2'];
  symparameters.propsymptom2 = propsymptom2;
} else {
propsymptom2 = null;
}
if (actualcontext.parameters['propsymptom3']) {
  propsymptom3 = actualcontext.parameters['propsymptom3'];
  symparameters.propsymptom3 = propsymptom3;
} else {
propsymptom3 = null;
}
if (actualcontext.parameters['propsymptom4']) {
  propsymptom4 = actualcontext.parameters['propsymptom4'];
  symparameters.propsymptom4 = propsymptom4;
} else {
propsymptom4 = null;
}
if (actualcontext.parameters['propsymptom5']) {
  propsymptom5 = actualcontext.parameters['propsymptom5'];
  symparameters.propsymptom5 = propsymptom5;
} else {
propsymptom5 = null;
}
if (actualcontext.parameters['propsymptom6']) {
  propsymptom6 = actualcontext.parameters['propsymptom6'];
  symparameters.propsymptom6 = propsymptom6;
} else {
propsymptom6 = null;
}
if (actualcontext.parameters['propsymptom7']) {
  propsymptom7 = actualcontext.parameters['propsymptom7'];
  symparameters.propsymptom7 = propsymptom7;
} else {
propsymptom7 = null;
}
}
  
if (propsymptomreq && no && !solopropsymptomreq) {
if (proposed7) {
if (propo3 && !propo2 && !propo && !propo1) {
if (propsymptomreq == proposed) {
propsymptom = proposed1;
} else {
propsymptom = proposed;
}
symparameters.propsymptom = propsymptom;
}
if (propo2 && !propo1 && !propo) {
if (!propsymptom) {
if (propsymptomreq == proposed2) {
propsymptom = proposed3;
} else {
propsymptom = proposed2;
}
symparameters.propsymptom = propsymptom;
} else {
if (propsymptom && !propsymptom1) {
if (propsymptomreq == proposed2) {
propsymptom1 = proposed3;
} else {
propsymptom1 = proposed2;
}
symparameters.propsymptom1 = propsymptom1;
} else {
if (propsymptom1) {
if (propsymptomreq == proposed2) {
propsymptom2 = proposed3;
} else {
propsymptom2 = proposed2;
}
symparameters.propsymptom2 = propsymptom2;
}
}
}
}
if (!propo && propo1) {
if (!propsymptom) {
if (propsymptomreq == proposed4) {
propsymptom = proposed5;
} else {
propsymptom = proposed4;
}
symparameters.propsymptom = propsymptom;
} else {
if (propsymptom && !propsymptom1) {
if (propsymptomreq == proposed4) {
propsymptom1 = proposed5;
} else {
propsymptom1 = proposed4;
}
symparameters.propsymptom1 = propsymptom1;
} else {
if (propsymptom1 && !propsymptom2) {
if (propsymptomreq == proposed4) {
propsymptom2 = proposed5;
} else {
propsymptom2 = proposed4;
}
symparameters.propsymptom2 = propsymptom2;
} else {
if (propsymptom2 && !propsymptom3) {
if (propsymptomreq == proposed4) {
propsymptom3 = proposed5;
} else {
propsymptom3 = proposed4;
}
symparameters.propsymptom3 = propsymptom3;
} else {
if (propsymptom3) {
if (propsymptomreq == proposed4) {
propsymptom4 = proposed5;
} else {
propsymptom4 = proposed4;
}
symparameters.propsymptom4 = propsymptom4;
}
}
}
}
}
}
if (propo && !propox) {
if (!propsymptom) {
if (propsymptomreq == proposed6) {
propsymptom = proposed7;
} else {
propsymptom = proposed6;
}
symparameters.propsymptom = propsymptom;
} else {
if (propsymptom && !propsymptom1) {
if (propsymptomreq == proposed6) {
propsymptom1 = proposed7;
} else {
propsymptom1 = proposed6;
}
symparameters.propsymptom1 = propsymptom1;
} else {
if (propsymptom1 && !propsymptom2) {
if (propsymptomreq == proposed6) {
propsymptom2 = proposed7;
} else {
propsymptom2 = proposed6;
}
symparameters.propsymptom2 = propsymptom2;
} else {
if (propsymptom2 && !propsymptom3) {
if (propsymptomreq == proposed6) {
propsymptom3 = proposed7;
} else {
propsymptom3 = proposed6;
}
symparameters.propsymptom3 = propsymptom3;
} else {
if (propsymptom3 && !propsymptom4) {
if (propsymptomreq == proposed6) {
propsymptom4 = proposed7;
} else {
propsymptom4 = proposed6;
}
symparameters.propsymptom4 = propsymptom4;
} else {
if (propsymptom4 && !propsymptom5) {
if (propsymptomreq == proposed6) {
propsymptom5 = proposed7;
} else {
propsymptom5 = proposed6;
}
symparameters.propsymptom5 = propsymptom5;
} else {
if (propsymptom5) {
if (propsymptomreq == proposed6) {
propsymptom6 = proposed7;
} else {
propsymptom6 = proposed6;
}
symparameters.propsymptom6 = propsymptom6;
}
}
}
}
}
}
}
}
}
if (proposed6 && !proposed7) {
if (propo3 && !propo2 && !propo && !propo1) {
if (propsymptomreq == proposed) {
propsymptom = proposed1;
} else {
propsymptom = proposed;
}
symparameters.propsymptom = propsymptom;
}
if (propo2 && !propo1 && !propo) {
if (!propsymptom) {
if (propsymptomreq == proposed2) {
propsymptom = proposed3;
} else {
propsymptom = proposed2;
}
symparameters.propsymptom = propsymptom;
} else {
if (propsymptom && !propsymptom1) {
if (propsymptomreq == proposed2) {
propsymptom1 = proposed3;
} else {
propsymptom1 = proposed2;
}
symparameters.propsymptom1 = propsymptom1;
} else {
if (propsymptom1) {
if (propsymptomreq == proposed2) {
propsymptom2 = proposed3;
} else {
propsymptom2 = proposed2;
}
symparameters.propsymptom2 = propsymptom2;
}
}
}
}
if (!propo && propo1) {
if (!propsymptom) {
if (propsymptomreq == proposed4) {
propsymptom = proposed5;
} else {
propsymptom = proposed4;
}
symparameters.propsymptom = propsymptom;
} else {
if (propsymptom && !propsymptom1) {
if (propsymptomreq == proposed4) {
propsymptom1 = proposed5;
} else {
propsymptom1 = proposed4;
}
symparameters.propsymptom1 = propsymptom1;
} else {
if (propsymptom1 && !propsymptom2) {
if (propsymptomreq == proposed4) {
propsymptom2 = proposed5;
} else {
propsymptom2 = proposed4;
}
symparameters.propsymptom2 = propsymptom2;
} else {
if (propsymptom2 && !propsymptom3) {
if (propsymptomreq == proposed4) {
propsymptom3 = proposed5;
} else {
propsymptom3 = proposed4;
}
symparameters.propsymptom3 = propsymptom3;
} else {
if (propsymptom3) {
if (propsymptomreq == proposed4) {
propsymptom4 = proposed5;
} else {
propsymptom4 = proposed4;
}
symparameters.propsymptom4 = propsymptom4;
}
}
}
}
}
}
}
if (proposed5 && !proposed6) {
if (propo2 && !propo1 && !propo) {
if (propsymptomreq == proposed1) {
propsymptom = proposed;
} else {
propsymptom = proposed1;
}
symparameters.propsymptom = propsymptom;
}
if (!propo && propo1) {
if (!propsymptom) {
if (propsymptomreq == proposed3) {
propsymptom = proposed2;
} else {
propsymptom = proposed3;
}
symparameters.propsymptom = propsymptom;
} else {
if (propsymptom && !propsymptom1) {
if (propsymptomreq == proposed3) {
propsymptom1 = proposed2;
} else {
propsymptom1 = proposed3;
}
symparameters.propsymptom1 = propsymptom1;
} else {
if (propsymptom1) {
if (propsymptomreq == proposed3) {
propsymptom2 = proposed2;
} else {
propsymptom2 = proposed3;
}
symparameters.propsymptom2 = propsymptom2;
}
}
}
}
if (propo && !propox) {
if (!propsymptom) {
if (propsymptomreq == proposed4) {
propsymptom = proposed5;
} else {
propsymptom = proposed4;
}
symparameters.propsymptom = propsymptom;
} else {
if (propsymptom && !propsymptom1) {
if (propsymptomreq == proposed4) {
propsymptom1 = proposed5;
} else {
propsymptom1 = proposed4;
}
symparameters.propsymptom1 = propsymptom1;
} else {
if (propsymptom1 && !propsymptom2) {
if (propsymptomreq == proposed4) {
propsymptom2 = proposed5;
} else {
propsymptom2 = proposed4;
}
symparameters.propsymptom2 = propsymptom2;
} else {
if (propsymptom2 && !propsymptom3) {
if (propsymptomreq == proposed4) {
propsymptom3 = proposed5;
} else {
propsymptom3 = proposed4;
}
symparameters.propsymptom3 = propsymptom3;
} else {
if (propsymptom3) {
if (propsymptomreq == proposed4) {
propsymptom4 = proposed5;
} else {
propsymptom4 = proposed4;
}
symparameters.propsymptom4 = propsymptom4;
}
}
}
}
}
}
}
if (proposed4 && !proposed5) {
if (propo2 && !propo1 && !propo) {
if (propsymptomreq == proposed) {
propsymptom = proposed1;
} else {
propsymptom = proposed;
}
symparameters.propsymptom = propsymptom;
}
if (!propo && propo1) {
if (!propsymptom) {
if (propsymptomreq == proposed2) {
propsymptom = proposed3;
} else {
propsymptom = proposed2;
}
symparameters.propsymptom = propsymptom;
} else {
if (propsymptom && !propsymptom1) {
if (propsymptomreq == proposed2) {
propsymptom1 = proposed3;
} else {
propsymptom1 = proposed2;
}
symparameters.propsymptom1 = propsymptom1;
} else {
if (propsymptom1) {
if (propsymptomreq == proposed2) {
propsymptom2 = proposed3;
} else {
propsymptom2 = proposed2;
}
symparameters.propsymptom2 = propsymptom2;
}
}
}
}
}
if (proposed3 && !proposed4) {
if (!propo && propo1) {
if (propsymptomreq == proposed1) {
propsymptom = proposed;
} else {
propsymptom = proposed1;
}
symparameters.propsymptom = propsymptom;
}
if (propo && !propox) {
if (!propsymptom) {
if (propsymptomreq == proposed2) {
propsymptom = proposed3;
} else {
propsymptom = proposed2;
}
symparameters.propsymptom = propsymptom;
} else {
if (propsymptom && !propsymptom1) {
if (propsymptomreq == proposed2) {
propsymptom1 = proposed3;
} else {
propsymptom1 = proposed2;
}
symparameters.propsymptom1 = propsymptom1;
} else {
if (propsymptom1) {
if (propsymptomreq == proposed2) {
propsymptom2 = proposed3;
} else {
propsymptom2 = proposed2;
}
symparameters.propsymptom2 = propsymptom2;
}
}
}
}
}
if (proposed2 && !proposed3) {
if (!propo && propo1) {
if (propsymptomreq == proposed1) {
propsymptom = proposed;
} else {
propsymptom = proposed1;
}
symparameters.propsymptom = propsymptom;
}
}
}
if (yes && !propsymptomreq && !solopropsymptomreq) {
if (proposed7) {
if (propo3 && !propo2 && !propo && !propo1) {
propsymptom = proposed;
propsymptom1 = proposed1;
symparameters.propsymptom = propsymptom;
symparameters.propsymptom1 = propsymptom1;
}
if (propo2 && !propo1 && !propo) {
if (!propsymptom) {
propsymptom = proposed2;
propsymptom1 = proposed3;
symparameters.propsymptom = propsymptom;
symparameters.propsymptom1 = propsymptom1;
} else {
if (propsymptom && !propsymptom1) {
propsymptom1 = proposed2;
propsymptom2 = proposed3;
symparameters.propsymptom1 = propsymptom1;
symparameters.propsymptom2 = propsymptom2;
} else {
if (propsymptom1) {
propsymptom2 = proposed2;
propsymptom3 = proposed3;
symparameters.propsymptom2 = propsymptom2;
symparameters.propsymptom3 = propsymptom3;
}
}
}
}
if (!propo && propo1) {
if (!propsymptom) {
propsymptom = proposed4;
propsymptom1 = proposed5;
symparameters.propsymptom = propsymptom;
symparameters.propsymptom1 = propsymptom1;
} else {
if (propsymptom && !propsymptom1) {
propsymptom1 = proposed4;
propsymptom2 = proposed5;
symparameters.propsymptom1 = propsymptom1;
symparameters.propsymptom2 = propsymptom2;
} else {
if (propsymptom1 && !propsymptom2) {
propsymptom2 = proposed4;
propsymptom3 = proposed5;
symparameters.propsymptom2 = propsymptom2;
symparameters.propsymptom3 = propsymptom3;
} else {
if (propsymptom2 && !propsymptom3) {
propsymptom3 = proposed4;
propsymptom4 = proposed5;
symparameters.propsymptom3 = propsymptom3;
symparameters.propsymptom4 = propsymptom4;
} else {
if (propsymptom3) {
propsymptom4 = proposed4;
propsymptom5 = proposed5;
symparameters.propsymptom4 = propsymptom4;
symparameters.propsymptom5 = propsymptom5;
}
}
}
}
}
}
if (propo && !propox) {
if (!propsymptom) {
propsymptom = proposed6;
propsymptom1 = proposed7;
symparameters.propsymptom = propsymptom;
symparameters.propsymptom1 = propsymptom1;
} else {
if (propsymptom && !propsymptom1) {
propsymptom1 = proposed6;
propsymptom2 = proposed7;
symparameters.propsymptom1 = propsymptom1;
symparameters.propsymptom2 = propsymptom2;
} else {
if (propsymptom1 && !propsymptom2) {
propsymptom2 = proposed6;
propsymptom3 = proposed7;
symparameters.propsymptom2 = propsymptom2;
symparameters.propsymptom3 = propsymptom3;
} else {
if (propsymptom2 && !propsymptom3) {
propsymptom3 = proposed6;
propsymptom4 = proposed7;
symparameters.propsymptom3 = propsymptom3;
symparameters.propsymptom4 = propsymptom4;
} else {
if (propsymptom3 && !propsymptom4) {
propsymptom4 = proposed6;
propsymptom5 = proposed7;
symparameters.propsymptom4 = propsymptom4;
symparameters.propsymptom5 = propsymptom5;
} else {
if (propsymptom4 && !propsymptom5) {
propsymptom5 = proposed6;
propsymptom6 = proposed7;
symparameters.propsymptom5 = propsymptom5;
symparameters.propsymptom6 = propsymptom6;
} else {
if (propsymptom5) {
propsymptom6 = proposed6;
propsymptom7 = proposed7;
symparameters.propsymptom6 = propsymptom6;
symparameters.propsymptom7 = propsymptom7;
}
}
}
}
}
}
}
}
}
if (proposed6 && !proposed7) {
if (propo3 && !propo2 && !propo && !propo1) {
propsymptom = proposed;
propsymptom1 = proposed1;
symparameters.propsymptom = propsymptom;
symparameters.propsymptom1 = propsymptom1;
}
if (propo2 && !propo1 && !propo) {
if (!propsymptom) {
propsymptom = proposed2;
propsymptom1 = proposed3;
symparameters.propsymptom = propsymptom;
symparameters.propsymptom1 = propsymptom1;
} else {
if (propsymptom && !propsymptom1) {
propsymptom1 = proposed2;
propsymptom2 = proposed3;
symparameters.propsymptom1 = propsymptom1;
symparameters.propsymptom2 = propsymptom2;
} else {
if (propsymptom1) {
propsymptom2 = proposed2;
propsymptom3 = proposed3;
symparameters.propsymptom2 = propsymptom2;
symparameters.propsymptom3 = propsymptom3;
}
}
}
}
if (!propo && propo1) {
if (!propsymptom) {
propsymptom = proposed4;
propsymptom1 = proposed5;
symparameters.propsymptom = propsymptom;
symparameters.propsymptom1 = propsymptom1;
} else {
if (propsymptom && !propsymptom1) {
propsymptom1 = proposed4;
propsymptom2 = proposed5;
symparameters.propsymptom1 = propsymptom1;
symparameters.propsymptom2 = propsymptom2;
} else {
if (propsymptom1 && !propsymptom2) {
propsymptom2 = proposed4;
propsymptom3 = proposed5;
symparameters.propsymptom2 = propsymptom2;
symparameters.propsymptom3 = propsymptom3;
} else {
if (propsymptom2 && !propsymptom3) {
propsymptom3 = proposed4;
propsymptom4 = proposed5;
symparameters.propsymptom3 = propsymptom3;
symparameters.propsymptom4 = propsymptom4;
} else {
if (propsymptom3) {
propsymptom4 = proposed4;
propsymptom5 = proposed5;
symparameters.propsymptom4 = propsymptom4;
symparameters.propsymptom5 = propsymptom5;
}
}
}
}
}
}
if (propo && !propox) {
if (!propsymptom) {
propsymptom = proposed6;
symparameters.propsymptom = propsymptom;
} else {
if (propsymptom && !propsymptom1) {
propsymptom1 = proposed6;
symparameters.propsymptom1 = propsymptom1;
} else {
if (propsymptom1 && !propsymptom2) {
propsymptom2 = proposed6;
symparameters.propsymptom2 = propsymptom2;
} else {
if (propsymptom2 && !propsymptom3) {
propsymptom3 = proposed6;
symparameters.propsymptom3 = propsymptom3;
} else {
if (propsymptom3 && !propsymptom4) {
propsymptom4 = proposed6;
symparameters.propsymptom4 = propsymptom4;
} else {
if (propsymptom4 && !propsymptom5) {
propsymptom5 = proposed6;
symparameters.propsymptom5 = propsymptom5;
} else {
if (propsymptom5) {
propsymptom6 = proposed6;
symparameters.propsymptom6 = propsymptom6;
}
}
}
}
}
}
}
}
}
if (proposed5 && !proposed6) {
if (propo2 && !propo1 && !propo) {
propsymptom = proposed;
propsymptom1 = proposed1;
symparameters.propsymptom = propsymptom;
symparameters.propsymptom1 = propsymptom1;
}
if (!propo && propo1) {
if (!propsymptom) {
propsymptom = proposed2;
propsymptom1 = proposed3;
symparameters.propsymptom = propsymptom;
symparameters.propsymptom1 = propsymptom1;
} else {
if (propsymptom && !propsymptom1) {
propsymptom1 = proposed2;
propsymptom2 = proposed3;
symparameters.propsymptom1 = propsymptom1;
symparameters.propsymptom2 = propsymptom2;
} else {
if (propsymptom1) {
propsymptom2 = proposed2;
propsymptom3 = proposed3;
symparameters.propsymptom2 = propsymptom2;
symparameters.propsymptom3 = propsymptom3;
}
}
}
}
if (propo && !propox) {
if (!propsymptom) {
propsymptom = proposed4;
propsymptom1 = proposed5;
symparameters.propsymptom = propsymptom;
symparameters.propsymptom1 = propsymptom1;
} else {
if (propsymptom && !propsymptom1) {
propsymptom1 = proposed4;
propsymptom2 = proposed5;
symparameters.propsymptom1 = propsymptom1;
symparameters.propsymptom2 = propsymptom2;
} else {
if (propsymptom1 && !propsymptom2) {
propsymptom2 = proposed4;
propsymptom3 = proposed5;
symparameters.propsymptom2 = propsymptom2;
symparameters.propsymptom3 = propsymptom3;
} else {
if (propsymptom2 && !propsymptom3) {
propsymptom3 = proposed4;
propsymptom4 = proposed5;
symparameters.propsymptom3 = propsymptom3;
symparameters.propsymptom4 = propsymptom4;
} else {
if (propsymptom3) {
propsymptom4 = proposed4;
propsymptom5 = proposed5;
symparameters.propsymptom4 = propsymptom4;
symparameters.propsymptom5 = propsymptom5;
}
}
}
}
}
}
}
if (proposed4 && !proposed5) {
if (propo2 && !propo1 && !propo) {
propsymptom = proposed;
propsymptom1 = proposed1;
symparameters.propsymptom = propsymptom;
symparameters.propsymptom1 = propsymptom1;
}
if (!propo && propo1) {
if (!propsymptom) {
propsymptom = proposed2;
propsymptom1 = proposed3;
symparameters.propsymptom = propsymptom;
symparameters.propsymptom1 = propsymptom1;
} else {
if (propsymptom && !propsymptom1) {
propsymptom1 = proposed2;
propsymptom2 = proposed3;
symparameters.propsymptom1 = propsymptom1;
symparameters.propsymptom2 = propsymptom2;
} else {
if (propsymptom1) {
propsymptom2 = proposed2;
propsymptom3 = proposed3;
symparameters.propsymptom2 = propsymptom2;
symparameters.propsymptom3 = propsymptom3;
}
}
}
}
if (propo && !propox) {
if (!propsymptom) {
propsymptom = proposed4;
symparameters.propsymptom = propsymptom;
} else {
if (propsymptom && !propsymptom1) {
propsymptom1 = proposed4;
symparameters.propsymptom1 = propsymptom1;
} else {
if (propsymptom1 && !propsymptom2) {
propsymptom2 = proposed4;
symparameters.propsymptom2 = propsymptom2;
} else {
if (propsymptom2 && !propsymptom3) {
propsymptom3 = proposed4;
symparameters.propsymptom3 = propsymptom3;
} else {
if (propsymptom3) {
propsymptom4 = proposed4;
symparameters.propsymptom4 = propsymptom4;
}
}
}
}
}
}
}
if (proposed3 && !proposed4) {
if (!propo && propo1) {
propsymptom = proposed;
propsymptom1 = proposed1;
symparameters.propsymptom = propsymptom;
symparameters.propsymptom1 = propsymptom1;
}
if (propo && !propox) {
if (!propsymptom) {
propsymptom = proposed2;
propsymptom1 = proposed3;
symparameters.propsymptom = propsymptom;
symparameters.propsymptom1 = propsymptom1;
} else {
if (propsymptom && !propsymptom1) {
propsymptom1 = proposed2;
propsymptom2 = proposed3;
symparameters.propsymptom1 = propsymptom1;
symparameters.propsymptom2 = propsymptom2;
} else {
if (propsymptom1) {
propsymptom2 = proposed2;
propsymptom3 = proposed3;
symparameters.propsymptom2 = propsymptom2;
symparameters.propsymptom3 = propsymptom3;
}
}
}
}
}
if (proposed2 && !proposed3) {
if (!propo && propo1) {
propsymptom = proposed;
propsymptom1 = proposed1;
symparameters.propsymptom = propsymptom;
symparameters.propsymptom1 = propsymptom1;
}
if (propo && !propox) {
if (!propsymptom) {
propsymptom = proposed2;
symparameters.propsymptom = propsymptom;
} else {
if (propsymptom && !propsymptom1) {
propsymptom1 = proposed2;
symparameters.propsymptom1 = propsymptom1;
} else {
if (propsymptom1) {
propsymptom2 = proposed2;
symparameters.propsymptom2 = propsymptom2;
}
}
}
}
}
}
if (propsymptomreq && !no && !solopropsymptomreq) {
if (!propsymptom) {
propsymptom = propsymptomreq;
symparameters.propsymptom = propsymptom;
} else {
if (propsymptom && !propsymptom1) {
propsymptom1 = propsymptomreq;
symparameters.propsymptom1 = propsymptom1;
} else {
if (propsymptom1 && !propsymptom2) {
propsymptom2 = propsymptomreq;
symparameters.propsymptom2 = propsymptom2;
} else {
if (propsymptom2 && !propsymptom3) {
propsymptom3 = propsymptomreq;
symparameters.propsymptom3 = propsymptom3;
} else {
if (propsymptom3 && !propsymptom4) {
propsymptom4 = propsymptomreq;
symparameters.propsymptom4 = propsymptom4;
} else {
if (propsymptom4 && !propsymptom5) {
propsymptom5 = propsymptomreq;
symparameters.propsymptom5 = propsymptom5;
} else {
if (propsymptom5 && !propsymptom6) {
propsymptom6 = propsymptomreq;
symparameters.propsymptom6 = propsymptom6;
} else {
if (propsymptom6 && !propsymptom7) {
propsymptom7 = propsymptomreq;
symparameters.propsymptom7 = propsymptom7;
}
}
}
}
}
}
}
}
}
if (propsymptomreq1 && !no && !solopropsymptomreq) {
if (propsymptom && !propsymptom1) {
propsymptom1 = propsymptomreq1;
symparameters.propsymptom1 = propsymptom1;
} else {
if (propsymptom1 && !propsymptom2) {
propsymptom2 = propsymptomreq1;
symparameters.propsymptom2 = propsymptom2;
} else {
if (propsymptom2 && !propsymptom3) {
propsymptom3 = propsymptomreq1;
symparameters.propsymptom3 = propsymptom3;
} else {
if (propsymptom3 && !propsymptom4) {
propsymptom4 = propsymptomreq1;
symparameters.propsymptom4 = propsymptom4;
} else {
if (propsymptom4 && !propsymptom5) {
propsymptom5 = propsymptomreq1;
symparameters.propsymptom5 = propsymptom5;
} else {
if (propsymptom5 && !propsymptom6) {
propsymptom6 = propsymptomreq1;
symparameters.propsymptom6 = propsymptom6;
} else {
if (propsymptom6 && !propsymptom7) {
propsymptom7 = propsymptomreq1;
symparameters.propsymptom7 = propsymptom7;
}
}
}
}
}
}
}
}
if (solopropsymptomreq) {
	if (!propsymptom) {
propsymptom = solopropsymptomreq;
symparameters.propsymptom = propsymptom;
} else {
if (propsymptom && !propsymptom1) {
propsymptom1 = solopropsymptomreq;
symparameters.propsymptom1 = propsymptom1;
} else {
if (propsymptom1 && !propsymptom2) {
propsymptom2 = solopropsymptomreq;
symparameters.propsymptom2 = propsymptom2;
} else {
if (propsymptom2 && !propsymptom3) {
propsymptom3 = solopropsymptomreq;
symparameters.propsymptom3 = propsymptom3;
} else {
if (propsymptom3 && !propsymptom4) {
propsymptom4 = solopropsymptomreq;
symparameters.propsymptom4 = propsymptom4;
} else {
if (propsymptom4 && !propsymptom5) {
propsymptom5 = solopropsymptomreq;
symparameters.propsymptom5 = propsymptom5;
} else {
if (propsymptom5 && !propsymptom6) {
propsymptom6 = solopropsymptomreq;
symparameters.propsymptom6 = propsymptom6;
} else {
if (propsymptom6 && !propsymptom7) {
propsymptom7 = solopropsymptomreq;
symparameters.propsymptom7 = propsymptom7;
}
}
}
}
}
}
}
}
}
if (intent == 'symprop') {
if (proposed7) {
if (!propo && !propo1 && !propo2 && !propo3) {
speech = 'Hai ' + proposed + ' o ' + proposed1 + '?';
contextoutname = prefixcontext + 'contextprop1';
symparameters.propo3 = 'propo3';
}
if (propo3 && !propo2 && !propo && !propo1) {
speech = 'Bene ' + name + ', hai avuto ' + proposed2 + ' o ' + proposed3 + '?';
contextoutname = prefixcontext + 'contextprop1';
symparameters.propo2 = 'propo2';
}
if (propo2 && !propo1 && !propo) {
speech = 'Hai ' + proposed4 + ' o ' + proposed5 + '?';
contextoutname = prefixcontext + 'contextprop1';
symparameters.propo1 = 'propo1';
}
if (!propo && propo1) {
speech = 'Casi di ' + proposed6 + ' o ' + proposed7 + '?';
contextoutname = prefixcontext + 'contextprop1';
symparameters.propo = 'propo';
}
if (propo && !propox) {
speech = 'Bevi almeno due litri di acqua al giorno?';
contextoutname = prefixcontext + 'contextprop2';
symparameters.propox = 'propox';
}
}
if (proposed6 && !proposed7) {
if (!propo && !propo1 && !propo2 && !propo3) {
speech = 'Hai ' + proposed + ' o ' + proposed1 + '?';
contextoutname = prefixcontext + 'contextprop1';
symparameters.propo3 = 'propo3';
}
if (propo3 && !propo2 && !propo && !propo1) {
speech = 'allora ' + name + ', hai avuto ' + proposed2 + ' o ' + proposed3 + '?';
contextoutname = prefixcontext + 'contextprop1';
symparameters.propo2 = 'propo2';
}
if (propo2 && !propo1 && !propo) {
speech = 'Casi di ' + proposed4 + ' o ' + proposed5 + '?';
contextoutname = prefixcontext + 'contextprop1';
symparameters.propo1 = 'propo1';
}
if (!propo && propo1) {
speech = 'daccordo, Hai avuto ' + proposed6 + '?';
contextoutname = prefixcontext + 'contextprop1';
symparameters.propo = 'propo';
}
if (propo && !propox) {
speech = 'Bevi almeno due litri di acqua al giorno?';
contextoutname = prefixcontext + 'contextprop2';
symparameters.propox = 'propox';
}
}
if (proposed5 && !proposed6) {
if (!propo && !propo1 && !propo2) {
speech = 'Hai ' + proposed + ' o ' + proposed1 + '?';
contextoutname = prefixcontext + 'contextprop1';
symparameters.propo2 = 'propo2';
}
if (propo2 && !propo && !propo1) {
speech = 'Casi di ' + proposed2 + ' o ' + proposed3 + '?';
contextoutname = prefixcontext + 'contextprop1';
symparameters.propo1 = 'propo1';
}
if (propo1 && !propo) {
speech = 'daccordo, ' + ' hai avuto ' + proposed4 + ' o ' + proposed5 + '?';
contextoutname = prefixcontext + 'contextprop1';
symparameters.propo = 'propo';
}
if (propo && !propox) {
speech = 'Bevi almeno due litri di acqua al giorno?';
contextoutname = prefixcontext + 'contextprop2';
symparameters.propox = 'propox';
}
}
if (proposed4 && !proposed5) {
if (!propo && !propo1 && !propo2) {
speech = 'Hai avuto ' + proposed + ' o ' + proposed1 + '?';
contextoutname = prefixcontext + 'contextprop1';
symparameters.propo2 = 'propo2';
}
if (propo2 && !propo && !propo1) {
speech = 'allora, Casi di ' + proposed2 + ' o ' + proposed3 + '?';
contextoutname = prefixcontext + 'contextprop1';
symparameters.propo1 = 'propo1';
}
if (propo1 && !propo) {
speech = 'Hai ' + proposed4 + '?';
contextoutname = prefixcontext + 'contextprop1';
symparameters.propo = 'propo';
}
if (propo && !propox) {
speech = 'Bevi almeno due litri di acqua al giorno?';
contextoutname = prefixcontext + 'contextprop2';
symparameters.propox = 'propox';
}
}
if (proposed3 && !proposed4) {
if (!propo && !propo1) {
speech = 'Hai avuto ' + proposed + ' o ' + proposed1 + '?';
contextoutname = prefixcontext + 'contextprop1';
symparameters.propo1 = 'propo1';
}
if (!propo && propo1) {
speech = 'daccordo, Casi di ' + proposed2 + ' o ' + proposed3 + '?';
contextoutname = prefixcontext + 'contextprop1';
symparameters.propo = 'propo';
}
if (propo && !propox) {
speech = 'Bevi almeno due litri di acqua al giorno?';
contextoutname = prefixcontext + 'contextprop2';
symparameters.propox = 'propox';
}
}
if (proposed2 && !proposed3) {
if (!propo && !propo1) {
speech = 'Presenti ' + proposed + ' o ' + proposed1 + '?';
contextoutname = prefixcontext + 'contextprop1';
symparameters.propo1 = 'propo1';
}
if (!propo && propo1) {
speech = 'Casi di ' + proposed2 + '?';
contextoutname = prefixcontext + 'contextprop1';
symparameters.propo = 'propo';
} 
if (propo && !propox) {
speech = 'Bevi almeno due litri di acqua al giorno?';
contextoutname = prefixcontext + 'contextprop2';
symparameters.propox = 'propox';
}
}
}
if (intent == 'symprep1') {
contextoutname = prefixcontext + 'contextprop';
}
if (intent != 'symprep1') {
	if (actualcontext.parameters['token1']) {
  token1 = actualcontext.parameters['token1'];
  symparameters.token1 = token1;
} else {
token1 = null;
}
	if (actualcontext.parameters['token2']) {
  token2 = actualcontext.parameters['token2'];
  symparameters.token2 = token2;
} else {
token2 = null;
}	
	if (actualcontext.parameters['token3']) {
  token3 = actualcontext.parameters['token3'];
  symparameters.token3 = token3;
} else {
token3 = null;
}	
	if (actualcontext.parameters['token4']) {
  token4 = actualcontext.parameters['token4'];
  symparameters.token4 = token4;
} else {
token4 = null;
}
	if (actualcontext.parameters['token5']) {
  token5 = actualcontext.parameters['token5'];
  symparameters.token5 = token5;
} else {
token5 = null;
}
	if (actualcontext.parameters['token6']) {
  token6 = actualcontext.parameters['token6'];
  symparameters.token6 = token6;
} else {
token6 = null;
}
	if (actualcontext.parameters['token7']) {
  token7 = actualcontext.parameters['token7'];
  symparameters.token7 = token7;
} else {
token7 = null;
}
	if (actualcontext.parameters['token8']) {
  token8 = actualcontext.parameters['token8'];
  symparameters.token8 = token8;
} else {
token8 = null;
}	
token = token1 + token2 + token3 + token4 + token5 + token6 + token7 + token8;	
console.log('webhooktoken: ' + token);
}

/*Symptoms processing method called*/
  callsymptomApi(idsymptom,symptom,symptom1,symptom2,symptom3,symptom4,propo,propox,symptomgeneral,token,gender,year,proposed,proposed1,proposed2,proposed3,proposed4,proposed5,proposed6,proposed7,propsymptom,propsymptom1,propsymptom2,propsymptom3,propsymptom4,propsymptom5,propsymptom6,propsymptom7,propid,propid1,propid2,propid3,propid4,propid5,propid6,propid7,symparameters,intent).then((output) => { 
    res.setHeader('Content-Type', 'application/json');
		if (contextoutname) {
			console.log('contextoutname: ' + contextoutname);
			contextout.push({'name': contextoutname, 'lifespanCount': 1, 'parameters': output[0] });
		res.send(JSON.stringify({ 'fulfillmentText': speech, 'outputContexts': contextout }));
	} else {
	res.send(JSON.stringify({ 'fulfillmentText': '' }));
	}
	}).catch((error) => {
        res.setHeader('Content-Type', 'application/json' );
    res.send(JSON.stringify({ 'fulfillmentText': error }));
  });
});

/*Symptoms processing method*/
function callsymptomApi (idsymptom,symptom,symptom1,symptom2,symptom3,symptom4,propo,propox,symptomgeneral,token,gender,year,proposed,proposed1,proposed2,proposed3,proposed4,proposed5,proposed6,proposed7,propsymptom,propsymptom1,propsymptom2,propsymptom3,propsymptom4,propsymptom5,propsymptom6,propsymptom7,propid,propid1,propid2,propid3,propid4,propid5,propid6,propid7,symparameters,intent) {
  return new Promise((resolve, reject) => {
 
  let path = '';
  let filteredsymptom = '';
  let filteredsymptom1 = '';
  let filteredsymptom2 = '';
  let filteredsymptom3 = '';
  let filteredsymptom4 = '';
  let token1 = '';
  let token2 = '';
  let token3 = '';
  let token4 = '';
  let token5 = '';
  let token6 = '';
  let token7 = '';
  let token8 = '';
  let symptoma = '';
  let idsymptomb = '';
  let idsymptomc = '';
  let idsymptomd = '';
  let idsymptome = '';
  let propsymptoms = '';
  let proposedsymptoms = '';
  let prob = '';
  let probabil = '';
  let com = '';
  let comname = '';
  let prof = '';
  let probab = '';
  let issue = '';
  let diagnosis = '';
  let response = '';
  let output = [];
  let tokenArr = [];
  
if (!token) {
path = '/index.php';
/*Http request to token function*/
http.get({host: hostoken, path: path}, (res) => {
      let body = ''; // let to store the response chunks
      res.on('data', (d) => { body += d; }); // store each response chunk
      res.on('end', () => {   
      token = body.replace(/\s+/g, '');
      tokenArr = chunkSubstr(token, 108);
	  token1 = tokenArr[0];
	  token2 = tokenArr[1];
	  token3 = tokenArr[2];
	  token4 = tokenArr[3];
	  token5 = tokenArr[4];
	  token6 = tokenArr[5];
	  token7 = tokenArr[6];
	  token8 = tokenArr[7];
	  symparameters.token1 = token1;
	  symparameters.token2 = token2;
	  symparameters.token3 = token3;
	  symparameters.token4 = token4;
	  symparameters.token5 = token5;
	  symparameters.token6 = token6;
	  symparameters.token7 = token7;
	  symparameters.token8 = token8;
      console.log('token: ' + token);
path = '/symptoms?token=' + token + '&language=' + lang + '&format=json';
http.get({host: hosthealth, path: path}, (res) => {
      let body = ''; // let to store the response chunks
      res.on('data', (d) => { body += d; }); // store each response chunk
      res.on('end', () => {      
    response = JSON.parse(body);
	console.log('response: ' + response);
    if (findObjectByKey(response, 'Name', symptom)) {
    filteredsymptom = findObjectByKey(response, 'Name', symptom);
    }
    if (findObjectByKey(response, 'Name', symptom1)) {
    filteredsymptom1 = findObjectByKey(response, 'Name', symptom1);
    }
    if (findObjectByKey(response, 'Name', symptom2)) {
    filteredsymptom2 = findObjectByKey(response, 'Name', symptom2);
    }
    if (findObjectByKey(response, 'Name', symptom3)) {
    filteredsymptom3 = findObjectByKey(response, 'Name', symptom3);
    }
    if (findObjectByKey(response, 'Name', symptom4)) {
    filteredsymptom4 = findObjectByKey(response, 'Name', symptom4);
    }
    if (filteredsymptom) {
    if (filteredsymptom['ID']) {
    symptoma = filteredsymptom['ID'];
	console.log('symptoma: ' + symptoma);
    }
    } 
	if (filteredsymptom1) {
    if (filteredsymptom1['ID']) {
        idsymptomb = filteredsymptom1['ID'];
    }
    }    
    if (filteredsymptom2) {
    if (filteredsymptom2['ID']) {
        idsymptomc = filteredsymptom2['ID'];
    }
    }
    if (filteredsymptom3) {
    if (filteredsymptom3['ID']) {
        idsymptomd = filteredsymptom3['ID'];
    }
    }
    if (filteredsymptom4) {
    if (filteredsymptom4['ID']) {
        idsymptome = filteredsymptom4['ID'];
    }
    }
if (symptoma == idsymptomb || symptoma == idsymptomc || symptoma == idsymptomd || symptoma == idsymptome) {
symptoma = null;
}
if (idsymptomb == symptoma || idsymptomb == idsymptomc || idsymptomb == idsymptomd || idsymptomb == idsymptome) {
idsymptomb = null;
}
if (idsymptomc == symptoma || idsymptomc == idsymptomb || idsymptomc == idsymptomd || idsymptomc == idsymptome) {
idsymptomc = null;
}
if (idsymptomd == symptoma || idsymptomd == idsymptomb || idsymptomd == idsymptomc || idsymptomd == idsymptome) {
idsymptomd = null;
}
if (idsymptome == symptoma || idsymptome == idsymptomb || idsymptome == idsymptomc || idsymptome == idsymptomd) {
idsymptome = null;
}
if (symptoma) {
    symptomgeneral = symptoma.toString();
	symparameters.idsymptom = symptoma.toString();
	}
	if (idsymptomb && !symptoma) {
    symptomgeneral = idsymptomb.toString();
	symparameters.idsymptom = idsymptomb.toString();
    }
    if (idsymptomc && !symptoma && !idsymptomb) {
    symptomgeneral = idsymptomc.toString();
	symparameters.idsymptom = idsymptomc.toString();
    }
    if (idsymptomd && !symptoma && !idsymptomc && !idsymptomb) {
    symptomgeneral = idsymptomd.toString();
	symparameters.idsymptom = idsymptomd.toString();
    }
    if (idsymptome && !symptoma && !idsymptomc && !idsymptomd && !idsymptomb) {
    symptomgeneral = idsymptome.toString();
	symparameters.idsymptom = idsymptome.toString();
    }
	    if (idsymptomb && symptoma) {
    symptomgeneral +=',' + idsymptomb.toString();
    }
    if (idsymptomc && symptoma || idsymptomb) {
    symptomgeneral +=',' + idsymptomc.toString();
    }
    if (idsymptomd && symptoma || idsymptomc || idsymptomb) {
    symptomgeneral +=',' + idsymptomd.toString();
    }
    if (idsymptome && symptoma || idsymptomc || idsymptomd || idsymptomb) {
    symptomgeneral +=',' + idsymptome.toString();
    }
	console.log('symptomgeneral: ' + symptomgeneral);
	symparameters.symptomgeneral = symptomgeneral;
	output.push(symparameters);
	console.log('output: ' + output);
    resolve(output);
	return;
    });
      res.on('error', () => {
        reject('Errore di comunicazione col server');
		return;
      });
    });
	      });
      res.on('error', () => {
        reject('Errore di comunicazione col server');
		return;
      });
    });
	} else {
if (!proposed) {
path = '/symptoms/proposed?symptoms=[' + symptomgeneral + ']&gender=' + gender + '&year_of_birth=' + year + '&token=' + token + '&language=' + lang + '&format=json';
    console.log('path: ' + path);
/*Http request to API*/
	http.get({host: hosthealth, path: path}, (res) => {
      let body = ''; 
      res.on('data', (d) => { body += d; }); 
      res.on('end', () => {              
      response = JSON.parse(body);
	  console.log('response: ' + response);
      if (getFields(response, 'ID')) {
        propsymptoms = getFields(response, 'ID');
      }
      if (getFields(response, 'Name')) {
        proposedsymptoms = getFields(response, 'Name');
      }
      if (proposedsymptoms[0]) {
 proposed = proposedsymptoms[0];
 console.log('proposed: ' + proposed);
}
if (proposedsymptoms[1]) {
 proposed1 = proposedsymptoms[1];
}
if (proposedsymptoms[2]) {
 proposed2 = proposedsymptoms[2];
}
if (proposedsymptoms[3]) {
 proposed3 = proposedsymptoms[3];
}
if (proposedsymptoms[4]) {
 proposed4 = proposedsymptoms[4];
}
if (proposedsymptoms[5]) {
 proposed5 = proposedsymptoms[5];
}
if (proposedsymptoms[6]) {
 proposed6 = proposedsymptoms[6];
}
if (proposedsymptoms[7]) {
 proposed7 = proposedsymptoms[7];
}
if (propsymptoms[0]) {
 propid = propsymptoms[0].toString();
}
if (propsymptoms[1]) {
 propid1 = propsymptoms[1].toString();
}
if (propsymptoms[2]) {
 propid2 = propsymptoms[2].toString();
}
if (propsymptoms[3]) {
 propid3 = propsymptoms[3].toString();
}
if (propsymptoms[4]) {
 propid4 = propsymptoms[4].toString();
}
if (propsymptoms[5]) {
 propid5 = propsymptoms[5].toString();
}
if (propsymptoms[6]) {
 propid6 = propsymptoms[6].toString();
}
if (propsymptoms[7]) {
 propid7 = propsymptoms[7].toString();
}
if (!proposed2) {
path = '/symptoms/proposed?symptoms=[' + idsymptom + ']&gender=' + gender + '&year_of_birth=' + year + '&token=' + token + '&language=' + lang + '&format=json';
/*Http request to API*/
http.get({host: hosthealth, path: path}, (res) => {
      let body = ''; 
      res.on('data', (d) => { body += d; }); 
      res.on('end', () => {              
      response = JSON.parse(body);
      if (getFields(response, 'ID')) {
        propsymptoms = getFields(response, 'ID');
      }
      if (getFields(response, 'Name')) {
        proposedsymptoms = getFields(response, 'Name');
      }
      if (proposedsymptoms[0]) {
 proposed = proposedsymptoms[0];
}
if (proposedsymptoms[1]) {
 proposed1 = proposedsymptoms[1];
}
if (proposedsymptoms[2]) {
 proposed2 = proposedsymptoms[2];
}
if (proposedsymptoms[3]) {
 proposed3 = proposedsymptoms[3];
}
if (proposedsymptoms[4]) {
 proposed4 = proposedsymptoms[4];
}
if (proposedsymptoms[5]) {
 proposed5 = proposedsymptoms[5];
}
if (proposedsymptoms[6]) {
 proposed6 = proposedsymptoms[6];
}
if (proposedsymptoms[7]) {
 proposed7 = proposedsymptoms[7];
}
if (propsymptoms[0]) {
 propid = propsymptoms[0].toString();
}
if (propsymptoms[1]) {
 propid1 = propsymptoms[1].toString();
}
if (propsymptoms[2]) {
 propid2 = propsymptoms[2].toString();
}
if (propsymptoms[3]) {
 propid3 = propsymptoms[3].toString();
}
if (propsymptoms[4]) {
 propid4 = propsymptoms[4].toString();
}
if (propsymptoms[5]) {
 propid5 = propsymptoms[5].toString();
}
if (propsymptoms[6]) {
 propid6 = propsymptoms[6].toString();
}
if (propsymptoms[7]) {
 propid7 = propsymptoms[7].toString();
}
if (proposed) {
symparameters.proposed = proposed;
}
if (proposed1) {
symparameters.proposed1 = proposed1;
}
if (proposed2) {
symparameters.proposed2 = proposed2;
}
if (proposed3) {
symparameters.proposed3 = proposed3;
}
if (proposed4) {
symparameters.proposed4 = proposed4;
}
if (proposed5) {
symparameters.proposed5 = proposed5;
}
if (proposed6) {
symparameters.proposed6 = proposed6;
}
if (proposed7) {
symparameters.proposed7 = proposed7;
}
if (propid) {
symparameters.propid = propid;
}
if (propid1) {
symparameters.propid1 = propid1;
}
if (propid2) {
symparameters.propid2 = propid2;
}
if (propid3) {
symparameters.propid3 = propid3;
}
if (propid4) {
symparameters.propid4 = propid4;
}
if (propid5) {
symparameters.propid5 = propid5;
}
if (propid6) {
symparameters.propid6 = propid6;
}
if (propid7) {
symparameters.propid7 = propid7;
}
output.push(symparameters);
console.log('output: ' + output);
resolve(output);
return;
    });
      res.on('error', () => {
        reject('Errore di comunicazione col server');
		return;
      });
    });
} else {  
if (proposed) {
symparameters.proposed = proposed;
}
if (proposed1) {
symparameters.proposed1 = proposed1;
}
if (proposed2) {
symparameters.proposed2 = proposed2;
}
if (proposed3) {
symparameters.proposed3 = proposed3;
}
if (proposed4) {
symparameters.proposed4 = proposed4;
}
if (proposed5) {
symparameters.proposed5 = proposed5;
}
if (proposed6) {
symparameters.proposed6 = proposed6;
}
if (proposed7) {
symparameters.proposed7 = proposed7;
}
if (propid) {
symparameters.propid = propid;
}
if (propid1) {
symparameters.propid1 = propid1;
}
if (propid2) {
symparameters.propid2 = propid2;
}
if (propid3) {
symparameters.propid3 = propid3;
}
if (propid4) {
symparameters.propid4 = propid4;
}
if (propid5) {
symparameters.propid5 = propid5;
}
if (propid6) {
symparameters.propid6 = propid6;
}
if (propid7) {
symparameters.propid7 = propid7;
}
};
output.push(symparameters);
console.log('output: ' + output);
    resolve(output);
	return;
    });
      res.on('error', () => {
        reject('Errore di comunicazione col server');
		return;
      });
    });
	} else {
	if (intent == 'symquest1') {	
output.push(symparameters);
console.log('output: ' + output);
resolve(output);
return;
	}
	};
	if (intent == 'symprop') {
		if (!propo) {
output.push(symparameters);
console.log('output: ' + output);
resolve(output);
return;
}
	};	
if (propo && !propox) {
if (proposed7 != null) {
if (propsymptom) {
if (propsymptom == proposed7) {
symptomgeneral +=',' + propid7;
}
}
if (propsymptom1) {
if (propsymptom1 == proposed7) {
symptomgeneral +=',' + propid7;
}
}
if (propsymptom2) {
if (propsymptom2 == proposed7) {
symptomgeneral +=',' + propid7;
}
}
if (propsymptom3) {
if (propsymptom3 == proposed7) {
symptomgeneral +=',' + propid7;
}
}
if (propsymptom4) {
if (propsymptom4 == proposed7) {
symptomgeneral +=',' + propid7;
}
}
if (propsymptom5) {
if (propsymptom5 == proposed7) {
symptomgeneral +=',' + propid7;
}
}
if (propsymptom6) {
if (propsymptom6 == proposed7) {
symptomgeneral +=',' + propid7;
}
}
if (propsymptom7) {
if (propsymptom7 == proposed7) {
symptomgeneral +=',' + propid7;
}
}
}
if (proposed6 != null) {
if (propsymptom) {
if (propsymptom == proposed6) {
symptomgeneral +=',' + propid6;
}
}
if (propsymptom1) {
if (propsymptom1 == proposed6) {
symptomgeneral +=',' + propid6;
}
}
if (propsymptom2) {
if (propsymptom2 == proposed6) {
symptomgeneral +=',' + propid6;
}
}
if (propsymptom3) {
if (propsymptom3 == proposed6) {
symptomgeneral +=',' + propid6;
}
}
if (propsymptom4) {
if (propsymptom4 == proposed6) {
symptomgeneral +=',' + propid6;
}
}
if (propsymptom5) {
if (propsymptom5 == proposed6) {
symptomgeneral +=',' + propid6;
}
}
if (propsymptom6) {
if (propsymptom6 == proposed6) {
symptomgeneral +=',' + propid6;
}
}
if (propsymptom7) {
if (propsymptom7 == proposed6) {
symptomgeneral +=',' + propid6;
}
}
}
if (proposed5 != null) {
if (propsymptom) {
if (propsymptom == proposed5) {
symptomgeneral +=',' + propid5;
}
}
if (propsymptom1) {
if (propsymptom1 == proposed5) {
symptomgeneral +=',' + propid5;
}
}
if (propsymptom2) {
if (propsymptom2 == proposed5) {
symptomgeneral +=',' + propid5;
}
}
if (propsymptom3) {
if (propsymptom3 == proposed5) {
symptomgeneral +=',' + propid5;
}
}
if (propsymptom4) {
if (propsymptom4 == proposed5) {
symptomgeneral +=',' + propid5;
}
}
if (propsymptom5) {
if (propsymptom5 == proposed5) {
symptomgeneral +=',' + propid5;
}
}
if (propsymptom6) {
if (propsymptom6 == proposed5) {
symptomgeneral +=',' + propid5;
}
}
if (propsymptom7) {
if (propsymptom7 == proposed5) {
symptomgeneral +=',' + propid5;
}
}
}
if (proposed4 != null) {
if (propsymptom) {
if (propsymptom == proposed4) {
symptomgeneral +=',' + propid4;
}
}
if (propsymptom1) {
if (propsymptom1 == proposed4) {
symptomgeneral +=',' + propid4;
}
}
if (propsymptom2) {
if (propsymptom2 == proposed4) {
symptomgeneral +=',' + propid4;
}
}
if (propsymptom3) {
if (propsymptom3 == proposed4) {
symptomgeneral +=',' + propid4;
}
}
if (propsymptom4) {
if (propsymptom4 == proposed4) {
symptomgeneral +=',' + propid4;
}
}
if (propsymptom5) {
if (propsymptom5 == proposed4) {
symptomgeneral +=',' + propid4;
}
}
if (propsymptom6) {
if (propsymptom6 == proposed4) {
symptomgeneral +=',' + propid4;
}
}
if (propsymptom7) {
if (propsymptom7 == proposed4) {
symptomgeneral +=',' + propid4;
}
}
}
if (proposed3 != null) {
if (propsymptom) {
if (propsymptom == proposed3) {
symptomgeneral +=',' + propid3;
}
}
if (propsymptom1) {
if (propsymptom1 == proposed3) {
symptomgeneral +=',' + propid3;
}
}
if (propsymptom2) {
if (propsymptom2 == proposed3) {
symptomgeneral +=',' + propid3;
}
}
if (propsymptom3) {
if (propsymptom3 == proposed3) {
symptomgeneral +=',' + propid3;
}
}
if (propsymptom4) {
if (propsymptom4 == proposed3) {
symptomgeneral +=',' + propid3;
}
}
if (propsymptom5) {
if (propsymptom5 == proposed3) {
symptomgeneral +=',' + propid3;
}
}
if (propsymptom6) {
if (propsymptom6 == proposed3) {
symptomgeneral +=',' + propid3;
}
}
if (propsymptom7) {
if (propsymptom7 == proposed3) {
symptomgeneral +=',' + propid3;
}
}
}
if (proposed2 != null) {
if (propsymptom) {
if (propsymptom == proposed2) {
symptomgeneral +=',' + propid2;
}
}
if (propsymptom1) {
if (propsymptom1 == proposed2) {
symptomgeneral +=',' + propid2;
}
}
if (propsymptom2) {
if (propsymptom2 == proposed2) {
symptomgeneral +=',' + propid2;
}
}
if (propsymptom3) {
if (propsymptom3 == proposed2) {
symptomgeneral +=',' + propid2;
}
}
if (propsymptom4) {
if (propsymptom4 == proposed2) {
symptomgeneral +=',' + propid2;
}
}
if (propsymptom5) {
if (propsymptom5 == proposed2) {
symptomgeneral +=',' + propid2;
}
}
if (propsymptom6) {
if (propsymptom6 == proposed2) {
symptomgeneral +=',' + propid2;
}
}
if (propsymptom7) {
if (propsymptom7 == proposed2) {
symptomgeneral +=',' + propid2;
}
}
}
if (propsymptom) {
if (propsymptom == proposed1) {
symptomgeneral +=',' + propid1;
}
}
if (propsymptom1) {
if (propsymptom1 == proposed1) {
symptomgeneral +=',' + propid1;
}
}
if (propsymptom2) {
if (propsymptom2 == proposed1) {
symptomgeneral +=',' + propid1;
}
}
if (propsymptom3) {
if (propsymptom3 == proposed1) {
symptomgeneral +=',' + propid1;
}
}
if (propsymptom4) {
if (propsymptom4 == proposed1) {
symptomgeneral +=',' + propid1;
}
}
if (propsymptom5) {
if (propsymptom5 == proposed1) {
symptomgeneral +=',' + propid1;
}
}
if (propsymptom6) {
if (propsymptom6 == proposed1) {
symptomgeneral +=',' + propid1;
}
}
if (propsymptom7) {
if (propsymptom7 == proposed1) {
symptomgeneral +=',' + propid1;
}
}
if (propsymptom) {
if (propsymptom == proposed) {
symptomgeneral +=',' + propid;
}
}
if (propsymptom1) {
if (propsymptom1 == proposed) {
symptomgeneral +=',' + propid;
}
}
if (propsymptom2) {
if (propsymptom2 == proposed) {
symptomgeneral +=',' + propid;
}
}
if (propsymptom3) {
if (propsymptom3 == proposed) {
symptomgeneral +=',' + propid;
}
}
if (propsymptom4) {
if (propsymptom4 == proposed) {
symptomgeneral +=',' + propid;
}
}
if (propsymptom5) {
if (propsymptom5 == proposed) {
symptomgeneral +=',' + propid;
}
}
if (propsymptom6) {
if (propsymptom6 == proposed) {
symptomgeneral +=',' + propid;
}
}
if (propsymptom7) {
if (propsymptom7 == proposed) {
symptomgeneral +=',' + propid;
}
} 
	symparameters.symptomgeneral = symptomgeneral;
path = '/diagnosis?symptoms=[' + symptomgeneral + ']&gender=' + gender + '&year_of_birth=' + year + '&token=' + token + '&language=' + lang + '&format=json';
/*Http request to API*/
http.get({host: hosthealth, path: path}, (res) => {
      let body = ''; // let to store the response chunks
      res.on('data', (d) => { body += d; }); // store each response chunk
      res.on('end', () => {
response = JSON.parse(body);
if (getFields(response, 'Issue')) {
    diagnosis = getFields(response, 'Issue');
}
if (diagnosis) {
if (getFields(diagnosis, 'ProfName')) {
issue = getFields(diagnosis, 'ProfName');
}
}
if (diagnosis) {
if (getFields(diagnosis, 'Name')) {
com = getFields(diagnosis, 'Name');
}
}
if (diagnosis) {
if (getFields(diagnosis, 'Accuracy')) {
prob = getFields(diagnosis, 'Accuracy');
}
}
if (issue[0]) {
prof = issue[0];
}
if (com[0]) {
comname = com[0];
}
if (prob[0]) {
probabil = parseInt(prob[0], 10);
}
if (!prof) {
path = '/diagnosis?symptoms=[' + idsymptom + ']&gender=' + gender + '&year_of_birth=' + year + '&token=' + token + '&language=' + lang + '&format=json';
/*Http request to API*/
http.get({host: hosthealth, path: path}, (res) => {
      let body = ''; // let to store the response chunks
      res.on('data', (d) => { body += d; }); // store each response chunk
      res.on('end', () => {
response = JSON.parse(body);
if (getFields(response, 'Issue')) {
    diagnosis = getFields(response, 'Issue');
}
if (diagnosis) {
if (getFields(diagnosis, 'ProfName')) {
issue = getFields(diagnosis, 'ProfName');
}
}
if (diagnosis) {
if (getFields(diagnosis, 'Name')) {
com = getFields(diagnosis, 'Name');
}
}
if (diagnosis) {
if (getFields(diagnosis, 'Accuracy')) {
prob = getFields(diagnosis, 'Accuracy');
}
}
if (issue[0]) {
prof = issue[0];
}
if (com[0]) {
comname = com[0];
}
if (prob[0]) {
probabil = parseInt(prob[0], 10);
}
probab = probabil.toString();
symparameters.prof = prof;
symparameters.comname = comname;
symparameters.probab = probab;
output.push(symparameters);
console.log('output: ' + output);
resolve(output);
return;
    });
      res.on('error', () => {
        reject('Errore di comunicazione col server');
		return;
      });
    });
} else {
probab = probabil.toString();
symparameters.prof = prof;
symparameters.comname = comname;
symparameters.probab = probab;
}
output.push(symparameters);
console.log('output: ' + output);
resolve(output);
return;
    });
      res.on('error', () => {
        reject('Errore di comunicazione col server');
		return;
      });
    });
}
if (propox) {
output.push(symparameters);
console.log('output: ' + output);
resolve(output);
return;
}	
};
});
};