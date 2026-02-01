import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import useAuthStore from "./store/authStore";

const App = () => {
  const hydrate = useAuthStore((state) => state.hydrate);

  // 🔁 Restore login state on refresh
  useEffect(() => {
    hydrate();
  }, [hydrate]);

  return <AppRoutes />;
};

export default App;
