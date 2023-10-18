//clear the text in input boxes
function clearText() {
    document.getElementById('textbox1').value = '';
    document.getElementById('textbox2').value = '';
  }
  
  //clear the values in table
  function clearTable() {
    document.getElementById('resultTable').innerHTML = '<tr><th>Text</th><th>Word Count in Textbox 1</th><th>Word Count in Textbox 2</th></tr>';
  }
  
  //words those are ignored in result.
  const ignoredWords = ['a', 'an', 'i', 'go', 'the'];
  const specialCharactersRegex = /[+=-_~`/•!@#$%^&*(),.?":{}|<>]/g;
  
  //this function ignore the above given texts in input boxes, compare and counts texts from given inputboxes.
  function calculateWordCount() {
      //taking values inside text boxes
    const textbox1Value = document.getElementById('textbox1').value;
    const textbox2Value = document.getElementById('textbox2').value;
  
  
    //removing excess white spaces, then spliting each word in form of array, filtering 
    //and adding word to variable which is not ignoreWords array.
    const wordsTextbox1 = textbox1Value.replace(specialCharactersRegex, ' ').replace(/['"]/g, '').trim().split(/\s+/).filter(word => !ignoredWords.includes(word.toLowerCase()));
    const wordsTextbox2 = textbox2Value.replace(specialCharactersRegex, ' ').replace(/['"]/g, '').trim().split(/\s+/).filter(word => !ignoredWords.includes(word.toLowerCase()));
  
    //setting or adding to HTML content 
    const wordCountTable = document.getElementById('resultTable');
    wordCountTable.innerHTML = '<tr><th>Text</th><th>Word Count in Textbox 1</th><th>Word Count in Textbox 2</th></tr>';
  
    //Spreading texts from 2 arrays into single set object
    const combinedWords = [...new Set([...wordsTextbox1, ...wordsTextbox2])];
  
  
    //looping each unique value into table elements
    combinedWords.forEach(word => {
  
      //creating table row data blocks
      const row = document.createElement('tr');
      const cell1 = document.createElement('td');
      const cell2 = document.createElement('td');
      const cell3 = document.createElement('td');

      
    //makes lowercase of  word 
    const lowerWord = word.toLowerCase();

  
  
    //setting single word into cell1 using html textContent element.
    cell1.textContent = lowerWord;
    //counting length of word with wordsTextbox1 array and comparing with combinedWords word.  
    cell2.textContent = wordsTextbox1.filter(w => w.toLowerCase() === lowerWord).length;
    //counting length of word with wordsTextbox2 array and comparing with combinedWords word.
    cell3.textContent = wordsTextbox2.filter(w =>w.toLowerCase() === lowerWord).length;
  
      //adding cell(table data) to row using html appendChild element.
      row.appendChild(cell1);
      row.appendChild(cell2);
      row.appendChild(cell3);
  
      //adding rows into table
      wordCountTable.appendChild(row);
    });
  }


  

  //this function ignore the above given texts in input boxes, compare and counts texts from given inputboxes.
function calculateWordCount1() {
  //userdefined words that are get ignored
  const ignoredWords = ['a', 'an', 'i', 'go', 'the','I','━','+','-'];

  //taking values inside text boxes
  const textbox1Value = document.getElementById('textbox1').value;
  const textbox2Value = document.getElementById('textbox2').value;

  //userdefined specialCharacters that are get ignored
  const specialCharactersRegex = /[-“•/!@#$%^&*(),.?"':;{}|━<>”]/g;


  
  //removing excess white spaces, then spliting each word in form of array, filtering 
  //and adding word to variable which is not ignoreWords array.
  const wordsTextbox1 = textbox1Value.replace(specialCharactersRegex, ' ').trim().split(/\s+/).filter(word => !ignoredWords.includes(word));
  const wordsTextbox2 = textbox2Value.replace(specialCharactersRegex, ' ').trim().split(/\s+/).filter(word => !ignoredWords.includes(word));

  const wordCountTable = document.getElementById('resultTable');
  wordCountTable.innerHTML = '<tr><th>Text</th><th>Word Count in Textbox 1</th><th>Word Count in Textbox 2</th></tr>';

    //Spreading texts from 2 arrays into single set object which store unique values removes duplicate value
  const combinedWords = [...new Set([...wordsTextbox1, ...wordsTextbox2])];

  // Sort the combinedWords array by the word count in descending order
  combinedWords.sort((wordA, wordB) => {
    const countA = wordsTextbox1.filter(w => w.toLowerCase() === wordA.toLowerCase()).length + wordsTextbox2.filter(w => w.toLowerCase() === wordA.toLowerCase()).length;
    const countB = wordsTextbox1.filter(w => w.toLowerCase() === wordB.toLowerCase()).length + wordsTextbox2.filter(w => w.toLowerCase() === wordB.toLowerCase()).length;
    return countB - countA; // Sort in descending order
  });
  
  // Iterate over sorted combinedWords array to create rows
  //looping each unique value into table elements
  combinedWords.forEach(word => {
    const row = document.createElement('tr');
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    const cell3 = document.createElement('td');

    const lowerWord = word.toLowerCase();
    //setting single word into cell1 using html textContent element.
    cell1.textContent = lowerWord;
    //counting length of word with wordsTextbox1 array and comparing with combinedWords word.  
    cell2.textContent = wordsTextbox1.filter(w => w.toLowerCase() === lowerWord).length;
      //counting length of word with wordsTextbox2 array and comparing with combinedWords word.
    cell3.textContent = wordsTextbox2.filter(w => w.toLowerCase() === lowerWord).length;


 //adding cell(table data) to row using html appendChild element.
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);

//adding rows into table
    wordCountTable.appendChild(row);
  });
}


function calculateWordCount1() {
  // userdefined words that are ignored
  const ignoredWords = ['a', 'an', 'i', 'go', 'the', 'I', '━', '+', '-'];

  // taking values inside text boxes
  const textbox1Value = document.getElementById('textbox1').value;
  const textbox2Value = document.getElementById('textbox2').value;

  // userdefined specialCharacters that are ignored
  const specialCharactersRegex = /[-“•/!@#$%^&*(),.?"':;{}|━<>”]/g;

  // removing excess white spaces, then splitting each word into an array, and filtering out ignored words
  const wordsTextbox1 = textbox1Value.replace(specialCharactersRegex, ' ').trim().split(/\s+/).map(word => word.toLowerCase()).filter(word => !ignoredWords.includes(word));
  const wordsTextbox2 = textbox2Value.replace(specialCharactersRegex, ' ').trim().split(/\s+/).map(word => word.toLowerCase()).filter(word => !ignoredWords.includes(word));

  const wordCountTable = document.getElementById('resultTable');
  wordCountTable.innerHTML = '<tr><th>Text</th><th>Word Count in Textbox 1</th><th>Word Count in Textbox 2</th></tr>';

  // Spreading texts from 2 arrays into a single set object which stores unique values and removes duplicates
  const combinedWords = [...new Set([...wordsTextbox1, ...wordsTextbox2])];

  // Sort the combinedWords array by the word count in descending order
  combinedWords.sort((wordA, wordB) => {
    const countA = wordsTextbox1.filter(w => w === wordA).length + wordsTextbox2.filter(w => w === wordA).length;
    const countB = wordsTextbox1.filter(w => w === wordB).length + wordsTextbox2.filter(w => w === wordB).length;
    return countB - countA; // Sort in descending order
  });

  // Iterate over sorted combinedWords array to create rows
  combinedWords.forEach(word => {
    const row = document.createElement('tr');
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    const cell3 = document.createElement('td');

    // setting single word into cell1 using html textContent element.
    cell1.textContent = word;
    // counting length of word with wordsTextbox1 array and comparing with combinedWords word.
    cell2.textContent = wordsTextbox1.filter(w => w === word).length;
    // counting length of word with wordsTextbox2 array and comparing with combinedWords word.
    cell3.textContent = wordsTextbox2.filter(w => w === word).length;

    // adding cell(table data) to row using html appendChild element.
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);

    // adding rows into table
    wordCountTable.appendChild(row);
  });
}
