import './App.scss';
import headshot from './pictures/headshot.jpg';

function App() {
  return (
		<div className="App">
			<div id="first-section">
				<div id="top-section">
					<h3 id="title">front-end engineer</h3>
					<a>let's chat!/¡a janguiar!</a>
					{/* link opens module with contact me info*/}
				</div>
				<div id="name-and-headshot">
					<div>
						<h1 className="name">Laura</h1>
						<h1 className="name">Nemeth</h1>
					</div>
					<img
						className="headshot"
						src={headshot}
						alt="Headshot of Laura Nemeth, they stand in front of trees whilst wearing a colorful button up shirt"
					/>
				</div>
			</div>
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
