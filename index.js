const  noteForm= document.getElementById("note-form")
const  noteSubmit= document.getElementById("note-submit")
const  noteAddNew= document.getElementById("note-add-new")

const handleNoteAddNew = () => {
    noteForm.style.display = "block"
    noteAddNew.style.display = "none"
}

const handleSubmit = (event) => {
    event.preventDefault()
    noteForm.style.display = "none"
    noteAddNew.style.display = "block"

}

noteAddNew.addEventListener("click", handleNoteAddNew)
noteForm.addEventListener("submit", handleSubmit)