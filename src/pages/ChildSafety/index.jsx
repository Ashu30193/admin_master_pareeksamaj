import React from 'react';

const ChildSafety = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      color: '#1e293b',
      lineHeight: '1.7',
    },
    header: {
      background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
      padding: '60px 20px',
      textAlign: 'center',
      color: '#ffffff',
    },
    logo: {
      fontSize: '28px',
      fontWeight: '700',
      marginBottom: '16px',
      letterSpacing: '1px',
    },
    headerTitle: {
      fontSize: '32px',
      fontWeight: '700',
      marginBottom: '12px',
      textShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    headerSubtitle: {
      fontSize: '18px',
      opacity: '0.95',
      maxWidth: '600px',
      margin: '0 auto',
    },
    main: {
      maxWidth: '900px',
      margin: '0 auto',
      padding: '40px 20px 60px',
    },
    alertBox: {
      background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
      color: '#ffffff',
      padding: '24px 30px',
      borderRadius: '12px',
      marginBottom: '40px',
      boxShadow: '0 4px 15px rgba(220, 38, 38, 0.3)',
    },
    alertTitle: {
      fontSize: '20px',
      fontWeight: '700',
      marginBottom: '10px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    alertText: {
      fontSize: '15px',
      lineHeight: '1.6',
      opacity: '0.95',
    },
    section: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '30px',
      marginBottom: '24px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      border: '1px solid #e2e8f0',
    },
    sectionTitle: {
      fontSize: '22px',
      fontWeight: '700',
      color: '#1e3a8a',
      marginBottom: '20px',
      paddingBottom: '12px',
      borderBottom: '3px solid #3b82f6',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    icon: {
      fontSize: '24px',
    },
    paragraph: {
      fontSize: '15px',
      color: '#475569',
      marginBottom: '16px',
    },
    list: {
      listStyle: 'none',
      padding: '0',
      margin: '0',
    },
    listItem: {
      padding: '12px 0 12px 32px',
      position: 'relative',
      fontSize: '15px',
      color: '#475569',
      borderBottom: '1px solid #f1f5f9',
    },
    listItemBullet: {
      position: 'absolute',
      left: '0',
      top: '12px',
      width: '20px',
      height: '20px',
      backgroundColor: '#3b82f6',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      fontSize: '12px',
      fontWeight: '700',
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '20px',
      marginTop: '20px',
    },
    contactCard: {
      backgroundColor: '#f8fafc',
      padding: '24px',
      borderRadius: '10px',
      border: '1px solid #e2e8f0',
    },
    contactLabel: {
      fontSize: '13px',
      fontWeight: '600',
      color: '#64748b',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      marginBottom: '8px',
    },
    contactValue: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#1e3a8a',
    },
    link: {
      color: '#3b82f6',
      textDecoration: 'none',
    },
    footer: {
      backgroundColor: '#1e293b',
      color: '#94a3b8',
      padding: '40px 20px',
      textAlign: 'center',
    },
    footerLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '30px',
      marginBottom: '20px',
      flexWrap: 'wrap',
    },
    footerLink: {
      color: '#94a3b8',
      textDecoration: 'none',
      fontSize: '14px',
      transition: 'color 0.2s',
    },
    footerText: {
      fontSize: '14px',
      marginTop: '16px',
    },
    badge: {
      display: 'inline-block',
      backgroundColor: '#dcfce7',
      color: '#166534',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '13px',
      fontWeight: '600',
      marginLeft: '10px',
    },
    enforcementList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '16px',
      marginTop: '16px',
    },
    enforcementItem: {
      backgroundColor: '#fef2f2',
      padding: '16px 20px',
      borderRadius: '8px',
      borderLeft: '4px solid #dc2626',
      fontSize: '14px',
      fontWeight: '500',
      color: '#991b1b',
    },
    preventionItem: {
      backgroundColor: '#f0fdf4',
      padding: '16px 20px',
      borderRadius: '8px',
      borderLeft: '4px solid #16a34a',
      fontSize: '14px',
      fontWeight: '500',
      color: '#166534',
    },
    lastUpdated: {
      textAlign: 'center',
      color: '#64748b',
      fontSize: '14px',
      marginTop: '30px',
      paddingTop: '20px',
      borderTop: '1px solid #e2e8f0',
    },
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>PAREEK SAMAJ</div>
        <h1 style={styles.headerTitle}>Child Safety Standards</h1>
        <p style={styles.headerSubtitle}>
          Our commitment to protecting children and maintaining a safe community platform
        </p>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        {/* Zero Tolerance Alert */}
        <div style={styles.alertBox}>
          <div style={styles.alertTitle}>
            <span>⚠️</span>
            Zero Tolerance Policy
          </div>
          <p style={styles.alertText}>
            Pareek Samaj maintains a <strong>ZERO TOLERANCE</strong> policy against Child Sexual Abuse and Exploitation (CSAE)
            and Child Sexual Abuse Material (CSAM). Any content, behavior, or activity that exploits, endangers, or sexualizes
            minors is strictly prohibited and will result in immediate action, including account termination and reporting to
            law enforcement authorities.
          </p>
        </div>

        {/* Child Safety Standards Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <span style={styles.icon}>🛡️</span>
            Child Safety Standards (CSAE)
          </h2>
          <p style={styles.paragraph}>
            Pareek Samaj is committed to creating a safe environment for all users, with special emphasis on protecting children
            from abuse and exploitation. Our Child Safety Standards are designed to prevent, detect, and respond to any form of
            child sexual abuse and exploitation (CSAE).
          </p>
          <p style={styles.paragraph}>
            <strong>The following activities are strictly prohibited on our platform:</strong>
          </p>
          <ul style={styles.list}>
            {[
              'Any content depicting, promoting, or facilitating child sexual abuse or exploitation',
              'Child Sexual Abuse Material (CSAM) of any kind, including drawings or digitally generated content',
              'Grooming behaviors or inappropriate communication with minors',
              'Solicitation or trafficking of minors',
              'Sharing, requesting, or distributing intimate images of minors',
              'Any content that sexualizes or endangers children',
              'Using the platform to contact minors for inappropriate purposes',
            ].map((item, index) => (
              <li key={index} style={styles.listItem}>
                <span style={styles.listItemBullet}>✕</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Reporting Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <span style={styles.icon}>📢</span>
            Reporting Instructions
          </h2>
          <p style={styles.paragraph}>
            If you encounter any content or behavior that violates our Child Safety Standards, please report it immediately
            using one of the following methods:
          </p>

          <div style={styles.contactGrid}>
            <div style={styles.contactCard}>
              <div style={styles.contactLabel}>In-App Reporting</div>
              <p style={{ ...styles.paragraph, marginBottom: '0' }}>
                Use the <strong>"Report"</strong> button available on every profile, post, and message.
                Select <strong>"Child Safety Concern"</strong> or <strong>"CSAE/CSAM"</strong> as the reason.
                Our team will review immediately.
              </p>
            </div>
            <div style={styles.contactCard}>
              <div style={styles.contactLabel}>Email Reporting</div>
              <p style={{ ...styles.paragraph, marginBottom: '8px' }}>
                Send detailed reports directly to our safety team:
              </p>
              <a href="mailto:support@pareeksamaj.com" style={{ ...styles.contactValue, ...styles.link }}>
                support@pareeksamaj.com
              </a>
              <p style={{ ...styles.paragraph, marginBottom: '0', marginTop: '8px', fontSize: '13px' }}>
                Include: Description, username(s), screenshots if available
              </p>
            </div>
          </div>

          <p style={{ ...styles.paragraph, marginTop: '20px', fontStyle: 'italic' }}>
            All reports are treated with strict confidentiality. You may report anonymously.
          </p>
        </section>

        {/* Enforcement Actions Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <span style={styles.icon}>⚖️</span>
            Enforcement Actions
          </h2>
          <p style={styles.paragraph}>
            Violations of our Child Safety Standards will result in immediate and severe enforcement actions:
          </p>
          <div style={styles.enforcementList}>
            <div style={styles.enforcementItem}>
              <strong>🗑️ Content Removal</strong><br />
              Immediate removal of all violating content
            </div>
            <div style={styles.enforcementItem}>
              <strong>🚫 Account Suspension</strong><br />
              Temporary or permanent account suspension
            </div>
            <div style={styles.enforcementItem}>
              <strong>⛔ Permanent Ban</strong><br />
              Lifetime ban from the platform
            </div>
            <div style={styles.enforcementItem}>
              <strong>👮 Law Enforcement</strong><br />
              Reporting to authorities when required by law
            </div>
          </div>
          <p style={{ ...styles.paragraph, marginTop: '20px' }}>
            We cooperate fully with law enforcement agencies and will report any suspected illegal activity involving
            minors to the appropriate authorities, including the National Center for Missing & Exploited Children (NCMEC)
            and local law enforcement.
          </p>
        </section>

        {/* Moderation & Prevention Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <span style={styles.icon}>🔍</span>
            Moderation & Prevention
          </h2>
          <p style={styles.paragraph}>
            We employ multiple layers of protection to prevent child exploitation on our platform:
          </p>
          <div style={styles.enforcementList}>
            <div style={styles.preventionItem}>
              <strong>👁️ Manual Review</strong><br />
              Human moderators review flagged content 24/7
            </div>
            <div style={styles.preventionItem}>
              <strong>📝 User Reporting</strong><br />
              Easy-to-use reporting tools on all content
            </div>
            <div style={styles.preventionItem}>
              <strong>🚷 Blocking Tools</strong><br />
              Users can block and restrict unwanted contacts
            </div>
            <div style={styles.preventionItem}>
              <strong>🔒 Privacy Controls</strong><br />
              Robust privacy settings for user protection
            </div>
          </div>
          <p style={{ ...styles.paragraph, marginTop: '20px' }}>
            Our moderation team is trained to identify and respond to potential child safety issues.
            We continuously improve our detection methods and safety measures to stay ahead of potential threats.
          </p>
        </section>

        {/* Contact Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <span style={styles.icon}>📞</span>
            Contact Us
          </h2>
          <p style={styles.paragraph}>
            For any questions, concerns, or reports regarding child safety on our platform:
          </p>
          <div style={styles.contactGrid}>
            <div style={styles.contactCard}>
              <div style={styles.contactLabel}>Support Email</div>
              <a href="mailto:support@pareeksamaj.com" style={{ ...styles.contactValue, ...styles.link }}>
                support@pareeksamaj.com
              </a>
            </div>
            <div style={styles.contactCard}>
              <div style={styles.contactLabel}>Response Time</div>
              <div style={styles.contactValue}>
                24–48 Hours
                <span style={styles.badge}>Priority for CSAE</span>
              </div>
            </div>
            <div style={styles.contactCard}>
              <div style={styles.contactLabel}>Website</div>
              <a href="https://pareeksamaj.in" style={{ ...styles.contactValue, ...styles.link }} target="_blank" rel="noopener noreferrer">
                pareeksamaj.in
              </a>
            </div>
            <div style={styles.contactCard}>
              <div style={styles.contactLabel}>Emergency</div>
              <div style={styles.contactValue}>
                Contact local law enforcement
              </div>
            </div>
          </div>
          <p style={{ ...styles.paragraph, marginTop: '20px', textAlign: 'center', fontWeight: '500' }}>
            Child safety reports are given highest priority and are reviewed immediately.
          </p>
        </section>

        {/* Terms & Privacy Note */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <span style={styles.icon}>📄</span>
            Terms of Use & Privacy
          </h2>
          <p style={styles.paragraph}>
            By using Pareek Samaj, you agree to comply with our Child Safety Standards and all applicable laws
            regarding child protection. Users must be at least 18 years old to create an account on our platform.
          </p>
          <p style={styles.paragraph}>
            We are committed to protecting user privacy while maintaining a safe community. For complete details:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <span style={{ ...styles.listItemBullet, backgroundColor: '#6366f1' }}>→</span>
              <a href="/privacy-policy" style={styles.link}>Privacy Policy</a> – How we collect, use, and protect your data
            </li>
            <li style={styles.listItem}>
              <span style={{ ...styles.listItemBullet, backgroundColor: '#6366f1' }}>→</span>
              <a href="/terms" style={styles.link}>Terms of Service</a> – Rules and guidelines for using our platform
            </li>
            <li style={styles.listItem}>
              <span style={{ ...styles.listItemBullet, backgroundColor: '#6366f1' }}>→</span>
              <a href="/community-guidelines" style={styles.link}>Community Guidelines</a> – Standards for community behavior
            </li>
          </ul>
        </section>

        {/* Last Updated */}
        <div style={styles.lastUpdated}>
          <strong>Last Updated:</strong> February 2026 | <strong>Version:</strong> 1.0
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerLinks}>
          <a href="/privacy-policy" style={styles.footerLink}>Privacy Policy</a>
          <a href="/terms" style={styles.footerLink}>Terms of Service</a>
          <a href="/child-safety" style={styles.footerLink}>Child Safety</a>
          <a href="mailto:support@pareeksamaj.com" style={styles.footerLink}>Contact Us</a>
        </div>
        <p style={styles.footerText}>
          © {new Date().getFullYear()} Pareek Samaj. All rights reserved.
        </p>
        <p style={{ ...styles.footerText, fontSize: '12px', marginTop: '10px' }}>
          Committed to community safety and child protection.
        </p>
      </footer>
    </div>
  );
};

export default ChildSafety;
