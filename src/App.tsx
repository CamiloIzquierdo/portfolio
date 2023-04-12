import { useRef } from "react";
import { MainLayout } from "./layout/MainLayout";
import { Header } from "./components/Header";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { MyProjects } from "./components/Projects/MyProjects";
import { Contacto } from "./components/Contact/Contacto";

function App() {
    const projectRef = useRef(null);
    const aboutMeRef = useRef(null);

    return (
        <MainLayout aboutMeRef={aboutMeRef} projectRef={projectRef}>
            <Header />
            <AboutMe aboutMeRef={aboutMeRef} />
            <MyProjects projectRef={projectRef} />
            <Contacto />
        </MainLayout>
    );
}

export default App;
