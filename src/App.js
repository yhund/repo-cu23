import { generateTitles, generateCredits } from './utils';
import './App.css';

function App() {
  const maxDatasetEntries = 123;
  let titles = [];
  let credits = [];

  function generateData() {

    for (let idx = 0; idx < maxDatasetEntries; idx++) {
      titles.push(generateTitles(idx));
    }

    titles.forEach(title => {
      credits.push(...generateCredits(title.id));
    });

    console.log(titles);
    console.log(credits);

    // to be sure that each title has related credits
    checkCreditsForTitle();
  }

  function checkCreditsForTitle() {
    titles.forEach(title => {
      let result = credits.filter((entity) => entity.title_id === title.id);
      console.log(`Title ${title.title} has ${result.length} credits`);
    });
  }

  checkCreditsForTitle();

  return (
    <div className="app">
      <button onClick={generateData} className="cta">
        Generate data
      </button>
    </div>
  );
}

export default App;
