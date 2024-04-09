import { useLanguage } from './../hooks/useLanguage';
function Home() {
    const { language } = useLanguage();
    return ( 
        <>
            <h1> {language.home} </h1>
        </>
     );
}

export default Home;