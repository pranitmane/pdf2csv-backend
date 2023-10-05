const getText = require('./db/getText');
const extractStudentInfo = require('./regex/studentInfo')


//const text = `PAGE :- 35 SAVITRIBAI PHULE PUNE UNIVERSITY ,F.E.(2019 CREDIT PAT.) EXAMINATION, APR/MAY 2022 DATE : 22 SEP 2022 COLLEGE: [CEGP014270] - DR. D.Y.PATIL INST. OF TECH. PUNE BRANCH CODE: 05 .................................................................................................................................. SEAT NO.: F190240036 NAME : AKANKSHA BHAT MOTHER : SABITA PRN :72287277B CLG.: DYPIT[24]`;
//const text = `PAGE :- 41 SAVITRIBAI PHULE PUNE UNIVERSITY ,F.E.(2019 CREDIT PAT.) EXAMINATION, APR/MAY 2022   DATE : 22 SEP 2022 COLLEGE:   [CEGP014270] - DR. D.Y.PATIL INST. OF TECH. PUNE BRANCH CODE: 05 .................................................................................................................................. SEAT NO.:   F190240042 NAME : AMALE PRANAV NILKANTH MOTHER : JAYASHRI PRN :72287283G CLG.: DYPIT[24]`



let studentData = extractStudentInfo(text)

if(studentData){
  console.log(studentData)
}else{
  console.log('no data found')
}




// async function textToJson(text) {
//     try {
//         const prompt = text;
//         const result = await generateJSON(prompt);
//         return result;
//     } catch (err) {
//         console.log("textToJson error", err);
//         return err;
//     }
// }

// module.exports = textToJson;
