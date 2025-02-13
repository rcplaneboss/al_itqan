
const TableInfo = ({ data, refresh, display }) => {
    return (
        <>

            <p className="open-sans admin-descr">Registered User Informations</p>
            <div className="admin-button-box montserrat">
                <button className="montserrat" onClick={refresh}>Refresh</button>
                <button className="montserrat" onClick={display}>User accounts</button>
            </div>
            <div className="info-table-box">

                <table className="info-table">
                    <thead className="admin-table-header montserrat">
                        <th>ID</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Date Of Birth</th>
                        <th>Registration Date</th>
                    </thead>
                    {
                        data.map((record) => (
                            <tr>
                                <td className="open-sans">{record.id}</td>
                                <td className="open-sans">{record.firstname}</td>
                                <td className="open-sans">{record.lastname}</td>
                                <td className="open-sans">{record.email}</td>
                                <td className="open-sans">{record.dateofbirth}</td>
                                <td className="open-sans">{record.reg_date}</td>
                            </tr>
                        ))
                    }

                </table>
            </div>
        </>
    );
}

export default TableInfo;