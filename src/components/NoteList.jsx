import Note from "./Note.jsx";

const NoteList = ({notes, deleteNote}) => {

    if(notes.length === 0){
        return (
            <p className="text-center text-gray-500">
                No notes found.
            </p>
            );
    }

    return (
        <div className="space-y-4">
            {notes.map((note) => (
                <Note key={note.id} note={note} deleteNote={deleteNote} />
            ))}
        </div>
    );
}

export default NoteList;