// * HTML constants
const notification = document.querySelector('#notifications')
const noteAddNew = document.getElementById('note-add-new')
const noteForm = document.getElementById('note-form')
const noteSubmit = document.getElementById('note-submit')
const noteCancel = document.getElementById('note-cancel')

const noteTable = document.getElementById('note-table')
const noteList = document.querySelector('#note-list')

// *form constatns
const noteSubject = document.getElementById('note-subject')
const noteBody = document.getElementById('note-body')
const noteDate = document.getElementById('note-date')

// *
const toggleShow = () => {
  noteForm.classList.toggle('no-show')
  noteAddNew.classList.toggle('no-show')
}
// *
const addingNoteNotification = () => {
  notification.classList.toggle('no-show')
  notification.classList.toggle('success')
  notification.textContent = 'new note has been created'

  setTimeout(() => {
    notification.classList.toggle('no-show')
    notification.classList.toggle('success')
    notification.textContent = ' '
  }, 2000)
}

const removingNoteNotification = () => {
  notification.classList.toggle('no-show');
  notification.classList.toggle('worning');
  notification.textContent = 'note has been DELETED';

  setTimeout(() => {
    notification.classList.toggle('no-show')
    notification.classList.toggle('worning')
    notification.textContent = ' '
  }, 2000)
}

const handleSubmit = (event) => {
  event.preventDefault()
  toggleShow()
  addingNoteNotification()

  const noteS = noteSubject.value
  const noteB = noteBody.value
  const noteD = noteDate.value

  if (noteS === '' || noteB === '' || noteD === '') {
    //! only way to trigger this is to remove "reguired" from input fields
    Promps.worning()
  } else {
    const note = new Note(noteS, noteB, noteD)
    Storage.addNote(note)
    UI.addNoteToTable(note)
  }

  event.target.reset()
}

const handleRemove = (event) => {
  event.preventDefault()
  removingNoteNotification()
  Storage.removeNote(event.target)
  UI.removeNote(event.target)
}
const handleBeforeunload = (event) => {
  event.preventDefault()
  localStorage.clear()
  event.returnValue = null
}

// * Event Listeners
noteAddNew.addEventListener('click', toggleShow)
noteCancel.addEventListener('click', toggleShow)
noteForm.addEventListener('submit', handleSubmit)
noteList.addEventListener('click', handleRemove)

window.addEventListener('beforeunload', handleBeforeunload)
