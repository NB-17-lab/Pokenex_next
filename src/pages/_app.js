import '../styles/globals.css'
import Base from "../components/Base";
import ProgressBar from "@badrap/bar-of-progress";
import {Router} from "next/router";


const loadProgress = new ProgressBar({
    size: 2,
    color: "#ff0044",
    className: "bar-of-progress",
    delay: 100,
})

Router.events.on("routeChangeStart", loadProgress.start);
Router.events.on("routeChangeComplete", loadProgress.finish);
Router.events.on("routeChangeError", loadProgress.finish);

function MyApp({ Component, pageProps }) {
  return <Base>
          <Component {...pageProps} />
        </Base>
}

export default MyApp
