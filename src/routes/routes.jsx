import { Home, Summary } from "../Pages"

const routes= [
    {
        path : '/',
        element : <Home />
    },
    {
        path : '/:id',
        element: <Summary />
    }
]

export default routes