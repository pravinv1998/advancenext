import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// export const getServerSideProps = (context) => {
//   // console.log(process.env.SECRET_VARIABLE);
//   // console.log(process.env.NEXT_PUBLIC_MY_FIRST_SECRET_VARIABLE);

//   // context.res.write(JSON.stringify({ myname: "pravin vargad" }));
//   // context.res.end();

//   return {
//     // props: {},
//     redirect: {
//       destination: "https://youtube.com/",
//       permenent: true,
//     },
//   };
// };

export const getStaticProps = () => {
  return {
    props: { userCount: Math.random() },
    revalidate: 5,
  };
};

// export const getStaticPaths = () => {
//   return {
//     fallback: "blocking",
//     paths: [],
//   };
// };

export default function Home({ userCount }) {
  // console.log(process.env.SECRET_VARIABLE);
  // console.log(process.env.NEXT_PUBLIC_MY_FIRST_SECRET_VARIABLE);

  return (
    <div className={styles.container}>
      {/* <h1>Count is: {userCount} </h1> */}
      <Image src="/code.png" alt="code image" width={1280} height={720} />
    </div>
  );
}
