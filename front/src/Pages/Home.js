import { Grid, GridItem } from "@chakra-ui/react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Main from "../components/Content";
import Footer from "../components/Footer";

function Home({login, setLogin}) {

    return (
        <Grid templateAreas={`"header"
                              "nav"
                              "main"
                              "footer"
                                            `}>
            <GridItem area={'header'}>
                <Header/>
            </GridItem>
            <GridItem area={'nav'}>
                <Nav login={login} setLogin={setLogin}/>
            </GridItem>
            <GridItem area={'main'} minHeight="100vh">
                <Main/>
            </GridItem>
            <GridItem>
                <Footer/>
            </GridItem>
        </Grid>
    )
}

export default Home;