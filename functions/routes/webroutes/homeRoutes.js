const homeRoutes = require('express').Router()


homeRoutes.get('/index', (req, res)=>{
    const data = {title:'Index', userlogged:true}
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.set('Content-Security-Policy', 'default-src *; script-src *')
      res.render('homepages/index.hbs', data)
})

homeRoutes.get('/', (req, res)=>{
  const data = {title:'Home', userlogged:true}
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.render('homepages/index.hbs', data)
})

homeRoutes.get('/home', (req, res)=>{
  const data = {title:'Home', userlogged:true}
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.render('homepages/index.hbs', data)
})

homeRoutes.get('/login', (req, res)=>{
  const data = {title:'Login', userlogged:false}
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.render('homepages/login.hbs', data)
})

homeRoutes.get('/logoff', (req, res)=>{
  const data = {title:'Login', userlogged:false}
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.render('homepages/login.hbs', data)
})

homeRoutes.get('/planos', (req, res)=>{
  const data = {title:'Planos', userlogged:false}
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.render('homepages/planos.hbs', data)
})

homeRoutes.get('/teams', (req, res)=>{
  const data = {title:'Planos', userlogged:false}
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.render('homepages/desenvolvedores.hbs', data)
})

homeRoutes.get('/filmes', (req, res)=>{
  const data = {title:'Filmes', userlogged:false, filmes:{filme:{titulo:"Perdidos no espaço",descricao:"uma descrição qualquer", ano:"2017", duracao:"60min", preco:20.50},
  filme:{titulo:"Lua Sangrenta",descricao:"uma descrição qualquer", ano:"2013", duracao:"60min", preco:20.50},
  filme:{titulo:"Soldado rebelde",descricao:"uma descrição qualquer", ano:"2014", duracao:"60min", preco:20.50},
  filme:{titulo:"Ases ao vento", descricao:"uma descrição qualquer",ano:"2020", duracao:"60min", preco:20.50},
  filme:{titulo:"Arrebentando na disney",descricao:"uma descrição qualquer", ano:"2020", duracao:"60min", preco:20.50},
  filme:{titulo:"Juleu e Romieta",descricao:"uma descrição qualquer", ano:"2015", duracao:"60min", preco:20.50}}}
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.render('homepages/filmes.hbs', data)
})

homeRoutes.get('/cadastro', (req, res)=>{
  const data = {title:'Cadastro', userlogged:false,}
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.render('homepages/cadastro.hbs', data)
})




module.exports = homeRoutes