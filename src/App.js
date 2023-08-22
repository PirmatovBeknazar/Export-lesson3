import './App.css';
import Text from './Component/Text';
function App() {
  const users= [
    {
      userName:"Asan",
      age: 22,
      country: "Kyrgyzstan",
      date: new Date('2021,2,2'),

    },
    {
      userName:"Uson",
      age: 19,
      country: "Kyrgyzstan",
      date: new Date('2001,3,3'),

    },
    {
      userName:"Mbappe",
      age: 32,
      country: "France",
      date: new Date('2002,5,5'),

    },
    {
      userName:"Asan",
      age: 22,
      country: "France",
      date: new Date('2023,6,6'),
      
    },
  ]



  const date = new Date()
  console.log(date.getDate());

  return (
    <div className="App">
      {
        users.map((el)=>{
          return <Text key={el.userName} userName={el.userName} date={el.date} age={el.age} country={el.country} date2={el.date2} />
          
        })
      }
    </div>
    
  );
}

export default App;
