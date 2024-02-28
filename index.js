const listElement = document.getElementById('listaPeliculas')


const inputElement = document.getElementById('input')
const formButton = document.getElementById('addPelicula')




const addNuevaPeli = () => {
    //le damos el valor de título al input
    const title= inputElement.value;
    //ya que sabe que le vamos a meter un título, lo metemos en el array de movies
movies.push(({title}))
renderListOfMovies ()
}
formButton.onclick = () => addNuevaPeli ()
   

const addLiElement = title => {
    // Creamos el elemento, que tiene que poder existir en html, en este caso un li
    const liElement = document.createElement ('li')
    //le decimos lo que queremos que meta dentro de ese elemento
    liElement.innerHTML = title
    //metemos este elemento ya con el texto dentro de otro elemento, que es como su madre
    listElement.append(liElement)

}
const renderListOfMovies = () => {
    //para que no se dupliquen cada vez que le demos al boton, ponemos un comando, mediante las comillas vacias,
    //vacie el elemento, asi, cada vez que le damos, primero se limpia, pero que no se repita todo.
   listElement.innerHTML = ''
    //vamos a hacer un bucle para que esto nos lo haga con cada pelicula
    movies.forEach(movie => {
   addLiElement()
})
}
renderListOfMovies ()