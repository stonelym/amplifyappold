import logo from './logo.svg';
import './App.css';
import react from 'react'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'


function App() {
    return (
        <div className="App">
            <header>

                <img src={logo} className="App-logo" alt="logo" />
                <h1>we now have auth!</h1>

            </header>
            <AmplifySignOut />

        </div>
    );
}

export default withAuthenticator(App);
