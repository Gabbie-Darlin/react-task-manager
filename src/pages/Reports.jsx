import { Link } from "react-router-dom"

export default function Reports() {
    return(
        <div>
            <h1>Reports</h1>

            <Link>
                Total tasks
            </Link>
            <br />

            <Link>
                Completed tasks
            </Link>
            <br />

            <Link>
                Pending tasks
            </Link>
            <br />

            <Link>
                Productivity summary
            </Link>
            <br />
        </div>
    );
}