import Link from 'next/link';
import ArrowIcon from '@/components/pmj/ArrowIcon';

export const metadata = {
  title: '404 — Page Not Found | PT Padas Mustapa Jaya',
};

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 32px',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: 560 }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--pmj-red)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            marginBottom: 24,
          }}
        >
          Error 404
        </div>

        <h1
          style={{
            fontSize: 'clamp(40px, 6vw, 80px)',
            fontWeight: 600,
            letterSpacing: '-0.03em',
            lineHeight: 1,
            color: 'var(--pmj-ink)',
            margin: '0 0 20px',
          }}
        >
          Page not found.
        </h1>

        <p
          style={{
            fontSize: 18,
            color: 'var(--pmj-gray-700)',
            lineHeight: 1.6,
            margin: '0 0 40px',
          }}
        >
          The page you are looking for does not exist.
        </p>

        <Link href="/" className="pmj-btn pmj-btn-primary">
          Back to home
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
