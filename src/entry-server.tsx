import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppRoutes, Layout } from './App';

export function render(url: string) {
  const html = renderToString(
    <StaticRouter location={url}>
      <Layout>
        <AppRoutes />
      </Layout>
    </StaticRouter>
  );

  return { html };
}
