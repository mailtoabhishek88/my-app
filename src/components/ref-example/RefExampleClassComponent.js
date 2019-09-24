import React,{Component} from 'react';
import BackToHome from '../BackToHome';

const RefExampleFuncComponent = (props) => {
    let firstNameRef = null;

    let onClick = () => {
        firstNameRef.focus();
    }

    return (
        <>
            <div>
                    <input type="text" name="first-name" 
                    ref={(inputRef) => { firstNameRef = inputRef}} 
                    
                    />
                    
                    <input type="button" name="Submit" value="Submit" 

                    onClick={onClick.bind(this)}
                    />
                    
                   
                </div>
        </>
    )
}

class RefExampleClassComponent extends React.Component {

    onKeyUp =(e) => {
        if(e.keyCode === 13){
            //alert(this.firstName.value);
            this.lastName.focus();
        }

    }

    onSubmit = () => {
        alert('resetting all refs/text-field');
        this.firstName.value = '';
        this.lastName.value = '';
    }

    render() {
        return (
            <>
                <div>
                    <input type="text" name="first-name" 
                    ref={(inputRef) => { this.firstName = inputRef}} 
                    onKeyUp = {this.onKeyUp}
                    />
                    <input type="text" name="last-name" 
                    ref={(inputRef) => { this.lastName = inputRef}} />

                    <input type="button" name="Submit" value="Submit"
                    onClick = {this.onSubmit} 
                    ref={(inputRef) => { this.submitBtn = inputRef}}
                    />
                </div>

                Ref with Fucntional component Example : <RefExampleFuncComponent />
                <hr/>
                <BackToHome/>
            </>
        )
    }
}

export default RefExampleClassComponent; 