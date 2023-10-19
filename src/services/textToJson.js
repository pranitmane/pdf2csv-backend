const getText = require('./db/getText');
const devideText = require('./regex/devideTextConent.js');
const mergedJson = require('./regex/studentInfo.js');


// const text = `PAGE :- 41 SAVITRIBAI PHULE PUNE UNIVERSITY ,F.E.(2019 CREDIT PAT.) EXAMINATION, APR/MAY 2022   DATE : 22 SEP 2022 COLLEGE:   [CEGP014270] - DR. D.Y.PATIL INST. OF TECH. PUNE BRANCH CODE: 05 .................................................................................................................................. SEAT NO.:   F190240042 NAME : AMALE PRANAV NILKANTH MOTHER : JAYASHRI PRN :72287283G CLG.: DYPIT[24]`

async function textToJson(filename){
  const text = await getText(filename)
  const textContent = text.map((text) => text.textContent)
  const modifiedTextContent = textContent.map((text) => devideText(text))
  // console.log('modifiedTextContent : ',modifiedTextContent)
  const studentData = modifiedTextContent.map((text) => mergedJson(text))
  // console.log('inside textToJsonPart1 : ',studentData[0])
  return studentData
}


module.exports = textToJson;






