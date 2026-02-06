import 'pittorica';
import '@fontsource-variable/inter';
import '@fontsource/fugaz-one';

import { I18nextProvider } from 'react-i18next';

import {
  isRouteErrorResponse,
  Links,
  type LoaderFunctionArgs,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from 'react-router';

import { PittoricaTheme } from '@pittorica/react';

import './app.css';

import type { Route } from './+types/root';

import i18n from '~/translations';

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];

function getLocale(request: Request): string {
  const url = new URL(request.url);
  if (url.searchParams.has('lang')) {
    return url.searchParams.get('lang') === 'it' ? 'it' : 'en';
  }

  const acceptLanguage = request.headers.get('Accept-Language');
  if (acceptLanguage?.includes('it')) {
    return 'it';
  }

  // Default
  return 'en';
}

export async function loader({ request }: LoaderFunctionArgs) {
  const locale = getLocale(request);
  return { locale };
}

export function Layout({ children }: { children: React.ReactNode }) {
  // Lang/Locales
  const { locale } = useLoaderData<typeof loader>();
  if (i18n.language !== locale) {
    i18n.changeLanguage(locale);
  }

  return (
    <I18nextProvider i18n={i18n}>
      <html lang={locale}>
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=no"
          />
          <Meta />
          <Links />
        </head>
        <body className="pittorica-theme" data-appearance="light">
          <PittoricaTheme appearance="light">{children}</PittoricaTheme>
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    </I18nextProvider>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
