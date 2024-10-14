import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
    return (
        <div>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />

                <main>
                    <Post
                        author="Lorem"
                        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, ratione perspiciatis distinctio porro neque ex quisquam nostrum dignissimos quae, vero maxime aspernatur asperiores consequatur aliquam totam ab reprehenderit error nobis."
                    />

                    <Post
                        author={"Mussum"}
                        content="Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi! Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Detraxit consequat et quo num tendi nada. Viva Forevis aptent taciti sociosqu ad litora torquent."
                    />
                </main>
            </div>
        </div>
    );
}
