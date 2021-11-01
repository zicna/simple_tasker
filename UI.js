class UI{
    static displayNotes(){
        const hardCodedNotes = [
            {
                subject: "House",
                body: "clean the House",
                date: "1-11-2021"
    
            },
            {
                subject: "Work",
                body: "create simple noter",
                date: "1-11-2021"
    
            }
        ]
    hardCodedNotes.map(note => {
        console.log(note)
        const tableRow = document.createElement('tr')
        tableRow.innerHTML = `
        <th>${note.subject}</th>
        <th>${note.body}</th>
        <th>${note.date}</th>
        <th><a href="" class="btn btn-danger">X</a></th>

        `
        noteTable.appendChild(tableRow)
    })

    }

}