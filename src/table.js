import moment from "moment"

const Table = (props) => {
    const { data } = props
    console.log(data)
    const sortedData = data.sort((a, b) => {
        const date1 = Date.parse(a.datetime);
        const date2 = Date.parse(b.datetime);
        return date1 < date2 ? -1 : date2 < date1 ? 1 : 0;
    })
    const thresholdDate = moment("14-07-2024 00:00:00", "DD-MM-YYYY HH:mm:ss");
    const filteredData = sortedData.filter((obj) => {
        const datetime = moment(obj.datetime, "DD-MM-YYYY HH:mm:ss")
        // return datetime.isAfter(thresholdDate);
        return true
    })
    const total = filteredData.reduce((acc, val) => {
        const cur = parseFloat(val.amount.replace(/,/g, ''));
        console.log(val.amount, cur);
        return acc + (cur != NaN ? cur : 0)
    }, 0)
    return filteredData.length == 0 ? <div>No data</div> : (
        <div className="flex flex-col  border-2 border-black ">
            <div key="heading" className="flex flex-row ">
                {
                    Object.keys(filteredData[0]).map((txnCol, idx2) => {
                        return (
                            <div key={"heading" + idx2} className="font-semibold text-center text-deco flex content-center justify-center border-b-2 border-black w-52"> {txnCol}</div>
                        )
                    })
                }
            </div>
            {
                filteredData.map((txnObj, idx) => {
                    return (
                        <div key={idx} className="flex flex-row ">
                            {
                                Object.values(txnObj).map((txnCol, idx2) => {
                                    return (
                                        <div key={idx * 10 + idx2} className="text-center text-sm flex content-center justify-center border-b-2 border-black w-52"> {txnCol}</div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
            <div className="flex flex-row ">
                <div className="text-center text-sm flex content-center justify-center border-b-2 w-52">
                    Total : {total}
                </div>
                <div className="text-center text-sm flex content-center justify-center border-b-2 w-52">
                    Count : {filteredData.length}
                </div>
            </div>
        </div>
    )
}

export default Table