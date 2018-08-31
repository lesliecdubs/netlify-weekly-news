// =================================================================================================
//
// HTML & Body
//
// ==================================================================================================
import React from 'react'
import faviconAppleTouch180 from './assets/images/favicons/apple-touch-icon-180x180.png'
import favicon32 from './assets/images/favicons/favicon-32x32.png'
import favicon16 from './assets/images/favicons/favicon-16x16.png'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

export default class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }

    return (
      <html {...this.props.htmlAttributes} lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="apple-touch-icon-precomposed" sizes="180x180" href={ faviconAppleTouch180 } />
          <link rel="icon" type="image/png" href={ favicon32 } sizes="32x32" />
          <link rel="icon" type="image/png" href={ favicon16 } sizes="16x16" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/amcharts/3.21.13/plugins/export/export.css" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/amcharts/3.21.13/amcharts.js" type="text/javascript"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/amcharts/3.21.13/pie.js" type="text/javascript"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/amcharts/3.21.13/serial.js" type="text/javascript"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/amcharts/3.21.13/themes/light.js" type="text/javascript"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/amcharts/3.21.13/plugins/export/export.min.js" type="text/javascript"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/amcharts/3.21.13/plugins/responsive/responsive.min.js" type="text/javascript"></script>
          {css}
          {this.props.headComponents}
        </head>

        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
