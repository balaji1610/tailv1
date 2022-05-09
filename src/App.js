/* eslint-disable jsx-a11y/img-redundant-alt */
import logo from "./logo.svg";
import "./App.css";
<img src={logo} className="App-logo" alt="logo" />;
function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <hr />
      <div className="p-20 border-8 bg-purple-400 border-orange-100 hover:py-8 hover:bg-red-500">
        <p>Padding</p>
      </div>
      <section>
        <div className="float-left m-7 inline	">
          {" "}
          <h1>Container</h1>
        </div>
      </section>
      <section>
        {" "}
        <div class="card">
          <p>Card Title</p>
        </div>
      </section>
      <div class="columns-12 bg-green-400 border-4">
        <p>Columns 1</p>
        <p>Columns 2</p>
        <p>Columns 3</p>
        <p>Columns 4</p>
        <p>Columns 5</p>
        <p>Columns 6</p>
        <p>Columns 7</p>
        <p>Columns 8</p>
        <p>Columns 9</p>
        <p>Columns 10</p>
        <p>Columns 11</p>
        <p>Columns 12</p>
      </div>
      <hr />
      <div class="columns-2">
        <p>Well, let me tell you something, ...</p>
        <p class="break-after-all">Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>
    </div> // end
  );
}

export default App;
