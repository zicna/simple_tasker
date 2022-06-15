class Note{
    constructor(subject, body, date){
        this.subject = subject
        this.body = body
        this.date = date
        this.id = `${subject[0].toUpperCase()}-${randomID(1,10000)}`;
    }
}