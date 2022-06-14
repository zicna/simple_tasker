// * HTML constants
const  noteForm= document.getElementById("note-form")
const  noteSubmit= document.getElementById("note-submit")
const  noteCancel= document.getElementById("note-cancel")
const  noteAddNew= document.getElementById("note-add-new")
const noteTable = document.getElementById("note-table")
const noteList = document.querySelector('#note-list')

// *form constatns
const noteSubject = document.getElementById("note-subject")
const noteBody = document.getElementById("note-body")
const noteDate = document.getElementById("note-date")

// * instances from classes

const toggleShow = () => {
    noteForm.classList.toggle("no-show");
    noteAddNew.classList.toggle("no-show");
}

const handleSubmit = (event) => {
    event.preventDefault()
    toggleShow();

    const noteS = noteSubject.value
    const noteB = noteBody.value
    const noteD = noteDate.value

    if(noteS === "" || noteB === "" || noteD ===""){
        Promps.worning()
    } else {
    const note = new Note(noteS, noteB, noteD)
    Storage.addNote(note)
    UI.addNotesToLIst(note)
    }
    event.target.reset()
}



// * Event Listeners
document.addEventListener("DOMContentLoaded", UI.displayNotes)
noteAddNew.addEventListener("click", toggleShow)
noteCancel.addEventListener("click", toggleShow);
noteForm.addEventListener("submit", handleSubmit)

// *adding event listener for whole '#note-list' 
noteList.addEventListener('click', (event)=> {
    // * first we need to check what is clicked
    // * second remove from UI
    // * third remove book from localeStorage
    UI.removeNote(event.target)
    Storage.removeNote(event.target)

})


// * Warning to users that refreshing or closing simple note will result in losing data


