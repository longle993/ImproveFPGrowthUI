const labels = ['January','February','March','April','May','June']

const data = {
    labels:labels,
    datasets:[
        {
            label:'Lượt truy cập',
            backgroundColor:"blue",
            borderColor:"blue",
            data:[10,27,56,34,24,53],
            tension:0.4,
        },
    ],
}
const config = config={
    type:'line',
    data:data,

}
const canvas = document.getElementById('canvas');
const chart = new Chart(canvas,config)