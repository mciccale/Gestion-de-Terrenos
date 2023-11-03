import { toast} from 'react-toastify';
const RegistroParcelas = () => {
    const handleNewParcela = async (event) => {
        event.preventDefault()
        try {
            toast.success("Esta es una notificación de acierto.");
           /* setBlogs(blogs.concat(newBlog))
            setTitle('')
            setAuthor('')
            setUrl('')*/
        } catch (exception) {
            toast.error("Esta es una notificación de error.");
            console.log('Formato de Parcela Incorrecto')
        }
        return
    }
    return (
        <>
            <form onSubmit={handleNewParcela}>
               {/*  <FormInput entry={title} setEntry={setTitle} entryName={"Límite"} /> */}
                <button id='create-button' type="submit">Create</button>
            </form>
        </>
    )
}
export default RegistroParcelas