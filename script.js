let currentQuestion = 0;

// Create an array to hold the correct answers
const correctAnswers = ['B', 'D', 'A', 'A', 'B', 'C', 'B', 'D', 'D', 'D', 'A', 'A', 'B', 'A', 'C'];

function checkAnswer(selectedOption) {
    const resultText = document.getElementById('result-text');
    const resultSection = document.getElementById('result');

    if (selectedOption === correctAnswers[currentQuestion]) {
        resultText.textContent = 'Correct! Well done.';
    } else {
        resultText.textContent = 'Incorrect. Try again.';
    }

    resultSection.style.display = 'block';
}

function nextQuestion() {
    const resultSection = document.getElementById('result');
    resultSection.style.display = 'none';

    currentQuestion++;
    if (currentQuestion < correctAnswers.length) {
        document.getElementById('question').innerHTML = '<h2>Question ' + (currentQuestion + 1) + ':</h2><p>' + getQuestionText(currentQuestion) + '</p>';
        updateAnswerButtons(currentQuestion);
    } else {
        document.getElementById('question').innerHTML = '<h2>Practice Exam Completed</h2>';
        document.getElementById('answers').innerHTML = '';
    }

    // Reset result text for the next question
    document.getElementById('result-text').textContent = '';
}

function getQuestionText(questionNumber) {
    const questionTexts = [
        "What does CPU stand for?",
        "What is the purpose of a CPU in a computer?",
        "Which of the following is a primary function of an operating system?",
        "What does BIOS stand for?",
        "Which component is responsible for converting digital signals to analog signals for transmission over phone lines?",
        "Which type of cable is commonly used to connect a computer to a wired network?",
        "Which type of memory retains its data even when the power is turned off?",
        "What is the purpose of a graphics card?",
        "What does POST stand for in the context of computer booting?",
        "Which storage technology uses spinning disks to store data?",
        "What is the purpose of an IP address?",
        "Which device is used to convert digital data from a computer into analog signals for transmission over a telephone line?",
        "Which connector type is commonly used to connect a monitor to a computer and supports high-definition video and audio?",
        "What does the term BIOS stand for?",
        "Which technology allows devices like smartphones and tablets to exchange data over short distances?"
        // Add more question texts here
    ];

    return questionTexts[questionNumber];
}

function updateAnswerButtons(questionNumber) {
    const answerButtons = document.getElementById('answers').querySelectorAll('button');
    const answerOptions = ['A', 'B', 'C', 'D'];

    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].textContent = answerOptions[i] + ') ' + getAnswerText(questionNumber, i);
    }
}

function getAnswerText(questionNumber, answerIndex) {
    const answerTexts = [
        ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Central Processor Unit"],
        ["To display graphics on the screen.", "To store and manage data.", "To provide power to the computer.", "To process instructions and perform calculations."],
        ["Manage hardware resources and provide user interfaces.", "Create spreadsheets and documents.", "Edit and manipulate images.", "Store and organize files."],
        ["Basic Input/Output System", "Binary Input/Output System", "Basic Input/Output Server", "Binary Input/Output Server"],
        ["Modem", "NIC (Network Interface Card)", "Router", "Switch"],
        ["HDMI cable", "VGA cable", "Ethernet cable", "USB cable"],
        ["RAM (Random Access Memory)","ROM (Read-Only Memory)","SSD (Solid State Drive)","HDD (Hard Disk Drive)"],
        ["To provide power to the computer.","To process instructions and perform calculations.","To manage hardware resources and provide user interfaces.","To render images and videos for display."],
        ["Power-On Status Test","Primary Operating System Test","Pre-Operating System Test","Power-On Self Test"],
        ["SSD (Solid State Drive)","USB Flash Drive","CD-ROM (Compact Disc - Read-Only Memory)","HDD (Hard Disk Drive)"],
        ["To identify a specific network interface on a network","To provide power to the computer","To manage hardware resources","To render images and videos for display"],
        ["Modem","NIC (Network Interface Card)","Router","Switch"],
        ["USB","HDMI","VGA","Ethernet"],
        ["Basic Input/Output System","Binary Input/Output System","Basic Input/Output Server","Binary Input/Output Server"],
        ["LAN (Local Area Network)","WAN (Wide Area Network)","PAN (Personal Area Network)","MAN (Metropolitan Area Network)"]
        //["","","",""],
        
        // Add more answer texts here
    ];

    return answerTexts[questionNumber][answerIndex];
}
