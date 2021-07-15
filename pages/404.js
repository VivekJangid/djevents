import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "@/styles/404.module.css";
import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFoundPage() {
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h4>Page you Requested Doesn't Exist</h4>
        <Link href="/">Go Home</Link>
      </div>
    </Layout>
  );
}
