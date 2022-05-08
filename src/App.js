import logo from "./logo.svg";
import "./App.css";
<img src={logo} className="App-logo" alt="logo" />;
function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <form class="flex items-center space-x-6">
        <div class="shrink-0">
          <img
            class="h-16 w-16 object-cover rounded-full"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
            alt="Current profile photo"
          />
        </div>
        <label class="block">
          <span class="sr-only">Choose profile photo</span>
          <input
            type="file"
            class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
          />
        </label>
      </form>

      <table class="border-collapse border border-slate-400 ...">
        <thead>
          <tr>
            <th class="border border-slate-300 ...">State</th>
            <th class="border border-slate-300 ...">City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-slate-300 ...">Indiana</td>
            <td class="border border-slate-300 ...">Indianapolis</td>
          </tr>
          <tr>
            <td class="border border-slate-300 ...">Ohio</td>
            <td class="border border-slate-300 ...">Columbus</td>
          </tr>
          <tr>
            <td class="border border-slate-300 ...">Michigan</td>
            <td class="border border-slate-300 ...">Detroit</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
