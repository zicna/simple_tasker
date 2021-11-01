class Storage{

    static saveNote (item){
        localStorage.setItem(item)
    }

    static clearAllNotes(){
        localStorage.claer()
    }
}