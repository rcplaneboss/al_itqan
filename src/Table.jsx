const Table = ({ data, refresh, display }) => {
    return (
        <>

            <p className="open-sans admin-descr">Registered User Accounts</p>
            <div className="admin-button-box montserrat">
                <button className="montserrat" onClick={refresh}>Refresh</button>
                <button className="montserrat" onClick={display}>User informations</button>
            </div>
            <table>
                <thead className="admin-table-header montserrat">
                    <th>ID</th>
                    <th>Username</th>
                    <th>Person ID</th>
                    <th>Registration Date</th>
                </thead>
                {
                    data.map((record) => (
                        <tr>
                            <td className="open-sans">{record.id}</td>
                            <td className="open-sans">{record.username}</td>
                            <td className="open-sans">{record.person_id}</td>
                            <td className="open-sans">{record.reg_date}</td>
                        </tr>
                    ))
                }

            </table>
        </>
    );
}

export default Table;