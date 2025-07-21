import {useState} from "react";
import SingleLineText from "./form-components/SingleLineText.jsx";
import TextArea from "./form-components/TextArea.jsx";
import SelectList from "./form-components/SelectList.jsx";

const NoteForm = ({notes, setNotes}) => {

    const [formData, setFormData] = useState({
        title: '',
        category: 'Work',
        priority: 'Medium',
        description: ''
    });

    const [isFormVisible, setIsFormVisible] = useState(false);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //title and description are mandatory
        if (!formData.title || !formData.description) {
            return;
        }

        //create Note object
        const newNote = {id: Date.now(), ...formData};

        //add notes to state
        setNotes([newNote, ...notes]);

        //reset form
        setFormData({
            title: '',
            category: 'Work',
            priority: 'Medium',
            description: ''
        })
    }

    return (
        <>
            {/*toggle button*/}
            <button onClick={()=>setIsFormVisible(!isFormVisible)} className="w-full bg-gray-100 border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4">
                {isFormVisible ? 'Hide Form ｘ':'Add New Note ＋ '}
            </button>
            {/*form*/}
            {isFormVisible && (
                <form onSubmit={handleSubmit} className={'mb-6'}>
                    <SingleLineText
                        label="Title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required={true}
                    />
                    <SelectList label="Priority"
                                name="priority"
                                value={formData.priority}
                                onChange={handleChange}
                                options={[
                                    {value: 'Medium', label: ' 🟡 Medium'},
                                    {value: 'Low', label: '🟢 Low'},
                                    {value: 'High', label: '🔴 High'}
                                ]}
                    />
                    <SelectList
                        label="Category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        options={[
                            {value: "Work", label: '💼 Work'},
                            {value: "Study", label: '📚 Study'},
                            {value: "Personal", label: '📃 Personal'},
                            {value: "Ideas", label: '💡 Ideas'},
                        ]}
                    />
                    <TextArea
                        label="Description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                    <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600">Add Note</button>
                </form>
            )}
        </>

    );
}
export default NoteForm;