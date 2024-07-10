document.addEventListener('DOMContentLoaded', function() {
    let correctPlacements = {
        'num3w': { x: 400, y: 600 },
        'num3e': { x: 500, y: 700 },
        'num1': { x: 600, y: 600 },
        'num2': { x: 550, y: 500 },
        'num23': { x: 820, y: 700 },
        'num4': { x: 350, y: 450 },
        'num6': { x: 600, y: 400 },
        'num8': { x: 450, y: 200 },
        'num9': { x: 500, y: 100 },
        'num7': { x: 850, y: 450 },
        'num24': { x: 250, y: 250 },
        'num5': { x: 400, y: 200 },
        'num27': { x: 880, y: 750 }
    };

    function checkGameResult() {
        let allCorrect = true;

        Object.keys(correctPlacements).forEach(building => {
            let element = document.getElementById(building);
            if (!isPlacedCorrectly(element, building)) {
                allCorrect = false;
            }
        });

        if (allCorrect) {
            document.getElementById('message').textContent = "Congratulations! You guessed all the building numbers correctly. You win a virtual laptop and a tour of the campus!";
        } else {
            document.getElementById('message').textContent = "Your guessing is like your exam scores, TERRIBLE. Study more!";
        }
    }

    function isPlacedCorrectly(element, building) {
        if (!element) return false;

        let rect = element.getBoundingClientRect();
        let targetCoords = correctPlacements[building];

        let tolerance = 60000;
        if (targetCoords && Math.abs(rect.left + rect.width / 2 - targetCoords.x) <= tolerance &&
            Math.abs(rect.top + rect.height / 2 - targetCoords.y) <= tolerance) {
            return true;
        } else {
            return false;
        }
    }

    document.getElementById('reset-button').addEventListener('click', function() {
        location.reload();
    });

    document.getElementById('check-button').addEventListener('click', function() {
        checkGameResult();
    });

    

    function dragElement(terrariumElement) {
        //set 4 positions for positioning on the screen
        let pos1 = 0,
            pos2 = 0,
            pos3 = 0,
            pos4 = 0;
        terrariumElement.onpointerdown = pointerDrag;
    
    
    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;
    
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }
    
    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log(pos1, pos2, pos3, pos4);
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
    }
    
    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
    }
    
        dragElement(document.getElementById('num1'));
        dragElement(document.getElementById('num2'));
        dragElement(document.getElementById('num3e'));
        dragElement(document.getElementById('num3w'));
        dragElement(document.getElementById('num4'));
        dragElement(document.getElementById('num5'));
        dragElement(document.getElementById('num6'));
        dragElement(document.getElementById('num7'));
        dragElement(document.getElementById('num8'));
        dragElement(document.getElementById('num9'));
        dragElement(document.getElementById('num23'));
        dragElement(document.getElementById('num27'));
        

    
    
    




});
