const FormInput = ({ entry, setEntry, entryName, type }) => {
    return (
        <div>
            {entryName}
            <input
                id={entryName}
                type={type}
                value={entry}
                name={`${entry}`}
                onChange={({ target }) => setEntry(target.value)}
            />
        </div>
    )
}

export default FormInput