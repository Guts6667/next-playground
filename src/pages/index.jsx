import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
// import Link from "next/link";
import { GetStaticProps } from "next";
const inter = Inter({ subsets: ["latin"] });

const HomePage = (props) => {
const { products } = props;

  return (
    <div className={styles.main}>
      <h1>HOME PAGE: NEXT PLAYGROUND</h1>
      <ul>
        {products.map((product) =>{
          return(
            <li key={product.id}></li>
          )
        } )}
      </ul>
    </div>
  );
}

export async function  GetStaticProps(){
  return { props: {
    products: [{id: "p1", title: "Product1"}],
  } }
}
export default HomePage;