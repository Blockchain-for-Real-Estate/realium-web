const GenericEmailTemplate = (text) => {
  return `<!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width,initial-scale=1">
          <meta name="x-apple-disable-message-reformatting">
          <title>Realium</title>
      </head>
      <body>
        <p>${text}</p>
      </body>
    </html>`;
};

export default GenericEmailTemplate;
