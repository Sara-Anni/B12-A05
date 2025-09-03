
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
            listItem.textContent = `${service} ${number} ${time}`;
            document.getElementById('callHistory').appendChild(listItem);
            if (callback) callback();
        }

        function clearCallHistory() {
            document.getElementById('callHistory').innerHTML = '';
        }
