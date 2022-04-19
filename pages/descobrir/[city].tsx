import { useRouter } from "next/router";
import { PageTemplate, DishList} from "@/components";

import Styles from "../../styles/discovery.module.css";
import { api } from "@/services";
import { CityProps, ParamsStaticProps, PageDiscoverProps } from "@/types";
import Head from "next/head";

export default function Descobrir(props: PageDiscoverProps){
    const { city } = props;

    return(
        <>
            <Head>
                <title>{city.name} - OnFood App</title>
                <meta name="description" content={`As melhores opções de delivery em ${city.name}`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageTemplate>
                <div className={Styles.content}>
                    <h1>Opções na região de {city.name}</h1>
                    <p>Encontramos {city.catalogEstimated} opções</p>
                    <div className={Styles.items}>
                        <DishList citySlug={city.slug} />
                    </div>
                </div>
            </PageTemplate>
        </>
        
    )
}

export async function getStaticPaths(){
    const response = await api.get("/cities");

    const cities = response.data;

    const urls = cities.map((city: CityProps) => ({
        params: {
            city: city.slug,
        }
    }));

    return {
        paths: urls, 
        fallback: false
    };
}

export async function getStaticProps({params}: ParamsStaticProps){
    const citySlug = params?.city as string;
    const response = await api.get(`/cities?citySlug=${citySlug}`);

    const city = response.data;


    return {
        props: {
            city
        },
        revalidate: 30,
    }
}