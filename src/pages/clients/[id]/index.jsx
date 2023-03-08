import { useRouter } from "next/router"

const clientProject = () => {
    const router = useRouter()
const loadProjectHandler = () => {

    // The push method from router allows to navigate to another page
    router.push(`/clients/Rayan`)
}
    return(

        <div>
            <h1>THE PROJECTS OF A GIVEN CLIENT</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    )
}

export default clientProject;