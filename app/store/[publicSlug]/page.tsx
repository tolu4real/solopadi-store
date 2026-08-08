import { supabase } from '@/lib/supabase';

type PageProps = {
  params: Promise<{
    publicSlug: string;
  }>;
};

export default async function StorePage({
  params,
}: PageProps) {
  const { publicSlug } = await params;

  const { data: vendor, error } = await supabase
    .from('vendors')
    .select(
      'id, business_name, full_name, phone, address, public_slug',
    )
    .eq('public_slug', publicSlug)
    .maybeSingle();

  if (error) {
    return (
      <main style={styles.center}>
        <h1>Something went wrong</h1>
        <p>Please try again later.</p>
      </main>
    );
  }

  if (!vendor) {
    return (
      <main style={styles.center}>
        <div style={styles.icon}>🏪</div>
        <h1>Store not found</h1>
        <p>
          This SoloPadi store link is no longer available.
        </p>
      </main>
    );
  }

  return (
    <main style={styles.page}>
      <div style={styles.card}>
        <div style={styles.logo}>🏪</div>

        <h1>{vendor.business_name}</h1>

        <p style={styles.subtitle}>
          Order directly from {vendor.business_name}
        </p>

        {vendor.address && (
          <p style={styles.info}>
            📍 {vendor.address}
          </p>
        )}

        {vendor.phone && (
          <p style={styles.info}>
            📞 {vendor.phone}
          </p>
        )}

        <div style={styles.divider} />

        <h2>Place Your Order</h2>

        <p style={styles.description}>
          Enter your details and order information below.
        </p>

        <form style={styles.form}>
          <input
            placeholder="Your name"
            required
            style={styles.input}
          />

          <input
            placeholder="Phone number"
            type="tel"
            required
            style={styles.input}
          />

          <input
            placeholder="WhatsApp number"
            type="tel"
            style={styles.input}
          />

          <input
            placeholder="Delivery address"
            required
            style={styles.input}
          />

          <textarea
            placeholder="What would you like to order?"
            required
            rows={4}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Confirm Order
          </button>
        </form>

        <p style={styles.powered}>
          Powered by <strong>SoloPadi</strong>
        </p>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    background: '#f8fafc',
    padding: '40px 20px',
  },

  card: {
    maxWidth: '520px',
    margin: '0 auto',
    background: '#ffffff',
    borderRadius: '28px',
    padding: '32px',
    boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
  },

  logo: {
    width: '72px',
    height: '72px',
    borderRadius: '50%',
    background: '#e8f8ee',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '36px',
    margin: '0 auto 18px',
  },

  center: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '30px',
  },

  icon: {
    fontSize: '50px',
    marginBottom: '15px',
  },

  subtitle: {
    textAlign: 'center',
    color: '#64748b',
    marginBottom: '20px',
  },

  info: {
    color: '#475569',
    margin: '8px 0',
  },

  divider: {
    height: '1px',
    background: '#e2e8f0',
    margin: '25px 0',
  },

  description: {
    color: '#64748b',
    marginBottom: '20px',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },

  input: {
    width: '100%',
    boxSizing: 'border-box',
    padding: '15px',
    borderRadius: '14px',
    border: '1px solid #e2e8f0',
    fontSize: '15px',
    outline: 'none',
  },

  button: {
    border: 'none',
    borderRadius: '14px',
    padding: '16px',
    background: '#16a34a',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },

  powered: {
    textAlign: 'center',
    color: '#94a3b8',
    fontSize: '13px',
    marginTop: '25px',
  },
};