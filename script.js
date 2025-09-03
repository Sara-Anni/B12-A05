
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
                copyCountDisplay.textContent = `${copyCount} Copy${copyCount !== 1 ? 's' : ''}`;
            }
        }


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


        listItem.className = 'bg-gray-100 p-2 rounded flex justify-between items-center';
    
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
