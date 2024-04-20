import { useLanguage } from './../hooks/useLanguage';
import { useData } from './../hooks/useData';
import { postNui } from './../utils/postNui';
function Home() {
    const { language } = useLanguage();
    const { data } = useData();
    postNui("myPostEvent", "Gidecek Data"); 
    return ( 
        <>
            <h1> {language.home} </h1>
            <p> {data.home.description} </p>
        </>
     );
}

export default Home;