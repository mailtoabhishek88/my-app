import React from 'react';
import { connect } from 'react-redux';
import BackToHome from './BackToHome';

class AgeChecker extends React.Component {

    // state = { age: 21}

    // onAgeUp = () => {
    //     this.setState({
    //         ...this.state,
    //         age: ++this.state.age
    //     })
    // }

    // onAgeDown = () => {
    //     this.setState({
    //         ...this.state,
    //         age: ++this.state.age
    //     })
    // }

    render() {
        return (
            <div>
                <h3>Age: <span>{this.props.age}</span></h3>
                <hr />
                <div>

                    <button onClick={this.props.onAgeUp}> Age Up</button>
                    <button onClick={this.props.onAgeDown}> Age Down</button>
                </div>
                <hr />
                <div>
                    <ul>

                        {
                            this.props.history.map(user => (
                                <li onClick={() => this.props.setAge(user.id)} key={user.id}>
                                    Age : {user.age}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <hr />
                <BackToHome />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        age: state.ageReducer.age,
        history: state.ageReducer.history
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAgeUp: () => dispatch({ type: "AGE_UP" }),
        onAgeDown: () => dispatch({ type: "AGE_DOWN" }),
        setAge: (id) => dispatch({ type: "SET_AGE", value: id })
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(AgeChecker);