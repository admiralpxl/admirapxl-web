import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {


  render() {
    const url = "https://lh3.googleusercontent.com/AtHJlbBO22Yldqt5lvK_XZTMenO7qRpr4Eyvx7rrrUz-fQD-Z_QEAEchn9XdwooMyHSmfc8R9lCVlHBhLZHXhCmUGnkpYz1gB8w26_qkK-6YPQmQjpKR_IYDlvISSh6P8HhnhNfvinjKELDZs2AphLPF_CNOzKOViK06mxbA4A9DIQKX0aGmv4axVsDEhVUdJUCio93Ng8M6XNV4a45VUp-p0OzO9r0lnQ8lb1jVANHcqddXi_PzHM8DWbwk01uliVQk9EiZfQaRj7Y0YglZ68WRbcLx5OxvYMibsmE9yxR1_ynyAE2dxTWlietJPSuh_pIn8_aAs1dTkBx-gPAbRYgWaZi28TtsvT501HzK-S6Zx9ZP6KTpTnkf6MpHkFcxv0MYM5DyVctBKCEymj2CBGLgCO3JUkUBzpktVnYOXGj0U2veYlIzzinzoTXWRS39Okpe9wwXx8xi4aBVW635xg5-muBWbDFI1pxyM9HKnrnPfuQrkwEMBH5TiD3gL3FS-6YdPfiiZOTQnc6p8N9hrpTakTt7kfqXWwFAsBdwXyPGef7SzpF5r61KE3As8NEfCQBcCsg1I28eNlxjSpwWj7bdczdRoCwm9jDprwX526WDT3gnZxLO7iv8G8qe6NonFeePGbdS6PRlhWB0fnEz-cWwftyyc3uShKpRa8uI8ElMcoYHywWKWeGmGdF3khyDgc1-dbnZeU127KlvID421o0=s80-no?authuser=1";
    return (
      <Html>
        <Head>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Quicksand:wght@300;400&display=swap" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/b2a05ad3f8.js" crossorigin="anonymous"></script>
        <meta name="theme-color" content="#1f1f1f"/>
        <link rel="icon" type="image/png" sizes="16x16" href={ url }></link>
        <title> Admiralpxl </title>
        <meta name="description" content="A minimalist programmer who love the challenge"></meta>
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