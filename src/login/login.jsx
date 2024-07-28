import React from "react";
import { reduxForm } from "redux-form";
import { maxLengthCreator, minLengthCreator, required } from "../utils/validators/validators";
import { CreateField, Input} from "../components/common/FormsControls/FormsControls";
import { connect } from "react-redux";
import { login } from "../redux/auth-reducer";
import { Navigate} from "react-router-dom";
import style from "../components/common/FormsControls/FormsControls.module.css"


const maxLength = maxLengthCreator(20);
const minLength2 = minLengthCreator(2)

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
                {CreateField ("Email", "email", [required, maxLength, minLength2], Input)}
                {CreateField ("Password", "password", [required, maxLength, minLength2], Input, {type: "password"} )}
                {CreateField ("null", "rememberMe", [], Input, {type: "checkbox"}, "remember me" )}
         
            <div> 
               { error && <div className={style.formSummaryError}> {error }
                 </div>
                 }
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    
    React.useEffect(() => {
        console.log("isAuth changed to:", props.isAuth);
    }, [props.isAuth]);

    if (props.isAuth) {
        return <Navigate to ={"/profile"}/>
    }
    return <div> 
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
        }
    const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth
    })
export default connect(mapStateToProps, {login})(Login);