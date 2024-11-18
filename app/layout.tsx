import { MainHeader } from '@/components';
import './globals.css';

export const metadata = {
  title: 'Next.js Page Routing & Rendering',
  description: 'Learn how to route to different pages.'
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body>
        <div id='page'>
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
