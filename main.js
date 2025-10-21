if('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
        navigator.serviceWorker.register('/cocktail_mats/sw.js')
        .then(req => console.log('Registro SW exitoso', req))
        .catch(err => console.log('Error de registro SW:', err))
    })
}