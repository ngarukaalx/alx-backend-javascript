// Students controller
import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(request, response) {
    // call function read readDatabase
    readDatabase(process.argv[2])
      .then((result) => {
        let intro = 'This is the list of our students\n';
        // Get all keys of the dictionary
        const keys = Object.keys(result);
        // Sort the keys alphabetically, ignoring case
        keys.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        // Access the dictionary using sorted keys
        const formatedStrings = keys.map((key) => {
          const lenghtValue = result[key].length;
          const listValue = result[key];
          return `Number of students in ${key}: ${lenghtValue}. List: ${listValue}`;
        });
        const strings = formatedStrings.join('\n');
        intro += strings;
        response.send(intro);
      }).catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    // get the major parameter
    const { major } = request.params;
    const majors = ['CS', 'SWE'];
    if (major) {
      if (majors.includes(major.toUpperCase())) {
        // call readDatabase fuction
        readDatabase(process.argv[2])
          .then((result) => {
            // get all the keys form dict
            const keys = Object.keys(result);
            let responses;
            keys.forEach((key) => {
              if (key === major.toUpperCase()) {
                const listValue = result[key];
                responses = `List: ${listValue}`;
              }
            });
            response.status(200).send(responses);
          }).catch(() => {
            response.status(500).send('Cannot load the database');
          });
      } else {
        response.status(500).send('Major parameter must be CS or SWE');
      }
    }
  }
}
