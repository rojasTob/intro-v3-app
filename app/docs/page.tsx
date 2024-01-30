import styles from "./style.module.css";

const DocsPage = () => {
  return <div className={styles.title}>
      Docs Page
      <p className="text-black text-sm">This page use a css module for the title.</p>
      <p className="text-black text-sm">Try a dynamic route adding /here or /whatever in the path.</p>
    </div>
}

export default DocsPage;