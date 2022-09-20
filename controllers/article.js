import ArticleServices from "../services/article.js"

export const findAllArticles = async(req, res, next)=>{
try{
res.json(await ArticleServices.findAllArticles())
}
catch(err){
next(err)
}
}