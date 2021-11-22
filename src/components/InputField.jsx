import React from 'react'


class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            err: []
        }
        console.log(this.props.validations, 'childasdasdasdasd')

    }
    handleValidation() {
        if (this.props.validations) {
            const { err } = this.state;
            // maxLength, name 
            const { required, minLength} = this.props.validations;
            if (required) {
                if(!this.state.err.find(el=>el.include('Required')))
                this.setState({
                    err: err.push('Field Is Required')
                })
            }else{
                this.setState({
                    err: err.filter((el)=>!el.includes('Required'))
                })
            }
            if (minLength) {
                this.setState({
                    err: err.push(`Field Minimum length must be ${minLength}`)
                })
            }   
        }
    }

    detectChange = (value) => {
        console.log(value, 'sss')
        this.setState({ userName: value });
        // this.handleValidation();
        this.props.usersValue(value);

    }

    render() {
        return (
            <>
                <input
                name={this.props.name || ''}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    value={this.state.userName}
                    onChange={(e) => this.detectChange(e.target.value)}
                />
                <br></br>
                {this.state && this.state.err && this.state.err.map((el) => {
                    return (<>
                        <p className="error">{el}</p>
                    </>)
                })}
            </>
        )
    }
}

export default InputField
