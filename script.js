//menuliskan fungsi
// function printText() {
//     alert("Selamat Datang"); //untuk mengasih box text pemberitahuan

//     var x = "sekolah koding"
//     document.getElementById("wrap").innerHTML = x;
// }

// //memanggil text
// printText();

//parameter pada fungsi 
function printText(nama); 
{
    document.getElementById("wrap").innerHTML = nama;
}

printText("Sekolah koding");