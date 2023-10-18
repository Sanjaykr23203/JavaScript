
//clear the text in input boxes
function clearText() {
  document.getElementById('textbox1').value = '';
  document.getElementById('textbox2').value = '';
}

//clear the values in table
function clearTable() {
  document.getElementById('resultTable').innerHTML = '<tr><th>Text</th><th>Word Count in Textbox 1</th><th>Word Count in Textbox 2</th></tr>';
}


function calculateWordCount10() {
  // userdefined words that are ignored
  const ignoredWords = ['[',']','a', 'an', 'i', 'go', 'the', 'I', '━', '+', '-'];

  // taking values inside text boxes
  const textbox1Value = document.getElementById('textbox1').value;
  const textbox2Value = document.getElementById('textbox2').value;

    // Check if both input textboxes are empty
    if (textbox1Value.trim() === '' && textbox2Value.trim() === '') {
      return; // Return early without further processing
    }

  // userdefined specialCharacters that are ignored
  const specialCharactersRegex = /[-“•/!@#$%^&*(),.?"':;{}|━<>”]/g;

  // removing excess white spaces, then splitting each word into an array, and filtering out ignored words,makes all text to lowercase
  const wordsTextbox1 = textbox1Value.replace(specialCharactersRegex, ' ').trim().split(/\s+/).map(word => word.toLowerCase()).filter(word => !ignoredWords.includes(word));
  const wordsTextbox2 = textbox2Value.replace(specialCharactersRegex, ' ').trim().split(/\s+/).map(word => word.toLowerCase()).filter(word => !ignoredWords.includes(word));

  const wordCountTable = document.getElementById('resultTable');
  wordCountTable.innerHTML = '<tr><th>Text</th><th>Word Count in Textbox 1</th><th>Word Count in Textbox 2</th></tr>';

  // Spreading texts from 2 arrays into a single set object which stores unique values and removes duplicates
  const combinedWords = [...new Set([...wordsTextbox1, ...wordsTextbox2])];

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
    cell2.textContent = wordsTextbox1.filter(w => w === lowerWord).length;
      //counting length of word with wordsTextbox2 array and comparing with combinedWords word.
    cell3.textContent = wordsTextbox2.filter(w => w === lowerWord).length;


 //adding cell(table data) to row using html appendChild element.
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);

//adding rows into table
    wordCountTable.appendChild(row);
  });
}
