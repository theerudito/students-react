import "./App.css";
import { GetUsers } from "./Component/GetUsers";
import { UserProvider } from "./UserProvider/UserProvider";

function App() {
  return (
    <UserProvider>
      <div className="Principal">
        <GetUsers />
      </div>
    </UserProvider>
  );
}

export default App;
