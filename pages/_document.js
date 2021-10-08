import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Quicksand:wght@300;400&display=swap"
            rel="stylesheet"
          />
          <script
            src="https://kit.fontawesome.com/b2a05ad3f8.js"
            crossorigin="anonymous"
          ></script>
          <meta name="theme-color" content="#1f1f1f" />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="logotipo.png"
          ></link>
          <title>ADMIRALPXL | Junior Carrillo</title>
          <meta
            name="description"
            content="A programmer who love code the future."
          ></meta>
        </Head>
        <body className="container">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
