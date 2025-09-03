
//function for coin count
let coinCount = 100;

function decreaseCoins() {
            if (coinCount >= 20) {
                coinCount -= 20;
                updateCoinDisplay();
            } else {
                alert("No coins left");
            }
        }

        function updateCoinDisplay() {
            const coinText = document.getElementById('coinText');
            if (coinText) {
                coinText.textContent = coinCount;
            }
        }



// function for copy count
        let copyCount = 0; 
        function increaseCopyCount() {
            copyCount += 1;
            updateCopyDisplay();
        }


        function updateCopyDisplay() {
            const copyCountDisplay = document.getElementById('copyCountDisplay');
            if (copyCountDisplay) {
                alert("Copied to clipboad!")
                copyCountDisplay.textContent = `${copyCount} Copy${copyCount !== 1 ? 's' : ''}`;
            }
        }

//1
document.getElementById('copyButton1').addEventListener('click', function() {
    const textToCopy = document.getElementById('copyText1').textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert('Text copied to clipboard!');
    }).catch(err => {   
      console.error('Failed to copy text: ', err);
    });
  });

//2
document.getElementById('copyButton2').addEventListener('click', function() {
    const textToCopy = document.getElementById('copyText2').textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert('Text copied to clipboard!');
    }).catch(err => {   
      console.error('Failed to copy text: ', err);
    });
  });

//3
document.getElementById('copyButton3').addEventListener('click', function() {
    const textToCopy = document.getElementById('copyText3').textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert('Text copied to clipboard!');
    }).catch(err => {   
      console.error('Failed to copy text: ', err);
    });
  });

//4
document.getElementById('copyButton4').addEventListener('click', function() {
    const textToCopy = document.getElementById('copyText4').textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert('Text copied to clipboard!');
    }).catch(err => {   
      console.error('Failed to copy text: ', err);
    });
  });

//5
document.getElementById('copyButton5').addEventListener('click', function() {
    const textToCopy = document.getElementById('copyText5').textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert('Text copied to clipboard!');
    }).catch(err => {   
      console.error('Failed to copy text: ', err);
    });
  });

  //6
document.getElementById('copyButton6').addEventListener('click', function() {
    const textToCopy = document.getElementById('copyText6').textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert('Text copied to clipboard!');
    }).catch(err => {   
      console.error('Failed to copy text: ', err);
    });
  });

//7
document.getElementById('copyButton7').addEventListener('click', function() {
    const textToCopy = document.getElementById('copyText7').textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert('Text copied to clipboard!');
    }).catch(err => {   
      console.error('Failed to copy text: ', err);
    });
  });

//8
document.getElementById('copyButton8').addEventListener('click', function() {
    const textToCopy = document.getElementById('copyText8').textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert('Text copied to clipboard!');
    }).catch(err => {   
      console.error('Failed to copy text: ', err);
    });
  });
//9
document.getElementById('copyButton9').addEventListener('click', function() {
    const textToCopy = document.getElementById('copyText9').textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert('Text copied to clipboard!');
    }).catch(err => {   
      console.error('Failed to copy text: ', err);
    });
  });


        
//function for heart count
    let heartCount = 0;
    function increaseHeartCount(){
        heartCount += 1;
        updateHeartDisplay();
    }

      function updateHeartDisplay() {
            const heartText = document.getElementById('heartText');
            if (heartText) {
                heartText.textContent = heartCount;
            }
        }

//fuction for call history

  function addToCallHistory(service, number, callback) {
            const now = new Date();
            const time = now.toLocaleTimeString('en-US', { hour12: true });
            const listItem = document.createElement('li');


        listItem.className = 'bg-gray-100 p-2 rounded flex justify-between items-center text-bold';
    
        const contentDiv = document.createElement('div');
        contentDiv.className = 'flex flex-col';

        const serviceSpan = document.createElement('span');
        serviceSpan.textContent = service;
        

        const numberSpan = document.createElement('span');
        numberSpan.textContent = number;
        contentDiv.appendChild(serviceSpan);
        contentDiv.appendChild(numberSpan);
    
        const timeSpan = document.createElement('span');
        timeSpan.textContent = time;
    
    listItem.appendChild(contentDiv);
    listItem.appendChild(timeSpan);
    document.getElementById('callHistory').appendChild(listItem);
    if (callback) callback();
}

        function clearCallHistory() {
            document.getElementById('callHistory').innerHTML = '';
        }
