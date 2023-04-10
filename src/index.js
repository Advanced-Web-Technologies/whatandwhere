import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import axios from 'axios';

// Login page component
function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    function handleLogin() {
        // TODO: Check if the credentials are valid
        // If yes, redirect to the main website page
        history.push('/main');
    }

    return (
        <div>
            <h1>Login</h1>
            <form>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <button type="button" onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
}

// Sign-up page component
function SignupPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    function handleSignup() {
        // TODO: Save the user data to the Kotlin database
        // and redirect to the login page
        axios.post('/api/signup', { username, email, phone, password })
            .then(() => {
                history.push('/');
            })
            .catch((err) => {
                console.error(err);
            });
    }

    return (
        <div>
            <h1>Sign up</h1>
            <form>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label>
                    Phone:
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <button type="button" onClick={handleSignup}>Sign up</button>
            </form>
        </div>
    );
}

// Main website page component
function MainPage() {
    return (
        <div>
            <h1>Main website page</h1>
            <nav>
                <ul>
                    <li><Link to="/main/options">Options</Link></li>
                    <li><Link to="/main/filter">Filter</Link></li>
                    <li><Link to="/main/list">List</Link></li>
                    <li><Link to="/main/map">Map</Link></li>
                    <li><Link to="/main/add-event">Add Event</Link></li>
                </ul>
            </nav>
            <Switch>
                <Route path="/main/options">
                    {/* TODO: Add options component */}
                </Route>
                <Route path="/main/filter">
                    {/* TODO: Add filter component */}
                </Route>
                <Route path="/main/list">
                    {/* TODO: Add list component */}
                </Route>
                <Route path="/main/map">
                    {/* TODO: Add map component */}
                </Route>
                <Route path="/main/add-event">
                    {/* TODO: Add item adding component */}
                </Route>
            </Switch>
        </div>);
}

// Item adding page component
function AddEventPage() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    function handleAddItem() {
// TODO: Save the item data to the Kotlin database
    }

    return (
        <div>
            <h1>Add New Event</h1>
            <form>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    Description:
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </label>
                <br />
                <label>
                    Price:
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                </label>
                <br />
                <label>
                    Quantity:
                    <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                </label>
                <br />
                <button type="button" onClick={handleAddItem}>Add Item</button>
            </form>
        </div>
    );
}

// App component
function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/"><img src="whatandwherelogo.png" alt="Our Logo" /></Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Sign up</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <Route path="/signup">
                        <SignupPage />
                    </Route>
                    <Route path="/main">
                        <MainPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;