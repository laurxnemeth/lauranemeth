import './App.scss';
import NameAndHeadshot from './components/NameAndHeadshot';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import WorkExamples from './components/WorkExamples';

function App() {
  return (
		<div className="App">
			<Header />
			<div className="pegao">
				<NameAndHeadshot />
				<WorkExamples />
			</div>
		</div>
	);
}

export default App;
