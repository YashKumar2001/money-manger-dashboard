import data from "../public/data"
import Table from "./table"

const HomePage = () => {
    return (
        <div className="flex p-3">
            <Table data={data} />
        </div>
    )
}

export default HomePage