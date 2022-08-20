const firebaseConfig = {
    apiKey: "AIzaSyDeseWdp9IleZhxVA9LQuQ7gGUsVnqwKMs",
    authDomain: "progranadorbr.firebaseapp.com",
    projectId: "progranadorbr",
    storageBucket: "progranadorbr.appspot.com",
    messagingSenderId: "919540356070",
    appId: "1:919540356070:web:f19d6f00022b3d7e2f3c27",
    measurementId: "G-Q2Q2TPSW9Y"
};
console.log(document.getElementById('arquivo').files[0]);
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
document.getElementById('bttenviar').addEventListener('click', () => {
    let nome = document.getElementById('nome');
    let arquivo = document.getElementById('arquivo');
    let turma = document.getElementById('turma');
    let materia = document.getElementById('materia');
    if (turma.value == 0) {
        alert('Escolha uma turma');
    } else {
        if (materia.value == 0) {
            alert('Escolha uma matéria');
        } else {
            if (arquivo.files[0] == undefined) {
                alert('Escolha um arquivo');
            } else {
                if (nome.value == '') {
                    alert('Insira um nome');
                } else {
                    fileref = storage.ref(`/${materia.value}/Turmas/${turma.value}`);
                    fileref.child(nome.value + ' ' + arquivo.files[0].name).put(arquivo.files[0]).then((snapshot) => {
                        console.log(snapshot);
                        if (snapshot.state == 'success') {
                            document.getElementById('success').style.display = 'flex';
                            setTimeout(() => {
                                window.location.href = 'index.html';
                            }, 2000);
                        } else {
                            document.getElementById('success').style.display = 'flex';
                            document.getElementById('success').style.backgroundColor = 'rgba(255, 0, 0, 0.9)';
                            document.getElementById('success').innerHTML = '<h1>Falha</h1>';
                        }


                    }).catch((err) => {
                        console.log(err);
                    })
                }
            }


        }
    }
})