import React from "react"
import PropTypes from "prop-types"

import SEO from "Components/seo"

const BaseLayout = ({ children }) => (
  <>
    <SEO />
    {children}
  </>
)

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BaseLayout
