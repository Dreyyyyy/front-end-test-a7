document.getElementById('quantity').addEventListener('input', function () {
  const quantity = parseInt(this.value) || 0;
  const list_container = document.getElementById('list-container');

  const listItems = list_container.querySelectorAll('.list-item');
  listItems.forEach(item => item.remove());

  for (let i = 0; i < quantity; i++) {
    const item = document.createElement('div');
    item.className = 'list-item';

    const innerDiv = document.createElement('div');
    innerDiv.className = 'inner-div';
    innerDiv.textContent = `${i+1}`;

    item.appendChild(innerDiv);
    list_container.appendChild(item);
  }
});