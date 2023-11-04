const FormInputText = ({ entry, setEntry, entryName }) => {
    return (
        <div>
            {entryName}
            <input
                id={entryName}
                type="text"
                value={entry}
                name={`${entry}`}
                onChange={({ target }) => setEntry(target.value)}
            />
        </div>
    )
}

export default FormInputText