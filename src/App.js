import './App.scss';
import NameAndHeadshot from './components/first-section';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
		<div className="App">
			<NameAndHeadshot />
			<div id="second-section">
				<h2>librarian to developer</h2>
				<h3>things I am passionate about</h3>
				<ul>
					<li>access to information</li>
					<li>preservation of data</li>
					<li>longevity of code</li>
				</ul>
			</div>
		</div>
	);
}

export default App;
