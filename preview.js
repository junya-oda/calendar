// 🔥以下、関数化予定🔥
const showMessage1 = () => {
    const textbox = document.getElementById("info-0");
    const inputValue = textbox.value;
    const output = inputValue;
    document.getElementById("output-company-name").innerHTML = output;
}
const showMessage2 = () => {
const textbox = document.getElementById("info-1");
const inputValue = textbox.value;
const output = '〒' + inputValue + '-';
document.getElementById("output-postal-code1").innerHTML = output;
}
const showMessage3 = () => {
const textbox = document.getElementById("info-2");
const inputValue = textbox.value;
const output = inputValue;
document.getElementById("output-postal-code2").innerHTML = output;
}
const showMessage4 = () => {
const textbox = document.getElementById("info-3");
const inputValue = textbox.value;
const output = inputValue;
document.getElementById("output-address").innerHTML = output;
}
const showMessage5 = () => {
const textbox = document.getElementById("info-4");
const inputValue = textbox.value;
const output = 'TEL' + ' ' + inputValue;
document.getElementById("output-telephone-number").innerHTML = output;
}
const showMessage6 = () => {
const textbox = document.getElementById("info-5");
const inputValue = textbox.value;
const output = 'FAX' + ' ' + inputValue;
document.getElementById("output-fax-number").innerHTML = output;
}
const showMessage7 = () => {
const textbox = document.getElementById("info-6");
const inputValue = textbox.value;
const output = inputValue;
document.getElementById("output-mail").innerHTML = output;
}
const showMessage8 = () => {
const textbox = document.getElementById("info-7");
const inputValue = textbox.value;
const output = inputValue;
document.getElementById("output-url").innerHTML = output;
}
const showMessage9 = () => {
const textbox = document.getElementById("info-8");
const inputValue = textbox.value;
const output = inputValue;
document.getElementById("output-catchcopy").innerHTML = output;
}

const showForm = () => {
    
}