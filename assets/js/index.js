objBA = document.getElementById('bc-backarrow');

function displayBackarrow ( bool = Boolean ) {
    if (bool) {
        objBA.innerHTML = '<i class="fas fa-arrow-left"></i>';
    } else {
        objBA.innerHTML = '';
    }
};