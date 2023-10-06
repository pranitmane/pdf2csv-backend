function studentInfoText(completeText){
  const regex = /PAGE\s+:-\s+\d+\s+SAVITRIBAI\s+PHULE\s+PUNE\s+UNIVERSITY[^]*?CLG\.\s*:\s*DYPIT\[24\]/;
  const match = completeText.match(regex);

  if (match) {
    console.log('inside studentInfoText : ','text found')
    return match[0];
  } else {
    console.log('inside studentInfoText : ','text not found')
    return "Text not found";
  }

}



module.exports = studentInfoText;

