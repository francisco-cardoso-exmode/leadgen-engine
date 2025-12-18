import StyledComponentsRegistry from '@/lib/registry';
import ThemeProvider from '@/components/ThemeProvider';

export const metadata = {
  title: 'LeadGen Engine',
  description: 'Intelligent lead generation through personas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}