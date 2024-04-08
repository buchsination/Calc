function appendOperation(operation) {
  document.getElementById('resultArea').innerHTML += operation;
}

document.querySelectorAll('.js-calculate').forEach((op) => {
  op.addEventListener('click', () => {
    let operation = op.dataset.calcvalue;
    document.querySelector('.resultArea').innerHTML += operation;
  })
} );

function calculateResult() {
  let container = document.querySelector('.resultArea');

  let result = eval(container.innerHTML);
  container.innerHTML = result;
}

function deleteLast() {
  let container = document.querySelector('.resultArea');
  if(container.innerHTML.endsWith(' ')) {
      container.innerHTML = container.innerHTML.slice(0, -3);
  } else {
      container.innerHTML = container.innerHTML.slice(0, -1);
  }
}

function deleteResult() {
  let container = document.querySelector('.resultArea');
  container.innerHTML = container.innerHTML.slice(0, -99999999999);
}

