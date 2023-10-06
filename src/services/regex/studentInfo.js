function studentInfoJSON(text) {

  text = text.replace(/\s+/g, ' ');
  const regex = /SEAT\s+NO\.\s*:\s*([A-Z0-9]+)\s+NAME\s*:\s*([^]+?)\s+MOTHER\s*:\s*([^]+?)\s+PRN\s*:\s*([A-Z0-9]+)\s+CLG\.\s*:\s*([^]+?\])\s*$/

  const match = text.match(regex);

  if (!match) {
    return null; // No match found
  }

  const [, seat_no, name, mother_name, prn_no, college] = match;

  const studentInfo = {
    seat_no,
    prn_no,
    name,
    mother_name,
    college,
  };

  return studentInfo;
}



module.exports = studentInfoJSON;


// Example usage:
//const text = `PAGE :- 35 SAVITRIBAI PHULE PUNE UNIVERSITY ,F.E.(2019 CREDIT PAT.) EXAMINATION, APR/MAY 2022 DATE : 22 SEP 2022 COLLEGE: [CEGP014270] - DR. D.Y.PATIL INST. OF TECH. PUNE BRANCH CODE: 05 .................................................................................................................................. SEAT NO.: F190240036 NAME : AKANKSHA BHAT MOTHER : SABITA PRN :72287277B CLG.: DYPIT[24]`;

// const text2 = 'PAGE   :-   25   SAVITRIBAI   PHULE   PUNE UNIVERSITY ,F.E.(2019 CREDIT PAT.) EXAMINATION, APR/MAY 2022   DATE : 22 SEP 2022 COLLEGE:   [CEGP014270] - DR. D.Y.PATIL INST. OF TECH. PUNE BRANCH   CODE:   05 .................................................................................................................................. SEAT   NO.:   F190240026   NAME   :   AGHAO   ANURAG DILIP   MOTHER : SEEMA   PRN :72287267E CLG.: DYPIT[24]'

// const jsonData = studentInfoJSON(text2);

