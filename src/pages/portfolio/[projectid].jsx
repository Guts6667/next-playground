import { useRouter } from "next/router";
   /**
     * How to extract a data to insert in the url?
     */
const PortfolioProjectPage = () => {
    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query);

    return(
        <div>
            <h1>THE PORTFOLIO PROJECT PAGE </h1>
        </div>
    )
}

export default PortfolioProjectPage;