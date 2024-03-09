//sidebar 
const menuItems = document.querySelectorAll('.menu-item');



//theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const fontSize = document.querySelectorAll('.choose-color span');

//theme/display customization

// abrir modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

//cerrar modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);

// eliminar la class activa de los intervalos o del selector de tamaño de fuente
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        }
        else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        }
        else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        }
        else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        }
        else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        }

     //font the root 
    document.querySelector('html').style.fontSize = fontSize;
    });

});

// change primary color

//cerrar sesion 
document.getElementById('logout').addEventListener('click', function(e) {
    e.preventDefault();
    // Borrar la sesión o el token del usuario
    localStorage.removeItem('token');
    // Redirigir a la página de inicio de sesión
    window.location.href = 'index.html';
  });
//asta aqui

//publicar
function publishInput() {
    let userInput = document.getElementById("userInput").value;
    let userName = "nombre del usuario"; // Asume que ya tienes el nombre de la persona en una variable
    document.getElementById("displayArea").innerHTML = userName + ':' + userInput;
  }
  //aqui acaba

//comentarios
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentsDiv = document.getElementById('comments');

// Datos de comentarios de muestra
const comments = [

];

//Función para agregar un nuevo comentario.
function addComment(comment) {
  const commentEl = document.createElement('div');
  commentEl.id = `comment-${comment.id}`;
  commentEl.textContent = comment.text;
  commentsDiv.appendChild(commentEl);
}

//Función para cargar comentarios
function loadComments() {
  comments.forEach(addComment);
}

// Event listener to handle form submission
commentForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const commentText = commentInput.value.trim();
  if (commentText.length === 0) {
    return;
  }
  //Generar un nuevo ID de comentario
  const commentId = comments.length + 1;
  const newComment = { id: commentId, text: commentText };
  comments.push(newComment);
  addComment(newComment);
  commentInput.value = '';
});

//Cargar comentarios al cargar la página.
loadComments();
//aqui comentarios

// Funciones para controlar la ventana emergente de comentarios de nicole
function openPopup() {
    document.getElementById("comment-popup").style.display = "block";
}

function closePopup() {
    document.getElementById("comment-popup").style.display = "none";
}

function postComment() {
    // Lógica para publicar el comentario
    // Por ejemplo, enviar el comentario al servidor
    closePopup(); // Cierra la ventana emergente después de publicar el comentario
}

function iniciarSesion() {
    document.getElementById("comment-popup").classList.remove("hide");
}