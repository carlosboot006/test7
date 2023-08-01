function uploadFile() {
    document.getElementById('uploadInput').click();
}

document.getElementById('uploadInput').addEventListener('change', function() {
    var file = this.files[0];
    if (file) {
        console.log('Nome do arquivo selecionado:', file.name);
        console.log('Tipo do arquivo selecionado:', file.type);
        console.log('Tamanho do arquivo selecionado:', file.size, 'bytes');
        // Aqui você pode fazer o que quiser com as informações do arquivo selecionado
    }
});
