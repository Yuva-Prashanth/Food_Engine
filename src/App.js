import React,{ useState} from "react";
import Products from "./Products";

const App = () => {
  const [search,setSearch] = useState('');
  const [data,SetData] = useState([]);
  const YOUR_APP_ID = "92ac6380";
  const YOUR_APP_KEY = "dc887578caa0221b709a6c866d6374b8";
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free
    `).then(
      response => response.json()
    ).then(
      data => SetData(data.hits)
    )
  }
  return (
    <div>
      <center>
        <h4>Food Recipe App</h4><br/>
        <form onSubmit = {submitHandler}>
          <input type = "text " value={search} onChange = {(e) => setSearch(e.target.value)}/> <br/>
          <input type = "submit" className="btn btn-primary" value = "Search" />
        </form>
        {data.length>=1 ? <Products data={data}/>: null}
      </center>
    </div>
  )
}

export default App;
