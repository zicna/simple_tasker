class UI{
    static displayNotes(){

        const notes = Storage.getNotes()
        notes.forEach(note => {
            UI.addNotesToLIst(note)
        })
    }

    static addNotesToLIst(note){
        
            const tableRow = document.createElement('tr')
            tableRow.innerHTML = 
            `
                <th>${note.subject}</th>
                <th>${note.body}</th>
                <th>${note.date}</th>
                <th><a href="" class="btn btn-danger">X</a></th>
            `
            noteList.appendChild(tableRow)
    }

    static removeNote(e){
        if(e.classList.contains('btn-danger')){
            e.parentElement.parentElement.remove()
        }
    }

}