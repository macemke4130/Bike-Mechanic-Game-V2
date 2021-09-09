import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Hello from "./components/Hello";

function App() {
  return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Hello />
				</Route>
				<Route path="/play">
					<div>This is the game page</div>
				</Route>
			</Switch>
		</Router>
  )
}

export default App;