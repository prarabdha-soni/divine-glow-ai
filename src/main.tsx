import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { checkAndClearCache } from "./utils/cacheManager";

// Check and clear cache if app version changed
checkAndClearCache();

createRoot(document.getElementById("root")!).render(<App />);
