import React from 'react'
import FirstProduct from './containers/pages/Products/FirstProduct/FirstProduct.jsx'
import SecondProduct from './containers/pages/Products/SecondProduct/SecondProduct.jsx'
import AISolutionsBanner from './containers/pages/Products/AISolutionsBanner/AISolutionsBanner.jsx'
import ThirdProduct from './containers/pages/Products/ThirdProduct/ThirdProduct.jsx'        
import Footer from './containers/footer/Footer.jsx'

const ProductPage = () => {
  return (
    <div>
         <AISolutionsBanner />
      <FirstProduct />
      <SecondProduct />
        <ThirdProduct />
      <Footer />
    </div>
  )
}

export default ProductPage