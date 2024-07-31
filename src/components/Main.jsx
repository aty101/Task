import { Articles } from "./Articles";
import { News } from "./News";
import { WebBox } from "./WebBox";
import "../styles/Main.css"
export function Main(){
    return <main>
        <section className="upperPart">
            <WebBox></WebBox>
            <News></News>
            </section>
            <section className="lowerPart">
            <Articles></Articles>
            </section>
    </main>
}