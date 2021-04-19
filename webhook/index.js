const http = require('https');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
/*API infermedica url and credentials*/
const hostBase = 'api.infermedica.com';
const appId = 'APPID';
const appKey = 'APPKEY';

/*API query methods*/
function getFields(input, field) {
    var outputar = [];
    for (var i=0; i < input.length ; i++) {
        outputar.push(input[i][field]);
        }
    return outputar;
}

function findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] == value) {
            return array[i];
        } 
}
return null;
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
let actualcontext = '';
let contexts = [];
let contextout = [];
let sessioncontext = '';
let prefixcontext = '';
let symptom = ''; 
let symptom1 = ''; 
let symptom2 = ''; 
let symptom3 = ''; 
let symptom4 = '';
let riskfactor = ''; 
let riskfactor1 = ''; 
let riskfactor2 = ''; 
let riskfactor3 = ''; 
let riskfactor4 = '';
let riskfactor5 = ''; 
let riskfactor6 = ''; 
let riskfactor7 = ''; 
let riskfactor8 = ''; 
let riskfactor9 = '';
let profname = '';
let profid = '';
let symptomgeneralPos = [];
let symptomgeneralNeg = [];
let symparameters = {};
let age = '';
let gender = '';
let malattia = '';
let choiceId = '';
let contextoutname = '';
let yes = false;
let no = false;
let path = '';
let speech = '';
let intent = '';

/*Dialogflow parameters*/
if (req.body.session) {  
  sessioncontext = req.body.session;
  console.log('sessioncontext: ' + sessioncontext);
} else {
sessioncontext = null;
}
prefixcontext = sessioncontext + '/contexts/';
if (req.body.queryResult.parameters) {
if (req.body.queryResult.parameters['symptom']) {
symptom = req.body.queryResult.parameters['symptom'];
}
if (req.body.queryResult.parameters['symptom1']) {
symptom1 = req.body.queryResult.parameters['symptom1'];
}
if (req.body.queryResult.parameters['symptom2']) {
symptom2 = req.body.queryResult.parameters['symptom2'];
}
if (req.body.queryResult.parameters['symptom3']) {
symptom3 = req.body.queryResult.parameters['symptom3'];
}
if (req.body.queryResult.parameters['symptom4']) {
symptom4 = req.body.queryResult.parameters['symptom4'];
}
if (req.body.queryResult.parameters['riskcomplete']) {
riskfactor = req.body.queryResult.parameters['riskcomplete'];
}
if (req.body.queryResult.parameters['riskcomplete1']) {
riskfactor1 = req.body.queryResult.parameters['riskcomplete1'];
}
if (req.body.queryResult.parameters['riskcomplete2']) {
riskfactor2 = req.body.queryResult.parameters['riskcomplete2'];
}
if (req.body.queryResult.parameters['riskcomplete3']) {
riskfactor3 = req.body.queryResult.parameters['riskcomplete3'];
}
if (req.body.queryResult.parameters['riskcomplete4']) {
riskfactor4 = req.body.queryResult.parameters['riskcomplete4'];
}
if (req.body.queryResult.parameters['riskcomplete5']) {
riskfactor5 = req.body.queryResult.parameters['riskcomplete5'];
}
if (req.body.queryResult.parameters['riskcomplete6']) {
riskfactor6 = req.body.queryResult.parameters['riskcomplete6'];
}
if (req.body.queryResult.parameters['riskcomplete7']) {
riskfactor7 = req.body.queryResult.parameters['riskcomplete7'];
}
if (req.body.queryResult.parameters['riskcomplete8']) {
riskfactor8 = req.body.queryResult.parameters['riskcomplete8'];
}
if (req.body.queryResult.parameters['riskcomplete9']) {
riskfactor9 = req.body.queryResult.parameters['riskcomplete9'];
}
if (req.body.queryResult.parameters['gender']) {
 gender = req.body.queryResult.parameters['gender'];
 symparameters.gender = gender;
}
if (req.body.queryResult.parameters['yes']) {  
  yes = true;
}
if (req.body.queryResult.parameters['no']) {
  no = true;
}
if (req.body.queryResult.parameters['malattia']) {
  malattia = req.body.queryResult.parameters['malattia'];
}
if (req.body.queryResult.parameters['year']) {
 age = 2019 - parseInt(req.body.queryResult.parameters['year']);
 symparameters.age = age;
}
}
if (req.body.queryResult.intent.displayName) {
intent = req.body.queryResult.intent.displayName;
console.log('intent: ' + intent);
}
if (req.body.queryResult.outputContexts) {
  contexts = req.body.queryResult.outputContexts;
  actualcontext = contexts[0];
} else {
contexts = null;
actualcontext = null;
}
if (actualcontext) {
if (actualcontext.parameters['gender']) {
  gender = actualcontext.parameters['gender'];
  symparameters.gender = gender;
}
if (actualcontext.parameters['age']) {
  age = actualcontext.parameters['age'];
  symparameters.age = age;
}
if (actualcontext.parameters['choiceId']) {
  choiceId = actualcontext.parameters['choiceId'];
}
if (actualcontext.parameters['textdiag'] === 'yes') {
  symparameters.textdiag = 'no';
}
if (actualcontext.parameters['symptomgeneralPos']) {
  symptomgeneralPos = JSON.parse('[' + actualcontext.parameters['symptomgeneralPos'] + ']');
}
if (actualcontext.parameters['symptomgeneralNeg']) {
  symptomgeneralNeg = JSON.parse('[' + actualcontext.parameters['symptomgeneralNeg'] + ']');
}
if (actualcontext.parameters['profid']) {
  profid = actualcontext.parameters['profid'];
  symparameters.profid = profid;
}
if (actualcontext.parameters['profname']) {
  profname = actualcontext.parameters['profname'];
  symparameters.profname = profname;
}
}

if (intent === 'syminterview' || intent === 'symprep1') {
contextoutname = prefixcontext + 'contextprop';
} else {
contextoutname = prefixcontext + 'contextprop4';
}

/*Symptoms processing method called*/ 
callsymptomApi(prefixcontext, symptom, symptom1, symptom2, symptom3, symptom4, riskfactor, riskfactor1, riskfactor2, riskfactor3, riskfactor4, riskfactor5, riskfactor6, riskfactor7, riskfactor8, riskfactor9, profname, profid, symptomgeneralPos, symptomgeneralNeg, symparameters, age, gender, malattia, choiceId, contextoutname, yes, no, path, speech, intent).then((output) => { 
    res.setHeader('Content-Type', 'application/json');
			console.log('contextoutname: ' + contextoutname);
			contextout.push({'name': contextoutname, 'lifespanCount': 1, 'parameters': output[0] });
		res.send(JSON.stringify({ 'fulfillmentText': output[1], 'outputContexts': contextout }));
	}).catch((error) => {
        res.setHeader('Content-Type', 'application/json' );
    res.send(JSON.stringify({ 'fulfillmentText': error }));
  });
});

/*Symptoms processing method*/
function callsymptomApi (prefixcontext, symptom, symptom1, symptom2, symptom3, symptom4, riskfactor, riskfactor1, riskfactor2, riskfactor3, riskfactor4, riskfactor5, riskfactor6, riskfactor7, riskfactor8, riskfactor9, profname, profid, symptomgeneralPos, symptomgeneralNeg, symparameters, age, gender, malattia, choiceId, contextoutname, yes, no, path, speech, intent) {
  return new Promise((resolve, reject) => {

let evidence = [];
let postData = {};
let output = [];

if (intent != 'malattia' && intent != 'malattia1' && intent != 'syminfo1' && intent != 'symthera' && intent != 'symdesc') {
if (!symptomgeneralPos) {
path = '/v2/symptoms';
var headers = {
       'Content-Type': 'application/json',
       'App-Id': appId,
	   'App-Key': appKey,
	   'Model': 'infermedica-it' 
     };
/*Http request to API*/ 	 
http.get({host: hostBase, path: path, headers: headers}, (res) => {
      let body = ''; // let to store the response chunks
      res.on('data', (d) => { body += d; }); // store each response chunk
      res.on('end', () => {
	  var response = JSON.parse(body);	      
	  var symptoma = {};
	  var idsymptomb = {};
	  var idsymptomc = {};
	  var idsymptomd = {};
	  var idsymptome = {};
	  if (findObjectByKey(response, 'name', symptom)) {
    symptoma = findObjectByKey(response, 'name', symptom);
    }
    if (findObjectByKey(response, 'name', symptom1)) {
    idsymptomb = findObjectByKey(response, 'name', symptom1);
    }
    if (findObjectByKey(response, 'name', symptom2)) {
    idsymptomc = findObjectByKey(response, 'name', symptom2);
    }
    if (findObjectByKey(response, 'name', symptom3)) {
    idsymptomd = findObjectByKey(response, 'name', symptom3);
    }
    if (findObjectByKey(response, 'name', symptom4)) {
    idsymptome = findObjectByKey(response, 'name', symptom4);
    }		
    if (symptoma) {
    symptomgeneralPos.push(symptoma['id']);
	symparameters.sexGender = symptoma['sex_filter'];
	}
	if (idsymptomb) {
    symptomgeneralPos.push(idsymptomb['id']);
	symparameters.sexGender1 = idsymptomb['sex_filter'];
    }
    if (idsymptomc) {
    symptomgeneralPos.push(idsymptomc['id']);
	symparameters.sexGender2 = idsymptomc['sex_filter'];
    }
    if (idsymptomd) {
    symptomgeneralPos.push(idsymptomd['id']);
	symparameters.sexGender3 = idsymptomd['sex_filter'];
    }
    if (idsymptome) {
    symptomgeneralPos.push(idsymptome['id']);
	symparameters.sexGender4 = idsymptome['sex_filter'];
    }
    path = '/v2/risk_factors';
var headers = {
       'Content-Type': 'application/json',
       'App-Id': appId,
	   'App-Key': appKey,
	   'Model': 'infermedica-it' 
     };
/*Http request to API*/ 
http.get({host: hostBase, path: path, headers: headers}, (res) => {
      let body = ''; // let to store the response chunks
      res.on('data', (d) => { body += d; }); // store each response chunk
      res.on('end', () => {
	  var response = JSON.parse(body);	      
	  var riskfactora = {};
	  var riskfactorb = {};
	  var riskfactorc = {};
	  var riskfactord = {};
	  var riskfactore = {};
	  var riskfactorf = {};
	  var riskfactorg = {};
	  var riskfactorh = {};
	  var riskfactori = {};
	  var riskfactorl = {};
	  if (findObjectByKey(response, 'name', riskfactor)) {
    riskfactora = findObjectByKey(response, 'name', riskfactor);
    }
    if (findObjectByKey(response, 'name', riskfactor1)) {
    riskfactorb = findObjectByKey(response, 'name', riskfactor1);
    }
    if (findObjectByKey(response, 'name', riskfactor2)) {
    riskfactorc = findObjectByKey(response, 'name', riskfactor2);
    }
    if (findObjectByKey(response, 'name', riskfactor3)) {
    riskfactord = findObjectByKey(response, 'name', riskfactor3);
    }
    if (findObjectByKey(response, 'name', riskfactor4)) {
    riskfactore = findObjectByKey(response, 'name', riskfactor4);
    }
    if (findObjectByKey(response, 'name', riskfactor5)) {
    riskfactorf = findObjectByKey(response, 'name', riskfactor5);
    }
    if (findObjectByKey(response, 'name', riskfactor6)) {
    riskfactorg = findObjectByKey(response, 'name', riskfactor6);
    }
    if (findObjectByKey(response, 'name', riskfactor7)) {
    riskfactorh = findObjectByKey(response, 'name', riskfactor7);
    }
    if (findObjectByKey(response, 'name', riskfactor8)) {
    riskfactori = findObjectByKey(response, 'name', riskfactor8);
    }
    if (findObjectByKey(response, 'name', riskfactor9)) {
    riskfactorl = findObjectByKey(response, 'name', riskfactor9);
    }	
    if (riskfactora) {
    symptomgeneralPos.push(riskfactora['id']);
	}
	if (riskfactorb) {
    symptomgeneralPos.push(riskfactorb['id']);
    }
    if (riskfactorc) {
    symptomgeneralPos.push(riskfactorc['id']);
    }
    if (riskfactord) {
    symptomgeneralPos.push(riskfactord['id']);
    }
    if (riskfactore) {
    symptomgeneralPos.push(riskfactore['id']);
    }
    if (riskfactorf) {
    symptomgeneralPos.push(riskfactorf['id']);
	}
	if (riskfactorg) {
    symptomgeneralPos.push(riskfactorg['id']);
    }
    if (riskfactorh) {
    symptomgeneralPos.push(riskfactorh['id']);
    }
    if (riskfactori) {
    symptomgeneralPos.push(riskfactori['id']);
    }
    if (riskfactorl) {
    symptomgeneralPos.push(riskfactorl['id']);
    }	
	for (var i = 0; i < symptomgeneralPos.length; i++) {
	let Obj = {};
	Obj.choice_id = 'present';
	Obj.id = symptomgeneralPos[i];
	evidence.push(Obj);
    }
	console.log('symptomgeneralPos: ' + JSON.stringify(symptomgeneralPos));
	symparameters.symptomgeneralPos = JSON.stringify(symptomgeneralPos);
	var postData = {
  'sex': gender,
  'age': age,
  'evidence': evidence
  'extras': { 
  'disable_groups': true
  }
};  
	var options = {
  hostname: hostBase,
  path: '/v2/diagnosis',
  method: 'POST',
  headers: {
       'Content-Type': 'application/json',
       'App-Id': appId,
	   'App-Key': appKey,
	   'Model': 'infermedica-it'
     }
};  
/*Http request to API*/
var req = http.request(options, (res) => {
let body = '';
res.on('data', (d) => { body += d; });
res.on('end', () => {
var response = JSON.parse(body);
if (!response['question']) {	
var conditions = response['conditions'];
if (conditions) {
speech = 'Bene! la diagnosi è completa. Sei pronto a conoscere il risultato?';
var profObj = conditions[0];
var probability = parseFloat(profObj['probability']);
var probabil = Math.trunc(probability * 100);
profname = profObj['name'];
profid = profObj['id'];
symparameters.profid = profid;
symparameters.profname = profname;
symparameters.probabil = probabil.toString();
contextoutname = prefixcontext + 'contextprop3';
symparameters.textdiag = 'yes';
} else {
speech = 'Sembra che i tuoi sintomi non siano correlati a nessuna malattia in particolare. La mia funzione principale resta la diagnosi se vuoi ricominciare, ma posso anche darti piu informazioni su una specifica malattia. Altrimenti posso continuare a spiegarti come funziono. Cosa vuoi fare?';
contextoutname = prefixcontext + 'symdata';
}
} else {
speech = response['question']['text'];
var items = [];
items = response['question']['items'];
var choiceObj = items[0];
choiceId = choiceObj['id'];
symparameters.choiceId = choiceId;
}	
output.push(symparameters);
output.push(speech);
	console.log('output: ' + output);
    resolve(output);
	return;	
    });
});
req.on('error', () => {
  reject('Errore di comunicazione col server');
		return;
});
req.write(JSON.stringify(postData));
req.end();
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
if (yes) {
symptomgeneralPos.push(choiceId);
} else {
symptomgeneralNeg.push(choiceId);
}
for (var i = 0; i < symptomgeneralPos.length; i++) {
	let Obj = {};
	Obj.choice_id = 'present';
	Obj.id = symptomgeneralPos[i];
	evidence.push(Obj);
}
if (symptomgeneralNeg) {
for (var i = 0; i < symptomgeneralNeg.length; i++) {
	let Obj = {};
	Obj.choice_id = 'absent';
	Obj.id = symptomgeneralNeg[i];
	evidence.push(Obj);
}
symparameters.symptomgeneralNeg = JSON.stringify(symptomgeneralNeg);	
}
symparameters.symptomgeneralPos = JSON.stringify(symptomgeneralPos);
	 var postData = {
  'sex': gender,
  'age': age,
  'evidence': evidence
  'extras': { 
  'disable_groups': true
  } 
};  
	var options = {
  hostname: hostBase,
  path: '/v2/diagnosis',
  method: 'POST',
  headers: {
       'Content-Type': 'application/json',
       'App-Id': appId,
	   'App-Key': appKey,
	   'Model': 'infermedica-it'
     }
};
/*Http request to API*/ 
var req = http.request(options, (res) => {
let body = '';
res.on('data', (d) => { body += d; });
res.on('end', () => {
var response = JSON.parse(body);
if (!response['question']) {
var conditions = response['conditions'];
if (conditions) {
speech = 'Bene! la diagnosi è completa. Sei pronto a conoscere il risultato?';
var profObj = conditions[0];
var probability = parseFloat(profObj['probability']);
var probabil = Math.trunc(probability * 100);
profname = profObj['name'];
profid = profObj['id'];
symparameters.profid = profid;
symparameters.profname = profname;
symparameters.probabil = probabil.toString();
contextoutname = prefixcontext + 'contextprop3';
symparameters.textdiag = 'yes';
} else {
speech = 'Sembra che i tuoi sintomi non siano correlati a nessuna malattia in particolare. La mia funzione principale resta la diagnosi se vuoi ricominciare, ma posso anche darti piu informazioni su una specifica malattia. Altrimenti posso continuare a spiegarti come funziono. Cosa vuoi fare?';
contextoutname = prefixcontext + 'symdata';
}
} else {
speech = response['question']['text'];
var items = [];
items = response['question']['items'];
var choiceObj = items[0];
choiceId = choiceObj['id'];
symparameters.choiceId = choiceId;
}	
output.push(symparameters);
output.push(speech);
	console.log('output: ' + output);
    resolve(output);
	return;	
    });
});
req.on('error', () => {
  reject('Errore di comunicazione col server');
		return;
});
req.write(JSON.stringify(postData));
req.end();
}
} else {
if (intent === 'symdesc' || intent === 'syminfo1') {
if (intent === 'syminfo1') {
path = '/v2/conditions';
var headers = {
       'Content-Type': 'application/json',
       'App-Id': appId,
	   'App-Key': appKey,
	   'Model': 'infermedica-it' 
     };
/*Http request to API*/
http.get({host: hostBase, path: path, headers: headers}, (res) => {
      let body = ''; // let to store the response chunks
      res.on('data', (d) => { body += d; }); // store each response chunk
      res.on('end', () => {
var response = JSON.parse(body);
var profObj = findObjectByKey(response, 'name', malattia);
profid = profObj['id'];
symparameters.profid = profid;
path = '/v2/conditions/' + profid;
var headers = {
       'Content-Type': 'application/json',
       'App-Id': appId,
	   'App-Key': appKey,
	   'Model': 'infermedica-it' 
     };
/*Http request to API*/
http.get({host: hostBase, path: path, headers: headers}, (res) => {
      let body = ''; // let to store the response chunks
      res.on('data', (d) => { body += d; }); // store each response chunk
      res.on('end', () => {
var response = JSON.parse(body);
speech = 'è un malessere comunemente chiamato ' + response['common_name'] + ' e appartenente all ambito ' + response['categories'][0] + '. ha una gravità ' + response['severity'] + ', presenta solitamente intensità ' + response['acuteness'] + ' e una diffusione ' + response['prevalence'];
output.push(symparameters);
output.push(speech);
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
path = '/v2/conditions/' + profid;
var headers = {
       'Content-Type': 'application/json',
       'App-Id': appId,
	   'App-Key': appKey,
	   'Model': 'infermedica-it' 
     };
/*Http request to API*/
http.get({host: hostBase, path: path, headers: headers}, (res) => {
      let body = ''; // let to store the response chunks
      res.on('data', (d) => { body += d; }); // store each response chunk
      res.on('end', () => {
var response = JSON.parse(body);
speech = 'è un malessere comunemente chiamato ' + response['common_name'] + ' e appartenente all ambito ' + response['categories'][0] + '. ha una gravità ' + response['severity'] + ', presenta solitamente intensità ' + response['acuteness'] + ' e una diffusione ' + response['prevalence'];
output.push(symparameters);
output.push(speech);
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
} else {
if (intent === 'malattia' || intent === 'malattia1') {
path = '/v2/conditions';
var headers = {
       'Content-Type': 'application/json',
       'App-Id': appId,
	   'App-Key': appKey,
	   'Model': 'infermedica-it' 
     };
/*Http request to API*/	 
http.get({host: hostBase, path: path, headers: headers}, (res) => {
      let body = ''; // let to store the response chunks
      res.on('data', (d) => { body += d; }); // store each response chunk
      res.on('end', () => {
var response = JSON.parse(body);
var profObj = findObjectByKey(response, 'name', malattia);
profid = profObj['id'];
symparameters.profid = profid;
path = '/v2/conditions/' + profid;
var headers = {
       'Content-Type': 'application/json',
       'App-Id': appId,
	   'App-Key': appKey,
	   'Model': 'infermedica-it' 
     };
/*Http request to API*/	 
http.get({host: hostBase, path: path, headers: headers}, (res) => {
      let body = ''; // let to store the response chunks
      res.on('data', (d) => { body += d; }); // store each response chunk
      res.on('end', () => {
var response = JSON.parse(body);
if (response['extras']) {
if (response['extras']['hint']) {
speech = response['extras']['hint'];
} else {
speech = 'Il mio consiglio è di contattare un medico e rivolgerti a lui';
}
} else {
speech = 'Il mio consiglio è di contattare un medico e rivolgerti a lui';
}
output.push(symparameters);
output.push(speech);
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
	if (intent === 'symrationale') {
for (var i = 0; i < symptomgeneralPos.length; i++) {
	let Obj = {};
	Obj.choice_id = 'present';
	Obj.id = symptomgeneralPos[i];
	evidence.push(Obj);
}
if (symptomgeneralNeg) {
for (var i = 0; i < symptomgeneralNeg.length; i++) {
	let Obj = {};
	Obj.choice_id = 'absent';
	Obj.id = symptomgeneralNeg[i];
	evidence.push(Obj);
}
symparameters.symptomgeneralNeg = JSON.stringify(symptomgeneralNeg);	
}
symparameters.symptomgeneralPos = JSON.stringify(symptomgeneralPos);
	 var postData = {
  'sex': gender,
  'age': age,
  'evidence': evidence 
};  
	var options = {
  hostname: hostBase,
  path: '/v2/rationale',
  method: 'POST',
  headers: {
       'Content-Type': 'application/json',
       'App-Id': appId,
	   'App-Key': appKey,
	   'Model': 'infermedica-it'
     }
}; 
/*Http request to API*/ 
var req = http.request(options, (res) => {
let body = '';
res.on('data', (d) => { body += d; });
res.on('end', () => {
var response = JSON.parse(body);
var type;
var conditionParams;
var observationParams;
var conditionParamsString;
var observationParamsString;
if (response['type']) {	
type = response['type'];
conditionParams	= response['condition_params'];
observationParams = response['observation_params'];
for (var i = 0; i < observationParams.length; i++) {
if (i == 0) {
observationParamsString = observationParams[i]['common_name'];
} else {
observationParamsString += ', ' + observationParams[i]['common_name'];
}
    }
	for (var i = 0; i < conditionParams.length; i++) {
if (i == 0) {
conditionParamsString = conditionParams[i]['common_name'];
} else {
conditionParamsString += ', ' + conditionParams[i]['common_name'];
}
    }
if (type == 'r0') {
speech = 'Ti sto facendo questa domanda perchè una risposta negativa ridurrebbe la probabilità di ' + conditionParamsString + ' e di altri malesseri.';
}
if (type == 'r1') {
speech = 'Ti sto facendo questa domanda perchè ' + conditionParamsString + ' potrebbero essere collegati con uno o più malesseri considerati.';
}
if (type == 'r2') {
speech = 'Ti sto facendo questa domanda perchè una risposta negativa ridurrebbe la probabilità di ' + conditionParamsString + ' e di altri malesseri.';
}
if (type == 'r3') {
speech = 'Ti sto facendo questa domanda per escludere malesseri come ' + conditionParamsString;
}
if (type == 'r4') {
speech = 'Ti sto facendo questa domanda perchè uno tra ' + observationParamsString + ' potrebbe essere la causa dei tuoi sintomi.';
}
if (type == 'r5') {
speech = 'Ti sto facendo questa domanda per sapere se hai preso una botta o ti sei ferito recentemente.';
}
if (type == 'r6') {
speech = 'Ti sto facendo questa domanda per sapere di più su ' + observationParamsString;
}
} else {
speech = 'Le previsioni sono calcolate sulla base di statistiche raccolte ed elaborate da un team di medici. Le abitudini che influenzano negativamente sulla tua salute sono comprese nel computo dei dati. Spiegami cos hai e possiamo partire con la diagnosi';
}	
output.push(symparameters);
output.push(speech);
	console.log('output: ' + output);
    resolve(output);
	return;	
    });
});
req.on('error', () => {
  reject('Errore di comunicazione col server');
		return;
});
req.write(JSON.stringify(postData));
req.end();
	} else {
path = '/v2/conditions/' + profid;
var headers = {
       'Content-Type': 'application/json',
       'App-Id': appId,
	   'App-Key': appKey,
	   'Model': 'infermedica-it' 
     };
/*Http request to API*/
http.get({host: hostBase, path: path, headers: headers}, (res) => {
      let body = ''; // let to store the response chunks
      res.on('data', (d) => { body += d; }); // store each response chunk
      res.on('end', () => {
var response = JSON.parse(body);
if (response['extras']) {
if (response['extras']['hint']) {
speech = response['extras']['hint'];
} else {
speech = 'Il mio consiglio è di contattare un medico e rivolgerti a lui';
}
} else {
speech = 'Il mio consiglio è di contattare un medico e rivolgerti a lui';
}
output.push(symparameters);
output.push(speech);
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
}
}
}
});
}