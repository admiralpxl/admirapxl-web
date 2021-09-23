import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Quicksand:wght@300;400&display=swap" rel="stylesheet" />
        </Head>
        <body className="container">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument