import './App.css'
import PollWidget from './PollLibrary/PollWidget'

const options = [
  {
    label: 'Vue',
    value: 'vue',
    votes: 0
  },
  {
    label: 'React',
    value: 'react',
    votes: 0
  },
  {
    label: 'Angular',
    value: 'angular',
    votes: 0
  }
]

function App() {
  return (
    <div className="App">
      <PollWidget
        description={<div style={{ fontWeight: 600, fontSize: '18px' }}>Which is the best JavaScript framework or library?</div>}
        options={options}
        style={{ margin: '5rem auto' }}
      />
    </div>
  );
}

export default App;
