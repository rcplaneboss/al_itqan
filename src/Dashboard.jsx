import axios from "axios";
import { useEffect, useState } from "react";
import Table from "./Table";
import TableInfo from "./TableInfo";


const Dashboard = () => {
    const [data, setData] = useState(null);
    const [dataInfo, setDataInfo] = useState(null);
    const [status, setStatus] = useState(null);
    const [display, setDisplay] = useState(true);
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {

        axios.post('http://alitqanonlineschool.rf.gd/views/dashboard.php').then((res) => {
            if (res.data.users) {
            setData(res.data.users);
            setDataInfo(res.data.info)
            console.log(res.data.users.person_id);
            setStatus(true);
            }else{
                setStatus(false);
            }
        }).catch((error)=>{
            console.log(error);
        })
        

    }, [refresh]);
    
    const handleRefresh = ()=>{
        setRefresh(!refresh);
    }

    const handleDisplay = ()=>{
        setDisplay(!display);
    }

    return (
        <div className="parent">
            <h4 className="dashboard montserrat">Dashboard</h4>
            <h1 className="montserrat admin-header">Welcome Admin!</h1>
            
         {status && display &&   <Table data={data} refresh={handleRefresh}   display={handleDisplay}/>}
         {status && !display   && <TableInfo data={dataInfo} refresh={handleRefresh} display={handleDisplay}/>}
         {!status &&  <h2 className="montserrat">Please wait.....</h2>}

           
        </div>
    );
}

export default Dashboard;


// import React from 'react';
// import { Admin, Resource, ListGuesser } from 'react-admin';
// import jsonServerProvider from 'ra-data-json-server';

// const dataProvider = jsonServerProvider('http://localhost:3000'); // Adjust the URL according to your API

// const App = () => (
//     <Admin dataProvider={dataProvider}>
//         <Resource name="posts" list={ListGuesser} />
//         <Resource name="users" list={ListGuesser} />
//     </Admin>
// );

// export default App;
