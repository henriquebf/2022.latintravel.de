import type { AppProps } from 'next/app';
import colors from '@/config/colors.json';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div id="app">
      <Component {...pageProps} />
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,600,700,800');

        html,
        body {
          width: 100%;
          height: 100%;
          padding: 0;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          letter-spacing: 0.001em;
        }

        html {
          box-sizing: border-box;
          font-family: 'Roboto', Helvetica;
          font-size: 1.2em;
          font-weight: 300;
          line-height: 1.5;
          color: ${colors.light.text_primary_color};
          background-color: ${colors.light.bg_primary_color};
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        a:hover {
          color: ${colors.light.text_active_color};
          text-decoration: none;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        b {
          font-weight: 500;
        }

        * {
          box-sizing: border-box;
        }

        ul,
        ul li,
        ul ul li {
          margin: 0;
          padding: 0;
          text-indent: 0;
          list-style-type: none;
        }

        #app {
          height: 100%;
        }
      `}</style>
    </div>
  );
}

export default MyApp;
