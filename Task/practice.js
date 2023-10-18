function clearText(){
    document.getElementById('textbox1').value = ' '
    document.getElementById('textbox2').value=' '
}

function clearTable(){
    document.getElementById('resultTable').innerHTML = '<tr><th>Text</th><th>Word Count in Textbox 1</th><th>Word Count in Textbox 2</th></tr>'
}


function calculateWordCount10(){
    const textvalue1 = document.getElementById('textbox1').value
    const textvalue2 = document.getElementById('textbox2').value

    // console.log(textvalue1);
    // console.log(textvalue2);



    const ignoreReg = /[-“•/!@#$%^&*(),.?"':;{}|━<>”]/g
    const ignoreText = ['[',']','a', 'an', 'i', 'go', 'the', 'I', '━', '+', '-']

    const textA = textvalue1.replace(ignoreReg, ' ').trim().split(/\s+/).map(word => word.toLowerCase()).filter(word1 => word1 != ignoreText.includes(word1))
    // console.log(textA);
    const textB = textvalue2.replace(ignoreReg, ' ').trim().split(/\s+/).map(word => word.toLowerCase()).filter(word1 => word1 != ignoreText.includes(word1))
    // console.log(textB);

    const text = ([...new Set([...textA, ...textB])]) 

    // console.log(text);

    const wordCountTable = document.getElementById('resultTable');
    wordCountTable.innerHTML = '<tr><th>Text</th><th>Word Count in Textbox 1</th><th>Word Count in Textbox 2</th></tr>';

    text.forEach((wtext)=>{

        const row =  document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');
        const cell3 = document.createElement('td');

    
       cell1.textContent = wtext;
       cell2.textContent = textA.filter(w => w === wtext).length;
       cell3.textContent = textB.filter(w => w === wtext).length;

       row.appendChild(cell1);
       row.appendChild(cell2);
       row.appendChild(cell3);

       wordCountTable.appendChild(row);
    })

}