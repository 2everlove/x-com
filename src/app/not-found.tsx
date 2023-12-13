import Link from "next/link";
import {NextPage} from "next";

const NotFound: NextPage = () => {
    return (
        <div>
            <div>UnExist Page</div>
            <Link href="/search">Search</Link>
        </div>
    )
}

export default NotFound;