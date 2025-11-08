import { Link } from "react-router-dom"
function Sidebar() {
    return (
        <div className="col-md-3 mt mt-5">
            <ul>
                <li className="mt-4"> <Link className="unstyle" to="view">Products</Link></li>
                <li className="mt-4"><Link to="addproduct">Add products</Link></li>
                <li className="mt-4"><Link to="viewcontact">Contact</Link></li>
                <li className="mt-4"><Link to="../">home</Link></li>
            </ul>
        </div>
    )
}
export default Sidebar