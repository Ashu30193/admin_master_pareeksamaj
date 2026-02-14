import React from 'react';

const PrivacyPolicy = () => {
  const policies = [
    "IT IS YOUR SOLE RESPONSIBILITY OF THE FORM YOU FILLED IN THE PAREEK SAMAJ APP.",
    "YOU SHALL KEEP YOUR ACCESS DETAILS (USERNAME, PASSWORDS, ETC) SAFE AND NOT DISCLOSE THEM TO A THIRD PARTY OR PERMIT A THIRD PARTY TO USE YOUR PAREEK SAMAJ APP ACCOUNT.",
    "THE APP ISN'T RESPONSIBLE FOR THE SALARY/ AMOUNT FOR THE JOB YOU'RE HIRED/PROVIDED/ WORKING WITH THROUGH THE APP.",
    "THE APP ISN'T RESPONSIBLE IF THE PRODUCT IS DAMAGED/BROKEN AND THE AMOUNT/PRICE, YOU'RE SELLING/BUYING THROUGH THE APP, IT IS YOUR OWN RESPONSIBILITY.",
    "PAREEK SAMAJ APP IS ONLY A SERVICE PROVIDER.",
    "PAREEK SAMAJ APP WILL NOT BE RESPONSIBLE FOR ANY KIND OF TRANSACTIONS/DOCUMENTS/ BEHAVIOUR IN BOTH THE GIRL'S/BOY'S FAMILIES.",
    "PAREEK SAMAJ APP IS AVAILABLE FREE AND PAID BOTH, DEPENDING ON THE SERVICE YOU CHOOSE.",
    "THE AMOUNT YOU PAY FOR PAID SERVICES WILL NOT BE REFUNDABLE.",
    "THE VENUE WHERE THE EVENT IS BEING HELD MUST BE MENTIONED BY THE EVENT ORGANIZERS THE APP ISN'T RESPONSIBLE FOR THE VENUE DETAILS.",
    "THE EVENT TO BE UPLOADED ON THE APP, THE PERSON/ COMMITTEE WHO UPLOADS THE NEWS/ EVENT, IT'S THEIR RESPONSIBILITY THAT THERE MUST BE NO FAKE NEWS. IF YOU UPLOAD FAKE NEWS/EVENT, YOUR ACCOUNT WILL BE SUSPENDED/ BLOCKED FOR 30 DAYS.",
    "IF YOU WANT TO BECOME A MEMBER OF THE PAREEK SAMAJ APP, YOU WILL HAVE TO FILL THE \"COMPLETE\" FORM WITH \"CORRECT\" DETAILS. IF YOU FILL UP FAKE DETAILS (i.e ID, PROFILE PICTURE, ETC.), IT WON'T BE VALID.",
    "THE APP HAS THE AUTHORITY TO CHANGE/ DELETE THE FAKE NEWS/EVENT YOU UPLOAD.",
    "USER, PLEASE CHECK WITH ALL THE DETAILS BEFORE YOU CONTACT TO ANYONE FOR JOB/ BUSINESS/MATRIMONIAL/ EVENT RESPONSIBLY, THE APP ISN'T RESPONSIBLE FOR THIS.",
    "ANY LEGAL ACTION/PROCEEDINGS SHOULD BE DONE THROUGH HYDERABAD JUDICIAL ONLY."
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      fontFamily: '"Times New Roman", Times, Georgia, serif'
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#000000',
        padding: '60px 20px',
        textAlign: 'center',
        borderBottom: '4px solid #000000'
      }}>
        <h1 style={{
          color: '#ffffff',
          fontSize: '42px',
          fontWeight: '400',
          margin: 0,
          letterSpacing: '8px',
          textTransform: 'uppercase',
          fontFamily: '"Times New Roman", Times, Georgia, serif'
        }}>
          Privacy Policy
        </h1>
        <div style={{
          width: '80px',
          height: '2px',
          backgroundColor: '#ffffff',
          margin: '20px auto 0'
        }} />
        <p style={{
          color: '#cccccc',
          fontSize: '14px',
          marginTop: '15px',
          letterSpacing: '3px',
          textTransform: 'uppercase'
        }}>
          Pareek Samaj App
        </p>
      </header>

      {/* Content */}
      <main style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '60px 40px'
      }}>
        {/* Introduction */}
        <section style={{
          marginBottom: '50px',
          paddingBottom: '40px',
          borderBottom: '1px solid #e0e0e0'
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '400',
            color: '#000000',
            marginBottom: '20px',
            letterSpacing: '2px'
          }}>
            Terms & Conditions
          </h2>
          <p style={{
            color: '#333333',
            fontSize: '16px',
            lineHeight: '1.9',
            textAlign: 'justify'
          }}>
            Welcome to Pareek Samaj App. By accessing or using our services, you acknowledge
            that you have read, understood, and agree to be bound by the following terms and
            conditions. Please review them carefully before proceeding.
          </p>
        </section>

        {/* Policy Items */}
        <section>
          <ol style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            counterReset: 'policy-counter'
          }}>
            {policies.map((policy, index) => (
              <li
                key={index}
                style={{
                  display: 'flex',
                  marginBottom: '30px',
                  paddingBottom: '30px',
                  borderBottom: index < policies.length - 1 ? '1px solid #e8e8e8' : 'none'
                }}
              >
                <div style={{
                  minWidth: '50px',
                  height: '50px',
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: '400',
                  marginRight: '25px',
                  flexShrink: 0
                }}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p style={{
                  color: '#222222',
                  fontSize: '15px',
                  lineHeight: '1.8',
                  margin: 0,
                  textAlign: 'justify',
                  paddingTop: '12px'
                }}>
                  {policy}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Important Notice */}
        <section style={{
          marginTop: '50px',
          padding: '35px',
          backgroundColor: '#f8f8f8',
          border: '2px solid #000000'
        }}>
          <h3 style={{
            fontSize: '14px',
            fontWeight: '700',
            color: '#000000',
            marginBottom: '15px',
            letterSpacing: '3px',
            textTransform: 'uppercase'
          }}>
            Important Notice
          </h3>
          <p style={{
            color: '#333333',
            fontSize: '14px',
            lineHeight: '1.8',
            margin: 0,
            textAlign: 'justify'
          }}>
            By using the Pareek Samaj App, you acknowledge that you have read, understood,
            and agree to be bound by these terms and conditions. The app reserves the right
            to modify these policies at any time without prior notice. Continued use of the
            app following any changes constitutes acceptance of the revised terms.
          </p>
        </section>

        {/* Jurisdiction */}
        <section style={{
          marginTop: '40px',
          textAlign: 'center',
          padding: '30px',
          backgroundColor: '#000000'
        }}>
          <p style={{
            color: '#ffffff',
            fontSize: '13px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            margin: 0
          }}>
            Jurisdiction: Hyderabad, India
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#000000',
        padding: '40px 20px',
        textAlign: 'center',
        marginTop: '60px'
      }}>
        <p style={{
          color: '#888888',
          fontSize: '12px',
          letterSpacing: '2px',
          margin: 0
        }}>
          &copy; {new Date().getFullYear()} PAREEK SAMAJ. ALL RIGHTS RESERVED.
        </p>
        <p style={{
          color: '#666666',
          fontSize: '11px',
          marginTop: '10px',
          letterSpacing: '1px'
        }}>
          For queries, contact us through the app support section.
        </p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
