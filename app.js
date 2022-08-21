// https://calculator.swiftutors.com/perimeter-of-a-rhombus-calculator.html

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const perimeterofaRhombusRadio = document.getElementById('perimeterofaRhombusRadio');
const lengthofAnySideofRhombusRadio = document.getElementById('lengthofAnySideofRhombusRadio');

let perimeterofaRhombus;
let lengthofAnySideofRhombus = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

perimeterofaRhombusRadio.addEventListener('click', function() {
  variable1.textContent = 'Length of Any Side of Rhombus';
  lengthofAnySideofRhombus = v1;
  result.textContent = '';
});

lengthofAnySideofRhombusRadio.addEventListener('click', function() {
  variable1.textContent = 'Perimeter of a Rhombus';
  perimeterofaRhombus = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(perimeterofaRhombusRadio.checked)
    result.textContent = `Perimeter of a Rhombus = ${computePerimeterofaRhombus().toFixed(5)}`;

  else if(lengthofAnySideofRhombusRadio.checked)
    result.textContent = `Length of Any Side of Rhombus = ${computeLengthofAnySideofRhombus().toFixed(5)}`;
})

// calculation

function computePerimeterofaRhombus() {
  return 4 * Number(lengthofAnySideofRhombus.value);
}

function computeLengthofAnySideofRhombus() {
  return Number(perimeterofaRhombus.value) / 4;
}