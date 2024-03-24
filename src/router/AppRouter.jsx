import { Route, Routes } from "react-router-dom"
import { routes } from "./routes"
import { Layout } from "../components/layout"


export const AppRouter = () => {
  return (
    <div className="main">
      <Routes>
        <Route element={<Layout/>}>
        {routes.map(({id, path, Element}) => {
            return <Route key={id} path={path} element={<Element/>}/>
        })}
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  )
}
