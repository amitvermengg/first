import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

function AdminLayout() {
    return (
        <div className="container">
            <div className="row">
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </div>
        </div>

    )
}
export default AdminLayout