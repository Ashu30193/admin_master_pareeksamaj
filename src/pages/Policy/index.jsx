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
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          padding: '40px',
          textAlign: 'center'
        }}>
          <h1 style={{
            color: '#ffffff',
            fontSize: '32px',
            fontWeight: '700',
            margin: '0 0 10px 0',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            Privacy Policy
          </h1>
          <p style={{
            color: '#a0a0a0',
            fontSize: '16px',
            margin: 0
          }}>
            Pareek Samaj App - Terms and Conditions
          </p>
        </div>

        {/* Content */}
        <div style={{ padding: '40px' }}>
          <div style={{
            backgroundColor: '#f8f9fa',
            borderRadius: '12px',
            padding: '30px',
            marginBottom: '30px'
          }}>
            <p style={{
              color: '#555',
              fontSize: '15px',
              lineHeight: '1.8',
              margin: 0
            }}>
              Welcome to Pareek Samaj App. By using our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using the app.
            </p>
          </div>

          {/* Policy Items */}
          <div>
            {policies.map((policy, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  padding: '20px',
                  marginBottom: '15px',
                  backgroundColor: index % 2 === 0 ? '#f8f9fa' : '#ffffff',
                  borderRadius: '10px',
                  border: '1px solid #e9ecef',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  minWidth: '40px',
                  height: '40px',
                  backgroundColor: '#667eea',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '20px',
                  flexShrink: 0
                }}>
                  <span style={{
                    color: '#ffffff',
                    fontWeight: '700',
                    fontSize: '14px'
                  }}>
                    {index + 1}
                  </span>
                </div>
                <p style={{
                  color: '#333',
                  fontSize: '14px',
                  lineHeight: '1.7',
                  margin: 0,
                  fontWeight: '500'
                }}>
                  {policy}
                </p>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div style={{
            marginTop: '40px',
            padding: '25px',
            backgroundColor: '#fff3cd',
            borderRadius: '10px',
            borderLeft: '4px solid #ffc107'
          }}>
            <p style={{
              color: '#856404',
              fontSize: '14px',
              lineHeight: '1.6',
              margin: 0,
              fontWeight: '500'
            }}>
              <strong>Important Notice:</strong> By using the Pareek Samaj App, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions. The app reserves the right to modify these policies at any time without prior notice.
            </p>
          </div>

          {/* Contact Section */}
          <div style={{
            marginTop: '30px',
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderRadius: '10px'
          }}>
            <p style={{
              color: '#666',
              fontSize: '14px',
              margin: 0
            }}>
              For any queries or concerns, please contact us through the app support section.
            </p>
            <p style={{
              color: '#999',
              fontSize: '12px',
              marginTop: '15px',
              marginBottom: 0
            }}>
              &copy; {new Date().getFullYear()} Pareek Samaj. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
