import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './Loading';
import Cards from './Cards';

function User() {


    // to fetch and store for map
    // const getUsers = async () => {
    //     const response = await fetch ("https://api.github.com/users")
    //     console.log(response);

    //     const data = await response.json();
    //     console.log(data);
    // }


    // to fetch and store for map
    const [users, setUsers] = useState([]);

    // for loading
    const [loading, setLoading] = useState(true);


    const getUsers = async () => {

        // const response = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
        // setUsers(await response.json());

        try{
            setLoading(false)
            const response = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
            setUsers(await response.json());
    
        }catch(error){
            setLoading(false)
            console.log("oops error is" + error);
            
        }



    }



    useEffect(() => {
        getUsers();
    }, [])

    if(loading){
        return <Loading/>
    }


    return (
       <>
        {/* <div>
            <h2>List of Github users</h2>
            <div className="container-fluid mt-5">
                <div className="row text-center">

                    {
                        users.map((data) => (
                            <div className="col-10 col-md-4 mt-5" key={data.id} >
                            <div className="card p-2">
                                <div className="d-flex align-items-center">
                                    <div className="image"><img src={data.thumbnailUrl} alt="" />  </div>
                                    <div className="ml-3 w-100">
                                        <h4 className="mb-0 mt-0 textLeft">{data.title}</h4>
                                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                            <div className="d-flex flex-column">
                                                <span className="articles">Articles</span> <span className="number1">38</span> </div>
                                            <div className="d-flex flex-column">
                                                <span className="followers">Followers</span> <span className="number2">980</span> </div>
                                            <div className="d-flex flex-column">
                                                <span className="rating">Rating</span> <span className="number3">8.9</span> </div>
                                        </div>
    
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                   
                </div>
            </div>
        </div> */}
        <Cards userprops = {users}/>
       </>
    )
}

export default User