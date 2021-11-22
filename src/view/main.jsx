import React from 'react';
import InputField from '../components/InputField';
class Main extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            userName:''
        }
    }

    updateUserName =(data)=>{
        console.log(data,'data from user');
        this.setState({userName:data});
    }
    render(){
        return(
            <>
           <main>
            <h1>
                This is my main content
            </h1>
            <h2>
                This is kunal
            </h2>
            <InputField
             placeholder="kunal Input Field"
             usersValue ={(value)=>this.updateUserName(value)}
             validations={{required:true,name:true,minLength:6,maxLength:30}}
              type="text" />
              <br />
              <InputField
             placeholder="Hritik Input Field"
             usersValue ={(value)=>this.updateUserName(value)}
             validations={{required:true,name:true,minLength:6,maxLength:30}}
              type="date" />  
                <InputField
             placeholder="Tushar Input Field"
             usersValue ={(value)=>this.updateUserName(value)}
             validations={{required:true,name:true,minLength:6,maxLength:30}}
              type="time" />
           </main>
            </>
        );
    }
}

export default Main;