import React from 'react';
import InputField from '../components/InputField';
import burger from '../assets/hamburger.jpg'
class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: ''
        }
    }

    updateUserName = (data) => {
        console.log(data, 'data from user');
        this.setState({ userName: data });
    }
    render() {
        return (
            <>
                <body>
                    <div> <img className="main-image" src={burger} /> </div>
                        {/* <InputField
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
            type="time" /> */}
                </body>
                <main>
                </main>
            </>
        );
    }
}

export default Main;