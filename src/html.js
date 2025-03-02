/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html lang="en" {...props.htmlAttributes}>
      <head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta charSet="UTF-8" />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta
          content="WoD Community Portal, Juyter, JupyterHub, Knowledge Transfer, Workshop on Demand"
          name="keywords"
        />
        <meta httpEquiv="Content-Language" content="en" />
        <meta content="support" name="lifecycle" />
        <meta name="robots" content="follow, index" />
        <meta name="segment" content="corporate" />
        <meta name="target_country" content="ww" />
        <meta name="web_section_id" content="R11852" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta content="CORP" name="bu" />
        <meta content="products" name="page_content" />
        {props.headComponents}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            #site-branding {
              left: 15px;
            }`,
          }}
        />
      </head>
      <body style={{ margin: 0 }} {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div id="header_wrapper">
          { }
        </div>
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {}
        {props.postBodyComponents}
        { }
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
