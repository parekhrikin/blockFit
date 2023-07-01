
const Dashboard = () =>  {

    
    const id = localStorage.getItem("userWalletId");
        
    return (
        <div>
            <h1>Welcome</h1>
            <h3> WalletId - {id} </h3>
        </div>
    );  

}

export default Dashboard;