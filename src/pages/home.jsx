import { useLanguage } from './../hooks/useLanguage';
import { useData } from './../hooks/useData';
function Home() {
    const { language } = useLanguage();
    const { data } = useData();
    return ( 
        <>
            <h1> {language.home} </h1>
            <p> {data.home.description} </p>
        </>
     );
}

export default Home;