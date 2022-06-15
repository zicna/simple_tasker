class UI{
    static displayNotes(){
        Storage.getNotes().forEach(note => UI.addNoteToTable(note))
    }

    static addNoteToTable(note){
        
            const tableRow = document.createElement('tr');
            tableRow.setAttribute("data-id", note.id)
            tableRow.innerHTML = 
            `
                <th>${note.subject}</th>
                <th>${note.body}</th>
                <th>${note.date}</th>
                <th><a href="" class="btn btn-danger">X</a></th>
            `
            Promps.success();
            noteList.appendChild(tableRow)
    }

    static removeNote(target){
        target.closest("tr").remove();
    }

}