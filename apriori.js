
function callDuyethdApriori(smin){
    const apiUrl = `https://localhost:7231/api/Apriori/duyet-hoa-don/${smin}`;
    
    fetch(apiUrl)
        .then(response => {
            if(!response.ok)
                throw  new Error ('Network response was not ok');
            return response.json();
        })
        .then(response => {
            console.log(response.data);
            handleAPIResponse(response.data);
            alert('Thời gian thực hiện duyệt hoá đơn: ' + response.message + ' ms');
        })
        .catch(error=> {
            console.log
        });
}
function handleAPIResponse(data) {

    const resultContainer = document.getElementById('root');
    resultContainer.innerHTML = '';

    const table = document.createElement('table');

    const headerRow = document.createElement('tr');
    const idHeader = document.createElement('th');
    idHeader.textContent = 'ID Sản phẩm';
    const nameHeader = document.createElement('th');
    nameHeader.textContent = 'Tên Sản Phẩm';
    headerRow.appendChild(idHeader);
    headerRow.appendChild(nameHeader);
    table.appendChild(headerRow);

    data.forEach(item => {
        const row = document.createElement('tr');
        const idCell = document.createElement('td');
        idCell.textContent = item.idSanPham;
        const nameCell = document.createElement('td');
        nameCell.textContent = item.tenSanPham;
        row.appendChild(idCell);
        row.appendChild(nameCell);
        table.appendChild(row);
    });

    resultContainer.appendChild(table);
}

function displayApriori() {
    const resultContainer = document.getElementById('root');
    resultContainer.innerHTML = '';

    const inputField = document.createElement('input');
    inputField.setAttribute('type', 'text');
    inputField.setAttribute('id', 'inputField');
    inputField.setAttribute('placeholder', 'Nhập s_min');

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Gửi';
    submitButton.addEventListener('click', function() {
        callDuyethdApriori(inputField.value);
    });

    resultContainer.appendChild(inputField);
    resultContainer.appendChild(submitButton);
}