
function displayimprovedAlgorithm(){
    const resultContainer = document.getElementById('root');
    resultContainer.innerHTML = '';

    const navigationDiv = document.createElement('div');
    navigationDiv.classList.add('navigation-improve');
    
    const menu = [
        {text: 'Duyệt hoá đơn', onclick:callDuyetHoaDon2API},
        {text: 'Bộ sản phẩm tiềm năng',onclick:displayBoSP}
    ];
    

    menu.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item-improve');
        menuItem.textContent = item.text;
        menuItem.addEventListener("click",item.onclick);
        navigationDiv.appendChild(menuItem);
    });

    resultContainer.appendChild(navigationDiv);
}

function displayBoSP() {
    const resultContainer = document.getElementById('root');
    resultContainer.innerHTML = '';

    const inputField = document.createElement('input');
    inputField.setAttribute('type', 'text');
    inputField.setAttribute('id', 'inputField');
    inputField.setAttribute('placeholder', 'Nhập s_min');

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Gửi';
    submitButton.addEventListener('click', function() {
        callBoSPTiemNang(inputField.value);
    });

    resultContainer.appendChild(inputField);
    resultContainer.appendChild(submitButton);
}

function callDuyetHoaDon2API() {
    const apiUrl = `https://localhost:7231/api/ThuatToanCach2/duyet-hoa-don-cach-2`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(response => {
            // Xử lý dữ liệu nhận được từ API ở đây
            console.log(response.message);
            alert('Thời gian thực hiện duyệt hoá đơn: ' +response.message + ' ms');
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function callBoSPTiemNang(smin){
    const apiUrl = `https://localhost:7231/api/ThuatToanCach2/bo-san-pham-tiem-nang?s_min=${smin}`;
    fetch(apiUrl)
        .then(response => {
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(response=>{
            console.log(response.data);
            handleAPIResponseImproveAlgorithm(response.data);
            alert('Thời gian thực hiện tìm bộ sp tiềm năng: ' +response.message + ' ms');
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        })

}
function handleAPIResponseImproveAlgorithm(data) {

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