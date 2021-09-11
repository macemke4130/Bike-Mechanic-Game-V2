import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Play from "./pages/Play";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
				<Link to="/play"><button>Click to play!</button></Link>
				</Route>
				<Route path="/play">
					<Play />
				</Route>
			</Switch>
		</Router>
	)
}

export default App;