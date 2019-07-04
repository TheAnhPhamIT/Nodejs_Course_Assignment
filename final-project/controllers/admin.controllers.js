const productModel = require('../models/product')
const categoryModel = require('../models/category')
const userModel = require('../models/user')

exports.getAdminPage = (req, res) => {
  const promiseCountProduct = productModel.count()
  const promiseCountCategory = categoryModel.count()
  const promiseCountUser = userModel.count()

  Promise.all([
    promiseCountProduct,
    promiseCountCategory,
    promiseCountUser,
  ]).then(results => {
    const [productCount, categoryCount, userCount] = results
    res.render('admin', {
      productsTotal: productCount,
      categoriesTotal: categoryCount,
      usersTotal: userCount,
      ordersTotal: 0,
    })
  })
}

exports.getProductsPage = (req, res) => {
  productModel.find().then(products => {
    res.render('products', {
      products: products,
    })
  })
}

exports.getCategoriesPage = (req, res) => {
  categoryModel.find().then(categories => {
    res.render('categories', {
      categories: categories,
    })
  })
}

exports.getUsersPage = (req, res) => {
  userModel.find().then(users => {
    res.render('users', {
      users: users,
    })
  })
}

exports.getProductCreatePage = (req, res) => {
  res.render('productCreate')
}

exports.updateProduct = (req, res) => {
  productModel
    .update(req.body)
    .where('_id')
    .equals(req.params.id)
    .exec()
    .then(() => {
      res.redirect(`/admin/products/${req.params.id}`)
    })
}

exports.deleteProduct = (req, res) => {
  productModel
    .deleteOne()
    .where('_id')
    .equals(req.params.id)
    .exec()
    .then(() => {
      res.redirect('/admin/products')
    })
}

exports.createNewProduct = (req, res) => {
  console.log(req.file)
  const productDetails = req.body
  productDetails.thumbnail = req.file.originalname
  productDetails.image = req.file.originalname

  productModel.create(productDetails).then(() => {
    res.redirect('/admin/products')
  })
}

exports.getProductDetails = (req, res) => {
  productModel
    .findOne({})
    .where('_id')
    .equals(req.params.id)
    .exec()
    .then(product => {
      res.render('productDetails', {
        product: product,
      })
    })
}

exports.getUserDetails = (req, res) => {
  userModel
    .findOne({})
    .where('_id')
    .equals(req.params.id)
    .exec()
    .then(user => {
      res.render('usersDetails', {
        user: user,
      })
    })
}

exports.logout = (req, res) => {
  req.session.authenticated = false
  res.redirect('/')
}
