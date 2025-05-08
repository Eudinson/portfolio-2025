import CacheBuster from "react-cache-buster";
import { version } from "../package.json";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <CacheBuster
      currentVersion={version}
      isEnabled={true} //If false, the library is disabled.
      isVerboseMode={false} //If true, the library writes verbose logs to console.
      metaFileDirectory={'.'} //If public assets are hosted somewhere other than root on your server.
      onCacheClear={() => {
        console.log('Cache has been cleared. Reloading...');
      }}
    >
      <RouterProvider router={routes} />
    </CacheBuster>
  )
}

export default App
