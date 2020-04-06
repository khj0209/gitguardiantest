// This is a sample production configuration. Actual production configuration is auto-generated by CI.
export const environment = {
  production: true,
  hipEditApiPrefix: '<API_URL>',
  stomp: {
    server: {
      host: '<ACTIVEMQ_HOST>',
      port: 61614,
      headers: {
        login: '<consumer>',
        passcode: '<consumer_password>',
      },
      domain: 'HipEdit.Editor',
    }
  }
};