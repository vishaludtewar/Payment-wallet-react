import React, { Component } from 'react'
import WalletService from '../services/WalletService'
import { Link } from 'react-router-dom'

export class UpdateAccount extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
        name:'',
        mobileNumber:'',
        password:''
      }
    }

    changeName=(event)=>
    {
        this.setState({
            name:event.target.value
        })
    }

    changeNumber=(event)=> 
    {
        this.setState({
            mobileNumber:event.target.value
        })
    }

    changePassword=(event)=>
    {
        this.setState({
            password:event.target.value
        })
    }

    Update=(event)=>
    {
        event.preventDefault()
        let Customer = {name:this.state.name,mobileNumber:this.state.mobileNumber,password:this.state.password}
        WalletService.updateAccount(Customer).then(res=>{
            if(res.status === 202)
            {
                alert('Updated Successfully')
            }
            else
            Promise.reject()
        }).catch(err=>alert("Not Found"))
    }


  
  
  
    render() {
    return (
        <div className='out-form'>
        <p className='form-title'><b>Account Update</b></p> 
         <div className='in-form'>   
            <form className="" >    
                <label className='form-label'><b>Old Mobile Number</b></label>    
                <input type="text" className='form-input' placeholder="Old Number" onChange={this.changeNumber} required />    
                <br/><br/>    
                <label className='form-label'><b>New Name</b></label>    
                <input type="text" className='form-input' placeholder="if don't want to change enter the old" onChange={this.changeName} required ></input>    
                <br></br><br/>
                <label className='form-label'><b>New Password</b></label>    
                <input type="password" className='form-input' placeholder="if don't want to change enter the old" onChange={this.changePassword} required ></input>    
                <br></br><br/>      
                <input type="submit" className="send" value="Update" onClick={this.Update}></input>          
            </form>     
        </div>
        <Link id='ex1' className='btn btn-primary btn-lg' to='/wallet'>BACK</Link>
        </div>
    )
  }
}

export default UpdateAccount