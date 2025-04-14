import {
  Link,
  Outlet,
  Route,
  Routes,
  // useNavigate,
  useParams,
} from "react-router";
import { Button } from "./components/ui/button";
import reactImage from "./assets/react.svg";

function App() {
  // const navigate = useNavigate();

  // setTimeout(() => {
  //   navigate("/");
  // }, 3000);

  return (
    <Routes>
      {/* Rota principal (/) */}
      <Route
        index
        element={
          <>
            <h1 className="font-bold text-2xl">Hello, world!</h1>

            <img src={reactImage} alt="React" />

            <Link to="/activities">
              <Button variant="link">Activities</Button>
            </Link>
          </>
        }
      />

      {/* Rotas /activities/* */}
      <Route path="activities" element={<ActivityLayout />}>
        {/* Rota /activities */}
        <Route
          index
          element={
            <>
              <h1>Activities</h1>

              <Link to="/activities/12345">Activity 12345</Link>
            </>
          }
        />

        {/* Rota /activities/12345 */}
        <Route path=":id" element={<ActivityPage />} />
      </Route>
    </Routes>
  );
}

function ActivityLayout() {
  return (
    <div>
      <header>
        <h1>Activity</h1>
      </header>

      <Outlet />
    </div>
  );
}

function ActivityPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Activity {id}</h1>
      <p>Details about the activity will go here.</p>
    </div>
  );
}

export default App;
