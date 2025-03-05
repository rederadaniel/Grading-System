function playSound(id) {
    let audio = document.getElementById(id);
    if (audio) {
        audio.currentTime = 0; // Reset to the start
        audio.play().catch(error => console.log("Audio play blocked:", error));
    }
}

function calculateGrade() {
    let ww = parseFloat(document.getElementById('wwInput').value);
    let pt = parseFloat(document.getElementById('ptInput').value);
    let e = parseFloat(document.getElementById('eInput').value);

    let wwConverted = (ww / 100) * 20;
    let ptConverted = (pt / 100) * 60;
    let eConverted = (e / 100) * 20;

    let finalGrade = wwConverted + ptConverted + eConverted;
    let gradeLetter = "";
    let remark = "";

    if (finalGrade >= 90) {
        gradeLetter = "A";
        remark = "Excellent ✅";
        playSound("soundA");
    } else if (finalGrade >= 80) {
        gradeLetter = "B";
        remark = "Good 👍";
        playSound("soundB");
    } else if (finalGrade >= 70) {
        gradeLetter = "C";
        remark = "Satisfactory ✅";
        playSound("soundC");
    } else if (finalGrade >= 60) {
        gradeLetter = "D";
        remark = "Passing ⚠️";
        playSound("soundD");
    } else {
        gradeLetter = "F";
        remark = "Failing ❌";
        playSound("soundF");
    }

    document.getElementById('wwScore').innerText = wwConverted.toFixed(2) + "%";
    document.getElementById('ptScore').innerText = ptConverted.toFixed(2) + "%";
    document.getElementById('eScore').innerText = eConverted.toFixed(2) + "%";

    document.getElementById('finalGrade').innerText = "Final Grade: " + finalGrade.toFixed(2) + "% (" + gradeLetter + ")";
    document.getElementById('gradeRemark').innerText = "Remark: " + remark;
}