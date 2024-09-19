const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = 'en-US';
rec.continuous = false;

rec.onresult = function (e) {
    const acceptedColors = [
        'red',
        'blue',
        'green',
        'yellow',
        'pink',
        'brown',
        'purple',
        'orange',
        'black',
        'white',
    ]
    // console.log(e.results[0][0].transcript) - it will give me the word I said, always the first one, ex. blue
    // Thats why we have to loop through it, and show each word one after another
    for (let i = e.resultIndex; i < e.results.length; i++) {
        const script = e.results[i][0].transcript.toLowerCase().trim(); // all lower case and no white space
        
        if (acceptedColors.includes(script)) {
            document.body.style.backgroundColor = script;
        } else {
            alert('Please say a color');
        }
    }
}
rec.start();