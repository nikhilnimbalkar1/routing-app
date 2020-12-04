import React, { Component } from 'react'

class Home extends Component{

    constructor(props){
        super(props)

        this.state = {
            isLogin : false,
            userName : "",
            password:""

        }
    }

    handleOnchangeName(e){

        this.setState({userName:e.target.value});
        

    }

    handleOnchangePassword(e){
        this.setState({password:e.target.value});
       
    }

    handleOnSubmit(e){
        e.preventDefault();
        this.setState({
            ...this.state,
            isLogin: true
          });
    }

    handleLogout(){
        this.setState({...this.state,
            isLogin:false,
            userName:"",
            password:""})
    }

    componentDidUpdate(){
        localStorage.setItem('auth',JSON.stringify(this.state));
    }
    render(){
        const auth = JSON.parse(localStorage.getItem('auth'));
        if(auth.isLogin){
            return (
                <div className="container justify-content-center">
                    <h2 className="display-3 text-center">Welcome { auth.userName } ! </h2>
                    <div className="row justify-content-center">
                        <button onClick = {this.handleLogout.bind(this)} className="btn btn-outline-danger">Logout</button>
                    </div>
                </div>
               
            )
        }
        else{

            return (
                <div className="container justify-content-center">
    
                    <div className="row justify-content-center">
                        <h1 className="display-3">Login</h1>
                    </div>
    
                    <div className="container">
                        <div className="form-group">
                            <label>Email address</label>
                            <input  onChange = {this.handleOnchangeName.bind(this)} type="text" className="form-control" placeholder="Enter email"/>
                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input  onChange = {this.handleOnchangePassword.bind(this)} type="password" className="form-control" placeholder="Password"/>
                        </div>
                        <button onClick = {this.handleOnSubmit.bind(this)} type="submit" className="btn btn-outline-primary">Submit</button>
                    </div>
    
                </div>
                
            )
    
        }

        }
        

}

export default Home