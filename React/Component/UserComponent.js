import React from 'react';
import {Media } from 'reactstrap';



function RenderUser(props1) {



       
        
        return(
            <Media className="container m-5">
                <Media key={props1.userData.id} className="row">
                    <Media body className="col-12 col-md-8">
                        <Media heading top>
                            {props1.userData.username}
                        </Media>
                    </Media>
                </Media>
            </Media>
        );
            

}

function User(props) {

    const usersInfo = props.users.map((user) => {
        
        return (
            
                <div in key={user.id}>
                    <RenderUser userData={user}/>
                </div>

        );
    });

    if (props.login === true) {
            return(
                <div className="container">
                    <div className="row">            
                        {usersInfo}
                    </div>
                </div>
            );
        }
        else
            return(
                <div className="container">
                    <div className="row">            
                        <div>Login First</div>
                    </div>
                </div>
            );
        
        
}


export default User;    